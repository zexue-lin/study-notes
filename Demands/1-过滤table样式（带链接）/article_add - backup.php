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

    //��ȡakeywords
    if($akeyid>0) {
        require_once(DEDEADMIN . '/inc/fxmysql_config.php');
        $mysqli_bj = mysqli_connect($beijing_cfg_dbhost, $beijing_cfg_dbuser, $beijing_cfg_dbpwd, $beijing_cfg_dbname);
        $query = mysqli_query($mysqli_bj, 'select * from common_key_keywords where status = 1 and id="' . $akeyid . '"');
        $akeyinfo = mysqli_fetch_assoc($query);
    }

    if(empty($geturl)) $geturl = '';
    
    $keywords = $writer = $source = $body = $description = $title = '';

    //�ɼ�������ҳ
    if(preg_match("#^http:\/\/#", $geturl))
    {
        require_once(DEDEADMIN."/inc/inc_coonepage.php");
        $redatas = CoOnePage($geturl);
        extract($redatas);
    }

    //���Ƶ��ģ��ID
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

    //���Ƶ��ģ����Ϣ
    $cInfos = $dsql->GetOne(" Select * From  `#@__channeltype` where id='$channelid' ");
    
    //��ȡ�������id��ȷ����ǰȨ��
    $maxWright = $dsql->GetOne("SELECT COUNT(*) AS cc FROM #@__archives");
    
    include DedeInclude("templets/article_add.htm");
    exit();
}

