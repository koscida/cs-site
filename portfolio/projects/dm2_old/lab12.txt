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
			width:150px;
			height:150px;
			margin:5px;
			display:inline-block;
		}
		.ele div{
			display:inline-block;
			margin:auto;
			background-color:#db4444;
		}
		.Circle{
			border-radius:100px;
			-moz-border-radius:100px;
		}
		.Square{
			border-radius:5px;
			-moz-border-radius:5px;
		}
		.ele h4{
			text-align:center;
			font-size:14px;
			color:black;
			line-height:0px;
		}
	</style> 
	
	<?php
		include("Shape.php");
	?>
	
	<script src="dm2script.js" type="text/javascript"></script>
	<script type="text/javascript">
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
			<h1>Lab 12 - Mar 10, 2011: &nbsp;&nbsp;&nbsp;</h1>
			<h2> PHP Object Oriented Programming </h2><br/>
			
		<!-- HTML -->
		<div class="block">
			<h3>Output</h3>
			
			<p>Part 1 & 2</p>
			<p>Requirements: Create a class (one that you’ll be able to build a hierarchy around)</p>
			<p>Requirements: Add a subclass to your lab and create a new object of that subclass</p>
			
			<?php
				$action = false;
				$circleNum = 1;
				$squareNum = 1;
				if(isset($_POST['action']))
				{
					$action = true;
					$circleNum = $_POST['circleNum'];
					$squareNum = $_POST['squareNum'];
				}
			?>
			
			
			<form name="shapes" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
				<p>Number of Circles:</p>
				<select name="circleNum">
					<option value="1" <?php echo ( ($circleNum == 1)?'selected':'' ) ?> >1</option>
					<option value="2" <?php echo ( ($circleNum == 2)?'selected':'' ) ?> >2</option>
					<option value="3" <?php echo ( ($circleNum == 3)?'selected':'' ) ?> >3</option>
				</select>
				<p>Number of Squares:</p>
				<select name="squareNum">
					<option value="1" <?php echo ( ($squareNum == 1)?'selected':'' ) ?> >1</option>
					<option value="2" <?php echo ( ($squareNum == 2)?'selected':'' ) ?> >2</option>
					<option value="3" <?php echo ( ($squareNum == 3)?'selected':'' ) ?> >3</option>
				</select>
				<br/>
				<input type="hidden" name="action" value="true" />
				<input type="submit" value="Submit" />
			</form>
			
			
			<?php
				if($action)
				{
					$arr = array();
					
					for($i=0;$i<$circleNum;$i++)
					{
						$arr[] = new Circle();
					}
					
					for($i=0; $i<$squareNum;$i++)
					{
						$arr[] = new Square();
					}
				
					foreach($arr as $shape)
					{
						$shape->drawShape();
					}
				}
			?>
			
			
			
			<div class="spacer"></div>
			
		
			
		</div>
		
		<!-- PHP -->
		<div class="block">
			<h3>Code</h3>
			
			
		</div>
			
		<div class="spacer"></div>
			
		<h5><a href="lab12.txt">Lab 12</a></h5>
		<h5><a href="Shape.txt">Shape Class</a></h5>
			
		</div>
    </div>
	
	
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>
