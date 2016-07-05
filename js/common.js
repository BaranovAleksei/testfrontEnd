$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
	//function

	$('.furniture').animated('slideInLeft');
	$('.imgSecondSlideFurniture').animated('slideInRight');
	$('.imgSecondSlideDecore').animated('slideInLeft');
	$('.decore').animated('slideInRight');
	$('.videoInfo').animated('slideInDown');
	$('.videoContent').animated('slideInLeft');
	$('.aboutImg').animated('slideInLeft');
	$('.aboutText').animated('slideInRight');
	

	


	// $('.scrol').click(function() {
	// 	var height = $(this).outerHeight();
	// 	var off = $(this).offset(); // берем координаты текущего блока
	// 	var barr = off.top;			//высота 
	// 	var offHeight = barr + height;
	// 	console.log(offHeight);
	// 	$("body,html").animate({"scrollTop": height}, 1000);
	// });
		

	
	// $(window).scroll(function() {
	// 	var height = $(this).outerHeight();
	// 	// var off = $(this).offset(); // берем координаты текущего блока
	// 	// var barr = off.top;			//высота 
	// 	// var offHeight = barr + height;
	// 	// console.log(offHeight);
	// 	$("body,html").animate({"scrollTop": height}, 1000); //проматываем до блока
	

	// });

	



});
