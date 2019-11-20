$(function(){

	///menu hambueger

	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu').toggleClass('menu-opend');
		$('.menu__element').toggleClass('element-menu');
	});

	///pop up

	$('.popup').click(function (){

		$('#exampleModal').arcticmodal();
	})

	 // Preloader
	 
	var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    

    $('.parallax-window').parallax({imageSrc: '../img/background-header.png'});


    $("a.go").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

})

