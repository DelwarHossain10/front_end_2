$(document).ready(function(){
    // slider
    $('.slider-active').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>Prev</button>',
        nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>Next</button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                arrows: false,
            }
            },
            {
                breakpoint: 600,
                settings: {
            
            }
            },
            {
                breakpoint: 480,
                settings: {
            
            }
            }
            
        ]
    });         
    // service
    $('.service-active').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>Prev</button>',
        nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>Next</button>',
        slidesToShow: 4,
        slidesToScroll: 1
    });     
    // case
    $('.cases-active').slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 1
    });     
    // testimonial
    $('.testimonial-active').slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1
    });     
    // brand
    $('.brand-active').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                slidesToShow: 4,
            }
            },
            {
                breakpoint: 600,
                settings: {
            
            }
            },
            {
                breakpoint: 480,
                settings: {
            
            }
            }
            
        ]
    });     
    // magnific    
    $('.video-popup').magnificPopup({
        type:'image',
    });
    // nice select
    $('select').niceSelect();
})