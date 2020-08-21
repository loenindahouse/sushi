$(window).load(function () {

	$('.hslider .iosSlider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		infiniteSlider: true,
		keyboardControls: true,
		snapSlideCenter: true,
		autoSlideTimer: 2000,
		autoSlideTransTimer: 3000,
		navNextSelector: $('.hslider__nav.next'),
		navPrevSelector: $('.hslider__nav.prev'),
		navSlideSelector: $('.hslider .spnav__item'),
		onSlideChange: promoSlideChange
	});

	function promoSlideChange(args) {
		$('.hslider .spnav__item').removeClass('active');
		$('.hslider .spnav__item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
	}



	/* filter */

	var $fltr = $('.fltr-rolls').isotope({
		itemSelector: '.fltr-rolls .fltr'
	});

	function setFilter() {
		var fltrVal = '';

		$('.filter-btn').each(function () {
			var el = $(this);
			if (el.hasClass('active')) {
				var filterValue = el.data('filter');
				if (fltrVal.indexOf(filterValue) == -1 && filterValue != '*') {
					fltrVal = fltrVal + filterValue;
				}
			}
		});

		if (!fltrVal) {
			fltrVal = '*';
		}

		$fltr.isotope({ filter: fltrVal });
	}

	$('.filter-btn').on('click', function () {
		$(this).closest('.filter').find('.active').removeClass('active');
		$(this).addClass('active');

		setFilter();
	});

});


