// 填满Body高度 ---------------------------------------------------------------------
	// 动态设置body高度 ----------------------------
		bodyHeight();

		window.onresize = function () {
			bodyHeight();
		}

	// 点亮星星
		lightStar();

// 封装函数 ---------------------------------------------------------------------
	// 动态设置body高度 
		function bodyHeight () {
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			$('body').css('min-height' , clientHeight);
		}

	// 点亮星星
		function lightStar () {
			var aStar = $('.pingjia_header_txt_star i');
			var aSave = [];

			for ( var i=0;  i<aStar.length; i++){
				aStar[i].index = i;

				$(aStar[i]).on( 'click' , function () {
					var index = this.index;
					lighting(index);

					for (var i=0; i<aStar.length; i++){
						aSave[i] = $(aStar[i]).css('background');
					}
				} );

				$(aStar[i]).on( 'mouseover' , function () {
					var index = this.index;
					lightingHover(index);
				} );

				$(aStar[i]).on( 'mouseout' , function () {
					if (aSave.length !== 0){
						for (var i=0; i<aStar.length; i++){
							$(aStar[i]).css('background' , aSave[i]);
						}
					}else {
						$(aStar).css('background' , 'url("../img/star.png") no-repeat left center / .32rem .32rem');
					}	 
				} );
			}

			$(window).on('resize' , function () {
				$(aStar).css('background-size' , '.32rem .32rem');
			});

			function lighting (n) {
				for( var i=0 ; i<=n ; i++){
					aStar[i].style.background = 'url("../img/star_y.png") no-repeat left center / .32rem .32rem';
				}

				for( var j=n+1 ; j<aStar.length; j++){
					aStar[j].style.background = 'url("../img/star.png") no-repeat left center / .32rem .32rem';
				}
			}

			function lightingHover (n) {
				for( var i=0 ; i<=n ; i++){
					aStar[i].style.background = 'url("../img/star_y.png") no-repeat left center / .32rem .32rem';
				}

				for( var j=n+1 ; j<aStar.length; j++){
					aStar[j].style.background = 'url("../img/star.png") no-repeat left center / .32rem .32rem';
				}
			}
		}




