$(document).ready(function () {
    var target = $('.hiddenClass');
    $(document).on('click', '.showDiv', function (e) {
        target
            .fadeIn(100, function () {
                $('#focusInput').focus();
            })
            .addClass('reveal');
    });

    $(document).mouseup(function (e) {
        if (target.has(e.target).length == 0) {
            target.fadeOut(100).removeClass('reveal');
        }
    });
});
