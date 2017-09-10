// 填满Body高度 ---------------------------------------------------------------------
	// 动态设置body高度 ----------------------------
		bodyHeight();

		window.onresize = function () {
			bodyHeight();
	}

	// 底部工具栏 ----------------------------

		// 底部工具栏点击激活
			beActive();

// 封装函数 ---------------------------------------------------------------------

	// 动态设置body高度 
		function bodyHeight () {
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			$('body').css('min-height' , clientHeight);
		}

	// 底部工具栏点击激活
		function beActive () {
			$('.footer_tools_box li').each( function (index , element) {
				$(this).click( function () {
					var now = index;
					$('.footer_tools_box li').each( function () {
						this.className = 'col-xs-3';
						if ( now == index) {
							$('.footer_tools_box li')[now].className = 'active col-xs-3';
						}
					} );
				} );
			} );
		}