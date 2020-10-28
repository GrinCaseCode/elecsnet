$(document).ready(function() {

	//кнопка sandwich
	$(".btn-menu").click(function() {
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(200);
			$(".body-overlay").fadeIn(200);
		} else {
			$(".menu").slideUp(200);
			$(".body-overlay").fadeOut(200);
		}
		
	});

	$(".menu a").click(function() {
			$(".menu").slideUp(200);
			$(".body-overlay").fadeOut(200);
		});

	$(".body-overlay").click(function() {
			$(".menu").slideUp(200);
			$(".body-overlay").fadeOut(200);
		});


	 /*высота блока по экрану*/
    function heightDetect() {
      $('.menu').css("height", $(window).height() -$(".header").height() + 40);
    };
    heightDetect();
    $(window).resize(function() {
      heightDetect();
    });

	

});