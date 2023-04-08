// pages/zhuce/zhuce.js
// register.js

Page({
  data: {
    username: '',
    password: '',
    email:'',
  },

  onSubmit: function (e) {
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    var email=e.detail.value.email;
    wx.request({
      url: 'http://www.czj666666.com/updateUser',
      method:'GET',
      data:{
        username:username,
        password:password,
        email:email
      },
      success: function(res){
        wx.showToast({
        title: '注册成功',
        icon: 'success'
      }),
      wx.navigateTo({
        url: '../index/index'
      })
    }
  })
},

chooseImage: function () {
  wx.chooseMedia({
    count: 1,
    mediaType: ['image'],
    sourceType: ['album', 'camera'],
    maxDuration: 30,
    camera: 'back',
    success(res) {
    console.log(res.tempFiles.tempFilePath)
    console.log(res.tempFiles.size)
    }
    // success: res => {
    //   this.setData({
    //     avatarUrl: res.tempFilePaths[0]
    //   })
    // }
  })
}

})
