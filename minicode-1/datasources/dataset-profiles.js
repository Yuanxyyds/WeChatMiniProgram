/**
 * 全局及页面的数据源变量定义文件
 */

export default {
  "$global": {
    "state": {}
  },
  "success": {
    "state": {},
    "pageName": "提交成功"
  },
  "indexModel": {
    "state": {
      "forminfo": {
        "name": "forminfo",
        "label": "表单变量集合",
        "varType": "state",
        "dataType": "object",
        "initMethod": {},
        "initialValue": {
          "name": "",
          "phone": null,
          "hopeto": [],
          "unitname": "",
          "wxnumber": "",
          "joinnumber": ""
        }
      },
      "agreeRule": {
        "name": "agreeRule",
        "label": "协议是否同意",
        "varType": "state",
        "dataType": "boolean",
        "initMethod": {},
        "initialValue": false
      },
      "agreement": {
        "name": "agreement",
        "label": "弹窗控制查看协议",
        "varType": "state",
        "dataType": "boolean",
        "initMethod": {},
        "initialValue": false
      },
      "invitationinfo": {
        "name": "invitationinfo",
        "label": "表单内容",
        "varType": "datasource",
        "dataType": "new-record",
        "initMethod": {
          "name": "",
          "params": {}
        },
        "updateMethod": {
          "name": "create",
          "params": {}
        },
        "dataSourceName": "invitationForm"
      },
      "distinguishAgreement": {
        "name": "distinguishAgreement",
        "label": "区分协议的弹窗变量",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      }
    },
    "pageName": "邀请函主页"
  }
}
