<?php

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>扫码回复</title>
    <meta name="robots" content="noindex, nofollow"/>
    <script type="text/javascript" src="https://gd.huatu.com/zt/js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
    <script src="https://www.huatu.com/images/2020css/js/layer.js"></script>
    <style>
        .phonehead {
            background: #da3521;
            text-align: center;
            height: 40px;
            line-height: 40px;
            width: 100%;
            border-radius: 8px 8px 0 0;
            position: relative;
        }

        .phonehead img {
            width: 16px;
            display: inline-block;
        }

        .phonehead span {
            color: #ffffff;
            font-size: 18px;
            margin-left: 5px;
        }

        .fromphonetext {

            word-wrap: break-word;
            word-break: break-all;
            text-align: center;
            font-size: 18px;
        }

        .phonep {
            line-height: 22px;
            padding: 5px;
            border-bottom: 1px dashed #c4c4c4;
            color: #009688;
        }

        .phonecopya {
            position: relative;
            background: #ff0000;
            color: white;
            outline: none;
            border: none;
            padding: 10px;
            display: block;
            border-radius: 50px;
            margin: 0 auto;
            width: 180px;
            font-size: 18px;
        }

        .phonecopyimg {
            position: absolute;
            right: 0px;
            bottom: -14px;
            width: 50px;
            height: auto;
        }
    </style>
</head>
<body id='phonebody' name='phonebody' style="">
<div class="phonehead">
    <img src="https://gd.huatu.com/zt/theshow/file/images/download.png">
    <span id="phonetitle">微信口令获取</span>
</div>
<div>
    <div style="margin: 9%;text-align: center;">

        <p class="fromphonetext" id='fromphonetext'></p>
        <p id='phoneshowsure' style="color:red">
            <span style="color:#009688">扫码微信关注，发送口令快速获取！</span>
        </p>

        <img style=" width: 100%;" id='fromphonepic' name='fromphonepic' src=''>
        <p id='phonep' class="phonep">识别二维码，微信关注进入对话框！<br>对话框长按粘贴，发送口令快速打开！</p>
        <a class="phonecopya" id="phonecopya" onclick="copythemessageiosphp()">
            <img src="https://u3.huatu.com/guangdong/tupian/gdhtim05.png">点击获取口令
        </a>
        <p style="color:#009688">微信关注，快速获取！</p>
        <textarea id='textareastr' style="display:none;"></textarea>

    </div>
    <p id='phonesm' style="">
        <img class="wxewm_next" id="wxewm_next" style="width: 90%;display: block;margin: 0 auto;"
             src="https://gd.huatu.com/zt/js/images/gc.png">
    </p>
</div>
<!--www统计start-->
<div style="display:none">
    <script type="text/javascript" src="https://www.huatu.com/images/js/click_com.js"></script>
