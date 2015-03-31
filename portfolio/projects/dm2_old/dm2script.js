var _nav_ele = new Array(6);  //array[6][2]
_nav_ele[0] = new Array(2);
	_nav_ele[0][0] = "Home";
	_nav_ele[0][1] = 0;
_nav_ele[1] = new Array(2);
	_nav_ele[1][0] = "Labs";
	_nav_ele[1][1] = 10;
_nav_ele[2] = new Array(2);
	_nav_ele[2][0] = "Projects";
	_nav_ele[2][1] = 3;
_nav_ele[3] = new Array(2);
	_nav_ele[3][0] = "TeamProject";
	_nav_ele[3][1] = 0;
_nav_ele[4] = new Array(2);
	_nav_ele[4][0] = "Javascript";
	_nav_ele[4][1] = 0;
_nav_ele[5] = new Array(2);
	_nav_ele[5][0] = "Extras";
	_nav_ele[5][1] = 0;


/*=========================================*/
/*                Header                   */
/*=========================================*/
function header1()
{
	document.write(
		"<div id=\"header\">"
		+ 	"<div id=\"title\">"
		+		"<p class=\"title\">Digital Media Portal</p>"
		+	"</div>"	
		+ 	"<div id=\"navigation\">"
		+ 		"<ul>"
		+ 			"<li><a href=\"index.html\"> Home </a></li>"
		+ 			"<li><a href=\"labs.html\"> Labs </a></li>"
		+ 			"<li><a href=\"projects.html\"> Projects </a></li>"
		+ 			"<li><a href=\"teamproject.html\"> Team Project </a></li>"
		+ 			"<li><a href=\"javascript.html\"> Javascript </a></li>"
		+ 			"<li><a href=\"extras.html\"> Extras </a></li>"
		+ 		"</ul>"
		+ 	"</div>"
		+ "</div>"
	);
}
function TitleDiv()
{
	var div = document.createElement('div'); 
	div.id = "title";
	
	TitleDiv.prototype.draw = function TitleDraw()
	{
		return(div);
	}
}

/*function NavigationSubElement(name)
{
	var ele = document.createElement('div');
	ele.innerHTML = '<a href="' + name.toLowerCase() + '.html" >' + name + '</a>';
	ele.id = name;
	ele.class = "navsubele";
	ele.style.display = "none";
	ele.style.width = "138px";
	ele.style.margin = "5px 0px";
	ele.style.padding = "0px 1px";
	ele.style.display = "inline-block";
	ele.style.float = "left";
	
	NavigationSubElement.prototype.draw = function NavigationSubElementDraw()
	{
		return(ele);
	}
}*/
function NavigationElement(name, num_sub_ele)
{
	var ele = document.createElement('div');
	ele.innerHTML = '<a href="' + name.toLowerCase() + '.html' + '">' + name + '</a>';
	ele.id = name;
	ele.style.width = "138px";
	ele.style.margin = "0px 10px";
	ele.style.padding = "0px 1px";
	ele.style.display = "inline-block";
	ele.style.float = "left";
	
	NavigationElement.prototype.draw = function NavigationElementDraw()
	{
		return(ele);
	}
}
function NavigationDiv()
{
	var div = document.createElement('div');
	div.id = "navigation";
	
	var ele = new Array();
	for(i in _nav_ele)
	{
		ele[i] = new NavigationElement(_nav_ele[i][0], _nav_ele[i][1]);
		div.appendChild(ele[i].draw());
	}
	
	NavigationDiv.prototype.draw = function NavigationDivDraw()
	{
		return(div);
	}
}


function header(divName)
{
	var titlediv = new TitleDiv();
	document.getElementById(divName).appendChild(titlediv.draw());
		
	
	var navdiv = new NavigationDiv();
	document.getElementById(divName).appendChild(navdiv.draw());
}


/*=========================================*/
/*                Footer                   */
/*=========================================*/

