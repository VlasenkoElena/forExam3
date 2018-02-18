$(document).ready(function(){
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top; {
            $('html,body').animate({ scrollTop: destination }, 1500);
        }
        return false;
    });

    (function($){
        $(function() {
          $('.hamburger').on('click', function() {
            $(this).closest('.header-menu').toggleClass('hamburger--open');
          });
        });
      })(jQuery);

    ;(() => {
        function showMenu(event) {

            this.classList.toggle("hamburger--open");
            this.parentNode.classList.toggle("nav-menu--open");
    
        }
    
        document.addEventListener('DOMContentLoaded',() => {
            document.querySelector('.hamburger').addEventListener('click', showMenu)
    
        });
    })();

   

});

/*WORK SLIDER*/

$('.works-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000
});


//TEAM SLIDER 

$('.team-slider').slick({
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '-10px',
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                initialSlide: 0,
            }
            },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                initialSlide: 0,
            }
        }]
});


//WOW 
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();


// КАРТА
function initMap() {
    var uluru = { lat: -7.9231192, lng: 112.6003897 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        disableDefaultUI: true,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: { lat: -7.9131192, lng: 112.6101895 },
        map: map,
        icon: 'img/map.png'
    });   
};

document.addEventListener('DOMContentLoaded', initMap);