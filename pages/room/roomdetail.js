// pages/room/roomdetail.js
const date= new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++){
  years.push(i)
}

for (let i = 1; i <= 12; i++){
  months.push(i)
}

for (let i = 1; i <= 31; i++){
  days.push(i)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    content:'当前选择美国',
    array:['美国','中国','英国','日本'],
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线性动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫','吸血虫']],
    multiIndex:[0,0,0],
    time:'12:01',
    date:'2018-12-03',
    region: ['广东省','广州市','海珠区'],


    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999,1,1]
  },

  

  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value,
    })
  },

  bindMultiPickerChange: function(e) {
    this.setData({
      multiIndex: e.detail.value,
    })
  },

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },

  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },

  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindRegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },

  bindChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: years[val[0]],
      month: months[val[1]],
      day: days[val[2]]
    })

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

  }
})