function ImpulseSubMenu() {
	var Menu = 0;
	$(".flechita").on("click",function(){
		switch(Menu){
			case 0:
				$(".Options-User").removeClass("displaynone");
				Menu = 1;
			break;
			case 1:
				$(".Options-User").addClass("displaynone");
				Menu = 0;
			break;
		}			
	});		
} 
