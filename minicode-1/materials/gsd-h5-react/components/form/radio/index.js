import classNames from '../../../utils/classnames';
import handleEvents from '../../../utils/handleEvents';

Component({
  options: {
    virtualHost: true,
  },
  properties: {
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
    label: {
      type: String,
      value: '标题',
    },
    labelVisible: {
      type: Boolean,
      value: true,
    },
    range: {
      type: Array,
      value: [
        { name: '单选-选项一', value: 'first', checked: true },
        { name: '单选-选项二', value: 'second', checked: false },
      ],
    },
    layout: {
      type: String,
      value: 'horizontal',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    requiredFlag: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    cls: '',
    subCls: '',
    isFlex: true,
    defaultRange: [],
  },
  lifetimes: {
    attached() {
      const { className, layout, disabled, range } = this.properties;
      const isFlex = layout !== 'vertical';
      const cls = classNames({
        'weda-ui': true,
        'weda-radio': true,
        [className]: className,
      });
      const subCls = classNames({
        'weui-cell': true,
        'weui-cell_active': true,
        'weui-check__label': true,
        'weui-cell_disabled': disabled,
      });

      this.setData({ cls, subCls, isFlex, defaultRange: range });
    },
  },
  methods: {
    ...handleEvents([
      {
        name: 'change',
        title: '值改变',
      },
    ]),
  },
});
