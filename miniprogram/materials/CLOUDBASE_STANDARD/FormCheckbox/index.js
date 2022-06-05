import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleronChange from './lowcode/handler/onChange' 
import _handlergetForm from './lowcode/handler/getForm' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'

const widgetProps = { id1: 
   { style: {},
     classList: [],
     rules: [],
     layout: '',
     disabled: undefined,
     underline: true,
     labelVisible: true,
     requiredFlag: true,
     validateStatus: 'success',
     submitFormatter: '',
     validateTrigger: 'onChange',
     displayFormatter: '',
     _parentId: undefined,
     _order: 0,
     widgetType: 'CLOUDBASE_STANDARD:FormItem' },
  id3: 
   { style: {},
     classList: [],
     _parentId: 'id1',
     _order: 0,
     widgetType: 'gsd-h5-react:Checkbox' } }

const evtListeners = {
  onid3$change: [
    {
      key: 'wa98gvjj5at',
      handler:  _handleronChange ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  name: {
    type: String,
    value: "formCheckbox"
  },
  label: {
    type: String,
    value: "复选框"
  },
  range: {
    type: Array,
    value: [{"label":"选项一","value":"first"},{"label":"选项二","value":"second"}]
  },
  value: {
    type: Array,
    value: []
  },
  layout: {
    type: String,
    value: ""
  },
  disabled: {
    type: Boolean,
    value: false
  },
  required: {
    type: Boolean,
    value: false
  },
  requiredMsg: {
    type: String,
    value: "该项为必填项"
  },
  labelVisible: {
    type: Boolean,
    value: true
  },
  requiredFlag: {
    type: Boolean,
    value: false
  },
}

const events = [
  {name: "change", },
]

const handler = {
  onChange: _handleronChange, 
  getForm: _handlergetForm, 
}

const dataBinds = {
  id1: { 
    name: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.name
    ); },
    required: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.required
    ); },
    requiredMsg: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.requiredMsg
    ); },
  },
  id3: { 
    label: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.label
    ); },
    range: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.computed.range
    ); },
    layout: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.computed.layout
    ); },
    disabled: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.disabled
    ); },
    labelVisible: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.labelVisible
    ); },
    requiredFlag: function ($comp, lists, forItems, event) {const $for=forItems; return (
      $comp.props.data.required&&$comp.props.data.requiredFlag
    ); },
  },
}

const config = {"componentType":"formField"}

createComponent('CLOUDBASE_STANDARD:FormCheckbox', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode)
