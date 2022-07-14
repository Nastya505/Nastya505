$(function () {
    let header = $('#header');
    let interH = $('#inter').innerHeight();
    let scrolloffset = $(window).scrollTop();

    /*fixed header*/
    checkScroll(scrolloffset);
    $(window).on('scroll', function () {
        scrolloffset = $(this).scrollTop();
        checkScroll(scrolloffset);
    })

    function checkScroll(scrolloffset) {
        if (scrolloffset >= interH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    /*smooth scroll*/
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockoffset = $(blockId).offset().top;
        $('#nav a').removeClass('active');

        $this.addClass('active');
        $('html, body').animate({
            scrollTop: blockoffset
        }, 500);
    })

    /*menu nav toggle*/
    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    })

    /*collapse*/
    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let blockId = $this.data('collapse');
        $this.toggleClass('active');

    })
})