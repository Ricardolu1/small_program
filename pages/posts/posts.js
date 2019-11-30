// pages/posts/posts.js
var postData = require('../../data/post-data.js')


Page({
  /**
   * 页面的初始数据
   */
  data: {
    date:"Nov 11 2020",
    title:"正是虾肥蟹壮时"
  },
  onLoad: function () {
   
    this.setData({ 
      postList:postData.postList
     })
  },
  onPostTap:function(e){
    var postId = e.currentTarget.dataset.postId
    wx.navigateTo({
      url: './post-detail/post-detail?id='+postId,
    })
  }
 
})