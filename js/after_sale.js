// 填满Body高度 ---------------------------------------------------------------------
	// 动态设置body高度 ----------------------------
		bodyHeight();

		window.onresize = function () {
			bodyHeight();
		}

	// 点击改变当前点击checkbox背景
		checkedThis();

// 封装函数 ---------------------------------------------------------------------
	// 动态设置body高度 
		function bodyHeight () {
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			$('body').css('min-height' , clientHeight);
		}

	// 点击改变当前点击checkbox背景
		function checkedThis () {
			$('.after_sale_check_box_inner').each( function (index , element) {
				$(this).on( 'click' , 'input' ,function () {
					if ( $(this).prop('checked') == true ){
						$(this).parent().attr('class' , 'after_sale_check_box_inner active');
					}else {
						$(this).parent().attr('class' , 'after_sale_check_box_inner');
					}
				} );
			} );
		}
			




