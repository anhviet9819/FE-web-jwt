(function($) {
    'use strict'
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 150) {
                $('.help-call').fadeIn('slow');
            } else {
                $('.help-call').fadeOut('slow');
            }
        });
        $('.help-call .icons-top').on('click', function() {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
        })
        $("#toggle-menu").on("click", function() {
            $("#toggle-menu").toggleClass("opened");
            $("#main-menu").toggleClass("in");
            $("#black-screen").toggleClass("in");
            $(".nav-mobile").toggleClass("out");
        })
        $("#black-screen").on("click", function() {
            $("#toggle-menu").toggleClass("opened");
            $("#main-menu").toggleClass("in");
            $("#black-screen").toggleClass("in");
            $(".nav-mobile").toggleClass("out");
        })
        $("header .m-menu ul li").on("click", function() {
            $("#toggle-menu").toggleClass("opened");
            $("#main-menu").toggleClass("in");
            $("#black-screen").toggleClass("in");
            $(".nav-mobile").toggleClass("out");
        })
        $(".help-call .arrow-change").on('click', function() {
            if ($(".help-call .arrow-change i").hasClass("fas fa-angle-double-right")) {
                $('.help-call').animate({ right: '-100px' }, 'fast');
                $(".help-call .arrow-change i").removeClass("fas fa-angle-double-right");
                $(".help-call .arrow-change i").addClass("fas fa-angle-double-left");
                $(".help-call .arrow-change").attr("title", "Mở")
                $(this).toggleClass("open");
            } else {
                $(".help-call").animate({ right: '5px' }, 'fast');
                $(".help-call .arrow-change i").removeClass("fas fa-angle-double-left");
                $(".help-call .arrow-change i").addClass("fas fa-angle-double-right");
                $(".help-call .arrow-change").attr("title", "close")
                $(this).toggleClass("open");
            }
        })

        $('.list-number-tab li .number').on('click', function() {
            var num = $(this).find("span").html();
            $(this).parentsUntil("ol").parent().find(".active").removeClass("active");
            $("#demo").carousel(num - 1);
            $(this).parent().addClass("active");

        })
        $('.list-number-tab li .content .title').on('click', function() {
                var num = $(this).parentsUntil("ol").find(".number").find("span").html();
                $(this).parentsUntil("ol").parent().find(".active").removeClass("active");
                $("#demo").carousel(num - 1);
                $(this).parentsUntil("ol").addClass("active");
            })
            /*$(".carousel-indicators li").on('click', function(){
                $(".list-number-tab").find(".active").removeClass("active");
                $(".list-number-tab").find()
            })*/
        $(function() {
            var a = $('.list-number-tab li').find(".active").find(".number").find("span").html();
            var b = $(".carousel-inner").find(".active").index() + 1;
            if (a != b) {
                $("#demo").carousel(a - 1);
            }
        })
    })
})(jQuery)