<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Brittany Kos ~ DM 2</title>
	<link href="dm2style.css" rel="stylesheet" type="text/css">
	<style type="text/css"> 
		#contentthing .block{
			width:450px; /* 480px */
			margin:0px 0px;
			display:inline-block;
			float:left;
			overflow:hidden;
			border:0px solid red;
		}
		.ele{
			width:100px;
			margin:5px;
			display:inline-block;
		}
		.ele img{
			height:100px;
			width:100px;
		}
		.ele h4{
			text-align:center;
			font-size:14px;
			color:black;
			line-height:0px;
		}
	</style> 
	
	<script src="dm2script.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(document).ready(function() {
  		// Handler for .ready() called.
		});
	</script>
</head>

<body>

<!-- header -->
	<div id="header" type="text/javascript">
		<script>
			header('header');
		</script>
	</div>
		
<!-- content -->
	<div id="content">
		<div id="contentthing">
			<h1>Lab 9 - Mar 1, 2011: &nbsp;&nbsp;&nbsp;</h1>
			<h2> PHP and HTML Forms: Input </h2><br/>
			
		<!-- HTML -->
		<div class="block">
			<h3>Output</h3>
			
			<p>Part 1</p>
			<p>Requirements: Create a simple HTML form with a text box and a submit button that calls a PHP script and prints out what the user entered in the text box.</p>
				
				
				
					<form action="lab9b.php" method="post" name="inputText" >
						<input type="text" size="20" name="textField" />
						<input type="hidden" name="action1" value="submitText" />
						<input type="submit" value="submit" />
					</form>
				
				
			
			<div class="spacer"></div>
			
			
			<p>Part 2</p>
			<p>Requirements: Add radio buttons, check boxes, and a list box to your form and have PHP print out the values chosen in the form.</p>
				
					<form action="lab9b.php" method="post" name="selectImg" >
					<p> Radio Buttons: </p>
						<p><input type="radio" name="imgShape" value="square" /> Square </p><br/>
						<p><input type="radio" name="imgShape" value="circle" /> Circle </p><br/>
					<p>List: </p>
						<select name="imgColor">
							<option value="red"> Red </option>
							<option value="blue"> Blue </option>
							<option value="orange"> Orange </option>
						</select>
					<p>Checkbox: </p>
						<p><input type="checkbox" name="single" value="single"/> Single</p>
						<p><input type="checkbox" name="many" value="many" /> Many</p>
				
					<input type="hidden" name="action2" value="submitImg" />
					<input type="submit" value="submit" />
					</form>
				
		</div>
		
		<!-- PHP -->
		<div class="block">
			<h3>Code</h3>
			
			
		</div>
			
		<div class="spacer"></div>
			
		<h5><a href="lab9.txt">Text File Input</a></h5>
		<h5><a href="lab9b.txt">Text File Output</a></h5>
			
		</div>
    </div>
	
	
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>
