function header2()
{
	document.getElementById('header').innerHTML = 
			'<div id="title" class="round">'
		+		'<a href="../index.html">'
		+			'<div id="titleImg"></div>'
		+		'</a>'
		+	'</div>'
	
		+	'<div id="navigation">'
		+		'<ul>'
		+			'<li><a href="../current.html">Current Projects</a></li>'
		+			'<li><a href="../past.html">Past Projects</a></li>'
		+			'<li><a href="../resume.html">Resume</a></li>'
		+			'<li><a href="../fun.html">Extras</a></li>'
		+		'</ul>'
		+	'</div>';
}

function subNavigation()
{
	document.write(
				'<p style="width:340px; height:50px; margin:90px 0px 0px -150px;">Extras - CSCI 3112 </p>'
		+		'<div id="subNavigation">'
		+			'<ul>'
		+				'<li><a href="index.html">CSCI 3112 <br/>Home</a></li>'
		+				'<li><a href="updates.html"><p>&nbsp;</p>Updates</a></li>'
		+				'<li><a href="examples.html">Weekly <br/>Examples</a></li>'
		+			'</ul>'
		+		'</div>'
	);
}
