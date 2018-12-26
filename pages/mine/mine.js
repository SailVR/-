let app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad() {
    app.getUserInfo(userInfo => {
      this.setData({
        userInfo: userInfo
      })
    })
  },
  navToPage: function (event) {
    wx:wx.navigateTo({
      url: "/pages/persondata/persondata"
    })
  },
  navToForm:function(event){
    wx:wx.navigateTo({
      url: '/pages/form/form',
    })
  },
  navToEmail:function (event) {
    wx: wx.navigateTo({
      url: '/pages/email/email',
    })
  },
  navToPay:function (event) {
    wx: wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
  navToLive: function (event) {
    wx: wx.navigateTo({
      url: '/pages/live/live',
    })
  }
})