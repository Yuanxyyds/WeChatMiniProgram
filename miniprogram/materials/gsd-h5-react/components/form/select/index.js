import classNames from '../../../utils/classnames';
import dayjs from '../../../utils/dayjs.min.js';

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
    placeholder: {
      type: String,
      value: '请选择',
    },
    layout: {
      type: String,
      value: 'horizontal',
    },
    mode: {
      type: String,
      value: 'selector',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    range: {
      type: Array,
      value: [
        {
          name: '选项一',
          value: 'first',
        },
        {
          name: '选项二',
          value: 'second',
        },
      ],
    },
    defaultValue: {
      type: String,
    },
    startTime: {
      type: String,
      optionalTypes: [Number],
    },
    endTime: {
      type: String,
      optionalTypes: [Number],
    },
    defaultTime: {
      type: String,
      optionalTypes: [Number],
    },
    startDate: {
      type: String,
      optionalTypes: [Number],
    },
    endDate: {
      type: String,
      optionalTypes: [Number],
    },
    defaultDate: {
      type: String,
      optionalTypes: [Number],
    },
    defaultRegion: {
      type: Array,
    },
    separator: {
      type: String,
      value: ',',
    },
    requiredFlag: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    cls: '',
    subCls: '',
    selectRange: [],
    start: '',
    end: '',
    value: '',
    displayValue: '',
    displayCls: '',
  },
  lifetimes: {
    attached() {
      const {
        className,
        layout,
        disabled,
        mode,
        range,
        startTime,
        endTime,
        startDate,
        endDate,
      } = this.properties;
      const isFlex = layout !== 'vertical';
      const cls = classNames({
        'weda-ui': true,
        'weda-select': true,
        [className]: className,
      });
      const subCls = classNames({
        'weui-cell': true,
        'weui-cell_active': true,
        'weui-cell_form': true,
        'weui-flex__item': isFlex,
        'weui-cell_disabled': disabled,
      });

      let selectRange, start, end;

      switch (mode) {
        case 'selector': {
          selectRange = range.map((item) => item.label);
          break;
        }
        case 'time': {
          start = startTime
            ? this.converTime2Dayjs(startTime).format('HH:mm')
            : undefined;
          end = endTime
            ? this.converTime2Dayjs(endTime).format('HH:mm')
            : undefined;
          break;
        }
        case 'date': {
          start = startDate
            ? this.converDate2Dayjs(startDate).format('YYYY-MM-DD')
            : undefined;
          end = endDate
            ? this.converDate2Dayjs(endDate).format('YYYY-MM-DD')
            : undefined;
          break;
        }
        case 'region': {
          break;
        }
        default: {
          break;
        }
      }

      this.setData({
        cls,
        subCls,
        selectRange,
        start,
        end,
      });
    },
  },
  observers: {
    'defaultValue, defaultTime, defaultDate, defaultRegion': function (
      defaultValue,
      defaultTime,
      defaultDate,
      defaultRegion
    ) {
      const { range, mode, separator, placeholder } = this.properties;
      let value, displayValue;
      switch (mode) {
        case 'selector': {
          const index = range.findIndex((item) => item.value === defaultValue);
          value = index < 0 ? '' : defaultValue;
          displayValue = index < 0 ? '' : range[index].label;
          break;
        }
        case 'date': {
          value = defaultDate
            ? this.converDate2Dayjs(defaultDate).format('YYYY-MM-DD')
            : undefined;
          displayValue = value;
          break;
        }
        case 'time': {
          value = defaultTime ? this.converTime(defaultTime) : undefined;
          displayValue = value;
          break;
        }
        case 'region': {
          value = defaultRegion;
          displayValue = defaultRegion.join(separator);
          break;
        }
        default: {
          break;
        }
      }
      this.setData({
        value: value,
        displayValue: displayValue || placeholder,
        displayCls: displayValue ? '' : 'weui-input__placeholder',
      });
    },
  },
  methods: {
    onChange(e) {
      const { range, mode, separator, placeholder } = this.properties;
      let displayValue;
      switch (mode) {
        case 'selector': {
          this.triggerEvent('change', range[e.detail.value]);
          displayValue = range[e.detail.value].label;
          break;
        }
        case 'date':
        case 'time': {
          const value = e.detail.value;
          let day =
            mode === 'date'
              ? this.converDate2Dayjs(value)
              : this.converTime2Dayjs(value);

          let timeSnap =
            mode === 'date'
              ? day.valueOf()
              : (day.hour() * 60 * 60 + day.minute() * 60) * 1000;
          this.triggerEvent('change', {
            value: timeSnap,
          });
          displayValue = e.detail.value;
          break;
        }
        case 'region': {
          this.triggerEvent('change', e.detail);
          displayValue = e.detail.value.join(separator);
          break;
        }
        default: {
          break;
        }
      }
      this.setData({
        displayValue: displayValue || placeholder,
        displayCls: displayValue ? '' : 'weui-input__placeholder',
      });
    },
    onCancel(e) {
      this.triggerEvent('cancel', e.detail);
    },
    converTime(time) {
      return this.converTime2Dayjs(time).format('HH:mm');
    },
    converTime2Dayjs(time) {
      const regexp = time.match(/^(\d{2}):(\d{2})$/);
      if (regexp && regexp[1] < 24 && regexp[2] < 60) {
        return dayjs().hour(regexp[1]).minute(regexp[2]);
      } else if (typeof time === 'string' && /^-?[0-9]*$/.test(time)) {
        const timeSnap = Number(time);
        let day;
        try {
          day = dayjs()
            .hour(Math.floor(timeSnap / 3600000) % 24)
            .minute(Math.floor((timeSnap % 3600000) / 60000));
        } catch (e) {
          day = dayjs(Number(time));
        }
        return day;
      } else {
        return dayjs(time);
      }
    },
    converDate2Dayjs(date) {
      if (typeof date === 'string' && /^-?[0-9]*$/.test(date)) {
        return dayjs(Number(date));
      }
      return dayjs(date);
    },
  },
});
