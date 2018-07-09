$(document).ready(function(){
	/* slick slider */
	$(".slick-slider").slick({
		rtl: true,
	});
	/* ticker */
	$("#js-news").ticker({
		speed: 0.05,
		titleText: 'آخرین اخبار : ',
		direction: 'rtl',
		pauseOnItems: 2000,
		fadeInSpeed: 600,
		fadeOutSpeed: 200
	});
	/* Home widget fix height*/
	if($(window).width() >= 992){
		var widg_height = [];
		$(".home-widg .widg-wrapper").each(function(index,element){
			widg_height.push($(this).height());
		});
		var max_height = Math.max.apply(Math,widg_height);
		$(".home-widg .widg-wrapper .widg").each(function(index,element){
			$(this).css("min-height",max_height);
		});
	}
	
	/* news thumb slick slider */
	$('.slick-multi-slider').slick({
		rtl: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});