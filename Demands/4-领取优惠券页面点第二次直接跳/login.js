var channel,
  alias_name,
  course_id,
  value_arr,
  record_study_time,
  title,
  city_need,
  province_need,
  region_need,
  token,
  pid,
  cid,
  province,
  province_id,
  city_id,
  title_name,
  school_id,
  fixed_school,
  submit_button_txt
var id = GetQueryString('id')
if (id == null) {
  id = $('input[name="yuyue_id"]').val()
}
var params = {}
var expandFields = []
var nowYear = new Date().getFullYear()

$('.layer').show()
var app = new Vue({
  el: '.box',
  data: {
    mobile: false,
    msg_code: false,
    trueName: false,
    iDcard: false,
    address: false,
    examType: false,
    qq: false,
    email: false,
    sex: false,
    age: false,
    school: false,
    nameIsNeed: false,
    idIsNeed: false,
    addIsNeed: false,
    examIsNeed: false,
    qqIsNeed: false,
    mailIsNeed: false,
    sexIsNeed: false,
    ageIsNeed: false,
    schoolIsNeed: false,
    graduateTimeNeed: false,
    wechatNeed: false,
    list: [],
    pro: [],
    city: [],
    region: [],
    timelist: [nowYear, nowYear + 1, nowYear + 2, nowYear + 3, nowYear + 4],
  },
  mounted() {
    //获取登录条件
    $.getJSON(
      baseUrl + 'yy/v1/Front/getYuyueMessageInfo',
      {
        id: id,
      },
      function (data) {
        if (data.code == 200) {
          token = data.data.token
          channel = data.data.channel
          alias_name = data.data.alias_name
          value_arr = data.data.value_arr
          course_id = data.data.course.course_id
          record_study_time = data.data.course.record_study_time
          title = data.data.name
          province_id = data.data.province_id
          city_id = data.data.city_id
          submit_button_txt = data.data.submit_button_txt
          $('.submit').html(submit_button_txt ? submit_button_txt : '立即预约')
          fixed_school = data.data.fixed_school ? JSON.parse(data.data.fixed_school) : ''
          if (fixed_school) {
            school_id = fixed_school.school_id
          }
          $('.login_title').text(data.data.title)
          // document.title = data.data.title;
          //拓展字段
          if (data.data.expand) {
            expandFields = data.data.expand
          }
          if (data.data.pic_bg != '') {
            $('.body_bg').css('background-image', 'url(' + data.data.pic_bg + ')')
          }
          if (data.data.province_id != '' && data.data.province_id != 0) {
            $.post(
              baseUrl + 'yy/v1/Front/location/region',
              {
                pid: province_id,
              },
              function (data) {
                if (data.code == 200) {
                  var city
                  for (var i = 0; i < data.data.length; i++) {
                    city += '<option cid=' + data.data[i].id + '>' + data.data[i].name + '</option>'
                  }
                  $('.city').append(city)
                  if (city_id != '') {
                    $('.city option[cid=' + city_id + ']').attr('selected', true)
                  }
                }
              }
            )
          }
          if (data.data.city_id != '') {
            $.post(
              baseUrl + 'yy/v1/Front/location/region',
              {
                pid: city_id,
              },
              function (data) {
                if (data.code == 200) {
                  var district
                  for (var i = 0; i < data.data.length; i++) {
                    district += '<option>' + data.data[i].name + '</option>'
                  }
                  $('.district').append(district)
                }
              }
            )
          }
          for (var i = 0; i < data.data.customize.length; i++) {
            if (data.data.customize[i].value == 'mobile') {
              app.mobile = true
            } else if (data.data.customize[i].value == 'msg_code') {
              app.msg_code = true
            } else if (data.data.customize[i].value == 'true_name') {
              if (data.data.customize[i].is_need == 1) {
                app.nameIsNeed = true
              }
              app.trueName = true
            } else if (data.data.customize[i].value == 'card_id') {
              if (data.data.customize[i].is_need == 1) {
                app.idIsNeed = true
              }
              app.iDcard = true
            } else if (data.data.customize[i].value == 'province') {
              if (data.data.customize[i].is_need == 1) {
                $('#province .must').removeClass('active')
                province_need = true
              }
              $('#province').show()
              $.post(baseUrl + 'yy/v1/Front/location/region', {}, function (data) {
                if (data.code == 200) {
                  for (var i = 0; i < data.data.length; i++) {
                    province += '<option pid=' + data.data[i].id + '>' + data.data[i].name + '</option>'
                  }
                  $('.province').append(province)
                  $('.province option[pid=' + province_id + ']').attr('selected', true)
                }
              })
            } else if (data.data.customize[i].value == 'city') {
              if (data.data.customize[i].is_need == 1) {
                $('#city .must').removeClass('active')
                city_need = true
              }
              $('#city').show()
            } else if (data.data.customize[i].value == 'region') {
              if (data.data.customize[i].is_need == 1) {
                $('#district .must').removeClass('active')
                region_need = true
              }
              $('#district').show()
            } else if (data.data.customize[i].value == 'address') {
              if (data.data.customize[i].is_need == 1) {
                app.addIsNeed = true
              }
              app.address = true
            } else if (data.data.customize[i].value == 'exam_type') {
              if (data.data.customize[i].is_need == 1) {
                app.examIsNeed = true
              }
              app.list = data.data.exam_type
              app.examType = true
            } else if (data.data.customize[i].value == 'qq') {
              if (data.data.customize[i].is_need == 1) {
                app.qqIsNeed = true
              }
              app.qq = true
            } else if (data.data.customize[i].value == 'email') {
              if (data.data.customize[i].is_need == 1) {
                app.mailIsNeed = true
              }
              app.email = true
            } else if (data.data.customize[i].value == 'sex') {
              if (data.data.customize[i].is_need == 1) {
                app.sexIsNeed = true
              }
              app.sex = true
            } else if (data.data.customize[i].value == 'age') {
              if (data.data.customize[i].is_need == 1) {
                app.ageIsNeed = true
              }
              app.age = true
            } else if (data.data.customize[i].value == 'school') {
              if (!fixed_school) {
                queryData()
              } else {
                $('.input.school').val(fixed_school.school_name).attr('disabled', true)
              }
              if (data.data.customize[i].is_need == 1) {
                app.schoolIsNeed = true
              }
            } else if (data.data.customize[i].value == 'graduate_time') {
              if (data.data.customize[i].is_need == 1) {
                app.graduateTimeNeed = true
              }
            } else if (data.data.customize[i].value == 'wechat') {
              if (data.data.customize[i].is_need == 1) {
                app.wechatNeed = true
              }
            }
            $('.layer').hide()
          }
        } else {
          alert(data.msg)
        }
      }
    )

    $('#province').on('change', '.province', function () {
      pid = $(this).find('option:selected').attr('pid')
      var city
      var district
      $.post(
        baseUrl + 'yy/v1/Front/location/region',
        {
          pid: pid,
        },
        function (data) {
          if (data.code == 200) {
            city += '<option>请选择城市</option>'
            district += '<option>请选择区县</option>'
            for (var i = 0; i < data.data.length; i++) {
              city += '<option cid=' + data.data[i].id + '>' + data.data[i].name + '</option>'
            }
            $('.city').empty().append(city)
            $('.district').empty().append(district)
          }
        }
      )
    })

    $('#city').on('change', '.city', function () {
      cid = $(this).find('option:selected').attr('cid')
      $('.district')
      var district
      $.post(
        baseUrl + 'yy/v1/Front/location/region',
        {
          pid: cid,
        },
        function (data) {
          if (data.code == 200) {
            district += '<option>请选择区县</option>'
            for (var i = 0; i < data.data.length; i++) {
              district += '<option>' + data.data[i].name + '</option>'
            }
            $('.district').empty().append(district)
          }
        }
      )
    })

    $('.city').click(function () {
      if (province_id == 0) {
        if ($('.province option:not(:first):selected').text() == '') {
          alert('请先选择省份')
          return false
        }
      }
    })
    //高校+毕业年份新增
    $('.school').click(function () {
      if (!fixed_school) {
        $('.school-div').show()
      }
    })
    var flag = 1
    $('.school').on('input propertychange', function () {
      var text = $(this).val()
      if (text && flag == 1) {
        throttle(queryData, null, 500, text) //实时搜索节流函数
      }
    })
    function queryData(text) {
      flag = 0
      var data = { name: '' }
      if (text != undefined) {
        data.name = text
      }
      $.get(baseUrl + 'yy/marketing/yuyue/snj/colleges', data, function (res) {
        if (res && res.code == 200 && res.data && res.data.collegeRspDtoList && res.data.collegeRspDtoList.length > 0) {
          var html = []
          res.data.collegeRspDtoList.forEach(function (item) {
            html.push(`<li data-id="${item.id}">${item.name}</li>`)
          })
          $('.school-div ul').html(html)
          flag = 1
        } else {
          $('.school-div ul').html('暂无数据')
          flag = 1
        }
        school_id = ''
      })
    }
    function throttle(fn, context, delay, text, mustApplyTime) {
      clearTimeout(fn.timer)
      fn._cur = Date.now() //记录当前时间
      if (!fn._start) {
        //若该函数是第一次调用，则直接设置_start,即开始时间，为_cur，即此刻的时间
        fn._start = fn._cur
      }
      if (fn._cur - fn._start > mustApplyTime) {
        //当前时间与上一次函数被执行的时间作差，与mustApplyTime比较，若大于，则必须执行一次函数，若小于，则重新设置计时器
        fn.call(context, text)
        fn._start = fn._cur
      } else {
        fn.timer = setTimeout(function () {
          fn.call(context, text)
        }, delay)
      }
    }
    $('body').on('click', '.school-div li', function () {
      var text = $(this).html()
      $(this).siblings().removeClass('check').end().addClass('check')
      $('.school').val(text)
      $('.school-div').hide()
      school_id = $(this).data('id')
    })
  },
})

