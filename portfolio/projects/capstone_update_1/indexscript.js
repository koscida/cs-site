//========================================
//               Header
//========================================
function header(pageName)
{
	var html = '';
	html += '	<div id="title" class="container">';
	html += '		<img src="images/tamtitle.png"/>';
	html += '	</div>';
	html += '	<div id="navigation">';
	html += '		<div id="nav" class="container">';
	html += '			<a href="index.html" ' + (pageName=="Home" ? 'class="active"':'') + '>Home</a>';
	html += '			<a href="weekly.html" ' + (pageName=="Weekly" ? 'class="active"':'') + '>Weekly Outline</a>';
	html += '			<a href="thesis.html" ' + (pageName=="Thesis" ? 'class="active"':'') + '>Thesis Project</a>';
	html += '			<a href="service.html" ' + (pageName=="Service" ? 'class="active"':'') + '>Service Project</a>';
	html += '			<a href="portfolio.html" ' + (pageName=="Portfolio" ? 'class="active"':'') + '>Portfolio</a>';
	html += '			<a href="paper.html" ' + (pageName=="Paper" ? 'class="active"':'') + '>Senior Paper</a>';
	html += '			<a href="assignments.html" ' + (pageName=="Assignments" ? 'class="active"':'') + '>Assignments</a>';
	html += '			<a href="#" id="showNavMobile">+ Show Navigation</a>';
	html += '		</div>';
	html += '	</div>';
	document.write(html);
}

function footer()
{
	var html = '';
	html += '<div id="footNavigation">';
	html += '	<div id="footNav" class="container">';
	html += '		<div class="projSection">';
	html += '			<a href="thesis.html" class="title">Thesis Project</a>';
	html += '			<a href="thesis.html#CreativeBrief" class="link">Creative Brief</a>';
	html += '			<a href="thesis.html#LookAndFeel" class="link">Look and Feel</a>';
	html += '			<a href="thesis.html#RoughCut" class="link">Rough Cut</a>';
	html += '			<a href="thesis.html#ProjectDescription" class="link">Project Description</a>';
	html += '			<a href="thesis.html#FinalCut" class="link">Final Cut</a>';
	html += '		</div>';
	html += '		<div class="projSection">';
	html += '			<a href="service.html" class="title">Service Project</a>';
	html += '			<a href="service.html#CreativeBrief" class="link">Creative Brief</a>';
	html += '			<a href="service.html#FinishedProject" class="link">Finished Project</a>';
	html += '		</div>';
	html += '		<div class="projSection">';
	html += '			<a href="portfolio.html" class="title">Portfolio</a>';
	html += '			<a href="portfolio.html#CreativeBrief" class="link">Creative Brief</a>';
	html += '			<a href="portfolio.html#FinalCut" class="link">Final Cut</a>';
	html += '		</div>';
	html += '		<div class="projSection">';
	html += '			<a href="paper.html" class="title">Senior Paper</a>';
	html += '			<a href="paper.html#Paper" class="link">Paper</a>';
	html += '		</div>';
	html += '		<div class="projSection">';
	html += '			<a href="assignments.html" class="title">Assignments</a>';
	html += '			<a href="assignments.html#BestWork" class="link">Best Work</a>';
	html += '			<a href="assignments.html#FWAWriteUp" class="link">FWA Write-Up</a>';
	html += '			<a href="assignments.html#100Things" class="link">100 Things</a>';
	html += '			<a href="assignments.html#Reading1" class="link">Reading 1</a>';
	html += '			<a href="assignments.html#Reading2" class="link">Reading 2</a>';
	html += '			<a href="assignments.html#Reading3" class="link">Reading 3</a>';
	html += '			<a href="assignments.html#Reading4" class="link">Reading 4</a>';
	html += '			<a href="assignments.html#Reading5" class="link">Reading 5</a>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	html += '<div id="webmaster" class="container">';
	html += '	Brittany Ann Kos <span>|</span> ';
	html += '	<a href="brittany,kos@colorado.edu">brittany.kos@colorado.edu</a> <span>|</span> ';
	html += '	University of Colorado at Boulder <span>|</span> ';
	html += '	<a href="http://redwood.colorado.edu/halesi/capstone/">ATLS 4010</a> <span>|</span> ';
	html += '	August 2011';
	html += '</div>';
		
	document.write(html);
}

$(document).ready(function () {
	$('#showNavMobile').click(function(){
		if($(this).hasClass('shown')) {
			$('#nav a').css("display", "none");
			$('#nav a.active, #nav a.shown').css("display", "inline-block");
			$(this).html("+ Show Navigation").removeClass('shown');
		} else {
			$('#nav a').css("display", "inline-block");
			$(this).html("- Hide Navigation").addClass('shown');
		}
	});
});