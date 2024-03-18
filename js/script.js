$(".btnMenu").click(function(){
    $(".menu").show();
});

$(".btnFechar").click(function(){
    $(".menu").hide();
});

if(window.matchMedia("(max-width:769px)").matches) {
    $(".quandoClica").click(function(){
        $(".menu").hide();
    });
}

$(".btnClaro").click(function(){
    $(".btnClaro").hide();
    $(".btnNoturno").show();
    $("#contatoClaro").hide();
    $("#contatoNoturno").show();
    $('body').css('background-color', '#03092B');
    $('body').css('color', 'white');
    $('.galeriaFotoPequena').css('border', 'white solid 2px');
    if(window.matchMedia("(min-width:769px)").matches) {
        $('li a').css('color', 'white')
    }
});

$(".btnNoturno").click(function(){
    $(".btnClaro").show();
    $(".btnNoturno").hide();
    $("#contatoClaro").show();
    $("#contatoNoturno").hide();
    $('body').css('background-color', 'white');
    $('body').css('color', 'black');
    $('.galeriaFotoPequena').css('border', 'black solid 2px');
    if(window.matchMedia("(min-width:769px)").matches) {
        $('li a').css('color', 'black')
    }
});

$("#minhaFotoTroca").click(function(){
    $("#minhaFoto").show();
    $("#fotoAmor").hide();
});

$("#fotoLaraTroca").click(function(){
    $("#minhaFoto").hide();
    $("#fotoAmor").show();
});