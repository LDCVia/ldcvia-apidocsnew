define({ "api": [
  {
    "type": "get",
    "url": "/username/:useremail/:newname",
    "title": "Add alternate name to user",
    "description": "<p>Adds a new alternate name to a user. Alternate names are used in document security to grant access to documents. So, fred@bloggs.com might have an alternate name of Fred Bloggs/Acme and CN=Fred Bloggs/O=Acme</p>",
    "name": "addnametouser",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "post",
    "url": "/groups",
    "title": "Add users to group",
    "description": "<p>Allows you to add multiple users to a single group in one request</p>",
    "name": "adduserstogroup",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>A object describing the group to add users to and the users to add to the group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": " {\n\"groupname\":\"TestGroup\",\n\"emails\": [\"fred@bloggs.com\", \"joe@blow.com\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "delete",
    "url": "/userdetails/:useremail/:db",
    "title": "Remove user from database",
    "description": "<p>Removes the specified user from the specified database</p>",
    "name": "addusertodatabase",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/userdetails/:useremail/:db",
    "title": "Add user to database",
    "description": "<p>Adds the specified user to the specified database</p>",
    "name": "addusertodatabase",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/groups/:useremail/:group",
    "title": "Add user to group",
    "description": "<p>Adds the specified user to the specified group</p>",
    "name": "addusertogroup",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "delete",
    "url": "/groups/:group",
    "title": "Delete group",
    "description": "<p>Removes the specified group</p>",
    "name": "deletegroup",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/groups/:group",
    "title": "Get group members",
    "description": "<p>Returns an array of all the members of a group</p>",
    "name": "getgroupmembers",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "result",
            "description": "<p>An array containing the email addresses of all the group members</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\"fred@bloggs.com\", \"joe@smith.com\"]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/dbacl/:db",
    "title": "Get database users",
    "description": "<p>Returns an array of all the people who have access to the specified database</p>",
    "name": "getgroupmembers",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "result",
            "description": "<p>An array containing the email addresses of all the group members</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\"fred@bloggs.com\", \"joe@smith.com\"]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/groups",
    "title": "Get Groups",
    "description": "<p>Returns a list of all groups within your organisation.</p>",
    "name": "getgroups",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An array of group names</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "['group1', 'group2']",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "delete",
    "url": "/username/:useremail/:alternatename",
    "title": "Remove alternate name from user",
    "description": "<p>Removes an alternate name from a user.</p>",
    "name": "removenamefromuser",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "delete",
    "url": "/groups/:useremail/:group",
    "title": "Remove user from group",
    "description": "<p>Removes the specified user from the specified group</p>",
    "name": "removeuserfromgroup",
    "version": "1.0.20160607",
    "group": "Access_Control",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Result of the operation. &quot;ok&quot; if successful</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Access_Control"
  },
  {
    "type": "post",
    "url": "/activity/:db/:collection",
    "title": "Filter activity (collection)",
    "description": "<p>If you want to further filter the logs to a specific date range or only contain certain messages within the collection, for example, you can use POST requests. The responses will be the same format as above. To restrict the logs you can add all of some of the following criteria in a JSON post. When you want to get a count of activity for your entire environment, use the /activity service. If you want to get detailed logs of activity, then you will need to provide either a database, a database and collection or a database, collection and document id. In all cases, if you issue a GET request then you will be returned all records for that scope.</p>",
    "group": "Activity",
    "name": "FilterCollectionActivity",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "startdate",
            "description": "<p>Optional startdate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 6, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "enddate",
            "description": "<p>Optional enddate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 7, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "filters",
            "description": "<p>Optional array of filter objects to find specific types of activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"startdate\": {\"year\": 2014, \"month\": 6, \"day\": 1},\n  \"enddate\": {\"year\": 2014, \"month\": 7, \"day\": 1},\n  \"filters\": [\n    {\"operator\": \"equals\", \"field\": \"level\", \"value\": \"info\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a details of user activity in the collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"count\":3901,\n\"docs\":[\n{\n\"_id\":\"53f22101edf3aa08da052184\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.205Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n},\n{\n\"_id\":\"53f22101edf3aa08da052189\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.307Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n}\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "post",
    "url": "/activity/:db",
    "title": "Filter activity (database)",
    "description": "<p>If you want to further filter the logs to a specific date range or only contain certain messages, for example, you can use POST requests. The responses will be the same format as above. To restrict the logs you can add all of some of the following criteria in a JSON post. When you want to get a count of activity for your entire environment, use the /activity service. If you want to get detailed logs of activity, then you will need to provide either a database, a database and collection or a database, collection and document id. In all cases, if you issue a GET request then you will be returned all records for that scope.</p>",
    "group": "Activity",
    "name": "FilterDatabaseActivity",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "startdate",
            "description": "<p>Optional startdate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 6, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "enddate",
            "description": "<p>Optional enddate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 7, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "filters",
            "description": "<p>Optional array of filter objects to find specific types of activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"startdate\": {\"year\": 2014, \"month\": 6, \"day\": 1},\n  \"enddate\": {\"year\": 2014, \"month\": 7, \"day\": 1},\n  \"filters\": [\n    {\"operator\": \"equals\", \"field\": \"level\", \"value\": \"info\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a details of user activity in the database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"count\":3901,\n\"docs\":[\n{\n\"_id\":\"53f22101edf3aa08da052184\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.205Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n},\n{\n\"_id\":\"53f22101edf3aa08da052189\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.307Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n}\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "post",
    "url": "/activity/:db/:collection/:unid",
    "title": "Filter activity (document)",
    "description": "<p>If you want to further filter the logs to a specific date range or only contain certain messages for a specific document, for example, you can use POST requests. The responses will be the same format as above. To restrict the logs you can add all of some of the following criteria in a JSON post.</p>",
    "group": "Activity",
    "name": "FilterDocumentActivity",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "startdate",
            "description": "<p>Optional startdate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 6, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "enddate",
            "description": "<p>Optional enddate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 7, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "filters",
            "description": "<p>Optional array of filter objects to find specific types of activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"startdate\": {\"year\": 2014, \"month\": 6, \"day\": 1},\n  \"enddate\": {\"year\": 2014, \"month\": 7, \"day\": 1},\n  \"filters\": [\n    {\"operator\": \"equals\", \"field\": \"level\", \"value\": \"info\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a details of user activity in the document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "    {\n  \"count\": 308,\n  \"data\": [\n    {\n      \"_id\": \"54e59614a969c4da7049c85d\",\n      \"collection\": \"MainTopic\",\n      \"document\": \"CBF71C6B10257F5C80257D1900261D7A\",\n      \"timestamp\": \"2015-02-19T07:51:48.826Z\",\n      \"level\": \"info\",\n      \"message\": \"Get Response Heirarchy\",\n      \"user\": \"fred@ldcvia.com\"\n    },\n    {\n      \"_id\": \"54e59614a969c4da7049c85c\",\n      \"collection\": \"MainTopic\",\n      \"document\": \"CBF71C6B10257F5C80257D1900261D7A\",\n      \"timestamp\": \"2015-02-19T07:51:48.807Z\",\n      \"level\": \"info\",\n      \"message\": \"Get Document\",\n      \"user\": \"fred@ldcvia.com\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "post",
    "url": "/activity",
    "title": "Filter activity",
    "description": "<p>If you want to further filter the logs to a specific date range or only contain certain messages, for example, then all of the above methods can also be used with POST requests. The responses will be the same format as above. To restrict the logs you can add all of some of the following criteria in a JSON post. When you want to get a count of activity for your entire environment, use the /activity service. If you want to get detailed logs of activity, then you will need to provide either a database, a database and collection or a database, collection and document id. In all cases, if you issue a GET request then you will be returned all records for that scope.</p>",
    "group": "Activity",
    "name": "GetActivity",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "startdate",
            "description": "<p>Optional startdate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 6, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "enddate",
            "description": "<p>Optional enddate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 7, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "filters",
            "description": "<p>Optional array of filter objects to find specific types of activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"startdate\": {\"year\": 2014, \"month\": 6, \"day\": 1},\n  \"enddate\": {\"year\": 2014, \"month\": 7, \"day\": 1},\n  \"filters\": [\n    {\"operator\": \"equals\", \"field\": \"level\", \"value\": \"info\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a property per database that the user has access to with a count of audit trail logs that match given timeframe or filter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "  {\n\"mixed2-1467899601108-nsf\": 1708,\n\"mixed2-1467898532639-nsf\": 43,\n\"mixed2-1467893072589-nsf\": 101\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "get",
    "url": "/activity",
    "title": "All Activity",
    "description": "<p>When you want to get a count of activity for your entire environment, use the /activity service. If you want to get detailed logs of activity, then you will need to provide either a database, a database and collection or a database, collection and document id. In all cases, if you issue a GET request then you will be returned all records for that scope.</p>",
    "name": "GetAllActivity",
    "version": "1.0.20160607",
    "group": "Activity",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a property per database that the user has access to with a count of audit trail logs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"mixed2-1467899601108-nsf\": 1708,\n\"mixed2-1467898532639-nsf\": 43,\n\"mixed2-1467893072589-nsf\": 101\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "get",
    "url": "/logs",
    "title": "All logs",
    "description": "<p>A live stream of platform activity. Available to system administrators only.</p>",
    "name": "GetAllLogs",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.0.20160607",
    "group": "Activity",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>A live stream of platform activity. Available to system administrators only.</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "get",
    "url": "/activity/:db/:collection",
    "title": "All Activity (collection)",
    "description": "<p>When you want to get a all activity for a collection, use this method</p>",
    "name": "GetCollectionActivity",
    "version": "1.0.20160607",
    "group": "Activity",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a details of user activity in the collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"count\":3901,\n\"docs\":[\n{\n\"_id\":\"53f22101edf3aa08da052184\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.205Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n},\n{\n\"_id\":\"53f22101edf3aa08da052189\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.307Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n}\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "get",
    "url": "/activity/:db",
    "title": "All Activity (database)",
    "description": "<p>When you want to get a all activity for a database, use this method</p>",
    "name": "GetDatabaseActivity",
    "version": "1.0.20160607",
    "group": "Activity",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a details of user activity in the database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"count\":3901,\n\"docs\":[\n{\n\"_id\":\"53f22101edf3aa08da052184\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.205Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n},\n{\n\"_id\":\"53f22101edf3aa08da052189\",\n\"source\":\"api.v1.js\",\n\"db\":\"dev-londc-com-demos-discussion-nsf\",\n\"collection\":\"MainTopic\",\n\"timestamp\":\"2014-08-18T15:51:29.307Z\",\n\"level\":\"info\",\n\"message\":\"Get Collection\",\n\"user\":\"support@londc.com\"\n}\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "get",
    "url": "/activity/:db/:collection/:unid",
    "title": "All Activity (document)",
    "description": "<p>When you want to get a all activity for a document, use this method</p>",
    "name": "GetDocumentActivity",
    "version": "1.0.20160607",
    "group": "Activity",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>An object with a details of user activity in the document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "   {\n  \"count\": 308,\n  \"data\": [\n    {\n      \"_id\": \"54e59614a969c4da7049c85d\",\n      \"collection\": \"MainTopic\",\n      \"document\": \"CBF71C6B10257F5C80257D1900261D7A\",\n      \"timestamp\": \"2015-02-19T07:51:48.826Z\",\n      \"level\": \"info\",\n      \"message\": \"Get Response Heirarchy\",\n      \"user\": \"fred@ldcvia.com\"\n    },\n    {\n      \"_id\": \"54e59614a969c4da7049c85c\",\n      \"collection\": \"MainTopic\",\n      \"document\": \"CBF71C6B10257F5C80257D1900261D7A\",\n      \"timestamp\": \"2015-02-19T07:51:48.807Z\",\n      \"level\": \"info\",\n      \"message\": \"Get Document\",\n      \"user\": \"fred@ldcvia.com\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "post",
    "url": "/logs",
    "title": "Filter logs",
    "description": "<p>If you want to further filter the logs to a specific date range or only contain certain messages, for example, then all of the above methods can also be used with POST requests. The responses will be the same format as above. To restrict the logs you can add all of some of the following criteria in a JSON post. When you want to get a count of activity for your entire environment, use the /activity service. If you want to get detailed logs of activity, then you will need to provide either a database, a database and collection or a database, collection and document id. In all cases, if you issue a GET request then you will be returned all records for that scope. NB: This API is available to administrators only</p>",
    "group": "Activity",
    "name": "GetLogs",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "startdate",
            "description": "<p>Optional startdate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 6, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "enddate",
            "description": "<p>Optional enddate filter object - {&quot;year&quot;: 2014, &quot;month&quot;: 7, &quot;day&quot;: 1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "filters",
            "description": "<p>Optional array of filter objects to find specific types of activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"startdate\": {\"year\": 2014, \"month\": 6, \"day\": 1},\n  \"enddate\": {\"year\": 2014, \"month\": 7, \"day\": 1},\n  \"filters\": [\n    {\"operator\": \"equals\", \"field\": \"level\", \"value\": \"info\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ActivityLogs",
            "description": "<p>A live stream of platform activity that match the specified criteria. Available to system administrators only.</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Activity"
  },
  {
    "type": "delete",
    "url": "/attachment/:db/:collection/:unid/:filename",
    "title": "Delete Attachment",
    "description": "<p>Deletes a file attachment from a document</p>",
    "name": "deleteattachment",
    "version": "1.0.20160607",
    "group": "Attachment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>A string &quot;ok&quot; if the file was successfully deleted.</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.attachment.v1.js",
    "groupTitle": "Attachment"
  },
  {
    "type": "get",
    "url": "/attachment/:db/:collection/:unid/:filename",
    "title": "Get Attachment",
    "description": "<p>Returns a file attachment</p>",
    "name": "getattachment",
    "version": "1.0.20160607",
    "group": "Attachment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "result",
            "description": "<p>A binary file attachment</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.attachment.v1.js",
    "groupTitle": "Attachment"
  },
  {
    "type": "post",
    "url": "/attachment/:db/:collection/:unid/:filename",
    "title": "Add attachment (BASE64)",
    "description": "<p>Adds a file attachment to a document using base64 data</p>",
    "name": "insertattachmentbase64",
    "version": "1.0.20160607",
    "group": "Attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mimetype",
            "description": "<p>The mimetype of the file attachment (e.g. image/png or application/vnd.ms-excel)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "filename",
            "description": "<p>The name of the file attachment (e.g. mypicture.png or mysheet.xlsx)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>BASE64 string containing the file data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result:",
          "content": "{'result': 'success'}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.attachment.v1.js",
    "groupTitle": "Attachment"
  },
  {
    "type": "post",
    "url": "/attachment/:db/:collection/:unid/:filename",
    "title": "Add attachment (multipart)",
    "description": "<p>Adds a file attachment to a document using multipart form data.</p>",
    "name": "insertattachmentmultipart",
    "version": "1.0.20160607",
    "group": "Attachment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result:",
          "content": "{'result': 'success'}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.attachment.v1.js",
    "groupTitle": "Attachment"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login (API Key)",
    "description": "<p>Given a username and password, this method returns the API key for the user which can then be used in future requests as an HTTP Header. To locate your API key, this video will be useful:</p> <iframe src=\"https://player.vimeo.com/video/113910972\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
    "name": "loginapikey",
    "version": "1.0.20160607",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>An object containing username and password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": "{'username': \"fred@bloggs.com\", 'password': 'SuperSecretPassword'}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the API key for the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": " {\n  \"apikey\":\"d656cafda863458c78219760cb0ef4d1\",\n  \"email\":\"fred@bloggs.com\",\n  \"roles\":{\"account\":\"54be76b40f0f0ce80fe9b21e\"},\n  \"notesnames\":[],\n  \"databases\":\n    [\n      {\"database\":\"dev-londc-com-teamroom-nsf\",\"_id\":\"54be770c0f0f0ce80fe9b220\"},\n      {\"database\":\"dev-londc-com-teamroom-nsf\",\"_id\":\"54be7ce40f0f0ce80fe9b221\"},\n      {\"database\":\"dev-londc-com-teamroom-nsf\",\"_id\":\"54c66b660f0f0ce80fe9b24b\"},\n      {\"database\":\"dev-londc-com-teamroom-nsf\",\"_id\":\"54d13776b8fcbdac0bee24f5\"}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.login.v1.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/loginsession",
    "title": "Login (Session Cookie)",
    "description": "<p>Given a username and password, this method returns a &quot;connect.sid&quot; cookie which grants the user a session on the LDC Via server.</p>",
    "name": "logincookie",
    "version": "1.0.20160607",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>An object containing username and password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": "{'email': \"fred@bloggs.com\", 'password': 'SuperSecretPassword'}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the API key for the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "  {\n\"success\": true,\n\"errors\":[\n],\n\"errfor\":{\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.login.v1.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/passwordreset",
    "title": "Password Reset",
    "description": "<p>Start the password reset process for a user. This sends an email to the user prompting them to visit the LDC Via website and create a new password.</p>",
    "name": "passwordreset",
    "version": "1.0.20160607",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>A JSON object describing the parameters required to start a password reset</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": " {\n \"useremail\": \"fred@blogs.com\",\n \"appname\": \"My App Name\",\n \"emailcontent\": \"Message to send to user. Reset Password link will be appended to this\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>A string result of the operation</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/remotepasswordreset",
    "title": "Remote Password Reset",
    "description": "<p>A two stage method that allows an external application to manage the entire password reset process</p>",
    "name": "remotepasswordreset",
    "version": "1.0.20160607",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>A JSON object with the required fields to reset a password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Stage 1:",
          "content": "{\"useremail\": \"fred@bloggs.com\"}",
          "type": "json"
        },
        {
          "title": "Stage 2:",
          "content": "{\"useremail\": \"fred@bloggs.com\", \"token\": \"a5uper53cr3tt0k3n\", \"password\": \"newpassw0rd\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object with the response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Stage 1:",
          "content": "{\"token\": \"a5uper53cr3tt0k3n\"}",
          "type": "json"
        },
        {
          "title": "Stage 2:",
          "content": "{\"result\": 'Password reset successfully'}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "/collections/:db/:collection",
    "title": "Delete Collection",
    "description": "<p>Completely deletes a collection and all of its documents. Only available to super users and administrators</p>",
    "name": "deletecollection",
    "version": "1.0.20160607",
    "group": "Collection",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A result object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Collection"
  },
  {
    "type": "delete",
    "url": "/field/:db/:collection/:fieldname",
    "title": "Delete Collection Field",
    "description": "<p>Removes a field from all documents in a collection. Only available to super users and administrators</p>",
    "name": "deletecollectionfield",
    "version": "1.0.20160607",
    "group": "Collection",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A result object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/collections/:db/:collection",
    "title": "Get Collection Data",
    "description": "<p>To get all documents in a collection, use this method. You can page through results using the start and count URL parameters.</p>",
    "name": "getcollectiondata",
    "version": "1.0.20160607",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "start",
            "description": "<p>A URL query string parameter to define where in the collection to start. Default == 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "count",
            "description": "<p>A URL query string parameter to define how many documents to return in the response. Default == 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortasc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results ascending with. Default == null</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortdesc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results descending with. Default == __created</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the count of documents the user can see, a URL to open the next page and an array of document objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"count\": 24,\n\"next_page\": \"/collections/dev-londc-com-demos-discussion-nsf1462359269872/MainTopic?start=24\",\n\"data\":[\n{\n\"_id\": \"5729d4cebb68f05e647caa9a\",\n\"From\": \"CN=Matt White/O=Exhilarate\",\n\"AbbreviateFrom\": \"Matt White/Exhilarate\",\n\"AltFrom\": \"CN=Matt White/O=Exhilarate\",\n\"ThreadId\": \"MWHE-9N7QT8\",\n\"MainID\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"AbrFrom\": \"Matt_White__Exhilarate\",\n\"WebCategories\": \"Examples\",\n\"Body\": \"(See attached file: Hello.docx)\",\n\"NewsLetterSubject\": \"Small Attachment\",\n\"Subject\": \"Small Attachment\",\n\"Categories\": \"Examples\",\n\"__href\": \"http://dev.londc.com:80/demos/discussion.nsf/api/data/documents/unid/AA43BC3CD46BF58280257D3B006ACE96\",\n\"__unid\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"__noteid\": \"117A\",\n\"__created\": \"2014-08-21T19:26:37Z\",\n\"__modified\": \"2014-08-22T06:28:37Z\",\n\"__authors\": \"CN=Matt White/O=Exhilarate\",\n\"__form\": \"MainTopic\",\n\"__readerrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-reader\",\n\"__authorrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-author\",\n\"_files\":[\"Hello.docx\"],\n\"Body__parsed\": \"<html><body><i>(See attached file: Hello.docx)</i></body></html><br />\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/trash/:db/:collection",
    "title": "Get Deleted Documents",
    "description": "<p>When a document is deleted, it moves into a trash state. This method allows a super user or administrator to see deleted documents in a collection.</p>",
    "name": "gettrashdata",
    "version": "1.0.20160607",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "start",
            "description": "<p>A URL query string parameter to define where in the collection to start. Default == 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "count",
            "description": "<p>A URL query string parameter to define how many documents to return in the response. Default == 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortasc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results ascending with. Default == null</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortdesc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results descending with. Default == __created</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the count of documents the user can see, a URL to open the next page and an array of document objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"count\": 24,\n\"next_page\": \"/collections/dev-londc-com-demos-discussion-nsf1462359269872/MainTopic?start=24\",\n\"data\":[\n{\n\"_id\": \"5729d4cebb68f05e647caa9a\",\n\"From\": \"CN=Matt White/O=Exhilarate\",\n\"AbbreviateFrom\": \"Matt White/Exhilarate\",\n\"AltFrom\": \"CN=Matt White/O=Exhilarate\",\n\"ThreadId\": \"MWHE-9N7QT8\",\n\"MainID\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"AbrFrom\": \"Matt_White__Exhilarate\",\n\"WebCategories\": \"Examples\",\n\"Body\": \"(See attached file: Hello.docx)\",\n\"NewsLetterSubject\": \"Small Attachment\",\n\"Subject\": \"Small Attachment\",\n\"Categories\": \"Examples\",\n\"__href\": \"http://dev.londc.com:80/demos/discussion.nsf/api/data/documents/unid/AA43BC3CD46BF58280257D3B006ACE96\",\n\"__unid\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"__noteid\": \"117A\",\n\"__created\": \"2014-08-21T19:26:37Z\",\n\"__modified\": \"2014-08-22T06:28:37Z\",\n\"__authors\": \"CN=Matt White/O=Exhilarate\",\n\"__form\": \"MainTopic\",\n\"__readerrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-reader\",\n\"__authorrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-author\",\n\"_files\":[\"Hello.docx\"],\n\"Body__parsed\": \"<html><body><i>(See attached file: Hello.docx)</i></body></html><br />\",\n\"__deleted\": \"2014-09-22T06:28:37Z\",\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.trash.v1.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/collections/:db/:collection",
    "title": "Search Collection Data",
    "description": "<p>To perform a search against a collection, you can submit queries to be run against one or more fields or against the entire collection using full text. To use a full text query, the database must be indexed which can be enabled in DB Viewer - Database Settings or using the <a href=\"#api-Database-SetDatabaseDetails\">Set Database Details</a> API. Search queries are built up using an array of JSON objects. You can search for exact matches in a field, fields that contain text, or date and number ranges. You can add as many parameters to a search as are required to get the set of documents that you need, and then use the URL parameters count and start to page through the results. In this way you can effectively create the equivalent of Notes views of data. Full Text and field based queries can be mixed together in the same request if required. Keywords that you can use to search for data include: &quot;contains&quot;\tused to search a field to see if it contains the value being searched for &quot;equals&quot;\tused to find a field that is an exact match for the value being searched for &quot;$gte&quot;\tused when searching for dates and numbers greater than or equal to the value entered. For dates the full ISO 8601 format should be used &quot;$lte&quot;\tused when searching for dates and numbers less than or equal to the value entered. For dates the full ISO 8601 format should be used Examples of different search JSON objects can be seen below. When you enter multiple criteria, they are applied together with an OR style join by default, change this to AND using the URL parameter “…&amp;join=and”. You can also perform a regular expression based search that allows you to perform case insensitive searches or more complex queries.</p>",
    "name": "searchcollectiondata",
    "version": "1.0.20160801",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "start",
            "description": "<p>A URL query string parameter to define where in the collection to start. Default == 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "count",
            "description": "<p>A URL query string parameter to define how many documents to return in the response. Default == 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortasc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results ascending with. Default == null</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortdesc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results descending with. Default == __created</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "join",
            "description": "<p>A URL query string parameter to allow you to define how the query is executed. By default an OR style query is used, this can be changed to &quot;and&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "post-object",
            "description": "<p>A JSON object describing the filter to apply. You can mix and match queries of any type to locate the documents you want.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Text filters:",
          "content": " {\n  \"filters\": [{\n    \"operator\": \"contains\",\n    \"field\": \"Body\",\n    \"value\": \"test\"\n  },\n  {\n    \"operator\": \"equals\",\n    \"field\": \"From\",\n    \"value\": \"fred@ldcvia.com\"\n  }]\n}",
          "type": "json"
        },
        {
          "title": "Date Filters:",
          "content": " {\n  \"filters\": [\n  {\n    \"operator\": \"$gte\",\n    \"field\": \"__created\",\n    \"value\": \"2015-01-01T00:00:00\"\n  },\n  {\n    \"operator\": \"$lte\",\n    \"field\": \"__created\",\n    \"value\": \"2015-01-31T23:59:59\"\n  }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Full Text Query:",
          "content": " {\n  \"fulltext\": \"some text\"\n}",
          "type": "json"
        },
        {
          "title": "Mixed Query:",
          "content": "{\n \"filters\": [{\n   \"operator\": \"contains\",\n   \"field\": \"Body\",\n   \"value\": \"test\"\n }],\n \"fulltext\": \"some text\"\n}",
          "type": "json"
        },
        {
          "title": "Regular Expression Query:",
          "content": "// We recommend using https://regex101.com/ to build your regular expressions.\n// In this example we are searching for documents where the field \"Body\" contains any instance of the word \"test\" in any form,\n// e.g. \"TEST\", \"test\" or \"Test\"\n{\n \"filters\": [{\n   \"operator\": \"regex\",\n   \"field\": \"Body\", //The field to operate against\n   \"value\": \"test\", //The regex query to execute, usual regex syntax applies\n   \"options\": \"i\" //This is an optional parameter to enable features such as case insensitivity, global, single line etc.\n }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the count of documents the user can see, and an array of document objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"count\": 24,\n\"data\":[\n{\n\"_id\": \"5729d4cebb68f05e647caa9a\",\n\"From\": \"CN=Matt White/O=Exhilarate\",\n\"AbbreviateFrom\": \"Matt White/Exhilarate\",\n\"AltFrom\": \"CN=Matt White/O=Exhilarate\",\n\"ThreadId\": \"MWHE-9N7QT8\",\n\"MainID\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"AbrFrom\": \"Matt_White__Exhilarate\",\n\"WebCategories\": \"Examples\",\n\"Body\": \"(See attached file: Hello.docx)\",\n\"NewsLetterSubject\": \"Small Attachment\",\n\"Subject\": \"Small Attachment\",\n\"Categories\": \"Examples\",\n\"__href\": \"http://dev.londc.com:80/demos/discussion.nsf/api/data/documents/unid/AA43BC3CD46BF58280257D3B006ACE96\",\n\"__unid\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"__noteid\": \"117A\",\n\"__created\": \"2014-08-21T19:26:37Z\",\n\"__modified\": \"2014-08-22T06:28:37Z\",\n\"__authors\": \"CN=Matt White/O=Exhilarate\",\n\"__form\": \"MainTopic\",\n\"__readerrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-reader\",\n\"__authorrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-author\",\n\"_files\":[\"Hello.docx\"],\n\"Body__parsed\": \"<html><body><i>(See attached file: Hello.docx)</i></body></html>\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/collections/:db/:collection",
    "title": "Search Collection Data",
    "description": "<p>To perform a search against a collection, you can submit queries to be run against one or more fields or against the entire collection using full text. To use a full text query, the database must be indexed which can be enabled in DB Viewer - Database Settings or using the <a href=\"#api-Database-SetDatabaseDetails\">Set Database Details</a> API. Search queries are built up using an array of JSON objects. You can search for exact matches in a field, fields that contain text, or date and number ranges. You can add as many parameters to a search as are required to get the set of documents that you need, and then use the URL parameters count and start to page through the results. In this way you can effectively create the equivalent of Notes views of data. Full Text and field based queries can be mixed together in the same request if required. Keywords that you can use to search for data include: &quot;contains&quot;\tused to search a field to see if it contains the value being searched for &quot;equals&quot;\tused to find a field that is an exact match for the value being searched for &quot;$gte&quot;\tused when searching for dates and numbers greater than or equal to the value entered. For dates the full ISO 8601 format should be used &quot;$lte&quot;\tused when searching for dates and numbers less than or equal to the value entered. For dates the full ISO 8601 format should be used Examples of different search JSON objects can be seen below. When you enter multiple criteria, they are applied together with an OR style join by default, change this to AND using the URL parameter “…&amp;join=and”.</p>",
    "name": "searchcollectiondata",
    "version": "1.0.20160607",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "start",
            "description": "<p>A URL query string parameter to define where in the collection to start. Default == 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "count",
            "description": "<p>A URL query string parameter to define how many documents to return in the response. Default == 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortasc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results ascending with. Default == null</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortdesc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results descending with. Default == __created</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "join",
            "description": "<p>A URL query string parameter to allow you to define how the query is executed. By default an OR style query is used, this can be changed to &quot;and&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "post-object",
            "description": "<p>A JSON object describing the filter to apply. You can mix and match queries of any type to locate the documents you want.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Text filters:",
          "content": " {\n  \"filters\": [{\n    \"operator\": \"contains\",\n    \"field\": \"Body\",\n    \"value\": \"test\"\n  },\n  {\n    \"operator\": \"equals\",\n    \"field\": \"From\",\n    \"value\": \"fred@ldcvia.com\"\n  }]\n}",
          "type": "json"
        },
        {
          "title": "Date Filters:",
          "content": " {\n  \"filters\": [\n  {\n    \"operator\": \"$gte\",\n    \"field\": \"__created\",\n    \"value\": \"2015-01-01T00:00:00\"\n  },\n  {\n    \"operator\": \"$lte\",\n    \"field\": \"__created\",\n    \"value\": \"2015-01-31T23:59:59\"\n  }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Full Text Query:",
          "content": " {\n  \"fulltext\": \"some text\"\n}",
          "type": "json"
        },
        {
          "title": "Mixed Query:",
          "content": "{\n \"filters\": [{\n   \"operator\": \"contains\",\n   \"field\": \"Body\",\n   \"value\": \"test\"\n }],\n \"fulltext\": \"some text\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the count of documents the user can see, and an array of document objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"count\": 24,\n\"data\":[\n{\n\"_id\": \"5729d4cebb68f05e647caa9a\",\n\"From\": \"CN=Matt White/O=Exhilarate\",\n\"AbbreviateFrom\": \"Matt White/Exhilarate\",\n\"AltFrom\": \"CN=Matt White/O=Exhilarate\",\n\"ThreadId\": \"MWHE-9N7QT8\",\n\"MainID\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"AbrFrom\": \"Matt_White__Exhilarate\",\n\"WebCategories\": \"Examples\",\n\"Body\": \"(See attached file: Hello.docx)\",\n\"NewsLetterSubject\": \"Small Attachment\",\n\"Subject\": \"Small Attachment\",\n\"Categories\": \"Examples\",\n\"__href\": \"http://dev.londc.com:80/demos/discussion.nsf/api/data/documents/unid/AA43BC3CD46BF58280257D3B006ACE96\",\n\"__unid\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"__noteid\": \"117A\",\n\"__created\": \"2014-08-21T19:26:37Z\",\n\"__modified\": \"2014-08-22T06:28:37Z\",\n\"__authors\": \"CN=Matt White/O=Exhilarate\",\n\"__form\": \"MainTopic\",\n\"__readerrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-reader\",\n\"__authorrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-author\",\n\"_files\":[\"Hello.docx\"],\n\"Body__parsed\": \"<html><body><i>(See attached file: Hello.docx)</i></body></html>\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/old-api-docs.js",
    "groupTitle": "Collection"
  },
  {
    "type": "del",
    "url": "/database/:db",
    "title": "Delete Database",
    "description": "<p>Delete the specified database. This is immediate and the database cannot be retrieved! Available only to Super Users and Administrators</p>",
    "name": "DeleteDatabase",
    "version": "1.0.20160607",
    "group": "Database",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{'result': 'ok'}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.database.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/collections/:db",
    "title": "Get Database Collections",
    "description": "<p>Get a list of collections from a database including counts of documents for each collection that the requesting user can see</p>",
    "name": "GetDatabaseCollections",
    "version": "1.0.20160607",
    "group": "Database",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "CollectionArray",
            "description": "<p>Array of database collection objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " [\n{\n\"collection\": \"MainTopic\",\n\"count\": 24\n},\n{\n\"collection\": \"Response\",\n\"count\": 10\n},\n{\n\"collection\": \"ResponseToResponse\",\n\"count\": 7\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.database.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/database/:db",
    "title": "Get Database Details",
    "description": "<p>Get details about a database including its title and indexed status and meta data</p>",
    "name": "GetDatabaseDetails",
    "version": "1.0.20160607",
    "group": "Database",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ResponseObject",
            "description": "<p>Object describing database details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"db\": \"mydb-nsf\",\n\"readonly\": false,\n\"indexed\": true,\n\"publicaccess\": 0,\n\"template\": \"discussion\",\n\"meta\":{\n\"mycustommeta\": \"a value\"\n},\n\"tags\":['Discussion'],\n\"created\": \"2000-01-01T00:00:00.000Z\",\n\"title\": \"Sample Discussion\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.database.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/databasetags",
    "title": "Database Tags",
    "description": "<p>Retrieve a list of all database tags stored against your databases</p>",
    "name": "GetDatabaseTags",
    "version": "1.0.20160607",
    "group": "Database",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "ResponseArray",
            "description": "<p>Array of database tag strings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "['Discussion', 'Document Library']",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.database.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/databasetags/:db",
    "title": "Databases with tag",
    "description": "<p>Retrieve a list of databases that have been assigned a specific tag</p>",
    "name": "GetDatabaseWithTag",
    "version": "1.0.20160607",
    "group": "Database",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "ResponseArray",
            "description": "<p>Array of database names</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "['Database 1', 'Database 2']",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.database.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/databases",
    "title": "All databases",
    "description": "<p>Retrieve a list of all databases that you have access to. Each database returned has the name and title.</p>",
    "name": "GetDatabases",
    "version": "1.0.20160607",
    "group": "Database",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ResponseArray",
            "description": "<p>Array of database objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n  \"databases\":[\n    {\"name\": \"acme-com-discussion1\", \"title\": \"Discussion 1\"},\n    {\"name\": \"acme-com-discussion2\", \"title\": \"Discussion 2\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.database.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/stats/:db",
    "title": "Stats (Single Database)",
    "description": "<p>Gives details about how many documents are in the database and each collection within the database.</p>",
    "group": "Database",
    "name": "GetSingleDBStats",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "database",
            "description": "<p>The database to get stats for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DatabaseStats",
            "description": "<p>An array of database stats objects that gives the size of the database, and the number of documents in each collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "  [\n    {\n        \"database\":\"discussion-nsf\",\n        \"collections\":[\n            {\"collection\":\"CompanyProfile\",\"count\":77},\n            {\"collection\":\"Offering\",\"count\":24}\n        ],\n        \"count\":101,\n        \"stats\":{\"datasize\":173120496,\"storagesize\":216100864},\n        \"title\":\"Demo Discussion\",\n        \"template\":\"discussion\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "post",
    "url": "/stats",
    "title": "Stats (Multiple Databases)",
    "description": "<p>Gives details about how many documents are in the database and each collection within the database.</p>",
    "group": "Database",
    "name": "GetStats",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "databases",
            "description": "<p>An array of database names to get stats for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "['discussion-nsf']",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DatabaseStats",
            "description": "<p>An array of database stats objects that gives the size of the database, and the number of documents in each collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "  [\n    {\n        \"database\":\"discussion-nsf\",\n        \"collections\":[\n            {\"collection\":\"CompanyProfile\",\"count\":77},\n            {\"collection\":\"Offering\",\"count\":24}\n        ],\n        \"count\":101,\n        \"stats\":{\"datasize\":173120496,\"storagesize\":216100864},\n        \"title\":\"Demo Discussion\",\n        \"template\":\"discussion\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/stats/:db",
    "title": "Stats (Single Database)",
    "description": "<p>Gives details about how many documents are in the database and each collection within the database.</p>",
    "group": "Database",
    "name": "GetStatsSingle",
    "version": "1.0.20160607",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DatabaseStats",
            "description": "<p>An array of database stats objects that gives the size of the database, and the number of documents in each collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "  [\n    {\n        \"database\":\"discussion-nsf\",\n        \"collections\":[\n            {\"collection\":\"CompanyProfile\",\"count\":77},\n            {\"collection\":\"Offering\",\"count\":24}\n        ],\n        \"count\":101,\n        \"stats\":{\"datasize\":173120496,\"storagesize\":216100864},\n        \"title\":\"Demo Discussion\",\n        \"template\":\"discussion\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.activity.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "post",
    "url": "/database/:db",
    "title": "Set Database Details",
    "description": "<p>Update database details</p>",
    "name": "SetDatabaseDetails",
    "version": "1.0.20160607",
    "group": "Database",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ResponseObject",
            "description": "<p>Object describing database details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\"db\": \"mydb-nsf\",\n\"readonly\": false,\n\"indexed\": true,\n\"publicaccess\": 0,\n\"template\": \"discussion\",\n\"meta\":{\n\"mycustommeta\": \"a value\"\n},\n\"tags\":['Discussion'],\n\"created\": \"2000-01-01T00:00:00.000Z\",\n\"title\": \"Sample Discussion\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "ok",
          "type": "string"
        }
      ]
    },
    "filename": "controllers/api.database.v1.js",
    "groupTitle": "Database"
  },
  {
    "type": "delete",
    "url": "/document/:db/:collection/:unid",
    "title": "Delete Document",
    "description": "<p>Removes a document from the database</p>",
    "name": "deletedocument",
    "version": "1.0.20160607",
    "group": "Document",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object with the result of the operation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response:",
          "content": " {\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/responses/:db/:collection/:unid",
    "title": "Get Responses",
    "description": "<p>Given a database, collection name and document id, this method will return to you a list of collection names and document ids that are responses to this document.</p>",
    "name": "getResponses",
    "version": "1.0.20160801",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "expand",
            "description": "<p>If you add &quot;&amp;expand=true&quot; you will get the full details of the response documents, otherwise for each response you will get the collection it is in, and its __unid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "immediate",
            "description": "<p>If you add &quot;&amp;immediate=true&quot; you will just be returned immediate responses to the document, if this is ommitted you will get all responses and responses to responses.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "threaded",
            "description": "<p>If you add &quot;&amp;threaded=true&quot; you will get a response array with nested children to show the structure of the response hierarchy. If ommitted you will get a single list of all response documents.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "result",
            "description": "<p>An object array containing response documents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not Expanded or Threaded:",
          "content": "[\n  {\n    \"_id\": \"5411514d8c1fd625dc2ab8c9\",\n    \"__unid\": \"A4D2533D7A91573E80257D1900276F8D\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"Response\"\n  },\n  {\n    \"_id\": \"5411514e8c1fd625dc2ab8d3\",\n    \"__unid\": \"3411614A3E45C7FB80257D1900276F92\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"ResponseToResponse\"\n  },\n  {\n    \"_id\": \"5411514d8c1fd625dc2ab8c3\",\n    \"__unid\": \"8D58E7A1EFD6899C80257D1900276F8E\",\n    \"__parentid\": \"A4D2533D7A91573E80257D1900276F8D\",\n    \"__form\": \"ResponseToResponse\"\n  }\n]",
          "type": "json"
        },
        {
          "title": "Threaded:",
          "content": " [\n  {\n    \"_id\": \"5411514d8c1fd625dc2ab8c9\",\n    \"__unid\": \"A4D2533D7A91573E80257D1900276F8D\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"Response\",\n    \"children\": [\n    {\n      \"_id\": \"5411514d8c1fd625dc2ab8c3\",\n      \"__unid\": \"8D58E7A1EFD6899C80257D1900276F8E\",\n      \"__parentid\": \"A4D2533D7A91573E80257D1900276F8D\",\n      \"__form\": \"ResponseToResponse\"\n    }\n  ]\n  },\n  {\n    \"_id\": \"5411514e8c1fd625dc2ab8d3\",\n    \"__unid\": \"3411614A3E45C7FB80257D1900276F92\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"ResponseToResponse\"\n  }\n]",
          "type": "json"
        },
        {
          "title": "Expanded and Threaded:",
          "content": " [\n  {\n    \"_id\": \"5411514d8c1fd625dc2ab8c9\",\n    \"__unid\": \"A4D2533D7A91573E80257D1900276F8D\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"Response\",\n    \"Subject\": \"This is a response\",\n    \"Comment\": \"This is a response\",\n    \"__created\":\"2014-07-18T07:11:56Z\",\n    \"__modified\":\"2014-07-18T07:13:19Z\",\n    \"children\": [\n    {\n      \"_id\": \"5411514d8c1fd625dc2ab8c3\",\n      \"__unid\": \"8D58E7A1EFD6899C80257D1900276F8E\",\n      \"__parentid\": \"A4D2533D7A91573E80257D1900276F8D\",\n      \"__form\": \"ResponseToResponse\",\n      \"Subject\": \"This is a response to a response\",\n      \"Comment\": \"This is a response to a response\",\n      \"__created\":\"2014-07-18T07:11:56Z\",\n      \"__modified\":\"2014-07-18T07:13:19Z\"\n    }\n  ]\n  },\n  {\n    \"_id\": \"5411514e8c1fd625dc2ab8d3\",\n    \"__unid\": \"3411614A3E45C7FB80257D1900276F92\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"Response\",\n    \"Subject\": \"This is a response\",\n    \"Comment\": \"This is a response\",\n    \"__created\":\"2014-07-18T07:11:56Z\",\n    \"__modified\":\"2014-07-18T07:13:19Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/responses/:db/:collection/:unid",
    "title": "Get Responses",
    "description": "<p>Given a database, collection name and document id, this method will return to you a list of collection names and document ids that are responses to this document.</p>",
    "name": "getResponses",
    "version": "1.0.20160607",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "expand",
            "description": "<p>If you add &quot;&amp;expand=true&quot; you will get the full details of the response documents, otherwise for each response you will get the collection it is in, and its __unid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "result",
            "description": "<p>An object array containing response documents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not Expanded:",
          "content": "[\n  {\n    \"_id\": \"5411514d8c1fd625dc2ab8c9\",\n    \"__unid\": \"A4D2533D7A91573E80257D1900276F8D\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"Response\"\n  },\n  {\n    \"_id\": \"5411514e8c1fd625dc2ab8d3\",\n    \"__unid\": \"3411614A3E45C7FB80257D1900276F92\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"ResponseToResponse\"\n  },\n  {\n    \"_id\": \"5411514d8c1fd625dc2ab8c3\",\n    \"__unid\": \"8D58E7A1EFD6899C80257D1900276F8E\",\n    \"__parentid\": \"A4D2533D7A91573E80257D1900276F8D\",\n    \"__form\": \"ResponseToResponse\"\n  }\n]",
          "type": "json"
        },
        {
          "title": "Expanded:",
          "content": " [\n  {\n    \"_id\": \"5411514d8c1fd625dc2ab8c9\",\n    \"__unid\": \"A4D2533D7A91573E80257D1900276F8D\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"Response\",\n    \"Subject\": \"This is a response\",\n    \"Comment\": \"This is a response\",\n    \"__created\":\"2014-07-18T07:11:56Z\",\n    \"__modified\":\"2014-07-18T07:13:19Z\"\n  },\n  {\n    \"_id\": \"5411514e8c1fd625dc2ab8d3\",\n    \"__unid\": \"3411614A3E45C7FB80257D1900276F92\",\n    \"__parentid\": \"BAB78224CA0B0FEC80257D1900276F91\",\n    \"__form\": \"Response\",\n    \"Subject\": \"This is a response\",\n    \"Comment\": \"This is a response\",\n    \"__created\":\"2014-07-18T07:11:56Z\",\n    \"__modified\":\"2014-07-18T07:13:19Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document/:db/:collection/:unid",
    "title": "Get Document",
    "description": "<p>Returns a document object if the current user is allowed to see it.</p>",
    "name": "getdocument",
    "version": "1.0.20160607",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "all",
            "description": "<p>An optional URL query string parameter when added, an extra boolean field &quot;__iseditable&quot; which defines whether the current user is allowed to edit the document</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the content of the document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n  \"_id\":\"53c8cf7783217c4dd0a557f6\",\n  \"Formname\":\"Response\",\n  \"ThreadSort\":\" 201218/062011:17:20 771AB2C8B80E229980257A210038850A\",\n  \"ThreadIndent\":\". . \",\n  \"From\":\"CN=Matt White/O=Exhilarate\",\n  \"ParentForm\":\"Response\",\n  \"ParentSubject\":\"Response\",\n  \"Categories\":\"Sales\",\n  \"Body\":{\n    \"type\":\"multipart\",\n    \"content\":[\n      {\n        \"contentType\":\"multipart/alternative; Boundary=\\\"0__=0FBBF78ADFB9AAF98f9e8a93df938690918c0FBBF78ADFB9AAF9\\\"\",\n\"contentDisposition\":\"inline\"\n      },\n      {\n        \"contentType\":\"text/plain; charset=US-ASCII\",\n        \"data\":\"This looks good to me - we need to make sure that the right Project Manager\\r\\nis assigned to this project\",\n        \"boundary\":\"--0__=0FBBF78ADFB9AAF98f9e8a93df938690918c0FBBF78ADFB9AAF9\"\n      },\n      {\n        \"contentType\":\"text/html; charset=US-ASCII\",\n        \"contentDisposition\":\"inline\",\n        \"data\":\"<html><body><font size=\\\"1\\\" face=\\\"sans-serif\\\">This looks good to me - we need to make sure that the right Project Manager is assigned to this project </font></body></html>\",\n        \"boundary\":\"--0__=0FBBF78ADFB9AAF98f9e8a93df938690918c0FBBF78ADFB9AAF9\"\n      }\n    ]\n  },\n  \"Body__parsed\":\"<html><body><font size=\\\"1\\\" face=\\\"sans-serif\\\">This looks good to me - we need to make sure that the right Project Manager is assigned to this project </font></body></html>\",\n  \"Subject\":\"Looks good to me\",\n  \"__href\":\"http://dev.londc.com:80/demos/Discussion.nsf/api/data/documents/unid/FC7D00934676A6B580257D1900278BAA\",\n  \"__unid\":\"FC7D00934676A6B580257D1900278BAA\",\n  \"__noteid\":\"114E\",\n  \"__parentid\":\"E2445C89357BB15080257D1900278BA9\",\n  \"__created\":\"2014-07-18T07:11:56Z\",\n  \"__modified\":\"2014-07-18T07:13:19Z\",\n  \"__authors\":  [ \"CN=Matt White/O=Exhilarate\", \"CN=Matt White/O=Exhilarate\" ],\n  \"__form\":\"Response\",\n  \"_files\": [ \"api.xls\" ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document/:db/:unid",
    "title": "Get Document Location",
    "description": "<p>If you know the __unid for a document, but not which collection it is in, this method will tell you the collection the document is in.</p>",
    "name": "getdocumentcollection",
    "version": "1.0.20160607",
    "group": "Document",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the name of the collection that the document is located in</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\"collection\": \"main\"}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "post",
    "url": "/documents/:db",
    "title": "Get Document Collection",
    "description": "<p>Given a database, and an array of __unid values, return an array of document objects</p>",
    "name": "getdocumentscollection",
    "version": "1.0.20160801",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "arrayofunids",
            "description": "<p>The list of __unid values that you want to get corresponding document objects for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": " {\n  \"docs\": [{\"__form\": \"main\", \"__unid\": \"BA4B82DE1B8D9BBB862573C300078738\"}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "result",
            "description": "<p>An object array containing response documents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n{\n\"_id\": \"5729d4cebb68f05e647caa95\",\n\"From\": \"CN=Matt White/O=Exhilarate\",\n\"AbbreviateFrom\": \"Matt White/Exhilarate\",\n\"AltFrom\": \"CN=Matt White/O=Exhilarate\",\n\"ThreadId\": \"MWHE-9N4L4G\",\n\"MainID\": \"BEAC9B0A0192689380257D380054BC3B\",\n\"AbrFrom\": \"Matt_White__Exhilarate\",\n\"Body\": \"\\r\\nWhen you migrate your data we also migrate file attachments. We provide=\\r\\n a\\r\\nvery simple URL structure to access those files in future:\\r\\nhttp://nsf2.com/1.0/attachment/mydatabase/mycollection/documentunid/att=\\r\\nachmentname.txt\\r\\n\\r\\n\\r\\nWe apply document level security for the files, so you must be able to =\\r\\nsee\\r\\nthe document to get the file, and if you are a super user you can also =\\r\\nuse\\r\\nthe API to remove file attachments from the database.=\\r\\n\",\n\"NewsLetterSubject\": \"Accessing File Attachments\",\n\"Subject\": \"Accessing File Attachments\",\n\"Categories\": \"API\",\n\"WebCategories\": \"API\",\n\"Abstract\": \"When you migrate your data we also migrate file attachments. We provide a very simple URL structure to access those files in future: http://nsf2.com/1.0/attachment/mydatabase/mycollection/documentunid/attachmentname.txt\\r\\nWe apply document level security for the files, so you must be able to see the ...\",\n\"__href\": \"http://dev.londc.com:80/demos/discussion.nsf/api/data/documents/unid/BEAC9B0A0192689380257D380054BC3B\",\n\"__unid\": \"BEAC9B0A0192689380257D380054BC3B\",\n\"__noteid\": \"1172\",\n\"__created\": \"2014-08-18T15:25:32Z\",\n\"__modified\": \"2014-08-18T15:25:40Z\",\n\"__authors\": \"CN=Matt White/O=Exhilarate\",\n\"__form\": \"MainTopic\",\n\"__readerrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-reader\",\n\"__authorrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-author\",\n\"Body__parsed\": \"<html><body><font size=\\\"4\\\" color=\\\"#4F4F4F\\\" face=\\\"Helvetica-Light\\\">When you migrate your data we also migrate file attachments. We provide a very simple URL structure to access those files in future: </font><a href=\\\"http://nsf2.com/1.0/attachment/mydatabase/mycollection/documentunid/attachmentname.txt\\\"><font size=\\\"4\\\" face=\\\"Helvetica-Light\\\">http://nsf2.com/1.0/attachment/mydatabase/mycollection/documentunid/attachmentname.txt</font></a><p><font size=\\\"4\\\" color=\\\"#4F4F4F\\\" face=\\\"Helvetica-Light\\\">We apply document level security for the files, so you must be able to see the document to get the file, and if you are a super user you can also use the API to remove file attachments from the database.</font></body></html>\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "put",
    "url": "/document/:db/:collection",
    "title": "Insert Document (array or no UNID)",
    "description": "<p>When you want to insert a document use this method and LDC Via will generate a UNID for you. Or, if you want to insert an array of documents in a single request.</p>",
    "name": "insertdocuments",
    "version": "1.0.20160607",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "document",
            "description": "<p>A JSON object describing the fields on the document that you want to insert or an array oj objects if you want to insert multiple documents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Request (Single Document):",
          "content": " {\n  \"FormName\": \"MainTopic\",\n  \"Categories\", [\"category 1\", \"category 2\"],\n  \"From\": \"fred@ldcvia.com\",\n  \"AbbreviateFrom\": \"Fred Bloggs\",\n  \"Body\": {\n    \"type\": \"multipart\",\n    \"content\": [{\n      \"contentType\": \"text/plain; charset=UTF-8\",\n      \"data\": \"<p>Some HTML</p>\"\n    }]\n  },\n  \"Subject\": \"The subject\",\n}",
          "type": "json"
        },
        {
          "title": "Sample Request (Array of documents):",
          "content": " [{\n  \"FormName\": \"MainTopic\",\n  \"Categories\", [\"category 1\", \"category 2\"],\n  \"From\": \"fred@ldcvia.com\",\n  \"AbbreviateFrom\": \"Fred Bloggs\",\n  \"Body\": {\n    \"type\": \"multipart\",\n    \"content\": [{\n      \"contentType\": \"text/plain; charset=UTF-8\",\n      \"data\": \"<p>Some HTML</p>\"\n    }]\n  },\n  \"Subject\": \"The subject\",\n}, {\n  \"FormName\": \"MainTopic\",\n  \"Categories\", [\"category 1\", \"category 2\"],\n  \"From\": \"fred@ldcvia.com\",\n  \"AbbreviateFrom\": \"Fred Bloggs\",\n  \"Body\": {\n    \"type\": \"multipart\",\n    \"content\": [{\n      \"contentType\": \"text/plain; charset=UTF-8\",\n      \"data\": \"<p>Some more HTML</p>\"\n    }]\n  },\n  \"Subject\": \"The second subject\",\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "response",
            "description": "<p>If a single document is submitted, a string representing the URL to access the document just submitted. If an array of documents was submitted then an array of URLs will be returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Single URL returned:",
          "content": "/1.0/document/mydb/mycollection/9ca562f6-0eb7-4f44-b01e-7ca805fcc74d",
          "type": "json"
        },
        {
          "title": "Array of URLs returned:",
          "content": "['/1.0/document/mydb/mycollection/9ca562f6-0eb7-4f44-b01e-7ca805fcc74d', '/1.0/document/mydb/mycollection/9ca562f6-0eb7-4f44-b01e-7ca805fcc74e']",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "put",
    "url": "/document/:db/:collection/:unid",
    "title": "Insert Document (with UNID)",
    "description": "<p>When you want to insert a document use this method.</p>",
    "name": "insertdocumentunid",
    "version": "1.0.20160607",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "document",
            "description": "<p>A JSON object describing the fields on the document that you want to insert</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Request:",
          "content": " {\n  \"FormName\": \"MainTopic\",\n  \"Categories\", [\"category 1\", \"category 2\"],\n  \"From\": \"fred@ldcvia.com\",\n  \"AbbreviateFrom\": \"Fred Bloggs\",\n  \"Body\": {\n    \"type\": \"multipart\",\n    \"content\": [{\n      \"contentType\": \"text/plain; charset=UTF-8\",\n      \"data\": \"<p>Some HTML</p>\"\n    }]\n  },\n  \"Subject\": \"The subject\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "response",
            "description": "<p>A string response of &quot;success&quot; will be sent if the document was inserted correctly</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/undelete/:db/:collection/:unid",
    "title": "Undelete Document",
    "description": "<p>When a document is deleted, it moves into a trash state. This method allows a super user or administrator to restore a deleted document</p>",
    "name": "undeletedocument",
    "version": "1.0.20160607",
    "group": "Document",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>A string &quot;ok&quot; when the document has been undeleted.</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.trash.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "post",
    "url": "/document/:db/:collection/:unid",
    "title": "Update Document",
    "description": "<p>When you want to update a document use this method. You only need to post the fields that you want to update. Those fields will overwrite matching fields in the document, or add them if they don’t already exist. To remove a field set its value to null.</p>",
    "name": "updatedocument",
    "version": "1.0.20160607",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "document",
            "description": "<p>A JSON object describing the fields on the document that you want to update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Request:",
          "content": " {\n  \"FormName\": \"MainTopic\",\n  \"Categories\", [\"category 1\", \"category 2\"],\n  \"From\": \"fred@ldcvia.com\",\n  \"AbbreviateFrom\": \"Fred Bloggs\",\n  \"Body\": {\n    \"type\": \"multipart\",\n    \"content\": [{\n      \"contentType\": \"text/plain; charset=UTF-8\",\n      \"data\": \"<p>Some HTML</p>\"\n    }]\n  },\n  \"Subject\": \"The subject\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "response",
            "description": "<p>A string response of &quot;success&quot; will be sent if the document updated correctly</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/domainsearch/:searchkey",
    "title": "Get Results",
    "description": "<p>Get results from a domain search. These are treated in much the same way as a normal collection except that you can have documents of different types in the same result set.</p>",
    "name": "domainsearch",
    "version": "1.0.20160607",
    "group": "Domain_Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "start",
            "description": "<p>A URL query string parameter to define where in the results to start. Default == 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "count",
            "description": "<p>A URL query string parameter to define how many documents to return in the response. Default == 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortasc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results ascending with. Default == null</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortdesc",
            "description": "<p>A URL query string parameter to allow you to send the name of a field to sort results descending with. Default == __created</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the count of documents the user can see, and an array of document objects. Each document object has two additional fields: __database tells you which database it can be located in. __uri gives you the API URI needed to access the document directly.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " {\n\"count\": 24,\n\"data\":[\n{\n\"_id\": \"5729d4cebb68f05e647caa9a\",\n\"From\": \"CN=Matt White/O=Exhilarate\",\n\"AbbreviateFrom\": \"Matt White/Exhilarate\",\n\"AltFrom\": \"CN=Matt White/O=Exhilarate\",\n\"ThreadId\": \"MWHE-9N7QT8\",\n\"MainID\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"AbrFrom\": \"Matt_White__Exhilarate\",\n\"WebCategories\": \"Examples\",\n\"Body\": \"(See attached file: Hello.docx)\",\n\"NewsLetterSubject\": \"Small Attachment\",\n\"Subject\": \"Small Attachment\",\n\"Categories\": \"Examples\",\n\"__href\": \"http://dev.londc.com:80/demos/discussion.nsf/api/data/documents/unid/AA43BC3CD46BF58280257D3B006ACE96\",\n\"__unid\": \"AA43BC3CD46BF58280257D3B006ACE96\",\n\"__noteid\": \"117A\",\n\"__created\": \"2014-08-21T19:26:37Z\",\n\"__modified\": \"2014-08-22T06:28:37Z\",\n\"__authors\": \"CN=Matt White/O=Exhilarate\",\n\"__form\": \"MainTopic\",\n\"__readerrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-reader\",\n\"__authorrole\": \"dev-londc-com-demos-discussion-nsf1462359269872-MainTopic-author\",\n\"_files\":[\"Hello.docx\"],\n\"Body__parsed\": \"<html><body><i>(See attached file: Hello.docx)</i></body></html>\",\n\"__database\": \"discussion-nsf\",\n\"__uri\": \"/1.0/document/discussion-nsf/MainTopic/AA43BC3CD46BF58280257D3B006ACE96\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.domainsearch.v1.js",
    "groupTitle": "Domain_Search"
  },
  {
    "type": "get",
    "url": "/domainsearch",
    "title": "Get list of domain searches",
    "description": "<p>Returns a list of all domain searches that a user has initiated</p>",
    "name": "domainsearches",
    "version": "1.0.20160607",
    "group": "Domain_Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "result",
            "description": "<p>An array of domain search objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n{\n  \"search\": {\n    \"fulltext\": \"some text\"\n  },\n  \"searchurl\": \"/1.0/domainsearch/someuniquekey\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.domainsearch.v1.js",
    "groupTitle": "Domain_Search"
  },
  {
    "type": "post",
    "url": "/domainsearch",
    "title": "Start Domain Search",
    "description": "<p>Start a search against multiple (or all) databases in your organisation</p>",
    "group": "Domain_Search",
    "name": "startdomainsearch",
    "version": "1.0.20160607",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "databases",
            "description": "<p>A list of databases to perform the search against. If ommitted, the search will be performed against all databases</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>The filter you want to search with</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Text filters:",
          "content": "{\n  \"search\": {\n  \"filters\": [{\n    \"operator\": \"contains\",\n    \"field\": \"Body\",\n    \"value\": \"test\"\n  },\n  {\n    \"operator\": \"equals\",\n    \"field\": \"From\",\n    \"value\": \"fred@ldcvia.com\"\n  }]\n  },\n  \"databases\": [\n  \t\"dev-londc-com-demos-discussion-nsf1450448024677\",\n    \"surfacebook-demos-teamroom-nsf\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Date Filters:",
          "content": "{\n  \"search\": {\n  \"filters\": [\n  {\n    \"operator\": \"$gte\",\n    \"field\": \"__created\",\n    \"value\": \"2015-01-01T00:00:00\"\n  },\n  {\n    \"operator\": \"$lte\",\n    \"field\": \"__created\",\n    \"value\": \"2015-01-31T23:59:59\"\n  }\n  ]\n  },\n  \"databases\": [\n  \t\"dev-londc-com-demos-discussion-nsf1450448024677\",\n    \"surfacebook-demos-teamroom-nsf\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Full Text Query:",
          "content": "{\n  \"search\": {\n    \"fulltext\": \"some text\"\n  },\n  \"databases\": [\n  \t\"dev-londc-com-demos-discussion-nsf1450448024677\",\n    \"surfacebook-demos-teamroom-nsf\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DomainSearchDetails",
            "description": "<p>An object giving you details about the domain search which you have started. Search results are retained for 24 hours</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n  \"search\": {\n    \"fulltext\": \"some text\"\n  },\n  \"searchurl\": \"/1.0/domainsearch/someuniquekey\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.domainsearch.v1.js",
    "groupTitle": "Domain_Search"
  },
  {
    "type": "get",
    "url": "/export/:db/:collection",
    "title": "Export to Excel",
    "description": "<p>Given a database and collection name, this method will return an Excel spreadsheet list of documents in the collection. The response will contain a list of documents from the collection, you can control how many documents and where in the collection to get them from using URL parameters. The count of the documents have document level security applied to them, so if there are 100 documents in the collection but the user can see only 10, then the count will be 10.</p>",
    "name": "exportcollection",
    "version": "1.0.20160801",
    "group": "Export",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "count",
            "description": "<p>An optional number of documents to export. Default is 500</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "start",
            "description": "<p>An optional starting position in the collection to export</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortasc",
            "description": "<p>An optional parameter to allow you to specify which field will be sorted ascending. None by default</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sortdesc",
            "description": "<p>An optional parameter to allow you to specify which field will be sorted descending. __created by default</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "excelfile",
            "optional": false,
            "field": "result",
            "description": "<p>A binary Excel file</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Export"
  },
  {
    "type": "get",
    "url": "/eml/:db/:collection/:unid",
    "title": "Export to EML",
    "description": "<p>Given a database, collection name and document id, this method will return an EML format file with all fields on the document. This is designed to be used with migrated Domino mail files. It will attempt to run with other files but may not return content.</p>",
    "name": "exporteml",
    "version": "1.0.20160801",
    "group": "Export",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "emlfile",
            "optional": false,
            "field": "result",
            "description": "<p>A binary EML file</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.export.v1.js",
    "groupTitle": "Export"
  },
  {
    "type": "get",
    "url": "/pdf/:db/:collection/:unid",
    "title": "Export to PDF",
    "description": "<p>This method will return an PDF export of a document. Given a database, collection name and document id, this method will return PDF with all fields on the document. If the metadata for the collection in which the document resides has &quot;Key Fields&quot; defined, these are the fields which will be exported in the order defined in the metadata. Otherwise all fields on the document will be exported.</p>",
    "name": "exportpdf",
    "version": "1.0.20160801",
    "group": "Export",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "pdffile",
            "optional": false,
            "field": "result",
            "description": "<p>A binary PDF file</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.export.v1.js",
    "groupTitle": "Export"
  },
  {
    "type": "get",
    "url": "/metadata/:db/:collection",
    "title": "Get MetaData",
    "description": "<p>Get metadata for a collection including list of fields, data types and other settings.</p>",
    "name": "getmetadata",
    "version": "1.0.20160607",
    "group": "MetaData",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result:",
          "content": " {\n   \"_id\":\"53c8cc790e76eee06aed49ba\",\n   \"dbname\":\"dev-londc-com-demos-discussion-nsf\",\n   \"collectionname\":\"MainTopic\",\n   \"__v\":1,\n   \"lastimported\":\"2014-07-18T07:40:49.632Z\",\n   \"fields\":[\n      {\n         \"fieldname\":\"From\",\n         \"_id\":\"53c8cf810e76eee06aed4ad7\",\n         \"fieldtype\":\"Names\"\n      },\n      {\n         \"fieldname\":\"AbbreviateFrom\",\n         \"_id\":\"53c8cf810e76eee06aed4ad6\",\n         \"fieldtype\":\"String\"\n      },\n      {\n         \"fieldname\":\"Current_Status\",\n         \"_id\":\"53c8cf810e76eee06aed4ac8\",\n         \"fieldtype\":\"Number\"\n      },\n      {\n         \"fieldname\":\"FilebyDate\",\n         \"_id\":\"53c8cf810e76eee06aed4ac6\",\n         \"fieldtype\":\"Date\"\n      },\n      {\n         \"fieldname\":\"Editors\",\n         \"_id\":\"53c8cf810e76eee06aed4abf\",\n         \"fieldtype\":\"Authors\"\n      },\n      {\n         \"fieldname\":\"readers\",\n         \"_id\":\"53c8cf810e76eee06aed4aa2\",\n         \"fieldtype\":\"Readers\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.metadata.v1.js",
    "groupTitle": "MetaData"
  },
  {
    "type": "get",
    "url": "/resetmetadata/:db/:collection",
    "title": "Reset MetaData",
    "description": "<p>When data is added to the database, we maintain a description of the fields and data types in each collection. It is possible for this meta data to get out of sync with the data or become corrupt. This method will reset the meta data. Be aware that if you have set any readers and authors fields in the meta data that these will be reset and thus all document security will be disabled. Because of this potential, you must be a super user or administrator to run this method.</p>",
    "name": "resetmetadata",
    "version": "1.0.20160607",
    "group": "MetaData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "count",
            "description": "<p>Optional parameter to specify the number of documents to sample for building the field list</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{'result': 'ok'}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.metadata.v1.js",
    "groupTitle": "MetaData"
  },
  {
    "type": "post",
    "url": "/metadata/:db/:collection",
    "title": "Update MetaData",
    "description": "<p>You can update meta data for a collection with this method. The most common use for this will be to enable and disable readers and authors fields, thus controlling document level security.</p>",
    "name": "setmetadata",
    "version": "1.0.20160607",
    "group": "MetaData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>A JSON object describing the new metadata for the collection</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": " {\n   \"fields\":[\n      {\n         \"fieldname\":\"From\",\n         \"fieldtype\":\"Names\"\n      },\n      {\n         \"fieldname\":\"AbbreviateFrom\",\n         \"fieldtype\":\"String\"\n      },\n      {\n         \"fieldname\":\"Current_Status\",\n         \"fieldtype\":\"Number\"\n      },\n      {\n         \"fieldname\":\"FilebyDate\",\n         \"fieldtype\":\"Date\"\n      },\n      {\n         \"fieldname\":\"Editors\",\n         \"fieldtype\":\"Authors\"\n      },\n      {\n         \"fieldname\":\"readers\",\n         \"fieldtype\":\"Readers\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{'result': 'ok'}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.metadata.v1.js",
    "groupTitle": "MetaData"
  },
  {
    "type": "delete",
    "url": "/userdetails/:email",
    "title": "Delete Other User Details",
    "description": "<p>To remove a user from your organisation use this method.</p>",
    "name": "deleteotheruserdetails",
    "version": "1.0.20160607",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>A URL query string parameter. The email of the user who's details you want to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>A string result of &quot;ok&quot; if the update was successful.</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/userdetails/:email",
    "title": "Get Other User Details",
    "description": "<p>The get another user’s details, use this method. If you are a super user or the same user as the email address, you will be able to get the API Key, otherwise that will not be returned.</p>",
    "name": "getotheruserdetails",
    "version": "1.0.20160607",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user who's details you want to get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object. If you are a super user, the user's api key will be returned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": " {\n  \"notesnames\":[\n    {\n      \"notesname\":\"CN=Fred Bloggs/O=FCL\"\n    },\n    {\n      \"notesname\":\"Fred Bloggs\"\n    },\n    {\n      \"notesname\":\"DocEditors\",\n      \"group\": true\n    }\n  ],\n  \"apikey\":\"hwxsftXnd88KFq\",\n  \"username\":\"Fred Bloggs\",\n  \"email\":\"fred@fclonline.com\",\n  \"admin\":false,\n  \"superuser\":false,\n  \"databases\":[\n    {\n      \"database\":\"dev-londc-com-demos-discussion-nsf\",\n      \"_id\":\"53c8cc6e0e76eee06aed497b\"\n    },\n    {\n      \"database\":\"dev-londc-com-demos-journal-nsf\",\n      \"_id\":\"53cecd0819a5ac73b57964e5\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/userdetails",
    "title": "Get User Details",
    "description": "<p>Get your own user details</p>",
    "name": "getuserdetails",
    "version": "1.0.20160607",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>A JSON object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": " {\n  \"notesnames\":[\n    {\n      \"notesname\":\"CN=Fred Bloggs/O=FCL\"\n    },\n    {\n      \"notesname\":\"Fred Bloggs\"\n    },\n    {\n      \"notesname\":\"DocEditors\",\n      \"group\": true\n    }\n  ],\n  \"apikey\":\"hwxsftXnd88KFq\",\n  \"username\":\"Fred Bloggs\",\n  \"email\":\"fred@fclonline.com\",\n  \"admin\":false,\n  \"superuser\":false,\n  \"databases\":[\n    {\n      \"database\":\"dev-londc-com-demos-discussion-nsf\",\n      \"_id\":\"53c8cc6e0e76eee06aed497b\"\n    },\n    {\n      \"database\":\"dev-londc-com-demos-journal-nsf\",\n      \"_id\":\"53cecd0819a5ac73b57964e5\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/userdetails/:email",
    "title": "Update Other User Details",
    "description": "<p>To update a user’s details, use this method. You must be a super user to use this method.</p>",
    "name": "updateotheruserdetails",
    "version": "1.0.20160607",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>A URL query string parameter. The email of the user who's details you want to get</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": "<p>A JSON object with the updated user details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": " {\n  \"notesnames\":[\n    {\n      \"notesname\":\"CN=Fred Bloggs/O=FCL\"\n    },\n    {\n      \"notesname\":\"Fred Bloggs\"\n    },\n    {\n      \"notesname\":\"DocEditors\",\n      \"group\": true\n    },\n    {\n      \"notesname\":\"Anewgroup\",\n      \"group\": true\n    }\n  ],\n  \"apikey\":\"anewapikey\",\n  \"username\":\"Fred Bloggs\",\n  \"email\":\"fredhasanewemail@fclonline.com\",\n  \"databases\":[\n    {\n      \"database\":\"dev-londc-com-demos-discussion-nsf\",\n    },\n    {\n      \"database\":\"dev-londc-com-demos-journal-nsf\",\n    },\n    {\n      \"database\": \"a-new-database\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>A string result of &quot;ok&quot; if the update was successful.</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/newapikey",
    "title": "New API Key",
    "description": "<p>Generates a random key that can be used for a user's API Key. This does not update any user settings. It is a utility function.</p>",
    "group": "Utilities",
    "name": "GetNewAPIKey",
    "version": "1.0.20160607",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "APIKey",
            "description": "<p>A new API Key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "cb0fc9c38cb74bcb6ac177f1af1dd4f0",
          "type": "string"
        }
      ]
    },
    "filename": "controllers/api.user.v1.js",
    "groupTitle": "Utilities"
  },
  {
    "type": "get",
    "url": "/doclink/:db/:collection/:unid/:field",
    "title": "Get Doclink",
    "description": "<p>Parses a rich text field and extracts any doclink information embedded within it. It returns a JSON object with the parsed doc links (or an empty array if no doc links were found). There are three possible formats, for database links, view links and document links. If the document link is linking to a document in the same database the object will contain the notes:// url and also the apiurl to get the related document. If the document is in a different database then the object will just contain the notes url.</p>",
    "name": "getdoclinks",
    "version": "1.0.20160607",
    "group": "Utilities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>An object containing the doclink information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": " [\n  {\n    \"notesurl\": \"Notes://Mixed2/80257AC50035BEE2/9B03730C11B24C94852565E20060BED0/BC9F435105F5F9A880257C3100401F50\",\n    \"type\": \"doclink\",\n    \"documentid\": \"BC9F435105F5F9A880257C3100401F50\",\n    \"apiurl\": \"/1.0/document/dev-londc-com-teamroom-nsf/Response/BC9F435105F5F9A880257C3100401F50\"\n  },\n  {\n    \"notesurl\": \"Notes://Mixed2/80257AC50035BEE2/9B03730C11B24C94852565E20060BED0\",\n    \"type\": \"viewlink\"\n  },\n  {\n    \"notesurl\": \"Notes://Mixed2/80257AC50035BEE2\",\n    \"type\": \"dblink\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.document.v1.js",
    "groupTitle": "Utilities"
  },
  {
    "type": "get",
    "url": "/organisations",
    "title": "Get Organisations",
    "description": "<p>Returns an array of all organisations in an installation of LDC Via. Only available to administrators</p>",
    "name": "getorganisations",
    "version": "1.0.20160607",
    "group": "Utilities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "result",
            "description": "<p>An array of organisation objects</p>"
          }
        ]
      }
    },
    "filename": "controllers/api.groups.v1.js",
    "groupTitle": "Utilities"
  },
  {
    "type": "get",
    "url": "/list/:db/:collection/:fieldname",
    "title": "Get list of distinct values",
    "description": "<p>Similar in concept to an @DBColumn in Notes, this will return a unique list of values from a field in a collection</p>",
    "name": "list",
    "version": "1.0.20160607",
    "group": "Utilities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "result",
            "description": "<p>A string array of distinct values in the field across all documents in the collection</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\"value one\", \"value two\"]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Utilities"
  },
  {
    "type": "post",
    "url": "/mergecollections/:db",
    "title": "Merge Two Collections",
    "description": "<p>Merge the content of two collections together</p>",
    "name": "mergecollections",
    "version": "1.0.20160607",
    "group": "Utilities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ResponseObject",
            "description": "<p>Object describing the two collections to merge. Data from collection1 will be moved to collection2, collection1 will be removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\"sourcecollection\": \"collection1\",\n\"targetcollection\": \"collection2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\"result\": \"ok\"}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api.collection.v1.js",
    "groupTitle": "Utilities"
  }
] });
