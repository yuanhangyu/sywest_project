Page({
  data: {
    countries: ['中国','美国','巴西','日本','英国','法国','意大利'],
    index:0,
    date: '2016-09-01',
    time: '12:01'
  },
  bindPickerChange:function(e){
   console.log('picker 发送改变请求')
console.log(e.detail.value)
this.setData({
index: e.detail.value
})
  },
  bindDataChange: function (e) {
    console.log('日期发生改变')
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('时间发生改变')
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})