document.write('<script src="https://gd.huatu.com/zt/theshow/file/js/clipboard.min.2.js?v=" charset="gbk"><\/script>');
document.write('<link rel="stylesheet" type="text/css" href="https://gd.huatu.com/zt/css.css"></link>');

function close_x_box() {
    $(".xn-xcx-box,.xn-xcx-bg").addClass("hide");
}

var alertext = '口令复制成功';

function copythemessage() {
    var alink = localStorage.getItem("showwindowurl");
    var demoInput = document.getElementById("demoInput");
    if (!demoInput) {
        var inputEle = $('<input id="demoInput" value="11111" type="text" style="position: fixed;z-index: 999; left: 50%;top: 50%; transform: translate(-50%, -50%); opacity: 0;">');
        $('body').append(inputEle);
        demoInput = document.getElementById("demoInput");
    }

    demoInput.value = alink;
    let input = document.querySelector('#demoInput');
    let data = input.select();
    document.execCommand('copy');
    alert(alertext);
}

var title = '相关入口';
var wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/gd_wx.jpg';
if (window.location.href.indexOf("maoming.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/mm_wx.jpg';
} else if (window.location.href.indexOf("zhuhai.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/zh_wx.jpg';
} else if (window.location.href.indexOf("zhongshan.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/zs_wx.jpg';
} else if (window.location.href.indexOf("zhaoqing.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/zq_wx.jpg';
} else if (window.location.href.indexOf("zhanjiang.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/zj_wx.jpg';
} else if (window.location.href.indexOf("yunfu.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/yf_wx.jpg';
} else if (window.location.href.indexOf("shenzhen.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/sz_wx.jpg';
} else if (window.location.href.indexOf("shaoguan.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/sg_wx.jpg';
} else if (window.location.href.indexOf("shanwei.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/sw_wx.jpg';
} else if (window.location.href.indexOf("shantou.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/st_wx.jpg';
} else if (window.location.href.indexOf("qingyuan.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/qy_wx.jpg';
} else if (window.location.href.indexOf("meizhou.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/mz_wx.jpg';
} else if (window.location.href.indexOf("jieyang.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/jy_wx.jpg';
} else if (window.location.href.indexOf("jiangmen.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/jm_wx.jpg';
} else if (window.location.href.indexOf("huizhou.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/hz_wx.jpg';
} else if (window.location.href.indexOf("heyuan.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/hy_wx.jpg';
} else if (window.location.href.indexOf("guangzhou.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/gz_wx.jpg';
} else if (window.location.href.indexOf("foshan.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/fs_wx.jpg';
} else if (window.location.href.indexOf("dongguan.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/dg_wx.jpg';
} else if (window.location.href.indexOf("chaozhou.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/cz_wx.jpg';
} else if (window.location.href.indexOf("yangjiang.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/yj_wx.jpg';
} else if (window.location.href.indexOf("nanshan.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/ns_wx.jpg';
} else if (window.location.href.indexOf("huidong.huatu.com") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/hd_wx.jpg';
} else if (window.location.href.indexOf("gd.huatu.com/sydw") != -1 || window.location.href.indexOf("gd.huatu.com/zt/gdsydw") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/gd_wx.jpg';
} else if (window.location.href.indexOf("gd.huatu.com/zt/jszg") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/gd_jszg_wx.jpg';
} else if (window.location.href.indexOf("gd.huatu.com/jsks") != -1) {
    wxpic = 'https://gd.huatu.com/zt/gdhtwzhz/pic/gd_jsks_wx.jpg';
}
var textEle = '	<div class="xn-xcx-bg hide">';
textEle += '	<div class="xn-xcx-box">';
textEle += '		<div class="xn-xcx-head">';
textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">';
textEle += '		<span id="thetitle">' + title + '</span>';
textEle += '		<i title="关闭" id="xn_closed" onclick="close_x_box()" id="xn_closed_id">x</i>';
textEle += '	</div>';
textEle += '	<ul class="xn-xcx-ul">';
textEle += '		<li>';
textEle += '			<p class="tishi3" id="tishi3"></p>';
textEle += '			<p class="tishi" id="tishi">小程序里不能打开外部链接</p>';
textEle += '			<p class="tishi" id="tishi2">微信关注回复口令即可进入！</p>';
textEle += '			<img class="wxewm" id="wxewm" src="' + wxpic + '">';
textEle += '			<p class="gzcopy" id="gzcopy">识别二维码，回复口令快速进入！</p>';
textEle += '            <button class="copy-btn" id="copyid" data-clipboard-text="" onclick="copythemessage1()">点击复制口令</button>';
textEle += '		</li>';
textEle += '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>';
textEle += '	</ul>';
textEle += '</div></div>';
$('body').append(textEle);
document.writeln('<link href="https://gd.huatu.com/zt/wxfwh/js/layui/layui.css?v=" rel="stylesheet" />');
document.writeln('<script charset="gb2312" src="https://gd.huatu.com/zt/wxfwh/js/layui/layui.all.js?v="><\/script>');
$(function () {
    var inputEle = $('<input id="demoInput" value="11111" type="text" style="position: fixed;z-index: 999; left: 50%;top: 50%; transform: translate(-50%, -50%); opacity: 0;">');
    $('body').append(inputEle);
});
var cnzz_s_tag = document.createElement('script');
cnzz_s_tag.type = 'text/javascript';
cnzz_s_tag.async = true;
cnzz_s_tag.charset = 'utf-8';
cnzz_s_tag.src = 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js';
var root_s = document.getElementsByTagName('script')[0];
root_s.parentNode.insertBefore(cnzz_s_tag, root_s);

function xcx(url) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {
                xcxforminiprom(url);
                event.preventDefault();
            } else {
            }
        })
    } else {
    }
}

function xcxforminiprom(url) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {
                var alink = url;
                var demoInput = document.getElementById("demoInput");
                demoInput.value = alink;
                let input = document.querySelector('#demoInput');
                let data = input.select();
                document.execCommand('copy');
                document.getElementById('xn_closed_id').innerHTML = 'x';
                if (url.indexOf("go/u3/") != -1) {
                    document.getElementById('thetitle').innerHTML = '文档下载';
                    document.getElementById('tishi').innerHTML = '小程序里不能直接下载文件';
                    document.getElementById('tishi2').innerHTML = '微信关注回复口令下载或复制口令到浏览器下载！'
                    document.getElementById('gzcopy').innerHTML = '识别二维码，回复口令快速下载！';
                }
                //付款购买的显示企业号
                $('.wxewm').attr('src', wxpic);
                if (url.indexOf("htjy.cc") != -1 || url.indexOf("xd.huatu.com") != -1 || url.indexOf("xue.huatu.com") != -1 || url.indexOf("v.huatucom") != -1) {
                    $('.wxewm').attr('src', 'https://gd.huatu.com/zt/gdhttg/zxkfewm/gdwzqywxkf.png');
                }
                $('.xn-xcx-head img').attr('src', 'https://gd.huatu.com/zt/theshow/file/images/download.png');
                $(".xn-xcx-box,.xn-xcx-bg").removeClass("hide");
                localStorage.setItem("showwindowurl", url);
                setTimeout(function () {
                    document.getElementById('tishi3').innerHTML = '<a style="margin-right: 27%;width: 80%;"><img src="https://ah.huatu.com/z/pic/img/goin.gif"  style="float: left;margin-left: 21%;" alt="">回复口令已复制成功！</a>';
                }, 1000);
                setTimeout(function () {
                    document.getElementById('tishi3').innerHTML = '';
                }, 6000);
                event.preventDefault();
            } else {
            }
        })
    } else {
    }
}

//去除原来的xcx2
function xcx22(url, title, picurl) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {
                var alink = url;
                var demoInput = document.getElementById("demoInput");
                demoInput.value = title + alink;
                let input = document.querySelector('#demoInput');
                let data = input.select();
                document.execCommand('copy');
                //alert("口令复制成功");
                if (url.indexOf("go/u3/") != -1) {
                    document.getElementById('thetitle').innerHTML = '文档下载';
                    document.getElementById('tishi').innerHTML = '小程序里不能直接下载文件';
                    document.getElementById('tishi2').innerHTML = '微信关注回复口令内容下载文档！'
                    document.getElementById('gzcopy').innerHTML = '识别二维码，回复口令即可快速下载！';
                }
                if (picurl) {
                    document.getElementById('wxewm').src = picurl;
                }
                $('.xn-xcx-head img').attr('src', 'https://gd.huatu.com/zt/theshow/file/images/download.png');
                $(".xn-xcx-box,.xn-xcx-bg").removeClass("hide");
                localStorage.setItem("showwindowurl", url);
                setTimeout(function () {
                    document.getElementById('tishi3').innerHTML = '口令已经复制成功';
                }, 1000);
                setTimeout(function () {
                    document.getElementById('tishi3').innerHTML = '';
                }, 6000);
                event.preventDefault();
                return true;
            } else {
            }
        })
    } else {
    }
}

//原来的xcx方法
function xcx1old(url) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {
                xcxforminiprom(url);
                event.preventDefault();
            } else {
            }
        })
    } else {
        xcxqt1(url);
        //xcxqt(url) ;
    }
}

function xcx(url, text, pic) {
    if (url && text && pic) {
        xcx3(url, text, pic);
    } else if (url && text && !pic) {
        xcx2(url, text);
    } else if (url && !text && !pic) {
        xcx1(url);
    } else {

    }

}
	
	
	