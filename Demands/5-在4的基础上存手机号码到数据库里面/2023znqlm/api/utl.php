<?php
// 连接数据库
$servername = "172.23.0.141";
$username = "gd";
$password = "huatu123465";
$dbname = "gdhuatu";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // 设置 PDO 错误模式为异常
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // 接收前端发送的手机号
  if (isset($_GET['mobile'])) {
    $mobile = $_GET['mobile'];

    // 如果存在 yuyue_id 则使用传递的值，否则设为 1113777
    $yuyue_id = isset($_GET['yuyue_id']) ? $_GET['yuyue_id'] : 1113777;

    // 如果存在 wuliao_id 则使用传递的值，否则设为 200008
    $wuliao_id = isset($_GET['wuliao_id']) ? $_GET['wuliao_id'] : 200008;

    // 接收前端发送的姓名
    $name = $_GET['name'];

    // 使用预处理语句插入数据到数据库
    $stmt = $conn->prepare("INSERT INTO 2023znqlm (mobile, yuyue_id, wuliao_id, name) VALUES (:mobile, :yuyue_id, :wuliao_id, :name)");
    $stmt->bindParam(':mobile', $mobile);
    $stmt->bindParam(':yuyue_id', $yuyue_id);
    $stmt->bindParam(':wuliao_id', $wuliao_id);
    $stmt->bindParam(':name', $name);

    if ($stmt->execute()) {
      $response = array('success' => true);
      echo json_encode($response);
    } else {
      $response = array('success' => false);
      echo json_encode($response);
    }
  }
} catch (PDOException $e) {
  echo "连接失败: " . $e->getMessage();
}
