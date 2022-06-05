import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { success as handlers } from '../../app/handlers'
// import index from '../../lowcode/success/index'
import lifecyle from '../../lowcode/success/lifecycle'
import state from '../../lowcode/success/state'
import computed from '../../lowcode/success/computed'
import { $page } from './api'
const $app = app;

const widgetProps = { id10: 
   { style: {},
     classList: [ 'success-content' ],
     title: '',
     _parentId: undefined,
     _order: 0,
     widgetType: 'gsd-h5-react:Container' },
  id2: 
   { style: {},
     classList: [ 'success-icon-content' ],
     title: '',
     _parentId: 'id10',
     _order: 0,
     widgetType: 'gsd-h5-react:Container' },
  id6: 
   { style: {},
     classList: [ 'success-icon' ],
     color: '',
     name: 'success',
     size: 100,
     src: 'https://main.qcloudimg.com/raw/fb383fe8a9f1157e9a22f0a6ec2d5bb9.png',
     _parentId: 'id2',
     _order: 0,
     widgetType: 'CLOUDBASE_STANDARD:Icon' },
  id7: 
   { style: { marginTop: '1rpx' },
     classList: [],
     title: '',
     _parentId: 'id10',
     _order: 1,
     widgetType: 'gsd-h5-react:Container' },
  id8: 
   { style: {},
     classList: [ 'success-submitText' ],
     decode: false,
     level: '0',
     maxLines: 2,
     selectable: false,
     space: '',
     text: '提交成功',
     textAlign: 'center',
     textColor: 'white',
     userSelect: true,
     _parentId: 'id7',
     _order: 0,
     widgetType: 'gsd-h5-react:Text' },
  id9: 
   { style: {},
     classList: [ 'success-tipText' ],
     decode: false,
     level: '0',
     maxLines: 2,
     selectable: false,
     space: '',
     text: '数字生态大会期待您的到来',
     textAlign: 'center',
     textColor: '#878D96',
     userSelect: true,
     _parentId: 'id7',
     _order: 1,
     widgetType: 'gsd-h5-react:Text' } }
/** widget event listeners **/
const evtListeners = {
}
const dataBinds = {
}

createPage('success', 'success', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page)
