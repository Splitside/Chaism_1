$(document).ready(function(){

//menu-mobile
	var
	$menuBtn = $('.btn-menu'),
	i= 0,
	$menuLeft = $('.menu__dropdown__i');

	$menuBtn.on('click', function(){
			$menuBtn.addClass('btn-active');
			if(i%2===0){
				$menuBtn.addClass('btn-active');
				$menuLeft.addClass('go-down');
				$menuLeft.removeClass('go-up');
			}
			else{
				$menuBtn.removeClass('btn-active');
				$menuLeft.addClass('go-up');
				$menuLeft.removeClass('go-down');
			}
		i++;
	});
//	menu-mobile end

// video 
	$(document).ready(function(){
	    var controls = {
	        video: $("#myvideo"),
	        playpause: $("#playpause"),
	        prvideo: $(".content__video")              
	    };
	                
	    var video = controls.video[0];
	               
	    controls.prvideo.click(function(){
	        if (video.paused) {
	            video.play(),
	            $("#playpause").css('opacity','0');
	        } else {
	            video.pause(),
	            $("#playpause").css('opacity','1');
	        } 
	    });
	}); 
// video end

//	content-large-slider
	$('.content__large-slider').owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:false,
		mouseDrag:false,
		dotsSpeed:600,
		// autoplay:true,
		autoplaySpeed:3000
	});
//	content-large-slider end

//	price-slider
		var owl = $('.price-slider');
		owl.owlCarousel({
			items:1,
			loop:true,
			nav:true,
			navText:[],
			dots:false,
			mouseDrag:false,
			navSpeed:600
		});
//	price-slider end

//	content__recommend__slider
	var recommendSlider = $('.content__recommend__slider');
	recommendSlider.owlCarousel({
		items:3,
		loop:true,
		nav:true,
		navSpeed:600,
		navText:[],
		dots:false,
		mouseDrag:false,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:2,
	            nav:true
	        },
	        1024:{
	            items:3,
	            nav:true
	        }
	    }
	});
//	content__recommend__slider end

//	content__interest__slider
	var interestSlider = $('.content__interest__slider');
	interestSlider.owlCarousel({
		items:3,
		loop:true,
		navSpeed:600,
		navText:[],
		dots:false,
		mouseDrag:false,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:2,
	            nav:false
	        },
	        1024:{
	            items:3,
	            nav:false
	        }
	    }
	});
//	content__interest__slider end

//	index.html video-bg height
	$(function() {
		if (!Modernizr.cssvhunit) {
			var windowH = $(window).height();
			$('.height-full').css({'min-height':($(window).height())+'px'});
		}
	});

	// $(function() {
	// 		if (!Modernizr.cssvhunit) {
	// 			var windowH = $(window).height();
	// 			$('.section1').css({'height':($(window).height())+'px'});
	// 			$('.section2').css({'height':($(window).height())+'px'});
	// 			$('.section3').css({'height':($(window).height())+'px'});
	// 			$('.section4').css({'height':($(window).height())+'px'});
	// 			$('.section5').css({'height':($(window).height())+'px'});
	// 			$('.section6').css({'height':($(window).height())+'px'});
				
	// 		}
	// 	});
//	index.html video-bg height_end

//menu scroll-bg
	scrollIntervalID = setInterval(stickIt, 1);

	function stickIt() {
		if ($(window).scrollTop()) {
			$('.header__nav').addClass('scroll-bg');
		} else {
			$('.header__nav').removeClass('scroll-bg');
		}
	}
//menu scroll-bg end

//select2
	$(".catalog-select").select2({
		placeholder: "выберите что вам больше всего подходит",
		multiply: false
	});
	$(".weight-select2").select2({
		multiply: false
	});
//select2 end

});