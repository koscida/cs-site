<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Brittany Kos ~ DM 2</title>
	<link href="dm2style.css" rel="stylesheet" type="text/css">
	<style type="text/css"> 
		#contentthing .block{
			width:450px; /* 480px */
			margin:0px 10px;
			display:inline-block;
			float:left;
			overflow:hidden;
			border:0px solid red;
		}
		.ele{
			width:100px;
			height:100px;
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
		function fun1()
		{
			var newDiv = document.createElement('div');
			newDiv.style.background = "red";
			newDiv.setAttribute('class', 'ele');
			document.getElementById('additionalBlock').appendChild(newDiv);
		}
		function fun2()
		{
			var newDiv = document.createElement('div');
			newDiv.style.background = "blue";
			newDiv.setAttribute('class', 'ele');
			document.getElementById('additionalBlock').appendChild(newDiv);
		}
		function fun3()
		{
			var newDiv = document.createElement('div');
			newDiv.style.background = "green";
			newDiv.setAttribute('class', 'ele');
			document.getElementById('additionalBlock').appendChild(newDiv);
		}
	</script>
	
	<?php 
	function _router($action = null)
	{
		$action = empty($action) ? (isset($_POST['action'])?$_POST['action']:"") : $action ;
		switch($action)
		{
			case 'one': one(); break;
			case 'two': two(); break;
			case 'three': three(); break;
			case 'buildForm':
			default: buildForm(); break;
		}
	}
	function buildForm()
	{
		?>
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" />
			<input type="hidden" name="action" value="one" />
			<input type="submit" value="Button1" />
		</form>
	
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" />
			<input type="hidden" name="action" value="two" />
			<input type="submit" value="Button2" />
		</form>
			
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" />
			<input type="hidden" name="action" value="three" />
			<input type="submit" value="Button3" />
		</form>
		<?php
	}
	function one()
	{
		?>
		<p> one </p>
		<div id="additionalBlock"></div>
		<script>fun1();</script>
		<?php
		_router('buildForm');
	}
	function two()
	{
		?>
		<p> two </p>
		<div id="additionalBlock"></div>
		<script>fun2();</script>
		<?php
		_router('buildForm');
	}
	function three()
	{
		?>
		<p> three </p>
		<div id="additionalBlock"></div>
		<script>fun3();</script>
		<?php
		_router('buildForm');
	}
	
	?>
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
			<h1>Lab 11 - Mar 8, 2011: &nbsp;&nbsp;&nbsp;</h1>
			<h2> Building PHP Sites </h2><br/>
			
		<!-- HTML -->
		<div class="block">
			<h3>Output</h3>
			
			<p>Part 1</p>
			<p>Requirements: Add a function to one of your PHP scripts.</p>
						
			<?php
			_router();
			?>
			
			
			
			<div class="spacer"></div>
			
			
			<p>Part 2</p>
			<p>Requirements: Create a script that uses an include statement.</p>
			
			<p>Here is my footer again, but in a include statement.</p>
			<?php
				include("footer.html");
			?>
	
		</div>
		
		<!-- PHP -->
		<div class="block">
			<h3>Code</h3>
			
			
		</div>
			
		<div class="spacer"></div>
			
		<h5><a href="lab11.txt">Text File</a></h5>
			
		</div>
    </div>
	
	
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>
