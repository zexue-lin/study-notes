<?php
require_once(dirname(__FILE__).'/config.php');
CheckPurview('a_New,a_AccNew');
require_once(DEDEINC.'/customfields.func.php');
require_once(DEDEADMIN.'/inc/inc_archives_functions.php');
if(file_exists(DEDEDATA.'/template.rand.php'))
{
    require_once(DEDEDATA.'/template.rand.php');
}
if(empty($dopost)) $dopost = '';


if($dopost!='save')
{
    require_once(DEDEINC."/dedetag.class.php");
    require_once(DEDEADMIN."/inc/inc_catalog_options.php");
    ClearMyAddon();
    $channelid = empty($channelid) ? 0 : intval($channelid);
    $cid = empty($cid) ? 0 : intval($cid);
    $akeyid = empty($akeyid) ? 0 : intval($akeyid);

    //获取akeywords
    if($akeyid>0) {
        require_once(DEDEADMIN . '/inc/fxmysql_config.php');
        $mysqli_bj = mysqli_connect($beijing_cfg_dbhost, $beijing_cfg_dbuser, $beijing_cfg_dbpwd, $beijing_cfg_dbname);
        $query = mysqli_query($mysqli_bj, 'select * from common_key_keywords where status = 1 and id="' . $akeyid . '"');
        $akeyinfo = mysqli_fetch_assoc($query);
    }

    if(empty($geturl)) $geturl = '';
    
    $keywords = $writer = $source = $body = $description = $title = '';

    //采集单个网页
    if(preg_match("#^http:\/\/#", $geturl))
    {
        require_once(DEDEADMIN."/inc/inc_coonepage.php");
        $redatas = CoOnePage($geturl);
        extract($redatas);
    }

    //获得频道模型ID
    if($cid>0 && $channelid==0)
    {
        $row = $dsql->GetOne("Select channeltype From `#@__arctype` where id='$cid'; ");
        $channelid = $row['channeltype'];
    }
    else
    {
        if($channelid==0)
        {
            $channelid = 1;
        }
    }

    //获得频道模型信息
    $cInfos = $dsql->GetOne(" Select * From  `#@__channeltype` where id='$channelid' ");
    
    //获取文章最大id以确定当前权重
    $maxWright = $dsql->GetOne("SELECT COUNT(*) AS cc FROM #@__archives");
    
    include DedeInclude("templets/article_add.htm");
    exit();
}

