/*
 * This file has been compiled from: /modules/system/lang/lv/client.php
 */
if (!window.oc) {
    window.oc = {};
}

if (!window.oc.langMessages) {
    window.oc.langMessages = {};
}

window.oc.langMessages['lv'] = $.extend(
    window.oc.langMessages['lv'] || {},
    {
    "markdowneditor": {
        "formatting": "Formatting",
        "quote": "Quote",
        "code": "Code",
        "header1": "Header 1",
        "header2": "Header 2",
        "header3": "Header 3",
        "header4": "Header 4",
        "header5": "Header 5",
        "header6": "Header 6",
        "bold": "Bold",
        "italic": "Italic",
        "unorderedlist": "Unordered List",
        "orderedlist": "Ordered List",
        "snippet": "Snippet",
        "video": "Video",
        "image": "Image",
        "link": "Link",
        "horizontalrule": "Insert Horizontal Rule",
        "fullscreen": "Full Screen",
        "preview": "Preview",
        "strikethrough": "Strikethrough",
        "cleanblock": "Clean Block",
        "table": "Table",
        "sidebyside": "Side by Side"
    },
    "mediamanager": {
        "insert_link": "Insert Media Link",
        "insert_image": "Insert Media Image",
        "insert_video": "Insert Media Video",
        "insert_audio": "Insert Media Audio",
        "invalid_file_empty_insert": "Please select file to insert a links to.",
        "invalid_file_single_insert": "Please select a single file.",
        "invalid_image_empty_insert": "Please select image(s) to insert.",
        "invalid_video_empty_insert": "Please select a video file to insert.",
        "invalid_audio_empty_insert": "Please select an audio file to insert."
    },
    "alert": {
        "error": "Error",
        "confirm": "Confirm",
        "dismiss": "Dismiss",
        "confirm_button_text": "OK",
        "cancel_button_text": "Cancel",
        "widget_remove_confirm": "Remove this widget?"
    },
    "datepicker": {
        "previousMonth": "Previous Month",
        "nextMonth": "Next Month",
        "months": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "weekdays": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "weekdaysShort": [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ]
    },
    "colorpicker": {
        "choose": "OK"
    },
    "filter": {
        "group": {
            "all": "all"
        },
        "scopes": {
            "apply_button_text": "Apply",
            "clear_button_text": "Clear"
        },
        "dates": {
            "all": "all",
            "filter_button_text": "Filter",
            "reset_button_text": "Reset",
            "date_placeholder": "Date",
            "after_placeholder": "After",
            "before_placeholder": "Before"
        },
        "numbers": {
            "all": "all",
            "filter_button_text": "Filter",
            "reset_button_text": "Reset",
            "min_placeholder": "Min",
            "max_placeholder": "Max",
            "number_placeholder": "N\u00famero"
        }
    },
    "eventlog": {
        "show_stacktrace": "Show the stacktrace",
        "hide_stacktrace": "Hide the stacktrace",
        "tabs": {
            "formatted": "Formatted",
            "raw": "Raw"
        },
        "editor": {
            "title": "Source Code Editor",
            "description": "Your operating system should be configured to listen to one of these URL schemes.",
            "openWith": "Open with",
            "remember_choice": "Remember selected option for this session",
            "open": "Open",
            "cancel": "Cancel",
            "rememberChoice": "Recuerde la opci\u00f3n seleccionada para esta sesi\u00f3n del navegador"
        }
    },
    "upload": {
        "max_files": "You can not upload any more files.",
        "invalid_file_type": "You can't upload files of this type.",
        "file_too_big": "File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.",
        "response_error": "Server responded with {{statusCode}} code.",
        "remove_file": "Remove file"
    },
    "inspector": {
        "add": "Add",
        "remove": "Remove",
        "key": "Key",
        "value": "Value",
        "ok": "OK",
        "cancel": "Cancel",
        "items": "Items"
    },
    "[not set]": "[not set]",
    "1 day (today) if not set": "1 day (today) if not set",
    "Apply": "Apply",
    "Ascending": "Ascending",
    "Attribute": "Attribute",
    "Bar": "Bar",
    "Chart": "Chart",
    "Chart type": "Chart type",
    "Color": "Color",
    "Compare Totals": "Compare Totals",
    "Configure": "Configure",
    "Custom": "Custom",
    "Dashboard interval": "Dashboard interval",
    "Data source": "Data source",
    "Date interval": "Date interval",
    "Day": "Day",
    "Delete": "Delete",
    "Delete Dashboard": "Delete Dashboard",
    "Delete row": "Delete row",
    "Descending": "Descending",
    "Dimension": "Dimension",
    "Direction": "Direction",
    "Disabled": "Disabled",
    "Display": "Display",
    "Display [not set]": "Display [not set]",
    "Display all records": "Display all records",
    "Display relative bars": "Display relative bars",
    "Display totals": "Display totals",
    "Edit Dashboard": "Edit Dashboard",
    "Empty values": "Empty values",
    "Enter a positive number": "Enter a positive number",
    "Enter a positive number or leave empty to display all records.": "Enter a positive number or leave empty to display all records.",
    "Equal to": "Equal to",
    "Export Dashboard": "Export Dashboard",
    "Extra table fields": "Extra table fields",
    "Filters": "Filters",
    "General": "General",
    "Greater or equal to": "Greater or equal to",
    "Greater than": "Greater than",
    "Hide": "Hide",
    "Horizontal": "Horizontal",
    "Icon": "Icon",
    "Icon Status": "Icon Status",
    "Important": "Important",
    "Includes": "Includes",
    "Indicator": "Indicator",
    "Information": "Information",
    "Last 30 days": "Last 30 days",
    "Last 7 days": "Last 7 days",
    "Last month": "Last month",
    "Leave empty to disable pagination": "Leave empty to disable pagination",
    "Leave empty to hide the title": "Leave empty to hide the title",
    "Less or equal to": "Less or equal to",
    "Less than": "Less than",
    "Limit": "Limit",
    "Line": "Line",
    "Link Text": "Link Text",
    "Link URL": "Link URL",
    "Make Default": "Make Default",
    "Manage Dashboards": "Manage Dashboards",
    "Metric": "Metric",
    "Metrics": "Metrics",
    "Month": "Month",
    "My Custom Widget": "My Custom Widget",
    "No Value": "No Value",
    "Notice text": "Notice text",
    "Number of days": "Number of days",
    "One of": "One of",
    "One value per line": "One value per line",
    "Operation": "Operation",
    "Order": "Order",
    "Past hour": "Past hour",
    "Past X days": "Past X days",
    "Please provide the widget title": "Please provide the widget title",
    "Please select a data source": "Please select a data source",
    "Please select a dimension": "Please select a dimension",
    "Please select an icon": "Please select an icon",
    "Please select metric(s).": "Please select metric(s).",
    "Prev period": "Prev period",
    "Quarter": "Quarter",
    "Records per page": "Records per page",
    "Refresh every minute": "Refresh every minute",
    "Rename Dashboard": "Rename Dashboard",
    "Reset Layout": "Reset Layout",
    "Reset layout back to default?": "Reset layout back to default?",
    "Same period last year": "Same period last year",
    "Section": "Section",
    "Section Title": "Section Title",
    "Select a dimension and metrics": "Select a dimension and metrics",
    "Select an attribute": "Select an attribute",
    "Select an operation": "Select an operation",
    "Select sorting metric or dimension": "Select sorting metric or dimension",
    "Select the metric color": "Select the metric color",
    "Set the current layout as the default?": "Set the current layout as the default?",
    "Show Date Interval": "Show Date Interval",
    "Sort by": "Sort by",
    "Sorting": "Sorting",
    "Sorting & Filtering": "Sorting & Filtering",
    "Stacked Bar": "Stacked Bar",
    "Starts with": "Starts with",
    "Success": "Success",
    "Table": "Table",
    "Text Notice": "Text Notice",
    "The dashboard layout has been reset to default.": "The dashboard layout has been reset to default.",
    "The dashboard was successfully updated.": "The dashboard was successfully updated.",
    "The limit value must be at least 1": "The limit value must be at least 1",
    "This dashboard is now the default layout.": "This dashboard is now the default layout.",
    "This is a text notice widget.": "This is a text notice widget.",
    "This month": "This month",
    "This quarter": "This quarter",
    "This week": "This week",
    "This year": "This year",
    "Title": "Title",
    "Today": "Today",
    "Value": "Value",
    "Values": "Values",
    "Vertical": "Vertical",
    "Warning": "Warning",
    "Week": "Week",
    "Year": "Year",
    "Yesterday": "Yesterday"
}
);


