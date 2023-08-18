var redirect_href = ''

//url 链接或者口令
function xcx1(url) {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        // wxtc(url)
        wx.miniProgram.getEnv(res => {
            if (res.miniprogram) {
                xcxforminiprom1(url)
                event.preventDefault()
            } else {
                //if(window.location.href.indexOf("https://m.qingyuan.huatu.com/2023/0317/4332722.html") != -1){
                if (0) {
                    if (1) {
                        //if(localStorage.getItem('gdht_wxlogin_type')){
                        //alert('开始验证');
                        redirect_href = url
                        loginOpen()
                        event.preventDefault()
                    }
                } else {
                    //微信浏览器
                    //广东，深圳都开启关注服务号
                    //if(0){
                    //if((window.location.href.indexOf("https://shenzhen.huatu.com/") != -1)||(window.location.href.indexOf("https://gd.huatu.com/") != -1)){
                    //微信端判断跳转的链接或者附件如果是gov和那些小店链接，则不收手机号
                    //alert('开始下载了');
                    //alert('华图提醒你正在下载1');
                    if (url.indexOf('go/u3/') != -1 || url.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || url.indexOf('xls') != -1 || url.indexOf('pdf') != -1 || url.indexOf('doc') != -1 || url.indexOf('xlsx') != -1) {
                        //alert('华图提醒你正在下载2');
                        //地址带有wj=1，则直接下载附件
                        var wj = getQueryString('wj')
                        if (wj == '1') {
                        } else {
                            wxtc(url)
                            event.preventDefault()
                        }

                        // if(localStorage.getItem('gdht_wxlogin_type')){
                        // 	//alert('开始验证');
                        // 	wxtc(url);
                        // 	// redirect_href = url;
                        // 	// loginOpen();
                        // 	event.preventDefault();
                        // }
                    }

                    //开始判断其他入口的链接 微信浏览器的情况下 且有自定义参数的情况下
                    if (url.indexOf('huatu.com') == -1 && url.indexOf('https://htjy') == -1) {
                        //判断微信浏览器地址是否带有弹窗类型标志poptype  1为用户回复获取（企业微信、客服二维码 2为关键词获取 3为扫码获取
                        var poptype = 1
                        var locationurl = window.location.href
                        //带有参数的直接弹窗
                        if (locationurl.indexOf('amp;poptype=') != -1) {
                            wxtc(url)
                        } else {
                            //判断文章中有没有自定义控制的三个内容 wzpoptype wzpopkey wzwximg 等  或者地址上带有tg=
                            if (document.getElementById('wzpoptype') || locationurl.indexOf('tg=') != -1) {
                                wxtc(url)
                            }
                        }
                        //无参数的情况直接跳转
                    }
                    //反对法地方
                }
            }
        })
    } else {
        //参数1不为空
        var flagzw = false
        if (/.*[\u4e00-\u9fa5]+.*$/.test(url)) {
            flagzw = true
        }
        if (url && !flagzw) {
            if (url.indexOf('go/u3/') != -1 || url.indexOf('https://u3.huatu.com/uploads/soft/') != -1) {
                //判断是否为移动端
                redirect_href = url
                var ua1 = window.navigator.userAgent.toLowerCase()
                if (
                    ua1.match(
                        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                    )
                ) {
                    //移动端

                    //if(1){
                    if (localStorage.getItem('gdht_wxlogin_type')) {
                        //loginOpen();
                        //event.preventDefault();
                    } else {
                        var xcxfunction = $('#xcxfunction').val()
                        if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                            //专题下面没开启true就不弹窗
                        } else {
                            if (window.location.href.indexOf('isxcx=false') != -1) {
                                //链接带着某些参数的不弹窗
                            } else {
                                if (ua1.match(/(iPhone|iPod|iPad);?/i)) {
                                    //区分iPhone设备
                                    //console.log('IOS');
                                    checkRedirect(url)
                                    //loginOpen();
                                    event.preventDefault()
                                } else {
                                    //console.log("Android");
                                    checkRedirect(url)
                                    event.preventDefault()
                                }

                                //if(url=='https://gd.huatu.com/z/go/u3/?u=230111/16cbef8a4f20edd19af985b7b6d8ffb294002.xlsx'){

                                //	checkRedirect(url);
                                //	event.preventDefault();
                                //}else{
                                //	loginOpen();
                                //	event.preventDefault();
                                //}
                            }
                        }
                    }
                } else {
                    //pc端
                    if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                        //江门不进行关注服务号号的操作
                    } else {
                        if (localStorage.getItem('gdht_wxlogin_type')) {
                        } else {
                            var xcxfunction = $('#xcxfunction').val()
                            if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                                //专题下面没开启true就不弹窗
                            } else {
                                if (window.location.href.indexOf('isxcx=false') != -1) {
                                    //链接带着某些参数的不弹窗
                                } else {
                                    loginOpen()
                                    event.preventDefault()
                                }
                            }
                        }
                    }
                }
            }

            //开始判断其他入口的链接进行手机号的收集，不单单u3，在pc/移动的情况下
            if (url.indexOf('huatu.com') == -1 && url.indexOf('https://htjy') == -1) {
                //判断是否为移动端
                redirect_href = url
                var ua1 = window.navigator.userAgent.toLowerCase()
                if (
                    ua1.match(
                        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                    )
                ) {
                    //移动端
                    if (localStorage.getItem('gdht_wxlogin_type')) {
                    } else {
                        var xcxfunction = $('#xcxfunction').val()
                        if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                            //专题下面没开启true就不弹窗
                        } else {
                            if (window.location.href.indexOf('isxcx=false') != -1) {
                                //链接带着某些参数的不弹窗
                            } else {
                                if (ua1.match(/(iPhone|iPod|iPad);?/i)) {
                                    //区分iPhone设备
                                    //console.log('IOS');
                                    checkRedirect(url)
                                    //loginOpen();
                                    event.preventDefault()
                                } else {
                                    //console.log("Android");
                                    checkRedirect(url)
                                    event.preventDefault()
                                }
                                //if(url=='https://ggfw.hrss.gd.gov.cn/gwyks/index.do?v=123'){

                                //	checkRedirect(url);
                                //	event.preventDefault();
                                //}else{
                                //	loginOpen();
                                //	event.preventDefault();
                                //}
                            }
                        }
                    }
                } else {
                    //pc端
                    if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                        //江门不进行关注服务号号的操作
                    } else {
                        if (localStorage.getItem('gdht_wxlogin_type')) {
                        } else {
                            var xcxfunction = $('#xcxfunction').val()
                            if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                                //专题下面没开启true就不弹窗
                            } else {
                                if (window.location.href.indexOf('isxcx=false') != -1) {
                                    //链接带着某些参数的不弹窗
                                } else {
                                    //pc端不弹窗设置
                                    var pcfunction = $('#pcfunction').val()
                                    if (pcfunction == 'true' && window.location.href.indexOf('/zt/') != -1) {
                                    } else {
                                        loginOpen()
                                        event.preventDefault()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            //链接为空（参数一）
        }
    }
}

function xcxforminiprom1(url) {
    var flagzw = false
    var text = ''
    if (/.*[\u4e00-\u9fa5]+.*$/.test(url)) {
        flagzw = true
        text = url
    }
    var alink = url
    if (text) {
        alink = text
    }
    var demoInput = document.getElementById('demoInput')

    if (alink.indexOf('go/u3/') != -1 || alink.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || alink.indexOf('xls') != -1 || alink.indexOf('pdf') != -1 || alink.indexOf('doc') != -1 || alink.indexOf('xlsx') != -1) {
        alink = copytheu3all()
    }

    demoInput.value = alink
    let input = document.querySelector('#demoInput')
    let data = input.select()
    document.execCommand('copy')

    if (alink.indexOf('go/u3/') != -1 || alink.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || alink.indexOf('xls') != -1 || alink.indexOf('pdf') != -1 || alink.indexOf('doc') != -1 || alink.indexOf('xlsx') != -1) {
    } else {
        if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
            alink += '\r\n\r\n' + thecopyforhtmlgg + '\r\n\r\n'
        }
    }

    if (typeof thecopyforhtml == 'string' && thecopyforhtml != '') {
        alink = thecopyforhtml
    }

    const textarea = document.createElement('textarea') // 直接构建textarea  「注意：这里为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
    textarea.value = alink // 设置内容    「注意： \r\n 是 换行 符号」
    document.body.appendChild(textarea) // 添加临时实例
    textarea.select() // 选择实例内容
    document.execCommand('Copy') // 执行复制
    document.body.removeChild(textarea) // 删除临时实例

    //非华图的直接显示复制内容成功
    if (url.indexOf('huatu.com') == -1) {
        alert('链接复制成功，请到浏览器打开')
        return
    }

    if (1) {
        //if (url.indexOf("go/u3/") != -1) {
        document.getElementById('thetitle').innerHTML = '链接获取'
        document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
        document.getElementById('tishi2').innerHTML = '直接复制链接到浏览器打开！'
        document.getElementById('gzcopy').innerHTML = '识别二维码，微信长按粘贴内容快速打开！'
        document.getElementById('copyid').innerHTML = '点击复制内容'
        alertext = '链接复制成功'
    }
    //付款购买的显示企业号
    if (url.indexOf('htjy.cc') != -1 || url.indexOf('xd.huatu.com') != -1 || url.indexOf('xue.huatu.com') != -1 || url.indexOf('v.huatucom') != -1) {
        //$('.wxewm').attr('src', 'https://gd.huatu.com/zt/gdhttg/zxkfewm/gdwzqywxkf.png');
    }

    textcopy = '链接'

    if (text) {
        document.getElementById('thetitle').innerHTML = '口令获取'
        document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
        document.getElementById('tishi2').innerHTML = '微信关注回复【' + text + '】获取！'
        document.getElementById('gzcopy').innerHTML = '识别二维码，回复【' + text + '】获取！！！'
        document.getElementById('copyid').innerHTML = '点击复制口令'
        textcopy = '口令'
        alertext = '口令复制成功'
    }

    document.getElementById('copyid').style.display = 'block'
    //服务号开通
    var locationurl = window.location.href

    var tg = getQueryString('tg')

    //locationurl = 'fdsfsfs';
    //注释，修改为去企业微信
    if (0) {
        //if(url.indexOf("go/u3/") == -1 && (url.indexOf("https://u3.huatu.com/uploads/soft/") == -1)){
        //其他链接去服务号

        if (locationurl.indexOf('gd.huatu.com') != -1) {
            //var code = getqrcode(url);
            //var code = getqrcode(url);
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-wl/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }
        if (locationurl.indexOf('shenzhen.huatu.com') != -1) {
            var code = getqrcodesz(url)
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }
        if (locationurl.indexOf('yunfu.huatu.com') != -1) {
            var code = getqrcodeyf(url)
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('meizhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-mz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('maoming.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-mm/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('chaozhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-cz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('foshan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-fs/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('dongguan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-dg/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('zhongshan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zs/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('jieyang.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-jy/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('guangzhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-gz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('shantou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-st/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('huizhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-hz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('zhanjiang.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zj/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('yangjiang.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-yj/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('gd.huatu.com/jsks/') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-xm-jsks/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('zhuhai.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zh/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('qingyuan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-qy/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('jiangmen.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-jm/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('heyuan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-hy/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('zhaoqing.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zq/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        if (locationurl.indexOf('shanwei.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-sw/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = '扫码获取'
            document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '复制成功'
        }

        //document.getElementById("gzcopy").style.color = '#7a7979';
        //document.getElementById("gzcopy").style.color = '#00b596';
        document.getElementById('gzcopy').style.fontSize = '12px'
        $('.wxewm_next').attr('src', '')
        document.getElementById('tishi3').innerHTML = ''
        //textcopy = "-1";
        //textcopy = "口令已复制成功！";
    } else {
        //附件下载去企业微信
        $('.wxewm_next').attr('src', 'https://gd.huatu.com/zt/js/images/gc.png')

        var code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gd.png'
        if (locationurl.indexOf('maoming.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/mm.png'
        } else if (locationurl.indexOf('zhuhai.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zh.png'
        } else if (locationurl.indexOf('zhongshan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zs.png'
        } else if (locationurl.indexOf('zhaoqing.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zq.png'
        } else if (locationurl.indexOf('zhanjiang.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zj.png'
        } else if (locationurl.indexOf('yunfu.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/yf.png'
        } else if (locationurl.indexOf('shenzhen.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sz.png'
        } else if (locationurl.indexOf('shaoguan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sg.png'
        } else if (locationurl.indexOf('shanwei.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sw.png'
        } else if (locationurl.indexOf('shantou.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/st.png'
        } else if (locationurl.indexOf('qingyuan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/qy.png'
        } else if (locationurl.indexOf('meizhou.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/mz.png'
        } else if (locationurl.indexOf('jieyang.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/jy.png'
        } else if (locationurl.indexOf('jiangmen.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/jm.png'
        } else if (locationurl.indexOf('huizhou.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hz.png'
        } else if (locationurl.indexOf('heyuan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hy.png'
        } else if (locationurl.indexOf('guangzhou.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gz.png'
        } else if (locationurl.indexOf('foshan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/fs.png'
        } else if (locationurl.indexOf('dongguan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/dg.png'
        } else if (locationurl.indexOf('chaozhou.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/cz.png'
        } else if (locationurl.indexOf('yangjiang.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/yj.png'
        } else if (locationurl.indexOf('nanshan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/ns.png'
        } else if (locationurl.indexOf('huidong.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hd.png'
        } else if (locationurl.indexOf('gd.huatu.com/sydw') != -1 || locationurl.indexOf('gd.huatu.com/zt/gdsydw') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gd.png'
        } else if (locationurl.indexOf('gd.huatu.com/zt/jszg') != -1) {
        } else if (locationurl.indexOf('gd.huatu.com/jsks') != -1) {
        } else {
        }

        if (tg) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/' + tg + '.png'
        }

        $('.wxewm').attr('src', code)
        document.getElementById('thetitle').innerHTML = '扫码获取'
        document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
        //document.getElementById('tishi2').innerHTML = '微信关注回复内容快速访问';
        document.getElementById('tishi2').innerHTML = '扫码微信关注，发送口令快速获取！'
        document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注进入对话框！' + '<br>对话框长按粘贴，回复内容快速打开!' //+'或直接复制链接到浏览器打开'
        //document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接';
        //document.getElementById('tishi2').innerHTML = '微信关注回复口令快速访问';
        //document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注回复口令快速打开！';
        document.getElementById('copyid').innerHTML = '点击复制内容'
        //document.getElementById("gzcopy").style.color = '#7a7979';
        //document.getElementById("gzcopy").style.color = '#00b596';
        document.getElementById('gzcopy').style.fontSize = '12px'

        //textcopy = "-1";
        textcopy = '口令已复制成功！'
        alertext = '复制成功'
    }

    $('.xn-xcx-head img').attr('src', 'https://gd.huatu.com/zt/theshow/file/images/download.png')
    $('.xn-xcx-box,.xn-xcx-bg').removeClass('hide')
    localStorage.setItem('showwindowurl', url)
    if (text) {
        localStorage.setItem('showwindowurl', text)
    }
    if (textcopy == '-1') {
    } else {
        setTimeout(function () {
            document.getElementById('tishi3').innerHTML =
                '<a style="margin-right: 27%;width: 80%;"><img src="https://ah.huatu.com/z/pic/img/goin.gif"  style="float: left;margin-left: 21%;" alt="">' +
                textcopy +
                '</a>'
        }, 1000)
        setTimeout(function () {
            document.getElementById('tishi3').innerHTML = ''
        }, 6000)
    }
    event.preventDefault()
}

//url 链接  ，text 口令
function xcx2(url, text) {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        wx.miniProgram.getEnv(res => {
            if (res.miniprogram) {
                xcxforminiprom2(url, text)
                event.preventDefault()
            } else {
                //微信浏览器
                //广东，深圳都开启关注服务号
                if (window.location.href.indexOf('https://shenzhen.huatu.com/') != -1 || window.location.href.indexOf('https://gd.huatu.com/') != -1) {
                    redirect_href = url
                    loginOpen()
                    event.preventDefault()
                }
            }
        })
    } else {
        //参数1不为空
        if (url) {
            //判断是否为移动端
            redirect_href = url
            var ua1 = window.navigator.userAgent.toLowerCase()
            if (
                ua1.match(
                    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                )
            ) {
                //移动端
            } else {
                //pc端
                if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                    //江门不进行关注服务号号的操作
                } else {
                    //xcx2 3 如果是pc端，就不进行关注
                    if (url.indexOf('huatu') == -1 || url.indexOf('htjy.cc') != -1) {
                    } else {
                        if (localStorage.getItem('gdht_wxlogin_type')) {
                        } else {
                            loginOpen()
                            event.preventDefault()
                        }
                    }
                }
            }
        } else {
            //链接为空（参数一）
        }
    }
}

function xcxforminiprom2(url, text) {
    var alink = url
    if (text) {
        alink = text
    }
    var demoInput = document.getElementById('demoInput')
    demoInput.value = alink
    let input = document.querySelector('#demoInput')
    let data = input.select()
    document.execCommand('copy')
    textcopy = '口令'
    if (1) {
        //if (url.indexOf("go/u3/") != -1) {

        document.getElementById('thetitle').innerHTML = '口令获取'
        document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
        document.getElementById('tishi2').innerHTML = '微信关注回复口令获取链接'
        document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注回复口令快速打开！'
        document.getElementById('copyid').innerHTML = '点击复制口令'
        alertext = '口令复制成功'
    }
    //付款购买的显示企业号
    if (url.indexOf('htjy.cc') != -1 || url.indexOf('xd.huatu.com') != -1 || url.indexOf('xue.huatu.com') != -1 || url.indexOf('v.huatucom') != -1) {
        //$('.wxewm').attr('src', 'https://gd.huatu.com/zt/gdhttg/zxkfewm/gdwzqywxkf.png');
    }

    if (text) {
        document.getElementById('tishi2').innerHTML = '微信关注回复【' + text + '】获取！'
        document.getElementById('gzcopy').innerHTML = '识别二维码，回复【' + text + '】获取！！！'
        document.getElementById('copyid').innerHTML = '点击复制口令'
        textcopy = '口令'
        alertext = '口令复制成功'
    }

    document.getElementById('copyid').style.display = 'block'
    //服务号开通
    var locationurl = window.location.href
    locationurl = 'fdsfsfs'
    if (locationurl.indexOf('gd.huatu.com') != -1) {
        var code = getqrcode(url)
        $('.wxewm').attr('src', code)
        document.getElementById('thetitle').innerHTML = '扫码获取'
        document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
        document.getElementById('tishi2').innerHTML = ''
        document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
        document.getElementById('copyid').innerHTML = ''
        document.getElementById('copyid').style.display = 'none'
        textcopy = '-1'
        alertext = '复制成功'
    }

    $('.xn-xcx-head img').attr('src', 'https://gd.huatu.com/zt/theshow/file/images/download.png')
    $('.xn-xcx-box,.xn-xcx-bg').removeClass('hide')
    localStorage.setItem('showwindowurl', url)
    if (text) {
        localStorage.setItem('showwindowurl', text)
    }
    if (textcopy == '-1') {
    } else {
        setTimeout(function () {
            document.getElementById('tishi3').innerHTML =
                '<a style="margin-right: 27%;width: 80%;"><img src="https://ah.huatu.com/z/pic/img/goin.gif"  style="float: left;margin-left: 21%;" alt="">' +
                textcopy +
                '已复制成功！</a>'
        }, 1000)
        setTimeout(function () {
            document.getElementById('tishi3').innerHTML = ''
        }, 6000)
    }
    event.preventDefault()
}

//url 链接  ，text 口令 , pic 图片链接
function xcx3(url, text, pic) {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        wx.miniProgram.getEnv(res => {
            if (res.miniprogram) {
                xcxforminiprom3(url, text, pic)
                event.preventDefault()
            } else {
                //微信浏览器
                //广东，深圳都开启关注服务号
                if (window.location.href.indexOf('https://shenzhen.huatu.com/') != -1 || window.location.href.indexOf('https://gd.huatu.com/') != -1) {
                    redirect_href = url
                    loginOpen()
                    event.preventDefault()
                }
            }
        })
    } else {
        //参数1不为空
        if (url) {
            //判断是否为移动端
            redirect_href = url
            var ua1 = window.navigator.userAgent.toLowerCase()
            if (
                ua1.match(
                    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                )
            ) {
                //移动端
            } else {
                //pc端
                if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                    //江门不进行关注服务号号的操作
                } else {
                    //xcx2 3 如果是pc端，就不进行关注
                    if (url.indexOf('huatu') == -1 || url.indexOf('htjy.cc') != -1) {
                    } else {
                        if (localStorage.getItem('gdht_wxlogin_type')) {
                        } else {
                            loginOpen()
                            event.preventDefault()
                        }
                    }
                }
            }
        } else {
            //链接为空（参数一）
        }
    }
}

function xcxforminiprom3(url, text, pic) {
    var alink = url
    if (text) {
        alink = text
    }
    var demoInput = document.getElementById('demoInput')
    demoInput.value = alink
    let input = document.querySelector('#demoInput')
    let data = input.select()
    document.execCommand('copy')
    textcopy = '口令'
    if (1) {
        //if (url.indexOf("go/u3/") != -1) {

        document.getElementById('thetitle').innerHTML = '口令获取'
        document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
        document.getElementById('tishi2').innerHTML = '微信关注回复口令获取链接'
        document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注回复口令快速打开！'
        document.getElementById('copyid').innerHTML = '点击复制口令'
    }
    //付款购买的显示企业号
    if (url.indexOf('htjy.cc') != -1 || url.indexOf('xd.huatu.com') != -1 || url.indexOf('xue.huatu.com') != -1 || url.indexOf('v.huatucom') != -1) {
        //$('.wxewm').attr('src', 'https://gd.huatu.com/zt/gdhttg/zxkfewm/gdwzqywxkf.png');
    }

    if (pic) {
        $('.wxewm').attr('src', pic)
    }

    if (text) {
        document.getElementById('tishi2').innerHTML = '微信关注回复【' + text + '】获取！'
        document.getElementById('gzcopy').innerHTML = '识别二维码，回复【' + text + '】获取！！！'
        document.getElementById('copyid').innerHTML = '点击复制口令'
        textcopy = '口令'
        alertext = '口令复制成功'
    }

    document.getElementById('copyid').style.display = 'block'
    //服务号开通
    var locationurl = window.location.href
    locationurl = 'fdsfsfs'
    if (locationurl.indexOf('gd.huatu.com') != -1) {
        var code = getqrcode(url)
        $('.wxewm').attr('src', code)
        document.getElementById('thetitle').innerHTML = '扫码获取'
        document.getElementById('tishi').innerHTML = '小程序里不能直接打开相关链接'
        document.getElementById('tishi2').innerHTML = ''
        document.getElementById('gzcopy').innerHTML = '识别二维码，微信关注快速获取！'
        document.getElementById('copyid').innerHTML = ''
        document.getElementById('copyid').style.display = 'none'
        textcopy = '-1'
        alertext = '复制成功'
    }

    $('.xn-xcx-head img').attr('src', 'https://gd.huatu.com/zt/theshow/file/images/download.png')
    $('.xn-xcx-box,.xn-xcx-bg').removeClass('hide')
    localStorage.setItem('showwindowurl', url)
    if (text) {
        localStorage.setItem('showwindowurl', text)
    }
    if (textcopy == '-1') {
    } else {
        setTimeout(function () {
            document.getElementById('tishi3').innerHTML =
                '<a style="margin-right: 27%;width: 80%;"><img src="https://ah.huatu.com/z/pic/img/goin.gif"  style="float: left;margin-left: 21%;" alt="">' +
                textcopy +
                '已复制成功！</a>'
        }, 1000)
        setTimeout(function () {
            document.getElementById('tishi3').innerHTML = ''
        }, 6000)
    }
    event.preventDefault()
}

function getqrcode(redirect_href) {
    var picurl = ''
    var info = {}
    info.title = $('title').text()
    info.href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/')
    info.articleHref = location.href
    info.articleTitle = $('title').text()
    $.ajax({
        url: 'https://gd.huatu.com/zt/wxfwh/getQRCode/',
        type: 'post',
        async: false,
        data: {info: info},
        dataType: 'json',
        success: function (res) {
            if (res.code == 1) {
                //console.log(res)
                picurl = res.src
            } else {
            }
        },
    })
    return picurl
}

//深圳
function getqrcodesz(redirect_href) {
    var picurl = ''
    var info = {}
    info.title = $('title').text()
    info.href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/')
    info.articleHref = location.href
    info.articleTitle = $('title').text()
    $.ajax({
        url: 'https://gd.huatu.com/zt/wxfwh-sz/getQRCode/',
        type: 'post',
        async: false,
        data: {info: info},
        dataType: 'json',
        success: function (res) {
            if (res.code == 1) {
                //console.log(res)
                picurl = res.src
            } else {
            }
        },
    })
    return picurl
}

//云浮
function getqrcodeyf(redirect_href) {
    var picurl = ''
    var info = {}
    info.title = $('title').text()
    info.href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/')
    info.articleHref = location.href
    info.articleTitle = $('title').text()
    $.ajax({
        url: 'https://gd.huatu.com/zt/wxfwh-yf/getQRCode/',
        type: 'post',
        async: false,
        data: {info: info},
        dataType: 'json',
        success: function (res) {
            if (res.code == 1) {
                //console.log(res)
                picurl = res.src
            } else {
            }
        },
    })
    return picurl
}

//通用
function getqrcodety(redirect_href, posturl) {
    var picurl = ''
    var info = {}
    info.title = $('title').text()
    info.href = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/')
    info.articleHref = location.href
    info.articleTitle = $('title').text()
    $.ajax({
        url: posturl,
        type: 'post',
        async: false,
        data: {info: info},
        dataType: 'json',
        success: function (res) {
            if (res.code == 1) {
                //console.log(res)
                picurl = res.src
            } else {
            }
        },
    })
    return picurl
}

// --判断IP是否在广东省内，一个Ajax请求
var province = ''
if (1) {
    $.ajax({
        url: 'https://api.vore.top/api/IPdata',
        type: 'GET',
        async: false, //--设置为同步
        success: function (data) {
            // console.log(data)
            // console.log(data.ipdata.info1)
            // 在成功回调中处理返回的数据
            province = data.ipdata.info1
            return province
        },
        error: function (xhr, status, error) {
            console.error(status + ': ' + error)
            // 处理错误情况
        },
    })
}
// console.log(province)
var ua = navigator.userAgent.toLowerCase()
var locationurl = window.location.href
if (ua.match(/MicroMessenger/i) == 'micromessenger' && locationurl.indexOf('/zixun/') == -1) {
    wx.miniProgram.getEnv(res => {
        if (res.miniprogram) {
        } else if (province == '广东省') {
            // https://m.gd.huatu.com/ylws/2023/0601/4976439.html?tg=gd
            // https://gd.huatu.com/sydw/2023/0711/5168687.html?wximg=https://u3.huatu.com/uploads/gdht/all/2023/0711/1689046551.png&amp;poptype=1&amp;popkey=
            // https://m.gd.huatu.com/ylws/2023/0601/4976439.html
            if (window.location.href.indexOf('https://m.gd.huatu.com') != -1 || window.location.href.indexOf('https://gd.huatu.com') != -1) {
                if (locationurl.indexOf('?tg=') == -1 && locationurl.indexOf('&amp;poptype=1&amp;popkey=') == -1) {
                    //微信浏览器,插入弹窗
                    document.write('<link rel="stylesheet" type="text/css" href="https://gd.huatu.com/zt/css.css?v=1"></link>')
                    var title = '相关入口'
                    var textEle = '	<div class="xn-wx-bg hide">'
                    textEle += '	<div class="xn-wx-box">'
                    textEle += '		<div class="xn-wx-head">'
                    textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
                    textEle += '		<span id="wx_thetitle">' + title + '</span>'
                    textEle += '		<i title="关闭" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
                    textEle += '	</div>'
                    textEle += '	<ul class="xn-wx-ul">'
                    textEle += '		<li>'
                    textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
                    textEle += '			<p class="tishi" id="wx_tishi">小程序里不能打开外部链接</p>'
                    textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">微信关注回复口令即可进入！</p>'
                    textEle += '      <select id="mySelect" onchange="selectcode()"></select>'
                    textEle += '			<img class="wxewm" id="wxewm" src="">'
                    textEle += '			<p class="gzcopy" id="wx_gzcopy">识别二维码，回复口令快速进入！</p>'
                    textEle +=
                        '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">点击获取口令</button>'
                    textEle += '		</li>'
                    textEle +=
                        '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
                    textEle += '	</ul>'
                    textEle += '</div></div>'
                    $('body').append(textEle)
                } else {
                    // 域名是对的gd.huatu.com，但是带有特殊标签，所以显示默认弹窗
                    //微信浏览器,插入弹窗
                    document.write('<link rel="stylesheet" type="text/css" href="https://m.gd.huatu.com/zt/css.css?v=1"></link>')
                    var title = '相关入口'
                    var textEle = '	<div class="xn-wx-bg hide">'
                    textEle += '	<div class="xn-wx-box">'
                    textEle += '		<div class="xn-wx-head">'
                    textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
                    textEle += '		<span id="wx_thetitle">' + title + '</span>'
                    textEle += '		<i title="关闭" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
                    textEle += '	</div>'
                    textEle += '	<ul class="xn-wx-ul">'
                    textEle += '		<li>'
                    textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
                    textEle += '			<p class="tishi" id="wx_tishi">小程序里不能打开外部链接<w/p>'
                    textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">微信关注回复口令即可进入！</p>'
                    textEle += '			<img class="wxewm" id="wxewm" src="">'
                    textEle += '			<p class="gzcopy" id="wx_gzcopy">识别二维码，回复口令快速进入！</p>'
                    textEle +=
                        '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">点击获取口令</button>'
                    textEle += '		</li>'
                    textEle +=
                        '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
                    textEle += '	</ul>'
                    textEle += '</div></div>'
                    $('body').append(textEle)
                }
            } else {
                // --在广东省，但不是gd.huatu.com的域名，即地市的域名（默认弹窗）
                //微信浏览器,插入弹窗
                document.write('<link rel="stylesheet" type="text/css" href="https://m.gd.huatu.com/zt/css.css?v=1"></link>')
                var title = '相关入口'
                var textEle = '	<div class="xn-wx-bg hide">'
                textEle += '	<div class="xn-wx-box">'
                textEle += '		<div class="xn-wx-head">'
                textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
                textEle += '		<span id="wx_thetitle">' + title + '</span>'
                textEle += '		<i title="关闭" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
                textEle += '	</div>'
                textEle += '	<ul class="xn-wx-ul">'
                textEle += '		<li>'
                textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
                textEle += '			<p class="tishi" id="wx_tishi">小程序里不能打开外部链接<w/p>'
                textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">微信关注回复口令即可进入！</p>'
                textEle += '			<img class="wxewm" id="wxewm" src="">'
                textEle += '			<p class="gzcopy" id="wx_gzcopy">识别二维码，回复口令快速进入！</p>'
                textEle +=
                    '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">点击获取口令</button>'
                textEle += '		</li>'
                textEle +=
                    '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
                textEle += '	</ul>'
                textEle += '</div></div>'
                $('body').append(textEle)
            }
        } else {
            // --ip不在广东省（默认弹窗）
            //微信浏览器,插入弹窗
            document.write('<link rel="stylesheet" type="text/css" href="https://m.gd.huatu.com/zt/css.css?v=1"></link>')
            var title = '相关入口'
            var textEle = '	<div class="xn-wx-bg hide">'
            textEle += '	<div class="xn-wx-box">'
            textEle += '		<div class="xn-wx-head">'
            textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
            textEle += '		<span id="wx_thetitle">' + title + '</span>'
            textEle += '		<i title="关闭" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
            textEle += '	</div>'
            textEle += '	<ul class="xn-wx-ul">'
            textEle += '		<li>'
            textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
            textEle += '			<p class="tishi" id="wx_tishi">小程序里不能打开外部链接<w/p>'
            textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">微信关注回复口令即可进入！</p>'
            textEle += '			<img class="wxewm" id="wxewm" src="">'
            textEle += '			<p class="gzcopy" id="wx_gzcopy">识别二维码，回复口令快速进入！</p>'
            textEle +=
                '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">点击获取口令</button>'
            textEle += '		</li>'
            textEle +=
                '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
            textEle += '	</ul>'
            textEle += '</div></div>'
            $('body').append(textEle)
        }


    })

    // --如果满足条件插入特定的弹窗

    // --如果满足条件插入特定的弹窗end

    //  --测试网页
    if (window.location.href.indexOf('https://m.gd.huatu.com/sydw/2023/0713/5170510.html') != -1) {
        //微信浏览器,插入弹窗
        document.write('<link rel="stylesheet" type="text/css" href="https://gd.huatu.com/zt/css.css?v=1"></link>')
        var title = '相关入口'
        var textEle = '	<div class="xn-wx-bg hide">'
        textEle += '	<div class="xn-wx-box">'
        textEle += '		<div class="xn-wx-head">'
        textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
        textEle += '		<span id="wx_thetitle">' + title + '</span>'
        textEle += '		<i title="关闭" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
        textEle += '	</div>'
        textEle += '	<ul class="xn-wx-ul">'
        textEle += '		<li>'
        textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
        textEle += '			<p class="tishi" id="wx_tishi">小程序里不能打开外部链接</p>'
        textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">微信关注回复口令即可进入！</p>'
        textEle += '			<img class="wxewm" id="wxewm" src="">'
        textEle += '			<p class="gzcopy" id="wx_gzcopy">识别二维码，回复口令快速进入！</p>'
        textEle +=
            '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">点击获取口令</button>'
        textEle += '		</li>'
        textEle +=
            '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
        textEle += '	</ul>'
        textEle += '</div></div>'
        $('body').append(textEle)
    }
    //  --测试网页end
}

//微信端口弹窗
function wxtc(url) {
    if (0) {
        //if(window.location.href.indexOf('https://m.gd.huatu.com/sydw/2023/0412/4635774.html')!=-1){
        //alert('111');
        checkRedirect(url)
    } else {
        var flagzw = false
        var text = ''
        if (/.*[\u4e00-\u9fa5]+.*$/.test(url)) {
            flagzw = true
            text = url
        }
        var alink = url
        if (text) {
            alink = text
        }
        var demoInput = document.getElementById('demoInput')
        if (alink.indexOf('go/u3/') != -1 || alink.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || alink.indexOf('xls') != -1 || alink.indexOf('pdf') != -1 || alink.indexOf('doc') != -1 || alink.indexOf('xlsx') != -1) {
            alink = copytheu3all()
        } else {
            alink = '点击下方链接进入:\r\n\r\n' + alink

            if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
                alink += '\r\n\r\n' + thecopyforhtmlgg + '\r\n\r\n'
            }
        }

        if (typeof thecopyforhtml == 'string' && thecopyforhtml != '') {
            alink = thecopyforhtml
        }

        //判断微信浏览器地址是否带有弹窗类型标志poptype  1为用户回复获取（企业微信、客服二维码 2为关键词获取 3为扫码获取
        var poptype = 1
        var popkey = ''
        var locationurl = window.location.href
        if (locationurl.indexOf('poptype=') != -1) {
            if (getQueryString('amp;poptype') != '' || getQueryString('amp;poptype') != null) {
                poptype = getQueryString('amp;poptype')
            }
        } else {
            //判断文章里面是不是有控制弹窗的内容 wzpoptype wzpopkey wzwximg 等
            //<input id="wzpoptype" type="hidden" value="2" />
            //<input id="wzpopkey" type="hidden" value="xxx" />
            //<input id="wzwximg" type="hidden" value="https://file.huatu.com/class/202301/202301030047523326.png" />
            var wzpoptype = '1'
            if (document.getElementById('wzpoptype')) {
                wzpoptype = document.getElementById('wzpoptype').value
            }
        }

        if (poptype == 1) {
            document.getElementById('wxewm_next').style.display = 'block'
        } else {
            //判断文章里面是不是有控制弹窗的内容 wzpoptype wzpopkey wzwximg 等
            if (wzpoptype == 1) {
                document.getElementById('wxewm_next').style.display = 'block'
            }
        }

        if (poptype == 2) {
            popkey = decodeURI(getQueryString('amp;popkey'))
            alink = popkey
        } else {
            //判断文章里面是不是有控制弹窗的内容 wzpoptype wzpopkey wzwximg 等
            if (wzpoptype == 2) {
                popkey = document.getElementById('wzpopkey').value
                alink = popkey
                poptype = wzpoptype
            }
        }

        demoInput.value = alink
        let input = document.querySelector('#demoInput')
        let data = input.select()
        document.execCommand('copy')
        //alert('开始下载1');
        const textarea = document.createElement('textarea') // 直接构建textarea  「注意：这里为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
        textarea.value = alink // 设置内容    「注意： \r\n 是 换行 符号」
        document.body.appendChild(textarea) // 添加临时实例
        textarea.select() // 选择实例内容
        document.execCommand('Copy') // 执行复制
        document.body.removeChild(textarea) // 删除临时实例

        var tg = getQueryString('tg')

        // 查询ip的功能
        var city_list = [
            '广州',
            '深圳',
            '佛山',
            '东莞',
            '惠州',
            '珠海',
            '中山',
            '清远',
            '韶关',
            '汕头',
            '汕尾',
            '潮州',
            '揭阳',
            '梅州',
            '河源',
            '湛江',
            '肇庆',
            '江门',
            '阳江',
            '云浮',
            '茂名',
        ]
        var city_tg = ['gz', 'sz', 'fs', 'dg', 'hz', 'zh', 'zs', 'qy', 'sg', 'st', 'sw', 'cz', 'jy', 'mz', 'hy', 'zj', 'zq', 'jm', 'yj', 'yf', 'mm']

        var city = ''
        var city_code = ''
        // --如果条件满足，发起 AJAX 请求
        if (province == '广东省') {
            if (window.location.href.indexOf('https://m.gd.huatu.com') != -1 || window.location.href.indexOf('https://gd.huatu.com') != -1) {
                if (locationurl.indexOf('?tg=') == -1 && locationurl.indexOf('&amp;poptype=1&amp;popkey=') == -1) {
                    // --ajax请求查询ip
                    $.ajax({
                        url: 'https://api.vore.top/api/IPdata',
                        type: 'GET',
                        async: false,
                        success: function (data) {
                            // console.log(data)
                            // 在成功回调中处理返回的数据
                            for (var i = 0; i < city_list.length; i++) {
                                if (data.ipdata.info2.indexOf(city_list[i]) != -1) {
                                    city = data.ipdata.info2
                                    city_code = city_tg[i]
                                    return city_code
                                }
                            }
                        },
                        error: function (xhr, status, error) {
                            console.error(status + ': ' + error)
                            // 处理错误情况
                        },
                    })
                    var select = document.getElementById('mySelect')
                    select.innerHTML = '' // 清空选择框内容
                    var options = [
                        {value: 'gz', label: '广州客服老师'},
                        {value: 'sz', label: '深圳客服老师'},
                        {value: 'fs', label: '佛山客服老师'},
                        {value: 'dg', label: '东莞客服老师'},
                        {value: 'hz', label: '惠州客服老师'},
                        {value: 'zh', label: '珠海客服老师'},
                        {value: 'zs', label: '中山客服老师'},
                        {value: 'qy', label: '清远客服老师'},
                        {value: 'sg', label: '韶关客服老师'},
                        {value: 'st', label: '汕头客服老师'},
                        {value: 'sw', label: '汕尾客服老师'},
                        {value: 'cz', label: '潮州客服老师'},
                        {value: 'jy', label: '揭阳客服老师'},
                        {value: 'mz', label: '梅州客服老师'},
                        {value: 'hy', label: '河源客服老师'},
                        {value: 'zj', label: '湛江客服老师'},
                        {value: 'zq', label: '肇庆客服老师'},
                        {value: 'jm', label: '江门客服老师'},
                        {value: 'yj', label: '阳江客服老师'},
                        {value: 'yf', label: '云浮客服老师'},
                        {value: 'mm', label: '茂名客服老师'},
                    ]
                    for (var i = 0; i < options.length; i++) {
                        var option = document.createElement('option')
                        option.value = options[i].value
                        option.text = options[i].label
                        // --根据城市代码默认显示哪个老师名字
                        if (options[i].value === city_code) {
                            option.selected = true
                            // console.log(city_code)
                        }
                        select.appendChild(option)
                    }
                }
            }
        }

        // 查询ip的功能end

        //  --将具有 wx_copyid ID 的元素的 display 属性设置为 'block'，来显示该元素。
        document.getElementById('wx_copyid').style.display = 'block'

        var code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gd.png'
        if (locationurl.indexOf('maoming.huatu.com') != -1 || city_code == 'mm') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/mm.png'
        } else if (locationurl.indexOf('zhuhai.huatu.com') != -1 || city_code == 'zh') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zh.png'
        } else if (locationurl.indexOf('zhongshan.huatu.com') != -1 || city_code == 'zs') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zs.png'
        } else if (locationurl.indexOf('zhaoqing.huatu.com') != -1 || city_code == 'zq') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zq.png'
        } else if (locationurl.indexOf('zhanjiang.huatu.com') != -1 || city_code == 'zj') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zj.png'
        } else if (locationurl.indexOf('yunfu.huatu.com') != -1 || city_code == 'yf') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/yf.png'
        } else if (locationurl.indexOf('shenzhen.huatu.com') != -1 || city_code == 'sz') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sz.png'
        } else if (locationurl.indexOf('shaoguan.huatu.com') != -1 || city_code == 'sg') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sg.png'
        } else if (locationurl.indexOf('shanwei.huatu.com') != -1 || city_code == 'sw') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sw.png'
        } else if (locationurl.indexOf('shantou.huatu.com') != -1 || city_code == 'st') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/st.png'
        } else if (locationurl.indexOf('qingyuan.huatu.com') != -1 || city_code == 'qy') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/qy.png'
        } else if (locationurl.indexOf('meizhou.huatu.com') != -1 || city_code == 'mz') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/mz.png'
        } else if (locationurl.indexOf('jieyang.huatu.com') != -1 || city_code == 'jy') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/jy.png'
        } else if (locationurl.indexOf('jiangmen.huatu.com') != -1 || city_code == 'jm') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/jm.png'
        } else if (locationurl.indexOf('huizhou.huatu.com') != -1 || city_code == 'hz') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hz.png'
        } else if (locationurl.indexOf('heyuan.huatu.com') != -1 || city_code == 'hy') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hy.png'
        } else if (locationurl.indexOf('guangzhou.huatu.com') != -1 || city_code == 'gz') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gz.png'
        } else if (locationurl.indexOf('foshan.huatu.com') != -1 || city_code == 'fs') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/fs.png'
        } else if (locationurl.indexOf('dongguan.huatu.com') != -1 || city_code == 'dg') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/dg.png'
        } else if (locationurl.indexOf('chaozhou.huatu.com') != -1 || city_code == 'cz') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/cz.png'
        } else if (locationurl.indexOf('yangjiang.huatu.com') != -1 || city_code == 'yj') {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/yj.png'
        } else if (locationurl.indexOf('nanshan.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/ns.png'
        } else if (locationurl.indexOf('huidong.huatu.com') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hd.png'
        } else if (locationurl.indexOf('gd.huatu.com/sydw') != -1 || locationurl.indexOf('gd.huatu.com/zt/gdsydw') != -1) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gd.png'
        } else if (locationurl.indexOf('gd.huatu.com/zt/jszg') != -1) {
        } else if (locationurl.indexOf('gd.huatu.com/jsks') != -1) {
        } else if (locationurl.indexOf('gd.huatu.com/') != -1) {
            //在广东域名下，对标题进行判断
            if (window.location.href.indexOf('https://m.') != -1) {
                // 移动端
                if (document.getElementsByClassName('detail-tit')) {
                    if (document.getElementsByClassName('detail-tit').length > 0) {
                        if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/公务员|国考|省考|市考/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_公务员.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/学校|教育|教师|老师/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_教师.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/护士|医|卫|药/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_医疗.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/研究生|考研/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_考研.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/文职/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_军队文职.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/其他/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_事业单位.png'
                        }
                    }
                }
            } else {
                //电脑端
                if (document.getElementsByTagName('h1') && document.getElementsByTagName('h1').length > 0) {
                    if (document.getElementsByTagName('h1')[0].innerHTML.match(/公务员|国考|省考|市考/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_公务员.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/学校|教育|教师|老师/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_教师.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/护士|医|卫|药/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_医疗.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/研究生|考研/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_考研.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/文职/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_军队文职.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/其他/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/广东网站附件（广东)_事业单位.png'
                    }
                }
            }
        } else {
        }

        //就在这里
        //以防万一客服满，先准备一个切换二维码的功能，根据时间来进行分流
        if (checkAuditTime('07:00', '09:30')) {
            //code= 'https://gd.huatu.com/zt/js/images/wzall.png';
        }
        var dt = new Date()
        if (0) {
            //if(dt.getDay()==6||dt.getDay()==0){
            if (checkAuditTime('00:00', '10:00')) {
                code = 'https://gd.huatu.com/zt/js/images/wzall.png'
            }
            if (checkAuditTime('14:00', '17:00')) {
                code = 'https://gd.huatu.com/zt/js/images/wzall.png'
            }
        }

        ////////////////////////////////////////////////////////////////////////////

        if (tg) {
            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/' + tg + '.png'
        }

        textcopy = '口令已复制成功！'
        $('.wxewm_next').attr('src', 'https://gd.huatu.com/zt/js/images/gc.png')
        //微信端口的进行判断，如果是不是附件的，去服务号

        var locationurl = window.location.href
        if (0) {
            //if(url.indexOf("go/u3/") == -1 && (url.indexOf("https://u3.huatu.com/uploads/soft/") == -1)&&(locationurl.indexOf("wximg=") == -1)){
            //其他链接去服务号

            if (locationurl.indexOf('gd.huatu.com') != -1) {
                //var code = getqrcode(url);
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-wl/getQRCode/')
            }
            if (locationurl.indexOf('shenzhen.huatu.com') != -1) {
                var code = getqrcodesz(url)
            }
            if (locationurl.indexOf('yunfu.huatu.com') != -1) {
                var code = getqrcodeyf(url)
            }

            if (locationurl.indexOf('meizhou.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-mz/getQRCode/')
            }
            if (locationurl.indexOf('maoming.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-mm/getQRCode/')
            }
            if (locationurl.indexOf('chaozhou.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-cz/getQRCode/')
            }
            if (locationurl.indexOf('foshan.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-fs/getQRCode/')
            }
            if (locationurl.indexOf('dongguan.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-dg/getQRCode/')
            }
            if (locationurl.indexOf('zhongshan.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zs/getQRCode/')
            }
            if (locationurl.indexOf('jieyang.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-jy/getQRCode/')
            }
            if (locationurl.indexOf('guangzhou.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-gz/getQRCode/')
            }
            if (locationurl.indexOf('shantou.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-st/getQRCode/')
            }
            if (locationurl.indexOf('huizhou.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-hz/getQRCode/')
            }
            if (locationurl.indexOf('zhanjiang.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zj/getQRCode/')
            }
            if (locationurl.indexOf('yangjiang.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-yj/getQRCode/')
            }
            if (locationurl.indexOf('gd.huatu.com/jsks/') != -1) {
                //var code = getqrcodety(url,'https://gd.huatu.com/zt/wxfwh-xm-jsks/getQRCode/');
            }
            if (locationurl.indexOf('zhuhai.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zh/getQRCode/')
            }
            if (locationurl.indexOf('qingyuan.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-qy/getQRCode/')
            }
            if (locationurl.indexOf('jiangmen.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-jm/getQRCode/')
            }
            if (locationurl.indexOf('heyuan.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-hy/getQRCode/')
            }
            if (locationurl.indexOf('zhaoqing.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zq/getQRCode/')
            }
            if (locationurl.indexOf('shanwei.huatu.com') != -1) {
                var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-sw/getQRCode/')
            }

            //看看文章内容有没有设定的wxtcwzpic图片
            if (document.getElementById('wzpoptype') && document.getElementById('wzwximg').value != '') {
                //文章中设定有这个隐藏的控件且值不为空
                code = document.getElementById('wzwximg').value
            }

            //地址网址上的
            if (tg) {
                code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/' + tg + '.png'
            }

            if (locationurl.indexOf('wximg=') != -1) {
                if (getQueryString('wximg') != '' || getQueryString('wximg') != null) {
                    code = getQueryString('wximg')
                }
            }

            $('.wxewm').attr('src', code)
            $('.wxewm_next').attr('src', '')
            // document.getElementById('wx_thetitle').innerHTML = '扫码获取';
            // document.getElementById('wx_tishi').innerHTML = '小程序里不能直接打开相关链接';
            // document.getElementById('wx_tishi2').innerHTML = ''
            // document.getElementById('wx_gzcopy').innerHTML = '识别二维码，微信关注快速获取！';
            // document.getElementById('wx_copyid').innerHTML = '';
            // document.getElementById('wx_copyid').style.display = 'none';

            // alertext = '复制成功';

            // //document.getElementById("gzcopy").style.color = '#7a7979';
            // document.getElementById("gzcopy").style.fontSize = '12px';
            // //textcopy = "-1";
            // textcopy = "口令已复制成功！";
            textcopy = '-1'
            document.getElementById('wx_tishi3').innerHTML = ''
        }

        if (locationurl.indexOf('wximg=') != -1) {
            if (getQueryString('wximg') != '' || getQueryString('wximg') != null) {
                code = getQueryString('wximg')
            }
        } else {
            if (document.getElementById('wzwximg')) {
                code = document.getElementById('wzwximg').value
            }
        }
        $('.wxewm').attr('src', code)
        document.getElementById('wx_thetitle').innerHTML = '微信口令获取'
        document.getElementById('wx_tishi2').innerHTML = '扫码微信关注，发送口令快速获取！'
        document.getElementById('wx_gzcopy').innerHTML = '识别二维码，微信关注进入对话框！<br>对话框长按粘贴，发送口令快速打开！'
        document.getElementById('wx_copyid').innerHTML =
            '<img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">点击获取口令'
        document.getElementById('wx_tishi').innerHTML = ''

        document.getElementById('wx_gzcopy').style.fontSize = '12px'

        //textcopy = "-1";

        //开始根据poptype来设置弹窗内容显示
        if (poptype == 2) {
            //关键词获取（群二维码、客服号、企业微信、订阅号二维码）
            document.getElementById('wx_thetitle').innerHTML = '口令获取'
            document.getElementById('wx_tishi2').innerHTML = '微信关注回复【' + popkey + '】获取'
            document.getElementById('wx_gzcopy').innerHTML = '识别二维码，回复【' + popkey + '】获取'
            //document.getElementById('wx_copyid').innerHTML = '点击复制口令';
            document.getElementById('wx_copyid').innerHTML =
                '<img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">点击获取口令'
            textcopy = '口令已复制成功'
            $('.wxewm_next').attr('src', '')
        } else if (poptype == 3) {
            //扫码获取（资料包二维码、服务号带参二维码）
            document.getElementById('wx_thetitle').innerHTML = '微信扫码获取'
            document.getElementById('wx_tishi2').innerHTML = ''
            document.getElementById('wx_gzcopy').innerHTML = '识别二维码，微信扫码快速获取！'
            document.getElementById('wx_copyid').innerHTML = '点击复制内容'
            document.getElementById('wx_copyid').style.display = 'none'
            $('.wxewm_next').attr('src', '')
            textcopy = -1
        } else if (poptype == 1) {
            $('.wxewm_next').attr('src', 'https://gd.huatu.com/zt/js/images/gc.png')
        }

        alertext = '复制成功'
        //alert('开始下载2');
        $('.xn-wx-head img').attr('src', 'https://gd.huatu.com/zt/theshow/file/images/download.png')
        $('.xn-wx-box,.xn-wx-bg').removeClass('hide')
        localStorage.setItem('showwindowurl', url)
        if (text) {
            localStorage.setItem('showwindowurl', text)
        }
        if (textcopy == '-1') {
        } else {
            setTimeout(function () {
                document.getElementById('wx_tishi3').innerHTML =
                    '<a style="margin-right: 27%;width: 80%;"><img src="https://ah.huatu.com/z/pic/img/goin.gif"  style="float: left;margin-left: 21%;" alt="">' +
                    textcopy +
                    '</a>'
            }, 1000)
            setTimeout(function () {
                document.getElementById('wx_tishi3').innerHTML = ''
            }, 6000)
        }
        //alert('开始下载');
        event.preventDefault()
    }
}

// --选择老师显示对应二维码
function selectcode() {
    // var select = document.getElementById('mySelect')  //获取页面选择框
    var select = $('#mySelect')
    // var wxewm = document.getElementById('wxewm')  //获取二维码展示的那个标签
    var wxewm = $('#wxewm')
    // var selectedValue = select.value
    var selectedValue = select.val()

    // console.log(selectedValue) // 在控制台打印选择框的值
    // console.log(city)
    // console.log(code)
    // wxewm.src = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/' + select.value + '.png'
    wxewm.attr('src', 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/' + selectedValue + '.png') //--设置src的值
    var code = wxewm.attr('src') //--将src的值赋给code
    // console.log(code)
    $('.wxewm').attr('src', code) //--把页面中类名为wxewm的src的值设置为code的值！
}

function close_x_wx_box() {
    $('.xn-wx-box,.xn-wx-bg').addClass('hide')
}

function copytheu3all() {
    var re = /<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/g
    var str = ''
    if (document.getElementsByClassName('mainWords')[0] == undefined) {
        str = document.getElementsByClassName('art-wrap')[0].innerHTML
    } else {
        str = document.getElementsByClassName('mainWords')[0].innerHTML
    }
    var arr = []
    var arr1 = []
    var htmlstr = '点击下方链接下载\r\n\r\n'
    while (re.exec(str) != null) {
        if (RegExp.$1.indexOf('go/u3') != -1 || RegExp.$1.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || RegExp.$1.indexOf('xls') != -1 || RegExp.$1.indexOf('xlsx') != -1 || RegExp.$1.indexOf('pdf') != -1 || RegExp.$1.indexOf('doc') != -1) {
            htmlstr +=
                '>>>>' + RegExp.$2 + '\r\n' + RegExp.$1.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/') + '\r\n\r\n'
        }
        //如果是RegExp.$1那么匹配的就是href里的属性了!
    }

    var locationurl = window.location.href
    if (locationurl.indexOf('?') != -1) {
        locationurl = locationurl.substr(0, locationurl.indexOf('?')) //页面主地址（参数之前地址）
    }

    if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
        htmlstr += thecopyforhtmlgg + '\r\n'
    }

    htmlstr += '>>>原文链接：' + locationurl + '?wj=1'

    htmlstr = htmlstr.replace(/(<([^>]+)>)/gi, '')

    return htmlstr
}

function copythemessage1() {
    var alink = localStorage.getItem('showwindowurl')
    if (alink.indexOf('go/u3/') != -1 || alink.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || alink.indexOf('xls') != -1 || alink.indexOf('pdf') != -1 || alink.indexOf('doc') != -1 || alink.indexOf('xlsx') != -1) {
        alink = copytheu3all()
    } else {
        alink = '点击下方链接进入:\r\n\r\n' + alink

        if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
            alink += '\r\n\r\n' + thecopyforhtmlgg + '\r\n'
        }
    }

    if (typeof thecopyforhtml == 'string' && thecopyforhtml != '') {
        alink = thecopyforhtml
    }

    const textarea = document.createElement('textarea') // 直接构建textarea  「注意：这里为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」

    var locationurl = window.location.href
    if (locationurl.indexOf('poptype=') != -1) {
        if (getQueryString('amp;poptype') != '' || getQueryString('amp;poptype') != null) {
            poptype = getQueryString('amp;poptype')
            if (poptype == 2) {
                alink = decodeURI(getQueryString('amp;popkey'))
            }
        }
    } else {
        if (document.getElementById('wzpoptype') && document.getElementById('wzpoptype').value == 2) {
            if (document.getElementById('wzpopkey') && document.getElementById('wzpopkey').value != '') {
                alink = document.getElementById('wzpopkey').value
            }
        }
    }

    textarea.value = alink // 设置内容    「注意： \r\n 是 换行 符号」
    document.body.appendChild(textarea) // 添加临时实例
    textarea.select() // 选择实例内容
    document.execCommand('Copy') // 执行复制
    document.body.removeChild(textarea) // 删除临时实例
    alert('复制成功，请微信关注快速访问')
}

// 获取地址参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

//============================================================================================
//手机端浏览器下载附件跳转到微信小程序内容

//获取
function checkRedirect(url) {
    //alert('将为您前往微信操作');

    let alink = url
    let ifu3 = true
    if (alink.indexOf('go/u3/') != -1 || alink.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || alink.indexOf('xls') != -1 || alink.indexOf('pdf') != -1 || alink.indexOf('doc') != -1 || alink.indexOf('xlsx') != -1) {
        alink = copytheu3all()
    } else {
        //非附件类的，统一默认为入口类
        ifu3 = false
    }

    let id = '1' //判断展示的二维码类型
    id = window.location.href
    // 取值
    let onhref = window.location.href
    let phoneurl = ''
    phoneurl = getQueryString('phoneurl')
    // if (!scheme) {
    var timerid = Date.parse(new Date())
    //id = timerid;
    if (onhref.indexOf('wximg=') != -1) {
        if (getQueryString('wximg') != '' && getQueryString('wximg') != null) {
            phoneurl = getQueryString('wximg')
        }
    }

    if (onhref.indexOf('?') != -1) {
        onhref = onhref.split('?')[0]
    }
    //alink =  alink + '<<<<<<' + document.title;
    var thecopyforhtmlguanggao = ''
    if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
        thecopyforhtmlguanggao = thecopyforhtmlgg + '\r\n\r\n'
    }

    for (var i = 0; i < document.getElementsByTagName('a').length; i++) {
        if (document.getElementsByTagName('a')[i].href == url) {
            //alert(document.getElementsByTagName("a")[i].innerHTML);
            if (!ifu3) {
                //非附件类的，只有一个入口链接
                var htitle1 = ''
                if (document.getElementsByTagName('h1').length > 0) {
                    htitle1 = document.getElementsByTagName('h1')[0].innerHTML
                }
                if (document.getElementsByTagName('a')[i].innerHTML.indexOf('img') != -1) {
                    alink = '点击下方链接进入:\r\n\r\n' + htitle1 + '\r\n' + alink + '\r\n\r\n' + thecopyforhtmlguanggao + '>>>原文链接：' + onhref + '?wj=1'
                    alink = alink + '<<<<<<' + htitle1
                } else {
                    alink =
                        '点击下方链接进入:\r\n\r\n' +
                        document.getElementsByTagName('a')[i].innerHTML.replace(/(<([^>]+)>)/gi, '') +
                        '\r\n' +
                        alink +
                        '\r\n\r\n' +
                        thecopyforhtmlguanggao +
                        '>>>原文链接：' +
                        onhref +
                        '?wj=1'
                    alink = alink + '<<<<<<' + document.getElementsByTagName('a')[i].innerHTML.replace(/(<([^>]+)>)/gi, '')
                }

                if (typeof thecopyforhtml == 'string' && thecopyforhtml != '') {
                    alink = thecopyforhtml + '<<<<<<' + htitle1
                }

                break
            } else {
                alink = alink + '<<<<<<' + document.getElementsByTagName('a')[i].innerHTML.replace(/(<([^>]+)>)/gi, '')
            }
        }
    }

    //获取标题
    //对标题进行判断
    var htitle = ''
    if (window.location.href.indexOf('https://m.') != -1) {
        //移动端
        if (document.getElementsByClassName('detail-tit')) {
            if (document.getElementsByClassName('detail-tit').length > 0) {
                htitle = document.getElementsByClassName('detail-tit')[0].innerHTML
            }
        }
    }

    //判断地址是否带有tg参数
    var tg = getQueryString('tg')
    if (!tg) {
        if (document.getElementById('wzgypic') && document.getElementById('wzgypic').value != '') {
            tg = document.getElementById('wzgypic').value
        }
    }

    var dt = new Date()
    if (0) {
        //if(dt.getDay()==6||dt.getDay()==0){
        if (checkAuditTime('07:00', '10:00')) {
            tg = 'https://u3.huatu.com/uploads/allimg/230519/660725-2305191106094024685216.png'
        }
        if (checkAuditTime('14:00', '16:00')) {
            tg = 'https://u3.huatu.com/uploads/allimg/230519/660725-2305191106094024685216.png'
        }
    }

    //判断是不是微信触发的
    var wxstr = '-1'
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        //alert('122');
        wx.miniProgram.getEnv(res => {
            if (res.miniprogram) {
            } else {
                wxstr = '1'
                //alert('44');
            }
        })
    }

    $.ajax({
        url: 'https://gd.huatu.com/zt/api/jsgetscheme/getschemeforphone.php',
        type: 'post',
        async: false,
        data: {
            aid: id,
            url: phoneurl,
            act: 'getschemeforphone',
            alink: alink,
            timerid: timerid,
            htitle: htitle,
            tg: tg,
            wx: wxstr
        },
        dataType: 'json',
        success: function (data) {
            if (data.code === 200) {
                //window.location.href = 'https://gd.huatu.com/zt/js/fromphone-html.php?timerid='+timerid;
                window.location.href = 'weixin://dl/business/?t=' + data.scheme
            }
        },
    })
}

// 方法
function checkAuditTime(startTime, endTime) {
    // 获取当前时间
    const date = new Date()
    // 获取当前时间的年月日
    const dataStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `

    // 获取开始时间、结束时间、现在时间的时间戳
    let startDate = new Date(dataStr + startTime).getTime()
    let endDate = new Date(dataStr + endTime).getTime()
    let nowDate = date.getTime()

    const s = startDate > endDate // 判断开始时间否大于结束时间

    if (s) [startDate, endDate] = [endDate, startDate] // 若开始时间否大于结束时间则交换值

    // 判断现在的时间是否在开始时间和结束时间之间，若s为true则结果取反
    if (nowDate > startDate && nowDate < endDate) {
        return s ? false : true
    } else {
        return s ? true : false
    }
}

//============================================================================================
//手机端浏览器下载附件跳转到微信小程序内容结束
