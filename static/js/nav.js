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
    var mobile_items = $('#mobile-nav ul li');

    main_items.removeClass("active");
    mobile_items.removeClass("active");

    $(main_items[index]).addClass("active");
    $(mobile_items[index]).addClass("active");
}
/*
<div class="wrapper">
                
    <div id="main-heading">
        <h1 class="red">WOWMentor:</h1>
        <!--<h1 class="blue larger">{{ .Site.Data.info.theme }}</h1>-->
        <h1 class="blue">Mentors for Women Program</h1>
    </div>
    <div id="main-info">
        <div class="content-wrapper">
            <img src="assets/icons/calendar.svg" />
            <!--<p>{{ .Site.Data.info.date }}</p>-->
            <p>March 20, 2019 (Wednesday) <br/> 5pm - 10pm</p>
        </div>
        <div class="content-wrapper">
            <img src="assets/icons/pin.svg" />
            <!--<p>{{ .Site.Data.info.venue }}</p>-->
            <p>ASPACE Makati</p>
        </div>
    </div>
    
</div>
<img src="assets/images/UXPH_hero_2019.png" id="hero-image" />
*/
