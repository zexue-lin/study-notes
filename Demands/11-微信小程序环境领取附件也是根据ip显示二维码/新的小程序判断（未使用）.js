if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    wx.miniProgram.getEnv(res => {
        if (res.miniprogram) {
            if (province == '�㶫ʡ') {
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
            }
        } else {
            // ip���ڹ㶫
            var textEle = '	<div class="xn-xcx-bg hide">';
            textEle += '	<div class="xn-xcx-box">';
            textEle += '		<div class="xn-xcx-head">';
            textEle += '		<img src="https://gd.huatu.com/zt/theshow/file/images/download.png">';
            textEle += '		<span id="thetitle">' + title + '</span>';
            textEle += '		<i title="�ر�" id="xn_closed" onclick="close_x_box()" id="xn_closed_id">x</i>';
            textEle += '	</div>';
            textEle += '	<ul class="xn-xcx-ul">';
            textEle += '		<li>';
            textEle += '			<p class="tishi3" id="tishi3"></p>';
            textEle += '			<p class="tishi" id="tishi">С�����ﲻ�ܴ��ⲿ����</p>';
            textEle += '			<p class="tishi" id="tishi2">΢�Ź�ע�ظ�����ɽ��룡</p>';
            textEle += '			<img class="wxewm" id="wxewm" src="' + wxpic + '">';
            textEle += '			<p class="gzcopy" id="gzcopy">ʶ���ά�룬�ظ�������ٽ��룡</p>';
            textEle += '            <button class="copy-btn" id="copyid" data-clipboard-text="" onclick="copythemessage1()">������ƿ���</button>';
            textEle += '		</li>';
            textEle += '		<li><img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;" src="https://gd.huatu.com/zt/js/images/gc.png"></li>';
            textEle += '	</ul>';
            textEle += '</div></div>';
            $('body').append(textEle);
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
