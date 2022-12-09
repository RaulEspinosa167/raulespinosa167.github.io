// Función de acordeon
$(".quealitydown").click(function(){
    var t = $(this);
    var tp = t.next();
    tp.slideToggle();
});
$("#ques-ask1").click(function(){
    $("#ico1").toggleClass("cerrar");
    $("#ico2").toggleClass("cerrar");
});
$("#ques-ask2").click(function(){
    $("#ico11").toggleClass("cerrar");
    $("#ico22").toggleClass("cerrar");
});
$("#ques-ask3").click(function(){
    $("#ico111").toggleClass("cerrar");
    $("#ico222").toggleClass("cerrar");
});
$("#ques-ask4").click(function(){
    $("#ico1111").toggleClass("cerrar");
    $("#ico2222").toggleClass("cerrar");
});