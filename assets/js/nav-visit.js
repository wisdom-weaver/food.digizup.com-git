var overlay = false;
var lastScrollTop = 0;

//inintial state of navbar
function init(){
    
    //checking position of page for correct restoration of navigaion bar
    $('#navigation-bar').css('background', 'black');
    $('.navigation-link').css('color','white'); 
    $('#menu-icon').text('menu');
    $('#menu-icon').attr('style','color: white !important');
    $('#logo').attr('style','color: white !important');
    $('.social-icons path').css('fill','white');
    $('.navigation-link').css('color','white'); 
    $('.navigation-overlay').css('animation','');  
    $('.overlay-link').css('animation',``);
    
}


//ovelay-menu toggle
$(document).ready(function(){
    var backup;
    $('.social-icons').mouseover( function(){
        $(this).children().css('fill', 'rgb(193, 129, 105)' );
        backup = $('.social-icons path').css('fill');
    });
    $('.social-icons').mouseout( function(){
        $(this).children().css('fill', backup );
    });
    init();
});

$('#menu-icon').click(function(){
    overlay = ! overlay;
    if(overlay){
        $('#navigation-bar').css('background','white');
        $('.navigation-link').css('color','black');
        $('#menu-icon').text('healing');
        $('#menu-icon').attr('style','color: black !important');
        $('#logo').attr('style','color: black !important');
        $('.social-icons path').css('fill','black');
        $('.navigation-overlay').css('animation',`overlayAnim 0.3s forwards ease-in-out `);
        //animation:  ;
        $('.overlay-link').each(function(index){
            $(this).css('animation',`overlayLinkAnim 0.5s forwards ease-in-out ${0.1+index*0.1}s`)
        });
    }else{
        
        init();
    }
});

//scrolling
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        //console.log('scrolling down');
        $( "#navigation-bar" ).addClass('navigation-bar-hide');
    } else {
         //console.log('scrolling up');
        $( "#navigation-bar" ).removeClass('navigation-bar-hide');
    }
    //abjust bg of navigation bar properly acc to the position of page
    $('#navigation-bar').css('background', 'black');

    lastScrollTop = st;
 });

 // Resize event remove exceoptions
 $(window).resize(function(){
    init();
});