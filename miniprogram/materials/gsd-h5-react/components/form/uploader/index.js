import { getCloudInstance } from '../../../utils/tcb';
import deepEqual from '../../../utils/deepEqual';

Component({
  options: {
    virtualHost: true,
  },
  lifetimes: {
    attached() {
      this.setData({
        urls: this.properties.defaultValue,
        files: this.properties.defaultValue.map(url => ({url}))
      });
    }
  },
  properties: {
    maxUploadCount: {
      type: Number,
      value: 5,
    },
    title: {
      type: String,
      value: '图片上传',
    },
    tips: {
      type: String,
      value: '图片上传提示',
    },
    layout: {
      type: String,
      value: 'horizontal'
    },
    defaultValue: {
      type: Array,
      value: []
    },
    single: {
      type: Boolean,
      value: false
    },
    maxSize: {
      type: Number,
      value: 10
    }
  },
  data: {
    maxCount: 0,
    files: [],
    urls: [],
    uploadFile: async function (files) {
      // 文件上传的函数，返回一个promise
      const uploadPath = 'weda-uploader';

      const tcb = await getCloudInstance();
      const uploadPromise = files.tempFilePaths.map(async (tempFilePath) => {
        const fileType = tempFilePath.split('.')?.[1];
        const cloudPath = `${uploadPath}/uploader-${Date.now()}.${fileType}`;
        const uploadRes = await tcb.uploadFile({
          cloudPath,
          filePath: tempFilePath,
        });
        return { fileID: uploadRes.fileID };
      });
      const uploadFileList = await Promise.all(uploadPromise);
      const cloudUrls = uploadFileList.map((file) => file.fileID);
      // 这里返回的东西会在uploadSuccess回调函数中获取到
      // https://github.com/wechat-miniprogram/weui-miniprogram/blob/a3630575910302e3b94e69fcef266d2b509de650/src/components/uploader/uploader.ts#L149
      // 写死的从返回值的 .urls 获取展示用的url来用。一定要将tempFilePaths透传下去，否则会重新加载然后出现闪白
      return { urls: files.tempFilePaths, cloudUrls };
    }
  },
  methods: {
    uploadError: function (e) {
      // console.log('upload error', e.detail);
      this.triggerEvent('error', e.detail);
    },
    uploadSuccess: async function (e) {
      const urls = e.detail.cloudUrls; // uploadFile 获取返回值
      // 小程序自带tempURL 不需要调用 tcb.getTempFileURL 获取
      this.triggerEvent(
        'success',
        {
          value: urls[0]
        }
      );
      this.setData({
        files: this.data.files.concat(e.detail.urls.map(url => ({url}))),
        urls: [...this.data.urls, ...urls]
      });
      
    },
    onDelete: function(e) {
      this.setData({
        files: this.data.files.filter((v, index) => e.detail.index !== index),
        urls: this.data.urls.filter((v, index) => e.detail.index !== index)
      });
    }
  },
  observers: {
    // 'defaultValue': function(value) {
    //   if(!deepEqual(value, this.data.urls)) {
    //     if(!Array.isArray(value)) {
    //       value = [value].filter(v => v.length > 0);
    //     }
    //     this.setData({
    //       files: value.map(f => ({url: f})),
    //       urls: value
    //     });
    //   }
    // },
    'maxUploadCount, single': function(maxUploadCount, single) {
      const maxCount = single ? 1 : maxUploadCount;
      this.setData({
        maxCount
      });
    },
    'urls': function (urls) {
      let value = urls;
      if(this.properties.single) {
        value = urls[0] ?? '';
      }
      this.triggerEvent('change', {value});
    }
  }
});