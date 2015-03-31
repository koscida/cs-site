

function experienceGallery(pageName)
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
	
	document.write('<a href="experience_page'+prevPage+'.html" class="l nextButton">Last</a><a href="experience_page'+nextPage+'.html" class="r nextButton">Next</a>');

	var gallery = new Array();
	gallery[0] = '<a class="l" href="experience_page0.html"><img src="images/experience_ski_thum.png" /></a>';
	gallery[1] = '<a class="r" href="experience_page1.html"><img src="images/experience_checklist_thum.png" /></a>';
	gallery[2] = '<a class="l" href="experience_page2.html"><img src="images/experience_orientation_thum.png" /></a>';
	gallery[3] = '<a class="r" href="experience_page3.html"><img src="images/experience_jila_thum.png" /></a>';
	
	/* Ski */
	if(pageName == 0)
		gallery[0] = '<a class="l" href="experience_page0.html"><img src="images/experience_ski_thum.png" class="here" /></a>';
		
	/* Webscan */
	else if(pageName == 1)
		gallery[1] = '<a class="r" href="experience_page1.html"><img src="images/experience_checklist_thum.png" class="here" /></a>';
	
	/* Hotspots */
	else if(pageName == 2)
		gallery[2] = '<a href="experience_page2.html"><img src="images/experience_orientation_thum.png" class="here" /></a>';
	
	/* Magic Mailbox */
	else if(pageName == 3)
		gallery[3] = '<a href="experience_page3.html"><img src="images/experience_jila_thum.png" class="here" /></a>';
	
	var i;
	for(i=0; i<4; i++)
	{
		document.write(gallery[i]);
	}
}