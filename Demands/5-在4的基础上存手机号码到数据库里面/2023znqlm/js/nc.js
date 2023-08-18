var nc
// 滑块验证是否通过
var ishk = false
// 判断手机号
function isPhone(mobile) {
  // var mobile = $('.input_reg').val();
  if (!mobile) {
    layer.msg('请输入手机号码', {
      time: 2000,
    })
    nc.reset()
    ishk = false
    return false
  }
  // if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(mobile))) {
  if (!/^(1[0-9]{10})$/.test(mobile)) {
    layer.msg('请输入有效的手机号码', {
      time: 2000,
    })
    nc.reset()
    ishk = false
    return false
  }
  ishk = true
}
var appObj = {}
var base_url
// 判断环境
if (location.host == '127.0.0.1:8080') {
  // 测试
  appObj.env = 'alpha'
  base_url = 'https://df-alpha.huatu.com'
} else {
  // 正式
  appObj.env = 'prod'
  base_url = 'https://defen.huatu.com'
}
// pc滑块
function pcHk(renderTo) {
  // 短信验证码登录 滑块
  var nc_token = ['FFFF0N1N0000000099DF', new Date().getTime(), Math.random()].join(':')
  var NC_Opt = {
    renderTo: renderTo,
    appkey: 'FFFF0N1N0000000099DF',
    scene: 'nc_login',
    token: nc_token,
    customWidth: 300,
    trans: {
      key1: 'code0',
    },
    elementID: ['usernameID'],
    is_Opt: 0,
    language: 'cn',
    isEnabled: true,
    timeout: 3000,
    times: 5,
    apimap: {},
    callback: function (data) {
      window.console && console.log(nc_token)
      window.console && console.log(data.csessionid)
      window.console && console.log(data.sig)
      formData = {
        session_id: data.csessionid,
        token: nc_token,
        sig: data.sig,
        scene: 'nc_login',
      }
      var mobile
      mobile = $('.mobile').val()
      isPhone(mobile, 'reg')
      $('.send').click()
    },
  }
  // 验证码登录
  nc = new noCaptcha(NC_Opt)
  nc.upLang('cn', {
    _startTEXT: '请按住滑块，拖动到最右边',
    _yesTEXT: '验证通过',
    _error300: '哎呀，出错了，点击< a href= "javascript:__nc.reset()">刷新</ a>再来一次',
    _errorNetwork: '网络不给力，请< a href="javascript:__nc.reset()">点击刷新</ a>',
  })
  appObj = {
    scene_type: 'login',
    phone: '',
    channel: 31,
    platform: 'pc',
  }
}
// m滑块
function mHK(renderTo) {
  // 验证码登录滑块
  var nc_token = ['FFFF0N000000000099DF', new Date().getTime(), Math.random()].join(':')
  var nc_opt = {
    renderTo: renderTo,
    appkey: 'FFFF0N000000000099DF',
    scene: 'nc_register_h5',
    token: nc_token,
    trans: {
      key1: 'code200',
    },
    elementID: ['usernameID'],
    is_Opt: 0,
    language: 'cn',
    timeout: 10000,
    retryTimes: 5,
    errorTimes: 5,
    inline: false,
    apimap: {
      // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
      // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
    },
    bannerHidden: false,
    initHidden: false,
    callback: function (data) {
      // 滑动后回调
      formData = {
        session_id: data.csessionid,
        token: nc_token,
        sig: data.sig,
        scene: 'nc_register_h5',
      }
      var mobile = $('.mobile').val()
      isPhone(mobile, 'reg')
      $('.send').click()
    },
    error: function (s) {},
  }
  nc = NoCaptcha.init(nc_opt)
  nc.reset() //请务必确保这里调用一次reset()方法
  NoCaptcha.setEnabled(true)
  NoCaptcha.upLang('cn', {
    LOADING: '加载中...', //加载
    SLIDER_LABEL: '请向右滑动验证～', //等待滑动
    CHECK_Y: '验证通过', //通过
    ERROR_TITLE: '非常抱歉，这出错了...', //拦截
    CHECK_N: '验证未通过', //准备唤醒二次验证
    OVERLAY_INFORM: '经检测你当前操作环境存在风险，请输入验证码', //二次验证
    TIPS_TITLE: '验证码错误，请重新输入', //验证码输错时的提示
  })
  appObj = {
    scene_type: 'login',
    phone: '',
    channel: 32,
    platform: 'h5',
  }
}
//判断登录设备
var facility
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  //判断iPhone|iPad|iPod|iOS
  facility = 'ios'
} else if (/(Android)/i.test(navigator.userAgent)) {
  //判断Android
  facility = 'android '
} else {
  //pc
  facility = 'pc'
}
//发送手机验证码
function sendnum(obj) {
  var mobile = $('.mobile').val()
  // var img_code = $(obj).parents('.common_container').find('.login_img_code').val();
  if (!mobile) {
    layer.msg('请输入手机号码', {
      time: 2000,
    })
    return false
  }
  if (!/^(1[0-9]{10})$/.test(mobile)) {
    layer.msg('请输入有效的手机号码', {
      time: 2000,
    })
    return false
  }
  if (!ishk) {
    layer.msg('请滑动滑块通过验证', {
      time: 2000,
    })
    return false
  }
  $(obj).attr('disabled', true)
  $.ajax({
    type: 'get',
    url: 'https://defen.huatu.com/api/yy/v1/Front/yuyue-check',
    data: {
      mobile: mobile,
      yuyue_id: $('input[name="yuyue_id"]').val(),
    },
    success: function (res) {
      if (res.code == 200) {
        layer.msg(
          '您已经预约过',
          {
            time: 2000,
          },
          function () {
            if (res.data.jump_url) {
              window.location.href = res.data.jump_url
            }
          }
        )
        $('.fixed_mask').fadeOut()
        window.localStorage.setItem('sem_yy', 'yes')
        sa.login(mobile)
      } else {
        var SysSecond
        var InterValObj
        SysSecond = 60
        InterValObj = window.setInterval(SetRemainTime, 1000)
        function SetRemainTime() {
          if (SysSecond > 0) {
            SysSecond = SysSecond - 1
            var second = Math.floor(SysSecond % 60)
            var minite = Math.floor((SysSecond / 60) % 60)
            var hour = Math.floor((SysSecond / 3600) % 24)
            var day = Math.floor(SysSecond / 3600 / 24)
            $(obj).val(second + '秒')
          } else {
            window.clearInterval(InterValObj)
            $(obj).val('发送短信')
            $(obj).attr('disabled', false)
            nc.reset()
            ishk = false
          }
        }
        var data = formData
        if ($(window).width() > 1080) {
          scene = 'nc_login'
        } else {
          scene = 'nc_register_h5'
        }
        appObj.phone = mobile
        let sendData = {
          session_id: data.session_id,
          token: data.token,
          sig: data.sig,
          scene: scene,
          scene_type: appObj.scene_type,
          phone: appObj.phone,
          channel: appObj.channel,
          platform: appObj.platform,
        }
        let apiUrl = base_url + '/api/yy/v1/Front/Sms/sendsms'
        // let pphone = mobile

        console.log('向后台传参', sendData)

        $.ajax({
          url: apiUrl,
          type: 'get',
          data: sendData,
          beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader('Channel', sendData.channel)
          },
          success: function (data) {
            if (data.code == 200) {
              layer.msg('发送成功', {
                time: 2000,
              })
            } else {
              layer.msg(data.msg, {
                time: 2000,
              })
            }
          },
          error: function (error) {
            console.log('接口请求异常报错了')
            let data = {
              code: 201,
              data: false,
              extra: [],
              msg: '网络异常',
            }
          },
        })
      }
    },
  })
}
// //发送验证码
// $('.login_wrap').on("click", ".send", function() {
//   var mobile = $('.mobile').val();
//   if (!mobile) {
//     alert('请输入手机号');
//     return false;
//   }
//   if (!(/^(1[0-9]{10})$/.test(mobile))) {
//     alert('请输入有效的手机号码！');
//     return false;
//   }
//   $('.send').attr('disabled', true);
//   var SysSecond;
//   var InterValObj;
//   SysSecond = 60;
//   InterValObj = window.setInterval(SetRemainTime, 1000);
//   function SetRemainTime() {
//     if (SysSecond > 0) {
//       SysSecond = SysSecond - 1;
//       var second = Math.floor(SysSecond % 60);
//       var minite = Math.floor((SysSecond / 60) % 60);
//       var hour = Math.floor((SysSecond / 3600) % 24);
//       var day = Math.floor((SysSecond / 3600) / 24);
//       $('.send').val(second + '秒');
//     } else {
//       window.clearInterval(InterValObj);
//       $('.send').val('获取验证码');
//       $('.send').attr('disabled', false);
//     }
//   }
//   $.post(baseUrl + 'yy/v1/Front/sendYuyueVerifyCode', {
//     mobile: mobile,
//     channel: channel,
//   }, function(data) {
//     if (data.code == 200) {
//       alert('发送成功');
//     }
//   });
// });
