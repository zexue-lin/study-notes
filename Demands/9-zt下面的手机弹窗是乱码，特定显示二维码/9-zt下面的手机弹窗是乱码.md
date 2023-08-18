## 九、/zt下面的领取附件手机弹窗显示乱码，zt有个页面显示特定二维码

是因为gdxcxfunction-gbk.js的编码是utf-8导致的！！ <br>

### 每次修改这个文件上传的时候都要检查一下编码为GBK再上传。<br>

带有zt的网页，在手机上打开的话，网址并不会变成m.gd.huatu.com。还是一样pc端的网址

## 九-1、zt有个页面显示特定二维码

### https://gd.huatu.com/zt/gdcrgkbmgg/  这个页面显示特定二维码，不可以修改

修改gdxcxfunction-gbk.js 这个就好,特别简单