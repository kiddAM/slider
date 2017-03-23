$(document).ready(function ($) {
	var active = window.location.pathname.split('/').pop();
	console.log(active);

	if (active == '') {
		active = 'index.html';
	}

	var target = $('nav a[href="'+active+'"]');
	target.addClass('active');
});

function mobile_nav() {
    var x = document.getElementById("topnav");

    if (x.className === "nav-items") {
        x.className += " responsive";
    } else {
        x.className = "nav-items";
    }
};

$(function()
{
	var win = $(window);
	// Full body scroll
	var isResizing = false;
	win.bind(
		'resize',
		function()
		{
			if (!isResizing) {
				isResizing = true;
				var container = $('.page');
				// Temporarily make the container tiny so it doesn't influence the
				// calculation of the size of the document
				container.css(
					{
						'width': 1,
						'height': 1
					}
				);
				// Now make it the size of the window...
				container.css(
					{
						'width': win.width(),
						'height': win.height()
					}
				);
				isResizing = false;
				container.jScrollPane(
					{
						showArrows: true,
						arrowScrollOnHover: true
					}
				);
			}
		}
	).trigger('resize');


	// Workaround for known Opera issue which breaks demo (see
	// http://jscrollpane.kelvinluck.com/known_issues.html#opera-scrollbar )
	$('body').css('overflow', 'hidden');

	// IE calculates the width incorrectly first time round (it
	// doesn't count the space used by the native scrollbar) so
	// we re-trigger if necessary.
	if ($('.page').width() != win.width()) {
		win.trigger('resize');
	}

	// Internal scrollpanes
	// $('.scroll-pane').jScrollPane({showArrows: true});
});

$(function () {
	$('.box-bar').jScrollPane(
		{
			showArrows: true,
			arrowScrollOnHover: true,
		}
	);

	var api = $('.box-bar').data('jsp');
	var throttleTimeout;

	$(window).bind(
		'resize',
		function () {
			if (!throttleTimeout) {
				throttleTimeout = setTimeout(
					function () {
						api.reinitialise();
						throttleTimeout = null;
					},
					50
				);
			}
		}
	);
});