# WechatApp_ThatYear
## 微信小程序, 查询历史上的今天,功能比较简单, 算是一个入门的小demo
### 学习资源
[1. 微信简易教程](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/file.html)</br>
[2. 知乎经典答案](https://www.zhihu.com/question/50907897)</br>
[3. 视频教程](http://www.php.cn/course/297.html)</br>
[4. 优质资源](https://github.com/CoLoser/awesome-wechat-weapp)</br>
[5. blog链接](https://blog.csdn.net/qq_37753409/article/details/79998051)
## 微信小程序的结构:
   ![结构](https://github.com/CoLoser/WechatApp_ThatYear/blob/master/imags/demo.png)
 
### 1. 微信小程序开发:</br>
<p>
  1. wxss->css</br>
  2. wxml->html</br>
  3. 逻辑层使用JavaScript</br>
  4. json文件为配置文件
</p>

### 2. pages声明页面:  
  <p>
  页面有以下文件:</br>
  1. XXX.wxml   (页面 必须)</br>
  2. XXX.wxss   (页面样式)</br>
  3. XXX.js     (JavaScript脚本)</br>
  4. XXX.json   (配置文件)<br>
  </p>

```
//XXX.js 中定义page的常用方法
  Page({
     /**
     * 页面的初始数据
     */
      data: {
      },
      /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
  )
```
 ### 3. app.XXX声明小程序:
 <p>
  1. app.js为app的逻辑层, 可以定义一些方法, 声明app运行事件</br>
  2. app.wxss为小程序的总体布局样式      </br>
  3. app.json为小程序的配置文件, 不能有注释</br>
  4. projec.profig.json为小程序项目整体配置文件</br>
 </p>

```
  //app.json配置文件
  {
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }
  //还可以定义tabBar(底部切换栏)
}
```

### 4. utils.js
<p>定义了一些工具, 比如获取时间</p>

### 图片预览: </br>
![example01](https://github.com/CoLoser/WechatApp_ThatYear/blob/master/imags/example1.png) 
![exmaple02](https://github.com/CoLoser/WechatApp_ThatYear/blob/master/imags/example2.png)
</br>

这里的数据接口使用天行数据的API, 通过请求返回数据.</br>
### [数据接口使用天行API](https://www.tianapi.com/)
![tianAPI](https://github.com/CoLoser/WechatApp_ThatYear/blob/master/imags/API01.png)
![tianAPI](https://github.com/CoLoser/WechatApp_ThatYear/blob/master/imags/API02.png)
申请账号, 选择API KEY 在微信小程序中进行request, 请求:</br>
```
  //wx.request
  wx.request({
      url: 'http://api.tianapi.com/txapi/lishi/?key=APIKEY&date=date',
      data:{
        'key': "填入自己的APIKEY",
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
```

请求返回一个对象, 对象中的newslist中的数据即为需要的数据</br>
![request_return](https://github.com/CoLoser/WechatApp_ThatYear/blob/master/imags/request_return.png)
