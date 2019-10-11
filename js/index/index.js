var viewHeight = $(window).height();
$(".container").css("height", viewHeight);
$(".swiper-slide").css("height", viewHeight*0.6);
$(".main-text").css("padding-top", viewHeight*0.1);
$(".main-text").css("padding-bottom", viewHeight*0.1);
$(".img-responsive").css("height", viewHeight - $(".img-responsive").offset().top);

var width = document.body.clientWidth; 
$(".container").css("max-width", width);
$("body").css("max-width", width);

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