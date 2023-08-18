var nc;
// 滑块验证是否通过
var ishk = false;

// 判断手机号
function isPhone11(mobile) {
    // var mobile = $('.input_reg').val();
    if (!mobile) {
        layer.msg('请输入手机号码', {
            time: 2000,
        });
        nc.reset();
        ishk = false;
        return false;
    }
    // if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(mobile))) {
    if (!(/^(1[0-9]{10})$/.test(mobile))) {
        layer.msg('请输入有效的手机号码', {
            time: 2000,
        });
        nc.reset();
        ishk = false;
        return false;
    }
    ishk = true;
    $('.send').trigger("click")
}

var appObj = {};
var base_url;
// 判断环境
if (location.host == '127.0.0.1:8080') {
    // 测试
    appObj.env = "alpha";
    base_url = 'https://df-alpha.huatu.com';
} else {
    // 正式
    appObj.env = "prod";
    base_url = 'https://defen.huatu.com';
}


// pc滑块
function pcHk(renderTo) {
    // 短信验证码登录 滑块
    var nc_token = ["FFFF0N1N0000000099DF", (new Date()).getTime(), Math.random()].join(':');
    var NC_Opt = {
        renderTo: renderTo,
        appkey: "FFFF0N1N0000000099DF",
        scene: "nc_login",
        token: nc_token,
        customWidth: 300,
        trans: {
            "key1": "code0"
        },
        elementID: ["usernameID"],
        is_Opt: 0,
        language: "cn",
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
                scene: 'nc_login'
            }

            var mobile;
            mobile = $('.mobile').val();
            isPhone11(mobile, 'reg');
        }
    }
    // 验证码登录
    nc = new noCaptcha(NC_Opt)
    nc.upLang('cn', {
        _startTEXT: "请滑至最右边获取验证码",
        _yesTEXT: "验证通过",
        _error300: '哎呀，出错了，点击< a href= \"javascript:__nc.reset()\">刷新</ a>再来一次',
        _errorNetwork: '网络不给力，请< a href=\"javascript:__nc.reset()\">点击刷新</ a>',
    })

    appObj = {
        scene_type: 'login',
        phone: '',
        channel: 31,
        platform: 'pc',
    };
}

// m滑块
function mHK(renderTo) {
    // 验证码登录滑块
    var nc_token = ["FFFF0N000000000099DF", (new Date()).getTime(), Math.random()].join(':');
    var nc_opt = {
        renderTo: renderTo,
        appkey: 'FFFF0N000000000099DF',
        scene: 'nc_register_h5',
        token: nc_token,
        trans: {
            "key1": "code200"
        },
        elementID: ["usernameID"],
        is_Opt: 0,
        language: "cn",
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
                scene: 'nc_register_h5'
            }

            var mobile = $('.mobile').val();
            isPhone11(mobile, 'reg');
        },
        error: function (s) {

        }
    }
    nc = NoCaptcha.init(nc_opt);
    nc.reset(); //请务必确保这里调用一次reset()方法
    NoCaptcha.setEnabled(true);

    NoCaptcha.upLang('cn', {
        'LOADING': "加载中...", //加载
        'SLIDER_LABEL': "请滑至最右边获取验证码", //等待滑动
        'CHECK_Y': "验证通过", //通过
        'ERROR_TITLE': "非常抱歉，这出错了...", //拦截
        'CHECK_N': "验证未通过", //准备唤醒二次验证
        'OVERLAY_INFORM': "经检测你当前操作环境存在风险，请输入验证码", //二次验证
        'TIPS_TITLE': "验证码错误，请重新输入" //验证码输错时的提示
    });
    appObj = {
        scene_type: 'login',
        phone: '',
        channel: 32,
        platform: 'h5',
    };
}

//判断登录设备
var facility;
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
    facility = "ios";
} else if (/(Android)/i.test(navigator.userAgent)) { //判断Android
    facility = "android ";
} else { //pc
    facility = "pc";
}
;


