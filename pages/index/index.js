Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray: [
      {
        "iconUrl": '/images/phone.png',
        "iconText": '电话'
      },
      {
        "iconUrl": '/images/sign-in.png',
        "iconText": '签到'
      },
      {
        "iconUrl": '/images/activity.png',
        "iconText": '活动'
      },
      {
        "iconUrl": '/images/email.png',
        "iconText": '邮箱'
      },
      {
        "iconUrl": '/images/forum.png',
        "iconText": '论坛'
      },
      {
        "iconUrl": '/images/inquire.png',
        "iconText":"查成绩"
      },
      {
        "iconUrl": '/images/card.png',
        "iconText": '一卡通'
      },
      {
        "iconUrl": '/images/lostFound.png',
        "iconText": '失物招领'
      }
    ]
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
    
  },
  
  navToOne: function(event) {
    wx: wx.navigateTo({
      url: "/pages/swiper-one/swiper-one"
    })
  }, 
  navToTwo: function(event) {
    wx: wx.navigateTo({
      url: "/pages/swiper-two/swiper-two"
    })
  }, 
  navToThree: function(event) {
    wx: wx.navigateTo({
      url: "/pages/swiper-three/swiper-three"
    })
  }
})