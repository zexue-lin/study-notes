new WOW().init();
//计算根字号
function autoScreen() {
    var x = $('html').width();
    if ($(window).width() < 1200) {
        $("html").css("font-size", 40 * (x / 750) + "px");
    } else {
        $("html").css("font-size", 40 + "px");
    }
}
autoScreen();

$(window).resize(function() {
    autoScreen();
});
$('.toTop').click(function() {
    $('html,body').stop().animate({
        scrollTop: 0
    });
});

$(document).scroll(function() {
    if ($(window).width() > 1200) {
        if($(document).scrollTop() > 900){
            $('.fixed_nav').show();
        }else{
            $('.fixed_nav').hide();
        }
    }
});

$('.fixed_close').click(function(){
    $('.fixed_mask').hide();
});


$('.box_top_btn').click(function(e){
    e.preventDefault();
    go_url = $(this).attr("href")
    var is_yy = window.localStorage.getItem("sem_yy")
    if(is_yy == 'yes'){
      ajax_success()
    }else{
        $('.fixed_mask').show();
    }
});
var go_url;
$('.box1_content a').click(function(e){
    e.preventDefault();
    go_url = $(this).attr("href")
    go_url =$(this).attr('href');
    var is_yy = window.localStorage.getItem("sem_yy")
    if(is_yy == 'yes'){
      ajax_success()
    }else{
        $('.fixed_mask').show();
    }
});
function ajax_success(){
  window.localStorage.setItem("sem_yy","yes")
  $('.fixed_mask').fadeOut();
  window.open(go_url)
}
$('.fixed_close').click(function (e) { 
  $('.fixed_mask').fadeOut();
});


function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}



