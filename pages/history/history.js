//index.js
//获取应用实例

var utils = require("../../utils/util.js");
const app = getApp()

Page({
  data: {
    newsInfo: null,
    hide: false,
    curday: null,
  },

  onLoad: function (option) {
    var date = null;
    var that=this;
    console.log(option.date);
    that.setData({
      curday: JSON.parse(option.date)
    })
    console.log(that.data.curday)
    var date = utils.DateFormat(that.data.curday);
    app.getNewsInfo(date, function (res) {
      console.log(res);
      that.setData({
        newsInfo: res,
        today: res.newslist[0].lsdate,
      })
      //console.log(res.newslist[0].lsdate);
    });
    that.setData({
      hide: true,
    })
  },
})
