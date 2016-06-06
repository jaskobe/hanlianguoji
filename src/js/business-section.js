/**
 * Created by Jasko on 6/5/16.
 */
$(function(){
    var bar = $("div.product-bar"),
        proTitle = $(".product-title"),
        proTitleSub = $(".product-sub-title"),
        proTxt = $(".product-txt"),
        bgImg = $(".bp-img");//底部图片盒子
    bar.click(function(){
        var $this = $(this),
            bar = $this.find(".bar-txt").html();
        $.post(
            url, //接口
            //{bar:bar},//传点击的选项值.值为每个选项的文字
            function(data){
                proTitle.html(data.title);
                proTitleSub.html(data.subTitle);
                proTxt.html(data.infoText);
                //返回标题,副标题,内容
                bgImg.html();
                //返回图片第一页内容
            }
        )
    });

    //翻页
    var page = 1,
        pre = $(".page-pre"),
        next = $(".page-next");
    next.click(function(){
        page++;
        $.post(
            url,
            {page:page},
            function(data){
                bgImg.html();//填充下一页内容
                pre.removeClass("disabled");
            }
        )
    });
    pre.click(function(){
        if(page!=1){
            page--;
            $.post(
                url,
                {page:page},
                function(data){
                    bgImg.html();
                }
            )
        }
    })
});