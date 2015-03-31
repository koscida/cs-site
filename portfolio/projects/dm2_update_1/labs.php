<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Brittany Kos ~ DM 2</title>
	
	<link href="css/main.css" rel="stylesheet" type="text/css">
	<link href="css/grid.css" rel="stylesheet" type="text/css">
	
	<script src="scripts/main.js" type="text/javascript"></script>
	
	<script src="scripts/jquery-1.8.2.min.js" type="text/javascript"></script>
</head>

<body>

	<header>
		<script>header("labs");</script>
	</header>
	
	
	<section id="content">
	<div class="container">
	
		<div class="row aboutTitle">
			<h1>Javascript Labs</h1>
		</div>
		
		<div class="row post">
			<div class="date g1">
				<span>18</span>
				Jan 2011
			</div>
			<div class="g8">
				<h2>Lab 1: I/O Example</h2>
				<p>This is a simple input/output javascript example. An alert pops up asking the user for their name
				and the name and a greeting then gets added to an empty div displaying a message. </p>
			</div>
			<div class="g3">
				<form>
					<input class="btn" type="submit" onClick="lab1Function();return false;" value="GO!" />
					<p id="lab1Message"></p>
				</form>
				<script>
					function lab1Function()
					{
						var name;
						name = prompt("What's your name?");
						if(name==null | name==""){ name = "person who didn't enter their name"; }
						message = "Hello " + name + "!";
						
						$("#lab1Message").html(message);
					}
				</script>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>20</span>
				Jan 2011
			</div>
			<div class="g6">
				<h2>Lab 2: Event Handlers Within Links</h2>
				<p>This example shows how event handlers are used within links. Requirements: Create 
				a web page where there are two different event handlers</p>
			</div>
			<div class="g5">
				<form>
					<div class="div100">
						<a href="#" onMouseOver="lab2_image1.src='images/leaf.jpg'" onMouseOut="lab2_image1.src='images/grass.jpg'">
							<img name="lab2_image1" src="images/grass.jpg">
						</a>
						<p>Mouse Over</p>
					</div>
					<div class="div100">
						<a href="#" onClick="lab2ImgClick('#lab2_image2')">
							<img id="lab2_image2" data="0" src="images/blueberries.jpeg" />
						</a>
						<p>Click Image</p>
					</div>
					<div class="div100">
						<a href="#" onClick="lab2ImgChoose()">
							<img id="lab2_image3" src="images/flower_purple.jpg">
						</a>
						<p>Choose Image</p>
					</div>
					<div class="div100">
						<a href="#" onMouseMove="lab2MoveMouse('#lab2_image4')">
							<img id="lab2_image4" data="0" src="images/grapefruit.jpg">
						</a>
						<p>Move Mouse</p>
					</div>
				</form>
				<script>
					function lab2ImgClick(image)
					{ 
						if($(image).attr("data") == 0) {
							$(image).attr("src", "images/strawberries.jpg").attr("data", "1");
						} else {
							$(image).attr("src", "images/blueberries.jpeg").attr("data", "0");
						}
					}
					function lab2ImgChoose()
					{
						var color = prompt('Please select a color: \n  Purple \n  Red \n  Orange \n  Blue \n  Yellow \n  Green \n  Black');
						var img_color = color.toLowerCase();
						while( (img_color != 'purple') && (img_color != 'red') && (img_color != 'orange') && (img_color != 'blue') && (img_color != 'yellow') && (img_color != 'green') && (img_color != 'black') )
						{
							var color = prompt('Please select a color: \n  Purple \n  Red \n  Orange \n  Blue \n  Yellow \n  Green \n  Black');
							var img_color = color.toLowerCase();
						}
						$("#lab2_image3").attr("src", "images/flower_" + img_color + ".jpg");
					}
					function lab2MoveMouse(image)
					{
						var count = $(image).attr("data");
						var countI = parseInt(count);
						if(countI%50 == 0) {
							$(image).attr("src", "images/orange.jpg");
						} else if(countI%50 == 25) {
							$(image).attr("src", "images/grapefruit.jpg");
						}
						$(image).attr("data", (countI+1));
					}
				</script>
			</div>
		</div>
	
	
		<div class="row post">
			<div class="date g1">
				<span>25</span>
				Jan 2011
			</div>
			<div class="g8">
				<h2>Lab 3: Conditional Statements and Logical Operations</h2>
				<p>This example shows how conditional statements can be used to vary 
				the computer's response. Requirements: Add an if or if/else condition 
				to one of your labs from last week</p>
			</div>
			<div class="g3">
				<form>
					<div class="div100">
						<a href="#" onClick="lab2ImgClick('#lab3_image1')">
							<img id="lab3_image1" data="0" src="images/blueberries.jpeg" />
						</a>
						<p>Click Image</p>
					</div>
					<div class="div100">
						<a href="#" onMouseMove="lab2MoveMouse('#lab3_image2')">
							<img id="lab3_image2" data="0" src="images/orange.jpg" />
						</a>
						<p>Move Mouse</p>
					</div>
				</form>
				<script>
				</script>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>27</span>
				Jan 2011
			</div>
			<div class="g5">
				<h2>Lab 4: Iteration Control Structures</h2>
				<p>Requirements: Create a page that asks the user one or more questions. Have the output on your 
				page be based on their answers.</p>
				<p>This is an adaption of the flow chart taken from xkcd 627: Tech Support Cheat 
				Sheet <a href="http://xkcd.com/627">Link</a> </p> 
			</div>
			<div class="g6">
				<form>
					<p>Dear various parents, grandparents, co-workers, and other "not computer people.  We don't 
					magically know how to do everything on every program.  When we help you, we're usually just 
					doing this:</p>
					<div class="border halfSpace"></div>
					<h4 id="lab4_resp" class="" data="menu">Find a menu item or button which looks related to what 
					you want to do.</h4>
					<input id="lab4_opt1" class="btnLarge left" type="button" value="I can't find one" data="random" />
					<input id="lab4_opt2" class="btnLarge right" type="button" value="OK" data="click" />
				</form>
				<script>
					$("#lab4_opt1, #lab4_opt2").click(function(){
						var resp = $("#lab4_resp");
						var place = $(this).attr("data");
						var opt1 = $("#lab4_opt1");
						var opt2 = $("#lab4_opt2");
						switch(place) {
							case 'menu':
								$(resp).html("Find a menu item or button which looks related to what you want to do.");
								$(opt1).attr("value", "I can't find one").attr("data", "random");
								$(opt2).attr("value", "OK").attr("data", "click");
								break;	
							case 'random':
								$(resp).html("Pick one at random");
								$(opt1).attr("value", "OK").attr("data", "click");
								$(opt2).attr("value", "I've tried them all").attr("data", "google");
								break;	
							case 'google':
								$(resp).html("Google the name of the program plus what you want to do.  Follow instructions.  Did it work?");
								$(opt1).attr("value", "Yes").attr("data", "done");
								$(opt2).attr("value", "No").attr("data", "half");
								break;
							case 'click':
								$(resp).html("Click it.  Did it work?");
								$(opt1).attr("value", "Yes").attr("data", "done");
								$(opt2).attr("value", "No").attr("data", "half");
								break;
							case 'done':
								$(resp).html("You're Done!");
								$(opt1).attr("value", "Reset").attr("data", "menu");
								$(opt2).remove();
								break;
							case 'half':
								$(resp).html("Have you been trying this for over half an hour?");
								$(opt1).attr("value", "Yes").attr("data", "ask");
								$(opt2).attr("value", "No").attr("data", "menu");
								break;
							case 'ask':
								$(resp).html("Ask someone for help or give up");
								$(opt1).attr("value", "Reset").attr("data", "menu");
								$(opt2).remove();
								break;		
						}
					});
				</script>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>1</span>
				Feb 2011
			</div>
			<div class="g5">
				<h2>Lab 5: JavaScript, HTML Forms, and Functions</h2>
				<h3>Part 1</h3>
				<p>Requirements: Create a web page that takes input in a text box and uses a button to 
				write it to a textarea.</p>
				
				<div class="halfSpace border"></div>
				<h3>Part 2</h3>
				<p>Requirements: Modify your lab so your button calls a function.</p>
			</div>
			<div class="g6">
				<form name="lab5_form" id="lab5_form" action="">
					<h3>Part 1</h3>
					<div class="div200">
						<label for="lab5_text1">Input: </label><br/>
						<input type="text" name="lab5_text1" id="lab5_text1"/>
					</div>
					<div class="div200">
						<label for="lab5_area1">Textarea: </label><br/>
						<textarea name="lab5_area1"></textarea>
					</div>
					<div class="div100">
						<label for="">Button: </label><br/>
						<input type="button" class="btn" value="Submit" onClick="document.lab5_form.lab5_area1.value = document.lab5_form.lab5_text1.value;"/>
					</div>
					
					<div class="clear halfspace"></div>
					<h3>Part 2</h3>
					<div class="div200">
						<label for="lab5_text2">Input: </label><br/>
						<input type="text" name="lab5_text2" id="lab5_text2"/>
					</div>
					<div class="div200">
						<label for="lab5_area2">Textarea: </label><br/>
						<textarea name="lab5_area2"></textarea>
					</div>
					<div class="div100">
						<label for="">Button: </label><br/>
						<input type="button" class="btn" value="Submit" onClick="lab5_doThis()"/>
					</div>
				</form>
				<script>
					function lab5_doThis()
					{
						document.lab5_form.lab5_area2.value = document.lab5_form.lab5_text2.value;
					}
				</script>
			</div>
		</div>
	
	
		<div class="row post">
			<div class="date g1">
				<span>3</span>
				Feb 2011
			</div>
			<div class="g5">
				<h2>Lab 6: JavaScript, HTML Forms, and Functions</h2>
				<h3>Part 3</h3>
				<p>Requirements: Add two or more check boxes to your form.</p>
				
				<div class="halfSpace border"></div>
				<h3>Part 4</h3>
				<p>Requirements: Add a group of radio buttons to your form</p>
				
				<div class="halfSpace border"></div>
				<h3>Part 5</h3>
				<p>Requirements: Add a list box to your form </p>
			</div>
			<div class="g6">
				<form name="lab6_form" action="">
				
					<h3>Part 3</h3>
					
					<div class="div200">
						<input type="checkbox" name="lab6_check0" id="lab6_check0"/>
						<label for="lab6_check0">Checkbox 1</label>
						
						<input type="checkbox" name="lab6_check1" id="lab6_check1"/>
						<label for="lab6_check1">Checkbox 2</label>
						
						<input type="checkbox" name="lab6_check2" id="lab6_check2"/>
						<label for="lab6_check2">Checkbox 3</label>
						
						<input type="checkbox" name="lab6_check3" id="lab6_check3"/>
						<label for="lab6_check3">Checkbox 4</label>
						
						<input type="checkbox" name="lab6_check4" id="lab6_check4"/>
						<label for="lab6_check4">Checkbox 5</label>
						
						<input type="checkbox" name="lab6_check5" id="lab6_check5"/>
						<label for="lab6_check5">Checkbox 6</label>
						
					</div>
					
					<div class="div100">
						<input type="button" class="btn" value="Submit" onClick="lab6Checkbox('check');"/>
						<input type="button" class="btn" value="Clear" onClick="lab6Checkbox('clear');"/>
					</div>
					
					<div class="div200">
						<div id="lab6_box0" class="box50" style="display: none; background: #cf6696;"></div>
						<div id="lab6_box1" class="box50" style="display: none; background: #9666cf;"></div>
						<div id="lab6_box2" class="box50" style="display: none; background: #66cf96;"></div>
						<div id="lab6_box3" class="box50" style="display: none; background: #6696cf;"></div>
						<div id="lab6_box4" class="box50" style="display: none; background: #96cf66;"></div>
						<div id="lab6_box5" class="box50" style="display: none; background: #cf9666;"></div>
					</div>
					
					
					<div class="clear halfSpace"></div>
					<h3>Part 4</h3>
					
					<div class="div200">
						<input type="radio" name="lab6_radioSelect" value="blue" id="lab6_radioSelect1"/>
						<label for="lab6_radioSelect1">Blue</label>
						
						<input type="radio" name="lab6_radioSelect" value="orange" id="lab6_radioSelect2"/>
						<label for="lab6_radioSelect2">Orange</label>
						
						<input type="radio" name="lab6_radioSelect" value="black" id="lab6_radioSelect3"/>
						<label for="lab6_radioSelect3">Black</label>
						
					</div>
					
					<div class="div100">
						<input type="button" value="Submit" onClick="lab6Radio()" class="btn"/>
					</div>
					
					<div class="div100">
						<img id="lab6_radioImg" />
					</div>
					
					
					<div class="clear halfSpace"></div>
					<h3>Part 5</h3>
					<script>
						function lab6GetListOptions()
						{
							var str = '';
							for(var i=1; i<21; i++) {
								str += '<option value="' + i + '"> ' + i + ' </option>';
							}
							return str;
						}
					</script>
					
					<div class="div100">
						<select name="list">
							<script> document.write(lab6GetListOptions()); </script>
						</select>
					</div>
						
					<div class="div100">
						<input type="button" value="Submit" onClick="lab6ListDisplay();" class="btn"/>
					</div>
					
					<div class="div2000">
						<div id="lab6_listDisplay"></div>
					</div>
				
				</form>
				<script>
					function lab6Checkbox(btn)
					{
						if(btn == "check") {
							if(document.lab6_form.lab6_check0.checked) {
								$('#lab6_box0').toggle();
							}
							if(document.lab6_form.lab6_check1.checked) {
								$('#lab6_box1').toggle();
							}
							if(document.lab6_form.lab6_check2.checked) {
								$('#lab6_box2').toggle();
							}
							if(document.lab6_form.lab6_check3.checked) {
								$('#lab6_box3').toggle();
							}
							if(document.lab6_form.lab6_check4.checked) {
								$('#lab6_box4').toggle();
							}
							if(document.lab6_form.lab6_check5.checked) {
								$('#lab6_box5').toggle();
							}
						} else {
							$("#lab6_box0, #lab6_box1, #lab6_box2, #lab6_box3, #lab6_box4, #lab6_box5").hide();
						}
					}
					function lab6Radio()
					{
						if(document.lab6_form.lab6_radioSelect[0].checked) {
							document.getElementById('lab6_radioImg').src = 'images/flower_blue.jpg';
						} else if (document.lab6_form.lab6_radioSelect[1].checked) {
							document.getElementById('lab6_radioImg').src = 'images/flower_orange.jpg';
						} else if (document.lab6_form.lab6_radioSelect[2].checked) {
							document.getElementById('lab6_radioImg').src = 'images/flower_black.jpg';
						}
					}
					function lab6ListDisplay()
					{
						$('#lab6_listDisplay').html("");
						var num = document.lab6_form.list.value;
						for(var i=0; i< num; i++)
						{
							html = '<div class="box50" style="background: #6696cf;"></div>';
							$('#lab6_listDisplay').append(html);
						}
					}
				</script>
			</div>
		</div>
		
		
		
		
		<div class="row aboutTitle">
			<h1>PHP Labs</h1>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>22</span>
				Feb 2011
			</div>
			<div class="g8">
				<h2>Lab 7:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>24</span>
				Feb 2011
			</div>
			<div class="g8">
				<h2>Lab 8:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>1</span>
				Mar 2011
			</div>
			<div class="g8">
				<h2>Lab 9:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>3</span>
				Mar 2011
			</div>
			<div class="g8">
				<h2>Lab 10:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>8</span>
				Mar 2011
			</div>
			<div class="g8">
				<h2>Lab 11:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>10</span>
				Mar 2011
			</div>
			<div class="g8">
				<h2>Lab 12:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		
		
		<div class="row aboutTitle">
			<h1>SQL Labs</h1>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>29</span>
				Mar 2011
			</div>
			<div class="g8">
				<h2>Lab 13:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>5</span>
				Apr 2011
			</div>
			<div class="g8">
				<h2>Lab 14:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
		<div class="row post">
			<div class="date g1">
				<span>7</span>
				Apr 2011
			</div>
			<div class="g8">
				<h2>Lab 15:</h2>
				<p></p>
			</div>
			<div class="g3">
				<form>
					<script>
					</script>
				</form>
			</div>
		</div>
		
		
    </div>
    </section>
	
	
	<footer>
		<script>footer("home");</script>
	</footer>
	
</body>
</html>
