$(function() {
	// tabs init
	var tabItem = $('.tabs-nav ul li');
	var tab = $('.tab');
	
	tabItem.eq(0).addClass('active');
	tab.eq(0).show().siblings().hide();

	tabItem.click(function(){
		var href = $(this).find('a').attr('href');
		var newTab = $(href);

		$(this).addClass('active').siblings().removeClass('active');
		newTab.fadeIn().siblings().hide();

		return false;
	});

	//custom radio buttons
	$('input[type="radio"]').jCheckboxes();

	//add class first
	$('.table-holder table th:first, .table-holder table td:first-child').addClass('first');


	//calculate prices
	$('.cols .col').each(function() {
		//vars
		var radio = $(this).find('.jcb-radio');
		var checkedRadio = $(this).find('.jcb-checked');
		var content = $(this).find('.check-list ul');

		//showing features for each option
		content.hide();
		content.eq(checkedRadio.parent('.row').index()).show();

		radio.click(function() {
			var idx = $(this).parent('.row').index();
			$(this).parents('.col').find('.check-list ul').eq(idx).fadeIn().siblings('ul').hide();

			calc();
		});
	});

	calc();

	function calc() {
		var hardwarePrice = $('.calculation-details .hardware-price span.price strong');
		var softwarePrice = $('.calculation-details .software-price span.price strong');
		var total = $('.calculation-total .total strong');
		var subTotal = $('.calculation-total .total p.sub-total span');
		var	hardwareVal = $('.hardware-col .jcb-checked').prev('input').val();
		var	softwareVal = $('.software-col .jcb-checked').prev('input').val();
		var freeMsg = 'Free with hardware purchase';

		hardwarePrice.text('$'+ hardwareVal);

		if (hardwareVal > 0) {
			softwarePrice.text(freeMsg).css({'font-weight': 'normal'});
			total.text('$'+ hardwareVal);
		} else {
			softwarePrice.text('$'+ softwareVal).css({'font-weight': 'bold'});
			total.text('$'+ softwareVal);
		};

		subTotal.text('$'+ softwareVal);	
	};
});