import { app, process } from '../../app/weapps-api';
const $app = app;
import { $page } from '../../pages/success/api.js'
export default {
  onPageLoad(query) {
    //console.log('---------> LifeCycle onPageLoad', query)
  },
  onPageShow() {
    //console.log('---------> LifeCycle onPageShow')
  },
  onPageReady() {
    //console.log('---------> LifeCycle onPageReady')
  },
  onPageHide() {
    //console.log('---------> LifeCycle onPageHide')
  },
  onPageUnload() {
    //console.log('---------> LifeCycle onPageUnload')
  },
}