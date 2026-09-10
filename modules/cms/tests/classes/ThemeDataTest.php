<?php

use Cms\Classes\Theme;
use Cms\Models\ThemeData;
use October\Rain\Database\Schema\Blueprint;

class ThemeDataTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        ThemeData::clearInternalCache();

        if (!Schema::hasTable('cms_theme_data')) {
            Schema::create('cms_theme_data', function (Blueprint $table) {
                $table->increments('id');
                $table->string('theme')->nullable()->index();
                $table->mediumText('data')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * testAutoJsonable
     */
    public function testAutoJsonable()
    {
        $theme = Theme::load('test')->getCustomData();

        $this->assertTrue($theme->isJsonable('nestedform'));
        $this->assertTrue($theme->isJsonable('breakdown'));
        $this->assertTrue($theme->isJsonable('nested'));
    }

    /**
     * testForThemeCachesQueryResult
     */
    public function testForThemeCachesQueryResult()
    {
        $theme = Theme::load('test');
        $cacheKey = (new ThemeData)->getCacheKey($theme->getDirName());
        Cache::forget($cacheKey);

        ThemeData::forTheme($theme);
        ThemeData::clearInternalCache();

        $themeData = ThemeData::forTheme($theme);

        $this->assertTrue($themeData->exists);
        $this->assertTrue(Cache::has($cacheKey));
    }

    /**
     * testClearCacheForgetsStoredResult
     */
    public function testClearCacheForgetsStoredResult()
    {
        $theme = Theme::load('test');
        $themeData = ThemeData::forTheme($theme);
        $cacheKey = $themeData->getCacheKey();

        $this->assertTrue(Cache::has($cacheKey));

        $themeData->clearCache();

        $this->assertFalse(Cache::has($cacheKey));
        $this->assertArrayNotHasKey($theme->getDirName(), $this->getThemeDataInstances());
    }

    /**
     * testDeleteDoesNotReturnStaleCachedModel
     */
    public function testDeleteDoesNotReturnStaleCachedModel()
    {
        $theme = Theme::load('test');
        $themeData = ThemeData::forTheme($theme);
        $deletedId = $themeData->id;

        $this->assertTrue((bool) $themeData->delete());
        $this->assertNull(ThemeData::find($deletedId));

        ThemeData::clearInternalCache();
        $reloaded = ThemeData::forTheme($theme);

        $this->assertTrue($reloaded->exists);
        $this->assertNotEquals($deletedId, $reloaded->id);
    }

    /**
     * getThemeDataInstances
     */
    protected function getThemeDataInstances(): array
    {
        $property = new ReflectionProperty(ThemeData::class, 'instances');
        $property->setAccessible(true);

        return $property->getValue();
    }
}
