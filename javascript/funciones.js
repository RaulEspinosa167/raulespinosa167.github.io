//Función para el menu responsivo
$("#menu").click(function() {
    $("#contenedormenu").toggleClass("abrirmenu");
});
$("#cerrar").click(function() {
    $("#contenedormenu").removeClass("abrirmenu");
});
//Función para subir con la flecha
$(document).ready(function () {
    $("#subir").click(function () { 
        $("html,body").animate(
            {
                scrollTop: "0px",
            },
            600
        );
    });
});

/* SLider con flechas */
$(function (){
    $("#rslides2").responsiveSlides({
        auto: false,
        pager:false,
        nav:true,
        speed:500,
        namespace: "callbacks",
        before:function(){
            $('.events').append("<li>before event fired.</li>")
        },
        after:function(){
            $('.events').append("<li>after event fired.</li>")
        }
    });
});