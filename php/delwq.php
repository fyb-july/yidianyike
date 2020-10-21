<?php
require('./model/_connect.php');
$id = $_REQUEST['id'];
//根据id删除数据
$sql = "DELETE FROM `cart` WHERE `product_id`=$id";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>