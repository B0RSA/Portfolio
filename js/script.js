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
    $('body').css('background-color', 'black');
    $('body').css('color', 'white');
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
    if(window.matchMedia("(min-width:769px)").matches) {
        $('li a').css('color', 'black')
    }
});