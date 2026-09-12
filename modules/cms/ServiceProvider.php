<?php namespace Cms;

use Event;
use Backend;
use BackendAuth;
use Cms\Models\ThemeLog;
use Cms\Models\ThemeData;
use Cms\Classes\Theme;
use Cms\Classes\CmsObject;
use Cms\Classes\Page as CmsPage;
use Cms\Classes\ThemeManager;
use Cms\Classes\CmsObjectCache;
use Cms\Widgets\PageLookup;
use Cms\Widgets\SnippetLookup;
use Backend\Models\UserRole;
use Backend\Classes\Controller as BackendController;
use System\Classes\SettingsManager;
use October\Rain\Support\ModuleServiceProvider;

/**
 * ServiceProvider for CMS module
 */
class ServiceProvider extends ModuleServiceProvider
{
    /**
     * register the service provider.
     */
    public function register()
    {
        parent::register('cms');

        $this->registerSingletons();
        $this->registerThemeLogging();
        $this->registerCombinerEvents();
        $this->registerThemeSiteEvents();
        $this->registerThemeTranslations();
        $this->registerConsole();
        $this->registerRenamedClasses();

        CmsObjectCache::flush();

        // Backend specific
        if ($this->app->runningInBackend() || $this->app->runningInOctane()) {
            $this->registerPageLookupInstance();
        }
    }

    /**
     * boot the module events.
     */
    public function boot()
    {
        parent::boot('cms');

        $this->bootEditorEvents();
        $this->bootPageLookupEvents();
    }

    /**
     * registerSingletons
     */
    protected function registerSingletons()
    {
        $this->app->singleton('cms.helper', \Cms\Helpers\Cms::class);
        $this->app->singleton('cms.components', \Cms\Classes\ComponentManager::class);
        $this->app->singleton('cms.snippets', \Cms\Classes\SnippetManager::class);
        $this->app->singleton('cms.themes', \Cms\Classes\ThemeManager::class);
    }

    /**
     * registerConsole for command line specifics
     */
    protected function registerConsole()
    {
        $this->discoverConsoleCommands('cms');
    }

    /**
     * registerComponents
     */
    public function registerComponents()
    {
        return [
           \Cms\Components\ViewBag::class => 'viewBag',
           \Cms\Components\Resources::class => 'resources',
           \Cms\Components\SitePicker::class => 'sitePicker',
           \Cms\Components\TranslatableBag::class => 'translatable'
        ];
    }

    /**
     * registerThemeLogging on templates
     */
    protected function registerThemeLogging()
    {
        CmsObject::extend(function ($model) {
            ThemeLog::bindEventsToModel($model);
        });
    }

    /**
     * registerCombinerEvents for the asset combiner.
     */
    protected function registerCombinerEvents()
    {
        if ($this->app->runningInBackend() || $this->app->runningInConsole()) {
            return;
        }

        Event::listen('cms.combiner.beforePrepare', function ($combiner, $assets) {
            $filters = array_flatten($combiner->getFilters());
            ThemeData::applyAssetVariablesToCombinerFilters($filters);
        });

        Event::listen('cms.combiner.getCacheKey', function ($combiner, &$cacheKey) {
            $cacheKey = $cacheKey . ThemeData::getCombinerCacheKey();
        });

        Event::listen('cms.template.getTemplateToolbarSettingsButtons', function ($extension, $dataHolder) {
            if ($dataHolder->templateType !== 'page') {
                return;
            }

            dd('hello');

            $dataHolder->buttons[] = [
                'button' => 'Hello',
                'icon' => 'icon-magic',
                'popupTitle' => 'My Page Settings',
                'useViewBag' => true, // false = store in page settings instead
                'properties' => [
                    'myField' => [
                        'title' => 'My Field',
                        'type' => 'string',
                    ],
                ],
            ];
        });
    }

    /**
     * registerThemeSiteEvents will reset the cache in case of a race condition where
     * the theme is accessed before the site is set.
     */
    protected function registerThemeSiteEvents()
    {
        Event::listen('site.changed', function() {
            Theme::resetCache();
            ThemeManager::instance()->bootAll();
        });
    }

    /**
     * registerThemeTranslations localization from an active theme.
     */
    protected function registerThemeTranslations()
    {
        $this->callAfterResolving('translator', function() {
            ThemeManager::instance()->bootAll();
        });
    }

    /**
     * registerPermissions
     */
    public function registerPermissions()
    {
        return [
            // General
            'general.view_offline' => [
                'label' => 'View Website During Maintenance',
                'tab' => 'General',
                'order' => 100
            ],

            // Editor
            'editor.cms_content' => [
                'label' => 'Manage Content',
                'comment' => 'cms::lang.permissions.manage_content',
                'tab' => 'Editor',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 200
            ],
            'editor.cms_assets' => [
                'label' => 'Manage Asset Files',
                'comment' => 'cms::lang.permissions.manage_assets',
                'tab' => 'Editor',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 300
            ],
            'editor.cms_langs' => [
                'label' => 'Manage Language Files',
                'comment' => 'cms::lang.permissions.manage_langs',
                'tab' => 'Editor',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 350
            ],
            'editor.cms_pages' => [
                'label' => 'Manage Pages',
                'comment' => 'cms::lang.permissions.manage_pages',
                'tab' => 'Editor',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 400
            ],
            'editor.cms_partials' => [
                'label' => 'Manage Partials',
                'comment' => 'cms::lang.permissions.manage_partials',
                'tab' => 'Editor',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 500
            ],
            'editor.cms_layouts' => [
                'label' => 'Manage Layouts',
                'comment' => 'cms::lang.permissions.manage_layouts',
                'tab' => 'Editor',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 600
            ],

            // Themes
            'cms.themes' => [
                'label' => 'Manage Themes',
                'comment' => 'cms::lang.permissions.manage_themes',
                'tab' => 'Themes',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 300
            ],
            'cms.themes.create' => [
                'label' => 'Create Theme',
                'tab' => 'Themes',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 400
            ],
            'cms.themes.activate' => [
                'label' => 'Activate Theme',
                'tab' => 'Themes',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 600
            ],
            'cms.themes.delete' => [
                'label' => 'Delete Theme',
                'tab' => 'Themes',
                'roles' => UserRole::CODE_DEVELOPER,
                'order' => 600
            ],
            'cms.maintenance_mode' => [
                'label' => 'Manage Maintenance Mode',
                'tab' => 'Themes',
                'order' => 900
            ],
            'cms.theme_customize' => [
                'label' => 'Customize Theme',
                'comment' => 'cms::lang.permissions.manage_theme_options',
                'tab' => 'Themes',
                'order' => 400
            ],
        ];
    }

