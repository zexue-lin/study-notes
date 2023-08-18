/* 随机发布时间 */
$.getJSON('http://172.23.0.141/gd/fxapi/randtime/getmes.php?callback=?',{'act':'list_time'},function(data){
	$('.rand_time').html(data.res);
});
$('.rand_time').click(function(){
	$.getJSON('http://172.23.0.141/gd/fxapi/randtime/getmes.php?callback=?',{'act':$(this).val()},function(data){
		$('#pubdate').val(data.res);
	});
});
/* 插入内容 */
function InsertText(str){
	var oEditor = CKEDITOR.instances.body;
	if ( oEditor.mode == 'wysiwyg' ){
		oEditor.insertText(str);
	}else{
		alert( '你必须以所见即所得模式!' );
	}
}
/* 格式化表格 */
function GetContents(){
	var oEditor = CKEDITOR.instances.body;
	var afternr = oEditor.getData();
	var afternr = afternr.replace(/<table[^>]*>/g,"<table>");
	var afternr = afternr.replace(/<tr[^>]*>/g,"<tr>");
	var afternr = afternr.replace(/<td.*((colspan=\"\d+\")|(rowspan=\"\d+\"))[^>]*>/g,"<td $1>");
	var afternr = afternr.replace(/<td\s((?!rowspan)(?!colspan))[^>]*>/g,"<td>");
	var afternr = afternr.replace(/<tbody[^>]*>/g,"<tbody>");
	afternr = afternr.replace(/<th[^>]*>/g,"<th>");
	str_dom = parseDom(afternr);
	for(var i = 0;i<$(str_dom).find('td').length;i++){
		$(str_dom).find('td').eq(i).html(strip_tags($(str_dom).find('td').eq(i).html()));
	}
	oEditor.setData($(str_dom).html());
}
// 格式化表格，带链接
function GetContentslink(){
  var oEditor = CKEDITOR.instances.body;
   var afternr = oEditor.getData();
   var afternr = afternr.replace(/(<table[^>]*)(style="[^"]*")([^>]*>)/g, '$1$3');
   var afternr = afternr.replace(/(<tr[^>]*)(style="[^"]*")([^>]*>)/g,"$1$3");
   // td标签里面有一个style，而a标签里面还有一个style 所以需要分别去除
   var afternr = afternr.replace(/(<td[^>]*)(style="[^"]*")([^>]*>)/g,"$1$3");
   var afternr = afternr.replace(/(<a[^>]*)(style="[^"]*")([^>]*>)/g,"$1$3");
   
   var afternr = afternr.replace(/<td\s((?!rowspan)(?!colspan))[^>]*>/g,"<td>");
   var afternr = afternr.replace(/<strong[^>]*>/g,"");
   var afternr = afternr.replace(/<tbody[^>]*>/g,"<tbody>");
   afternr = afternr.replace(/<th[^>]*>/g,"<th>");
   str_dom = parseDom(afternr);
   oEditor.setData($(str_dom).html());
}
function strip_tags(input, allowed) {
	allowed = (((allowed || '') + '')
			.toLowerCase()
			.match(/<([^i][a-z0-9])*>/g) || [])
			.join(''); 
	var tags = /<\/?([^i][a-z0-9]*)\b[^>]*>/gi,
			commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	return input.replace(commentsAndPhpTags, '')
			.replace(tags, function($0, $1) {
				return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
			});
}
function parseDom(arg) {
	var objE = document.createElement("pp");
	objE.innerHTML = arg;
	return objE;
};
/* 一键排版 */
function formatText(ona) {
	var myeditor = CKEDITOR.instances.body;
	if (myeditor.mode == "wysiwyg") {
		var tempimg = new Array();
		var tempahref = new Array();
		var temptable = new Array();
		var tempobject = new Array();
		var isPart = false;
		if (!isPart) {
			var tmpDiv = document.createElement("DIV");
			var editorhtml = myeditor.getData();
			editorhtml = editorhtml.replace(/<div style="page-break-after: always;?">\s*<span style="display: none;?">&nbsp;<\/span>\s*<\/div>/gi, '<p>[page]</p>'); //将div span标签替换为p 标签
			tmpDiv.innerHTML = editorhtml.replace(/&nbsp;/gi, '').replace(/<div/gi, '<p').replace(/<\/div/gi, '</p');   //移除空格标签，div替换为p标签。
			if (window.navigator.userAgent.toLowerCase().indexOf("msie") > 0) {
				tmpDiv.innerHTML = tmpDiv.innerHTML.replace(/<\/p>/gi, '<br /><\/p>');   //每个段落相隔一行
			}
			var tables = tmpDiv.getElementsByTagName("TABLE");
			if (tables != null && tables.length > 0) {
				for (var j = 0; j < tables.length; j++) {
					temptable[temptable.length] = tables[j].outerHTML;
				}
				var formattableCount = 0;
				for (var j = 0; j < tables.length;) {
					tables[j].outerHTML = "#FormatTableID_" + formattableCount + "#";
					formattableCount++;
				}
			}

			var objects = tmpDiv.getElementsByTagName("OBJECT");
			if (objects != null && objects.length > 0) {
				for (var j = 0; j < objects.length; j++) {
					tempobject[tempobject.length] = objects[j].outerHTML;
				}
				var formatobjectCount = 0;
				for (var j = 0; j < objects.length;) {
					objects[j].outerHTML = "#FormatObjectID_" + formatobjectCount + "#";
					formatobjectCount++;
				}
			}

			var imgs = tmpDiv.getElementsByTagName("IMG");
			if (imgs != null && imgs.length > 0) {
				for (var j = 0; j < imgs.length; j++) {
					var t = document.createElement("IMG");
					t.alt = imgs[j].alt;
					t.src = imgs[j].src;
					t.width = imgs[j].width;
					t.height = imgs[j].height;
					t.align = imgs[j].align;
					tempimg[tempimg.length] = t;
				}
				var formatImgCount = 0;
				for (var j = 0; j < imgs.length;) {
					imgs[j].outerHTML = "#FormatImgID_" + formatImgCount + "#";
					formatImgCount++;
				}
			}

			/* 过滤A标签 */
			if(ona=='1'||ona=='3'){
				var ahref = tmpDiv.getElementsByTagName("A");
				if (ahref != null && ahref.length > 0) {
					for (var j = 0; j < ahref.length; j++) {
						var t = document.createElement("A");
						t.href= ahref[j].href;
						t.wtext= ahref[j].text;
						tempahref[tempahref.length] = t;
					}
					var fac = 0;
					for (var j = 0; j < ahref.length;){
						ahref[j].outerHTML = "【FormatAhrefID_" + fac + "】";
						fac++;
					}
				}
			}
			

			var strongarray = new Array();
			var strongcount = 0;

			var html = processFormatText($(tmpDiv).text());
			html = html.replace(/<p>\[page\]<\/p>/gi, '<div ><span >&nbsp;</span></div>');  //p标签替换回原来的div和span标签。
			if (temptable != null && temptable.length > 0) {
				for (var j = 0; j < temptable.length; j++) {
					var tablehtml = temptable[j];
					html = html.replace("#FormatTableID_" + j + "#", tablehtml);
				}
			}
			if (tempobject != null && tempobject.length > 0) {
				for (var j = 0; j < tempobject.length; j++) {
					var objecthtml = "<p style=\"text-align:center\">" + tempobject[j] + "</p>";
					html = html.replace("#FormatObjectID_" + j + "#", objecthtml);
				}
			}
			/* 过滤A标签 */
			if(ona=='1'){
				if (tempahref != null && tempahref.length > 0) {
					for (var j = 0; j < tempahref.length; j++) {
						var ahrefhtml = "<a href=\"" + tempahref[j].href + "\" >" + tempahref[j].wtext + "</a>";
						if(tempahref[j].href.indexOf('huatu')!=-1){
						//	ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('xd.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('x.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu.com/z/go/u3')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('u3.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu')==-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
							
						html = html.replace("【FormatAhrefID_" + j + "】", ahrefhtml);
					}
				}
			}
			
			/* 过滤A标签 */
			if(ona=='3'){
	
				if (tempahref != null && tempahref.length > 0) {
					for (var j = 0; j < tempahref.length; j++) {
						var ahrefhtml = "<a href=\"" + tempahref[j].href + "\" >" + tempahref[j].wtext + "</a>";
						if(tempahref[j].href.indexOf('huatu')!=-1){
						//	ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('xd.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('x.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('u3.huatu.com')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('u3.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu.com/z/go/u3')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu')==-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
							
						html = html.replace("【FormatAhrefID_" + j + "】", ahrefhtml);
					}
				}
			}
			if (tempimg != null && tempimg.length > 0) {
				for (var j = 0; j < tempimg.length; j++) {
					var imgheight = "";
					var imgwidth = "";
					if (tempimg[j].height != 0)
						imgheight = " height=\"" + tempimg[j].height + "\"";
					if (tempimg[j].width != 0)
						imgwidth = " width=\"" + tempimg[j].width + "\"";
					var imgalign = "";
					if (tempimg[j].align != "")
						imgalign = " align=\"" + tempimg[j].align + "\"";
					var imghtml = "<p style=\"text-align:center\"><img src=\"" + tempimg[j].src + "\" alt=\"" + tempimg[j].alt + "\"" + imgwidth + " " + imgheight + " align=\"" + tempimg[j].align + "\" border=\"0\"></p>";
					html = html.replace("#FormatImgID_" + j + "#", imghtml);
				}
			}

			while (html.indexOf("</p></p>") != -1) html = html.replace("</p></p>", "</p>");
			while (html.indexOf('<p><p align="center">') != -1) html = html.replace('<p><p align="center">', '<p align="center">');
			html = html.replaceAll('http://172.23.0.125/uigfwereytEWrws/article_add.php','');
			myeditor.setData(html);
		} else {
		}
	} else {
		alert('必须在设计模式下操作！');
	}
}


/* 一键排版,给公众号引流 */
function formatTextforwxfwh(ona) {
	var myeditor = CKEDITOR.instances.body;
	if (myeditor.mode == "wysiwyg") {
		var tempimg = new Array();
		var tempahref = new Array();
		var temptable = new Array();
		var tempobject = new Array();
		var isPart = false;
		if (!isPart) {
			var tmpDiv = document.createElement("DIV");
			var editorhtml = myeditor.getData();
			editorhtml = editorhtml.replace(/<div style="page-break-after: always;?">\s*<span style="display: none;?">&nbsp;<\/span>\s*<\/div>/gi, '<p>[page]</p>'); //将div span标签替换为p 标签
			tmpDiv.innerHTML = editorhtml.replace(/&nbsp;/gi, '').replace(/<div/gi, '<p').replace(/<\/div/gi, '</p');   //移除空格标签，div替换为p标签。
			if (window.navigator.userAgent.toLowerCase().indexOf("msie") > 0) {
				tmpDiv.innerHTML = tmpDiv.innerHTML.replace(/<\/p>/gi, '<br /><\/p>');   //每个段落相隔一行
			}
			var tables = tmpDiv.getElementsByTagName("TABLE");
			if (tables != null && tables.length > 0) {
				for (var j = 0; j < tables.length; j++) {
					temptable[temptable.length] = tables[j].outerHTML;
				}
				var formattableCount = 0;
				for (var j = 0; j < tables.length;) {
					tables[j].outerHTML = "#FormatTableID_" + formattableCount + "#";
					formattableCount++;
				}
			}

			var objects = tmpDiv.getElementsByTagName("OBJECT");
			if (objects != null && objects.length > 0) {
				for (var j = 0; j < objects.length; j++) {
					tempobject[tempobject.length] = objects[j].outerHTML;
				}
				var formatobjectCount = 0;
				for (var j = 0; j < objects.length;) {
					objects[j].outerHTML = "#FormatObjectID_" + formatobjectCount + "#";
					formatobjectCount++;
				}
			}

			var imgs = tmpDiv.getElementsByTagName("IMG");
			if (imgs != null && imgs.length > 0) {
				for (var j = 0; j < imgs.length; j++) {
					var t = document.createElement("IMG");
					t.alt = imgs[j].alt;
					t.src = imgs[j].src;
					t.width = imgs[j].width;
					t.height = imgs[j].height;
					t.align = imgs[j].align;
					tempimg[tempimg.length] = t;
				}
				var formatImgCount = 0;
				for (var j = 0; j < imgs.length;) {
					imgs[j].outerHTML = "#FormatImgID_" + formatImgCount + "#";
					formatImgCount++;
				}
			}

			/* 过滤A标签 */
			if(ona=='1'||ona=='3'){
				var ahref = tmpDiv.getElementsByTagName("A");
				if (ahref != null && ahref.length > 0) {
					for (var j = 0; j < ahref.length; j++) {
						var t = document.createElement("A");
						t.href= ahref[j].href;
						t.wtext= ahref[j].text;
						tempahref[tempahref.length] = t;
					}
					var fac = 0;
					for (var j = 0; j < ahref.length;){
						ahref[j].outerHTML = "【FormatAhrefID_" + fac + "】";
						fac++;
					}
				}
			}
			

			var strongarray = new Array();
			var strongcount = 0;

			var html = processFormatText($(tmpDiv).text());
			html = html.replace(/<p>\[page\]<\/p>/gi, '<div ><span >&nbsp;</span></div>');  //p标签替换回原来的div和span标签。
			if (temptable != null && temptable.length > 0) {
				for (var j = 0; j < temptable.length; j++) {
					var tablehtml = temptable[j];
					html = html.replace("#FormatTableID_" + j + "#", tablehtml);
				}
			}
			if (tempobject != null && tempobject.length > 0) {
				for (var j = 0; j < tempobject.length; j++) {
					var objecthtml = "<p style=\"text-align:center\">" + tempobject[j] + "</p>";
					html = html.replace("#FormatObjectID_" + j + "#", objecthtml);
				}
			}
			/* 过滤A标签 */
			if(ona=='1'){
				if (tempahref != null && tempahref.length > 0) {
					for (var j = 0; j < tempahref.length; j++) {
						var ahrefhtml = "<a href=\"" + tempahref[j].href + "\" >" + tempahref[j].wtext + "</a>";
						if(tempahref[j].href.indexOf('huatu')!=-1){
							//ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('xd.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('x.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('u3.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						//u3附件下载需要登录
						if(tempahref[j].href.indexOf('go/u3/')!=-1){
							ahrefhtml = "<a data-link=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"iswxlogin(this)\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu.com/z/go/u3')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu')==-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
							
						html = html.replace("【FormatAhrefID_" + j + "】", ahrefhtml);
					}
				}
			}
			
			/* 过滤A标签 */
			if(ona=='3'){
	
				if (tempahref != null && tempahref.length > 0) {
					for (var j = 0; j < tempahref.length; j++) {
						var ahrefhtml = "<a href=\"" + tempahref[j].href + "\" >" + tempahref[j].wtext + "</a>";
						if(tempahref[j].href.indexOf('huatu')!=-1){
							//ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('xd.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('x.huatu')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('u3.huatu.com')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu.com/z/go/u3')!=-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
						if(tempahref[j].href.indexOf('huatu')==-1){
							ahrefhtml = "<a href=\"" + tempahref[j].href + "\" rel='nofollow' onclick=\"xcx('" + tempahref[j].href + "')\">" + tempahref[j].wtext + "</a>";
						}
						
							
						html = html.replace("【FormatAhrefID_" + j + "】", ahrefhtml);
					}
				}
			}
			if (tempimg != null && tempimg.length > 0) {
				for (var j = 0; j < tempimg.length; j++) {
					var imgheight = "";
					var imgwidth = "";
					if (tempimg[j].height != 0)
						imgheight = " height=\"" + tempimg[j].height + "\"";
					if (tempimg[j].width != 0)
						imgwidth = " width=\"" + tempimg[j].width + "\"";
					var imgalign = "";
					if (tempimg[j].align != "")
						imgalign = " align=\"" + tempimg[j].align + "\"";
					var imghtml = "<p style=\"text-align:center\"><img src=\"" + tempimg[j].src + "\" alt=\"" + tempimg[j].alt + "\"" + imgwidth + " " + imgheight + " align=\"" + tempimg[j].align + "\" border=\"0\"></p>";
					html = html.replace("#FormatImgID_" + j + "#", imghtml);
				}
			}

			while (html.indexOf("</p></p>") != -1) html = html.replace("</p></p>", "</p>");
			while (html.indexOf('<p><p align="center">') != -1) html = html.replace('<p><p align="center">', '<p align="center">');
			html = html.replaceAll('http://172.23.0.125/uigfwereytEWrws/article_add.php','');
			myeditor.setData(html);
		} else {
		}
	} else {
		alert('必须在设计模式下操作！');
	}
}


function processFormatText(textContext) {
	var text = dbc2Sbc(textContext);
	var prefix = "";
	var tmps = text.split("\n");
	var html = "";
	for (var i = 0; i < tmps.length; i++) {
		var tmp = tmps[i].trim();
		if (tmp.length > 0) {
			var reg = /#Format[A-Za-z]+_\d+#/gi;
			var f = reg.exec(tmp);
			if (f != null) {
				tmp = tmp.replace(/#Format[A-Za-z]+_\d+#/gi, '');
				html += f;
				if (tmp != "")
					html += "<p>　　" + tmp + "</p>\n";
			} else {
				html += "<p>　　" + tmp + "</p>\n";
			}
		}
	}
	return html;
}
function dbc2Sbc(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		// “65281”是“！”，“65373”是“｝”，“65292”是“，”。不转换"， “65248”是转换码距
		if (code >= 65281 && code < 65373 && code != 65292 && code != 65306) {
			result += String.fromCharCode(str.charCodeAt(i) - 65248);
		} else {
			result += str.charAt(i);
		}
	}
	return result;
}