



//引流公众号

document.writeln('<link href="https://gd.huatu.com/zt/wxfwh/js/layui/layui.css?v=" rel="stylesheet" />');
document.writeln('<script charset="gb2312" src="https://gd.huatu.com/zt/wxfwh/js/layui/layui.all.js?v="></script>');

//小程序点击复制内容
//document.write('<script src="https://gd.huatu.com/zt/thewindow.js" charset="gbk"><\/script>');

if(window.location.href.indexOf("https://m.") != -1){
	document.write('<script src="https://gd.huatu.com/zt/wxfwh/js/fwhlogin.js" charset="gbk"><\/script>');

}else{
	
	document.write('<script src="https://gd.huatu.com/zt/wxfwh/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
	if(0){
    	//江门
		if(window.location.href.indexOf("https://jiangmen111.huatu.com/") != -1){
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-jm/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://shenzhen.huatu.com/") != -1){
			//深圳
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-sz/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://yunfu.huatu.com/") != -1){
			//云浮
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-yf/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://meizhou.huatu.com/") != -1){
			//梅州
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-mz/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://maoming.huatu.com/") != -1){
			//茂名
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-mm/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://foshan.huatu.com/") != -1){
			//佛山
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-fs/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://chaozhou.huatu.com/") != -1){
			//潮州
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-cz/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://dongguan.huatu.com/") != -1){
			//东莞
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-dg/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://zhongshan.huatu.com/") != -1){
			//中山
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-zs/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://jieyang.huatu.com/") != -1){
			//揭阳
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-jy/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else if(window.location.href.indexOf("https://guangzhou.huatu.com/") != -1){
			//广州
			document.write('<script src="https://gd.huatu.com/zt/wxfwh-gz/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}else{
			document.write('<script src="https://gd.huatu.com/zt/wxfwh/js/fwhlogin-gbk.js" charset="gbk"><\/script>');
		}
	}
    
}


//广东CNZZ统计
document.writeln('<script>var _hmt = _hmt || [];(function() {  var hm = document.createElement("script");  hm.src = "https://hm.baidu.com/hm.js?041108cc46ff475568a880ff7a9c81b8";  var s = document.getElementsByTagName("script")[0];   s.parentNode.insertBefore(hm, s);})();</script>');
document.writeln('<script>var _hmt = _hmt || [];(function() {  var hm = document.createElement("script");  hm.src = "https://hm.baidu.com/hm.js?5091bc677eba6a02207c7e98d23e1f9f";  var s = document.getElementsByTagName("script")[0];   s.parentNode.insertBefore(hm, s);})();</script>');
document.writeln('<div style="display:none;"><script src="https://s5.cnzz.com/z_stat.php?id=3061847&web_id=3061847" language="JavaScript"></script></div>');


//小程序方法
if(window.location.href.indexOf("https://m.")=='-1'){
	document.write('<script src="https://gd.huatu.com/zt/js/gdxcxfunction-gbk.js" ><\/script>');
}else{
	document.write('<script src="https://gd.huatu.com/zt/js/gdxcxfunction.js" ><\/script>');
}






$(function() {    // code here})
	var inputEle = $('<input id="demoInput" value="11111" type="text" style="position: fixed;z-index: 999; left: 50%;top: 50%; transform: translate(-50%, -50%); opacity: 0;">');
	 
	$('body').append(inputEle);// 获取input值$('#btn').click(function() {    var username = $('#username').val();
});



var cnzz_s_tag = document.createElement('script');
cnzz_s_tag.type = 'text/javascript';
cnzz_s_tag.async = true;
cnzz_s_tag.charset = 'utf-8';
cnzz_s_tag.src = 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js';

var root_s = document.getElementsByTagName('script')[0];

root_s.parentNode.insertBefore(cnzz_s_tag, root_s);




function xcx(url,text,pic){
	if((typeof(url) != 'undefined')&&(typeof(text) != 'undefined')&&(typeof(pic) != 'undefined')){
		xcx3(url,text,pic);
	}else if((typeof(url) != 'undefined')&&(typeof(text) != 'undefined')&&!(typeof(pic) != 'undefined')){
		xcx2(url,text);		
	}else if((typeof(url) != 'undefined')&&!(typeof(text) != 'undefined')&&!(typeof(pic) != 'undefined')){
		xcx1(url);		
	}else{
		
	}
	
}

//位置调整，有些页面报错导致复制代码不执行，故调整位置，先执行复制的代码插入
$('a').each(function(k) {
	//if ($(this).attr('href').indexOf("http://v.huatu.com") != -1) {
	//	var href=$(this).attr('href');
	//	$(this).attr('href','http://cps.huatu.com/index.php/home/gourl/?source=fx_guangzhou&web=1&url=' +href);
	//}
});



//原来的xcx方法
function xcxold(url){
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		wx.miniProgram.getEnv((res) => {
			if (res.miniprogram) {
				xcxforminiprom(url);			
				event.preventDefault();				
			} else {
				
			}
		})		
	}else{
		xcxqt(url) ;
		//xcxqt(url) ;
	}
    
} 


//弹窗
function xcxqt(url){
		

		//如果是小程序
		/**
		var theflag = xcxforminiprom(url);
		if(theflag){
			event.preventDefault();	
			return false;
		}	
		**/
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
			
			
		   
			redirect_href = url;
			if(url.indexOf("go/u3/") != -1){
				var ua = navigator.userAgent.toLowerCase();
				
				if(ua.match(/MicroMessenger/i)=="micromessenger"&&window.location.href.indexOf("https://gd.huatu.com/") == -1) {
					
					if(window.location.href.indexOf("https://shenzhen.huatu.com/") != -1){
						//if (1) {
						if (localStorage.getItem('gdht_wxlogin_type')) {
						//location.href = redirect_href
								var ua = navigator.userAgent.toLowerCase();
								if (ua.match(/MicroMessenger/i) == "micromessenger") {
									wx.miniProgram.getEnv((res) => {
										if (res.miniprogram) {
										   var alink = url;
										   var demoInput = document.getElementById("demoInput");
										   demoInput.value = alink;
											let input = document.querySelector('#demoInput');
											let data =  input.select();
											document.execCommand('copy');
											alert("链接复制成功，请到浏览器打开"+url);					
											event.preventDefault();					
										} else {
											
										}
									})
								} else {
									
								}
						} else {
							loginOpen();
							event.preventDefault();	
							//return false;
						}
						
					}else{
						var url1 = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=','https://u3.huatu.com/uploads/soft/');
						
						location.href = url1;
						
					}
					
					

				} else {
					if(window.location.href.indexOf("https://shenzhen.huatu.com/") != -1){
						var url1 = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=','https://u3.huatu.com/uploads/soft/');
						location.href = url1;
					}else{
						
						//if (0) {
						if (localStorage.getItem('gdht_wxlogin_type')) {
						//location.href = redirect_href
								var ua = navigator.userAgent.toLowerCase();
								if (ua.match(/MicroMessenger/i) == "micromessenger") {
									wx.miniProgram.getEnv((res) => {
										if (res.miniprogram) {
										   var alink = url;
										   var demoInput = document.getElementById("demoInput");
										   demoInput.value = alink;
											let input = document.querySelector('#demoInput');
											let data =  input.select();
											document.execCommand('copy');
											alert("链接复制成功，请到浏览器打开"+url);					
											event.preventDefault();					
										} else {
											
										}
									})
								} else {
									
								}
						} else {
							//判断是否为移动端
							var ua1 = window.navigator.userAgent.toLowerCase();
							if(ua1.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
								//移动端
							}else{
								loginOpen();
								event.preventDefault();	
							}
							
							//return false;
						}		
					}


				}
				

			}else{
				
				var ua = navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == "micromessenger") {
					wx.miniProgram.getEnv((res) => {
						if (res.miniprogram) {
						   var alink = url;
						   var demoInput = document.getElementById("demoInput");
						   demoInput.value = alink;
							let input = document.querySelector('#demoInput');
							let data =  input.select();
							document.execCommand('copy');
							alert("链接复制成功，请到浏览器打开"+url);					
							event.preventDefault();					
						} else {
							
						}
					})
				} else {
					
				}
				
			}
		
	   }

}



