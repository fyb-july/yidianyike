<?php
    header('content-type:text/html;charset=utf-8;');
    $phonenum=$_POST['Username'];
    $password=$_POST['password'];
  
   //建立中文和数据库的链接
$conn=mysqli_connect('127.0.0.1','root','root','user');
   //执行sql语句
$sql="INSERT INTO `info` VALUES(null,'$phonenum','$password')";

$res=mysqli_query($conn,$sql);

//断开链接
if($res){
   //如果注册成功
   $arr = array('code'=>1,'un'=>$phonenum);    
}else{
   $arr = array('code'=>0,'msg'=>'猪tou,注册失败了呀');
}
echo json_encode($arr);
mysqli_close($conn);
?>