function header()
{
	document.write( '<a href="index.html"><img src="images/title_grey.png" width="547"/></a>' );
}

function navigation(pageName)
{
	var nav = "";
		if(pageName == "Websites"){ nav += '<div class="here"><a href="website.html" class="n1">Websites</a></div>'; } else { nav += '<div><a href="website.html" class="n1">Websites</a></div>'; }
		if(pageName == "Projects"){ nav += '<div class="here"><a href="project.html" class="n2">Projects</a></div>'; } else { nav += '<div><a href="project.html" class="n2">Projects</a></div>'; }
		if(pageName == "Experience"){ nav += '<div class="here"><a href="experience.html" class="n3">Experience</a></div>'; } else { nav += '<div><a href="experience.html" class="n3">Experience</a></div>'; }
		if(pageName == "Resume"){ nav += '<div class="here"><a href="resume.html" class="n4">Resume</a></div>'; } else { nav += '<div><a href="resume.html" class="n4">Resume</a></div>'; }
	document.write(nav);
}






function footer()
{
	document.write('<p>Brittany Ann Kos<br/>&copy; April 2012</p>');
}