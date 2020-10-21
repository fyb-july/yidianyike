//需求分析
//动态获取数据渲染再蛋糕的页面上
//发送ajax请求到json中获取数据
 async function getData(){
  var data1 = await $.ajax({
        url:"../json/data.json",
        success:function(res){
           
        },
         cache:false,
    })
    //获取到数据
    //追加到页面上
    $.each(data1,(index,items)=>{
        $(".main-middle").append(`<div class="main-left">
        <a href=""><img src="${items.src}" alt=""></a>
        <p>${items.text}</p>
        <i>168元/磅</i>
        <span>预售下单送好礼</span>
        <i><a href="">加入购物车</a></i>
    </div>`

        )
    })
}
getData()
