function getJsonProjects()
{
	var json = 
	{
		"test" : "test",
		"projects" : {
			"code" : [
				{
					"nameShort" : "Webscan App",
					"nameLong" : "",
					"imgClass" : "webscanThumWide",
					"imgPath" : "images/webscan_all.png",
					"groupShort" : "Senior Capstone Project",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "Sponsored by Webscan",
					"sponsorPath" : "webscaninc.com",
					"tags" : [
						{ "tag" : "UI" },
						{ "tag" : "Android Programming" },
						{ "tag" : "Server Scripting" }
					],
					"projDesc" : "",
					"desc" : [
						{ "desc" : "We built an android app that is capable of scanning bar codes, sending the images to a server, processing them, and recieveing responses back.  We persisted the data with a SQLite database and enforces a secure login with authenticiation token." },
						{ "desc" : "I was responsible for the polishing the look of the app beyond the default Android layout and implementing much of the server functionality." }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Fall 2011 &ndash; Spring 2012",
					"enabled" : "true"
				},
				{
					"nameShort" : "Project B",
					"nameLong" : "",
					"imgClass" : "beThumWide",
					"imgPath" : "images/be_main.jpg",
					"groupShort" : "Chimera Project Games",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "HUD" },
						{ "tag" : "Programming" }
					],
					"projDesc" : "HUD  and game logic",
					"desc" : [
						{ "desc" : "This is an XBOX game I'm working on with an aspiring indie start-up company, formerly the ATLS 4519 class at CU. There are 9 students working on the project, with upwards of 12 previously." },
						{ "desc" : "We are developing the game with <a href='http://www.microsoft.com/visualstudio/en-us' onclick='window.open(this.href); return false;'>Visual Studios</a> and the <a href='http://en.wikipedia.org/wiki/Microsoft_XNA' onclick='window.open(this.href); return false;'>XNA Game Framework</a>. We are in the beginning stages of development still and will continue to work throughout the summer." },
						{ "desc" : "My responsibilities include designing the HUD and GUI, code refactoring, and general programming." }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Fall 2011 &ndash; Summer 2012",
					"enabled" : "true"
				},
				{
					"nameShort" : "21C Photobooth",
					"nameLong" : "21st Century Photobooth",
					"imgClass" : "",
					"imgPath" : "",
					"groupShort" : "",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" },
						{ "tag" : "User-Testing" },
						{ "tag" : "Iterative Design Cycle" }
					],
					"projDesc" : "",
					"desc" : [
						{ "desc" : "" },
						{ "desc" : "" }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Fall 2010",
					"enabled" : "false"
				},
				{
					"nameShort" : "Magic Mailbox",
					"nameLong" : "",
					"imgClass" : "magicmailboxThumWide",
					"imgPath" : "images/magicmailbox_main.jpg",
					"groupShort" : "Freshman Projects",
					"groupLong" : "GEEN 1400: Freshmen Engineering Projects",
					"groupPath" : "http://www.cs.colorado.edu/courses/geen1400.html",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "UI" },
						{ "tag" : "Programming" },
						{ "tag" : "Group Management" },
						{ "tag" : "User-Testing" }
					],
					"projDesc" : "GUI, Programming, and Testing",
					"desc" : [
						{ "desc" : "I worked on this project with 8 other students.  We created an oversized mailbox that utilized a touchscreen tablet and webcam, so kids could send pictures to their family safely." },
						{ "desc" : "We envisioned the project in a classroom with kids ages 4-7.  The child could put a dawing or object inside the mailbox and select a picture of their family member from the attached computer, and the mailbox would send an email with a picture attachment of whatever was in the mailbox." },
						{ "desc" : "I was responsible for designing the interface in  <a href='http://www.ni.com/labview/' onclick='window.open(this.href); return false;'>Labview</a> and implementing it. We also tested the GUI on a few children and reiterated our design." },
						{ "desc" : "The project was submitted at the <a href='http://itll.colorado.edu/index.php/design_expo' onclick='window.open(this.href); return false;'>Engineering Design Expo</a> where it won Best in Group and Runner-up for <a href='http://www.cs.colorado.edu/department/news/spring2009expo.html' onclick='window.open(this.href); return false;'>User's Choice Award</a>." }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Spring 2009",
					"enabled" : "true"
				}
			],
			"websites" : [
				{
					"nameShort" : "CPG Forum",
					"nameLong" : "",
					"imgClass" : "forumThumWide",
					"imgPath" : "images/forum_main.jpg",
					"groupShort" : "Chimera Project Games",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" },
						{ "tag" : "Backend Web Development" },
						{ "tag" : "Site Launch and Maintenance" }
					],
					"projDesc" : "PHP Framework and Website Design",
					"desc" : [
						{ "desc" : "I built this website for my XBOX team to use for posting ideas, private discussions, documenation, email updates, and file sharing." },
						{ "desc" : "I've recently re-build the entire site using the PHP MCV Framework <a href='http://kohanaframework.org/' onclick='window.open(this.href); return false;'>Kohona</a>. I wanted the experience implementing a framework and learning it became more fun than I anticipated." }
					],
					"projectFinalLink" : "Though the site requires a login, it can be viewed here",
					"projectFinalPath" : "forum.chimeraprojectgames.com",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Fall 2011 &ndash; Summer 2012",
					"enabled" : "true"
				},
				{
					"nameShort" : "DM1 Portal",
					"nameLong" : "Digital Media 1 Portal",
					"imgClass" : "dm1ThumWide",
					"imgPath" : "images/dm1_main.jpg",
					"groupShort" : "ATLS 3010",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" }
					],
					"projDesc" : "Website Design",
					"desc" : [
						{ "desc" : "This was the portal I used for ATLS 3020: Digital Media 1.  The content on the site has not been changed or updated, which is at a beginner's level. However, I recently updated the design of the site, so the look is completely new." },
						{ "desc" : "" }
					],
					"projectFinalLink" : "projects/dm1/index.html",
					"projectFinalPath" : "Portal Link",
					"projectBeforeLink" : "projects/dm1/old/index.html",
					"projectBeforePath" : "Old Portal Link",
					"date" : "Design from Summer 2012<br/>Content from Fall 2010",
					"enabled" : "true"
				},
				{
					"nameShort" : "BuffBoard",
					"nameLong" : "",
					"imgClass" : "",
					"imgPath" : "",
					"groupShort" : "CSCI 3308",
					"groupLong" : "CSCI 3308: Software Engineering Methods and Tools",
					"groupPath" : "http://www.cs.colorado.edu/courses/csci3308.html",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" },
						{ "tag" : "Group Management" },
						{ "tag" : "Backend Programming" },
						{ "tag" : "Agile/Scrum Development" }
					],
					"projDesc" : "Website design and agile team management",
					"desc" : [
						{ "desc" : "" },
						{ "desc" : "" }
					],
					"projectFinalLink" : "Final Project",
					"projectFinalPath" : "projects/buffboard",
					"projectBeforeLink" : "Write-Ups and Documentation",
					"projectBeforePath" : "projects/buffboard/writeups.html",
					"date" : "Fall 2011",
					"enabled" : "true"
				},
				{
					"nameShort" : "Capstone Portal",
					"nameLong" : "",
					"imgClass" : "capstoneThumWide",
					"imgPath" : "images/capstone_main.jpg",
					"groupShort" : "ATLS 4010",
					"groupLong" : "",
					"groupPath" : "http://redwood.colorado.edu/halesi/capstone/",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" }
					],
					"projDesc" : "Website Design",
					"desc" : [
						{ "desc" : "I used this portal for my senior capstone class in the <a href='tam.colorado.edu' onclick='window.open(this.href); return false;'>TAM program</a>." }
					],
					"projectFinalLink" : "Portal Link",
					"projectFinalPath" : "projects/capstone/index.html",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Fall 2011",
					"enabled" : "true"
				},
				{
					"nameShort" : "Hotspots",
					"nameLong" : "",
					"imgClass" : "hotspotsThumWide",
					"imgPath" : "images/hotspots_main.jpg",
					"groupShort" : "Junior Digital Media Project",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" },
						{ "tag" : "Group Management" },
						{ "tag" : "Backend Web Development" }
					],
					"projDesc" : "Website Design and Backend Web Development",
					"desc" : [
						{ "desc" : "This was a team project I did for the ATLS 3020: Digital Media 2 class with 2 other students. The only requirement was that the site had to be dynamic and persisted information in a SQL database." },
						{ "desc" : "We came up with the idea of 'Hotspots.com', an online roadtrip planner and vacation resource. My team and I researched different 'Hotspots' or cool vacation destinations around the Western US and pre-populated the site with them.  We built the website to display these hotspots and allowed users to create accounts and comment on the hotspots. We then build a roadtrip planner that had the capibility to add different hotsopts and map out the trip with the <a href='https://developers.google.com/maps/' onclick='window.open(this.href); return false;'>Google Maps API</a>." }
					],
					"projectFinalLink" : "The Final Website",
					"projectFinalPath" : "projects/hotspots/home.php",
					"projectBeforeLink" : "Documentation and Write-Ups",
					"projectBeforePath" : "projects/hotsots/teamproject.html",
					"date" : "Spring 2011",
					"enabled" : "true"
				},
				{
					"nameShort" : "DM2 Portal",
					"nameLong" : "Digital Media 2 Portal",
					"imgClass" : "dm2ThumWide",
					"imgPath" : "images/dm2_main.jpg",
					"groupShort" : "ATLS 3020",
					"groupLong" : "",
					"groupPath" : "http://redwood.colorado.edu/apierce/dm2/spring11/",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" }
					],
					"projDesc" : "Website Design",
					"desc" : [
						{ "desc" : "This was the portal I used for ATLS 3020: Digital Media 2." },
						{ "desc" : "The site is mostly HTML/CSS with some Javascript and PHP projects later in the semester." }
					],
					"projectFinalLink" : "Portal Link",
					"projectFinalPath" : "projects/dm2/index.html",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Spring 2011",
					"enabled" : "true"
				},
				{
					"nameShort" : "CS Portal",
					"nameLong" : "Computer Science Portal",
					"imgClass" : "cselThumWide",
					"imgPath" : "images/csel_main.jpg",
					"groupShort" : "CSEL",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" }
					],
					"projDesc" : "Website Design",
					"desc" : [
						{ "desc" : "This was a previous portfolio I used solely for my work in Computer Science. The site has been kept in the same state for the past year, so the projects are outdated." },
						{ "desc" : "I learned web development by constantly changing and updating this website, because of that the design can be experimential and the implementation crude, at best." }
					],
					"projectFinalLink" : "Portal Link",
					"projectFinalPath" : "projects/csel/index.html",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Summer 2011",
					"enabled" : "false"
				},
				{
					"nameShort" : "TAM Portal",
					"nameLong" : "",
					"imgClass" : "tamThumWide",
					"imgPath" : "images/tam_main.jpg",
					"groupShort" : "TAM Program",
					"groupLong" : "Technology, Arts, and Media Program",
					"groupPath" : "tam.colorado.edu",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" }
					],
					"projDesc" : "Website Design",
					"desc" : [
						{ "desc" : "This was my previous portfolio I used for my work in the TAM program.  All of the projects have not been updated." }
					],
					"projectFinalLink" : "TAM Portal",
					"projectFinalPath" : "projects/tam/index.html",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Fall 2010",
					"enabled" : "false"
				}
			],
			"experience" : [
				{
					"nameShort" : "ZOLL Online",
					"nameLong" : "",
					"imgClass" : "",
					"imgPath" : "",
					"groupShort" : "",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "" },
						{ "tag" : "" },
						{ "tag" : "" }
					],
					"projDesc" : "",
					"desc" : [
						{ "desc" : "" },
						{ "desc" : "" }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Summer 2012",
					"enabled" : "false"
				},
				{
					"nameShort" : "USCSA Ski Team",
					"nameLong" : "",
					"imgClass" : "skiThumWide",
					"imgPath" : "images/ski_main.jpg",
					"groupShort" : "Senior Capstone Project",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "Sponsored by USCSA Ski Team",
					"sponsorPath" : "http://skiracecu.com",
					"tags" : [
						{ "tag" : "Website Design" },
						{ "tag" : "Site Launch" }
					],
					"projDesc" : "Website Redesign and Team Rebranding",
					"desc" : [
						{ "desc" : "This was a project I worked on with a group of 2 other students to give the CU USCSA Ski Team an updated, newer look." },
						{ "desc" : "My partners made a new logo, flyers, business cards, and stickers for the client, while I was responsible for redesigning the website and hosting it on a server external from the school." }
					],
					"projectFinalLink" : "The Final Website",
					"projectFinalPath" : "http://skiracecu.com",
					"projectBeforeLink" : "The Old Site",
					"projectBeforePath" : "http://www.colorado.edu/studentgroups/coloradoskiracing/",
					"date" : "Fall 2011",
					"enabled" : "true"
				},
				{
					"nameShort" : "Orientation",
					"nameLong" : "Orientation Module",
					"imgClass" : "orientationThumWide",
					"imgPath" : "images/orientation_main.jpg",
					"groupShort" : "ASIT",
					"groupLong" : "Colege of Arts & Science IT",
					"groupPath" : "",
					"sponsor" : "Work for CU's Orientation Center",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Backend Web Development" }
					],
					"projDesc" : "Backend Web Development",
					"desc" : [
						{ "desc" : "This was an extension to the Checklist project I had while I was a student developer at Arts & Science IT." },
						{ "desc" : "This portal was used to help organize the orientation process.  It held information about incoming students, the student checklist, and all orientation sessions." },
						{ "desc" : "I was also responsible for an algorithm that matched freshmen students to an orientation advisor based on declared majors, interests, and preferences." }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Spring 2011 &ndash; Spring 2012",
					"enabled" : "true"
				},
				{
					"nameShort" : "Orientation Checklist",
					"nameLong" : "",
					"imgClass" : "checklistThumWide",
					"imgPath" : "images/checklist_main.jpg",
					"groupShort" : "ASIT",
					"groupLong" : "Colege of Arts & Science IT",
					"groupPath" : "",
					"sponsor" : "Work for CU's Orientation Center",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Backend Web Development" },
						{ "tag" : "Some UI" }
					],
					"projDesc" : "UI and Backend Web Development",
					"desc" : [
						{ "desc" : "This was my first solo project while I was a student developer at Arts & Science IT." },
						{ "desc" : "The checklist was a list of items that incomming students needed to complete before they attended new student orientation.  All information collected was sent to a database that was accessably through the advising portal." },
						{ "desc" : "The site was used for all incoming students admitted for the Fall 2011 and Fall 2012 terms.  This was an estimated 8,000 students per season." }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "Fall 2010 &ndash; Summer 2011",
					"enabled" : "true"
				},
				{
					"nameShort" : "LCD Website",
					"nameLong" : "",
					"imgClass" : "lcdThumWide",
					"imgPath" : "images/lcd_main.jpg",
					"groupShort" : "JILA",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "Initially Sponsored by LCD",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "Website Design" }
					],
					"projDesc" : "Website Design",
					"desc" : [
						{ "desc" : "This was one of my first projects while working as a student web developer for JILA.  I was to build a prototype website for the Laboratory of Computational Dynamics, to replace their old one.  Though project ended up falling through, so the final site was never implemented." },
						{ "desc" : "" }
					],
					"projectFinalLink" : "Initial Website",
					"projectFinalPath" : "projects/lcd/index.html",
					"projectBeforeLink" : "Legacy Site",
					"projectBeforePath" : "http://lcd-www.colorado.edu/",
					"date" : "Fall 2010",
					"enabled" : "false"
				}
			],
			"template" : [
				{
					"nameShort" : "",
					"nameLong" : "",
					"imgClass" : "",
					"imgPath" : "",
					"groupShort" : "",
					"groupLong" : "",
					"groupPath" : "",
					"sponsor" : "",
					"sponsorPath" : "",
					"tags" : [
						{ "tag" : "" },
						{ "tag" : "" },
						{ "tag" : "" }
					],
					"projDesc" : "",
					"desc" : [
						{ "desc" : "" },
						{ "desc" : "" }
					],
					"projectFinalLink" : "",
					"projectFinalPath" : "",
					"projectBeforeLink" : "",
					"projectBeforePath" : "",
					"date" : "",
					"enabled" : ""
				}
			]
		}
	};
		
	return json;
}			