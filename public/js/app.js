$(document).on("scroll",function(){

    if($(document).scrollTop()>120){ 
        $(".logo_dinet a img").addClass("img-fixed");
    } else{
        $(".logo_dinet a img").removeClass("img-fixed");
    }

    if($(document).scrollTop()>120){ 
        $(".logo_dinet").addClass("logo_dinet_fixed");
    } else{
        $(".logo_dinet").removeClass("logo_dinet_fixed");
    }

    if($(document).scrollTop()>120){ 
        $("header .container-fluid").addClass("container-fluid-fixed");
    } else{
        $("header .container-fluid").removeClass("container-fluid-fixed");
    }

    if($(document).scrollTop()>120){ 
        $(".codigo_envio input").addClass("imput-fixed");
    } else{
        $(".codigo_envio input").removeClass("imput-fixed");
    }

    if($(document).scrollTop()>120){ 
        $(".codigo_envio span").addClass("span-fixed");
    } else{
        $(".codigo_envio span").removeClass("span-fixed");
    }
});

/*$(document).ready(function(){
  
    $("#filtrar").click(function(){
        $(".overlay").addClass("active");
        $(".filter").addClass("active");
        $('html, body').animate({
            scrollTop: $("#section-filter").offset().top
        }, 800);
    });


});*/