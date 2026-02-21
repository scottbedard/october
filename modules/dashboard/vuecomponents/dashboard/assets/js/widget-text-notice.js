Vue.component('dashboard-component-dashboard-widget-textnotice', {
    extends: Vue.options.components['dashboard-component-dashboard-widget-base'],
    data: function () {
        return {
        }
    },
    computed: {
    },
    methods: {
        makeDefaultConfigAndData: function () {
            Vue.set(this.widget.configuration, 'title', oc.t("Text Notice"));
            Vue.set(this.widget.configuration, 'notice', oc.t("This is a text notice widget."));
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
                property: 'notice',
                title: oc.t("Notice text"),
                type: 'text',
            });

            return result;
        }
    },
    template: '#dashboard_vuecomponents_dashboard_widget_text_notice'
});
