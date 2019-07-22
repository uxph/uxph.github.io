$(document).ready(function(){
    $('#close-nav').click(function(){
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
}
