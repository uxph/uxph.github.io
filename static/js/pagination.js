const page_assignments = () => {
    let event_items = $('.events-feed-section .event-item');

    let page_mark = 1;
    let n = 0;
    for(let i = 0; i < event_items.length; i++) {
        if(Math.trunc(i/5) > n) {
            n++;
            page_mark++;
        }

        $(event_items[i]).addClass(`page-${page_mark}`);
        console.log(event_items[i]);
    }
}

const preview_items = (current_page) => {
    $('.events-feed-section .event-item').addClass('d-none');
    $('.events-feed-section .event-item').removeClass('d-flex');
    $('.events-feed-section .event-item.page-' + current_page).removeClass('d-none');
    $('.events-feed-section .event-item.page-' + current_page).addClass('d-flex');
}

$(document).ready(function() {
    var current_page = 1;
    page_assignments();
    preview_items(current_page);

    $('.pagination').append(`<p class="d-inline-block font-size-16 font-weight-bold margin-right-12 current-page" data-id="${current_page}">Current page: ${current_page}</p>`);
    $('.pagination').append(`<button name="previous" class="margin-right-4 previous-page" disabled><i class="fas fa-arrow-left"></i></button>`);
    $('.pagination').append(`<button name="next" class="next-page"><i class="fas fa-arrow-right"></i></button>`);

    // Pressing the previous button
    $('.previous-page').click(function() {
        if(current_page > 1) {
            current_page -= 1;
            $('.current-page').attr('data-id', current_page);
            $('.current-page').text(`Current page: ${current_page}`);

            $('.next-page').removeAttr('disabled');
            current_page == 1 ? $('.previous-page').attr('disabled', 'true') : '';

            preview_items(current_page);
        }
    });

    // Pressing the next button
    $('.next-page').click(function() {
        if(current_page < parseInt($('#pages').attr('data-id'))) {
            current_page += 1;
            $('.current-page').attr('data-id', current_page);
            $('.current-page').text(`Current page: ${current_page}`);

            $('.previous-page').removeAttr('disabled');
            current_page == parseInt($('#pages').attr('data-id')) ? $('.next-page').attr('disabled', 'true') : '';

            preview_items(current_page);
        }
    });
});
