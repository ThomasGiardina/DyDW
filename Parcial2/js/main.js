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

    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
});

