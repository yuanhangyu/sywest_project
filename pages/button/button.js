Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',  //default按钮的初始大小
    primarySize: 'default',  //primary按钮的初始大小
    warnSize: 'default',//warn按钮的初始大小
    disabled: false,  //按钮初始禁用状态
    plain:false,  //按钮初始镂空状态
    loading:false  //按钮初始显示loading图标状态
  },
//设置Disabled的值
  setDisabled: function(e){
     this.setData({
       disabled:!this.data.disabled
     })
  },
  //设置plain变量的值
  setPlain:function(e){
     this.setData({
        plain:!this.data.plain
})
  },
  //设置loading变量的值
  setLoading:function(e){
     this.setData({
       loading:!this.data.loading
})
  },
  //default按钮触按事件处理函数
  default:function(e){
    var d = this.data.defaultSize === 'default'?'mini':'default';
      this.setData({
        defaultSize:d //切换defaultSize的值
      })
  },
  //primary按钮触按事件处理函数
  primary:function(e){
    var d = this.data.primarySize === 'default'?'mini':"default";
      this.setData({
        primarySize:d //切换primarySize的值
      })
  },
  //warn按钮触按事件处理函数
  warn:function(e){
    var d = this.data.warnSize === 'default'?'mini':'default';
      this.setData({
        warnSize:d //切换warnSize的值
      })
  }
})