</div>
<script>

    var id = getQueryString('id');
    var picurl = getQueryString('url');
    var timerid = getQueryString('timerid');
    document.getElementById('fromphonetext').innerHTML = id;
    var windowurl = id;

    if (windowurl == null || windowurl == '') {
        windowurl = 'www'
    }
    //显示的二维码图片
    var code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gdwz.png';

    //上面的默认码满了，换成耿生的
    //code = 'https://u3.huatu.com/uploads/allimg/230625/660725-2306251I6248890967836.png';

    //var code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gdlswz.jpg ';
    // if(windowurl.indexOf("maoming.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/mm.png';
    // }else if(windowurl.indexOf("zhuhai.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zh.png';
    // }else if(windowurl.indexOf("zhongshan.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zs.png';
    // }else if(windowurl.indexOf("zhaoqing.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zq.png';
    // }else if(windowurl.indexOf("zhanjiang.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/zj.png';
    // }else if(windowurl.indexOf("yunfu.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/yf.png';
    // }else if(windowurl.indexOf("shenzhen.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sz.png';
    // }else if(windowurl.indexOf("shaoguan.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sg.png';
    // }else if(windowurl.indexOf("shanwei.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/sw.png';
    // }else if(windowurl.indexOf("shantou.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/st.png';
    // }else if(windowurl.indexOf("qingyuan.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/qy.png';
    // }else if(windowurl.indexOf("meizhou.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/mz.png';
    // }else if(windowurl.indexOf("jieyang.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/jy.png';
    // }else if(windowurl.indexOf("jiangmen.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/jm.png';
    // }else if(windowurl.indexOf("huizhou.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hz.png';
    // }else if(windowurl.indexOf("heyuan.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hy.png';
    // }else if(windowurl.indexOf("guangzhou.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gz.png';
    // }else if(windowurl.indexOf("foshan.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/fs.png';
    // }else if(windowurl.indexOf("dongguan.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/dg.png';
    // }else if(windowurl.indexOf("chaozhou.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/cz.png';
    // }else if(windowurl.indexOf("yangjiang.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/yj.png';
    // }else if(windowurl.indexOf("nanshan.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/ns.png';
    // }else if(windowurl.indexOf("huidong.huatu.com") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/hd.png';
    // }else if(windowurl.indexOf("gd.huatu.com/sydw")  != -1||windowurl.indexOf("gd.huatu.com/zt/gdsydw") != -1){
    // 	code = 'https://gd.huatu.com/zt/gdhttg/dsggfjewm/gdwz.png';
    // }else if(windowurl.indexOf("gd.huatu.com/zt/jszg") != -1){

    // }else if(windowurl.indexOf("gd.huatu.com/jsks")  != -1){

    // }


    //以防万一客服满，先准备一个切换二维码的功能，根据时间来进行分流
    // if(checkAuditTime('07:00', '09:30')){
    // 	code= 'https://gd.huatu.com/zt/js/images/wzall.png';
    // }
    // var dt = new Date();
    // if(dt.getDay()==6||dt.getDay()==0){
    // 	if(checkAuditTime('00:00', '10:00')){
    // 		code= 'https://gd.huatu.com/zt/js/images/wzall.png';
    // 	}
    // 	if(checkAuditTime('14:00', '17:00')){
    // 		code= 'https://gd.huatu.com/zt/js/images/wzall.png';
    // 	}
    // }

    //////////////////////////////////////////////////////////////

    if (picurl != null && picurl != '') {
        code = picurl;
    }
    document.getElementById('fromphonepic').src = code;
    var alink = '';
    //timerid = 1675839111000;
    $.ajax({
        url: "https://gd.huatu.com/zt/api/jsgetscheme/getschemeforphone.php",
        type: "post",
        async: false,
        data: {act: 'getjson', timerid: timerid},
        dataType: 'json',
        success: function (data) {
            console.log(data);

            var title = '';
            alink = data.jsondata;
            alink = alink.replace(/&amp;gt;/g, ">");
            if (alink.indexOf('&lt;&lt;&lt;&lt;&lt;&lt;') != -1) {
                title = alink.split('&lt;&lt;&lt;&lt;&lt;&lt;')[1];
                //title = title.replace(/&amp;gt;/g,">");
                alink = alink.split('&lt;&lt;&lt;&lt;&lt;&lt;')[0];
            } else {
                if (alink.indexOf('http') != -1) {
                    title = alink.substring(alink.indexOf('&gt;&gt;&gt;&gt;') + '&gt;&gt;&gt;&gt;'.length, alink.indexOf('http'));
                } else {
                    if (alink.indexOf('www') != -1) {
                        title = alink.substring(alink.indexOf('&gt;&gt;&gt;&gt;') + '&gt;&gt;&gt;&gt;'.length, alink.indexOf('www'));
                    }
                }
            }
            document.getElementById('fromphonetext').innerHTML = title;
            document.getElementById('textareastr').value = alink;
            //  var alink = '仓储式超市';
            const textarea = document.createElement('textarea'); // 直接构建textarea  「注意：这里为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
            textarea.value = alink; // 设置内容    「注意： \r\n 是 换行 符号」
            document.body.appendChild(textarea); // 添加临时实例
            textarea.select(); // 选择实例内容
            document.execCommand('Copy'); // 执行复制
            document.body.removeChild(textarea); // 删除临时实例

            //判断标题，从而赋值图片
            var htitle = data.jsonhtmlres.htitle;
            if (0) {
                //if(htitle){
                if (htitle.match(/公务员|国考|省考|市考/)) {
                    code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/网站公域（广东)_公务员.png";
                } else if (htitle.match(/学校|教育|教师|老师/)) {
                    code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/网站公域（广东)_教师.png";
                } else if (htitle.match(/护士|医|卫|药/)) {
                    code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/网站公域（广东)_医疗.png";
                } else if (htitle.match(/研究生|考研/)) {
                    code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/网站公域（广东)_考研.png";
                } else if (htitle.match(/文职/)) {
                    code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/网站公域（广东)_军队文职.png";
                } else if (htitle.match(/其他/)) {
                    code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/wxgd/网站公域（广东)_事业单位.png";
                } else {

                }

            }
            //判断是不是原来地址带有tg
            var tg = data.jsonhtmlres.tg;
            if (tg) {
                code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/" + tg + ".png";
            }

            if (tg.indexOf('https://u3.huatu.com/uploads/allimg/') != -1) {
                code = tg;
            }
            // document.getElementById('fromphonepic').src = code;
            // if(title == '2023年国家公务员考试成绩查询入口'){
            // 	var addaresspic = addaress();
            // 	if(addaresspic!=0&&addaresspic!=null){
            // 		code = "https://gd.huatu.com/zt/gdhttg/dsggfjewm/"+ addaresspic +".png";
            // 	}
            // }

            document.getElementById('fromphonepic').src = code;
        }
    });


    setTimeout(function () {
        document.getElementById('phoneshowsure').innerHTML = '<img style="display: initial;" src="https://u3.huatu.com/uploads/allimg/230215/660653-230215161F95299461006.gif"> 发送口令已复制成功！<br><span style="color:#009688">扫码微信关注，发送口令快速获取！</span>'
    }, 1000);
    setTimeout(function () {
        document.getElementById('phoneshowsure').innerHTML = '<span style="color:#009688">扫码微信关注，发送口令快速获取！</span>';
    }, 5000);


    function copythemessageiosphp() {
        alink = document.getElementById('textareastr').value;
        alink = alink.replace(/&gt;/g, ">");
        const textarea = document.createElement('textarea'); // 直接构建textarea  「注意：这里为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
        textarea.value = alink; // 设置内容    「注意： \r\n 是 换行 符号」
        document.body.appendChild(textarea); // 添加临时实例
        textarea.select(); // 选择实例内容
        document.execCommand('Copy'); // 执行复制
        document.body.removeChild(textarea); // 删除临时实例
        document.getElementById('phoneshowsure').style.display = 'block';
        layer.msg('获取成功，请识别二维码发送');

        document.getElementById('phoneshowsure').innerHTML = '<img style="display: initial;" src="https://u3.huatu.com/uploads/allimg/230215/660653-230215161F95299461006.gif"> 发送口令已复制成功！<br><span style="color:#009688">扫码微信关注，发送口令快速获取！</span>'

        setTimeout(function () {
            document.getElementById('phoneshowsure').innerHTML = '<span style="color:#009688">扫码微信关注，发送口令快速获取！</span>';
        }, 5000);
    }


    //alert(id);
    // 获取地址参数
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
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


    function addaress() {
        var city_list = ['广州', '深圳', '佛山', '东莞', '惠州', '珠海', '中山', '清远', '韶关', '汕头', '汕尾', '潮州', '揭阳', '梅州', '河源', '湛江', '肇庆', '江门', '阳江', '云浮', '茂名'];
        var city_tg = ['gz', 'sz', 'fs', 'dg', 'hz', 'zh', 'zs', 'qy', 'sg', 'st', 'sw', 'cz', 'jy', 'mz', 'hy', 'zj', 'zq', 'jm', 'yj', 'yf', 'mm'];

        var path6 = "https://api.vore.top/api/IPdata";
        $.ajax({
            url: path6,
            //url: "getjson.php",
            async: false,
            type: "get",
            success: function (data) {
                console.log(data);
                if (data.msg == 'SUCCESS') {
                    for (var i = 0; city_list.length; i++) {
                        if (data.ipdata.info2.indexOf(city_list[i]) != -1) {
                            return city_tg[i];
                            //break;
                        } else {

                        }
                    }
                    return 0;
                } else {
                    return 0;
                }
            }

        });
    }


