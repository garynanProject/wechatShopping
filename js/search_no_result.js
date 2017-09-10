// 填满Body高度 ---------------------------------------------------------------------
	bodyHeight();

	window.onresize = function () {
		bodyHeight();
	}

// 封装函数 ---------------------------------------------------------------------
function bodyHeight () {
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	$('body').css('height' , clientHeight);
}