function footer()
{
	document.write( 
		'<div id="footer">'
		+	'<div id="footercontainer">'
		+		'<div class="navelement">'
		+			'<h2><a href="index.html"> Home </h2>'
		+				'<a href="http://redwood.colorado.edu/apierce/dm2/spring11/" >Class Site</a>'
		+		'</div>'
		+		'<div class="navelement">'
		+			'<div class="center">'
		+			'<h2><a href="labs.html"> Labs </a></h2>'
		+				'<a href="lab1.html"> Lab 1 </a> - '
		+				'<a href="lab2.html"> Lab 2 </a><br/>'
		+				'<a href="lab3.html"> Lab 3 </a> - '
		+				'<a href="lab4.html"> Lab 4 </a><br/>'
		+				'<a href="lab5.html"> Lab 5 </a> - '
		+				'<a href="lab6.html"> Lab 6 </a><br/>'
		+				'- - - - - - - - - - <br/>'
		+				'<a href="lab7.php"> Lab 7 </a> - '
		+				'<a href="lab8.php"> Lab 8 </a><br/>'
		+				'<a href="lab9.php"> Lab 9 </a> - '
		+				'<a href="lab10.php"> Lab 10 </a><br/>'
		+				'<a href="lab11.php"> Lab 11 </a> - '
		+				'<a href="lab12.php"> Lab 12 </a><br/>'
		+				'- - - - - - - - - - <br/>'
		+				'<a href="lab13.php"> Lab 13 </a> - '
		+				'<a href="lab14.php"> Lab 14 </a><br/>'
		+				'<a href="lab15.php"> Lab 15 </a> - '
		+			'</div>'
		+		'</div>'
		+		'<div class="navelement">'
		+			'<h2><a href="projects.html"> Projects </a></h2>'
		+				'<a href="game.html"> Game </a><br/>'
		+				'<a href="kos_game_proposal.pdf"> Proposal </a><br/>'
		+				'- - - - - - - - - - -<br/>'
		+				'<a href="form.php"> Form </a><br/>'
		+				'<a href="kos_form_proposal.pdf"> Proposal </a><br/>'
		+				'<a href="form.txt"> home </a> - '
		+				'<a href="questions.txt"> functions </a><br/>'
		+				'- - - - - - - - - - -<br/>'
		+				'<a href="casino.php"> Database </a><br/>'
		+				'<a href="database_plan.pdf"> Proposal </a><br/>'
		+				'<a href="casino.txt"> login </a> - '
		+				'<a href="home.txt"> home </a><br/>'
		+				'<a href="slots.txt"> slots </a> - '
		+				'<a href="topslots.txt"> top </a><br/>'
		+				'<a href="changeUsername.txt"> username </a><br/>'
		+		'</div>'
		+		'<div class="navelement">'
		+			'<h2><a href="teamproject.html"> Team Project </a></h2>'
		+				'<a href="team_project_plan.pdf"> Project Proposal </a><br/>'
		+				'- - - - - - - - - - -<br/>'
        +               '<a href="team_functional_specification.pdf"> Functional Spec </a><br/>'
		+				'- - - - - - - - - - -<br/>'
		+				'<a href="team_design_spec.pdf"> Design Spec </a><br/>'
		+				'<a href="image/hotspothome.jpg"> Prototype </a><br/>'
		+				'<a href="https://spreadsheets.google.com/ccc?key=0AjVk2Rng8IhIdFlPaGhqaEk4RTQ1Q3J1dkl1R3hUWmc&hl=en&authkey=CODr0sMM"> Schema </a><br/>'
		+				'- - - - - - - - - - -<br/>'
        +               '<a href=""> Implementation </a>'
		+		'</div>'
		+		'<div class="navelement">'
		+			'<h2><a href="javascript.html"> Javascript </a></h2>'
		+		'</div>'
		+		'<div class="navelement">'
		+			'<h2><a href="extra.html"> Extras </a></h2>'
		+		'</div>'
		+	'</div>'
		+ '</div>'
	);
}