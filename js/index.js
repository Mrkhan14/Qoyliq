/*:::::::::::::::::::::start left menu:::::::::::::::::::::*/
$('.click').on('click', function() {
    $('.mobil-nav').addClass('active');
    $('body').addClass('body-hidden');
});
$('.click2').on('click', function() {
    $('.mobil-nav').removeClass('active');
    $('body').removeClass('body-hidden');
});
/*:::::::::::::::::::::end left menu:::::::::::::::::::::*/