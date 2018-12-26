const app = getApp();
Page({
  data: {
    sercherStorage: [],
    inputValue: "",          
    StorageFlag: false,         
    resData: [],

    size: 8,
    page: 1,
  },

  onLoad() {
    let searchData = wx.getStorageSync("searchData");
    console.log()
    this.setData({
      sercherStorage: searchData || []
    })
  },

  bindFocus() {
    this.setData({
      StorageFlag: true
    })
  },

  bindInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  clearSearchStorage: function () {
    wx.removeStorageSync('searchData')
    this.setData({
      sercherStorage: [],
      StorageFlag: false,
    })
  },

  tapSercherStorage: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.id;
    let sercherStorage = that.data.sercherStorage;
    let chooseItem = sercherStorage.splice(index, 1);

    wx.showLoading({ title: '正在搜索' })

    this.setData({
      inputValue: chooseItem[0],
      page: 1
    })
    if (this.data.inputValue.trim() != '') {
      this.getResult(this.data.inputValue.trim());

      sercherStorage.unshift(chooseItem[0]);
      that.setData({
        StorageFlag: false,
        sercherStorage: sercherStorage,
        resData: [],
        maxSize: false
      })
      wx.setStorageSync('searchData', sercherStorage);

    } else {
      wx.hideLoading();
      utils.showModal("输入不能为空");
      that.setData({
        inputValue: ""
      })
    }
  },

  deteleSercherStorage(e) {
    let that = this;
    let index = e.currentTarget.dataset.id;
    let sercherStorage = this.data.sercherStorage;
    sercherStorage.splice(index, 1);
    wx.setStorageSync('searchData', sercherStorage);
    that.setData({
      sercherStorage: sercherStorage
    });
  },

  setSearchStorage: function (e) {
    var that = this;
  
    wx.showLoading({ title: '正在搜索' })

    that.setData({
      StorageFlag: false,
      page: 1,
      resData: [],
      maxSize: false
    })
    if (this.data.inputValue.trim() != '') {
      that.getResult(this.data.inputValue.trim());

      let searchData = that.data.sercherStorage;

      for (let i = 0; i < searchData.length; i++) {
        if (searchData[i] == this.data.inputValue.trim()) {
          searchData.splice(i, 1);
          break;
        }
      }

      if (searchData.length >= 8) searchData.pop();

      searchData.unshift(that.data.inputValue.trim())
      wx.setStorageSync('searchData', searchData);
      that.setData({
        StorageFlag: false,
        sercherStorage: searchData
      })
    } else {
      wx.hideLoading();
      utils.showModal("输入不能为空");
      that.setData({
        inputValue: ""
      })
    }
  },
  getResult(inputVal) {
    wx.hideLoading();
  },

  loadMore() {
    this.setData({
      page: this.data.page + 1
    })
    this.getResult(this.data.inputValue);
  }
})