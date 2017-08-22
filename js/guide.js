$(document).ready(function() {
	$(".menu div").click(function() {
		$(".menu div").removeClass('active');
		$('.content div').removeClass('active');
		$(this).addClass('active');
		$('.content div.' + $(this).data('type')).addClass('active');
		if ($(this).data('type') == 'giftcard') {
			$('.giftcard section:last-child div:first-child').addClass('active');
			$('.giftcard-types:first-child').addClass('active');
		}
	});
	$('.giftcard-types').click(function() {
			$('.giftcard-types').removeClass('active');
			$(this).addClass('active');
			$('.giftcard section:last-child div').removeClass('active');
			$('.giftcard section:last-child div#' + $(this).data('type')).addClass('active');
		});
});