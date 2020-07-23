var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(st < 50){
        //console.log('st<50');
        $('#story-text').css('opacity','1');
        $('#story-text').css('transform',`translateY(0%)`);
   }else if(st > 50){
        //console.log('st>50');
        $('#story-text').css('opacity','0');
        $('#story-text').css('transform',`translateY(+50%)`);

   }

   lastScrollTop = st;
});

