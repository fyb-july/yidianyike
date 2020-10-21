<?php

require('./connect.php');

//创建数据库
$sql = "CREATE DATABASE shop";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据库创建成功";
}else{
	echo "数据库创建失败";
}

?>