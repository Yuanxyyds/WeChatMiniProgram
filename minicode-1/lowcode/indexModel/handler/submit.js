import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/indexModel/api.js'
/*
 * 可通过 $page.handler.xxx 访问这里定义的方法
 * 注意：该方法仅在所属的页面有效
 * 如果需要 async-await，请修改成 export default async function() {}
 */
/**
 * 提交表单
 */
export default async function ({ event }) {
  let { name, phone, joinNumber, unitName, wxNumber, hopeTo, confirm } = event.detail;
  // 判断是否勾选协议
  $page.dataset.state.agreeRule = confirm.includes('true')
   
  delete event.detail['confirm'];
  console.log('info', event.detail)

  if (
    !name ||
    !phone ||
    !joinNumber ||
    !unitName ||
    !wxNumber ||
    hopeTo.length == 0
  ) {
    app.showToast({
      title: '请补充完整信息',
    });
    return;
  }
  if($page.dataset.state.agreeRule) {
        // 若勾选，则提交
    try {
      app.showLoading({
        title: '信息提交中',
        mask: true
      });
      let { data } = await app.dataSources.invitationForm.create(event.detail);
      app.hideLoading();
      if (!data.code) {
        app.navigateTo({
          pageId: `success`,
        });
      } else {
        app.showToast({
          title: '提交失败',
        });
      }
    } catch (error) {
      app.hideLoading();
    }
  } else {
      // 若没勾选，则弹窗
      return app.showToast({
          title: "请确认协议再提交",
          icon: "none",
          duration: 2000 // 2秒
      });
  }
}
