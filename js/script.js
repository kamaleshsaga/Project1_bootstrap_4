$('.navbar-nav .nav-item .nav-link').on('click', function(){
    $('.navbar-nav .nav-item .nav-link.active').removeClass('active');
    $(this).addClass('active');
});