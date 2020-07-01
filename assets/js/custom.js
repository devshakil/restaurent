 $(document).ready(function(){

     //Start Menu js
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 450) {
        $('.navbar-light').addClass('menu-shrink');
    } else {
        $('.navbar-light').removeClass('menu-shrink');
    }
});			
$('.navbar-nav li a').on('click', function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 120
    }, 1000);
    e.preventDefault();
});

$(document).on('click','.navbar-collapse.show',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});	

// // WOW js
new WOW().init();

//Tooltip js
    $('[data-toggle="tooltip"]').tooltip();   




 });
 
