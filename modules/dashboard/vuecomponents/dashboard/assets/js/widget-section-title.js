Vue.component('dashboard-component-dashboard-widget-sectiontitle', {
    extends: Vue.options.components['dashboard-component-dashboard-widget-base'],
    data: function () {
        return {
        }
    },
    computed: {
        title: function () {
            let result = this.widget.configuration.title;

            if (this.widget.configuration.showInterval) {
                result += ': ' + this.store.state.intervalName;
            }

            return result;
        }
    },
    methods: {
        makeDefaultConfigAndData: function () {
            const sizing = Dashboard_Classes_Sizing.instance();

            Vue.set(this.widget.configuration, 'title', oc.t("Section"));
            Vue.set(this.widget.configuration, 'showInterval', false);
            Vue.set(this.widget.configuration, 'width', sizing.totalColumns);
        },

        getSettingsConfiguration: function () {
            const result = [{
                property: 'title',
                title: oc.t("Title"),
                type: 'string',
                validation: {
                    required: {
                        message: oc.t("Please provide the widget title"),
                    }
                }
            }];

            result.push({
                property: 'showInterval',
                title: oc.t("Show Date Interval"),
                type: 'checkbox'
            });

            return result;
        }
    },
    template: '#dashboard_vuecomponents_dashboard_widget_section_title'
});
