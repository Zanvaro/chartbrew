const request = require("request-promise");
const moment = require("moment");

const builder = require("./builder");

const template = (token, key) => ({
  "Connection": {
    "host": "https://api.chartmogul.com/v1",
    "dbName": null,
    "port": null,
    "username": null,
    "password": null,
    "options": [],
    "connectionString": "null",
    "authentication": {
      "type": "basic_auth",
      "user": token,
      "pass": key,
    },
    "firebaseServiceAccount": null,
    "name": "ChartMogul",
    "type": "api",
    "active": true,
    "srv": false
  },
  "Charts": [
    {
      "name": "MRR Evolution",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": -3,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": moment().subtract(1, "year").startOf("day"),
      "endDate": moment().endOf("day"),
      "includeZeros": false,
      "currentEndDate": true,
      "timeInterval": "month",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].mrr": "number",
            "root.entries[].mrr-new-business": "number",
            "root.entries[].mrr-expansion": "number",
            "root.entries[].mrr-contraction": "number",
            "root.entries[].mrr-churn": "number",
            "root.entries[].mrr-reactivation": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].mrr",
          "yAxisOperation": "none",
          "dateField": "root.entries[].date",
          "datasetColor": "rgba(44, 160, 44, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "MRR",
          "pointRadius": null,
          "formula": "{val / 100}",
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/mrr?interval=day&start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        }
      ]
    },
    {
      "name": "Churn Rate",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": 165,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": moment().subtract(1, "year").startOf("day"),
      "endDate": moment().endOf("day"),
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "month",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].customer-churn-rate": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].customer-churn-rate",
          "yAxisOperation": "none",
          "dateField": "root.entries[].date",
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Customer Churn",
          "pointRadius": null,
          "formula": "{val}%",
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/customer-churn-rate?start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].mrr-churn-rate": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].mrr-churn-rate",
          "yAxisOperation": "none",
          "dateField": "root.entries[].date",
          "datasetColor": "#FF7F0E",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "NET MRR Churn",
          "pointRadius": null,
          "formula": "{val}%",
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/mrr-churn-rate?start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        }
      ]
    },
    {
      "name": "Anual Recurring Revenue",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": 169,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": moment().subtract(1, "year").startOf("day"),
      "endDate": moment().endOf("day"),
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "month",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].arr": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].arr",
          "yAxisOperation": "none",
          "dateField": "root.entries[].date",
          "datasetColor": "#17BECF",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "ARR",
          "pointRadius": null,
          "formula": "${val / 100}",
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/arr?interval=day&start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        }
      ]
    },
    {
      "name": "Avg Revenue Per Account",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": 172,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": moment().subtract(1, "year").startOf("day"),
      "endDate": moment().endOf("day"),
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "month",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": [],
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].arpa": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].arpa",
          "yAxisOperation": "none",
          "dateField": "root.entries[].date",
          "datasetColor": "#7F7F7F",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "ARPA",
          "pointRadius": null,
          "formula": "${val / 100}",
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/arpa?interval=day&start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        }
      ]
    },
    {
      "name": "Subscribers",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": 166,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": moment().subtract(1, "year").startOf("day"),
      "endDate": moment().endOf("day"),
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "month",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].customers": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].customers",
          "yAxisOperation": "none",
          "dateField": "root.entries[].date",
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Subscribers",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/customer-count?interval=day&start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        }
      ]
    },
    {
      "name": "MRR",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": 163,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": moment().subtract(3, "months").startOf("day"),
      "endDate": moment().endOf("day"),
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].mrr": "number",
            "root.entries[].mrr-new-business": "number",
            "root.entries[].mrr-expansion": "number",
            "root.entries[].mrr-contraction": "number",
            "root.entries[].mrr-churn": "number",
            "root.entries[].mrr-reactivation": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].mrr",
          "yAxisOperation": "none",
          "dateField": "root.entries[].date",
          "datasetColor": "#2CA02C",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "MRR",
          "pointRadius": null,
          "formula": "${val / 100}",
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/mrr?interval=day&start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        }
      ]
    },
    {
      "name": "MRR Breakdown in last 6 months",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": 167,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": moment().subtract(6, "months").startOf(),
      "endDate": moment().endOf("day"),
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.entries[].date": "date",
            "root.entries[].mrr": "number",
            "root.entries[].mrr-new-business": "number",
            "root.entries[].mrr-expansion": "number",
            "root.entries[].mrr-contraction": "number",
            "root.entries[].mrr-churn": "number",
            "root.entries[].mrr-reactivation": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.entries[].date",
          "xAxisOperation": null,
          "yAxis": "root.entries[].mrr",
          "yAxisOperation": "count",
          "dateField": "root.entries[].date",
          "datasetColor": "#CFECF9",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "MRR in cents",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": "/metrics/mrr?interval=month&start-date={{start_date}}&end-date={{end_date}}",
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "template": null
          },
        }
      ]
    }
  ],
});

module.exports.template = template;

module.exports.build = (projectId, { token, key }) => {
  if (!token || !key) return Promise.reject("Missing required authentication arguments");

  const checkOpt = {
    url: `https://api.chartmogul.com/v1/metrics/all?interval=month&start-date=${moment().subtract(6, "month").startOf("month").format("YYYY-MM-DD")}&end-date=${moment().endOf("month").format("YYYY-MM-DD")}`,
    method: "GET",
    auth: {
      user: token,
      pass: key,
    },
    headers: {
      accept: "application/json",
    },
    json: true,
  };

  return request(checkOpt)
    .then(() => {
      return builder(projectId, token, key, template);
    })
    .catch((err) => {
      if (err && err.message) {
        return Promise.reject(err.message);
      }
      return Promise.reject(err);
    });
};
