$(".info").click(function(){
    $(this).css("color","red");
});

$(".btn").dblclick(function(){
    $(".info") .css("color","red");
    $(".info").css("font-size","30px");
    $(".info").css("background-color","yellow");
    $(".info").css("border-radius","20px");
});

$(".btn").contextmenu(function(){
    $(".info") .css("color","red");
    $(".info").css("font-size","30px");
    $(".info").css("background-color","green");
    $(".info").css("border-radius","20px");
});

$("body").keypress(function(){
    $(this).css("background-color","lightblue");

});


$("body").keyup(function(){
    $(this).css("background-color","lightgreen");

});


$("body").keydown(function(){
    $(this).css("background-color","lightpink");

});

