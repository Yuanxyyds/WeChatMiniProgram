/**
 * 数据源摘要描述数组
 */
module.exports = [
  {
    "id": "data-27VeiecTU",
    "title": "联系人-示例",
    "name": "connect",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-kind": "tcb",
      "name": "connect",
      "description": "示例数据源",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "联系人-示例",
      "x-relatedType": "exist",
      "x-viewId": "view-332vx6j4n4",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "689bffc",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "93bdee8",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "cafc2aa",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "phone": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "b6d1c93",
          "format": "tel",
          "x-index": 10,
          "title": "电话",
          "type": "string",
          "x-unique": false
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "cf4ef07",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "name": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "aac4c38",
          "format": "",
          "x-index": 8,
          "title": "姓名",
          "type": "string",
          "x-unique": false
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "001c19c",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "relationCustomer": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "67cd45c",
          "format": "father-son",
          "x-index": 12,
          "title": "客户",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vx3sw1s",
            "type": "father-son",
            "parentDataSourceName": "customer"
          }
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "b16c847",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": [
        "name",
        "phone",
        "relationCustomer"
      ]
    },
    "methods": []
  },
  {
    "id": "data-27VehRT1j",
    "title": "客户-示例",
    "name": "customer",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-kind": "tcb",
      "name": "customer",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "客户",
      "x-relatedType": "exist",
      "x-viewId": "view-332vx3s3ls",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "5757dd3",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "3029a0a",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "644b2f8",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "employee_num": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "ae6c959",
          "name": "employee_num",
          "format": "",
          "x-index": 8,
          "title": "员工数",
          "type": "number",
          "x-unique": false
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "77a1cb0",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "name": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "bcf5721",
          "name": "name",
          "format": "",
          "x-index": 8,
          "title": "客户名称",
          "type": "string",
          "x-unique": false
        },
        "industry": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "9d0aaa3",
          "format": "",
          "x-index": 8,
          "title": "行业",
          "type": "string",
          "x-unique": false
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "05d7066",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "4076c76",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": [
        "employee_num",
        "name",
        "industry"
      ]
    },
    "methods": []
  },
  {
    "id": "data-27VehsuQo",
    "title": "邀请函表单收集数据",
    "name": "invitationForm",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-id": "a76174b",
      "title": "",
      "type": "object",
      "x-index": 1,
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "x-relatedType": "exist",
      "x-viewId": "view-332vx0ukcw",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "8f5ca4f",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "unitName": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "b20835e",
          "format": "",
          "x-layoutShow": true,
          "title": "公司名称",
          "type": "string",
          "x-index": 7
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "4192eca",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "joinNumber": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "8f95ca3",
          "name": "joinNumber",
          "format": "",
          "x-layoutShow": true,
          "x-index": 6,
          "title": "参会人数",
          "type": "number",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "06f8c26",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "0103d9d",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "phone": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "b896306",
          "name": "phone",
          "format": "",
          "x-layoutShow": true,
          "x-index": 5,
          "title": "手机",
          "type": "number",
          "x-unique": false
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-332vwihf0g",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "name": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "623e36b",
          "format": "",
          "x-layoutShow": true,
          "title": "姓名",
          "type": "string",
          "x-index": 4
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "d363485",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "wxNumber": {
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "a4fdaff",
          "format": "",
          "x-layoutShow": true,
          "title": "微信号",
          "type": "string",
          "x-index": 8
        },
        "hopeTo": {
          "x-required": false,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "6bb638a",
          "name": "hopeTo",
          "x-layoutShow": true,
          "x-index": 9,
          "title": "您希望了解的（多选）",
          "type": "array",
          "x-unique": false,
          "items": {
            "enumOptions": [],
            "format": "",
            "type": "string"
          }
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "91a8ae8",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": [
        "unitName",
        "phone",
        "name",
        "joinNumber"
      ]
    },
    "methods": []
  }
]
