//鼠标划入a给字体变色
$(".top-middle>ul>li>a").mouseover(function(){
    
    this.style.color="red";
    this.style.borderBottom="red 2px solid";
    $(".top-middle>ul>li>a").mouseout(function(){
        this.style.color=null;
        this.style.borderBottom=null;
    })
})
//点击登录或者注册显示相符合的页面
$(".denglu>div>ul>li").click(function(){
   
    $(this)
    .addClass("active")
    .siblings()
    .removeClass('active')
    if($(this).index()==0){
        $('.denglu-bottom')
        .addClass('active')
        $('.denglu-bottom1')
        .removeClass('active')
    }
    if($(this).index()==2){
        
        $('.denglu-bottom1')
        .addClass('active')
        $('.denglu-bottom')
        .removeClass('active')
    }
    if($(this).index()==3){
        $(".denglu")
        .addClass("active")
    }
})
$('.top-right>ul>li').click(function(){
    if($(this).index()==5){
        $(".denglu")
        .removeClass('active')
        $('.denglu-bottom')
        .addClass('active')
        $('.denglu-bottom1')
        .removeClass('active')
        

    }
    if($(this).index()==6){
        $(".denglu")
        .removeClass('active')
        $('.denglu-bottom1')
        .addClass('active')
        $('.denglu-bottom')
        .removeClass('active')
        


    }
    
})


$('.top-middle>ul>li>ol').mouseover(function(){
    $(this)
    .children()
    .siblings()
    .addClass("active")
    $('.top-middle>ul>li>ol').mouseout(function(){
        $(this)
        .children()
        .siblings()
        .removeClass("active")
    
    })  
}) 
//数据存储
//注册页面的数据存储
//数据分析
/*
    1用户在input中输入注册信息
    2获取用户的信息存入的数据库
    3返回注册成功的消息
    

*/
//获取注册里面的input的value值
$('.denglu-bottom1>input')

 