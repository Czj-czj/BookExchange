// pages/me/me.js
Page({
  data: {
    userInfo: {},
    orders: []
  },
  getPhoneNumber (e) {
    console.log(e.detail.code)
  },
  onLoad: function () {
    // 调用后台接口获取用户信息和订单列表
    // 将用户信息和订单列表绑定到对应的数据变量上
    this.setData({
      userInfo: {
        avatarUrl: '',
        nickName: 'John Doe',
        mobile: '1234567890'
      },
      orders: [
        { id: 1, name: '商品1', price: 100 },
        { id: 2, name: '商品2', price: 200 },
        { id: 3, name: '商品3', price: 300 },
      ]
    })
  }
})
