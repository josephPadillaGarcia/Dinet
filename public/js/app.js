$(document).on("scroll", function () {

    if ($(document).scrollTop() > 120) {
        $(".logo_dinet a img").addClass("img-fixed");
    } else {
        $(".logo_dinet a img").removeClass("img-fixed");
    }

    if ($(document).scrollTop() > 120) {
        $(".logo_dinet").addClass("logo_dinet_fixed");
    } else {
        $(".logo_dinet").removeClass("logo_dinet_fixed");
    }

    if ($(document).scrollTop() > 120) {
        $("header .container-fluid").addClass("container-fluid-fixed");
    } else {
        $("header .container-fluid").removeClass("container-fluid-fixed");
    }

    if ($(document).scrollTop() > 120) {
        $(".codigo_envio input").addClass("imput-fixed");
    } else {
        $(".codigo_envio input").removeClass("imput-fixed");
    }

    if ($(document).scrollTop() > 120) {
        $(".codigo_envio span").addClass("span-fixed");
    } else {
        $(".codigo_envio span").removeClass("span-fixed");
    }

    if ($(document).scrollTop() > 120) {
        $(".collapse .navbar-nav .code-send").removeClass("hiden");
    } else {
        $(".collapse .navbar-nav .code-send").addClass("hiden");
    }
});

$('.carousel_clientes').owlCarousel({
    loop: true,
    lazyLoad: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

$('.carousel_saluciones').owlCarousel({
    loop: true,
    lazyLoad: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('ul.navbar-nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(function () {
    $('.icon-drop').click(function(){
       //$('.menu-hover').slideToggle("slow");  
       if($("#menu-mobil").hasClass("dis-none")){
        $("#menu-mobil").removeClass("dis-none");
        $("#menu-mobil").addClass("dis-block");
       } else{
        $("#menu-mobil").removeClass("dis-block");
        $("#menu-mobil").addClass("dis-none");
       }
       /*if($("#menu-mobil").hasClass("menu-hover")){
        $("#menu-mobil").addClass("dis-block");
       } else{
        if($("#menu-mobil").hasClass("dis-block")){
            $("#menu-mobil").removeClass("dis-block");
        }
       }*/
    });    
});


$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });
});
