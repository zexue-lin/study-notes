var redirect_href = ''

//url ���ӻ��߿���
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
                        //alert('��ʼ��֤');
                        redirect_href = url
                        loginOpen()
                        event.preventDefault()
                    }
                } else {
                    //΢�������
                    //�㶫�����ڶ�������ע�����
                    //if(0){
                    //if((window.location.href.indexOf("https://shenzhen.huatu.com/") != -1)||(window.location.href.indexOf("https://gd.huatu.com/") != -1)){
                    //΢�Ŷ��ж���ת�����ӻ��߸��������gov����ЩС�����ӣ������ֻ���
                    //alert('��ʼ������');
                    //alert('��ͼ��������������1');
                    if (url.indexOf('go/u3/') != -1 || url.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || url.indexOf('xls') != -1 || url.indexOf('pdf') != -1 || url.indexOf('doc') != -1 || url.indexOf('xlsx') != -1) {
                        //alert('��ͼ��������������2');
                        //��ַ����wj=1����ֱ�����ظ���
                        var wj = getQueryString('wj')
                        if (wj == '1') {
                        } else {
                            wxtc(url)
                            event.preventDefault()
                        }

                        // if(localStorage.getItem('gdht_wxlogin_type')){
                        // 	//alert('��ʼ��֤');
                        // 	wxtc(url);
                        // 	// redirect_href = url;
                        // 	// loginOpen();
                        // 	event.preventDefault();
                        // }
                    }

                    //��ʼ�ж�������ڵ����� ΢�������������� �����Զ�������������
                    if (url.indexOf('huatu.com') == -1 && url.indexOf('https://htjy') == -1) {
                        //�ж�΢���������ַ�Ƿ���е������ͱ�־poptype  1Ϊ�û��ظ���ȡ����ҵ΢�š��ͷ���ά�� 2Ϊ�ؼ��ʻ�ȡ 3Ϊɨ���ȡ
                        var poptype = 1
                        var locationurl = window.location.href
                        //���в�����ֱ�ӵ���
                        if (locationurl.indexOf('amp;poptype=') != -1) {
                            wxtc(url)
                        } else {
                            //�ж���������û���Զ�����Ƶ��������� wzpoptype wzpopkey wzwximg ��  ���ߵ�ַ�ϴ���tg=
                            if (document.getElementById('wzpoptype') || locationurl.indexOf('tg=') != -1) {
                                wxtc(url)
                            }
                        }
                        //�޲��������ֱ����ת
                    }
                    //���Է��ط�
                }
            }
        })
    } else {
        //����1��Ϊ��
        var flagzw = false
        if (/.*[\u4e00-\u9fa5]+.*$/.test(url)) {
            flagzw = true
        }
        if (url && !flagzw) {
            if (url.indexOf('go/u3/') != -1 || url.indexOf('https://u3.huatu.com/uploads/soft/') != -1) {
                //�ж��Ƿ�Ϊ�ƶ���
                redirect_href = url
                var ua1 = window.navigator.userAgent.toLowerCase()
                if (
                    ua1.match(
                        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                    )
                ) {
                    //�ƶ���

                    //if(1){
                    if (localStorage.getItem('gdht_wxlogin_type')) {
                        //loginOpen();
                        //event.preventDefault();
                    } else {
                        var xcxfunction = $('#xcxfunction').val()
                        if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                            //ר������û����true�Ͳ�����
                        } else {
                            if (window.location.href.indexOf('isxcx=false') != -1) {
                                //���Ӵ���ĳЩ�����Ĳ�����
                            } else {
                                if (ua1.match(/(iPhone|iPod|iPad);?/i)) {
                                    //����iPhone�豸
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
                    //pc��
                    if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                        //���Ų����й�ע����źŵĲ���
                    } else {
                        if (localStorage.getItem('gdht_wxlogin_type')) {
                        } else {
                            var xcxfunction = $('#xcxfunction').val()
                            if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                                //ר������û����true�Ͳ�����
                            } else {
                                if (window.location.href.indexOf('isxcx=false') != -1) {
                                    //���Ӵ���ĳЩ�����Ĳ�����
                                } else {
                                    loginOpen()
                                    event.preventDefault()
                                }
                            }
                        }
                    }
                }
            }

            //��ʼ�ж�������ڵ����ӽ����ֻ��ŵ��ռ���������u3����pc/�ƶ��������
            if (url.indexOf('huatu.com') == -1 && url.indexOf('https://htjy') == -1) {
                //�ж��Ƿ�Ϊ�ƶ���
                redirect_href = url
                var ua1 = window.navigator.userAgent.toLowerCase()
                if (
                    ua1.match(
                        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                    )
                ) {
                    //�ƶ���
                    if (localStorage.getItem('gdht_wxlogin_type')) {
                    } else {
                        var xcxfunction = $('#xcxfunction').val()
                        if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                            //ר������û����true�Ͳ�����
                        } else {
                            if (window.location.href.indexOf('isxcx=false') != -1) {
                                //���Ӵ���ĳЩ�����Ĳ�����
                            } else {
                                if (ua1.match(/(iPhone|iPod|iPad);?/i)) {
                                    //����iPhone�豸
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
                    //pc��
                    if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                        //���Ų����й�ע����źŵĲ���
                    } else {
                        if (localStorage.getItem('gdht_wxlogin_type')) {
                        } else {
                            var xcxfunction = $('#xcxfunction').val()
                            if (xcxfunction != 'true' && window.location.href.indexOf('/zt/') != -1) {
                                //ר������û����true�Ͳ�����
                            } else {
                                if (window.location.href.indexOf('isxcx=false') != -1) {
                                    //���Ӵ���ĳЩ�����Ĳ�����
                                } else {
                                    //pc�˲���������
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
            //����Ϊ�գ�����һ��
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

    const textarea = document.createElement('textarea') // ֱ�ӹ���textarea  ��ע�⣺����Ϊ��ʵ�ֻ��У���Ҫ����textarea�������input�Ļ���ʵ�ֲ��˻��С���
    textarea.value = alink // ��������    ��ע�⣺ \r\n �� ���� ���š�
    document.body.appendChild(textarea) // �����ʱʵ��
    textarea.select() // ѡ��ʵ������
    document.execCommand('Copy') // ִ�и���
    document.body.removeChild(textarea) // ɾ����ʱʵ��

    //�ǻ�ͼ��ֱ����ʾ�������ݳɹ�
    if (url.indexOf('huatu.com') == -1) {
        alert('���Ӹ��Ƴɹ����뵽�������')
        return
    }

    if (1) {
        //if (url.indexOf("go/u3/") != -1) {
        document.getElementById('thetitle').innerHTML = '���ӻ�ȡ'
        document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
        document.getElementById('tishi2').innerHTML = 'ֱ�Ӹ������ӵ�������򿪣�'
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�ų���ճ�����ݿ��ٴ򿪣�'
        document.getElementById('copyid').innerHTML = '�����������'
        alertext = '���Ӹ��Ƴɹ�'
    }
    //��������ʾ��ҵ��
    if (url.indexOf('htjy.cc') != -1 || url.indexOf('xd.huatu.com') != -1 || url.indexOf('xue.huatu.com') != -1 || url.indexOf('v.huatucom') != -1) {
        //$('.wxewm').attr('src', 'https://gd.huatu.com/zt/gdhttg/zxkfewm/gdwzqywxkf.png');
    }

    textcopy = '����'

    if (text) {
        document.getElementById('thetitle').innerHTML = '�����ȡ'
        document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
        document.getElementById('tishi2').innerHTML = '΢�Ź�ע�ظ���' + text + '����ȡ��'
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬�ظ���' + text + '����ȡ������'
        document.getElementById('copyid').innerHTML = '������ƿ���'
        textcopy = '����'
        alertext = '����Ƴɹ�'
    }

    document.getElementById('copyid').style.display = 'block'
    //����ſ�ͨ
    var locationurl = window.location.href

    var tg = getQueryString('tg')

    //locationurl = 'fdsfsfs';
    //ע�ͣ��޸�Ϊȥ��ҵ΢��
    if (0) {
        //if(url.indexOf("go/u3/") == -1 && (url.indexOf("https://u3.huatu.com/uploads/soft/") == -1)){
        //��������ȥ�����

        if (locationurl.indexOf('gd.huatu.com') != -1) {
            //var code = getqrcode(url);
            //var code = getqrcode(url);
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-wl/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }
        if (locationurl.indexOf('shenzhen.huatu.com') != -1) {
            var code = getqrcodesz(url)
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }
        if (locationurl.indexOf('yunfu.huatu.com') != -1) {
            var code = getqrcodeyf(url)
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('meizhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-mz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('maoming.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-mm/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('chaozhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-cz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('foshan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-fs/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('dongguan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-dg/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('zhongshan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zs/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('jieyang.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-jy/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('guangzhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-gz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('shantou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-st/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('huizhou.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-hz/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('zhanjiang.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zj/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('yangjiang.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-yj/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('gd.huatu.com/jsks/') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-xm-jsks/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('zhuhai.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zh/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('qingyuan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-qy/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('jiangmen.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-jm/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('heyuan.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-hy/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('zhaoqing.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-zq/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        if (locationurl.indexOf('shanwei.huatu.com') != -1) {
            var code = getqrcodety(url, 'https://gd.huatu.com/zt/wxfwh-sw/getQRCode/')
            $('.wxewm').attr('src', code)
            document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
            document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
            document.getElementById('tishi2').innerHTML = ''
            document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
            document.getElementById('copyid').innerHTML = ''
            document.getElementById('copyid').style.display = 'none'
            textcopy = '-1'
            alertext = '���Ƴɹ�'
        }

        //document.getElementById("gzcopy").style.color = '#7a7979';
        //document.getElementById("gzcopy").style.color = '#00b596';
        document.getElementById('gzcopy').style.fontSize = '12px'
        $('.wxewm_next').attr('src', '')
        document.getElementById('tishi3').innerHTML = ''
        //textcopy = "-1";
        //textcopy = "�����Ѹ��Ƴɹ���";
    } else {
        //��������ȥ��ҵ΢��
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
        document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
        document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
        //document.getElementById('tishi2').innerHTML = '΢�Ź�ע�ظ����ݿ��ٷ���';
        document.getElementById('tishi2').innerHTML = 'ɨ��΢�Ź�ע�����Ϳ�����ٻ�ȡ��'
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע����Ի���' + '<br>�Ի��򳤰�ճ�����ظ����ݿ��ٴ�!' //+'��ֱ�Ӹ������ӵ��������'
        //document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������';
        //document.getElementById('tishi2').innerHTML = '΢�Ź�ע�ظ�������ٷ���';
        //document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע�ظ�������ٴ򿪣�';
        document.getElementById('copyid').innerHTML = '�����������'
        //document.getElementById("gzcopy").style.color = '#7a7979';
        //document.getElementById("gzcopy").style.color = '#00b596';
        document.getElementById('gzcopy').style.fontSize = '12px'

        //textcopy = "-1";
        textcopy = '�����Ѹ��Ƴɹ���'
        alertext = '���Ƴɹ�'
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

//url ����  ��text ����
function xcx2(url, text) {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        wx.miniProgram.getEnv(res => {
            if (res.miniprogram) {
                xcxforminiprom2(url, text)
                event.preventDefault()
            } else {
                //΢�������
                //�㶫�����ڶ�������ע�����
                if (window.location.href.indexOf('https://shenzhen.huatu.com/') != -1 || window.location.href.indexOf('https://gd.huatu.com/') != -1) {
                    redirect_href = url
                    loginOpen()
                    event.preventDefault()
                }
            }
        })
    } else {
        //����1��Ϊ��
        if (url) {
            //�ж��Ƿ�Ϊ�ƶ���
            redirect_href = url
            var ua1 = window.navigator.userAgent.toLowerCase()
            if (
                ua1.match(
                    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                )
            ) {
                //�ƶ���
            } else {
                //pc��
                if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                    //���Ų����й�ע����źŵĲ���
                } else {
                    //xcx2 3 �����pc�ˣ��Ͳ����й�ע
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
            //����Ϊ�գ�����һ��
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
    textcopy = '����'
    if (1) {
        //if (url.indexOf("go/u3/") != -1) {

        document.getElementById('thetitle').innerHTML = '�����ȡ'
        document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
        document.getElementById('tishi2').innerHTML = '΢�Ź�ע�ظ������ȡ����'
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע�ظ�������ٴ򿪣�'
        document.getElementById('copyid').innerHTML = '������ƿ���'
        alertext = '����Ƴɹ�'
    }
    //��������ʾ��ҵ��
    if (url.indexOf('htjy.cc') != -1 || url.indexOf('xd.huatu.com') != -1 || url.indexOf('xue.huatu.com') != -1 || url.indexOf('v.huatucom') != -1) {
        //$('.wxewm').attr('src', 'https://gd.huatu.com/zt/gdhttg/zxkfewm/gdwzqywxkf.png');
    }

    if (text) {
        document.getElementById('tishi2').innerHTML = '΢�Ź�ע�ظ���' + text + '����ȡ��'
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬�ظ���' + text + '����ȡ������'
        document.getElementById('copyid').innerHTML = '������ƿ���'
        textcopy = '����'
        alertext = '����Ƴɹ�'
    }

    document.getElementById('copyid').style.display = 'block'
    //����ſ�ͨ
    var locationurl = window.location.href
    locationurl = 'fdsfsfs'
    if (locationurl.indexOf('gd.huatu.com') != -1) {
        var code = getqrcode(url)
        $('.wxewm').attr('src', code)
        document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
        document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
        document.getElementById('tishi2').innerHTML = ''
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
        document.getElementById('copyid').innerHTML = ''
        document.getElementById('copyid').style.display = 'none'
        textcopy = '-1'
        alertext = '���Ƴɹ�'
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
                '�Ѹ��Ƴɹ���</a>'
        }, 1000)
        setTimeout(function () {
            document.getElementById('tishi3').innerHTML = ''
        }, 6000)
    }
    event.preventDefault()
}

//url ����  ��text ���� , pic ͼƬ����
function xcx3(url, text, pic) {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        wx.miniProgram.getEnv(res => {
            if (res.miniprogram) {
                xcxforminiprom3(url, text, pic)
                event.preventDefault()
            } else {
                //΢�������
                //�㶫�����ڶ�������ע�����
                if (window.location.href.indexOf('https://shenzhen.huatu.com/') != -1 || window.location.href.indexOf('https://gd.huatu.com/') != -1) {
                    redirect_href = url
                    loginOpen()
                    event.preventDefault()
                }
            }
        })
    } else {
        //����1��Ϊ��
        if (url) {
            //�ж��Ƿ�Ϊ�ƶ���
            redirect_href = url
            var ua1 = window.navigator.userAgent.toLowerCase()
            if (
                ua1.match(
                    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                )
            ) {
                //�ƶ���
            } else {
                //pc��
                if (window.location.href.indexOf('https://jiangmen.huatu.com/') != -1) {
                    //���Ų����й�ע����źŵĲ���
                } else {
                    //xcx2 3 �����pc�ˣ��Ͳ����й�ע
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
            //����Ϊ�գ�����һ��
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
    textcopy = '����'
    if (1) {
        //if (url.indexOf("go/u3/") != -1) {

        document.getElementById('thetitle').innerHTML = '�����ȡ'
        document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
        document.getElementById('tishi2').innerHTML = '΢�Ź�ע�ظ������ȡ����'
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע�ظ�������ٴ򿪣�'
        document.getElementById('copyid').innerHTML = '������ƿ���'
    }
    //��������ʾ��ҵ��
    if (url.indexOf('htjy.cc') != -1 || url.indexOf('xd.huatu.com') != -1 || url.indexOf('xue.huatu.com') != -1 || url.indexOf('v.huatucom') != -1) {
        //$('.wxewm').attr('src', 'https://gd.huatu.com/zt/gdhttg/zxkfewm/gdwzqywxkf.png');
    }

    if (pic) {
        $('.wxewm').attr('src', pic)
    }

    if (text) {
        document.getElementById('tishi2').innerHTML = '΢�Ź�ע�ظ���' + text + '����ȡ��'
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬�ظ���' + text + '����ȡ������'
        document.getElementById('copyid').innerHTML = '������ƿ���'
        textcopy = '����'
        alertext = '����Ƴɹ�'
    }

    document.getElementById('copyid').style.display = 'block'
    //����ſ�ͨ
    var locationurl = window.location.href
    locationurl = 'fdsfsfs'
    if (locationurl.indexOf('gd.huatu.com') != -1) {
        var code = getqrcode(url)
        $('.wxewm').attr('src', code)
        document.getElementById('thetitle').innerHTML = 'ɨ���ȡ'
        document.getElementById('tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������'
        document.getElementById('tishi2').innerHTML = ''
        document.getElementById('gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��'
        document.getElementById('copyid').innerHTML = ''
        document.getElementById('copyid').style.display = 'none'
        textcopy = '-1'
        alertext = '���Ƴɹ�'
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
                '�Ѹ��Ƴɹ���</a>'
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

//����
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

//�Ƹ�
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

//ͨ��
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

// --�ж�IP�Ƿ��ڹ㶫ʡ�ڣ�һ��Ajax����
var province = ''
if (1) {
    $.ajax({
        url: 'https://api.vore.top/api/IPdata',
        type: 'GET',
        async: false, //--����Ϊͬ��
        success: function (data) {
            // console.log(data)
            // console.log(data.ipdata.info1)
            // �ڳɹ��ص��д����ص�����
            province = data.ipdata.info1
            return province
        },
        error: function (xhr, status, error) {
            console.error(status + ': ' + error)
            // ����������
        },
    })
}
// console.log(province)
var ua = navigator.userAgent.toLowerCase()
var locationurl = window.location.href
if (ua.match(/MicroMessenger/i) == 'micromessenger' && locationurl.indexOf('/zixun/') == -1) {
    wx.miniProgram.getEnv(res => {
        if (res.miniprogram) {
        } else if (province == '�㶫ʡ') {
            // https://m.gd.huatu.com/ylws/2023/0601/4976439.html?tg=gd
            // https://gd.huatu.com/sydw/2023/0711/5168687.html?wximg=https://u3.huatu.com/uploads/gdht/all/2023/0711/1689046551.png&amp;poptype=1&amp;popkey=
            // https://m.gd.huatu.com/ylws/2023/0601/4976439.html
            if (window.location.href.indexOf('https://m.gd.huatu.com') != -1 || window.location.href.indexOf('https://gd.huatu.com') != -1) {
                if (locationurl.indexOf('?tg=') == -1 && locationurl.indexOf('&amp;poptype=1&amp;popkey=') == -1) {
                    //΢�������,���뵯��
                    document.write('<link rel="stylesheet" type="text/css" href="https://gd.huatu.com/zt/css.css?v=1"></link>')
                    var title = '������'
                    var textEle = '	<div class="xn-wx-bg hide">'
                    textEle += '	<div class="xn-wx-box">'
                    textEle += '		<div class="xn-wx-head">'
                    textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
                    textEle += '		<span id="wx_thetitle">' + title + '</span>'
                    textEle += '		<i title="�ر�" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
                    textEle += '	</div>'
                    textEle += '	<ul class="xn-wx-ul">'
                    textEle += '		<li>'
                    textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
                    textEle += '			<p class="tishi" id="wx_tishi">С�����ﲻ�ܴ��ⲿ����</p>'
                    textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">΢�Ź�ע�ظ�����ɽ��룡</p>'
                    textEle += '      <select id="mySelect" onchange="selectcode()"></select>'
                    textEle += '			<img class="wxewm" id="wxewm" src="">'
                    textEle += '			<p class="gzcopy" id="wx_gzcopy">ʶ���ά�룬�ظ�������ٽ��룡</p>'
                    textEle +=
                        '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">�����ȡ����</button>'
                    textEle += '		</li>'
                    textEle +=
                        '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
                    textEle += '	</ul>'
                    textEle += '</div></div>'
                    $('body').append(textEle)
                } else {
                    // �����ǶԵ�gd.huatu.com�����Ǵ��������ǩ��������ʾĬ�ϵ���
                    //΢�������,���뵯��
                    document.write('<link rel="stylesheet" type="text/css" href="https://m.gd.huatu.com/zt/css.css?v=1"></link>')
                    var title = '������'
                    var textEle = '	<div class="xn-wx-bg hide">'
                    textEle += '	<div class="xn-wx-box">'
                    textEle += '		<div class="xn-wx-head">'
                    textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
                    textEle += '		<span id="wx_thetitle">' + title + '</span>'
                    textEle += '		<i title="�ر�" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
                    textEle += '	</div>'
                    textEle += '	<ul class="xn-wx-ul">'
                    textEle += '		<li>'
                    textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
                    textEle += '			<p class="tishi" id="wx_tishi">С�����ﲻ�ܴ��ⲿ����<w/p>'
                    textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">΢�Ź�ע�ظ�����ɽ��룡</p>'
                    textEle += '			<img class="wxewm" id="wxewm" src="">'
                    textEle += '			<p class="gzcopy" id="wx_gzcopy">ʶ���ά�룬�ظ�������ٽ��룡</p>'
                    textEle +=
                        '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">�����ȡ����</button>'
                    textEle += '		</li>'
                    textEle +=
                        '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
                    textEle += '	</ul>'
                    textEle += '</div></div>'
                    $('body').append(textEle)
                }
            } else {
                // --�ڹ㶫ʡ��������gd.huatu.com�������������е�������Ĭ�ϵ�����
                //΢�������,���뵯��
                document.write('<link rel="stylesheet" type="text/css" href="https://m.gd.huatu.com/zt/css.css?v=1"></link>')
                var title = '������'
                var textEle = '	<div class="xn-wx-bg hide">'
                textEle += '	<div class="xn-wx-box">'
                textEle += '		<div class="xn-wx-head">'
                textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
                textEle += '		<span id="wx_thetitle">' + title + '</span>'
                textEle += '		<i title="�ر�" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
                textEle += '	</div>'
                textEle += '	<ul class="xn-wx-ul">'
                textEle += '		<li>'
                textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
                textEle += '			<p class="tishi" id="wx_tishi">С�����ﲻ�ܴ��ⲿ����<w/p>'
                textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">΢�Ź�ע�ظ�����ɽ��룡</p>'
                textEle += '			<img class="wxewm" id="wxewm" src="">'
                textEle += '			<p class="gzcopy" id="wx_gzcopy">ʶ���ά�룬�ظ�������ٽ��룡</p>'
                textEle +=
                    '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">�����ȡ����</button>'
                textEle += '		</li>'
                textEle +=
                    '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
                textEle += '	</ul>'
                textEle += '</div></div>'
                $('body').append(textEle)
            }
        } else {
            // --ip���ڹ㶫ʡ��Ĭ�ϵ�����
            //΢�������,���뵯��
            document.write('<link rel="stylesheet" type="text/css" href="https://m.gd.huatu.com/zt/css.css?v=1"></link>')
            var title = '������'
            var textEle = '	<div class="xn-wx-bg hide">'
            textEle += '	<div class="xn-wx-box">'
            textEle += '		<div class="xn-wx-head">'
            textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
            textEle += '		<span id="wx_thetitle">' + title + '</span>'
            textEle += '		<i title="�ر�" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
            textEle += '	</div>'
            textEle += '	<ul class="xn-wx-ul">'
            textEle += '		<li>'
            textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
            textEle += '			<p class="tishi" id="wx_tishi">С�����ﲻ�ܴ��ⲿ����<w/p>'
            textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">΢�Ź�ע�ظ�����ɽ��룡</p>'
            textEle += '			<img class="wxewm" id="wxewm" src="">'
            textEle += '			<p class="gzcopy" id="wx_gzcopy">ʶ���ά�룬�ظ�������ٽ��룡</p>'
            textEle +=
                '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">�����ȡ����</button>'
            textEle += '		</li>'
            textEle +=
                '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
            textEle += '	</ul>'
            textEle += '</div></div>'
            $('body').append(textEle)
        }


    })

    // --����������������ض��ĵ���

    // --����������������ض��ĵ���end

    //  --������ҳ
    if (window.location.href.indexOf('https://m.gd.huatu.com/sydw/2023/0713/5170510.html') != -1) {
        //΢�������,���뵯��
        document.write('<link rel="stylesheet" type="text/css" href="https://gd.huatu.com/zt/css.css?v=1"></link>')
        var title = '������'
        var textEle = '	<div class="xn-wx-bg hide">'
        textEle += '	<div class="xn-wx-box">'
        textEle += '		<div class="xn-wx-head">'
        textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">'
        textEle += '		<span id="wx_thetitle">' + title + '</span>'
        textEle += '		<i title="�ر�" id="xn_closed" onclick="close_x_wx_box()" id="xn_closed_id">x</i>'
        textEle += '	</div>'
        textEle += '	<ul class="xn-wx-ul">'
        textEle += '		<li>'
        textEle += '			<p class="tishi3" id="wx_tishi3"></p>'
        textEle += '			<p class="tishi" id="wx_tishi">С�����ﲻ�ܴ��ⲿ����</p>'
        textEle += '			<p class="tishi" id="wx_tishi2" style="color:#009688">΢�Ź�ע�ظ�����ɽ��룡</p>'
        textEle += '			<img class="wxewm" id="wxewm" src="">'
        textEle += '			<p class="gzcopy" id="wx_gzcopy">ʶ���ά�룬�ظ�������ٽ��룡</p>'
        textEle +=
            '            <button class="copy-btn" id="wx_copyid" data-clipboard-text="" onclick="copythemessage1()"><img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">�����ȡ����</button>'
        textEle += '		</li>'
        textEle +=
            '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>'
        textEle += '	</ul>'
        textEle += '</div></div>'
        $('body').append(textEle)
    }
    //  --������ҳend
}

//΢�Ŷ˿ڵ���
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
            alink = '����·����ӽ���:\r\n\r\n' + alink

            if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
                alink += '\r\n\r\n' + thecopyforhtmlgg + '\r\n\r\n'
            }
        }

        if (typeof thecopyforhtml == 'string' && thecopyforhtml != '') {
            alink = thecopyforhtml
        }

        //�ж�΢���������ַ�Ƿ���е������ͱ�־poptype  1Ϊ�û��ظ���ȡ����ҵ΢�š��ͷ���ά�� 2Ϊ�ؼ��ʻ�ȡ 3Ϊɨ���ȡ
        var poptype = 1
        var popkey = ''
        var locationurl = window.location.href
        if (locationurl.indexOf('poptype=') != -1) {
            if (getQueryString('amp;poptype') != '' || getQueryString('amp;poptype') != null) {
                poptype = getQueryString('amp;poptype')
            }
        } else {
            //�ж����������ǲ����п��Ƶ��������� wzpoptype wzpopkey wzwximg ��
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
            //�ж����������ǲ����п��Ƶ��������� wzpoptype wzpopkey wzwximg ��
            if (wzpoptype == 1) {
                document.getElementById('wxewm_next').style.display = 'block'
            }
        }

        if (poptype == 2) {
            popkey = decodeURI(getQueryString('amp;popkey'))
            alink = popkey
        } else {
            //�ж����������ǲ����п��Ƶ��������� wzpoptype wzpopkey wzwximg ��
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
        //alert('��ʼ����1');
        const textarea = document.createElement('textarea') // ֱ�ӹ���textarea  ��ע�⣺����Ϊ��ʵ�ֻ��У���Ҫ����textarea�������input�Ļ���ʵ�ֲ��˻��С���
        textarea.value = alink // ��������    ��ע�⣺ \r\n �� ���� ���š�
        document.body.appendChild(textarea) // �����ʱʵ��
        textarea.select() // ѡ��ʵ������
        document.execCommand('Copy') // ִ�и���
        document.body.removeChild(textarea) // ɾ����ʱʵ��

        var tg = getQueryString('tg')

        // ��ѯip�Ĺ���
        var city_list = [
            '����',
            '����',
            '��ɽ',
            '��ݸ',
            '����',
            '�麣',
            '��ɽ',
            '��Զ',
            '�ع�',
            '��ͷ',
            '��β',
            '����',
            '����',
            '÷��',
            '��Դ',
            'տ��',
            '����',
            '����',
            '����',
            '�Ƹ�',
            'ï��',
        ]
        var city_tg = ['gz', 'sz', 'fs', 'dg', 'hz', 'zh', 'zs', 'qy', 'sg', 'st', 'sw', 'cz', 'jy', 'mz', 'hy', 'zj', 'zq', 'jm', 'yj', 'yf', 'mm']

        var city = ''
        var city_code = ''
        // --����������㣬���� AJAX ����
        if (province == '�㶫ʡ') {
            if (window.location.href.indexOf('https://m.gd.huatu.com') != -1 || window.location.href.indexOf('https://gd.huatu.com') != -1) {
                if (locationurl.indexOf('?tg=') == -1 && locationurl.indexOf('&amp;poptype=1&amp;popkey=') == -1) {
                    // --ajax�����ѯip
                    $.ajax({
                        url: 'https://api.vore.top/api/IPdata',
                        type: 'GET',
                        async: false,
                        success: function (data) {
                            // console.log(data)
                            // �ڳɹ��ص��д����ص�����
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
                            // ����������
                        },
                    })
                    var select = document.getElementById('mySelect')
                    select.innerHTML = '' // ���ѡ�������
                    var options = [
                        {value: 'gz', label: '���ݿͷ���ʦ'},
                        {value: 'sz', label: '���ڿͷ���ʦ'},
                        {value: 'fs', label: '��ɽ�ͷ���ʦ'},
                        {value: 'dg', label: '��ݸ�ͷ���ʦ'},
                        {value: 'hz', label: '���ݿͷ���ʦ'},
                        {value: 'zh', label: '�麣�ͷ���ʦ'},
                        {value: 'zs', label: '��ɽ�ͷ���ʦ'},
                        {value: 'qy', label: '��Զ�ͷ���ʦ'},
                        {value: 'sg', label: '�عؿͷ���ʦ'},
                        {value: 'st', label: '��ͷ�ͷ���ʦ'},
                        {value: 'sw', label: '��β�ͷ���ʦ'},
                        {value: 'cz', label: '���ݿͷ���ʦ'},
                        {value: 'jy', label: '�����ͷ���ʦ'},
                        {value: 'mz', label: '÷�ݿͷ���ʦ'},
                        {value: 'hy', label: '��Դ�ͷ���ʦ'},
                        {value: 'zj', label: 'տ���ͷ���ʦ'},
                        {value: 'zq', label: '����ͷ���ʦ'},
                        {value: 'jm', label: '���ſͷ���ʦ'},
                        {value: 'yj', label: '�����ͷ���ʦ'},
                        {value: 'yf', label: '�Ƹ��ͷ���ʦ'},
                        {value: 'mm', label: 'ï���ͷ���ʦ'},
                    ]
                    for (var i = 0; i < options.length; i++) {
                        var option = document.createElement('option')
                        option.value = options[i].value
                        option.text = options[i].label
                        // --���ݳ��д���Ĭ����ʾ�ĸ���ʦ����
                        if (options[i].value === city_code) {
                            option.selected = true
                            // console.log(city_code)
                        }
                        select.appendChild(option)
                    }
                }
            }
        }

        // ��ѯip�Ĺ���end

        //  --������ wx_copyid ID ��Ԫ�ص� display ��������Ϊ 'block'������ʾ��Ԫ�ء�
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
            //�ڹ㶫�����£��Ա�������ж�
            if (window.location.href.indexOf('https://m.') != -1) {
                // �ƶ���
                if (document.getElementsByClassName('detail-tit')) {
                    if (document.getElementsByClassName('detail-tit').length > 0) {
                        if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/����Ա|����|ʡ��|�п�/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_����Ա.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/ѧУ|����|��ʦ|��ʦ/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_��ʦ.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/��ʿ|ҽ|��|ҩ/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_ҽ��.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/�о���|����/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_����.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/��ְ/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_������ְ.png'
                        } else if (document.getElementsByClassName('detail-tit')[0].innerHTML.match(/����/)) {
                            code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_��ҵ��λ.png'
                        }
                    }
                }
            } else {
                //���Զ�
                if (document.getElementsByTagName('h1') && document.getElementsByTagName('h1').length > 0) {
                    if (document.getElementsByTagName('h1')[0].innerHTML.match(/����Ա|����|ʡ��|�п�/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_����Ա.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/ѧУ|����|��ʦ|��ʦ/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_��ʦ.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/��ʿ|ҽ|��|ҩ/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_ҽ��.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/�о���|����/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_����.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/��ְ/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_������ְ.png'
                    } else if (document.getElementsByTagName('h1')[0].innerHTML.match(/����/)) {
                        code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/�㶫��վ�������㶫)_��ҵ��λ.png'
                    }
                }
            }
        } else {
        }

        //��������
        //�Է���һ�ͷ�������׼��һ���л���ά��Ĺ��ܣ�����ʱ�������з���
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

        textcopy = '�����Ѹ��Ƴɹ���'
        $('.wxewm_next').attr('src', 'https://gd.huatu.com/zt/js/images/gc.png')
        //΢�Ŷ˿ڵĽ����жϣ�����ǲ��Ǹ����ģ�ȥ�����

        var locationurl = window.location.href
        if (0) {
            //if(url.indexOf("go/u3/") == -1 && (url.indexOf("https://u3.huatu.com/uploads/soft/") == -1)&&(locationurl.indexOf("wximg=") == -1)){
            //��������ȥ�����

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

            //��������������û���趨��wxtcwzpicͼƬ
            if (document.getElementById('wzpoptype') && document.getElementById('wzwximg').value != '') {
                //�������趨��������صĿؼ���ֵ��Ϊ��
                code = document.getElementById('wzwximg').value
            }

            //��ַ��ַ�ϵ�
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
            // document.getElementById('wx_thetitle').innerHTML = 'ɨ���ȡ';
            // document.getElementById('wx_tishi').innerHTML = 'С�����ﲻ��ֱ�Ӵ��������';
            // document.getElementById('wx_tishi2').innerHTML = ''
            // document.getElementById('wx_gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע���ٻ�ȡ��';
            // document.getElementById('wx_copyid').innerHTML = '';
            // document.getElementById('wx_copyid').style.display = 'none';

            // alertext = '���Ƴɹ�';

            // //document.getElementById("gzcopy").style.color = '#7a7979';
            // document.getElementById("gzcopy").style.fontSize = '12px';
            // //textcopy = "-1";
            // textcopy = "�����Ѹ��Ƴɹ���";
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
        document.getElementById('wx_thetitle').innerHTML = '΢�ſ����ȡ'
        document.getElementById('wx_tishi2').innerHTML = 'ɨ��΢�Ź�ע�����Ϳ�����ٻ�ȡ��'
        document.getElementById('wx_gzcopy').innerHTML = 'ʶ���ά�룬΢�Ź�ע����Ի���<br>�Ի��򳤰�ճ�������Ϳ�����ٴ򿪣�'
        document.getElementById('wx_copyid').innerHTML =
            '<img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">�����ȡ����'
        document.getElementById('wx_tishi').innerHTML = ''

        document.getElementById('wx_gzcopy').style.fontSize = '12px'

        //textcopy = "-1";

        //��ʼ����poptype�����õ���������ʾ
        if (poptype == 2) {
            //�ؼ��ʻ�ȡ��Ⱥ��ά�롢�ͷ��š���ҵ΢�š����ĺŶ�ά�룩
            document.getElementById('wx_thetitle').innerHTML = '�����ȡ'
            document.getElementById('wx_tishi2').innerHTML = '΢�Ź�ע�ظ���' + popkey + '����ȡ'
            document.getElementById('wx_gzcopy').innerHTML = 'ʶ���ά�룬�ظ���' + popkey + '����ȡ'
            //document.getElementById('wx_copyid').innerHTML = '������ƿ���';
            document.getElementById('wx_copyid').innerHTML =
                '<img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png" style="position: absolute;right: 212px;bottom: 126px;">�����ȡ����'
            textcopy = '�����Ѹ��Ƴɹ�'
            $('.wxewm_next').attr('src', '')
        } else if (poptype == 3) {
            //ɨ���ȡ�����ϰ���ά�롢����Ŵ��ζ�ά�룩
            document.getElementById('wx_thetitle').innerHTML = '΢��ɨ���ȡ'
            document.getElementById('wx_tishi2').innerHTML = ''
            document.getElementById('wx_gzcopy').innerHTML = 'ʶ���ά�룬΢��ɨ����ٻ�ȡ��'
            document.getElementById('wx_copyid').innerHTML = '�����������'
            document.getElementById('wx_copyid').style.display = 'none'
            $('.wxewm_next').attr('src', '')
            textcopy = -1
        } else if (poptype == 1) {
            $('.wxewm_next').attr('src', 'https://gd.huatu.com/zt/js/images/gc.png')
        }

        alertext = '���Ƴɹ�'
        //alert('��ʼ����2');
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
        //alert('��ʼ����');
        event.preventDefault()
    }
}

// --ѡ����ʦ��ʾ��Ӧ��ά��
function selectcode() {
    // var select = document.getElementById('mySelect')  //��ȡҳ��ѡ���
    var select = $('#mySelect')
    // var wxewm = document.getElementById('wxewm')  //��ȡ��ά��չʾ���Ǹ���ǩ
    var wxewm = $('#wxewm')
    // var selectedValue = select.value
    var selectedValue = select.val()

    // console.log(selectedValue) // �ڿ���̨��ӡѡ����ֵ
    // console.log(city)
    // console.log(code)
    // wxewm.src = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/' + select.value + '.png'
    wxewm.attr('src', 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/' + selectedValue + '.png') //--����src��ֵ
    var code = wxewm.attr('src') //--��src��ֵ����code
    // console.log(code)
    $('.wxewm').attr('src', code) //--��ҳ��������Ϊwxewm��src��ֵ����Ϊcode��ֵ��
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
    var htmlstr = '����·���������\r\n\r\n'
    while (re.exec(str) != null) {
        if (RegExp.$1.indexOf('go/u3') != -1 || RegExp.$1.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || RegExp.$1.indexOf('xls') != -1 || RegExp.$1.indexOf('xlsx') != -1 || RegExp.$1.indexOf('pdf') != -1 || RegExp.$1.indexOf('doc') != -1) {
            htmlstr +=
                '>>>>' + RegExp.$2 + '\r\n' + RegExp.$1.replace('https://gd.huatu.com/z/go/u3/?u=', 'https://u3.huatu.com/uploads/soft/') + '\r\n\r\n'
        }
        //�����RegExp.$1��ôƥ��ľ���href���������!
    }

    var locationurl = window.location.href
    if (locationurl.indexOf('?') != -1) {
        locationurl = locationurl.substr(0, locationurl.indexOf('?')) //ҳ������ַ������֮ǰ��ַ��
    }

    if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
        htmlstr += thecopyforhtmlgg + '\r\n'
    }

    htmlstr += '>>>ԭ�����ӣ�' + locationurl + '?wj=1'

    htmlstr = htmlstr.replace(/(<([^>]+)>)/gi, '')

    return htmlstr
}

function copythemessage1() {
    var alink = localStorage.getItem('showwindowurl')
    if (alink.indexOf('go/u3/') != -1 || alink.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || alink.indexOf('xls') != -1 || alink.indexOf('pdf') != -1 || alink.indexOf('doc') != -1 || alink.indexOf('xlsx') != -1) {
        alink = copytheu3all()
    } else {
        alink = '����·����ӽ���:\r\n\r\n' + alink

        if (typeof thecopyforhtmlgg == 'string' && thecopyforhtmlgg != '') {
            alink += '\r\n\r\n' + thecopyforhtmlgg + '\r\n'
        }
    }

    if (typeof thecopyforhtml == 'string' && thecopyforhtml != '') {
        alink = thecopyforhtml
    }

    const textarea = document.createElement('textarea') // ֱ�ӹ���textarea  ��ע�⣺����Ϊ��ʵ�ֻ��У���Ҫ����textarea�������input�Ļ���ʵ�ֲ��˻��С���

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

    textarea.value = alink // ��������    ��ע�⣺ \r\n �� ���� ���š�
    document.body.appendChild(textarea) // �����ʱʵ��
    textarea.select() // ѡ��ʵ������
    document.execCommand('Copy') // ִ�и���
    document.body.removeChild(textarea) // ɾ����ʱʵ��
    alert('���Ƴɹ�����΢�Ź�ע���ٷ���')
}

// ��ȡ��ַ����
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

//============================================================================================
//�ֻ�����������ظ�����ת��΢��С��������

//��ȡ
function checkRedirect(url) {
    //alert('��Ϊ��ǰ��΢�Ų���');

    let alink = url
    let ifu3 = true
    if (alink.indexOf('go/u3/') != -1 || alink.indexOf('https://u3.huatu.com/uploads/soft/') != -1 || alink.indexOf('xls') != -1 || alink.indexOf('pdf') != -1 || alink.indexOf('doc') != -1 || alink.indexOf('xlsx') != -1) {
        alink = copytheu3all()
    } else {
        //�Ǹ�����ģ�ͳһĬ��Ϊ�����
        ifu3 = false
    }

    let id = '1' //�ж�չʾ�Ķ�ά������
    id = window.location.href
    // ȡֵ
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
                //�Ǹ�����ģ�ֻ��һ���������
                var htitle1 = ''
                if (document.getElementsByTagName('h1').length > 0) {
                    htitle1 = document.getElementsByTagName('h1')[0].innerHTML
                }
                if (document.getElementsByTagName('a')[i].innerHTML.indexOf('img') != -1) {
                    alink = '����·����ӽ���:\r\n\r\n' + htitle1 + '\r\n' + alink + '\r\n\r\n' + thecopyforhtmlguanggao + '>>>ԭ�����ӣ�' + onhref + '?wj=1'
                    alink = alink + '<<<<<<' + htitle1
                } else {
                    alink =
                        '����·����ӽ���:\r\n\r\n' +
                        document.getElementsByTagName('a')[i].innerHTML.replace(/(<([^>]+)>)/gi, '') +
                        '\r\n' +
                        alink +
                        '\r\n\r\n' +
                        thecopyforhtmlguanggao +
                        '>>>ԭ�����ӣ�' +
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

    //��ȡ����
    //�Ա�������ж�
    var htitle = ''
    if (window.location.href.indexOf('https://m.') != -1) {
        //�ƶ���
        if (document.getElementsByClassName('detail-tit')) {
            if (document.getElementsByClassName('detail-tit').length > 0) {
                htitle = document.getElementsByClassName('detail-tit')[0].innerHTML
            }
        }
    }

    //�жϵ�ַ�Ƿ����tg����
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

    //�ж��ǲ���΢�Ŵ�����
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

// ����
function checkAuditTime(startTime, endTime) {
    // ��ȡ��ǰʱ��
    const date = new Date()
    // ��ȡ��ǰʱ���������
    const dataStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `

    // ��ȡ��ʼʱ�䡢����ʱ�䡢����ʱ���ʱ���
    let startDate = new Date(dataStr + startTime).getTime()
    let endDate = new Date(dataStr + endTime).getTime()
    let nowDate = date.getTime()

    const s = startDate > endDate // �жϿ�ʼʱ�����ڽ���ʱ��

    if (s) [startDate, endDate] = [endDate, startDate] // ����ʼʱ�����ڽ���ʱ���򽻻�ֵ

    // �ж����ڵ�ʱ���Ƿ��ڿ�ʼʱ��ͽ���ʱ��֮�䣬��sΪtrue����ȡ��
    if (nowDate > startDate && nowDate < endDate) {
        return s ? false : true
    } else {
        return s ? true : false
    }
}

//============================================================================================
//�ֻ�����������ظ�����ת��΢��С�������ݽ���
