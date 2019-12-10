
$(function(){
  var navPos = $("nav").offset().top;
  $(window).scroll(function(){
    if($(window).scrollTop() > navPos){
      $("nav").css("position","fixed");
    }else{
      $("nav").css("position","static");
    }
  });
});


$(function(){
  $("a[href^='#']:not([href='#'])").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target += 30;
    $("html,body").animate({scrollTop: target}, 700,);
    return false;
  });
});



$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            $("header").fadeOut();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        $("header").fadeIn();
        return false;
    });
});



$(function(){
    var scrollPosition;
    $(".modalOpener").on("click", function() {
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollPosition});
    });
    $(".modalCloser").on("click", function() {
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollPosition );
    });
});



$(function(){

    var effect_btm = 300;
    var effect_move = 50;
    var effect_time = 800;

    $('.scroll-fade-row').css({
        opacity: 0
    });
    $('.scroll-fade-row').children().each(function(){
        $(this).css({
            opacity: 0,
            transform: 'translateY('+ effect_move +'px)',
            transition: effect_time + 'ms'
        });
    });

    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        $('.scroll-fade-row').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i){
                    $(this).delay(100 + i*200).queue(function(){
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });

});
