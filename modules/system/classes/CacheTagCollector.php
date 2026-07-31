<?php namespace System\Classes;

use App;
use Log;

/**
 * CacheTagCollector accumulates cache tags for the current request response.
 *
 * @package october\system
 * @author Alexey Bobkov, Samuel Georges
 */
class CacheTagCollector
{
    /**
     * @var bool whether the current response is cacheable
     */
    protected $cacheable = false;

    /**
     * @var array tags collected for the response
     */
    protected $tags = [];

    /**
     * instance creates a new instance of this singleton
     */
    public static function instance(): static
    {
        return App::make('system.cacheTags');
    }

    /**
     * setCacheable marks whether the current response may include cache headers
     */
    public function setCacheable(bool $cacheable = true): void
    {
        $this->cacheable = $cacheable;
    }

    /**
     * add one or more cache tags for the current response
     */
    public function add(string ...$tags): void
    {
        foreach ($tags as $tag) {
            // ascii visible characters only (33–126), excluding commas
            if ($tag === '' || !preg_match('/^[\x21-\x2B\x2D-\x7E]+$/', $tag)) {
                Log::warning("CacheTagCollector: '{$tag}' is invalid, this response couldn't be cached.");
                $this->cacheable = false;
                continue;
            }

            if (!in_array($tag, $this->tags, true)) {
                $this->tags[] = $tag;
            }
        }
    }

    /**
     * count returns the number of collected tags
     */
    public function count(): int
    {
        return count($this->tags);
    }

    /**
     * csv returns collected tags as a CSV string
     */
    public function csv(): string
    {
        return implode(',', $this->tags);
    }

    /**
     * isCacheable returns whether the current response can include cache tags
     */
    public function isCacheable(): bool
    {
        $count = $this->count();

        if ($count < 1 || $count > 50) {
            return false;
        }

        return $this->cacheable;
    }
}
