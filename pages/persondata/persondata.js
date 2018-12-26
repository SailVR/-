let app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad() {
    app.getUserInfo(userInfo => {
      userInfo.gender = userInfo.gender === 1 ? '男生' : '女生'
      this.setData({
        userInfo: userInfo
      })
    })
  }
})