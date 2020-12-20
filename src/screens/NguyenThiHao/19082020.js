(function($){
    'use strict'
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() >=150){
                $('.help-call').fadeIn('slow');
            }
            else{
                $('.help-call').fadeOut('slow');
            }
        });
        $('.help-call .icons-top').on('click',function(){
            $('html,body').animate({
                scrollTop: 0
            },'slow');
        })
    })
    $('#section-info-9 .group-dashed').on('click',function(){
        window.open('https://umc.medpro.com.vn/patient',"_self");
    })
    $('#section-info-9 .group.group-files .group-files-item .group-files-item-right .gfi-edit').on('click',function(){
        window.open('https://umc.medpro.com.vn/update-patient-profile/1235779', "_self");
    })
    $('#section-info-9 .group.group-files .group-files-item .group-files-item-right .gfi-see-more').on('click',function(){
        if($('#section-info-9 .group.group-files .group-files-item .group-files-item-left div:last-child').css("display")==="none"){
            $('#section-info-9 .group.group-files .group-files-item .group-files-item-left div:last-child').css("display", "block");
            $(this).html("Thu gọn");
        }
        else{
            $('#section-info-9 .group.group-files .group-files-item .group-files-item-left div:last-child').css("display", "none");
            $(this).html("Xem thêm");
        }
    })
    $(".help-call .arrow-change").on('click',function(){
        if($(".help-call .arrow-change i").hasClass("fas fa-angle-double-right")){
            $('.help-call').animate({right: '-100px'},'fast');
            $(".help-call .arrow-change i").removeClass("fas fa-angle-double-right");
            $(".help-call .arrow-change i").addClass("fas fa-angle-double-left");
            $(this).removeClass("arrow-change");
            $(this).addClass("arrow-change open");
        }
        else{
            $(".help-call").animate({right: '5px'},'fast');
            $(".help-call .arrow-change i").removeClass("fas fa-angle-double-left");
            $(".help-call .arrow-change i").addClass("fas fa-angle-double-right");
            $(this).removeClass("arrow-change open");
            $(this).addClass("arrow-change");
        }
    })
    
})(jQuery)