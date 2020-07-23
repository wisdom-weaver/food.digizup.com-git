var lastScrollTop = 0;
var displaying = true;

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(st ==0 ){
        displaying = true;
   }
   if(displaying){
     if(st < 5){
          //console.log('st<5');
          $('#gallery-text').css('opacity','1');
          $('#gallery-text').css('transform',`translateY(0%)`);
          $('.overlay').css('background','rgba(0, 0, 0, 0.45)');
          $('.overlay').css('z-index','5');
     }else if(st > 5){
          //console.log('st>5');
          $('#gallery-text').css('opacity','0');
          $('#gallery-text').css('transform',`translateY(+50%)`);
          $('.overlay').css('background','transparent');
          $('.overlay').css('z-index','-3');
  
     }
   }

   lastScrollTop = st;
});

$('#hero').click(function(){
     $('#gallery-text').css('opacity','0');
     $('#gallery-text').css('transform',`translateY(+50%)`);
     $('.overlay').css('background','transparent');
     $('.overlay').css('z-index','-3');
     displaying = false;
});
