Page({

  data:{
    regions:[
      {name:'Europe',value:'欧洲'},
      {name:'america',value:'美洲',checked:"true"},
      { name: 'africa', value: '非洲'},
      { name: 'SoutheastAsia', value: '东南亚'},
      { name: 'other', value: '其他'}
    ],
    time:'8:00',
    data:'2016-11-1',
    suggest:''
  },
  formSubmit: function(e){
    console.log('提交表单数据');
    console.log(e.detail);
  },
  formReset:function(){
    console.log("form发生了reset事件");
  }
})