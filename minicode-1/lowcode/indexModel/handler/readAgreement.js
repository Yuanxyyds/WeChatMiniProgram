import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/indexModel/api.js'
/**
 * 
 * 可通过 $page 获取或修改当前页面的 变量 状态 handler lifecyle 等信息
 * 可通过 app 获取或修改全局应用的 变量 状态 等信息
 * 具体可以console.info 在编辑器Console面板查看更多信息
 * 注意：该方法仅在所属的页面有效
 * 如果需要 async-await，请修改成 export default async function() {}
 **/

/**
 * @param {Object} event - 事件对象.
 * @param {string} event.name - 事件名.
 * @param {string} event.target - 事件的目标节点(触发该事件的节点).
 * @param {string} event.currentTarget - 当前处理该事件的节点。包括冒泡和捕获事件。.
 * 
 * @param {Object} data 
 * @param {any} data.target - 获取事件传参的数据 
 **/ 
/**
 * 打开对应弹窗
 */
export default function({event, data}) {
    $page.dataset.state.distinguishAgreement = data.target;
    $page.dataset.state.agreement=!$page.dataset.state.agreement;

}