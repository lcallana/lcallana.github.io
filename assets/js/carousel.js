$('document').ready(function () {
    "use strict";
    var splash = $('#splashViewport'),
        itemMap = {
            2: '#about',
            3: '#terra',
            4: '#bashBros',
            5: '#rao',
            6: '#minecraftsweeper'
        }

    $('.content').hide();
    $('#about').show();

    splash.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        center: true,
        lazyContent: false,
        autoHeight: false,
        navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
      ]
    });



    splash.on('changed.owl.carousel', function (event) {
        var item = event.item.index;
        $('.content').hide();
        $(itemMap[item]).show();
    })


    $('#mail').click(function () {
        $('html, body').animate({
            scrollTop: $("footer").offset().top
        }, 1000);
    });

    $('#seeProjects').click(function () {
        splash.trigger('next.owl.carousel');
    });

});