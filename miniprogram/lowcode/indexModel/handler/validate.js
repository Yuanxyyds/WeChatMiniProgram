import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/indexModel/api.js'
/*
 * 可通过 $page.handler.xxx 访问这里定义的方法
 * 注意：该方法仅在所属的页面有效
 * 如果需要 async-await，请修改成 export default async function() {}
 */
/**
 * 正则验证手机号码
 */
export default function ({ event, data }) {
  try {
    let phoneReg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    let regPhone = phoneReg.test(event.detail.value);
    if (regPhone) return;
  } catch (e) {
    console.error(e);
  }
}