// 滑块
if ($(window).width() > 1080) {
    channelHeader = 31
    // 注册滑块
    if (typeof pcHk === 'function') {
        pcHk("#your-dom-id");
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


// new WOW().init();

function autoScreen() {
    var x = $('html').width();
    if ($(window).width() < 1200) {

        $('html').css('font-size', 40 * (x / 750) + 'px');

    } else {
        $('html').css('font-size', 40 + 'px');

    }
}

autoScreen();

window.onresize = debounce(autoScreen, 500)

function debounce(fn, timeLong) {
    var timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(function () {
            fn()
        }, timeLong)
    }
}


var nowHref;
$('.txt04 a,.box01_nav_item a,.box01_table a,.box02_item a').click(function (e) {
    e.preventDefault();
    nowHref = $(this).attr('href');
    var key = window.localStorage.getItem("2023gkbs");
    if (key == 'yes') {
        window.open(nowHref, "_blank");
    } else {
        // 弹窗形式
        $('.login_maintukuip').fadeIn();

    }
});


$('.fixed_close').click(function () {
    $('.login_maintukuip').fadeOut();
})
var baseUrl = 'https://defen.huatu.com/api/';

// 滑块
if ($(window).width() > 1080) {
    channelHeader = 31
    // 注册滑块
    if (typeof pcHk === 'function') {
        pcHk("#your-dom-id");
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
var token = '';
var channel = '';
var alias_name = '';
var mobile = '';
var params = {};
var id = '1091239'
var wuliao_id = '';

id = '1105285';
wuliao_id = '';


function getCookie(name) {
    var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

//获取登录条件
$.getJSON(baseUrl + 'yy/v1/Front/getYuyueMessageInfo',
    {id: id}, function (data) {
        if (data.code === 200) {
            token = data.data.token;
            channel = data.data.channel;
            alias_name = data.data.alias_name;
        } else {
            alert(data.msg);
        }
    });


function ajaxBtntiku() {
    var username = $('.username').val();
    var mobile = $('.mobile').val();
    var prov = '广东题库';
    var city = '';
    var code = $('#PhoneCode').val();
    //if (!prov) {
    // layer.msg('请选择省份');
    // return false;
    //}

    if (!mobile) {
        layer.msg('请输入手机号');
        return false;
    }
    if (!(/^(1[0-9]{10})$/.test(mobile))) {
        layer.msg('请输入有效的手机号码！');
        return false;
    }
    if (!code) {
        layer.msg('请输入验证码');
        return false;
    }
    var extUrl = '?' + window.location.href.split('?')[1];
    var semUrl = window.location.href;
    var titleurl = '';
    if (/mobile/i.test(navigator.userAgent)) {
        titleurl = document.getElementsByClassName('detail-tit')[0].innerHTML;
    } else {
        titleurl = document.getElementsByClassName('essayHeader')[0].children[0].innerHTML;
    }

    var params = {
        token: token,
        channel: channel,
        alias_name: alias_name,
        mobile: mobile,
        msg_code: code,
        province: prov,
        city: city,
        ext1: titleurl,
        ext2: semUrl,
        sem: semUrl,
        is_repeat: 1,
        is_slide: 1,
    }

    $.ajaxSetup({
        headers: {
            'Yuyue-Origin-Url': semUrl
        }
    });
    // console.log(params);return ;
    $.ajax({
        type: "POST",
        url: baseUrl + 'yy/v1/Front/yuyue',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Channel': channelHeader
        },
        data: params,
        success: function (data) {
            if (data.code == 200) {
                $.ajax({
                    type: "post",
                    url: "https://gd.huatu.com/zt/wxfwh/mobileLogin/",
                    data: {username: username, mobile: mobile, type: '手机号登录的'},
                    dataType: 'json',
                    success: function (res) {

                    },
                    error: function (res) {

                    }
                })
                //预约类型响应处理
                if (data.data.type != 1 && data.data.type != 9) {
                    if (wuliao_id) {
                        // wuliaoid
                        $.ajax({
                            type: "POST",
                            url: 'https://defen.huatu.com/api/yy/marketing/tg/wuliao/addWuLiaoUser',
                            data: {
                                wuliao_id: wuliao_id,
                                mobile: params.mobile,
                                link_url: window.location.href,
                            },
                            header: {
                                'content-type': 'application/x-www-form-urlencoded'
                            },
                            success: function (data) {

                            },
                            error: function (res) {
                                console.log(res.msg)
                            }
                        });
                    }

                    if (data.data.tips) {
                        layer.msg('登录成功', {
                            time: 2000
                        }, function () {


                            window.localStorage.setItem('gdht_wxlogin_type', mobile)

                            $('.login_maintukuip').hide();
                            if (redirect_href != undefined) {

                                redirect_href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/');
                                location.href = redirect_href;
                            }
                            //location.reload();
                            return false;
                        })
                    } else {


                        layer.msg('提交成功', {
                            time: 2000
                        }, function () {
                            window.localStorage.setItem('gdht_wxlogin_type', mobile)

                            if (nowHref) {
                                window.location.href = nowHref
                            }
                            $('.login_maintukuip').hide();
                            if (redirect_href != undefined) {

                                redirect_href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/');
                                location.href = redirect_href;
                            }
                            // location.reload();
                            return false;
                        })
                    }
                    if (data.data.jump_url) {
                        layer.msg('提交成功', {
                            time: 2000
                        }, function () {
                            window.localStorage.setItem('gdht_wxlogin_type', mobile)
                            if (nowHref) {
                                window.location.href = nowHref
                            }
                            $('.login_maintukuip').hide();
                            return false;
                        })
                    }

                    window._agl && window._agl.push(['track', ['success', {t: 3}]])
                    (function (w, n) {
                        w[n] = typeof w[n] === 'function' ? w[n] : function () {
                            (w[n].c = w[n].c || []).push(arguments);
                        }

                        _qha('send', {
                            et: 31,
                            order: [{
                                id: 'SUBMIT_BUTTON',/* 注册id, 必填项*/
                                orderType: '1'/* 常量，请勿修改*/
                            }]
                        });
                    })(window, '_qha');
                }
            } else {
                alert(data.msg);
                if (redirect_href != undefined) {

                    redirect_href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/');
                    location.href = redirect_href;
                }
                //location.reload();
            }
        }
    });
};


//发送手机验证码
function sendnumtiku(obj) {
    var mobile = $('.mobile').val();
    // var img_code = $(obj).parents('.common_container').find('.login_img_code').val();
    if (!mobile) {
        layer.msg('请输入手机号码', {
            time: 2000,
        });
        return false;
    }
    if (!(/^(1[0-9]{10})$/.test(mobile))) {
        layer.msg('请输入有效的手机号码', {
            time: 2000,
        });
        return false;
    }
    if (!ishk) {
        layer.msg('请滑动滑块通过验证', {
            time: 2000,
        });
        return false;
    }

    id = 1105285;
    $(obj).attr('disabled', true);
    $.ajax({
        type: "get",
        url: "https://defen.huatu.com/api/yy/v1/Front/yuyue-check",
        data: {
            mobile: mobile,
            yuyue_id: id
        },
        success: function (res) {
            if (res.code == 200) {
                layer.msg('您已经成功登录', {
                    time: 2000
                }, function () {

                    window.localStorage.setItem('gdht_wxlogin_type', mobile)
                    //location.reload();
                    if (redirect_href != undefined) {

                        redirect_href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/');
                        location.href = redirect_href;
                    }
                    //location.reload();
                    if (nowHref) {
                        window.location.href = nowHref
                    }
                    $('.login_maintukuip').hide();
                    window._agl && window._agl.push(['track', ['success', {t: 3}]])
                    (function (w, n) {
                        w[n] = typeof w[n] === 'function' ? w[n] : function () {
                            (w[n].c = w[n].c || []).push(arguments);
                        }

                        _qha('send', {
                            et: 31,
                            order: [{
                                id: 'SUBMIT_BUTTON',/* 注册id, 必填项*/
                                orderType: '1'/* 常量，请勿修改*/
                            }]
                        });
                    })(window, '_qha');
                    return false;
                })
                sa.login(mobile);
            } else {

                var SysSecond;
                var InterValObj;
                SysSecond = 60;
                InterValObj = window.setInterval(SetRemainTime, 1000);

                function SetRemainTime() {
                    if (SysSecond > 0) {
                        SysSecond = SysSecond - 1;
                        var second = Math.floor(SysSecond % 60);
                        var minite = Math.floor((SysSecond / 60) % 60);
                        var hour = Math.floor((SysSecond / 3600) % 24);
                        var day = Math.floor((SysSecond / 3600) / 24);
                        $(obj).val(second + '秒');
                    } else {
                        window.clearInterval(InterValObj);
                        $(obj).val('发送短信');
                        $(obj).attr('disabled', false);
                        nc.reset();
                        ishk = false;
                    }
                }

                var data = formData;
                if ($(window).width() > 1080) {
                    scene = 'nc_login';
                } else {
                    scene = 'nc_register_h5';
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
                    platform: appObj.platform
                };
                let apiUrl = base_url + '/api/yy/v1/Front/Sms/sendsms';
                console.log('向后台传参', sendData)
                $.ajax({
                    url: apiUrl,
                    type: "get",
                    data: sendData,
                    beforeSend: function (XMLHttpRequest) {
                        XMLHttpRequest.setRequestHeader("Channel", sendData.channel);
                    },
                    success: function (data) {
                        if (data.code == 200) {
                            layer.msg('发送成功', {
                                time: 2000
                            })
                        } else {
                            layer.msg(data.msg, {
                                time: 2000
                            })
                        }
                    },
                    error: function (error) {
                        console.log('接口请求异常报错了')
                        let data = {
                            code: 201,
                            data: false,
                            extra: [],
                            msg: '网络异常'
                        };
                    }
                })
            }
        }
    });
}

