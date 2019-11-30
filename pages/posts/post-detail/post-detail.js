// pages/posts/post-detail/post-detail.js
var postsData = require("../../../data/post-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId:'',
    collected:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id
    this.data.currentId = postId
    var postData = postsData.postList[postId]
		this.setData({...postData})

    var postsCollected = wx.getStorageSync("postsCollected")
    if (postsCollected){
      var collected = postsCollected[postId]
      this.setData({
        collected
      })
    }else{
      var postsCollected = {}
      postsCollected[postId] = false
      wx.setStorageSync("postsCollected", postsCollected)
    }
  },
  onCollectionTap:function(){
    //这里还是要读一遍，因为等会set时候需要一个对象，他只能拿到那个对象，然后该自己id对应的布尔值，然后把对象放回去
    var postsCollected = wx.getStorageSync("postsCollected")
    var collected = !postsCollected[this.data.currentId]
    postsCollected[this.data.currentId] = !postsCollected[this.data.currentId]
    wx.setStorageSync("postsCollected", postsCollected )
    this.setData({
      collected
    })
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
})