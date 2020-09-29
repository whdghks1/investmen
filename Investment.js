//창이 클때
$(document).ready(function(){//창이 준비가 됫을때 .bhide .bbox .v2 를 숨긴다 display:none .v1을 보여준다 display:block
    $(".bhide").hide();
    $(".bbox").hide();
    $(".v1").show();
    $(".v2").hide();
    $(".menu2 > .sbox").mouseenter(function(){//마우스가 .sbox 안에 들어갔을때 .bhide .bbox .v2 를 보여준다 display:block .v1을 숨긴다 display:none
        $(".bhide").show();
        $(".bbox").show();
        $(".v2").show();
        $(".v1").hide();
    });
    $(".menu2").mouseleave(function(){//마우스가 .menu2를 떠낫을 때 .bhide .bbox .v2 를 숨긴다 display:none .v1을 보여준다 display:block
        $(".bhide").hide();
        $(".bbox").hide();
        $(".v1").show();
        $(".v2").hide(); 
    });
    //창이 작아 졋을때
    $("#m1").show();//#m1을 보여준다 display:block
    $("#m2").hide();//#m2를 숨긴다 display:none
    $(".mback").hide();//.mback를 숨긴다display:none
    $("#mheader_img").css("background-color","");//이미지의 배경색을 지정하지 않는다
    $("#m1").click(function(){//#m1 을 눌렀을때
        $("#m1").hide();//#m1을 숨긴다 display:none
        $("#m2").show();//#m2를 보여준다 display:block
        $(".mback").show();//.mback를 보여준다display:block
        $("#mheader_img").css("background-color","rgb(36, 49, 58)");//이미지의 배경색을 rgb(36, 49, 58)로 지정한다
    });
    $("#m2").click(function(){//#m2를 눌렀을때
        $("#m1").show();//#m1을 보여준다 display:block
        $("#m2").hide();//#m2를 숨긴다 display:none
        $(".mback").hide();//.mback를 숨긴다display:none
        $("#mheader_img").css("background-color","");//이미지의 배경색을 지정하지 않는다
    });
    $(".menu1-2>a").click(function(){//Investment 를 클릭 했을때 hide를 추가한다 div 안에
        $(this).next("div").toggleClass("hide");
    });
    $("#mheader_img>a").click(function(){//이미지를 눌렀을 때 mmenu를 div안에 추가한다
        $(this).next("div").toggleClass("mmenu");
    });
});