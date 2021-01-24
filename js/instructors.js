// @ts-nocheck
$(
	function () {
		
		

		var Windowhight = $(window).height(),
			navbarhight = $(".navbar").innerHeight();

		console.log(navbarhight)
		
		$(".slide").height(Windowhight - navbarhight);
		
		$(".sliderimages").height(Windowhight - navbarhight);
		
		

		
	}
)

