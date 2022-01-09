$(document).ready(function(){
	$('.chat_icon').click(function(event) {
		$('.chat_box').toggleClass('active');
	});

	$('.conv-from-wrapper').convfrom({selectInputStyle: 'disable'});
})