</script>
<script type="text/javascript">

    window.onload = function () {


        var ele = document.querySelectorAll('#phonecopya')[0]
        var rect = ele.getBoundingClientRect();
        var touch = new Touch({
            "identifier": 0,
            "target": ele,
            "clientX": (rect.left + rect.right) / 2,
            "clientY": (rect.top + rect.bottom) / 2,
            "screenX": (rect.left + rect.right) / 2,
            "screenY": (rect.top + rect.bottom) / 2,
            "pageX": (rect.left + rect.right) / 2,
            "pageY": (rect.top + rect.bottom) / 2,
            "radiusX": 11.5,
            "radiusY": 11.5,
            "rotationAngle": 0.0,
            "force": 1
        });
        var touchstart = new TouchEvent("touchstart", {
            cancelable: true,
            bubbles: true,
            composed: true,
            touches: [touch],
            targetTouches: [touch],
            changedTouches: [touch]
        });
        var touchend = new TouchEvent("touchend", {
            cancelable: true,
            bubbles: true,
            composed: true,
            touches: [touch],
            targetTouches: [touch],
            changedTouches: [touch]
        });
        ele.dispatchEvent(touchstart);
        ele.dispatchEvent(touchend);
        // copyphonestr(false);
    }

</script>
</body>
</html>