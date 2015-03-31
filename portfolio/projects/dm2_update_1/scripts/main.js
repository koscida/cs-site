/* ************************ */
/*			Header			*/
/* ************************ */
function header(page)
{
	var html = '';
	html += '<div class="headerTop"></div>';
	html += '<div class="container">';
	html += '	<div class="title">';
	html += '		<img src="images/tamtitle.jpg" />';
	html += '	</div>';
	html += '	<div class="navigation">';
	html += '		<div class="navPage ' + (page=="home"?'here':'') + '"><a href="index.html">Home</a></div>';
	html += '		<div class="navPage ' + (page=="labs"?'here':'') + '"><a href="labs.php">Labs</a></div>';
	html += '		<div class="navPage ' + (page=="projects"?'here':'') + '"><a href="projects.html">Projects</a></div>';
	html += '		<div class="navPage ' + (page=="team"?'here':'') + '"><a href="teamproject.html">Team Project</a></div>';
	html += '	</div>';
	html += '</div>';
	document.write(html);
}


/* ************************ */
/*			Footer			*/
/* ************************ */

function footer(page)
{
	var html = '';
	html += '<div class="footerTop"></div>';
	html += '<div class="container">';
	html += '	<div class="navelement">';
	html += '		<h2><a href="index.html"> Home </h2>';
	html += '		<a href="http://redwood.colorado.edu/apierce/dm2/spring11/" >Class Site</a>';
	html += '	</div>';
	html += '	<div class="navelement">';
	html += '		<div class="center">';
	html += '			<h2><a href="labs.html"> Labs </a></h2>';
	html += '			<a href="lab1.html"> Lab 1 </a> - <a href="lab2.html"> Lab 2 </a><br/>';
	html += '			<a href="lab3.html"> Lab 3 </a> - <a href="lab4.html"> Lab 4 </a><br/>';
	html += '			<a href="lab5.html"> Lab 5 </a> - <a href="lab6.html"> Lab 6 </a><br/>';
	html += '			- - - - - - - - - - <br/>';
	html += '			<a href="lab7.php"> Lab 7 </a> - <a href="lab8.php"> Lab 8 </a><br/>';
	html += '			<a href="lab9.php"> Lab 9 </a> - <a href="lab10.php"> Lab 10 </a><br/>';
	html += '			<a href="lab11.php"> Lab 11 </a> - <a href="lab12.php"> Lab 12 </a><br/>';
	html += '			- - - - - - - - - - <br/>';
	html += '			<a href="lab13.php"> Lab 13 </a> - <a href="lab14.php"> Lab 14 </a><br/>';
	html += '			<a href="lab15.php"> Lab 15 </a>  ';
	html += '		</div>';
	html += '	</div>';
	html += '	<div class="navelement">';
	html += '		<h2><a href="projects.html"> Projects </a></h2>';
	html += '		<a href="game.html"> Game </a><br/>';
	html += '		<a href="kos_game_proposal.pdf"> Proposal </a><br/>';
	html += '		- - - - - - - - - - -<br/>';
	html += '		<a href="form.php"> Form </a><br/>';
	html += '		<a href="kos_form_proposal.pdf"> Proposal </a><br/>';
	html += '		<a href="form.txt"> home </a> - ';
	html += '		<a href="questions.txt"> functions </a><br/>';
	html += '		- - - - - - - - - - -<br/>';
	html += '		<a href="casino.php"> Database </a><br/>';
	html += '		<a href="database_plan.pdf"> Proposal </a><br/>';
	html += '		<a href="casino.txt"> login </a> - ';
	html += '		<a href="home.txt"> home </a><br/>';
	html += '		<a href="slots.txt"> slots </a> - ';
	html += '		<a href="topslots.txt"> top </a><br/>';
	html += '		<a href="changeUsername.txt"> username </a><br/>';
	html += '	</div>';
	html += '	<div class="navelement">';
	html += '		<h2><a href="teamproject.html"> Team Project </a></h2>';
	html += '		<a href="team_project_plan.pdf"> Project Proposal </a><br/>';
	html += '		- - - - - - - - - - -<br/>';
    html += '		<a href="team_functional_specification.pdf"> Functional Spec </a><br/>';
	html += '		- - - - - - - - - - -<br/>';
	html += '		<a href="team_design_spec.pdf"> Design Spec </a><br/>';
	html += '		<a href="image/hotspothome.jpg"> Prototype </a><br/>';
	html += '		<a href="https://spreadsheets.google.com/ccc?key=0AjVk2Rng8IhIdFlPaGhqaEk4RTQ1Q3J1dkl1R3hUWmc&hl=en&authkey=CODr0sMM"> Schema </a><br/>';
	html += '		- - - - - - - - - - -<br/>';
    html += '		<a href=""> Implementation </a>';
	html += '	</div>';
	html += '</div>';
	var today = new Date();
	var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var today = monthNames[today.getMonth()] + ' ' + today.getFullYear();
	html += '<div class="webmaster">';
	html += '	<div class="container">';
	html += '		Brittany Ann Kos <span>|</span> ';
	html += '		<a href="brittany,kos@colorado.edu">brittany.kos@colorado.edu</a> <span>|</span> ';
	html += '		University of Colorado at Boulder <span>|</span> ';
	html += '		<a href="http://redwood.colorado.edu/apierce/dm2/spring11/">ATLS 3010</a> <span>|</span> ';
	html += 		today;
	html += '	</div>';
	html += '</div>';
	
	document.write(html);
}