//pc端都得关注服务号
function xcx1(url){
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		wx.miniProgram.getEnv((res) => {
			if (res.miniprogram) {
				xcxforminiprom(url);			
				event.preventDefault();				
			} else {
				
			}
		})		
	}else{
		xcxqt1(url) ;
		//xcxqt(url) ;
	}
    
} 


//弹窗
function xcxqt1(url){

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
			
			
		   
			redirect_href = url;
			if(url){
				var ua = navigator.userAgent.toLowerCase();
				
				if(ua.match(/MicroMessenger/i)=="micromessenger"&&window.location.href.indexOf("https://gd.huatu.com/") == -1) {
					
					if(window.location.href.indexOf("https://shenzhen.huatu.com/") != -1){
						//if (1) {
						if (localStorage.getItem('gdht_wxlogin_type')) {
						//location.href = redirect_href
								var ua = navigator.userAgent.toLowerCase();
								if (ua.match(/MicroMessenger/i) == "micromessenger") {
									wx.miniProgram.getEnv((res) => {
										if (res.miniprogram) {
										   var alink = url;
										   var demoInput = document.getElementById("demoInput");
										   demoInput.value = alink;
											let input = document.querySelector('#demoInput');
											let data =  input.select();
											document.execCommand('copy');
											alert("链接复制成功，请到浏览器打开"+url);					
											event.preventDefault();					
										} else {
											
										}
									})
								} else {
									
								}
						} else {
							loginOpen();
							event.preventDefault();	
							//return false;
						}
						
					}else{
						var url1 = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=','https://u3.huatu.com/uploads/soft/');
						
						location.href = url1;
						
					}
					
					

				} else {
					if(window.location.href.indexOf("https://shenzhen.huatu.com/") != -1){
						var url1 = redirect_href.replace('https://gd.huatu.com/z/go/u3/?u=','https://u3.huatu.com/uploads/soft/');
						location.href = url1;
					}else{
						//if (1) {
						if (localStorage.getItem('gdht_wxlogin_type')) {
						//location.href = redirect_href
								var ua = navigator.userAgent.toLowerCase();
								if (ua.match(/MicroMessenger/i) == "micromessenger") {
									wx.miniProgram.getEnv((res) => {
										if (res.miniprogram) {
										   var alink = url;
										   var demoInput = document.getElementById("demoInput");
										   demoInput.value = alink;
											let input = document.querySelector('#demoInput');
											let data =  input.select();
											document.execCommand('copy');
											alert("链接复制成功，请到浏览器打开"+url);					
											event.preventDefault();					
										} else {
											
										}
									})
								} else {
									
								}
						} else {
							loginOpen();
							event.preventDefault();	
							//return false;
						}		
					}


				}
				

			}
		
	   }

}








