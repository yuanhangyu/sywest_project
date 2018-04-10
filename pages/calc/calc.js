//保存数据到本地缓存的数组中
var saveExprs = function(expr){
  var exprs = wx.getStorageSync('exprs') || []
  exprs.unshift(expr);//在数组开头增加一个元素
  wx.setStorageSync('exprs',exprs);//保存到本地缓存
}
Page ({
data:{
  result:"0",
  id1:"history",
  id2:"clear",
  id3:"back",
  id4:"div",
  id5:"num_7",
  id6: "num_8",
  id7: "num_9",
  id8: "mul",
  id9: "num_4",
  id10: "num_5",
  id11: "num_6",
  id12: "sub",
  id13: "num_1",
  id14: "num_2",
  id15: "num_3",
  id16: "add",
  id17: "negative",  
  id18: "num_0",
  id19: "dot",
  id20: "equ",
  record: true,//计算过程记录到历史记录中
  expr:"",//表达式
},

RecordHistory:function(e){
  console.log(e);
  this.setData({
    record:e.detail.value
  })

},
clickButton:function(e){//单击事件处理函数
  var data = this.data.result;//获取上一个结果值
  var tmp = this.data.temp;//取上次的临时结果
  var lastoper1 = this.data.lastoper;//上一次的运算符
  var noNumFlag = this.data.flag;//上一次非数字按钮标志
  var expr1 = this.data.expr;//获取前面的表达式
  if(e.target.id>='num_0' && e.target.id<='num_9'){//判断是否按了数字按钮
    data += e.target.id.split("_")[1];//正常情况，串接输入的值;
    if(this.data.result == '0' || noNumFlag){//原值为0，或上次所按的是非数字按钮
      data = e.target.id.split("_")[1];//用户输入的值代替
    }
    noNumFlag = false;
  }else
  {//不是数字按钮
    noNumFlag = true;
    console.log(e.target.id);//在控制台输出按钮的id
    if(e.target.id == "dot"){
      if(data.toString().indexOf(".") == -1){//输入的值中不包含小数点
        data += ".";
      }
    }else if(e.target.id == "history"){
      wx.navigateTo({
        url:'../history/history'
      })
    }
    else if(e.target.id == "clear"){//清楚按钮
      expr1 = expr1.substr(0,expr1.length-1) + "=" +tmp;//删除最后的运算符
      if(this.data.record){
        wx.setStorageSync("expr", expr1)
      }
      saveExprs(expr1);
      expr1 = "";
      data = 0;//数据请0
      tmp = 0;//清楚中间结果
      lastoper1 = "+";//设置上次运算符为加
    }
    else if(e.target.id == "negative"){//数字取负
      //data = -1*data;
      wx.clearStorageSync(); 
    }else if(e.target.id == "back"){//回退一个字符
      if(data.toString().length>1){//长度超过1位数
       data = data.substr(0,data.toString().length-1);//去掉最后一位
      }else{//长度只有一位
        data = 0;
      }
    }else if(e.target.id == "div"){//除法
      expr1 += data.toString() + "÷";
      data= calculate(tmp,lastoper1,data);
      tmp = data;
      lastoper1 = "/";
    }else if(e.target.id == "mul"){//乘法
      expr1 += data.toString() + "×";
      data = calculate(tmp,lastoper1,data);
      tmp = data;
      lastoper1 = "*";
    } else if (e.target.id == "add") {//加法
      expr1 += data.toString() + "+";
      data = calculate(tmp, lastoper1, data);
      tmp = data;
      lastoper1 = "+";
    } else if (e.target.id == "sub") {//减法
      expr1 += data.toString() + "－";
      data = calculate(tmp, lastoper1, data);
      tmp = data;
      lastoper1 = "-";
    } else if (e.target.id == "equ") {//==
      expr1 += data.toString();
      data = calculate(tmp, lastoper1, data);
      expr1 += "=" +data;
      if(this.data.record){
        wx.setStorageSync("expr",expr1);
      }
      saveExprs(expr1);
      expr1 = "";
      tmp = 0;
      lastoper1 = "+";
    }
  }
  this.setData({
    result: data,
    lastoper: lastoper1,
    temp: tmp,
    flag: noNumFlag,
    expr:expr1
  });
}
})

var calculate = function(data1,oper,data2){
  var data;
  data1 = parseFloat(data1);
  data2 = parseFloat(data2);
  switch (oper)
  {
    case "+":
      data = data1+data2;
      break;
    case "-":
      data = data1 - data2;
      break;
    case "*":
      data = data1 * data2;
      break;
    case "/":
     if(data2 !== 0){
       data = data1 / data2;
     }else{
       data = 0;
     }
      break;
     
  }
  return data;
}

