//app.js
App({
  data:{
  },
/**
 * getNewsInfo
 */

  getNewsInfo: function(date,cb){
    //console.log(date);
    wx.request({
      url: 'http://api.tianapi.com/txapi/lishi/?key=APIKEY&date=date',
      data:{
        'key': "3126e13281cf9e4e3bc74884cdf2f30c",
        'num': 10,
        'date': date
      },
      method: 'GET',
      header:{
        'key': 'key',
      },
      success: function(res){
       // console.log(res.data);
        cb(res.data);
      }
    })
  },

  globalData: {
    userInfo: null
  }
})