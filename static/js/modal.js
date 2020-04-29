$(document).ready(function() {
    $('#modal-close').click(function() {
        $('#modal-overlay').hide();
        $('body').removeClass('stiff');
    });

    $('#modal-click-off').click(function() {
        $('#modal-overlay').hide();
        $('body').removeClass('stiff');
    });

    $('.user-card').click(function() {
        $('body').addClass('stiff');
        $('#modal-overlay').show();
        $('#modal-container #modal-content').empty();
        $(this).clone().appendTo('#modal-content');

        $('#modal-container *').removeClass('d-none');
        $('#modal-container .user-card').removeClass('shadow-sm');
        $('#modal-container .user-card').removeClass('user-card');
        $('#modal-container p').addClass('text-center');

        let socials = $.parseHTML($('#modal-container .socials-wrapper').clone().text());
        console.log("socials", socials);

        $('#modal-container .socials-wrapper').empty();
        $('#modal-container .socials-wrapper').html(socials);
        $('#modal-container .socials-wrapper').addClass('d-flex justify-content-center margin-y-24');
        $('#modal-container .socials-wrapper i').addClass('fa-2x margin-x-16');
    });
});
