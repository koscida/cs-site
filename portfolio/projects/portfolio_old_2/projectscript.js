

function projectGallery(pageName)
{
	var totalProjects = 4;
	
	var prevPage = 0;
	if(pageName == 'Home')
		prevPage = totalProjects - 1;
	else if(pageName == 0)
		prevPage = totalProjects - 1;		
	else
		prevPage = pageName - 1;
	
	var nextPage = 0;
	if(pageName == "Home")
		nextPage = 0;
	else if((pageName+1) == totalProjects)
		nextPage = 0;
	else
		nextPage = pageName + 1;
	
	document.write('<a href="project_page'+prevPage+'.html" class="l nextButton">Last</a><a href="project_page'+nextPage+'.html" class="r nextButton">Next</a>');

	var gallery = new Array();
	gallery[0] = '<a class="l" href="project_page0.html"><img src="images/project_be_thum.png" /></a>';
	gallery[1] = '<a class="r" href="project_page1.html"><img src="images/project_webscan_thum.png" /></a>';
	gallery[2] = '<a class="l" href="project_page2.html"><img src="images/project_hotspots_thum.png" /></a>';
	gallery[3] = '<a class="r" href="project_page3.html"><img src="images/project_magicmailbox_thum.png" /></a>';
	
	/* XBOX */
	if(pageName == 0)
		gallery[0] = '<a class="l" href="project_page0.html"><img src="images/project_be_thum.png" class="here" /></a>';
		
	/* Webscan */
	else if(pageName == 1)
		gallery[1] = '<a class="r" href="project_page1.html"><img src="images/project_webscan_thum.png" class="here" /></a>';
		
	/* Hotspots */
	else if(pageName == 2)
		gallery[2] = '<a class="l" href="project_page2.html"><img src="images/project_hotspots_thum.png" class="here" /></a>';
	
	/* Magic Mailbox */
	else if(pageName == 3)
		gallery[3] = '<a class="r" href="project_page3.html"><img src="images/project_magicmailbox_thum.png" class="here" /></a>';
	
	var i;
	for(i=0; i<4; i++)
	{
		document.write(gallery[i]);
	}
}