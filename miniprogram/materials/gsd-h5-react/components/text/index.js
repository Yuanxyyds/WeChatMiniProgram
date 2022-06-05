Component({
  options: {
    virtualHost: true,
  },
  properties: {
    text: {
      type: String,
      value: '',
    },
    maxLines: {
      type: Number,
      value: 2,
    },
    userSelect: {
      type: Boolean,
      value: true,
    },
    space: {
      type: Boolean,
      value: false,
    },
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
  },
  methods: {},
});
