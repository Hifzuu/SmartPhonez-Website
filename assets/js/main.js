/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);


		$(document).ready(function () {
			$('a[href^="#"]').on('click', function (event) {
				var target = $(this.getAttribute('href'));
				if (target.length) {
					event.preventDefault();
					$('html, body').stop().animate({
						scrollTop: target.offset().top
					}, 1000);
				}
			});
		});

		function submitForm() {
            // Fetch form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation
            if (name === '' || email === '' || message === '') {
                showError('Please fill out all fields.');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('Please enter a valid email address.');
                return;
            }

            // Form data
            const formData = {
                name: name,
                email: email,
                message: message
            };

            // Send form data via AJAX
            $.ajax({
                type: 'POST',
                url: 'https://formspree.io/f/xqkroqvk',
                data: formData,
                dataType: 'json',
                success: function (response) {
                    showConfirmation();
                },
                error: function (xhr, status, error) {
                    console.error(xhr.responseText);
                    showError('Sorry, there was an error submitting your form. Please try again later.');
                }
            });
        }

        function showError(errorMessage) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage
            });
        }

        function showConfirmation() {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Thank you for your message. We will get back to you soon.',
                confirmButtonColor: '#007bff',
                confirmButtonText: 'Go Back'
            }).then((result) => {
                if (result.isConfirmed) {
                    goBack();
                }
            });
        }



        function goBack() {
            // Redirect to contact page
            window.location.href = 'index.html'; 
        }

		$(document).ready(function() {
            $('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').hide();
        })


		document.addEventListener("DOMContentLoaded", function() {
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	
			if (/android|iPad|iPhone|iPod/.test(userAgent)) {
				document.querySelector('.whatsapp-float').style.display = 'block';
			} else {
				document.querySelector('.whatsapp-float').style.display = 'none';
			}
		});

		document.addEventListener("DOMContentLoaded", function() {
			// Check if the splash screen has already been shown
			const splashShown = localStorage.getItem("splashShown");
			if (!splashShown) {
				// Prevent scrolling when the splash screen is active
				disableScroll();
		
				// Ensure the splash screen is visible for at least 3 seconds
				setTimeout(hideSplashScreen, 3000); // Adjusted to match the animation duration
			} else {
				// If the splash screen has been shown before, immediately hide it
				hideSplashScreen();
			}
		});
		
		function hideSplashScreen() {
			const splashScreen = document.getElementById("splash-screen");
			splashScreen.classList.add("hidden");
			enableScroll(); // Re-enable scrolling for the entire page
		
			// Store the information that the splash screen has been shown
			localStorage.setItem("splashShown", true);
		}
		
		function disableScroll() {
			document.body.classList.add("no-scroll");
			document.documentElement.style.overflow = 'hidden';  // Disable scrolling on <html> element
		}
		
		function enableScroll() {
			document.body.classList.remove("no-scroll");
			document.documentElement.style.overflow = 'auto';  // Re-enable scrolling on <html> element
		}
		
		