$(document).ready(function () {

	/* INCLUDE PLUGINS */

	$(".phone-mask input").mask("+7 (999) 999-99-99");

	$(".fb").fancybox({
		touch: false
	});

	$('input[type="checkbox"], input[type="radio"], select').styler({ selectSearch: true });



	/* BASE FUNCTION */

	function setContentH() {
		var h = $(window).height() - $('.footer').height() - $('.header').height() - parseInt($('.header').css('margin-bottom'));
		$('.page-content').css('min-height', h)
	}

	setContentH();
	$(window).resize(function () {
		setContentH();
	});

	window.mobileAndTabletcheck = function () {
		var check = false;
		(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	}

	if (window.mobileAndTabletcheck()) {
		$('.phone_num').each(function () {
			num = $(this).data('phone');
			num_text = $(this).text();
			$(this).html('<a href="tel:' + num + '">' + num_text + '</a>');
		});
	}


	$(".goto_top").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	$(".goto").click(function () {
		var scroll = 0;
		scroll = $('#' + $(this).data('go')).offset().top - 20;
		$("html, body").animate({
			scrollTop: scroll
		}, 1000);
		return false;
	});

	$(".filter-toggle").click(function () {
		$(this).toggleClass('open');
		$('.filter__detail').slideToggle();

		return false;
	});

	

	$(window).bind('scroll', function () {
		if ( $('.h-fly').length ) {
			var tp = $('.h-fly').offset();
			tp = tp.top;

			if ($(window).scrollTop() > tp) {
				$('.fix-scroll').addClass('fixed');
			} else {
				$('.fix-scroll').removeClass('fixed');
			}


			var tp = $('.header').height();

			if ($(window).scrollTop() > tp) {
				$('.header .h-cart').addClass('fixed');
			} else {
				$('.header .h-cart').removeClass('fixed');
			}
		}
	});
	



	$(".top-part-nav .part-nav__link").click(function () {
		var el = $('.tab-part-nav').find('.part-nav__link').eq($(this).parent().index());
		el.trigger('click');
	});


	/* tabs */

	$('.tabs__header').delegate('.tabs__item:not(.active)', 'click', function () {
		$(this).addClass('active').siblings().removeClass('active')
			.parents('.tabs').find('.tabs__box').hide().removeClass('visible').eq($(this).index()).show().addClass('visible');
	});

	$(".tabs__item").click(function () {
		if (window.matchMedia('(max-width: 576px)').matches) {
			
			var scroll = 0;
			var pNav = $(this).closest('.part-nav')
			scroll = pNav.offset().top + pNav.height();
			$("html, body").animate({
				scrollTop: scroll
			}, 1000);

		}
	});


	/* add to cart */

	var cart = Array();

	function cartInit(){
		var arr = [];

		if ($.cookie('cart')){
			cart = $.cookie('cart').split(';');
			cart.forEach(function(item, i) {
				if (item){
					item = item.split(':');
					item[1] = parseInt(item[1]);
					arr[i] = item;
				}
			});
		}
		cart = arr;
	}

	cartInit()

	function saveCart(){
		cartStr = [];
		cart.forEach(function(item, i, cart) {

			cartStr[i] = item.join(':');
			
		});

		cartStr = cartStr.join(';')

		$.cookie('cart', cartStr);
	}

	function removeCartItem(id){

		cart.forEach(function(item, i, cart) {
			if (cart[i][0] == id){

				cart.splice(i, 1);

				saveCart();
			}
		});

	}

	function addCart(id, count){
		if ($.cookie('cart')){
			if ( !($.cookie('cart').indexOf(id+':') + 1) ){
				cart.push( Array(id, parseInt(count)) );
			}else{
				cart.forEach(function(item, i, cart) {
					if (cart[i][0] == id){
						cart[i][1] += parseInt(count);
					}
				});
			}
		}else{
			cart[0] = Array(id, parseInt(count));
		}

		saveCart();
	}


	function hCartLoad(){
		var count = 0;
		var total = 0;

		cart.forEach(function(item, i, cart) {
			count += cart[i][1];
			total += parseInt( spaceRemove( $('#'+cart[i][0]).find('.card__price').text() ) ) * cart[i][1];
		});

		$('.h-cart__total span').text(numFormat(total));
		$('.h-cart__count span').text( count );
	}

	hCartLoad();




	$('.add-to-cart-animate').on('click', function () {
		
		if (window.matchMedia('(min-width: 577px)').matches) {
			var cart = $('.tabs .h-cart');
			var imgtodrag = $(this).closest('.card').find(".card__photo img").eq(0);
			if (imgtodrag) {
				var imgclone = imgtodrag.clone()
					.offset({
					top: imgtodrag.offset().top,
					left: imgtodrag.offset().left
				})
					.css({
					'opacity': '0.5',
					'position': 'absolute',
					'width': imgtodrag.width(),
					'height': imgtodrag.height(),
					'z-index': '100'
				})
					.appendTo($('body'))
					.animate({
					'top': cart.offset().top + 10,
					'left': cart.offset().left + 10,
					'width': 75,
					'height': 32
				}, 500);
				
				imgclone.animate({
					'width': 0,
					'height': 0
				}, function () {
					$(this).detach()
				});
			}

		}
		
    });


	$('.add-to-cart').on('click', function () {
		if ($(this).hasClass('add-promo')) {
			var count = $(this).data('count');
			var price = $(this).data('price');
			var id = $(this).data('id');
		}
		else{
			var card = $(this).closest('.card');
			var count = parseInt( card.find('.counter__text').val() );
			var price = parseInt( spaceRemove( card.find('.card__price').text() ) );
			var id = card.data('id');
		}
		

		var elCartTotal = $('.header .h-cart__total span');
		var elCartCount = $('.header .h-cart__count span');

		var cartTotal = parseInt( spaceRemove( elCartTotal.text() ) );
		var cartCount = parseInt(elCartCount.text());

		cartTotal += price * count;
		cartCount += count;


		elCartTotal.text(numFormat(cartTotal));
		elCartCount.text(cartCount);

		$('.tab-cart .h-cart__total span').text(numFormat(cartTotal));
		$('.tab-cart .h-cart__count span').text(cartCount);


		addCart(id, count);
	});
	



	/* --- item counter  --- */

	$(".counter input").on("keydown", function (event) {
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39) {
		}
		else {
			if (event.keyCode == 38) {
				var value = parseInt($(this).val());
				$(this).val(value + 1).change();
			}

			if (event.keyCode == 40) {
				var value = parseInt($(this).val());
				var min = 1;
				if ($(this).data('mincount')) {
					min = $(this).data('mincount');
				}

				if (value > min) $(this).val(value - 1).change();
			}

			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
				event.preventDefault();
			}
		}
	});

	$(".counter input").on("keyup", function () {
		var min = 2;
		if ($(this).data('mincount')) {
			min = $(this).data('mincount') + 1;
		}

		if ($(this).val() < min) $(this).val(min - 1).change();
	});

	$(".counter span").click(function () {

		var min = 1;
		var input = $(this).closest('.counter').find('input');
		var value = parseInt(input.val());

		if (input.data('mincount')) {
			min = input.data('mincount');
		}


		if ($(this).hasClass('down') && value > min) input.val(value - 1).change();
		if ($(this).hasClass('up')) input.val(value + 1).change();

		return false;
	});


	$('.counter input[type="text"]').each(function () {
		$(this).val($(this).prop('defaultValue'));
	});




	function numFormat(n) {
		if (n > 999) {
			n = String(n).replace(/()(?=(\d{3})+$)/g, '$1 ');
		}
		return n;
	}

	function spaceRemove(str) {
		return str.replace(/\s/g, '');
	}



	function cartCalc() {
		var summ = 0;

		$('.cart-item').each(function () {
			var price = parseInt( spaceRemove( $(this).find('.cart-item__price').text() ) );
			var count = $(this).find('.cart-item__count').val();
			var total = 0;

			total = price * count;

			summ += total;

			$(this).find('.cart-item__total').text( numFormat(total) + ' ₸' );
		});

		$('.cart-total__val').text( numFormat(summ) );
	}

	cartCalc();

	$(".cart-item__count").change(function() {
		cartCalc();
	});

	$(".cart-item__remove").click(function () {
		removeCartItem( $(this).closest(".cart-item").data('id') );
		$(this).closest(".cart-item").remove();
		cartCalc();

		if ( !$('.cart-item').length ){
			$('.cart').remove();
			$('.cart-empty').show();

			$.removeCookie('cart'); 
		}
	});
	

	function getOrderList(){
		var $list = '<ul style="list-style: none; padding: 0; margin: 0;">';

		$('.cart-item').each(function () {
			var title = $(this).find('.cart-item__title').text();
			var count = $(this).find('.cart-item__count').val();

			$list += '<li>'+title+': '+count+' шт.</li>';
		});

		$list += '</ul>';

		return $list;
	}


	/* form submit  */

	function clearForm() {
		$('input[type="text"], textarea').each(function () {
			$(this).val('');
		});
	}

	function isEmpty(str) {
		return (!str || 0 === str.length);
	}

	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	$(".fel__wrap").click(function () {
		$(this).addClass('active');
		$(this).addClass('focus');
		$(this).find('input').focus();
		$(this).find('textarea').focus();
	});

	$(".fel__wrap input, .fel__wrap textarea").focusout(function () {
		if ($(this).val().length == 0 || ~$(this).val().indexOf('(___) ___-__-__') || ($(this).hasClass('phone') && $(this).val().indexOf("_") >= 0)) {
			$(this).closest('.fel__wrap').removeClass('active');
		}

		$(this).closest('.fel__wrap').removeClass('focus');
	});

	$('.form-validate input, .form-validate textarea').focus(function () {
		$(this).parent().removeClass('error');
	});

	$(".form-validate input[type=checkbox]").change( function(){
		$(this).parent().removeClass('error');
		$(this).closest('.forms__check').removeClass('error');
	});

	

	$(".form-submit").click(function () {
		var parent = $(this).closest('.form-validate');
		var form_error = false;
		
		parent.find('.vrf__required').each(function () {
			if (isEmpty($(this).val())) {
				$(this).parent().addClass('error');
				form_error = true;

				$(this).parent().find('.fel__error').text('Это поле обязательно для заполнения');
			}
		});

		parent.find('.jq-checkbox.vrf__check').each(function () {
			if ( !$(this).hasClass('checked') ) {
				$(this).parent().addClass('error');
				form_error = true;

				$(this).parent().find('.fel__error').text('Это поле обязательно для заполнения');
			}
		});

		parent.find('.vrf__email').each(function () {
			if (!IsEmail($(this).val())) {

				$(this).parent().addClass('error');

				form_error = true;

				$(this).parent().find('.fel__error').text('Не верный формат электронной почты');
			}
		});

		if (!form_error) {
			var order = getOrderList();
			var name = parent.find('.el-name').val();
			var phone = parent.find('.el-phone').val();
			var addr = parent.find('.el-addr').val();
			var comment = parent.find('.el-comment').val();
			var total = $('.cart-total__val').text();
									
			$.post('sendmail.php', {name:name, tel:phone, addr:addr, comment:comment, total:total, order:order}, 
				function(data)
				{
					$('.sendReport').trigger('click');
					parent.find('.forms').hide();
					parent.find('.confirm-box').show();
					$.removeCookie('cart');
				}
			);
		} else {
		}

		return false;
	});	






});

