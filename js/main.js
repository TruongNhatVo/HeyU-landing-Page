$(document).ready(function() {

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$('#main-nav').toggleClass('active');
	});

	let h  = $('.group-img').parent().height();
	$('.group-img').height(h);

	if($(window).width() < 780) {
		$('.group-img').height($('.group-img').parent().height() - 100);
		console.log($('.group-img').parent().height());
	}
});