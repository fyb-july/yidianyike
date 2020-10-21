<?php
require('./model/_connect.php');

$id = $_REQUEST['id'];
$type = $_REQUEST['type'];

$sql = "SELECT * FROM `cart` WHERE `product_id`='$id'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
$num = $row['product_num'];
$sum = $row['product_sum'];
$price=$row['product_price'];
if($type=='add'){
	$num = $num+1;
	$sum=$num*$price;
	$sql = "UPDATE `cart` SET `product_num`='$num', `product_sum`='$sum' WHERE `product_id`='$id'";
}else{
	
	$num = $num-1;
	$sum=$num*$price;
	if($num>0){
		$sql = "UPDATE `cart` SET `product_num`='$num',`product_sum`='$sum' WHERE `product_id`='$id'";
	}
}

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>