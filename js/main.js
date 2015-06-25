$(function(){
	$('#rnd-menu').load('rnd-menu.html', function() {
		$('.'+$(this).data('active')).addClass('active');
	});
});