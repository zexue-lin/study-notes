<?php

include_once '../include/common.inc.php';
require_once(DEDEINC . '/arc.archives.class.php');
error_reporting(E_ALL);
header("Content-type:text/html;charset=gbk");
set_time_limit(0);



$keywordsArr = ['是自2015年全国深化公安改革以来', '辅警管理改革中推出的又一项重要举措', '南方都市报'];

$likeArr = [];
foreach ($keywordsArr as $v) {
  $vArr = explode(',', $v);
  $likeAndArr = [];
  foreach ($vArr as $vv) {
    //$likeArr[] = ' arc.title like "%'.$vv.'%" ';
    //$likeArr[] = ' arc.keywords like "%'.$vv.'%" ';
    //$likeArr[] = ' arc.description like "%'.$vv.'%" ';
    $likeArr[] = ' addon.body like "%' . $vv . '%" ';
    //$likeAndArr[] = ' title like "%'.$vv.'%" ';
    //$likeAndArr[] = ' body like "%'.$vv.'%" ';
  }
}

$likeStr = implode(' or ', $likeArr);

$total = 100000;

$delCount = 0;

if ($begin == 0) {
  $sql = "select  id as minid from dede_archives    limit 1 "; //WHERE pubdate>=1577808000  
  $minarr = $dsql->GetOne($sql);
  $begin = $minarr['minid'];
  file_put_contents('delarticle11/delArticleAll.txt', '', FILE_APPEND);
}
$end = $begin + 1000;
//if($end>1552267) exit('结束');



$rows2 = [];
//$sql = "select addon.aid,a.uname,arc.*,at.namerule,at.typedir,at.moresite,at.siteurl,at.sitepath from dede_archives arc left join dede_arctype at on at.id = arc.typeid left join dede_addonarticle addon on arc.id = addon.aid left join dede_admin a on a.id = arc.mid where 1=1 and ($likeStr) and arc.id>=$begin  and  arc.id <  $end";

$sql = "select addon.aid,a.uname,arc.*,at.namerule,at.typedir,at.moresite,at.siteurl,at.sitepath from dede_archives arc left join dede_arctype at on at.id = arc.typeid left join dede_addonarticle addon on arc.id = addon.aid left join dede_admin a on a.id = arc.mid where writer='南方都市报' or source='南方都市报' ";


$dsql->Execute('me', $sql);
$numaaa = 0;
while ($row = $dsql->GetArray()) {
  $rows2[] = $row;
  $aaid = $row['aid'];
  echo $aaid . "\r\n";
  $numaaa++;
  file_put_contents('delarticle11/delArticleAll.txt', $aaid . ",", FILE_APPEND);
}


$sql = "select  max(id) as maxid  from dede_arctiny ";
$maxarr = $dsql->GetOne($sql);
if ($end > $maxarr['maxid']) { //
  $limit = $limit + 1;
  exit('没有符合条件的文章');
}


if (empty($rows2)) {

  exit('over');
}

foreach ($rows2 as $row) {

  $arcurl = GetFileUrl($row['id'], $row['typeid'], $row['senddate'], $row['title'], $row['ismake'], $row['arcrank'], $row['namerule'], $row['typedir'], $row['money'], $row['filename'], $row['moresite'], $row['siteurl'], $row['sitepath']);
  $aid = $row['aid'];
  $htmlfile = GetFileName($row['id'], $row['typeid'], $row['senddate'], $row['title'], $row['ismake'], $row['arcrank'], $row['namerule'], $row['typedir'], $row['money'], $row['filename']);

  //TODO 删除文章
  $dsql->ExecuteNoneQuery("Delete From `dede_archives` where id='$aid'");
  $dsql->ExecuteNoneQuery("Delete From `dede_arctiny` where id='$aid'");
  $dsql->ExecuteNoneQuery("Delete From `dede_addonarticle` where aid='$aid'");
  echo $delFilePath = ".." . $htmlfile;
  if (file_exists($delFilePath)) {
    unlink($delFilePath);
  }
  file_put_contents('delarticle11/arcurl.txt', $arcurl . "\r\n", FILE_APPEND);


  $delCount++;
}
$dsql->FreeResult('me');





$dsql->Close(true);
echo ($delCount);
echo "完成";
echo "<br />";
    //echo($bmRow['province']);
