import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleraddUnit from './lowcode/handler/addUnit' 
import _handlerisInternalIcon from './lowcode/handler/isInternalIcon' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'

const widgetProps = { id1: 
   { style: 
      { display: 'inline-block',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'center' },
     classList: [],
     title: '',
     _parentId: undefined,
     _order: 1,
     widgetType: 'gsd-h5-react:Container' },
  id3: 
   { style: {},
     classList: [ 'lcap-icon' ],
     title: '',
     _parentId: 'id1',
     _order: 2,
     widgetType: 'gsd-h5-react:Container' },
  id2: 
   { style: { width: '100%', height: '100%', display: 'block' },
     classList: [],
     alt: '[icon]',
     mode: 'aspectFit',
     webp: false,
     lazyLoad: false,
     showMenuByLongpress: false,
     _parentId: 'id3',
     _order: 0,
     widgetType: 'gsd-h5-react:Image' } }

const evtListeners = {
}

const behaviors = []

const properties = {
  src: {
    type: String,
    value: ""
  },
  name: {
    type: String,
    value: "success"
  },
  size: {
    type: Number,
    value: 48
  },
  color: {
    type: String,
    value: ""
  },
}

const events = [
]

const handler = {
  addUnit: _handleraddUnit, 
  isInternalIcon: _handlerisInternalIcon, 
}

const dataBinds = {
  id3: { 
    classList: function ($comp, lists, forItems, event) {const $for=forItems; return (
      concatClassList($comp.handler.isInternalIcon() ? `lcap-icon-${$comp.props.data.name}`: '', widgetProps.id3.classList)
    ); },
    style: function ($comp, lists, forItems, event) {const $for=forItems; return (
      px2rpx({...widgetProps.id3.style, ...($comp.handler.isInternalIcon() ? {"font-size": `${$comp.props.data.size}px`, color: $comp.props.data.color} : {width: `${$comp.props.data.size}px`, height: `${$comp.props.data.size}px`,  color: $comp.props.data.color})})
    ); },
  },
  id2: { 
    src: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.src
    ); },
    _waIf: function ($comp, lists, forItems, event) {const $for=forItems; return (
      !$comp.handler.isInternalIcon()
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Icon', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode)
