$(function() {
    setActiveMenu();
});

function setActiveMenu() {
    var $m = $('#nav-content li.nav-item');
    $m.removeClass('active');
    $m.find('a.nav-link[href$="' + window.location.pathname.toLowerCase().replace(/\/$/, '') + '"]').parent('.nav-item').addClass('active');
}

$('#goTop').on('click', function(e){
    $("html, body").animate({scrollTop: $("#top").offset().top}, 500);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('#goTop:hidden').stop(true, true).fadeIn();
    } else {
        $('#goTop').stop(true, true).fadeOut();
    }
});