    /**
     * registerFormWidgets
     */
    public function registerFormWidgets()
    {
        return [
            \Cms\FormWidgets\PageFinder::class => 'pagefinder'
        ];
    }

    /**
     * registerMarkupTags
     */
    public function registerMarkupTags()
    {
        return [
            'filters' => [
                'link' => [\Cms\Classes\PageManager::class, 'url', false],
            ],
            'functions' => [
                'link' => [\Cms\Classes\PageManager::class, 'resolve', false],
            ]
        ];
    }

    /**
     * registerSettings
     */
    public function registerSettings()
    {
        return [
            'theme' => [
                'label' => 'Site Theme',
                'description' => 'Manage the front-end theme and customization options.',
                'category' => SettingsManager::CATEGORY_CMS,
                'icon' => 'ph ph-monitor',
                'url' => Backend::url('cms/themes'),
                'permissions' => ['cms.themes', 'cms.theme_customize'],
                'order' => 300
            ],
            'maintenance_settings' => [
                'label' => 'Maintenance Mode',
                'description' => 'Configure the maintenance mode page and toggle the setting.',
                'category' => SettingsManager::CATEGORY_CMS,
                'icon' => 'icon-power',
                'class' => \Cms\Models\MaintenanceSetting::class,
                'permissions' => ['cms.maintenance_mode'],
                'order' => 400
            ],
            'theme_logs' => [
                'label' => 'cms::lang.theme_log.menu_label',
                'description' => 'cms::lang.theme_log.menu_description',
                'category' => SettingsManager::CATEGORY_LOGS,
                'icon' => 'icon-magic',
                'url' => Backend::url('cms/themelogs'),
                'permissions' => ['utilities.logs'],
                'order' => 910,
                'keywords' => 'theme change log'
            ],
        ];
    }

    /**
     * bootPageLookupEvents
     */
    protected function bootPageLookupEvents()
    {
        Event::listen(['cms.pageLookup.listTypes', 'pages.menuitem.listTypes'], function () {
            return [
                'cms-page' => 'CMS Page'
            ];
        });

        Event::listen(['cms.pageLookup.getTypeInfo', 'pages.menuitem.getTypeInfo'], function ($type) {
            if ($type === 'cms-page') {
                return CmsPage::getMenuTypeInfo($type);
            }
        });

        Event::listen(['cms.pageLookup.resolveItem', 'pages.menuitem.resolveItem'], function ($type, $item, $url, $theme) {
            if ($type === 'cms-page') {
                return CmsPage::resolveMenuItem($item, $url, $theme);
            }
        });
    }

    /**
     * bootEditorEvents handles editor events
     */
    protected function bootEditorEvents()
    {
        Event::listen('editor.extension.register', function () {
            return \Cms\Classes\EditorExtension::class;
        });

        Event::listen('cms.template.extendTemplateSettingsFields', function ($extension, $dataHolder) {
            if ($dataHolder->templateType !== 'page') {
                return;
            }

            $dataHolder->settings[] = [
                'description' => 'Cache the full page when possible and serve it from the edge.',
                'property' => 'edge_caching',
                'tab' => 'Meta',
                'title' => 'Edge caching',
                'type' => 'checkbox',
            ];

            $dataHolder->settings[] = [
                'description' => 'Maximum number of minutes to cache the page for.',
                'placeholder' => '1440',
                'property' => 'edge_caching_ttl',
                'tab' => 'Meta',
                'title' => 'Cache TTL',
                'type' => 'string',
                'validation' => [
                    'integer' => [
                        'allowNegative' => false,
                        'message' => 'Enter a whole number of minutes.',
                        'min' => [
                            'message' => 'Enter at least 1 minute.',
                            'value' => 1,
                        ],
                    ],
                ],
                'visibility' => [
                    'source_property' => 'settings.edge_caching',
                    'value' => 1,
                ],
            ];
        });
    }

    /**
     * registerPageLookupInstance ensures page lookup widget is available on all backend pages
     */
    protected function registerPageLookupInstance()
    {
        BackendController::extend(function($controller) {
            if (BackendAuth::getUser()) {
                $manager = new PageLookup($controller, ['alias' => 'ocpagelookup']);
                $manager->bindToController();

                $manager = new SnippetLookup($controller, ['alias' => 'ocsnippetlookup']);
                $manager->bindToController();
            }
        });
    }

    /**
     * registerRenamedClasses
     */
    protected function registerRenamedClasses()
    {
        $this->app->registerClassAliases([
            \Cms\Classes\PageLookup::class => \Cms\Classes\PageManager::class,
        ]);
    }
}
