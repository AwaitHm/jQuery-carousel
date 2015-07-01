(function($) {
		var defaults = {
			targetContent: "#target",
			btn: ".btn",
			showClass: "animation",
			
		}

		$.fn.carousel = function(options) {
			options = $.extend(defaults, options);
				//实现代码 
			window.setInterval(function(){
		      	 	var $target=$(options.targetContent);
		      	 	var $targetfind=$target.find(options.btn);
		      	 	var $targetone=$target.find(".btn:first");
		      	 	 $targetone.addClass(options.showClass);
		      	 	  console.log($targetone);
		      	 	  $targetone.bind("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(event) {
						var $this=$(this);
						$this.remove();
						$target.append($this);
						$this.removeClass(options.showClass);
					});
		      	 },1000);
		

		};

})(jQuery);