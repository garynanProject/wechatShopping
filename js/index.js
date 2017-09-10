// 函数调用 --------------------------------------
	
	// 主轮播图 ----------------------------
		mainCarousel();

	// 横幅广告轮播 ----------------------------
		bannerAdCarousel();

	// 限时活动 ----------------------------

		// 调用倒计时
			limit();
		// 轮播商品 
			limitCarousel();
	 
	// 底部工具栏 ----------------------------

		// 底部工具栏点击激活
			beActive();

	// 火箭返回顶部
		toTop();

// 函数封装 --------------------------------------

	// 事件绑定函数
		function setEvent(obj , ev , fn) {
			if(obj.attachEvent){
				obj.attachEvent('on' + ev , fn);
			}else{
				obj.addEventListener(ev , fn , false);
			}
		}

	// 主轮播图
		function mainCarousel() {
			var MainAd = new Swiper( '.index_main_carousel_box_inner' , {
				autoplay: 3000,
				loop: true,
				pagination: '.index_main_carousel_box_tags',
			} );
		}

	// 横幅广告轮播
		function bannerAdCarousel() {
			var bannerAd = new Swiper( '.banner_box_inner' , {
				autoplay: 3000,
				loop: true,
				pagination: '.banner_box_tags',
			} );
		}
	
	// 倒计时
		function limit() {
			var target = new Date('2017/8/6 18:00:00');
			
			counting();
			var timer = setInterval( counting , 1000 );

			function counting(){
				var now =new Date();
				var nCounter = target - now;

				var countHours = parseInt(nCounter/1000/60/60);
				if(countHours < 10) countHours = '0' + countHours ;

				var countMinutes = parseInt(nCounter/1000/60%60);
				if(countMinutes < 10) countMinutes = '0' + countMinutes ;

				var countSeconds = parseInt(nCounter/1000%60);
				if(countSeconds < 10) countSeconds = '0' + countSeconds ;

				if (nCounter < 1) {
					clearInterval(timer);
					$('.limit_hours').html('00');
					$('.limit_minutes').html('00');
					$('.limit_seconds').html('00');
				}else {
					$('.limit_hours').html(countHours);
					$('.limit_minutes').html(countMinutes);
					$('.limit_seconds').html(countSeconds);
				}
			}
		}

	// 限时商品轮播
		function limitCarousel() {
			var limitCarousel = new Swiper( '.limit_items', {
				slidesPerView: 'auto' ,
				spaceBetween: 30 ,
			} );
		}

	// 底部工具栏点击激活
		function beActive() {
			$('.index_tools_inner a').each( function (index , element) {
				$(this).click( function () {
					var now = index;
					$('.index_tools_inner a').each( function () {
						this.className = 'index_tools_item';
						if ( now == index) {
							$('.index_tools_inner a')[now].className = 'index_tools_item active';
						}
					} );
				} );
			} );
		}

	// 火箭返回顶部
			function toTop() {

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

		

