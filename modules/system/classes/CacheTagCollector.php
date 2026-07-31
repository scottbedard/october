<?php namespace System\Classes;

use App;

/**
 * CacheTagCollector accumulates cache tags for the current request response.
 *
 * @package october\system
 * @author Alexey Bobkov, Samuel Georges
 */
class CacheTagCollector
{
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
     * add one or more cache tags for the current response
     */
    public function add(string ...$tags): void
    {
        foreach ($tags as $tag) {
            if ($tag !== '' && !in_array($tag, $this->tags, true)) {
                $this->tags[] = $tag;
            }
        }
    }

    /**
     * all returns collected tags as a CSV string
     */
    public function all(): string
    {
        return implode(',', $this->tags);
    }
}
