/*
 * This file has been compiled from: /modules/system/lang/be/client.php
 */
if (!window.oc) {
    window.oc = {};
}

if (!window.oc.langMessages) {
    window.oc.langMessages = {};
}

window.oc.langMessages['be'] = $.extend(
    window.oc.langMessages['be'] || {},
    {
    "markdowneditor": {
        "formatting": "\u0424\u0430\u0440\u043c\u0430\u0442\u0430\u0432\u0430\u043d\u043d\u0435",
        "quote": "\u0426\u044b\u0442\u0430\u0442\u0430",
        "code": "\u041a\u043e\u0434",
        "header1": "\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a 1",
        "header2": "\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a 2",
        "header3": "\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a 3",
        "header4": "\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a 4",
        "header5": "\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a 5",
        "header6": "\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a 6",
        "bold": "\u0422\u043e\u045e\u0441\u0442\u044b \u0448\u0440\u044b\u0444\u0442",
        "italic": "\u041a\u0443\u0440\u0441\u0456\u045e",
        "unorderedlist": "\u041d\u0435\u0441\u0430\u0440\u0442\u0430\u0432\u0430\u043d\u044b \u043b\u0456\u0441\u0442",
        "orderedlist": "\u0421\u0430\u0440\u0442\u0430\u0432\u0430\u043d\u044b \u043b\u0456\u0441\u0442",
        "snippet": "Snippet",
        "video": "\u0412\u0456\u0434\u044d\u0430",
        "image": "\u0412\u044b\u044f\u0432\u0430",
        "link": "\u0421\u043f\u0430\u0441\u044b\u043b\u043a\u0430",
        "horizontalrule": "Insert Horizontal Rul",
        "fullscreen": "\u041f\u043e\u045e\u043d\u044b \u044d\u043a\u0440\u0430\u043d",
        "preview": "\u041f\u0440\u0430\u0434\u043f\u0440\u0430\u0433\u043b\u044f\u0434",
        "strikethrough": "Strikethrough",
        "cleanblock": "Clean Block",
        "table": "Table",
        "sidebyside": "Side by Side"
    },
    "mediamanager": {
        "insert_link": "\u0423\u0441\u0442\u0430\u0432\u0456\u0446\u044c \u043c\u0435\u0434\u044b\u044f \u0441\u043f\u0430\u0441\u044b\u043b\u043a\u0443",
        "insert_image": "\u0423\u0441\u0442\u0430\u0432\u0456\u0446\u044c \u043c\u0435\u0434\u044b\u044f \u0432\u044b\u044f\u0432\u0443",
        "insert_video": "\u0423\u0441\u0442\u0430\u0432\u0456\u0446\u044c \u043c\u0435\u0434\u044b\u044f \u0432\u0456\u0434\u044d\u0430",
        "insert_audio": "\u0423\u0441\u0442\u0430\u0432\u0456\u0446\u044c \u043c\u0435\u0434\u044b\u044f \u0430\u045e\u0434\u044b\u0451",
        "invalid_file_empty_insert": "\u041a\u0430\u043b\u0456 \u043b\u0430\u0441\u043a\u0430, \u0432\u044b\u0431\u0435\u0440\u044b\u0446\u0435 \u0444\u0430\u0439\u043b, \u043a\u0430\u0431 \u0443\u0441\u0442\u0430\u0432\u0456\u0446\u044c \u0441\u043f\u0430\u0441\u044b\u043b\u043a\u0443",
        "invalid_file_single_insert": "\u041a\u0430\u043b\u0456 \u043b\u0430\u0441\u043a\u0430, \u0432\u044b\u0431\u0435\u0440\u044b\u0446\u0435 \u0430\u0434\u0437\u0456\u043d \u0444\u0430\u0439\u043b",
        "invalid_image_empty_insert": "\u041a\u0430\u043b\u0456 \u043b\u0430\u0441\u043a\u0430, \u0432\u044b\u0431\u0435\u0440\u044b\u0446\u0435 \u0432\u044b\u044f\u0432\u044b, \u043a\u0430\u0431 \u0443\u0441\u0442\u0430\u0432\u0456\u0446\u044c",
        "invalid_video_empty_insert": "\u041a\u0430\u043b\u0456 \u043b\u0430\u0441\u043a\u0430, \u0432\u044b\u0431\u0435\u0440\u044b\u0446\u0435 \u0432\u0456\u0434\u044d\u0430 \u0444\u0430\u0439\u043b, \u043a\u0430\u0431 \u0443\u0441\u0442\u0430\u0432\u0456\u0446\u044c",
        "invalid_audio_empty_insert": "\u041a\u0430\u043b\u0456 \u043b\u0430\u0441\u043a\u0430, \u0432\u044b\u0431\u0435\u0440\u044b\u0446\u0435 \u0430\u045e\u0434\u044b\u0451 \u0444\u0430\u0439\u043b, \u043a\u0430\u0431 \u0443\u0441\u0442\u0430\u0432\u0456\u0446\u044c"
    },
    "alert": {
        "error": "Error",
        "confirm": "Confirm",
        "dismiss": "Dismiss",
        "confirm_button_text": "\u0414\u043e\u0431\u0440\u0430",
        "cancel_button_text": "\u0410\u0434\u043c\u0435\u043d\u0430",
        "widget_remove_confirm": "Remove this widget?"
    },
    "datepicker": {
        "previousMonth": "\u041f\u0430\u043f\u044f\u0440\u044d\u0434\u043d\u0456 \u043c\u0435\u0441\u044f\u0446",
        "nextMonth": "\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u044b \u043c\u0435\u0441\u044f\u0446",
        "months": [
            "\u0421\u0442\u0443\u0434\u0437\u0435\u043d\u044c",
            "\u041b\u044e\u0442\u044b",
            "\u0421\u0430\u043a\u0430\u0432\u0456\u043a",
            "\u041a\u0440\u0430\u0441\u0430\u0432\u0456\u043a",
            "\u0422\u0440\u0430\u0432\u0435\u043d\u044c",
            "\u0427\u044d\u0440\u0432\u0435\u043d\u044c",
            "\u041b\u0456\u043f\u0435\u043d\u044c",
            "\u0416\u043d\u0456\u0432\u0435\u043d\u044c",
            "\u0412\u0435\u0440\u0430\u0441\u0435\u043d\u044c",
            "\u041a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a",
            "\u041b\u0456\u0441\u0442\u0430\u043f\u0430\u0434",
            "\u0421\u043d\u0435\u0436\u0430\u043d\u044c"
        ],
        "weekdays": [
            "\u041d\u044f\u0434\u0437\u0435\u043b\u044f",
            "\u041f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a",
            "\u0410\u045e\u0442\u043e\u0440\u0430\u043a",
            "\u0421\u0435\u0440\u0430\u0434\u0430",
            "\u0427\u0430\u0446\u0432\u0435\u0440",
            "\u041f\u044f\u0442\u043d\u0456\u0446\u0430",
            "\u0421\u0443\u0431\u043e\u0442\u0430"
        ],
        "weekdaysShort": [
            "\u041d\u0434",
            "\u041f\u043d",
            "\u0410\u045e\u0442",
            "\u0421\u0440",
            "\u0427\u0430\u0446\u0432",
            "\u041f\u043d",
            "\u0421\u0431"
        ]
    },
    "colorpicker": {
        "choose": "OK"
    },
    "filter": {
        "group": {
            "all": "\u045e\u0441\u0435"
        },
        "scopes": {
            "apply_button_text": "Apply",
            "clear_button_text": "Clear"
        },
        "dates": {
            "all": "\u045e\u0441\u0435",
            "filter_button_text": "\u0424\u0456\u043b\u044c\u0442\u0440",
            "reset_button_text": "\u0421\u043a\u0456\u043d\u0443\u0446\u044c",
            "date_placeholder": "\u0414\u0430\u0442\u0430",
            "after_placeholder": "\u041f\u0430\u043f\u044f\u0440\u044d\u0434\u043d\u044f\u044f",
            "before_placeholder": "\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0430\u044f"
        },
        "numbers": {
            "all": "all",
            "filter_button_text": "Filter",
            "reset_button_text": "Reset",
            "min_placeholder": "Min",
            "max_placeholder": "Max"
        }
    },
    "eventlog": {
        "show_stacktrace": "\u041f\u0430\u043a\u0430\u0437\u0430\u0446\u044c \u0442\u0440\u0430\u0441\u0456\u0440\u043e\u045e\u043a\u0443 \u0441\u0442\u044d\u043a\u0430",
        "hide_stacktrace": "Hide the stacktrace",
        "tabs": {
            "formatted": "\u0410\u0434\u0444\u0430\u0440\u043c\u0430\u0442\u0430\u0432\u0430\u043d\u0430",
            "raw": "\u0421\u044b\u0440\u0430"
        },
        "editor": {
            "title": "\u0420\u044d\u0434\u0430\u043a\u0442\u0430\u0440 \u0437\u044b\u0445\u043e\u0434\u043d\u0430\u0433\u0430 \u043a\u043e\u0434\u0443",
            "description": "\u0412\u0430\u0448\u0430 \u0430\u043f\u0435\u0440\u0430\u0446\u044b\u0439\u043d\u0430\u044f \u0441\u0456\u0441\u0442\u044d\u043c\u0430 \u043f\u0430\u0432\u0456\u043d\u043d\u0430 \u0431\u044b\u0446\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u043d\u0430 \u043f\u0440\u0430\u0441\u043b\u0443\u0445\u043e\u045e\u0432\u0430\u043d\u043d\u0435 \u0430\u0434\u043d\u043e\u0439 \u0437 \u0433\u044d\u0442\u044b\u0445 \u0441\u0445\u0435\u043c URL",
            "openWith": "\u0410\u0434\u0447\u044b\u043d\u0456\u0446\u044c \u0437 \u0434\u0430\u043f\u0430\u043c\u043e\u0433\u0430\u0439",
            "remember_choice": "\u0417\u0430\u043f\u043e\u043c\u043d\u0456\u0446\u044c \u0430\u0431\u0440\u0430\u043d\u044b \u0432\u0430\u0440\u044b\u044f\u043d\u0442 \u0434\u043b\u044f \u0433\u044d\u0442\u0430\u0439 \u0441\u0435\u0441\u0456\u0456",
            "open": "\u0410\u0434\u0447\u044b\u043d\u0456\u0446\u044c",
            "cancel": "\u0410\u0434\u043c\u044f\u043d\u0456\u0446\u044c"
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


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': 'год_гады_гадоў'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвіліна' : 'хвіліну';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'гадзіна' : 'гадзіну';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    var be = moment.defineLocale('be', {
        months : {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays : {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., HH:mm',
            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar : {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function () {
                return '[У] dddd [ў] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[У мінулую] dddd [ў] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[У мінулы] dddd [ў] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'праз %s',
            past : '%s таму',
            s : 'некалькі секунд',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : 'дзень',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM : function (input) {
            return /^(дня|вечара)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночы';
            } else if (hour < 12) {
                return 'раніцы';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечара';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
                case 'D':
                    return number + '-га';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return be;

})));

