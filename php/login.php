<?php
        header('content-type:text/html;charset=utf-8;');
         $uname=$_POST["Username"];
         
         $upass=$_POST["password"];
         $conn=mysqli_connect("127.0.0.1","root","root","user");
         //$sql="SELECT * FROM `info` WHERE `username`='$uname' AND `password`='$upass'";
         $sql = "SELECT * FROM `info` WHERE `usename`='$uname' AND `password`='$upass'";
         $res= mysqli_query($conn,$sql);
         $row= mysqli_fetch_assoc($res);
         mysqli_close($conn);
         if($row){
            //如果登录成功
            $arr = array('code'=>1,'un'=>$uname);    
        }else{
            $arr = array('code'=>0,'msg'=>'猪头，你的用户名或者密码错了喔');
        }
        
       echo json_encode($arr);
?>