//动画
var Top=document.getElementsByClassName("ainimate-top")[0];
var Top1=document.getElementsByClassName("ainimate-top")[1];
var Top2=document.getElementsByClassName("ainimate-top")[2];

Top.children[0].onmouseover=function(){
    console.log(1)
    this.style.top='25px'
   this.style.opacity="0"
   animate(this,json=
    {
       top:18,
       opacity:100
   }
   ,function(){
       console.log(1)
   })
    
}
Top1.children[0].onmouseover=function(){
    console.log(1)
    this.style.top='25px'
   this.style.opacity="0"
   animate(this,json=
    {
       top:18,
       opacity:100
   }
   ,function(){
       console.log(1)
   })
    
}
Top2.children[0].onmouseover=function(){
    console.log(1)
    this.style.top='25px'
   this.style.opacity="0"
   animate(this,json=
    {
       top:18,
       opacity:100
   }
   ,function(){
       console.log(1)
   })
    
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
var arr=zhuce.children
console.log(arr)
// arr[0].onblur=function(){

//     var num=this.value
//     var xhr=new XMLHttpRequest()
//         xhr.open("GET",`../zhuce.php?p=${num}&w=111111`)
//         xhr.onload=function(){
//             console.log(xhr.responseText)
//         }
//         xhr.send()

// }
var num = 111;
var xhr=new XMLHttpRequest()
        xhr.open("GET",`../zhuce.php?p=${num}&w=111111`)
        xhr.onload=function(){
            console.log(xhr.responseText)
        }
        xhr.send()


