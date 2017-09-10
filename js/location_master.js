// 填满Body高度 ---------------------------------------------------------------------
	// 动态设置body高度 ----------------------------
		bodyHeight();

		window.onresize = function () {
			bodyHeight();
	}

	// 自适应checkbox宽高
		autoCheckBox();

	// location.reload()
		reloading();

	// check图像转换
		checkedAsRadio();

// 封装函数 ---------------------------------------------------------------------
	// location.reload()
		function reloading () {
			$(window).on('resize' , function () {
				location.reload();
			});
		}

	// 动态设置body高度 
		function bodyHeight () {
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			$('body').css('min-height' , clientHeight);
		}

	// 自适应checkbox宽高
		function autoCheckBox () {
			$('.check_default_loc span').width( $('.check_default_loc').height() );
			$('.check_default_loc span').height( $('.check_default_loc').height() );
		}

	// check图像转换
		function checkedAsRadio () {
			// 点击改变当前点击checkbox背景
				$('.check_default_loc_box input').each( function (index , element) {
					$(this).on( 'click' , function () {
						if( now == index) return false;

						var now = index;
						$('.check_default_loc_box input').each( function (index , element) {
							$(this).parent().css('background' , '#bbb' );
							$(this).prop('checked' , false);
						} );

						$(this).parent().css('background' , 'url("../img/checked.png") no-repeat center center');
						$(this).prop('checked' , true);
					} );
				} );
		}