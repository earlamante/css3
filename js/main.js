$(function(){
	$('#rnd-menu').load('rnd-menu.html', function() {
		$('.'+$(this).data('active')).parents('li').addClass('active');

		$('#main_menu ul').each(function () {
			var height = 0;
			var elems = $(this).find('>li');
			for(var y=0; y<elems.length ;y++)
				height += elems.eq(y).outerHeight();
			$(this).attr('data-height',height);
		});

		$('#main_menu li').hover(
			function(){
				var elem = $(this).find('ul');
				elem.css('height', elem.data('height'));
			},
			function(){
				var elem = $(this).find('ul');
				elem.css('height', 0);
			}
		);
	});
});