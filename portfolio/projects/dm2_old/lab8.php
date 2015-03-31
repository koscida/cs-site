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
	<script src="labscript.js" type="text/javascript"></script>
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
			<h1>Lab 8 - Feb 24, 2011: &nbsp;&nbsp;&nbsp;</h1>
			<h2> PHP Arrays </h2><br/>
			
		<!-- HTML -->
		<div class="block">
			<h3>Output</h3>
			
			<p>Part 1</p>
			<p>Requirements: Create a PHP script that uses an array to store a collection of data, and have the script create a web page with that data.</p>
			
				<?php
				$divImg = array('image/dew_flower.jpg', 'image/grass.jpg', 'image/dew_leaf.jpg', 'image/leaf.jpg');
				foreach($divImg as $img)
				{
					echo '<div class="ele"><img src="'.$img.'" alt="flower" /></div>';
				}
				?>
			
			<div class="spacer"></div>
			<div class="spacer"></div>
			<div class="spacer"></div>
			<div class="spacer"></div>
			
			<p>Part 2</p>
			<p>Requirements: Change or create a different PHP script that uses an associative array to store data and then creates a web page with that data.</p>
			
				<?php
				$divImg = array('Blue'=>'image/flower_blue.jpg', 'Orange'=>'image/flower_orange.jpg', 'Purple'=>'image/flower_purple.jpg', 'Yellow'=>'image/flower_yellow.jpg');
				foreach($divImg as $color => $image)
				{
					echo '<div class="ele"><img src="' . $image . '" alt="' . $color . ' flower" /><h4>' . $color . '</h4></div>';
				}
				?>
			
		</div>
		
		<!-- PHP -->
		<div class="block">
			<h3>Code</h3>
			
			<?php
			echo '<p><span style="font-size:10px;">';
			echo htmlspecialchars("<p> Part 1 </p>", ENT_QUOTES);
			echo '</span></p><p><span style="font-size:10px;">';
			echo htmlspecialchars("<p>Requirements: Create a PHP script that uses an array to store a collection of data, and have the script create a web page with that data.</p>", ENT_QUOTES);
			echo '</span></p>';
			
			echo '<p><span style="font-size:9px;">';
			echo htmlspecialchars("<?php", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("$divImg = array('image/dew_flower.jpg', 'image/grass.jpg', 'image/dew_leaf.jpg', 'image/leaf.jpg');", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("foreach($divImg as $img)", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("{", ENT_QUOTES);
			echo '<br/>&nbsp;&nbsp;&nbsp;&nbsp;';
			echo htmlspecialchars("echo '<div class=\"ele\"><img src=\"'.$img.'\" alt=\"flower\" /></div>';", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("}", ENT_QUOTES);
			echo '<br/>';	
			echo htmlspecialchars("?>", ENT_QUOTES);
			echo '</span></p>';
			
			
			echo '<p><span style="font-size:10px;">';
			echo htmlspecialchars("<div class=\"spacer\"></div>", ENT_QUOTES);
			echo '</span></p>';
			
			
			echo '<p><span style="font-size:10px;">';
			echo htmlspecialchars("<p>Part 2</p>", ENT_QUOTES);
			echo '</span></p><p><span style="font-size:10px;">';
			echo htmlspecialchars("<p>Requirements: Change or create a different PHP script that uses an associative array to store data and then creates a web page with that data.</p>", ENT_QUOTES);
			echo '</span></p>';
			
			echo '<p><span style="font-size:9px;">';
			echo htmlspecialchars("<?php", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("$divImg = array('Blue'=>'image/flower_blue.jpg', 'Orange'=>'image/flower_orange.jpg', 'Purple'=>'image/flower_purple.jpg', 'Yellow'=>'image/flower_yellow.jpg');", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("foreach($divImg as $color => $image)", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("{", ENT_QUOTES);
			echo '<br/>&nbsp;&nbsp;&nbsp;&nbsp;';
			echo htmlspecialchars("echo '<div class=\"ele\"><img src=\"' . $image . '\" alt=\"' . $color . ' flower\" /><h4>' . $color . '</h4></div>';", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("}", ENT_QUOTES);
			echo '<br/>';
			echo htmlspecialchars("?>", ENT_QUOTES);
			echo '</span></p>';
			
			
			?>
			
		</div>
			
		<div class="spacer"></div>
			
		<h5><a href="lab8.txt">Text File</a></h5>
			
		</div>
    </div>
	
	
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>
