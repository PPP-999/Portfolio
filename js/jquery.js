
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
