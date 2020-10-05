$(document).ready(function () {
    $('#nav-burger').click(function () {
        $(this).toggleClass('open');
        $('#menu').toggleClass('menu_active');
    });
});