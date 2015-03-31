function header()
{
	var head = '';
	head += '<h1><a href="index.html">Brittany Kos</a></h1>';
	head += '<div id="desc">';
	head +=		'<a href="index.html">Usability Engineer</a> <span class="b">&bull;</span> ';
	head +=		'<a href="index.html">Web Developer</a> <span class="b">&bull;</span> ';
	head +=		'<a href="index.html">Programmer</a>';
	head += '</div>';
	head += '<div id="nav">';
	head +=		'<a href="index.html">Projects</a> <span class="b">&bull;</span> ';
	head +=		'<a href="about.html">About</a> <span class="b">&bull;</span> ';
	head +=		'<a href="resume.html">Resume</a>';
	head += '</div>';
	document.write( head );
}






function footer()
{
	var today = new Date();
	var m = today.getMonth();
	var yyyy = today.getFullYear();
	
	var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var today = monthNames[m] + ' ' + yyyy;
	
	var foot = '';
	foot += '<div id="footer">';
	foot += 	'<img src="images/gear-copy.png" />';
	foot += 	'<p>Brittany Ann Kos<br/>'+today+'</p>';
	foot +=	'</div>';
	document.write(foot);
}