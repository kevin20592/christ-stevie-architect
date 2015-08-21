$(document).ready(function() {
	$('#fullpage').fullpage({
		// anchors: ['cover', 'about', 'team', 'service', 'portfolio', 'contact', 'send-mail'],
		responsiveWidth: 900,
		responsiveHeight: 600,
		scrollOverflow: true,
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Cover', 'About Us', 'Our Team', 'Our Services', 'Portfolio', 'Contact', 'Send Mail']
	});

	$('.image').visibility({
        type: 'image',
        transition: 'vertical flip in',
        duration: 500
  	});

  	// $('.ui.sticky').sticky({
   //      context: '#section-1'
  	// });
});