var key = 'c1c1fcb5ea404f919a46770e9ab92bc5'

/**
 * 调用和风天气API获取最近3天的天气情况
 * location 必须 位置
 * key 必须 认证key
 */

function getTianQi(location) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/forecast',
      data: {
        location,
        key,
      },
      success(res) {
        resolve(res)
      },
      fail() {
        reject({
          status: 'error',
          msg: '获取天气失败'
        })
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000
        })
      }
    })
  })
}

module.exports.getTianQi = getTianQi