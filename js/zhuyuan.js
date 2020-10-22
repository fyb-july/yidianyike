//动画
var Top=document.getElementsByClassName("ainimate-top")[0];
var Top1=document.getElementsByClassName("ainimate-top")[1];
var Top2=document.getElementsByClassName("ainimate-top")[2];
Top.children[0].onmouseover=function(){
    this.style.top='25px'
   this.style.opacity="0"
   animate(this,json=
    {
       top:18,
       opacity:100
   }
   ,function(){
   })
}
Top1.children[0].onmouseover=function(){
    
    this.style.top='25px'
   this.style.opacity="0"
   animate(this,json=
    {
       top:18,
       opacity:100
   }
   ,function(){
   })
}
Top2.children[0].onmouseover=function(){
    this.style.top='25px'
   this.style.opacity="0"
   animate(this,json=
    {
       top:18,
       opacity:100
   }
   ,function(){
   })
}

var  num =0;

var shop=document.getElementById("i");
var count=document.getElementsByClassName("count")[0];
    count.innerHTML=num;
    shop.onclick=function(){
        num++;
        count.innerHTML=num;
    }
//需求分析
/*
    1，点击登录注册登录注册出现同时防点击页面也出现
        点击城市出现可切换的城市
    2，点击城市以后两个都消失
*/
var All=document.querySelector(".all")
     
var city1=document.getElementsByClassName("city1")[0]
 var city=document.getElementsByClassName("city")[0]
 city1.children[2].onclick=function(e){
    e = e||window.event;
   All.style.display="none";
   city1.style.display="none";
   e.stopPropagation?e.stopPropagation():e.cancelbubble=false;
}
city1.children[3].onclick=function(e){
    e = e||window.event;
   All.style.display="none";
   city1.style.display="none";
   e.stopPropagation?e.stopPropagation():e.cancelbubble=false;
}
city.onclick=function(){
    city1.style.display="block";
    All.style.display="block";

}
function postSend(url,cb,params){
    // 1 创建ajax对象
    var xhr = new XMLHttpRequest();
    // 2 配置请求信息
    xhr.open('POST',url);
    // 3 接收响应
    xhr.onload = function(){
        // 调用函数cb的时候传入实参xhr.responseText,所以函数cb需要有一个形参接收
        cb(xhr.responseText)
        console.log(xhr.responseText)
    }
    // 4-0 设置请求头
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    // 4-1 发送请求
    xhr.send(params)

}
//登录页面数据设计
//用post方法讲获取到的数据发送到php
//php将数据在数据库中查讯若是有就登录成功，并且跳到浏览器页面
//将用户名渲染到某人的购物车
var login=document.getElementsByClassName("denglu-bottom")[0];
var p = document.querySelector('.iswrong');
    login.children[4].onclick=function(){
       
        var Usernume=login.children[0].value;
        var password=login.children[1].value;
      
        postSend('../php/login.php',function(data){
            // 3 获取login.php返回的结果,来进行下一步
            // console.log(data);
            data = JSON.parse(data);
            // 4 如果登陆成功,跳转购物车页面
            if(data.code==1){
                location.href="./shopping.html";
                // 方法一:在登录成功以后,设置cookie
                setCookie('name',data.un);
            //     // 方法二:在登录成功以后,设置本地存储
            //     localStorage.setItem('name',data.un)
            }else{
                p.innerHTML = data.msg;
            }
        },`Username=${Usernume}&password=${password}`)
      
    }
//数据存储
//注册页面的数据存储
//数据分析
/*
    1用户在input中输入注册信息
    2获取用户的信息存入的数据库
    3返回注册成功的消息
*/
//获取注册里面的input的value值

var zhuce=document.getElementsByClassName("denglu-bottom1")[0];
var zp=document.getElementsByClassName("zi")[0];
var arr=zhuce.children;
var Vc=rand(1000,9999);

//随机产生一个随机数加入到span中
var vImg=document.getElementsByClassName("limg")[0];
    
    vImg.innerHTML=Vc;
    
arr[5].onclick=function(){
    var ppp=arr[3].value;
    var num11=arr[1].value;
    var num=arr[0].value;
     var xhr=new XMLHttpRequest()
     if(Vc==num11){
         postSend('../php/zhuce.php',function(data){
        // 3 获取zhuce.php返回的结果,来进行下一步
        data = JSON.parse(data);
        // 4 如果登陆成功,跳转购物车页面
        if(data.code==1){
            location.href="./shopping.html";
            // 方法一:在登录成功以后,设置cookie
            setCookie('name',data.un);
        //     // 方法二:在登录成功以后,设置本地存储
        //     localStorage.setItem('name',data.un)
        }else{
            zp.innerHTML = data.msg;
        }
    },`Username=${num}&password=${ppp}`)
    }else{
        zp.innerHTML="验证码错误";
    }
}
//需求分析
// 鼠标划入i中a出现
  var i=document.getElementById("i");
  var Icon=document.querySelector("#icon");
    i.onmouseenter=function(){
        Icon.style.display="block";
        i.onmouseleave=function(){
            Icon.style.display="none";
        }
    }

//获取当时的时间距离双十一的时间差
//利用定时器渲染在页面上
setInterval(function(){
    var now=new Date()
var time=new Date(2020,10,11)
var time1 =now.getTime()
var tian1=document.getElementsByClassName("tian")[0]
var shi1=document.getElementsByClassName("shi")[0]
var fen1=document.getElementsByClassName("fen")[0]
var miao1=document.getElementsByClassName("miaoo")[0]
time0=time-time1
tian=parseInt(time0/1000/24/60/60)
shi=parseInt((time0-(tian*1000*24*60*60))/60/1000/60)
fen=parseInt((time0-tian*1000*24*60*60-shi*60*60*1000)/1000/60)
miao=parseInt((time0-tian*1000*24*60*60-shi*60*60*1000-fen*60*1000)/1000)
tian1.innerHTML=tian
shi1.innerHTML=shi
fen1.innerHTML=fen
miao1.innerHTML=miao
},1000) 
//鼠标划入图片变大
   var ani=document.getElementsByClassName("ani")
   ani[1].onmouseenter=function(){
      
       animate(ani[1],json={
           width:250,
           height:250,
       },function(){

       })
   }
   ani[1].onmouseleave=function(){
    animate(ani[1],json={
        width:220,
        height:220,
    },function(){

    })

   }
   ani[0].onmouseenter=function(){
      
    animate(ani[0],json={
        width:250,
        height:250,
    },function(){

    })
}
ani[0].onmouseleave=function(){
 animate(ani[0],json={
     width:220,
     height:220,
 },function(){

 })

}
ani[2].onmouseenter=function(){
      
    animate(ani[2],json={
        width:250,
        height:250,
    },function(){

    })
}
ani[2].onmouseleave=function(){
 animate(ani[2],json={
     width:220,
     height:220,
 },function(){

 })

}

