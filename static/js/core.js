(function($){
	$(function(){
		// 放大缩小矢量图
		$(".header li").hover(function(){
			$(this).find("i").addClass("icon-2x");
		}, function(){
			$(this).find("i").removeClass("icon-2x");
		});
		// 飞上飞下
		$("#toTop").hide(), $("#toTop a:first").click(function() {
	        $("html,body").animate({
	            scrollTop:0
	        }, 200);
    	});
    	var a = parseInt($("body").css("height"));
    	$("#toTop a:last").click(function() {
	        $("html,body").animate({
	            scrollTop:a
	        }, 200);
	    	}), $(window).scroll(function() {
	        $(this).scrollTop() > 200 ? $("#toTop").fadeIn() :$("#toTop").fadeOut();
   	 	});
	});
})(jQuery);