function header(divName)
{
	var head = '';
	
	// logo
	head += 	'<div id="logo">';
	head += 		'<img src="images/logo500.png" alt="logo" />';
	head += 	'</div>';
	
	// navigation
	head +=		'<div id="navigation">';
	head += 		'<div class="container">';
	head += 			'<a href="index.html"'+((divName == "Home")?'class="here"':'')+'><br/>Home</a>';
	head += 			'<a href="prospective.html" style="padding:0px;"'+((divName == "Prospective")?'class="here"':'')+'>Prospective Athletes & Parents</a>';
	head += 			'<a href="current.html" '+((divName == "Current")?'class="here"':'')+'>Current Program</a>';
	head += 			'<a href="coach.html"'+((divName == "Coach")?'class="here"':'')+'><br/>Head Coach</a>';
	head += 			'<a href="contact.html"'+((divName == "Contact")?'class="here"':'')+'><br/>Contact Us</a>';
	head += 			'<a href="links.html"'+((divName == "Links")?'class="here"':'')+'></br>Links</a>';
	head += 		'</div>';
	head += 	'</div>';
		
	document.write(head);
}

function ad()
{
	document.write('<a href="http://www.coloradoskiracing.com/promo/haber.cfm"><img src="images/polarizedgoogles.jpg" height="100" width="700" alt="ad" /></a>');
}

function footer()
{
	var foot = '';
	
	foot += 	'&copy; USCSA &bull; October 2011';
	
	document.write(foot);
}