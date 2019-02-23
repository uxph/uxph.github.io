$(document).ready(function(){
    $('#close-nav').click(function(){
        $('#mobile-nav').addClass("hide");
    });

    $('#hamburger').click(function(){
        $('#mobile-nav').removeClass("hide");
    });
});
