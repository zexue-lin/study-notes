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

  // 检查是否有 mobile 参数传递
  if (isset($_GET['mobile'])) {
    $mobile = $_GET['mobile'];

    // 使用预处理语句进行查询
    $stmt = $conn->prepare("SELECT * FROM 2023znqlm WHERE mobile = :mobile");
    $stmt->bindParam(':mobile', $mobile);
    $stmt->execute();

    // 获取查询结果
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
      // 查询成功，将结果返回给前端
      $response = array('success' => true, 'data' => $result);
      echo json_encode($response);
    } else {
      // 查询无结果
      $response = array('success' => false, 'data' => 'No data found');
      echo json_encode($response);
    }
  } else {
    // 缺少 mobile 参数
    $response = array('success' => false, 'data' => 'Missing mobile parameter');
    echo json_encode($response);
  }
} catch (PDOException $e) {
  // 连接或查询失败
  $response = array('success' => false, 'data' => 'Error: ' . $e->getMessage());
  echo json_encode($response);
}
