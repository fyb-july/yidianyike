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
        $(".all").css('display','none')
    }
})
$('.top-right>ul>li').click(function(){
    if($(this).index()==5){
        $(".all").css('display','block')
        $(".denglu")
        .removeClass('active')
        $('.denglu-bottom')
        .addClass('active')
        $('.denglu-bottom1')
        .removeClass('active')
    }
    if($(this).index()==6){
        $(".all").css('display','block')
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
//点击购物车的i变迁让选择单出现
$("#i").click(function(){
   
    $(".cart11").css('display','block')
 })

$(".xx").click(function(){
    
    $(".cart11").css('display','none')
})
var num=1;
$(".cartP").html(num)
$("#button").html(num*228)
$(".input1").click(function(){

    num=num-1
    console.log(num)
    $(".cartP").html(num)
    $("#button").html(num*228)
})
$(".input2").click(function(){
    num=num+1
    $(".cartP").html(num)
    $("#button").html(num*228)
})

//点击button进入购物车
//发送物品数据给后端后端根据数据随机生成页面在shopping上

$("#button").click(function(){
    $(".cart-2").css("display",'block')
    $(".cart11").css("display","none")
    $(".count").html($('.cartP').html())
    $.ajax({
        url:"http://localhost/dianke/php/addwq.php",
        data:{
            id:"3",
            name:"豆豆西施",
            price:'228元',
            img:"../imges/shopping10.jpg",
            num:$('.cartP').html(),
            sum:$("#button").html(),
            sx:$('.cartP1').html()
        },
        success:function(res){
        },
        dataType:'JSON',

    })
})
//点击进入购物车
$("#carT").click(function(){
    location.href="../pages/shopping.html"
})
function show(){
    $.ajax({
        url:"http://localhost/dianke/php/showlist.php",
        success:function(res){
            if(res.code){
                var arr=res.data;
                if(arr.length){
                    $('table').show();
                    $(".shopping-nav").hide();
                    $("tbody").empty()
                    $.each(arr,function(index,item){
                        $('tbody').append(`<tr id="${item.product_id}">
                            
                            <td>
                            <img src="${item.product_img}" alt="">
                                ${item.product_name}
                            </td>
                            <td>
                                ${item.product_sx}
                            </td>
                            <td>
                            
                            ${item.product_price}
                            </td>
                            <td>
                            <span class="add">+</span>
                            <span class="numb">${item.product_num}</span>
                            <span class="noadd">-</span>
                            </td>
                            <td>
                                ${item.product_sum}
                            </td>
                            <td class="del">删除</td>
                        </tr>`)
                    })
                }else{
                    $('table').hide();
                    $(".shopping-nav").show();
                }
            }
        },
        dataType:'JSON',
        cache:"false",
    })
}
show()

//操作cart中的表格，点击减的时候数量减一，点击+的时候数量加1，点击删除的时候
//哪一行消失

$("tbody").click(function(e){
    var target=e.target;
    if((target.className=="add")||(target.className=="noadd")){
        //点击增加增加一个商品，点击减少减少一个商品
        $.ajax({
            url:'http://localhost/dianke/php/updatewq.php',
            data:{
                type:target.className,
                id:$(target).parents("tr").attr("id")
            },
            success:function(res){
                if(res.code){
                    show()
                }
            },
            dataType:'json'
        })

    }else if(target.className=="del"){
        $(target).parents("tr").hide()
        //dianji删除按钮删除一个商品
        $.ajax({
            url:'http://localhost/dianke/php/delwq.php',
            data:{
                id:$(target).parents('tr').attr('id')
            },
            success:function(res){
                if(res.code){
                    show()
                }
            },
            dataType:"json"
        })
    }
    
})
$('.xxx').click(function(){
    $('.cart-2').css('display','none')
})
//点击继续购物就消失
//点击去购物车就跳到购物车
$('#button2').click(function(){
    $('.cart-2').css('display','none')
})

$('#button3').click(function(){
    location.href="../pages/shopping.html"

})
//点击i购物车表出现

$("#ii").mouseenter(function(){
    $("#icon1").show()
    
})
 $("#ii").mouseout(function(){
     $("#icon1").hide()
 })
 $("#ii").click(function(){
   
    $(".cart11").css('display','block')
 })

 