/*--------------------------------
function __save(){  }
-------------------------------*/
else if($dopost=='save')
{

	$pagestartime=microtime();//统计保存文章时间 开始
    require_once(DEDEINC.'/image.func.php');
    require_once(DEDEINC.'/oxwindow.class.php');
    $flag = isset($flags) ? join(',',$flags) : '';
    $notpost = isset($notpost) && $notpost == 1 ? 1: 0;
    
    if(empty($typeid2)) $typeid2 = '';
    if(!isset($autokey)) $autokey = 0;
    if(!isset($remote)) $remote = 0;
    if(!isset($dellink)) $dellink = 0;
    if(!isset($autolitpic)) $autolitpic = 0;
    if(empty($click)) $click = ($cfg_arc_click=='-1' ? mt_rand(50, 200) : $cfg_arc_click);
    //当标签为空时，将他的值定义为0
	if(empty($province)) $province = '0';
	if(empty($city)) $city = '0';
	if(empty($examtype)) $examtype = '0';
	if(empty($bqzkxx)) $bqzkxx = '0';
	if(empty($bqbkzd)) $bqbkzd = '0';
	if(empty($bqstzl)) $bqstzl = '0';
	if(empty($bqstlx)) $bqstlx = '0';
	if(empty($sllbbq)) $sllbbq = '0';
	if(empty($mslbbq)) $mslbbq = '0';
   //新增公告字段 panlg20230323
	$voteid = $article_type; //公告类型 预公告2 公告1 非公告3
	$notpost = $article_year; //年份
	$lastpost = $article_department; //事业部
	$scores = $article_examtype; //考试类型
	$article_province = $article_province; //省份
	$article_city = isset($article_city)?$article_city:'';; //地市
	$article_area = isset($article_area)?$article_area:'';; //区县
	$goodpost = isset($article_form)?$article_form:''; //考试形式
	$badpost = isset($article_batch)?$article_batch:''; //考试批次
	$article_batch_zn = isset($article_batch_zn)?$article_batch_zn:''; //考试批次中文
	//新增公告字段    	
	if(empty($xcxflag)) $xcxflag = '0';
    
    if(empty($typeid))
    {
        ShowMsg("请指定文档的栏目！","-1");
        exit();
    }
		if($province==-1)
	{
		ShowMsg("请选择省份！","-1");
        exit();
	}
	if($city==-1)
	{
		ShowMsg("请选择城市！","-1");
        exit();
	}
	if($examtype==-1)
	{
		ShowMsg("请选择考试类型！","-1");
        exit();
	}
	if($bqzkxx==-1)
	{
		ShowMsg("请选择招考信息标签！","-1");
        exit();
	}
	if($bqbkzd==-1)
	{
		ShowMsg("请选择报考指导标签！","-1");
        exit();
	}
	if($bqstzl==-1)
	{
		ShowMsg("请选择试题资料标签！","-1");
        exit();
	}
	if($bqstlx==-1)
	{
		ShowMsg("请选择试题资料标签！","-1");
        exit();
	}
	if($sllbbq==-1){
		ShowMsg("请选择申论类别标签！","-1");
		exit();
	}
	if($sllbbq==-1){
		ShowMsg("请选择面试类别标签！","-1");
		exit();
	}
	


    if(empty($channelid))
    {
        ShowMsg("文档为非指定的类型，请检查你发布内容的表单是否合法！","-1");
        exit();
    }
    if(!CheckChannel($typeid,$channelid))
    {
        ShowMsg("你所选择的栏目与当前模型不相符，请选择白色的选项！","-1");
        exit();
    }
    if(!TestPurview('a_New'))
    {
        CheckCatalog($typeid,"对不起，你没有操作栏目 {$typeid} 的权限！");
    }

    //对保存的内容进行处理
    if(empty($writer))$writer=$cuserLogin->getUserName();
    if(empty($source))$source='网络';
    $pubdate = GetMkTime($pubdate);
    $senddate = time();
    $sortrank = AddDay($pubdate,$sortup);
    $ismake = $ishtml==0 ? -1 : 0;
    $title = preg_replace("#\"#", '＂', $title);
    $title = htmlspecialchars(cn_substrR($title,$cfg_title_maxlen),ENT_COMPAT,'ISO-8859-1');
    $info_title = $dsql->getOne("select * from dede_archives where title = '$title' order by id desc limit 3000 ");
    if(!empty($info_title)){
    	showMsg("文章标题重复，请检查！","-1");
	    exit();
    }
/* 	if( strpos($title,'真题')){ //$cuserLogin->getUserName() =='潘立光'
		 echo '国考期间禁止发布标题带 真题 关键字 有疑问联系 徐玉连老师';exit;
	}
	if( strpos($body,'真题')){ //$cuserLogin->getUserName() =='潘立光'
		 echo '国考期间禁止发布内容带 真题 关键字 有疑问联系 徐玉连老师';exit;
	} */
     $checkWords = "穆松公考培训、李永新、张永生、李琳、张红军、刘彦、于天笑、中公、启政教育、京佳教育、www.233.com、考试吧、华政教育、大公教育、鸿图教育、北京大公、北京新天地、北京金路、成都博大、江苏天策、江西锐才、陕西省中科、新东方在线、广东南方、河北顺通、粉笔公考、腰果公考、启公教育、光华教育、知满天教育、辽宁科信、新西南教育、大树教育、志公、海大源、题名教育、无忧考网、www.51test.net、华公教育、华梦教育、新东方、半月谈、中政、育路、纵横公考、天公华师、零点启航、鸿途教育、成功教育、新途径教育、尚政教育、图公教育、华都教育、东营启仕教育、诚博教育、中政教育、成功教育、京智、中创、畅学教育、联创世华、山香教育、士博教育、一路成公教育、明途教育、天道公考、大汉鸿儒教育、智拓教育、精图教育、国韵公考、国培公考、王智精英、展鸿公务员、慧普公务员、天策公务员、苏索公务员、善课思教育、启禾公务员、中海公务员";
    $checkArr = explode("、",$checkWords);
    foreach($checkArr as $val){
        if(mb_strpos($body,$val,null,'gbk')!==false){
            ShowMsg('文章内容带有禁止的关键字:'.$val, '-1');
            exit();
        }
    }
    $shorttitle = cn_substrR($shorttitle,36);
    $color =  cn_substrR($color,7);
    $writer =  cn_substrR($writer,20);
    $source = cn_substrR($source,30);
    $description = cn_substrR($description,$cfg_auot_description);
    $keywords = cn_substrR($keywords,120);
    $filename = trim(cn_substrR($filename,40));
    $userip = GetIP();
    $isremote  = (empty($isremote)? 0  : $isremote);
    $serviterm=empty($serviterm)? "" : $serviterm;

    if(!TestPurview('a_Check,a_AccCheck,a_MyCheck'))
    {
        $arcrank = -1;
    }
    $adminid = $cuserLogin->getUserID();

    //处理上传的缩略图
    if(empty($ddisremote))
    {
        $ddisremote = 0;
    }
    
    $litpic = GetDDImage('none', $picname, $ddisremote);

    //生成文档ID
    $arcID = GetIndexKey($arcrank,$typeid,$sortrank,$channelid,$senddate,$adminid);

    if(empty($arcID))
    {
        ShowMsg("无法获得主键，因此无法进行后续操作！","-1");
        exit();
    }
    if(trim($title) == '')
    {
        ShowMsg('标题不能为空', '-1');
        exit();
    }
	  //检测最近7000篇文章是否有重复 start;
	   //$stime = microtime();
	 // $num = 0;
	  $suiji = 2;//mt_rand(2,4);
	  $slen = strlen($body)/$suiji;	
      $slen = intval($slen);	  
	  $world = substr($body,$slen,150);	
      //exit();		
     /*  $sql = "SELECT aid,body from #@__addonarticle order by aid desc limit 2000";
				$dsql ->Execute('me',$sql);
                while($arr = $dsql->GetArray()){
		  $result = strpos($arr[body],$world);
		  $num++;
		  if($result){
		  $isremote = 0;
		  $artUrl = MakeArt($arr[aid],true,true,$isremote);
		  echo '禁止发布相同文章，<a href="'.$artUrl.'" target="_blank">查看重复文章</a><br/>';
          //exit();
		  echo "重复内容：".$world."<br/>";
		  echo "请讲此段重复内容稍作修改,再发送！";
		  //break;
		  exit();
		  }
	   } */
	  //$endtime= microtime();
	  // echo "查询文章数".$num."<br/>";
	   //echo "花费".$ttime = $endtime - $stime;
	 //exit();
	 //检测最近7000篇文章是否有重复 end;    
    //处理body字段自动摘要、自动提取缩略图等
	//$body=str_replace("http://vs001.htexam.com:7272/uploads","http://www.huatu.com/uploads",$body);//plg12.7.2
	$body=str_replace("http://192.168.11.220/uploads","http://www.huatu.com/uploads",$body);//plg12.7.2	
	$body=str_replace("https://u3.huatu.com/uploads/soft/","https://gd.huatu.com/z/go/u3/?u=",$body);
	$body=str_replace("http://u3.huatu.com/uploads/soft/","https://gd.huatu.com/z/go/u3/?u=",$body);
    $body = AnalyseHtmlBody($body,$description,$litpic,$keywords,'htmltext');
	
    //自动分页
    if($sptype=='auto')
    {
        $body = SpLongBody($body,$spsize*1024,"#p#分页标题#e#");
    }

    //分析处理附加表数据
    $inadd_f = $inadd_v = '';
    if(!empty($dede_addonfields))
    {
        $addonfields = explode(';',$dede_addonfields);
        if(is_array($addonfields))
        {
            foreach($addonfields as $v)
            {
                if($v=='') continue;
                $vs = explode(',',$v);
                if($vs[1]=='htmltext'||$vs[1]=='textdata')
                {
                    ${$vs[0]} = AnalyseHtmlBody(${$vs[0]},$description,$litpic,$keywords,$vs[1]);
                }
                else
                {
                    if(!isset(${$vs[0]})) ${$vs[0]} = '';
                    ${$vs[0]} = GetFieldValueA(${$vs[0]},$vs[1],$arcID);
                }
                $inadd_f .= ','.$vs[0];
                $inadd_v .= " ,'".${$vs[0]}."' ";
            }
        }
    }

    //处理图片文档的自定义属性
    if($litpic!='' && !preg_match("#p#", $flag))
    {
        $flag = ($flag=='' ? 'p' : $flag.',p');
    }
    if($redirecturl!='' && !preg_match("#j#", $flag))
    {
        $flag = ($flag=='' ? 'j' : $flag.',j');
    }
    
    //跳转网址的文档强制为动态
    if(preg_match("#j#", $flag)) $ismake = -1;

    //替换掉保存时候的一段路径
     $litpic = str_replace("/a/guangzhou/", 'https://gd.huatu.com/', $litpic);
    //保存到主表
    $query = "INSERT INTO `#@__archives`(id,typeid,typeid2,sortrank,flag,ismake,channel,arcrank,click,money,title,shorttitle,
    color,writer,source,litpic,pubdate,senddate,mid,voteid,notpost,description,keywords,filename,dutyadmin,weight,theyear,theprovince,lastpost,scores,goodpost,badpost,article_province,article_city,article_area)
    VALUES ('$arcID','$typeid','$typeid2','$sortrank','$flag','$ismake','$channelid','$arcrank','$click','$money',
    '$title','$shorttitle','$color','$writer','$source','$litpic','$pubdate','$senddate',
    '$adminid','$voteid','$notpost','$description','$keywords','$filename','$adminid','$weight','$theyear','$theprovince','$lastpost','$scores','$goodpost','$badpost','$article_province','$article_city','$article_area');";

    if(!$dsql->ExecuteNoneQuery($query))
    {
        $gerr = $dsql->GetError();
        $dsql->ExecuteNoneQuery("DELETE FROM `#@__arctiny` WHERE id='$arcID'");
        ShowMsg("把数据保存到数据库主表 `#@__archives` 时出错。".str_replace('"','',$gerr),"javascript:;");
        exit();
    }

    //保存到附加表
    $cts = $dsql->GetOne("SELECT addtable FROM `#@__channeltype` WHERE id='$channelid' ");
    $addtable = trim($cts['addtable']);
    if(empty($addtable))
    {
        $dsql->ExecuteNoneQuery("DELETE FROM `#@__archives` WHERE id='$arcID'");
        $dsql->ExecuteNoneQuery("DELETE FROM `#@__arctiny` WHERE id='$arcID'");
        ShowMsg("没找到当前模型[{$channelid}]的主表信息，无法完成操作！。","javascript:;");
        exit();
    }
    $useip = GetIP();
    $templet = empty($templet) ? '' : $templet;
    $query = "INSERT INTO `{$addtable}`(aid,typeid,redirecturl,templet,userip,province,city,examtype,bqzkxx,bqbkzd,bqstzl,bqstlx,moubles,moublesstr,body{$inadd_f}) Values('$arcID','$typeid','$redirecturl','$templet','$useip','$province','$city','$examtype','$bqzkxx','$bqbkzd','$bqstzl','$bqstlx','$moubles','$moublesstr','$body'{$inadd_v})";
    if(!$dsql->ExecuteNoneQuery($query))
    {
        $gerr = $dsql->GetError();
        $dsql->ExecuteNoneQuery("Delete From `#@__archives` where id='$arcID'");
        $dsql->ExecuteNoneQuery("Delete From `#@__arctiny` where id='$arcID'");
        ShowMsg("数据保存到数据库附加表 `{$addtable}` 时出错。".str_replace('"','',$gerr),"javascript:;");
        exit();
    }


	//保存附加的信息
	$where_add = " ";
	if(!empty($bkggbmsj)){
		$where_add .= " ,bkggbmsj='$bkggbmsj'" ;
	}
	if(!empty($bkggkssj)){
		$where_add .= " ,bkggkssj='$bkggkssj'" ;
	}
	if(!empty($bkggksnr)){
		$where_add .= " ,bkggksnr='$bkggksnr'" ;
	}
	if(!empty($bkggzkrs)){
		$where_add .= " ,bkggzkrs='$bkggzkrs'" ;
	}
	if(!empty($bkggcs)){
		$where_add .= " ,bkggcs='$bkggcs'" ;
	}
	if(!empty($bkggbmfs)){
		$where_add .= " ,bkggbmfs='$bkggbmfs'" ;
	}
	if(!empty($bkggkskc)){
		$where_add .= " ,bkggkskc='$bkggkskc'" ;
    }
    if(!empty($zkzdysj)){
		$where_add .= " ,zkzdysj='$zkzdysj'" ;//准考证打印时间   天津
    }
    if(!empty($bscjcxsj)){
		$where_add .= " ,bscjcxsj='$bscjcxsj'" ;//笔试成绩查询时间   天津
    }
    if(!empty($mssj)){
		$where_add .= " ,mssj='$mssj'" ;//面试时间   天津
    }
    if(!empty($bsxm)){
        $where_add .= " ,bsxm='$bsxm'" ;//笔试 内蒙古
    }
    if(!empty($fdkcurl)){
        $where_add .= " ,fdkcurl='$fdkcurl'" ;//辅导课程URL 内蒙古
    }
    if(!empty($tsjcurl)){
        $where_add .= " ,tsjcurl='$tsjcurl'" ;//图书教材URL 内蒙古
    }
	if(!empty($where_add)){
	    $query_bq = "update dede_addonarticle set userip='$useip'".$where_add." where aid = '$arcID'";
		$dsql->ExecuteNoneQuery($query_bq);
	}

    $typidstring = "$typeid,";
    //复制文章添加 jiang
    if(!empty($fz_id) && !empty($fz_title)){
        $fz_arr = array();
		
        foreach ($fz_id as $fz_idk=>$fz_typeid){

            if($fz_typeid == $typeid){
                continue;
            }
            $fz_arr[$fz_idk]['query_arctiny'] = [
                'function' => 'GetIndexKey',
                'params'  => [$arcrank,$fz_typeid,$sortrank,$channelid,$senddate,$adminid]
            ];
			
			//$pubdate = $pubdate+5;
			$senddate = $senddate+5;
			
			if($moubles)
			    $moubles = rand(1, 9);
			
			
			
            $fz_arr[$fz_idk]['query_archives'] = "INSERT INTO `#@__archives`(id,typeid,typeid2,sortrank,flag,ismake,channel,arcrank,click,money,title,shorttitle,
    color,writer,source,litpic,pubdate,senddate,mid,voteid,notpost,description,keywords,filename,dutyadmin,weight,theyear,theprovince)
    VALUES ('~~_arcid_~~','$fz_typeid','','$sortrank','$flag','$ismake','$channelid','$arcrank','$click','$money',
    '$fz_title[$fz_idk]','$shorttitle','$color','$writer','$source','$litpic','$pubdate','$senddate',
    '$adminid','$voteid','$notpost','$description','$keywords','$filename','$adminid','$weight','$theyear','$theprovince');";

            $fz_arr[$fz_idk]['query_add'] = "INSERT INTO `{$addtable}`(aid,typeid,redirecturl,templet,userip,province,city,examtype,bqzkxx,bqbkzd,bqstzl,bqstlx,moubles,moublesstr,body{$inadd_f}) Values('~~_arcid_~~','$fz_typeid','$redirecturl','$templet','$useip','$province','$city','$examtype','$bqzkxx','$bqbkzd','$bqstzl','$bqstlx','$moubles','$moublesstr','$body'{$inadd_v})";
			

            $fz_arr[$fz_idk]['query_bq'] = "update dede_addonarticle set ifcaiji = '3', userip='$useip'".$where_add." where aid = '~~_arcid_~~'";
			// $fz_arr[$fz_idk]['query_bq'] = "update dede_addonarticle set ifcaiji = '3', userip='$useip'".$where_add." where aid = '~~_arcid_~~'";

			

            $fz_arr[$fz_idk]['typeid'] = $fz_typeid;
			
			$typidstring .= $fz_typeid.",";
			
			
			$fz_arr[$fz_idk]['rilistid'] = $rilistid;
			$fz_arr[$fz_idk]['rilistleixing'] = $rilistleixing;
			$fz_arr[$fz_idk]['bqzkxx'] = $bqzkxx;
			$fz_arr[$fz_idk]['insertkaoshisql'] = "INSERT INTO kaoshi_data_link (wzaids, wzcity, wzleixing, wztitle,wzzprs,wzbmsj,wzbmfs,wzkssj) VALUES ('~~_arcid_~~', '$city', $bqzkxx, '$fz_title[$fz_idk]', '$bkggzkrs',  '$bkggbmsj', '$bkggbmfs','$bkggkssj');";
			
			 

        }

        $fzAids = insertOtherArticle($fz_arr,$arcID);
    }else{
		  
		  if($bqzkxx!=''&&($bqzkxx=='676' or $bqzkxx=='675')){
				$insertkaoshisql = "INSERT INTO kaoshi_data_link (wzaids, wzcity, wzleixing, wztitle,wzzprs,wzbmsj,wzbmfs,wzkssj) VALUES ('$arcID', '$city', $bqzkxx, '$title', '$bkggzkrs',  '$bkggbmsj', '$bkggbmfs','$bkggkssj');";
				
				if(!$dsql->ExecuteNoneQuery($insertkaoshisql))
				{
					ShowMsg("把数据保存到数据库关联表 kaoshi_data_link 时出错。".$insertkaoshisql."/".str_replace('"','',$gerr),"javascript:;");
				}
		  }else{
			  
			  if($rilistid!=''){
				  
				    $selectsql = $dsql->GetOne("SELECT * FROM kaoshi_data_link WHERE wzaids='$rilistid'");
					//$addRow['body']=str_replace("http://www.htexam.com/uploads","http://vs001.huatu.com:7272/uploads",$addRow['body']);//plg12.7.2
					$wzbsgl=$selectsql['wzbsgl'];
					$wzmsgl=$selectsql['wzmsgl'];
					//$wzbsgl=$selectsql['wzbsgl'];
					
					$updatekaoshidatesql = "";
					if($rilistleixing == 'zwk'){ //职位库
						//$updatekaoshidatesql = 'update kaoshi_data_link set ';
					}elseif($rilistleixing == 'bm'){ //报名
						
					}elseif($rilistleixing == 'bs'){ //笔试
						$bsid = "";
						if($wzbsgl==''){
							$bsid = $arcID;
						}else{
							$bsid = $wzbsgl.",".$arcID;
						}
						$updatekaoshidatesql = 'update kaoshi_data_link set wzbsgl = "'.$bsid.'",wzkssj="'.$rilistdatastr1.'" where wzaids = '.$rilistid;
						if(!$dsql->ExecuteNoneQuery($updatekaoshidatesql))
						{
							ShowMsg("更新附加表 kaoshi_data_link  时出错，请检查原因！","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ms'){ //面试
						 $msid = "";
						if($wzmsgl==''){
							$msid = $arcID;
						}else{
							$msid = $wzmsgl.",".$arcID;
						}
						$updatekaoshidatesql = 'update kaoshi_data_link set wzmsgl = "'.$msid.'",wzmssj="'.$rilistdatastr1.'" where wzaids = '.$rilistid;
						if(!$dsql->ExecuteNoneQuery($updatekaoshidatesql))
						{
							ShowMsg("更新附加表 kaoshi_data_link  时出错，请检查原因！","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ly'){ //录用
						
					}
				  
				  
			  }
			  
			  
		  }
		
		
	}
	
	$typidstring .= "11";


    //判断是否匹配了关键词开始
    include_once "inc/fxmysql_config.php";

    $mysqli_bj = mysqli_connect($beijing_cfg_dbhost,$beijing_cfg_dbuser,$beijing_cfg_dbpwd,$beijing_cfg_dbname);

    $akey_sql = "select id from common_key_keywords where '$keywords' like CONCAT('%',keywords,'%') and status = 1 and addtime > ".strtotime("-1 day");
    $query = mysqli_query($mysqli_bj,$akey_sql);
    $akey_ids_arr = [];
    while ($row = mysqli_fetch_assoc($query)){
        mysqli_query($mysqli_bj,"update common_key_keywords set status='2',aid='$arcID',updatetime=".time()." where id = '$row[id]'");
    }


    //判断是否匹配了关键词结束
	

	//如果发布时间延迟，存表
	if($pubdate > time()){
    $delay_article = true;
    $sql_delay = "insert into dede_article_delay(aid,pubdate,typeid,is_send,senddate) values('$arcID','$pubdate','$typeid','0','".time()."')";
    $dsql->ExecuteNoneQuery($sql_delay);
    }
	$jltime=time();
	//保存生成记录
    $query = "INSERT INTO `#@__scjl`(aid,typeid,jltime) Values('$arcID','$typeid','$jltime')";
    if(!$dsql->ExecuteNoneQuery($query))
    {
        //ShowMsg("把数据保存到生成记录时出错。".str_replace('"','',$gerr),"javascript:;");
        //exit();
    }
    //生成HTML
    InsertTags($tags,$arcID);
    if($cfg_remote_site=='Y' && $isremote=="1")
    {    
        if($serviterm!=""){
            list($servurl,$servuser,$servpwd) = explode(',',$serviterm);
            $config=array( 'hostname' => $servurl, 'username' => $servuser, 'password' => $servpwd,'debug' => 'TRUE');
        }else{
            $config=array();
        }
        if(!$ftp->connect($config)) exit('Error:None FTP Connection!');
    }
    //$artUrl = MakeArt($arcID,true,true,$isremote);//plg 150618 生成静态页面改在发布成功以后
    if($artUrl=='')
    {
        $artUrl = $cfg_phpurl."/view.php?aid=$arcID";
    }
    ClearMyAddon($arcID, $title);
    //返回成功信息 <a href='$artUrl' target='_blank'><u>查看文章</u></a>
    $msg = "<p>请选择你的后续操作：
    <a href='article_add.php?cid=$typeid'><u>继续发布文章</u></a>
    &nbsp;&nbsp;
    <a href='archives_do.php?aid=".$arcID."&dopost=editArchives'><u>更改文章</u></a>
    &nbsp;&nbsp;
    <a href='catalog_do.php?cid=$typeid&dopost=libqbkzdchives'><u>已发布文章管理</u></a>
    &nbsp;&nbsp;
    $backurl
	<a onclick='genxing()'><u>更新推送该栏目</u></a>
    &nbsp;&nbsp;
  </p>";
    if($delay_article) {//延迟发送
        $msg = "<div style=\"line-height:36px;height:36px\">{$msg}</div>";
        $msg .= "<table width='80%' style='margin:10px 10px 15px 25px' id='tgtable' align='left'><tr><td style='height: 36px;font-size: 14px;'>该文章未生成，已启用延迟发送!</td></tr>\r\n";
        $msg .= "</table>";
    }else{
        $msg = "<p style='padding:0;'>{$msg}</p>".MakeHtmlplg();
        //复制文章生成
        if(!empty($fzAids)){
            $msg .= "<br />".MakeHtmlFz($fzAids);
        }
        $msg = "<p style=\"line-height:36px;height:36px\">{$msg}</p>".GetUpdateTest();
        
    }
	
	//取消添加的时候自动发送数据去小程序
	if($xcxflag){
	//	$msg .= "<br />".makexcxdata($fzAids,$arcID);		
	}
	

    $wintitle = "成功发布文章！";
    $wecome_info = "文章管理::发布文章";
    $win = new OxWindow();
    $win->AddTitle("成功发布文章：");
    $win->AddMsgItem($msg);
    $winform = $win->GetWindow("hand","&nbsp;",false);
    $win->Display();
	//记录时间
$pageendtime = microtime(); 
$starttime = explode(" ",$pagestartime); 
$endtime = explode(" ",$pageendtime); 
$totaltime = $endtime[0]-$starttime[0]+$endtime[1]-$starttime[1]; 
$timecost = sprintf("%s",$totaltime); 

echo "<p style='width:1000px'>页面运行时间: $timecost 秒</p>
	
	<script type='text/javascript' src='//gd.huatu.com/zt/css/js/jquery-1.9.1.min.js'></script>
	<script>
		function genxing(){
			var typidarry = '$typidstring';
			var typidarrys = typidarry.split(',');
			//alert(typidarry);
			var successmsg = '';
			var failmsg = '';
			for(var i = 0 ; i < typidarrys.length - 1 ; i++){
				var urlpush = 'http://172.23.0.125/uigfwereytEWrws/makehtml_list_action.php?typeid='+typidarrys[i]+'&maxpagesize=20&upnext=1&upsuipian=0';
				$.ajax({
					url: urlpush,		   
					type: 'get',
					async:false,
					success: function(data) {
						if(data.indexOf('完成所有栏目列表更新') != -1){
							//推送
							var url = data.match(/完成所有栏目列表更新！<a href=([\s\S]*?)target='_blank'>浏览栏目/)[1];
							url = url.replace(\"'\", '');
							url = url.replace(\"'\", '');
								if(url .indexOf( '/a/guangzhou')!=-1){  url = url.replace('/a/guangzhou','https://gd.huatu.com');	
								}else if(url .indexOf( '/c/guangzhou')!=-1){  url = url.replace('/c/guangzhou/','https://guangzhou.huatu.com');	
								}else if(url .indexOf( '/c/zhuhai')!=-1){  url = url.replace('/c/zhuhai/','https://zhuhai.huatu.com');	
								}else if(url .indexOf( '/c/foshan')!=-1){  url = url.replace('/c/foshan/','https://foshan.huatu.com');	
								}else if(url .indexOf( '/c/shaoguan')!=-1){  url = url.replace('/c/shaoguan/','https://shaoguan.huatu.com');
								}else if(url .indexOf( '/c/qingyuan')!=-1){  url = url.replace('/c/qingyuan/','https://qingyuan.huatu.com');
								}else if(url .indexOf( '/c/zhongshan')!=-1){  url = url.replace('/c/zhongshan/','https://zhongshan.huatu.com');
								}else if(url .indexOf( '/c/shanwei')!=-1){  url = url.replace('/c/shanwei/','https://shanwei.huatu.com');
								}else if(url .indexOf( '/c/chaozhou')!=-1){  url = url.replace('/c/chaozhou/','https://chaozhou.huatu.com');
								}else if(url .indexOf( '/c/zhaoqing')!=-1){  url = url.replace('/c/zhaoqing/','https://zhaoqing.huatu.com');
								}else if(url .indexOf( '/c/heyuan')!=-1){  url = url.replace('/c/heyuan/','https://heyuan.huatu.com');
								}else if(url .indexOf( '/c/yangjiang')!=-1){  url = url.replace('/c/yangjiang/','https://yangjiang.huatu.com');
								}else if(url .indexOf( '/c/yunfu')!=-1){  url = url.replace('/c/yunfu/','https://yunfu.huatu.com');
								}else if(url .indexOf( '/c/meizhou')!=-1){  url = url.replace('/c/meizhou/','https://meizhou.huatu.com');
								}else if(url .indexOf( '/c/zhanjiang')!=-1){  url = url.replace('/c/zhanjiang/','https://zhanjiang.huatu.com');
								}else if(url .indexOf( '/c/jiangmen')!=-1){  url = url.replace('/c/jiangmen/','https://jiangmen.huatu.com');
								}else if(url .indexOf( '/c/jieyang')!=-1){  url = url.replace('/c/jieyang/','https://jieyang.huatu.com');
								}else if(url .indexOf( '/c/maoming')!=-1){  url = url.replace('/c/maoming/','https://maoming.huatu.com');
								}else if(url .indexOf( '/a/shenzhen')!=-1){  url = url.replace('/a/shenzhen/','https://shenzhen.huatu.com');
								
								}else if(url .indexOf( 'c/dongguan')!=-1){  url = url.replace('/c/dongguan/','https://dongguan.huatu.com');
								
								}else if(url .indexOf( 'c/huizhou')!=-1){  url = url.replace('/c/huizhou/','https://huizhou.huatu.com');
								}else if(url .indexOf( 'c/shantou')!=-1){  url = url.replace('/c/shantou/','https://shantou.huatu.com');
								}
							if(url.indexOf('.com/')==-1){
								url = url.replace('.com', '.com/');							
							}
							url = url.replace('/index.html', '');
							var flags = tuisong(url);
							if(flags == '1'){
								successmsg = successmsg + '  ' + url;
							}else{
								failmsg = failmsg + '  ' + url;
							}
						}else{
							alert('更新出现小差，请使用后台的html更新功能，或者联系管理员');
						}
							
					}
				});
			}
			alert('更新栏目成功，推送成功:'+successmsg+'，更新失败：'+failmsg);
		}
		
		function tuisong(url){
			var params =  url;
			var falgs = '';
			$.ajax({
					type: 'post',
					url: 'http://172.23.0.125/a/guangzhou/zt/tiku/index.php?c=exam&a=urlpush',
					data: {
						wenjian: params,
					},
					async: false,
					dataType: 'json',
					success: function (response) {
						//alert(response);
						if (response.status === 1) {
							//toastr.success(response.result);
							//alert('更新栏目成功，推送成功:'+url);
							falgs = '1';
						}
						if (response.status === 0) {
							//alert('推送出小差，请使用后台推送功能或者联系管理员');
							falgs = '0';
						}
					},
			});
			
			return falgs;
		}
	
	 </script>";
//if($timecost>10){
	// $sql = "insert into zhufu values(NULL,$timecost,0,$arcID)";
	// $dsql->ExecuteNoneQuery($sql);
//}
	//同步公告至盘古 panlg20230323
	if($article_type==1){
	  if($article_type==1){
		  include("../gwy_php/pangu_zhaoluid.php");
			if($zhaoluId > 0){
				$sql = "update dede_archives set tackid = ".$zhaoluId."  where id = ".$arcID;
				$dsql->ExecuteNoneQuery($sql);
			}		
	  }		
		$pgGgLy = iconv("GBK", "UTF-8//IGNORE", $houtaimingcheng);
		file_get_contents("http://".$_SERVER['HTTP_HOST']."/gwy_php/to_zx_article.php?aid=".$arcID."&fenxiao=".$pgGgLy);
	    //file_get_contents("http://".$_SERVER['HTTP_HOST']."/gwy_php/to_zx_article.php?aid=".$arcID);		
	}
}


//传送数据去小程序
//生成文章
function makexcxdata($fzAids,$ID)
{

    $revalue = "<table width='80%' style='margin:10px 10px 15px 25px' id='tgtable' align='left'><tr><td style='color: #fff;height: 36px;font-size: 14px;'>正在传送数据去小程序：</td></tr>\r\n";
    foreach($fzAids as $arcID=>$typeid){
        $jumpUrl = "xcx.php?aid={$arcID}";
       // $revalue .= "<tr><td>\r\n<iframe name='stafrm' frameborder='0' id='stafrm' width='100%' height='270px' src='$jumpUrl'></iframe>\r\n</td></tr>\r\n";

    }
	if($ID){
		$jumpUrl = "xcx.php?aid={$ID}";
        $revalue .= "<tr><td>\r\n<iframe name='stafrm' frameborder='0' id='stafrm' width='100%' height='270px' src='$jumpUrl'></iframe>\r\n</td></tr>\r\n";
	}
    $revalue .= "</table>";

    return $revalue;
}




//生成文章
function MakeHtmlFz($fzAids)
{

    $revalue = "<table width='80%' style='margin:10px 10px 15px 25px' id='tgtable' align='left'><tr><td style='color: #fff;height: 36px;font-size: 14px;'>正在生成其他复制文章，请完成前不要进行其它操作：</td></tr>\r\n";
    foreach($fzAids as $arcID=>$typeid){
        $jumpUrl = "task_do_plg.php?aid={$arcID}&typeid={$typeid}&op=add";
        $revalue .= "<tr><td>\r\n<iframe name='stafrm' frameborder='0' id='stafrm' width='100%' height='270px' src='$jumpUrl'></iframe>\r\n</td></tr>\r\n";

    }
    $revalue .= "</table>";

    return $revalue;
}



//复制文章插入到库中
function insertOtherArticle($fz_arr,$arcIDh){

    global $dsql;

    $aids = '';
    $returnAids = array();
    foreach ($fz_arr as $key=>$val){


        $arcId = call_user_func_array($val['query_arctiny']['function'],$val['query_arctiny']['params']);
		
		$arcIdrilistid = $arcId;

        $query_archives = str_replace("~~_arcid_~~",$arcId,$val['query_archives']);
        $query_add = str_replace("~~_arcid_~~",$arcId,$val['query_add']);
        $query_bq = str_replace("~~_arcid_~~",$arcId,$val['query_bq']);
        //echo $query_add;exit;
        if(!$dsql->ExecuteNoneQuery($query_archives))
        {
            $gerr = $dsql->GetError();
            $dsql->ExecuteNoneQuery("DELETE FROM `#@__arctiny` WHERE id='$arcId'");
            ShowMsg("把数据保存到数据库主表 `#@__archives` 时出错，复制。".str_replace('"','',$gerr),"javascript:;");
            continue;
        }


        if(!$dsql->ExecuteNoneQuery($query_add))
        {
            $gerr = $dsql->GetError();
            $dsql->ExecuteNoneQuery("Delete From `#@__archives` where id='$arcId'");
            $dsql->ExecuteNoneQuery("Delete From `#@__arctiny` where id='$arcId'");
            ShowMsg("数据保存到数据库附加表 `addonarticle` 时出错，复制".str_replace('"','',$gerr),"javascript:;");
            continue;
        }else{
            $dsql->ExecuteNoneQuery($query_bq);
        }

        $returnAids[$arcId] = $val['typeid'];
		
		//关联表的id保存拼接
		if($aids != "" )
			$aids .= ",";
		$aids .= $arcId;
		
		
		//保存到考试日历
		if(($val['bqzkxx']!='')&&($val['bqzkxx']=='676' or $val['bqzkxx']=='675')){
			$query_insertkaoshisql = str_replace("~~_arcid_~~",$arcId,$val['insertkaoshisql']);
			if(!$dsql->ExecuteNoneQuery($query_insertkaoshisql))
			{
				ShowMsg("把数据保存到数据库关联表 kaoshi_data_link 时出错。".$query_insertkaoshisql."/".str_replace('"','',$gerr),"javascript:;");
				//exit();
			}
		}else{
			  
			  if($val['rilistid']!=''){
				    $rilistleixing = $val['rilistleixing'];
				    $rilistsql = "SELECT * FROM kaoshi_data_link WHERE wzaids='".$val['rilistid']."'";
				    $selectsql = $dsql->GetOne($rilistsql);
					//$addRow['body']=str_replace("http://www.htexam.com/uploads","http://vs001.huatu.com:7272/uploads",$addRow['body']);//plg12.7.2
					$wzbsgl=$selectsql['wzbsgl'];
					$wzmsgl=$selectsql['wzmsgl'];
					//$wzbsgl=$selectsql['wzbsgl'];
					
					$updatekaoshidatesql = "";
					if($rilistleixing == 'zwk'){ //职位库
						//$updatekaoshidatesql = 'update kaoshi_data_link set ';
					}elseif($rilistleixing == 'bm'){ //报名
						
					}elseif($rilistleixing == 'bs'){ //笔试
						$bsid = "";
						if($wzbsgl==''){
							$bsid = $arcIdrilistid;
						}else{
							$bsid = $wzbsgl.",".$arcIdrilistid;
						}
						//$bsid .=$bsid."ss";
						$updatekaoshidatesql = 'update kaoshi_data_link set wzbsgl = "'.$bsid.'",wzkssj="'.$rilistdatastr1.'"  where wzaids = '.$val['rilistid'];
						if(!$dsql->ExecuteNoneQuery($updatekaoshidatesql))
						{
							ShowMsg("更新附加表 kaoshi_data_link  时出错，请检查原因！","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ms'){ //面试
						 $msid = "";
						if($wzmsgl==''){
							$msid = $arcIdrilistid;
						}else{
							$msid = $wzmsgl.",".$arcIdrilistid;
						}
						$updatekaoshidatesql = 'update kaoshi_data_link set wzmsgl = "'.$msid.'",wzmssj="'.$rilistdatastr1.'" where wzaids = '.$val['rilistid'];
						if(!$dsql->ExecuteNoneQuery($updatekaoshidatesql))
						{
							ShowMsg("更新附加表 kaoshi_data_link  时出错，请检查原因！","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ly'){ //录用
						
					}
				  
				  
			  }
			  
			  
		  }
		
		
    }
	
	//保存到关联表
	$linksql =  "INSERT INTO z_archiver_link(aid,aids) Values('$arcIDh','$aids')";
	if(!$dsql->ExecuteNoneQuery($linksql))
	{
		ShowMsg("把数据保存到数据库关联表 z_archiver_link 时出错。".str_replace('"','',$gerr),"javascript:;");
		//exit();
	}

    return $returnAids;

}
?>