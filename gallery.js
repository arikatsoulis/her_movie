$( document ).ready(function() {
    var wider = $(window).width();
    var scrolly = 0
    wider= (wider/20)*3;

    if(wider<250){
      wider=250;}

    $(".gallery img").css('width', wider);
    $(".gallery").width(wider*15);

    $(".gallery img").click(function(){
        var bigGallery = $(this).attr('src');
        $(".bottom1").css('background-image', 'url('+bigGallery+')')
    });

    $(".moveright").click(function(){
      if(scrolly>15*wider){
        //nothing happens
      } else { 
      scrolly = scrolly + 2*wider;
      $('.top1').animate({scrollLeft: scrolly}, 250);}
    });

    $(".moveleft").click(function(){
      if(scrolly<1){
        //nothing happens
      }
      else{
      scrolly = scrolly - 2*wider;
        //$( ".top1" ).scrollLeft(scrolly);
        $('.top1').animate({scrollLeft: scrolly}, 250);
      }
    });



    $(".gallery img").hover(function(){
      var bigGallery = $(this).attr('src');
      $('.bottom1').stop(true, true).fadeOut(250, function(){
      $(".bottom1").css('background-image', 'url('+bigGallery+')');});
      $('.bottom1').fadeIn(250);

      $(this).stop(true, true).fadeTo( "slow" , 1, function() {
            // Animation complete.
          });
    }, function(){
        $(this).fadeTo( "slow" , 0.5, function() {
            // Animation complete.
          });});

});