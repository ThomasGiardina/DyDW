$(function() {
  // Fecha del evento
  const eventDate = new Date("March 13, 2026 12:00:00").getTime();
  const now = new Date().getTime();

  // Diferencia en segundos
  const seconds = Math.max(0, Math.floor((eventDate - now) / 1000));

  // Inicializar FlipClock sobre #clock (no .clock)
  const clock = $('#clock').FlipClock(seconds, {
    clockFace: 'DailyCounter',
    countdown: true,
  });
});


$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});