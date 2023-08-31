if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    wx.miniProgram.getEnv(res => {
        if (res.miniprogram) {
            if (province == '广东省') {
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
            }
        } else {
            // ip不在广东
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
