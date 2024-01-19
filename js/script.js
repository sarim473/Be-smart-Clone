//(Owl Carousel)======================================================\\
$(document).ready(function(){

    $('.team-list').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
})
//=====================================================================\\


//=====================================================================\\
$(document).ready(function(){
    var teamCard = $('.team-card');
    var name = $('.name');

    teamCard.mouseenter(function(){
        $(this).find('.name').css('color', '#34B1C4');
       
    })
    teamCard.mouseleave(function(){
        $(this).find('.name').css('color', '#454545');
    })
})
//=====================================================================\\