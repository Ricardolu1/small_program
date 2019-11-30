// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  

  onTap: function () {
    // wx.navigateTo({
    //   url: '',
    // })
    wx.redirectTo({
      url: '../posts/posts',
    })
  },
  onUnload:function(){
  }
  

})