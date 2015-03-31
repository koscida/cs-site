$(document).ready(function (){	
	/*var doit;
	$(window).resize(function () {
		clearTimeout(doit);
		doit = setTimeout(sectionHeight, 100);
	});*/
	sectionHeight();
	
	/* navigation */
	var sections = {},
		sectionsHeight = {},
		it = 0,
		_height = $(window).height(),
		currentSection = 0;
	$('.section').each(function(){
		sections[it] = $(this).offset().top - 40;
		sectionsHeight[it] = $(this).height();
		it++;
	});
		
	$(".link").click(function() {
		var index = $(this).index();
		$('html, body').animate({
			scrollTop: (sections[index])
		}, 1000);
	});
	
	
	$(document).scroll(function() {
		var pos = $(this).scrollTop();
		
		if(pos >= sections[currentSection] && pos < (sections[currentSection] + sectionsHeight[currentSection])) {}
		else {
			for(i in sections){
				if(pos >= sections[i] && pos < (sections[i] + sectionsHeight[i])){
					//alert("pos: " + pos + "\npos + height: " + pos+_height + "\ni: " + i + "\ncurrsec: "+ currentSection);
					var j = parseInt(i) + 1;
					$(".link.active").removeClass("active");
					$(".link:nth-of-type("+j+")").addClass("active");
					currentSection = i;
				}  
			}
		}
			
	});
	
	
	
	
	
});




function sectionHeight() {
	var height = window.innerHeight;
	$(".section").css("min-height", height);
}