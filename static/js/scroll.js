$(function() {

   $("div.carousel").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);

      event.preventDefault();

   });

});
