$(function() {
    setActiveMenu();
    $('.jobs-div').hide();
    $('#quantitative-developer').show();
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

$('.job-select li').click(function(e) {
    e.preventDefault()
    $that = $(this);
    $that.parent().find('li').removeClass('active');
    $that.addClass('active');
    $('.jobs-div').hide();
    $('#quantitative-'+$(this).attr('target')).show();
});
