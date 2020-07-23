// Hero section functions
var hero = document.getElementById('hero');
var eat  = document.querySelector('#eat-text');
var drink = document.querySelector('#drink-text');
var visit = document.querySelector('#visit-text');
var eatImage  = document.querySelector('#eat-img');
var drinkImage = document.querySelector('#drink-img');
var visitImage = document.querySelector('#visit-img');

eat.addEventListener('mouseover', function(){eatImage.style.opacity = 1;} );
eat.addEventListener('mouseout', function(){eatImage.style.opacity = 0;} );
drink.addEventListener('mouseover', function(){drinkImage.style.opacity = 1;} );
drink.addEventListener('mouseout', function(){drinkImage.style.opacity = 0;} );
visit.addEventListener('mouseover', function(){visitImage.style.opacity = 1;} );
visit.addEventListener('mouseout', function(){visitImage.style.opacity = 0;} );
