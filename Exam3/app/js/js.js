$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top; {
            $('html,body').animate({ scrollTop: destination }, 1500);
        }
        return false;
    });

    $('.nav-mobile').click(function() {
        $('.nav-mobile--menu').toggleClass('menu-open');
    });
});

//WORK SLIDER

$('.works-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000
});


//TEAM SLIDER 

$('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 715,
            settings: {
                slidesToShow: 1
            }
        }
    ]
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
    var uluru = { lat: 41.157944, lng: -8.629105 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        disableDefaultUI: true,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: { lat: 41.165944, lng: -8.620105 },
        map: map,
        icon: 'img/map.png'
    });

    google.maps.event.addDomListener(window, "resize", function() {
        let center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}

document.addEventListener('DOMContentLoaded', initMap);