Page({
  data:{
    inputValue:'',
    city : '',
    hidden:true,
    modalHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  // 输入的时候设置input框的值
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 查询
  searchMsg:function(e){
    var city = this.data.inputValue
    var that = this;
    wx.request({
      url: 'http://api.help.bj.cn/apis/weather2d/', //仅为示例，并非真实的接口地址
      data: {
        id: city
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.city!=''){
          that.setData({
            city: res.data,
            hidden: false
          })
        }else{
          that.setData({
            modalHidden:false
          })
        }
      }
    })
  },
  // 弹出框函数
   modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },
  // 重置表格
   resetMsg:function(){
     this.setData({
       hidden: true,
       city:'',
       inputValue:''
     })
   }
})