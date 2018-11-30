// pages/personal/me.js
var textContent = 'this is the first line \n this is the second line'
var array = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: [20,30,40,50,60,70],
    iconColor: ['red','orange','yellow','rgb(0,255,255)','blue','purple'],
    iconType: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear'],

    text: textContent
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

  },

  add: function() {
    array.push('the line'),
    this.setData({
      text:  textContent + '\n' + array.join('\n')
    })
  },

  remove: function() {
    if (array.length > 0){
      array.pop()
      this.setData({
        text: textContent + '\n' + array.join('\n')
      })
    }
  }
})