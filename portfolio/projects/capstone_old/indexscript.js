//========================================
//               Header
//========================================
function header(pageName)
{
	document.getElementById('header').innerHTML = 
			'<div class="grid960 centerOnly">'
		+		'<div id="title">'
		+			'<img src="images/tamtitle.png" class="centerOnly"/>'
		+			'<h2>'+pageName+'</h2>'
		+		'</div>'
		
		+		'<div class="spacer"></div>'
		
		+		'<div id="navigation" class="grid960 centerOnly">'
		+			'<a href="index.html">Home</a>'
		+			'<a href="thesis.html">Thesis Project</a>'
		+			'<a href="service.html">Service Project</a>'
		+			'<a href="portfolio.html">Portfolio</a>'
		+			'<a href="paper.html">Senior Paper</a>'
		+			'<a href="assignments.html">Assignments</a>'
		+		'</div>'
		
		+		'<div class="spacer"></div>'
		+	'</div>';
}

function footer()
{
	document.getElementById('footer').innerHTML =
			'<div >'
		+		'<a href="http://redwood.colorado.edu/halesi/capstone/" class="grid2 left">Course Webpage</a>'
		+		'<a href="weekly.html" class="grid2 left">Weelky Outline</a>'
		+		'<div id="webmaster" class="grid6 right">'
		+			'Brittany Ann Kos - brittany.kos@colorado.edu<br/>'
		+			'ATLS 4010 - University of Colorado at Boulder<br/>'
		+			'August 2011'
		+		'</div>'
		+	'</div>';
	
}