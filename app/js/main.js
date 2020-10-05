$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true,
		spacing: "2px"
	});

	$(".product-slider__inner").slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 200,
		to: 500,
		grid: true
	});

	$(".icon-th-list").on('click', function () {
		$('.product-page__items').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$(".icon-th-large").on('click', function () {
		$('.product-page__items').removeClass('list');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});
	var mixer = mixitup('.products__inner-box');
});