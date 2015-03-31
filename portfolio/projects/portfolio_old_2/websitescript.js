

function websiteGallery(pageName)
{
	var totalWebpages = 6;
	
	var prevPage = 0;
	if(pageName == 'Home')
		prevPage = totalWebpages - 1;
	else if(pageName == 0)
		prevPage = totalWebpages - 1;		
	else
		prevPage = pageName - 1;
	
	var nextPage = 0;
	if(pageName == "Home")
		nextPage = 0;
	else if((pageName+1) == totalWebpages)
		nextPage = 0;
	else
		nextPage = pageName + 1;
	
	document.write('<a href="website_page'+prevPage+'.html" class="nextButton l">Last</a><a href="website_page'+nextPage+'.html" class="nextButton r">Next</a>');

	var gallery = new Array();
	gallery[0] = '<a class="l" href="website_page0.html"><img src="images/website_xbox_thum.png" /></a>';
	gallery[1] = '<a class="r" href="website_page1.html"><img src="images/website_capstone_thum.png" /></a>';
	gallery[2] = '<a class="l" href="website_page2.html"><img src="images/website_csel_thum.png" /></a>';
	gallery[3] = '<a class="r" href="website_page3.html"><img src="images/website_dm2_thum.png" /></a>';
	gallery[4] = '<a class="l" href="website_page4.html"><img src="images/website_tam_thum.png" /></a>';
	gallery[5] = '<a class="r" href="website_page5.html"><img src="images/website_dm1_thum.png" /></a>';
	
	// XBOX
	if(pageName == 0)
		gallery[0] = '<a class="l" href="website_page0.html"><img src="images/website_xbox_thum.png" class="here" /></a>';
	
	// Capstone
	else if(pageName == 1)
		gallery[1] = '<a class="r" href="website_page1.html"><img src="images/website_capstone_thum.png" class="here" /></a>';
		
	// CSEL
	else if(pageName == 2)
		gallery[2] = '<a class="l" href="website_page2.html"><img src="images/website_csel_thum.png" class="here" /></a>';
	
	// DM2
	else if(pageName == 3)
		gallery[3] = '<a class="r" href="website_page3.html"><img src="images/website_dm2_thum.png" class="here" /></a>';
		
	// TAM
	else if(pageName == 4)
		gallery[4] = '<a class="l" href="website_page4.html"><img src="images/website_tam_thum.png" class="here" /></a>';
		
	// DM1
	else if(pageName == 5)
		gallery[5] = '<a class="r" href="website_page5.html"><img src="images/website_dm1_thum.png" class="here" /></a>';
	
	var i;
	for(i=0; i<6; i++)
	{
		document.write(gallery[i]);
	}
	
}