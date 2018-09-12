var fb = $("#fb");
var tt = $("#tt");
var insta = $("#insta");


$(fb).mouseover(function(){
    fb.attr("src","./images/icons/colorfb.png")
});

$(fb).mouseout(function(){
    fb.attr("src","./images/icons/whitefb.png")
});

$(tt).mouseover(function(){
    tt.attr("src","./images/icons/colortt.png")
});

$(tt).mouseout(function(){
    tt.attr("src","./images/icons/whitett.jpg")
});

$(insta).mouseover(function(){
    insta.attr("src","./images/icons/colorinsta.png")
});

$(insta).mouseout(function(){
    insta.attr("src","./images/icons/whiteinsta.png")
});

