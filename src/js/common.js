/**
 * Created by Jasko on 5/9/16.
 */

$(document).ready(function(){
    var setting = {
        //初始化
        init : function(){
            this.setNav();
            this.setFull();
            this.vertical();
            this.maxFull();
            this.center();
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
            });
            //mobile 事件
            var btn = $(".nav-btn"),
                list = $(".nav-side>ul");
            btn.click(function(){
                list.slideToggle(500);
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
                $this.css({
                    "top":(box.height() - $this.height())/2
                });
            })
        },
        center : function(){
            $(".b-center").each(function(){
                var $this = $(this),
                    box = $this.parent();
                $this.css({
                    "top":(box.height() - $this.height())/2,
                    "left":(box.width() - $this.width())/2
                });
            })
        },
        //设置最大满屏
        maxFull : function(){
            $(".max-full").each(function(){
                $(this).css("max-height",$(window).height()-60);
            })
        }
    };

    //默认执行
    setting.init();
    //改变窗口执行
    $(window).resize(function(){
        setting.init();
    });
    //懒加载
    $("img.lazy").lazyload({
        effect:'fadeIn',
        threshold: 10, // 提前开始加载距离
        failurelimit : 2 // 提前加载图片张数

    });
});
