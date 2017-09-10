// 填满Body高度 ---------------------------------------------------------------------
	// 动态设置body高度 ----------------------------
		bodyHeight();

		window.onresize = function () {
			bodyHeight();
	}

	// location.reload()
		reloading();

	// head_adress_tag 切换状态
		spinMark();

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

	// head_adress_tag 切换状态
		function spinMark () {
			var flag = 0;
			var tab = 0;
			// 自动居中标志
				$('.head_adress_tag').css('line-height' , $('.head_adress_box').height() + 'px');

				$('.head_adress_box').on('click' , function () {
					if( tab == 1){
						return false;
					}else{
						tab = 1;
						setTimeout( function () {
							tab = 0;
						} , 500 );
					}

					flag++ ;
					if(flag > 1){
						flag = 0;
					}
					if (flag == 1){
						$('.head_adress_tag')[0].className = 'glyphicon glyphicon-menu-down pull-right head_adress_tag' ;
					}else{
						$('.head_adress_tag')[0].className = 'glyphicon glyphicon-menu-right pull-right head_adress_tag' ;
					}
				});
		}


