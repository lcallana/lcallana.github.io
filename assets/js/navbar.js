(function () {
    "use strict";
    var isOpen = false;
    $('nav button').click(function () {
        isOpen = !isOpen;
        if (isOpen) {
            $(this).parent().addClass('open');
        } else {
            $(this).parent().removeClass('open');
        }
    });
}());