/*--------------------------------
function __save(){  }
-------------------------------*/
else if($dopost=='save')
{

	$pagestartime=microtime();//ͳ�Ʊ�������ʱ�� ��ʼ
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
    //����ǩΪ��ʱ��������ֵ����Ϊ0
	if(empty($province)) $province = '0';
	if(empty($city)) $city = '0';
	if(empty($examtype)) $examtype = '0';
	if(empty($bqzkxx)) $bqzkxx = '0';
	if(empty($bqbkzd)) $bqbkzd = '0';
	if(empty($bqstzl)) $bqstzl = '0';
	if(empty($bqstlx)) $bqstlx = '0';
	if(empty($sllbbq)) $sllbbq = '0';
	if(empty($mslbbq)) $mslbbq = '0';
   //���������ֶ� panlg20230323
	$voteid = $article_type; //�������� Ԥ����2 ����1 �ǹ���3
	$notpost = $article_year; //���
	$lastpost = $article_department; //��ҵ��
	$scores = $article_examtype; //��������
	$article_province = $article_province; //ʡ��
	$article_city = isset($article_city)?$article_city:'';; //����
	$article_area = isset($article_area)?$article_area:'';; //����
	$goodpost = isset($article_form)?$article_form:''; //������ʽ
	$badpost = isset($article_batch)?$article_batch:''; //��������
	$article_batch_zn = isset($article_batch_zn)?$article_batch_zn:''; //������������
	//���������ֶ�    	
	if(empty($xcxflag)) $xcxflag = '0';
    
    if(empty($typeid))
    {
        ShowMsg("��ָ���ĵ�����Ŀ��","-1");
        exit();
    }
		if($province==-1)
	{
		ShowMsg("��ѡ��ʡ�ݣ�","-1");
        exit();
	}
	if($city==-1)
	{
		ShowMsg("��ѡ����У�","-1");
        exit();
	}
	if($examtype==-1)
	{
		ShowMsg("��ѡ�������ͣ�","-1");
        exit();
	}
	if($bqzkxx==-1)
	{
		ShowMsg("��ѡ���п���Ϣ��ǩ��","-1");
        exit();
	}
	if($bqbkzd==-1)
	{
		ShowMsg("��ѡ�񱨿�ָ����ǩ��","-1");
        exit();
	}
	if($bqstzl==-1)
	{
		ShowMsg("��ѡ���������ϱ�ǩ��","-1");
        exit();
	}
	if($bqstlx==-1)
	{
		ShowMsg("��ѡ���������ϱ�ǩ��","-1");
        exit();
	}
	if($sllbbq==-1){
		ShowMsg("��ѡ����������ǩ��","-1");
		exit();
	}
	if($sllbbq==-1){
		ShowMsg("��ѡ����������ǩ��","-1");
		exit();
	}
	


    if(empty($channelid))
    {
        ShowMsg("�ĵ�Ϊ��ָ�������ͣ������㷢�����ݵı��Ƿ�Ϸ���","-1");
        exit();
    }
    if(!CheckChannel($typeid,$channelid))
    {
        ShowMsg("����ѡ�����Ŀ�뵱ǰģ�Ͳ��������ѡ���ɫ��ѡ�","-1");
        exit();
    }
    if(!TestPurview('a_New'))
    {
        CheckCatalog($typeid,"�Բ�����û�в�����Ŀ {$typeid} ��Ȩ�ޣ�");
    }

    //�Ա�������ݽ��д���
    if(empty($writer))$writer=$cuserLogin->getUserName();
    if(empty($source))$source='����';
    $pubdate = GetMkTime($pubdate);
    $senddate = time();
    $sortrank = AddDay($pubdate,$sortup);
    $ismake = $ishtml==0 ? -1 : 0;
    $title = preg_replace("#\"#", '��', $title);
    $title = htmlspecialchars(cn_substrR($title,$cfg_title_maxlen),ENT_COMPAT,'ISO-8859-1');
    $info_title = $dsql->getOne("select * from dede_archives where title = '$title' order by id desc limit 3000 ");
    if(!empty($info_title)){
    	showMsg("���±����ظ������飡","-1");
	    exit();
    }
/* 	if( strpos($title,'����')){ //$cuserLogin->getUserName() =='������'
		 echo '�����ڼ��ֹ��������� ���� �ؼ��� ��������ϵ ��������ʦ';exit;
	}
	if( strpos($body,'����')){ //$cuserLogin->getUserName() =='������'
		 echo '�����ڼ��ֹ�������ݴ� ���� �ؼ��� ��������ϵ ��������ʦ';exit;
	} */
     $checkWords = "���ɹ�����ѵ�������¡������������ա��ź�������塢����Ц���й����������������ѽ�����www.233.com�����԰ɡ������������󹫽�������ͼ�����������󹫡���������ء�������·���ɶ����󡢽�����ߡ�������š�����ʡ�пơ��¶������ߡ��㶫�Ϸ����ӱ�˳ͨ���۱ʹ��������������������������⻪������֪����������������š������Ͻ���������������־��������Դ���������������ǿ�����www.51test.net���������������ν������¶���������̸����������·���ݺṫ�����칫��ʦ�������������;�������ɹ���������;������������������ͼ��������������������Ӫ���˽������ϲ������������������ɹ����������ǡ��д�����ѧ����������������ɽ�������ʿ��������һ·�ɹ���������;����������������󺺺�����������ؽ�������ͼ���������Ϲ��������๫�������Ǿ�Ӣ��չ�蹫��Ա�����չ���Ա����߹���Ա����������Ա���ƿ�˼���������̹���Ա���к�����Ա";
    $checkArr = explode("��",$checkWords);
    foreach($checkArr as $val){
        if(mb_strpos($body,$val,null,'gbk')!==false){
            ShowMsg('�������ݴ��н�ֹ�Ĺؼ���:'.$val, '-1');
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

    //�����ϴ�������ͼ
    if(empty($ddisremote))
    {
        $ddisremote = 0;
    }
    
    $litpic = GetDDImage('none', $picname, $ddisremote);

    //�����ĵ�ID
    $arcID = GetIndexKey($arcrank,$typeid,$sortrank,$channelid,$senddate,$adminid);

    if(empty($arcID))
    {
        ShowMsg("�޷��������������޷����к���������","-1");
        exit();
    }
    if(trim($title) == '')
    {
        ShowMsg('���ⲻ��Ϊ��', '-1');
        exit();
    }
	  //������7000ƪ�����Ƿ����ظ� start;
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
		  echo '��ֹ������ͬ���£�<a href="'.$artUrl.'" target="_blank">�鿴�ظ�����</a><br/>';
          //exit();
		  echo "�ظ����ݣ�".$world."<br/>";
		  echo "�뽲�˶��ظ����������޸�,�ٷ��ͣ�";
		  //break;
		  exit();
		  }
	   } */
	  //$endtime= microtime();
	  // echo "��ѯ������".$num."<br/>";
	   //echo "����".$ttime = $endtime - $stime;
	 //exit();
	 //������7000ƪ�����Ƿ����ظ� end;    
    //����body�ֶ��Զ�ժҪ���Զ���ȡ����ͼ��
	//$body=str_replace("http://vs001.htexam.com:7272/uploads","http://www.huatu.com/uploads",$body);//plg12.7.2
	$body=str_replace("http://192.168.11.220/uploads","http://www.huatu.com/uploads",$body);//plg12.7.2	
	$body=str_replace("https://u3.huatu.com/uploads/soft/","https://gd.huatu.com/z/go/u3/?u=",$body);
	$body=str_replace("http://u3.huatu.com/uploads/soft/","https://gd.huatu.com/z/go/u3/?u=",$body);
    $body = AnalyseHtmlBody($body,$description,$litpic,$keywords,'htmltext');
	
    //�Զ���ҳ
    if($sptype=='auto')
    {
        $body = SpLongBody($body,$spsize*1024,"#p#��ҳ����#e#");
    }

    //���������ӱ�����
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

    //����ͼƬ�ĵ����Զ�������
    if($litpic!='' && !preg_match("#p#", $flag))
    {
        $flag = ($flag=='' ? 'p' : $flag.',p');
    }
    if($redirecturl!='' && !preg_match("#j#", $flag))
    {
        $flag = ($flag=='' ? 'j' : $flag.',j');
    }
    
    //��ת��ַ���ĵ�ǿ��Ϊ��̬
    if(preg_match("#j#", $flag)) $ismake = -1;

    //�滻������ʱ���һ��·��
     $litpic = str_replace("/a/guangzhou/", 'https://gd.huatu.com/', $litpic);
    //���浽����
    $query = "INSERT INTO `#@__archives`(id,typeid,typeid2,sortrank,flag,ismake,channel,arcrank,click,money,title,shorttitle,
    color,writer,source,litpic,pubdate,senddate,mid,voteid,notpost,description,keywords,filename,dutyadmin,weight,theyear,theprovince,lastpost,scores,goodpost,badpost,article_province,article_city,article_area)
    VALUES ('$arcID','$typeid','$typeid2','$sortrank','$flag','$ismake','$channelid','$arcrank','$click','$money',
    '$title','$shorttitle','$color','$writer','$source','$litpic','$pubdate','$senddate',
    '$adminid','$voteid','$notpost','$description','$keywords','$filename','$adminid','$weight','$theyear','$theprovince','$lastpost','$scores','$goodpost','$badpost','$article_province','$article_city','$article_area');";

    if(!$dsql->ExecuteNoneQuery($query))
    {
        $gerr = $dsql->GetError();
        $dsql->ExecuteNoneQuery("DELETE FROM `#@__arctiny` WHERE id='$arcID'");
        ShowMsg("�����ݱ��浽���ݿ����� `#@__archives` ʱ����".str_replace('"','',$gerr),"javascript:;");
        exit();
    }

    //���浽���ӱ�
    $cts = $dsql->GetOne("SELECT addtable FROM `#@__channeltype` WHERE id='$channelid' ");
    $addtable = trim($cts['addtable']);
    if(empty($addtable))
    {
        $dsql->ExecuteNoneQuery("DELETE FROM `#@__archives` WHERE id='$arcID'");
        $dsql->ExecuteNoneQuery("DELETE FROM `#@__arctiny` WHERE id='$arcID'");
        ShowMsg("û�ҵ���ǰģ��[{$channelid}]��������Ϣ���޷���ɲ�������","javascript:;");
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
        ShowMsg("���ݱ��浽���ݿ⸽�ӱ� `{$addtable}` ʱ����".str_replace('"','',$gerr),"javascript:;");
        exit();
    }


	//���渽�ӵ���Ϣ
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
		$where_add .= " ,zkzdysj='$zkzdysj'" ;//׼��֤��ӡʱ��   ���
    }
    if(!empty($bscjcxsj)){
		$where_add .= " ,bscjcxsj='$bscjcxsj'" ;//���Գɼ���ѯʱ��   ���
    }
    if(!empty($mssj)){
		$where_add .= " ,mssj='$mssj'" ;//����ʱ��   ���
    }
    if(!empty($bsxm)){
        $where_add .= " ,bsxm='$bsxm'" ;//���� ���ɹ�
    }
    if(!empty($fdkcurl)){
        $where_add .= " ,fdkcurl='$fdkcurl'" ;//�����γ�URL ���ɹ�
    }
    if(!empty($tsjcurl)){
        $where_add .= " ,tsjcurl='$tsjcurl'" ;//ͼ��̲�URL ���ɹ�
    }
	if(!empty($where_add)){
	    $query_bq = "update dede_addonarticle set userip='$useip'".$where_add." where aid = '$arcID'";
		$dsql->ExecuteNoneQuery($query_bq);
	}

    $typidstring = "$typeid,";
    //����������� jiang
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
					ShowMsg("�����ݱ��浽���ݿ������ kaoshi_data_link ʱ����".$insertkaoshisql."/".str_replace('"','',$gerr),"javascript:;");
				}
		  }else{
			  
			  if($rilistid!=''){
				  
				    $selectsql = $dsql->GetOne("SELECT * FROM kaoshi_data_link WHERE wzaids='$rilistid'");
					//$addRow['body']=str_replace("http://www.htexam.com/uploads","http://vs001.huatu.com:7272/uploads",$addRow['body']);//plg12.7.2
					$wzbsgl=$selectsql['wzbsgl'];
					$wzmsgl=$selectsql['wzmsgl'];
					//$wzbsgl=$selectsql['wzbsgl'];
					
					$updatekaoshidatesql = "";
					if($rilistleixing == 'zwk'){ //ְλ��
						//$updatekaoshidatesql = 'update kaoshi_data_link set ';
					}elseif($rilistleixing == 'bm'){ //����
						
					}elseif($rilistleixing == 'bs'){ //����
						$bsid = "";
						if($wzbsgl==''){
							$bsid = $arcID;
						}else{
							$bsid = $wzbsgl.",".$arcID;
						}
						$updatekaoshidatesql = 'update kaoshi_data_link set wzbsgl = "'.$bsid.'",wzkssj="'.$rilistdatastr1.'" where wzaids = '.$rilistid;
						if(!$dsql->ExecuteNoneQuery($updatekaoshidatesql))
						{
							ShowMsg("���¸��ӱ� kaoshi_data_link  ʱ��������ԭ��","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ms'){ //����
						 $msid = "";
						if($wzmsgl==''){
							$msid = $arcID;
						}else{
							$msid = $wzmsgl.",".$arcID;
						}
						$updatekaoshidatesql = 'update kaoshi_data_link set wzmsgl = "'.$msid.'",wzmssj="'.$rilistdatastr1.'" where wzaids = '.$rilistid;
						if(!$dsql->ExecuteNoneQuery($updatekaoshidatesql))
						{
							ShowMsg("���¸��ӱ� kaoshi_data_link  ʱ��������ԭ��","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ly'){ //¼��
						
					}
				  
				  
			  }
			  
			  
		  }
		
		
	}
	
	$typidstring .= "11";


    //�ж��Ƿ�ƥ���˹ؼ��ʿ�ʼ
    include_once "inc/fxmysql_config.php";

    $mysqli_bj = mysqli_connect($beijing_cfg_dbhost,$beijing_cfg_dbuser,$beijing_cfg_dbpwd,$beijing_cfg_dbname);

    $akey_sql = "select id from common_key_keywords where '$keywords' like CONCAT('%',keywords,'%') and status = 1 and addtime > ".strtotime("-1 day");
    $query = mysqli_query($mysqli_bj,$akey_sql);
    $akey_ids_arr = [];
    while ($row = mysqli_fetch_assoc($query)){
        mysqli_query($mysqli_bj,"update common_key_keywords set status='2',aid='$arcID',updatetime=".time()." where id = '$row[id]'");
    }


    //�ж��Ƿ�ƥ���˹ؼ��ʽ���
	

	//�������ʱ���ӳ٣����
	if($pubdate > time()){
    $delay_article = true;
    $sql_delay = "insert into dede_article_delay(aid,pubdate,typeid,is_send,senddate) values('$arcID','$pubdate','$typeid','0','".time()."')";
    $dsql->ExecuteNoneQuery($sql_delay);
    }
	$jltime=time();
	//�������ɼ�¼
    $query = "INSERT INTO `#@__scjl`(aid,typeid,jltime) Values('$arcID','$typeid','$jltime')";
    if(!$dsql->ExecuteNoneQuery($query))
    {
        //ShowMsg("�����ݱ��浽���ɼ�¼ʱ����".str_replace('"','',$gerr),"javascript:;");
        //exit();
    }
    //����HTML
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
    //$artUrl = MakeArt($arcID,true,true,$isremote);//plg 150618 ���ɾ�̬ҳ����ڷ����ɹ��Ժ�
    if($artUrl=='')
    {
        $artUrl = $cfg_phpurl."/view.php?aid=$arcID";
    }
    ClearMyAddon($arcID, $title);
    //���سɹ���Ϣ <a href='$artUrl' target='_blank'><u>�鿴����</u></a>
    $msg = "<p>��ѡ����ĺ���������
    <a href='article_add.php?cid=$typeid'><u>������������</u></a>
    &nbsp;&nbsp;
    <a href='archives_do.php?aid=".$arcID."&dopost=editArchives'><u>��������</u></a>
    &nbsp;&nbsp;
    <a href='catalog_do.php?cid=$typeid&dopost=libqbkzdchives'><u>�ѷ������¹���</u></a>
    &nbsp;&nbsp;
    $backurl
	<a onclick='genxing()'><u>�������͸���Ŀ</u></a>
    &nbsp;&nbsp;
  </p>";
    if($delay_article) {//�ӳٷ���
        $msg = "<div style=\"line-height:36px;height:36px\">{$msg}</div>";
        $msg .= "<table width='80%' style='margin:10px 10px 15px 25px' id='tgtable' align='left'><tr><td style='height: 36px;font-size: 14px;'>������δ���ɣ��������ӳٷ���!</td></tr>\r\n";
        $msg .= "</table>";
    }else{
        $msg = "<p style='padding:0;'>{$msg}</p>".MakeHtmlplg();
        //������������
        if(!empty($fzAids)){
            $msg .= "<br />".MakeHtmlFz($fzAids);
        }
        $msg = "<p style=\"line-height:36px;height:36px\">{$msg}</p>".GetUpdateTest();
        
    }
	
	//ȡ����ӵ�ʱ���Զ���������ȥС����
	if($xcxflag){
	//	$msg .= "<br />".makexcxdata($fzAids,$arcID);		
	}
	

    $wintitle = "�ɹ��������£�";
    $wecome_info = "���¹���::��������";
    $win = new OxWindow();
    $win->AddTitle("�ɹ��������£�");
    $win->AddMsgItem($msg);
    $winform = $win->GetWindow("hand","&nbsp;",false);
    $win->Display();
	//��¼ʱ��
$pageendtime = microtime(); 
$starttime = explode(" ",$pagestartime); 
$endtime = explode(" ",$pageendtime); 
$totaltime = $endtime[0]-$starttime[0]+$endtime[1]-$starttime[1]; 
$timecost = sprintf("%s",$totaltime); 

echo "<p style='width:1000px'>ҳ������ʱ��: $timecost ��</p>
	
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
						if(data.indexOf('���������Ŀ�б����') != -1){
							//����
							var url = data.match(/���������Ŀ�б���£�<a href=([\s\S]*?)target='_blank'>�����Ŀ/)[1];
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
							alert('���³���С���ʹ�ú�̨��html���¹��ܣ�������ϵ����Ա');
						}
							
					}
				});
			}
			alert('������Ŀ�ɹ������ͳɹ�:'+successmsg+'������ʧ�ܣ�'+failmsg);
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
							//alert('������Ŀ�ɹ������ͳɹ�:'+url);
							falgs = '1';
						}
						if (response.status === 0) {
							//alert('���ͳ�С���ʹ�ú�̨���͹��ܻ�����ϵ����Ա');
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
	//ͬ���������̹� panlg20230323
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


//��������ȥС����
//��������
function makexcxdata($fzAids,$ID)
{

    $revalue = "<table width='80%' style='margin:10px 10px 15px 25px' id='tgtable' align='left'><tr><td style='color: #fff;height: 36px;font-size: 14px;'>���ڴ�������ȥС����</td></tr>\r\n";
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




//��������
function MakeHtmlFz($fzAids)
{

    $revalue = "<table width='80%' style='margin:10px 10px 15px 25px' id='tgtable' align='left'><tr><td style='color: #fff;height: 36px;font-size: 14px;'>�������������������£������ǰ��Ҫ��������������</td></tr>\r\n";
    foreach($fzAids as $arcID=>$typeid){
        $jumpUrl = "task_do_plg.php?aid={$arcID}&typeid={$typeid}&op=add";
        $revalue .= "<tr><td>\r\n<iframe name='stafrm' frameborder='0' id='stafrm' width='100%' height='270px' src='$jumpUrl'></iframe>\r\n</td></tr>\r\n";

    }
    $revalue .= "</table>";

    return $revalue;
}



//�������²��뵽����
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
            ShowMsg("�����ݱ��浽���ݿ����� `#@__archives` ʱ�������ơ�".str_replace('"','',$gerr),"javascript:;");
            continue;
        }


        if(!$dsql->ExecuteNoneQuery($query_add))
        {
            $gerr = $dsql->GetError();
            $dsql->ExecuteNoneQuery("Delete From `#@__archives` where id='$arcId'");
            $dsql->ExecuteNoneQuery("Delete From `#@__arctiny` where id='$arcId'");
            ShowMsg("���ݱ��浽���ݿ⸽�ӱ� `addonarticle` ʱ��������".str_replace('"','',$gerr),"javascript:;");
            continue;
        }else{
            $dsql->ExecuteNoneQuery($query_bq);
        }

        $returnAids[$arcId] = $val['typeid'];
		
		//�������id����ƴ��
		if($aids != "" )
			$aids .= ",";
		$aids .= $arcId;
		
		
		//���浽��������
		if(($val['bqzkxx']!='')&&($val['bqzkxx']=='676' or $val['bqzkxx']=='675')){
			$query_insertkaoshisql = str_replace("~~_arcid_~~",$arcId,$val['insertkaoshisql']);
			if(!$dsql->ExecuteNoneQuery($query_insertkaoshisql))
			{
				ShowMsg("�����ݱ��浽���ݿ������ kaoshi_data_link ʱ����".$query_insertkaoshisql."/".str_replace('"','',$gerr),"javascript:;");
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
					if($rilistleixing == 'zwk'){ //ְλ��
						//$updatekaoshidatesql = 'update kaoshi_data_link set ';
					}elseif($rilistleixing == 'bm'){ //����
						
					}elseif($rilistleixing == 'bs'){ //����
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
							ShowMsg("���¸��ӱ� kaoshi_data_link  ʱ��������ԭ��","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ms'){ //����
						 $msid = "";
						if($wzmsgl==''){
							$msid = $arcIdrilistid;
						}else{
							$msid = $wzmsgl.",".$arcIdrilistid;
						}
						$updatekaoshidatesql = 'update kaoshi_data_link set wzmsgl = "'.$msid.'",wzmssj="'.$rilistdatastr1.'" where wzaids = '.$val['rilistid'];
						if(!$dsql->ExecuteNoneQuery($updatekaoshidatesql))
						{
							ShowMsg("���¸��ӱ� kaoshi_data_link  ʱ��������ԭ��","javascript:;");
							//exit();
						}
						
					}elseif($rilistleixing == 'ly'){ //¼��
						
					}
				  
				  
			  }
			  
			  
		  }
		
		
    }
	
	//���浽������
	$linksql =  "INSERT INTO z_archiver_link(aid,aids) Values('$arcIDh','$aids')";
	if(!$dsql->ExecuteNoneQuery($linksql))
	{
		ShowMsg("�����ݱ��浽���ݿ������ z_archiver_link ʱ����".str_replace('"','',$gerr),"javascript:;");
		//exit();
	}

    return $returnAids;

}
?>