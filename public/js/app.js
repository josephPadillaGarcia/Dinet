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

let num_envios = document.getElementById('numero_envios');
let num_unidades = document.getElementById('numero_unidades');
let num_almacenes = document.getElementById('numero_almacenes');

let cantidad = 256000;
let cantidad_unidades = 125;
let cantidad_alamcenes = 23;

let tiempo=setInterval(()=>{
    cantidad+=1;
    num_envios.textContent=cantidad;

    if(cantidad === 256156){
        clearInterval(tiempo);
    }

}, 50);

let tiempo_unidad=setInterval(()=>{
    cantidad_unidades+=1;
    num_unidades.textContent=cantidad_unidades;
    if(cantidad_unidades === 352){
        clearInterval(tiempo_unidad);
    }

}, 50);

let tiempo_almacenes=setInterval(()=>{
    cantidad_alamcenes+=1;
    num_almacenes.textContent=cantidad_alamcenes ;
    if(cantidad_alamcenes === 84){
        clearInterval(tiempo_almacenes);
    }

}, 50);


/*$(document).ready(function(){

    $("#filtrar").click(function(){
        $(".overlay").addClass("active");
        $(".filter").addClass("active");
        $('html, body').animate({
            scrollTop: $("#section-filter").offset().top
        }, 800);
    });


});*/