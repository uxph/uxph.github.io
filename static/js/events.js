$(document).ready(function() {
    $('.event-category').click(function() {
        $('.event-category').removeClass('active');
        $(this).addClass('active');

        // filter function
        let filter = $(this).attr('data-id');
        let event_items = $('.event-item');

        for(let i = 0; i < event_items.length; i++) {
            $($(event_items)[i]).attr('data-id').toLowerCase().includes(filter) ?
                $($(event_items)[i]).attr('style', 'display: flex !important;') : $($(event_items)[i]).attr('style', 'display: none !important;');
        }
    });
});
