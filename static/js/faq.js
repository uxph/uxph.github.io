$(document).ready(function() {
    $('.topic-option').click(function() {
        $('.topic-option').removeClass('active');
        $(this).addClass('active');

        // filter function
        let filter = $(this).attr('data-id');
        let faq_items = $('.faq-item');

        for(let i = 0; i < faq_items.length; i++) {
            $($(faq_items)[i]).attr('data-id').toLowerCase().includes(filter.toLowerCase()) ?
                $($(faq_items)[i]).attr('style', 'display: block !important;') : $($(faq_items)[i]).attr('style', 'display: none !important;');
        }
    });
});
