$(document).ready(function () {




	/*Before after*/

	$(".slider .beforeafter").twentytwenty({
		default_offset_pct: 0.25

	});


	$(".slider .slide_view").css('height', ($(".slider .slide_view").width() / 977 * 550) + 'px');

	/*Slider */

	$('.gallery_wrapper .slider .slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.gallery_wrapper .slider .previews',
		draggable: false,
	});
	$('.gallery_wrapper .slider .previews').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.gallery_wrapper .slider .slide',
		dots: false,
		//dots: true,
		// appendDots: $('.screen_slider'),
		//dotsClass: 'screen_slider_points',
		//centerMode: true,
		focusOnSelect: true,
		arrows: false,
		//draggable: false,
	});


	// Gallery Tabs

	var slider_point_margin = ($('.screen_slider_points').height() / ($('.slider[data-tab]').length - 1)) - 5;

	function setProjectsNav() {
		for (var i = 0; i < $('.slider[data-tab]').length; i++) {
			$('.screen_slider_points').append('<li data-project-trigger="' + (i + 1) + '"><a href="#"></a></li>')
		}
		$('.screen_slider_points li:not(:last-of-type)').css('margin-bottom', slider_point_margin + 'px')
	}
	setProjectsNav()


	$('.gallery [data-tab]').css('opacity', '0');
	$('.gallery [data-tab]').css('visibility', 'hidden');

	$('.gallery [data-tab="1"]').css('opacity', '1');
	$('.gallery [data-tab="1"]').css('visibility', 'visible');




	var gallery_tab = 0;
	var gallery_wheel_marker = true;
	$('body').on('mousewheel', function (e) {
		var target = e.originalEvent.target;
		var parent_classlist = target.parentNode.classList;


		if (target.classList.contains('nano') || parent_classlist.contains('nano') || parent_classlist.contains('mCustomScrollBox') || parent_classlist.contains('mCSB_container')) {
			console.log('asd')
		}
		/*else if (parent_classlist.contains('slide_view') || target.classList.contains('twentytwenty-overlay')) {
			if (e.originalEvent.deltaY > 0) ) {
				$('.your-element').slick('setPosition');


				} else if (e.originalEvent.deltaY < 0 ) {
					

				}
		
		
		}*/
		else {
			e.preventDefault();
			console.log(e.originalEvent.deltaY);
			if ($('.gallery').length > 0) {

				if (e.originalEvent.deltaY > 0 && gallery_tab < ($('.screen_slider_points li').length - 1) && gallery_wheel_marker) {
					changeProject('+');


				} else if (e.originalEvent.deltaY < 0 && gallery_tab > 0 && gallery_wheel_marker) {
					changeProject('-');

				}
			}
		}
	});

	function translateCrystall(slider_point_margin, gallery_tab) {
		$('.screen_slider_points .active_screen').css('top', ((slider_point_margin + 5) * gallery_tab) + 'px');
	};

	function changeProject(value_counter_tab_direction) {
		// value_counter_tab_direction = '+' if increase '-' if decrease and number if there is click
		try {
			gallery_wheel_marker = false;

			hideElem('.gallery [data-tab="' + (gallery_tab + 1) + '"]');

			if (value_counter_tab_direction == "-") {
				gallery_tab--;
			} else if (value_counter_tab_direction == "+") {
				gallery_tab++;
			} else {
				gallery_tab = value_counter_tab_direction;

			}

			showElem('.gallery [data-tab="' + (gallery_tab + 1) + '"]');

			translateCrystall(slider_point_margin, gallery_tab);

			setTimeout(function () {
				gallery_wheel_marker = true;
			}, 300);

		} catch (err) {
			console.log(err);
			console.log('read what should be variable"s value');
		}

	};


	$('.screen_slider_points li').on('click', function () {

		changeProject($(this).attr('data-project-trigger') - 1)


	});

	function hideElem(selector) {
		$(selector).animate({
			opacity: 0
		}, function () {
			$(selector).css('visibility', 'hidden');
		})
	}

	$('.gallery .slide').css('height', $('.gallery .slide').height());

	function showElem(selector) {
		$(selector).css('visibility', 'visible');
		setTimeout(function () {
			$(selector).animate({
				opacity: 1
			});

		}, 100);

	}



	function changeGallerySize() {
		$('.gallery_wrapper').css('height', ($('.slide_description').height() + ($('footer').height())) + 'px');

		if (window.innerWidth < 1001) {
			$('.gallery_wrapper').css('height', ($('.gallery .slider').height() + $('.slide_description').height() + $('footer').height()) + 'px');

			$('.gallery .screen_slider .slide_description').css('top', $('.gallery .slider').height() + 'px');
		};
	};


	changeGallerySize()

	$(window).on('resize', function () {
		changeGallerySize()
	});

	$('.nano').mCustomScrollbar({
		setTop: 0,
		theme: "dark",
		

	});

})
