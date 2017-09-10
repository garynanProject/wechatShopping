// 函数调用
	// 启用轮播图
		wood();

	// 选择商品规格
		woodStyle();

		selectStyle();

		addOrM();
		
// 函数封装

	// 启用轮播图
		function  wood() {
			var woodCarousel = new Swiper( '.woods_details_carousel_inner' ,  {
				pagination: '.woods_details_carousel_tags',
				loop: true,
				autoplay: 3000
			});
		}

	// 选择商品规格

		// 控件动画
		function woodStyle() {
			$('.woods_details_tools_item').each( function() {

				$(this).on( 'click' , function() {
					$('.woods_details_zhezhao').css( 'display' , 'block' );

					$('.woods_details_zhezhao').animate( {
						opacity: .3,
						filter: 'alpha(opacity:'+ 30 +')'
					} , 'normal' , function() {
						$('.woods_details_tools_hidden').css( 'display' , 'block' );

						$('.woods_details_tools_hidden').animate( {
							bottom: 0
						} , 'normal' );
					});
				} );

			} );

			$('.woods_details_tools_hidden_style_x').on( 'click' , function() {
				$('.woods_details_tools_hidden').animate( {
					bottom: '-9.62rem',
				} , 'normal' , function() {
					$('.woods_details_tools_hidden').css( 'display' , 'none' );

					$('.woods_details_zhezhao').animate( {
						opacity: 0,
						filter: 'alpha(opacity:'+ 0 +')'
					} , 'normal' , function() {
						$('.woods_details_zhezhao').css( 'display' , 'none' );
					});
				});

			} );
		}

		// 选择规格
		function selectStyle() {
			$('.woods_details_tools_hidden_style_txt').on( 'click' , 'li' , function() {
				var aTarget = $(this).parent().children('li');

				for( var i=0; i<aTarget.length; i++ ){
					aTarget[i].className = '';
				}

				this.className = 'active';
			} );
		}

		// 数量增减
		function addOrM() {
			var nBase = 1;

			$('.woods_details_tools_hidden_style_counter_item input').on( 'blur' , function(){
				if ( $(this).val() > 999 ){
					$(this).val(999);
				}else if ( $(this).val() < 1 ){
					$(this).val(1);
				}
			} );

			$('.woods_details_tools_counter_adding').on('click' , function() {
					nBase = $('.woods_details_tools_hidden_style_counter_item input').val();

					nBase++;
					if ( nBase > 999 ){
						nBase = 999;
					}

					$('.woods_details_tools_hidden_style_counter_item input').val( nBase );
			});

			$('.woods_details_tools_counter_m').on('click' , function() {
					nBase = $('.woods_details_tools_hidden_style_counter_item input').val();
					
					nBase--;
					if ( nBase < 1 ){
						nBase = 1;
					}

					$('.woods_details_tools_hidden_style_counter_item input').val( nBase );
			});
		}

