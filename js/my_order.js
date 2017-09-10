// 填满Body高度 ---------------------------------------------------------------------
	// 动态设置body高度 ----------------------------
		bodyHeight();

		window.onresize = function () {
			bodyHeight();
	}

	// 顶部工具栏点击激活
		 beActiveTop();


// 封装函数 ---------------------------------------------------------------------
	// 动态设置body高度 
		function bodyHeight () {
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			$('body').css('min-height' , clientHeight);
		}

	// 顶部工具栏点击激活
		function beActiveTop () {
			$('.my_order_top_nav_box_inner li').each( function (index , element) {
				$(this).click( function () {
					var now = index;
					$('.my_order_top_nav_box_inner li').each( function () {
						this.className = 'col-xs-3 my_order_top_nav_item';
						if ( now == index) {
							$('.my_order_top_nav_box_inner li')[now].className = 'active col-xs-3 my_order_top_nav_item';
						}
					} );
				} );
			} );
		}


