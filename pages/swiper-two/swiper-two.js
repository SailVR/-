Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: 0,
    Hide: true
  },

  onColletionTap: function () {
    this.setData({
      collected: 1
    })
  },

  ShareTheModal: function () {
    this.setData({ Hide: false });
  },

  showHide: function () {
    this.setData({ Hide: true });
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
    return {
      title: '颜值爆表的交大【校花】',
      path: '/pages/swiper-two/swiper-two',
      imageUrl: '/images/bjtuspring.jpg'
    }
  }
})