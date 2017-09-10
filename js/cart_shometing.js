// 调用函数 ---------------------------------------------------------------------
	
	// 动态设置body高度 ----------------------------
		bodyHeight();

		window.onresize = function () {
			bodyHeight();
		}

	// chockebox勾选图像转换 ----------------------------
		checked();

	// 底部工具栏 ----------------------------

		// 底部工具栏点击激活
			beActive();

	// 数量增减
		counter();

// 封装函数 ---------------------------------------------------------------------

	// 事件绑定函数
		function setEvent(obj , ev , fn){
			if(obj.attachEvent){
				obj.attachEvent('on' + ev , fn);
			}else{
				obj.addEventListener(ev , fn , false);
			}
		}

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

	// check图像转换
		function checked () {
			// 动态居中ckeckbox
				toMiddle();
				setEvent(window , 'resize' , toMiddle);
			    
			    function toMiddle () {
			    	$('.check_wood').css('margin-top' , function ( index , value) {
						var target = 0;
						target = $('.wood_box_inner').height()/2 - $('.check_box').height()/2;
						return target;
					});
			    }
				

			// 点击改变当前点击checkbox背景
				$('.cart_woods_box').on('click' , 'input[type="checkbox"]' , function() {
					if ( $(this).prop('checked') == true ){
						$(this).parent().css('background' , 'url("../img/checked.png") no-repeat center center' );
					}else {
						$(this).parent().css('background' , '#bbb' );
					}
				});

			// 全选\全部不选
				$('.check_all_box').click( function () {
					if ( $('.check_all_box input').prop('checked') == true ){
						$('.check_box').css('background' , 'url("../img/checked.png") no-repeat center center' );
					}else {
						$('.check_box').css('background' , '#bbb' );
					}
				} );
		}

	// 数量增减
		function counter() {
			var nBase = 1;

			$('.cart_woods_box').on( 'blur' , '.cart_wood_quantity' , function(){
				if ( $(this).val() > 999 ){
					$(this).val(999);
				}else if ( $(this).val() < 1 ){
					$(this).val(1);
				}
			} );

			$('.cart_woods_box').on( 'click' , '.cart_wood_adding' , function(){
				var target = $(this).parent().children('.cart_wood_quantity');
				nBase = $(target).val();

				nBase++;
				if ( nBase > 999 ){
					nBase = 999;
				}

				$(target).val( nBase );
			} );

			$('.cart_woods_box').on( 'click' , '.cart_wood_minusing' , function(){
				var target = $(this).parent().children('.cart_wood_quantity');
				nBase = $(target).val();

				nBase--;
				if ( nBase < 1 ){
					nBase = 1;
				}

				$(target).val( nBase );
			} );
		}

	//数据渲染
	    // function cb(data) {
	    // 	console.log(data);
	    // 	var str = '';

	    // 	for (var i=0; i<data.length; i++){

	    // 		str +=  '<div class="row wood_box">'+
					// 		'<div class="wood_box_inner" >'+
					// 			'<!-- 勾选框 -->'+
					// 			'<div class="col-xs-2 cart_woods_check">'+
					// 				'<span class="check_box check_wood">'+
					// 					'<input type="checkbox">'+
					// 				'</span>'+
					// 			'</div>'+
					// 			'<!-- 详细信息 -->'+
					// 			'<div class="col-xs-10 cart_woods_item">'+
					// 				'<div class="media">'+
					// 					'<!-- 缩略图 -->'+
					// 				   ' <div class="media-left cart_woods_img">'+
					// 					    '<a href="#">'+
					// 					        '<img class="media-object" src="'+ data[i].img +'" alt="...">'+
					// 					    '</a>'+
					// 				    '</div>'+
					// 				    '<!-- 信息文字 -->'+
					// 				    '<div class="media-body cart_woods_txt">'+
					// 				    	'<!-- 标题 -->'+
					// 					    '<h5 class="media-heading cart_woods_title">'+ data[i].title +'</h5>'+
					// 					    '<!-- 价格 -->'+
					// 					    '<p class="cart_wood_price_box">'+
					// 					    	'<span class="cart_wood_price_mark">¥</span>'+
					// 					    	'<span class="cart_wood_price">'+ data[i].price +'</span>'+
					// 					    '</p>'+
					// 					    '<!-- 数量控件 -->'+
					// 					    '<form action="" class="cart_wood_quantity_box">'+
					// 					    	'<span class="cart_wood_adding"><img src="./img/adding.png" alt=""></span>'+
					// 					    	'<input type="text" value="1" class="cart_wood_quantity">'+
					// 					    	'<span class="cart_wood_minusing"><img src="./img/minusing.png" alt=""></span>'+
					// 					    	'<!-- 删除这个商品 -->'+
					// 					    	'<span class="del_this_wood_box">'+
					// 					    		'<span class="del_this_wood">'+
					// 					    			'<img src="./img/del.png" alt="">'+
					// 					    			'删除'+
					// 					    		'</span>'+
					// 					    	'</span>'+
					// 					   ' </form>'+
					// 				    '</div>'+
					// 				'</div>'+
					// 			'</div>'+
					// 		'</div>'+
					// 	'</div>'  ;
	    // 	}
	    	
	    // 	$('#list1').html(str);
	    // }
