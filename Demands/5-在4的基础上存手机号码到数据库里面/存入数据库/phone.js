// 往数据库存手机号码的ajax请求
var name = $('.trueName').val()
$.ajax({
  type: 'get',
  url: 'https://gd.huatu.com/zt/2023znqlm/api/utl.php',
  data: { mobile: params.mobile, name: name }, // 将手机号作为数据发送到后端

  success: function (response) {
    // 在请求成功后的处理逻辑
    if (response.success) {
      console.log('保存手机号码成功')
    } else {
      // 存储失败或出现错误
    }
  },
  error: function (error) {
    // 请求失败的处理逻辑
    console.log('保存失败')
  },
})
// 往数据库存手机号码的ajax请求
