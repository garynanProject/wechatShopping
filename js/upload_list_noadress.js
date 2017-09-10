// 调用函数 -------------------------------------------------
	// 个人信息框背景自适应
		autoBg();
		setEvent(window , 'resize' , autoBg);

	// 使用积分按钮
		jiFenBar();

	// 自动垂直居中， 空地址栏文字
		emLocationTxt();

// 封装函数 -------------------------------------------------
	// 事件绑定函数
		function setEvent(obj , ev , fn){
			if(obj.attachEvent){
				obj.attachEvent('on' + ev , fn);
			}else{
				obj.addEventListener(ev , fn , false);
			}
		}

	// 个人信息框背景自适应
		function autoBg () {
			var str = ( $('.pesonal_box').width() + 'px' ) + ' ' + ( $('.pesonal_box').height() + 'px' );
			$('.pesonal_box').css('background-size' , str);
		}

	// 使用积分按钮
		function jiFenBar () {
			var oTarget = $('.use_jifen_selct_bar')[0];
			var oBtn = $('.use_jifen_selct_bar_tag')[0];
			var oMoveBox = $('.jifen_box')[0];
			var flag = 1;
			var target = 0;
			var moveTarget = 0;
			
			var keywordOn = 'use_jifen_selct_bar' + ' ' + 'this_turn_on' ;
			var keywordOff = 'use_jifen_selct_bar' + ' ' + 'this_turn_off' ;

			// 给工具栏默认样式
				jiFenBarStyle ();
				moveTarget = parseInt( $('.jifen_box').innerHeight());
			
			// 当页面尺寸发生改变时 ， 重新赋值
			setEvent(window , 'resize' , function () {

				target =  $('.use_jifen_selct_bar').width() - $('.use_jifen_selct_bar_tag').width() ;
				$(oBtn).css('margin-left' , target + 'px');
				$(oMoveBox).css('height' , $(oMoveBox).innerHeight() + 'px');
				
				moveTarget = $('.jifen_box').innerHeight();	
			});

			// 给target赋值
				target =  $('.use_jifen_selct_bar').width() - $('.use_jifen_selct_bar_tag').width() ;

			// 初始化
				$(oBtn).css('margin-left' , target + 'px');
				$(oMoveBox).css('height' , $(oMoveBox).innerHeight() + 'px');

			// 点击第一次开 ， 第二次关		
				$(oBtn).click( function () {
					flag++ ;
					if (flag > 1){
						flag = 0 ;
					}

					if (flag == 1){
						oTarget.className = keywordOn ;
						move(oBtn , {
							marginLeft: target
						});
						move(oMoveBox , {
							height: moveTarget	
						} , function () {
							$('.jifen_box_inner').css('display' , 'block');
						});
						
					}else {
						oTarget.className = keywordOff ;
						move(oBtn , {
							marginLeft: 0
						});
						move(oMoveBox , {
							height: 0
						});
						$('.jifen_box_inner').css('display' , 'none');
					}
				} );
		}

		// 给工具栏默认样式
		function jiFenBarStyle () {
			$('.use_jifen_selct_bar').height($('.use_jifen_box_inner').height() + 'px');
			$('.use_jifen_selct_bar').css('border-radius' , $('.use_jifen_box_inner').height() + 'px');

			$('.use_jifen_selct_bar_tag').css({
				height: $('.use_jifen_box_inner').height() - 4 + 'px' ,
				width: $('.use_jifen_box_inner').height() - 4 +  'px' ,
				borderRadius: $('.use_jifen_box_inner').height() - 4 + 'px' 
			});
		}

	// 自动垂直居中， 空地址栏文字
		function emLocationTxt (){
			$('.no_location_tips').css('line-height' , function () {
				var a = '';
				a =  $('.pesonal_box_inner_box').height() + 'px';
				return a;
			});
		}

		
	