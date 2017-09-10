// 函数调用 --------------------------------------

	// 火箭返回顶部
		toTop();

	// 启用轮播图
		mainPlayer();

	// 分类点击激活
		tagActive();

// 函数封装 --------------------------------------

	// 事件绑定函数
		function setEvent(obj , ev , fn){
			if(obj.attachEvent){
				obj.attachEvent('on' + ev , fn);
			}else{
				obj.addEventListener(ev , fn , false);
			}
		}

	
	// 火箭返回顶部
			function toTop () {

			// 火箭自动垂直居中（适应屏幕）
				middleRocket();
				setEvent(window , 'resize' , middleRocket)

			// 火箭定位在屏幕的右下角（滑动）
				moveRocket();

			// 点击火箭慢慢滚动回顶部
				$('.to_top').click( function () {
					 moveScreen (0);
				} );

			}

			function middleRocket () {
				var imgMarginTop = ( $('.to_top').height() - $('.to_top img').height() ) / 2 + 'px';
				$('.to_top img').css('margin-top' , imgMarginTop);
			}

			function moveRocket () {
				var oRocket = $('.to_top')[0] ;
				var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
				var bottom = 0;
				if( $('body').width() < 375 ){
						bottom = 54 ;
					}else if( $('body').width() >= 375 && $('body').width()< 414 ){
						bottom = 63 ;
					}else if( $('body').width() >= 414 && $('body').width()< 600 ){
						bottom = 70 ;
					}else if( $('body').width() >= 600 && $('body').width()< 740 ){
						bottom = 102 ;
					}else if( $('body').width() >= 740 && $('body').width()< 768 ){
						bottom = 126 ;
					}else if( $('body').width() >= 768 && $('body').width()< 992 ){
						bottom = 129 ;
					}else if( $('body').width() >= 992 && $('body').width()< 1200){
						bottom = 168 ;
					}else if( $('body').width() >= 1200){
						bottom = 204 ;
					}

				setEvent(window , 'resize' , resetData) ;

				function resetData () {
					clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
					scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
					var realMaxSro = parseInt( $('body').css('height') ) - clientHeight;
					if(scrollTop > realMaxSro){
						scrollTop = realMaxSro;
					}

					if( $('body').width() < 375 ){
						bottom = 54 ;
					}else if( $('body').width() >= 375 && $('body').width()< 414 ){
						bottom = 63 ;
					}else if( $('body').width() >= 414 && $('body').width()< 600 ){
						bottom = 70 ;
					}else if( $('body').width() >= 600 && $('body').width()< 740 ){
						bottom = 102 ;
					}else if( $('body').width() >= 740 && $('body').width()< 768 ){
						bottom = 126 ;
					}else if( $('body').width() >= 768 && $('body').width()< 992 ){
						bottom = 129 ;
					}else if( $('body').width() >= 992 && $('body').width()< 1200){
						bottom = 168 ;
					}else if( $('body').width() >= 1200){
						bottom = 204 ;
					}

					$(oRocket).css('top' , clientHeight + scrollTop - parseInt( $(oRocket).css('height') ) - bottom + 'px')
				}

				setEvent(window , 'scroll' , scrolling) ;

				function scrolling () {
					scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
					var targetTop = clientHeight + scrollTop - parseInt( $(oRocket).css('height') ) - bottom ;

					move( oRocket , {
						top: targetTop
					} );
				}
			}

			function moveScreen (target) {
					clearInterval(timer) ;
					var scrollTop = 0 ;
					var speed = 0 ;

					var timer = setInterval( function () {
						scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;

						speed = (target - scrollTop) / 12 ;
						speed = speed>0 ? Math.ceil(speed): Math.floor(speed) ;


						if(scrollTop == target){
							clearInterval(timer) ;
						}else{
							if(document.documentElement.scrollTop){
								document.documentElement.scrollTop = scrollTop + speed ;
							}else{
								document.body.scrollTop = scrollTop + speed ;
							}
						}

					} , 15);
			}


	// 启用轮播图	
		function mainPlayer() {
			var mainCarousel = new Swiper( '.good_woods_advice_carousel_inner' , {
				autoplay: 3000 ,
				loop: true,
				pagination: '.good_woods_advice_carousel_tags',
			});
		}

	// 分类点击激活
		function tagActive() {
			$('.good_woods_advice_class_item_box').on( 'click' , 'li' , function() {
				var aTarget = $('.good_woods_advice_class_item_box li');
				for( var i = 0; i<aTarget.length; i++){
					aTarget[i].className = 'col-xs-2 good_woods_advice_class_item';
				}

				this.className = 'col-xs-2 good_woods_advice_class_item active';
			} );
			
		}
		

		

