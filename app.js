$(function() {      
			$('.banner').unslider({
				// speed: 300,               //  The speed to animate each slide (in milliseconds)
				// delay: 5000,              //  The delay between slide animations (in milliseconds)
				// // complete: function() {},  //  A function that gets called after every slide animation
				// keys: false,               //  Enable keyboard (left, right) arrow shortcuts
				// dots: false,               //  Display dot navigation
				// fluid: false              //  Support responsive design. May break non-responsive designs
			});

			var unslider = $('.banner').unslider();

		    $('.unslider-arrow').click(function() {
		        var fn = this.className.split(' ')[1];
		        //  Either do unslider.data('unslider').next() or .prev() depending on the className
		        unslider.data('unslider')[fn]();
		    });
});
