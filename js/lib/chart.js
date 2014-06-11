/**
 * Created by mhoffman on 5/10/14.
 */

$scope.chart = {
    "type": "AreaChart",
    "displayed": true,
    "data": {
        "cols": [
            {
                "id": "month",
                "label": "Month",
                "type": "string",
                "p": {}
            },
            {
                "id": "laptop-id",
                "label": "Laptop",
                "type": "number",
                "p": {}
            },
            {
                "id": "desktop-id",
                "label": "Desktop",
                "type": "number",
                "p": {}
            },
            {
                "id": "server-id",
                "label": "Server",
                "type": "number",
                "p": {}
            },
            {
                "id": "cost-id",
                "label": "Shipping",
                "type": "number"
            }
        ],
        "rows": [
            {
                "c": [
                    {
                        "v": "January",
                        "p": {}
                    },
                    {
                        "v": 19,
                        "f": "42 items",
                        "p": {}
                    },
                    {
                        "v": 12,
                        "f": "Ony 12 items",
                        "p": {}
                    },
                    {
                        "v": 7,
                        "f": "7 servers",
                        "p": {}
                    },
                    {
                        "v": 4,
                        "p": {}
                    },
                    null
                ]
            },
            {
                "c": [
                    {
                        "v": "February",
                        "p": {}
                    },
                    {
                        "v": 13,
                        "p": {}
                    },
                    {
                        "v": 1,
                        "f": "1 unit (Out of stock this month)",
                        "p": {}
                    },
                    {
                        "v": 12,
                        "p": {}
                    },
                    {
                        "v": 2,
                        "p": {}
                    },
                    null
                ]
            },
            {
                "c": [
                    {
                        "v": "March",
                        "p": {}
                    },
                    {
                        "v": 24,
                        "p": {}
                    },
                    {
                        "v": 5,
                        "p": {}
                    },
                    {
                        "v": 11,
                        "p": {}
                    },
                    {
                        "v": 6,
                        "p": {}
                    },
                    null
                ]
            }
        ]
    },
    "options": {
        "title": "Sales per month",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit",
            "gridlines": {
                "count": 20
            }
        },
        "hAxis": {
            "title": "Date"
        },
        "tooltip": {
            "isHtml": false
        }
    },
    "formatters": {},
    "view": {}
}