$(document).ready(function(){
    $('#close').click(function(){
        $('#mobile-nav').addClass("hide");
    });

    $('#hamburger').click(function(){
        $('#mobile-nav').removeClass("hide");
    });
});

function setActive(index){
    var main_items = $('#main-nav ul li');
    main_items.removeClass("active");
    $(main_items[index]).addClass("active");

    /*
    var mobile_items = $('#mobile-nav ul li');
    mobile_items.removeClass("active");
    $(mobile_items[index + 1]).addClass("active");
    */
}
