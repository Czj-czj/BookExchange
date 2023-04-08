// index.js

Page({
  data: {
    username: '',
    password: ''
  },
  formSubmit: function(e) {
    const that=this;
    const url='http://czj666666.com';
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    wx.request({
      url: 'http://localhost/user',
      method: 'GET',
      data: {
        openid:username,
        password:password
      },
      success: function(res) {
        if (res.data.id!=null) {
          wx.showToast({
            title: '登录成功',
            icon: 'none'   
        }),
        that.setData({
          hasUserInfo: true,
          userInfo: res.data
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        }
        
    //   },
    //   fail: function() {
    //     wx.showToast({
    //       title: '网络错误',
    //       icon: 'none'
    //     })
    //   }
    // })
    // const appid="wx4e5fa15c856d452f";
    // var r;
    // wx.request({
    //   url: url+'/getSecret',
    //   data:{
    //     openid:appid
    //   },
    //   success(res){
    //     r=res.data.result;
    //   }
    // })
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       // 将 code 发送到服务端
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session',
    //         data: {
    //           appid: appid,
    //           secret: r,
    //           code: res.code
    //         },
    //         success(res) {
    //           // 服务端返回 openid
    //           const openid = res.data.openid;
    //           // 将 openid 作为 data 传入 request 参数
    //           wx.request({
    //             url: url+'/user',
    //             data: {
    //               openid: openid,
    //               //password: password
    //             },
    //             success(res) {
    //               console.log(res.data);
    //               that.setData({
    //               hasUserInfo: true,
    //               userInfo: res.data
    //               })
    //             }
    //           })
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    } 
  })
  },
  regist:function(e){
    wx.navigateTo({
      url: '../zhuce/zhuce'
    })
  },
  getPhoneNumber (e) {
    console.log(e.detail.code)
  }
})

