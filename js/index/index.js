var viewHeight = $(window).height();
$(".middle").css("height", viewHeight*0.6);

var width = document.body.clientWidth; 
$(".container").css("max-width", width);


/* var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	autoplay: true,
	loop : true,
	coverflowEffect: {
		rotate: 50,
		stretch: -20,
		depth: 60,
		modifier: 1,
		slideShadows : true,
	},
}); */

var swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	effect: 'fade',
	autoplay: true,
	preventClicks : false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
	    slideChangeTransitionStart: function(){
	      $('#demo').carousel('next')
	    },
	},
});