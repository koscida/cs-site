//========================================
//               Header
//========================================
function header()
{
	document.getElementById('header').innerHTML = 
			'<div id="title">'
		+		'<a href="index.html" class="round">'
		+			'<div id="titleImg"></div>'
		+		'</a>'
		+	'</div>'
	
		+	'<div id="navigation">'
		+		'<ul>'
		+			'<li><a href="current.html">Current Projects</a></li>'
		+			'<li><a href="past.html">Past Projects</a></li>'
		+			'<li><a href="resume.html">Resume</a></li>'
		+			'<li><a href="fun.html">Extras</a></li>'
		+		'</ul>'
		+	'</div>';
}

function footer()
{
	document.write(
			'<div id="webmaster">'
	+			'<p>Last Updated: Aug 2011<br/>Contact Webmaster at: Brittany.Kos@colorado.edu</p>'
	+		'</div>'
	);
}
