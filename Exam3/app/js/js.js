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

//SLICK SLIDER

$('.works-slider').slick({
    dots: true,
    infinite: true,
    speed: 300
});

// INPUTS EVENTS
$(".input_1 input, .textarea_1 textarea").focus(function() {
    $(this).next("span").addClass("active");
});
$(".input_1 input, .textarea_1 textarea").blur(function() {
    if ($(this).val() === "") {
        $(this).next("span").removeClass("active");
    }
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
    var uluru = { lat: 30.4201800, lng: -9.5981500 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru,
        styles: [
            { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
            { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Hello!',
        icon: 'img/map.png'
    })
}