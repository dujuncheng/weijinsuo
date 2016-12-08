$(function(){
			function getimg () {
				var windowheight=$(window).width();
				var isSmallScrean=windowheight < 768;

				$("#ad>.carousel-inner>.item").each(function (i,item) {
					var $item =$(item);
					var imgsrc=$item.data(isSmallScrean?"image-sm":"image-lg");
					$item.css("backgroundImage","url("+imgsrc+")");
			})
			}
			$(window).on("resize",getimg);
		})