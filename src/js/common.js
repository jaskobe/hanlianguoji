/**
 * Created by Jasko on 5/9/16.
 */


$(function(){

    var setting = {
        //初始化
        init : function(){
            this.setNav();
            this.setFull();
            this.vertical();
        },
        //设置导航
        setNav : function(){
            var wh = $(window).height();
            var side = $(".nav-side");
            side.height(wh);
            //导航点击事件
            var nav = side.find("li>a");
            nav.click(function(){
                $(this).addClass("nav-active").parent().siblings("").find("a").removeClass("nav-active");
            })
        },
        //设置全屏
        setFull : function(){
            $(".full-page").each(function(){
                $(this).height($(window).height());
            })
        },
        //设置垂直居中
        vertical : function(){
            $(".v-center").each(function(){
                var $this = $(this),
                    box = $this.parent();
                $this.css("margin-top",(box.height() - $this.height())/2);
            })
        }
    };

    //默认执行
    setting.init();

    //改变窗口执行
    $(window).resize(function(){
        setting.init();
    });

});