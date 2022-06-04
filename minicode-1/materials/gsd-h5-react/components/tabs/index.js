Component({
  externalClasses: ['ext-class'],

  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },

  properties: {
    tabs: { type: Array, value: [] },
    scrollCellId: {
      type: String,
      value: '',
    },
    selectedIndex: {
      type: Number,
      value: 0
    }
  },

  data: {
    currentIndex: 0,
    stickyStyle: null,
  },

  methods: {
    toggle(e) {
      const { tabs } = this.data;
      const { index } = e.target.dataset;
      this.setData({
        currentIndex: index,
      });
      this.triggerEvent('change', {id: index, label: tabs[index].title});
      if (tabs.length > 5) {
        this.setData({
          scrollCellId: `cell-${Math.max(index - 2, 0)}`,
        });
      }
    },
  },
  observers: {
    'selectedIndex': function(selectedIndex) {
      if(selectedIndex !== this.data.currentIndex) {
        this.setData({
          currentIndex: selectedIndex
        });
      }
    }
  }
});
