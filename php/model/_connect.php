<?php

header('content-type:text/html;charset=utf8');

$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "shop";

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

?>