//! moment.js locale configuration v2.22.2

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var units = {
        'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'h': 'stundas_stundām_stunda_stundas'.split('_'),
        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
        'd': 'dienas_dienām_diena_dienas'.split('_'),
        'dd': 'dienas_dienām_diena_dienas'.split('_'),
        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minūte", "3 minūtes".
            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minūtes" as in "pēc 21 minūtes".
            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
    }

    var lv = moment.defineLocale('lv', {
        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Šodien pulksten] LT',
            nextDay : '[Rīt pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[Pagājušā] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pēc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            ss : relativeTimeWithPlural,
            m : relativeTimeWithSingular,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithSingular,
            hh : relativeTimeWithPlural,
            d : relativeTimeWithSingular,
            dd : relativeTimeWithPlural,
            M : relativeTimeWithSingular,
            MM : relativeTimeWithPlural,
            y : relativeTimeWithSingular,
            yy : relativeTimeWithPlural
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lv;

})));


/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */

!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/lv",[],function(){function e(e,n,u,i){return 11===e?n:e%10==1?u:i}return{inputTooLong:function(n){var u=n.input.length-n.maximum,i="Lūdzu ievadiet par  "+u;return(i+=" simbol"+e(u,"iem","u","iem"))+" mazāk"},inputTooShort:function(n){var u=n.minimum-n.input.length,i="Lūdzu ievadiet vēl "+u;return i+=" simbol"+e(u,"us","u","us")},loadingMore:function(){return"Datu ielāde…"},maximumSelected:function(n){var u="Jūs varat izvēlēties ne vairāk kā "+n.maximum;return u+=" element"+e(n.maximum,"us","u","us")},noResults:function(){return"Sakritību nav"},searching:function(){return"Meklēšana…"},removeAllItems:function(){return"Noņemt visus vienumus"}}}),e.define,e.require}();
