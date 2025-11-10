AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

$(document).ready(function() {
    $('#portfolioCarousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            }
        }
    });

    function initMagnificPopup() {
        var $originalLinks = $('#portfolioCarousel .carousel-item-owl:not(.owl-cloned) .image-popup-link');
        
        $originalLinks.magnificPopup({
            type: 'image',
            gallery: {
                enabled: false
            },
            image: {
                titleSrc: 'data-title'
            },
            zoom: {
                enabled: true,
                duration: 300
            },
            mainClass: 'mfp-fade'
        });
    }
    
    $('#portfolioCarousel').on('initialized.owl.carousel', function() {
        setTimeout(initMagnificPopup, 200);
    });
    
    setTimeout(function() {
        if ($('#portfolioCarousel').hasClass('owl-loaded')) {
            initMagnificPopup();
        }
    }, 600);

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    $('.badge-custom').each(function() {
        $(this).hover(
            function() {
                $(this).css('transform', 'scale(1.1)');
            },
            function() {
                $(this).css('transform', 'scale(1)');
            }
        );
    });
});

