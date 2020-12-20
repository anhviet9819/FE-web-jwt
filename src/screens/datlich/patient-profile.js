// (function($){
//     'use strict'
//     $(document).ready(function(){
//         $(window).scroll(function(){
//             if($(window).scrollTop() >=150){
//                 $('.help-call').fadeIn('slow');
//             }
//             else{
//                 $('.help-call').fadeOut('slow');
//             }
//         });
//         $('.help-call .icons-top').on('click',function(){
//             $('html,body').animate({
//                 scrollTop: 0
//             },'slow');
//         })
//         $("#toggle-menu").on("click", function(){
//             $("#toggle-menu").toggleClass("opened");
//             $("#main-menu").toggleClass("in");
//             $("#black-screen").toggleClass("in");
//             $(".nav-mobile").toggleClass("out");
//         })
//         $("#black-screen").on("click", function(){
//             $("#toggle-menu").toggleClass("opened");
//             $("#main-menu").toggleClass("in");
//             $("#black-screen").toggleClass("in");
//             $(".nav-mobile").toggleClass("out");
//         })
//         $("header .m-menu ul li").on("click", function(){
//             $("#toggle-menu").toggleClass("opened");
//             $("#main-menu").toggleClass("in");
//             $("#black-screen").toggleClass("in");
//             $(".nav-mobile").toggleClass("out");
//         })
//         $('#section-info-9 .group-dashed').on('click',function(){
//             window.open('https://umc.medpro.com.vn/patient',"_self");
//         })
//         $('#section-info-9 .group.group-files .group-files-item .group-files-item-right .gfi-edit').on('click',function(){
//             window.open('https://umc.medpro.com.vn/update-patient-profile/1235779', "_self");
//         })
//         $('#section-info-9 .group.group-files .group-files-item .group-files-item-right .gfi-see-more').on('click',function(){
//             if($('#section-info-9 .group.group-files .group-files-item .group-files-item-left div:last-child').css("display")==="none"){
//                 $('#section-info-9 .group.group-files .group-files-item .group-files-item-left div:last-child').css("display", "block");
//                 $(this).html("Thu gọn");
//             }
//             else{
//                 $('#section-info-9 .group.group-files .group-files-item .group-files-item-left div:last-child').css("display", "none");
//                 $(this).html("Xem thêm");
//             }
//         })
//         $(".help-call .arrow-change").on('click',function(){
//             if($(".help-call .arrow-change i").hasClass("fas fa-angle-double-right")){
//                 $('.help-call').animate({right: '-100px'},'fast');
//                 $(".help-call .arrow-change i").removeClass("fas fa-angle-double-right");
//                 $(".help-call .arrow-change i").addClass("fas fa-angle-double-left");
//                 $(".help-call .arrow-change").attr("title", "Mở")
//                 $(this).toggleClass("open");
//             }
//             else{
//                 $(".help-call").animate({right: '5px'},'fast');
//                 $(".help-call .arrow-change i").removeClass("fas fa-angle-double-left");
//                 $(".help-call .arrow-change i").addClass("fas fa-angle-double-right");
//                 $(".help-call .arrow-change").attr("title", "close")
//                 $(this).toggleClass("open");
//             }
//         })
//         $(".gfi-delete").on("click", function(){
//             $(".modal .modal-header .modal-title").html("Thông báo");
//             $(".modal .modal-body").html("Bạn có chắc muốn xóa hồ sơ bệnh nhân này không?")
//             $(".modal .modal-footer .btn.btn-primary").html("Đồng ý");
//             $(".modal .modal-footer .btn.btn-secondary").html("HỦY");
//             $(".modal .modal-body span.see-more").css("display", "none");
//             $(".modal").modal('show');
//         })
//         $(".content-noti").on("click", function(){
//             $(this).addClass("old");
//             $(".modal .modal-header .modal-title").html($(this).find(".white-space").html());
//             $(".modal .modal-footer .btn.btn-primary").css("display", "none");
//             $(".modal .modal-footer .btn.btn-secondary").html("Đóng");
//             switch($(this).find(".white-space").html()){
//                 case "Tư vấn trực tuyến NHẬN BIẾT SỚM VIÊM CỘT SỐNG DÍNH KHỚP":
//                     $(".modal-body div").prepend("<span>Vào 15h ngày 24/7, BV ĐHYD TPHCM tổ chức chương trình tư vấn trực tuyến “Nhận biết sớm viêm cột sống dính khớp”. Kính mời Quý vị theo dõi tại Fanpage của BV: fb.com/benhviendaihocyduoc và xem bản phát lại trên kênh Youtube của Bệnh viện: https://www.youtube.com/channel/UCct2g5hB_fPavwUseYXG_6g</span>");
//                     $(".modal-body .see-more a").attr({'href': 'https://www.facebook.com/benhviendaihocyduoc','title': 'Tư vấn trực tuyến NHẬN BIẾT SỚM VIÊM CỘT SỐNG DÍNH KHỚP'});
//                     break;
//                 case "Kiểm soát lây nhiễm Covid-19":
//                     $(".modal-body div").prepend("<span>Nhằm bảo vệ sức khoẻ của người bệnh, nhân viên y tế và cộng đồng, Bệnh viện Đại học Y Dược TPHCM chủ động, tích cực triển khai đồng bộ các biện pháp phòng và kiểm soát lây nhiễm dịch bệnh Covid-19, đồng thời đề nghị tất cả đối tượng vào khuôn viên Bệnh viện thực hiện nghiêm túc các chỉ dẫn theo đường link này: http://www.bvdaihoc.com.vn/Home/ViewDetail/2489#maincontent</span>");
//                     $(".modal-body .see-more a").attr({'href': 'http://www.bvdaihoc.com.vn/Home/ViewDetail/2489#maincontent','title': 'Kiểm soát lây nhiễm Covid-19'});
//                     break;
//                 case "Bệnh viện Đại học Y Dược TPHCM thông báo":
//                     $(".modal-body div").prepend("<p>Để người bệnh an toàn khi đến khám chữa bệnh, Bệnh viện Đại học Y Dược TPHCM triển khai sàng lọc COVID-19 cho tất cả đối tượng vào khuôn viên Bệnh viện.<br><br>Mời Quý vị xem các biện pháp tăng cường phòng chống dịch của Bệnh viện tại link video: https://youtu.be/MAgTotCUQCc</p>");
//                     $(".modal-body .see-more a").attr({'href': 'https://youtu.be/MAgTotCUQCc','title': 'Bệnh viện Đại học Y Dược TPHCM thông báo'});
//                     break;
//                 case "Sống khỏe sẻ chia":
//                     $(".modal-body div").prepend("<span>[Sống khoẻ sẻ chia] Mời Quý vị xem chương trình tư vấn trực tuyến “Nhận biết sớm viêm cột sống dính khớp” trên kênh Youtube của Bệnh viện https://youtu.be/6-SSCLPCCKs</span>");
//                     $(".modal-body .see-more a").attr({'href': 'https://youtu.be/6-SSCLPCCKs','title': 'Sống khỏe để sẻ chia'});
//                     break;
//                 case "Tư vấn trực tuyến Viêm khớp vảy nến, những điều bạn chưa biết":
//                     $(".modal-body div").prepend("<span>Vào 15h ngày 21/08, BV ĐHYD TPHCM tổ chức chương trình tư vấn trực tuyến “Viêm khớp vảy nến, những điều bạn chưa biết”. Kính mời Quý vị theo dõi tại Fanpage của BV: fb.com/benhviendaihocyduoc và xem bản phát lại trên kênh Youtube của Bệnh viện:http://bit.ly/YouTubeBV</span>");
//                     $(".modal-body .see-more a").attr({'href': 'https://www.youtube.com/channel/UCct2g5hB_fPavwUseYXG_6g','title': 'Tư vấn trực tuyến Viêm khớp vảy nến, những điều bạn chưa biết'});
//                     break;
//             }
//             $(".modal").modal('show');
//         })
//         $(".check-all").on("click", function(){
//             $(".content-noti").addClass("old");
//             $(".bell-counter").css("display", "none");
//             $(".noti-counter").css("display", "none");
//         })
//         $(".modal .modal-footer .btn.btn-primary").on("click", function(){
//             $(".group-files-item").remove();
//             $(".group.group-files").append('<p style="width: 100%; text-align: center; font-style: italic; opacity: 0.5; font-size: 14px; margin-bottom: 0px;">Bạn chưa có hồ sơ bệnh nhân tại Bệnh viện Đại học Y Dược TP.HCM.</p>');
//             $(".modal").modal('hide');
//         })
//     })
// })(jQuery)