var bSign = false

if ($(window).width() > 1080) {
  channelHeader = 31
  // 注册滑块
  if (typeof pcHk === 'function') {
    pcHk('#your-dom-id')
  } else {
    console.log('pcHk is not function')
  }
} else {
  channelHeader = 32
  // m端验证
  if (typeof pcHk === 'function') {
    mHK('#nc')
  } else {
    console.log('mHK is not function')
  }
}
// 提交
$('.submit').click(function () {
  if (bSign == true) {
    return false
  }
  params.channel = channel
  params.alias_name = alias_name
  params.is_repeat = 1
  params.token = token
  for (var i = 0; i < value_arr.length; i++) {
    switch (value_arr[i]) {
      case 'mobile':
        params.mobile = $('.mobile').val() ? $('.mobile').val() : ''
        break
      case 'msg_code':
        params.msg_code = $('input[name="code"]').val() ? $('input[name="code"]').val() : ''
        break
      case 'true_name':
        params.true_name = $('.trueName').val() ? $('.trueName').val() : ''
        break
      case 'card_id':
        params.card_id = $('.card_id').val() ? $('.card_id').val() : ''
        break
      case 'address':
        params.address = $('.address').val() ? $('.address').val() : ''
        break
      case 'exam_type':
        params.exam_type = $('.examType option:selected').val() ? $('.examType option:selected').val() : ''
        break
      case 'qq':
        params.qq = $('.qq').val() ? $('.qq').val() : ''
        break
      case 'email':
        params.email = $('.mail').val() ? $('.mail').val() : ''
        break
      case 'sex':
        params.sex = $('.sex option:not(:first):selected').text() ? $('.sex option:not(:first):selected').text() : ''
        break
      case 'age':
        params.age = $('.age').val() ? $('.age').val() : ''
        break
      case 'school':
        params.school = $('.school').val() ? $('.school').val() : ''
        break
      case 'graduate_time':
        params.graduate_time = $('.graduate_time').val() ? $('.graduate_time').val() : ''
        break
      case 'wechat':
        params.wechat = $('.wechat').val() ? $('.wechat').val() : ''
        break
      case 'province':
        params.province = $('.province option:not(:first):selected').text() ? $('.province option:not(:first):selected').text() : ''
        break
      case 'city':
        params.city = $('.city option:not(:first):selected').text() ? $('.city option:not(:first):selected').text() : ''
        break
      case 'region':
        params.region = $('.district option:not(:first):selected').text() ? $('.district option:not(:first):selected').text() : ''
        break
    }
  }
  if (params.mobile == '') {
    alert('请输入手机号')
    return false
  }
  if (!/^(1[0-9]{10})$/.test(params.mobile)) {
    alert('请输入有效的手机号码！')
    return false
  }
  if (params.msg_code == '') {
    alert('请输入短信验证码')
    return false
  }
  if (app.nameIsNeed == true) {
    if (params.true_name == '') {
      alert('请输入真实姓名')
      return false
    }
  }
  if (params.true_name) {
    //如果姓名存在
    var re = /[^\u4e00-\u9fa5]/
    if (re.test(params.true_name)) {
      alert('姓名必须全是中文')
      return false
    }
    if (params.true_name.length < 2) {
      alert('请输入至少2位中文姓名')
      return false
    }
  }
  if (params.card_id == '' && app.idIsNeed == true) {
    alert('请输入身份证号码')
    return false
  }
  if (params.province == '' && province_need == true) {
    alert('请选择省份')
    return false
  }
  if (params.city == '' && city_need == true) {
    alert('请选择城市')
    return false
  }
  if (params.region == '' && region_need == true) {
    alert('请选择区县')
    return false
  }
  if (params.address == '' && app.addIsNeed == true) {
    alert('请输入地址')
    return false
  }
  if (params.age == '' && app.ageIsNeed == true) {
    alert('请输入年龄')
    return false
  }
  if (params.sex == '' && app.sexIsNeed == true) {
    alert('请选择性别')
    return false
  }
  if (params.email == '' && app.examIsNeed == true) {
    alert('请输入邮箱地址')
    return false
  }
  if (params.email) {
    var regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (!regEmail.test(params.email)) {
      alert('请输入有效的邮箱地址！')
      return false
    }
  }
  if (params.qq == '' && app.qqIsNeed == true) {
    alert('请输入QQ号码')
    return false
  }
  if (params.exam_type == '' && app.examIsNeed == true) {
    alert('请选择考试类型')
    return false
  }
  if ((params.school == '' || !school_id) && (app.schoolIsNeed == true || app.graduateTimeNeed == true)) {
    alert('请选择学校')
    return false
  }
  if (params.graduate_time == '' && app.graduateTimeNeed == true) {
    alert('请选择毕业年份')
    return false
  }
  if (params.wechat == '' && app.wechatNeed == true) {
    alert('请输入微信号')
    return false
  }

  //判断拓展字段
  if (expandFields.length > 0) {
    for (var j = 0; j < expandFields.length; j++) {
      let form_name = expandFields[j].form_name
      let content = ''
      if (expandFields[j].f_type == 1) {
        //单项选择
        content = $("input[name='" + form_name + "']:checked").val()
      } else if (expandFields[j].f_type == 2) {
        //多项选择
        let checkBoxValue = []
        $("input[name='" + form_name + "']:checked").each(function () {
          checkBoxValue.push($(this).val())
        })
        if (checkBoxValue.length > 0) {
          content = checkBoxValue.join(',')
          //判断是否选择多了
          if (expandFields[j].max_input > 0 && checkBoxValue.length > expandFields[j].max_input) {
            alert(expandFields[j].f_title + ':最多只能选择' + expandFields[j].max_input + '个')
            return false
          }
        }
      } else if (expandFields[j].f_type == 4) {
        //文本域
        content = $('.' + form_name).val()
      } else {
        content = $('.' + form_name).val()
      }
      if (expandFields[j].is_required == 1 && (!content || content == 'undefined')) {
        alert(expandFields[j].f_title + '不能为空')
        return false
      }
      params[form_name] = content
      // params.form_name = content;
    }
  }
  //渠道字段
  params.sem = $('#source').val()
  params.is_slide = 1
  params.school_id = school_id
  console.log(params)

  var phone = $('.mobile').val()
  $.ajaxSetup({
    headers: {
      'Yuyue-Origin-Url': $('input[name="current_url"]').val(),
    },
  })
  // console.log(params);return ;
  $.ajax({
    type: 'POST',
    url: baseUrl + 'yy/v1/Front/yuyue',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Channel: channelHeader,
      Platform: 'web',
    },
    data: params,
    success: function (data) {
      if (data.code == 200) {
        sa.login(phone)
        //预约类型响应处理
        if (data.data.type != 1 && data.data.type != 9) {
          if (data.data.tips) {
            alert(data.data.tips)
          } else {
            alert('预约成功')
            $('.window_mask').hide()
            window.localStorage.setItem('sem_yy', 'yes')
          }
          if (data.data.jump_url) {
            window.location.href = data.data.jump_url
          } else {
            window.location.reload()
          }
        } else {
          bSign = true
        }
      } else {
        alert(data.msg)
      }
    },
  })
  if (GetQueryString('wuliao_id')) {
    // wuliaoid
    $.ajax({
      type: 'POST',
      url: baseUrl + 'yy/marketing/tg/wuliao/addWuLiaoUser',
      data: {
        wuliao_id: GetQueryString('wuliao_id'),
        mobile: params.mobile,
        link_url: window.location.href,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (data) {},
      error: function (res) {
        console.log(res.msg)
      },
    })
  }
  window.localStorage.setItem('sem_yy', 'yes')
})

//提交end

//获取url参数
function GetQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

$('.input').on('blur', 'input', function () {
  var toFix = $(this).offset().top
  window.scroll(0, toFix)
})
$('.input').on('blur', 'select', function () {
  var toFix = $(this).offset().top
  window.scroll(0, toFix)
})
