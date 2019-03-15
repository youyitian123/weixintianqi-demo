import {
  getTianQi,
  getLocation
} from '../../utils/api.js'

const app = getApp()



Page({

  /**
   * 页面的初始数据
   */
  data: {
    basic:{
    },
    dateHours:new Date().getHours(),
    upTime:'',
    today:{},
    tomorrow:{},
    afterTomor:{},
    todayIcon:'https://i.loli.net/2019/01/02/5c2c31816db96.png',
    tomorrowIcon:'',
    afterTomorIcon:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(new Date().getHours()+ '.' + new Date().getMinutes())
    /**
     * 获取用户的位置
     * 设置3天的天气信息
     */
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        getTianQi(latitude + ',' + longitude).then(res => {
          console.log(res.data.HeWeather6[0].daily_forecast[0])
          this.setData({
            basic: res.data.HeWeather6[0].basic,
            upTime: res.data.HeWeather6[0].update.loc,
            today: res.data.HeWeather6[0].daily_forecast[0],
            tomorrow: res.data.HeWeather6[0].daily_forecast[1],
            afterTomor: res.data.HeWeather6[0].daily_forecast[2]
          })
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})