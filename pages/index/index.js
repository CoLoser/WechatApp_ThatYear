//index.js
//获取应用实例

var utils = require("../../utils/util.js");
const app = getApp()

Page({
  data:{
    newsInfo: null,
    hide: false,
    time: null,
    curday: null,
    randomNews: null
  },

  onLoad: function(){
   //console.log("onLoad");
    var that = this;
    var time = utils.formatTime(new Date());
    that.setData({
      time: time,
      curday: time
    })
    var date = utils.DateFormat(this.data.curday);
    //console.log(date);
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

  onShow: function(){
    //console.log("onShow");
    console.log(this.data.curday);
    var that=this;
    var date = utils.DateFormat(this.data.curday);

    //console.log(date);
    app.getNewsInfo(date, function(res){
      console.log(res);
      var rnews = utils.getRandom(0, res.newslist.length);
      console.log(rnews);
      that.setData({
        newsInfo: res.newslist,
        today: res.newslist[0].lsdate,
        randomNews: res.newslist[rnews]
      })
      console.log(that.data.randomNews);
      //console.log(res.newslist[0].lsdate);
    });
    
    that.setData({
      hide: true,
    })
  },

  next: function(){
    var current=this.data.curday;
    var date = utils.getDate(current, 1);
    this.setData({
      curday: date
    }) 
    wx.navigateTo({
      url: '../../pages/history/history?date=' + JSON.stringify(this.data.curday),
    })
    //console.log(date);
  },

  cur: function(){
    this.setData({
      curday: this.data.time    
    })
    wx.navigateTo({
      url: '../../pages/history/history?date=' + JSON.stringify(this.data.curday),
    })
    //console.log("curday: ");
    //console.log(this.data.curday);
  },

  last: function(){
      var current=this.data.curday;
      var date = utils.getDate(current, -1);
      this.setData({
        curday: date
      })
      wx.navigateTo({
        url: '../../pages/history/history?date=' + JSON.stringify(this.data.curday),
      })
  },

  newsDetail: function(){
    wx.navigateTo({
      url: '../../pages/history/history?date=' + JSON.stringify(this.data.curday),
    })
  }

})
