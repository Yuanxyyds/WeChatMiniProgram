import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/indexModel/api.js'

// 打开地图接口
export default function ({ event, data }) {
    if (app.platform == "MINIPROGRAME") {
        wx.openLocation({
            name: "腾讯大厦",
            latitude: 22.540503,
            longitude: 113.934528,
            scale: 18,
            success(res) {

            }
        })
    }

}