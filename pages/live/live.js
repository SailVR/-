// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Infos: [
      { icon: "/images/start.png", title: "开始直播"},
      { icon: "/images/look.png", title: "观看直播"},
      { icon: "/images/phototake.png", title: "拍照录像"},
      { icon: "/images/map.png", title: "地图导航"},
      { icon: "/images/danmu.png", title: "发个弹幕"},
      { icon: "/images/gift.png", title: "刷波礼物"},
      { icon: "/images/liuyan.png", title: "留言意见"},
      { icon: "/images/scan.png", title: "扫一扫"},
      { icon: "/images/more.png", title: "更多期待"},
    ]
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
    return {
      title: '交大直播',
      path: '/pages/live/live',
      imageUrl: '/images/live.png'
    }
  }
})