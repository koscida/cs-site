<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Brittany Kos ~ DM 2</title>
	<link href="dm2style.css" rel="stylesheet" type="text/css">
	<style type="text/css"> 
		.php{
			text-indent:30px;
			color:#bbb;
			font-size:14px;
		}
		#contentthing .block{
			width:450px; /* 480px */
			margin:0px 10px;
			display:inline-block;
			float:left;
			overflow:hidden;
			border:0px solid red;
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
			<h1>Lab 7 - Feb 22, 2011: &nbsp;&nbsp;&nbsp;</h1>
			<h2> Introduction to PHP </h2><br/>
			
		<!-- HTML -->
			<div class="block">
				<h3>Output</h3>
				
				<p>Part 1</p>
				<p>Requirements: Create a simple PHP script that creates some output.</p>
					<?php echo "<p class='php'>This output is from PHP</p>"; ?>
						
				<div class="spacer"></div>
						
				<p>Part 2</p>
				<p>Requirements: Add a conditional statement to your lab.</p>
				<p>Requirements: Add a loop to your lab.</p>
				<p>Is it even?</p>
				
					<?php 
					for($i=0; $i<6; $i++)
					{
						echo $i.": ";
						echo ( ($i%2) == 1 )? "false<br/>" : "true<br/>";
					}
				
					?>

			</div>
			
			
			
		<!-- PHP -->
			<div class="block">	
				<h3>Code</h3>
				<?php
				echo '<p>';
				echo htmlspecialchars("<p> Part 1 </p>", ENT_QUOTES);
				echo "</p><p>";
				echo htmlspecialchars("<p>Requirements: Create a simple PHP script that creates some output.</p>", ENT_QUOTES);
				echo "</p><p>";
				echo htmlspecialchars(	"<?php echo \"<p class='php'>This output is from PHP</p>\"; ?>", ENT_QUOTES);
				echo "</p><p>";
				
				echo htmlspecialchars("<p>Part 2</p>", ENT_QUOTES);
				echo "</p><p>";
				echo htmlspecialchars("<p>Requirements: Add a conditional statement to your lab.</p>", ENT_QUOTES);
				echo "</p><p>";
				echo htmlspecialchars("<p>Requirements: Add a loop to your lab.</p>", ENT_QUOTES);
				echo "</p><p>";
				echo htmlspecialchars("<p>Is it even?</p>", ENT_QUOTES);
				echo "</p><p>";
				echo htmlspecialchars("<?php ", ENT_QUOTES);
				echo "<br/>";
				echo htmlspecialchars("for(\$i=0; \$i<6; \$i++)", ENT_QUOTES);
				echo "<br/>";
				echo htmlspecialchars("{", ENT_QUOTES);
				echo "<br/>&nbsp;&nbsp;&nbsp;&nbsp;";
				echo htmlspecialchars("echo \$i.\": \";", ENT_QUOTES);
				echo "<br/>&nbsp;&nbsp;&nbsp;&nbsp;";
				echo htmlspecialchars("echo ( (\$i%2) == 1 )? \"false<br/>\" : \"true<br/>\";", ENT_QUOTES);
				echo "<br/>";
				echo htmlspecialchars("}", ENT_QUOTES);
				echo "<br/>";
				echo htmlspecialchars("?>", ENT_QUOTES);
				echo "</p>";
				?>
				
			</div>
			
			<div class="spacer"></div>
			<h5><a href="lab7.txt">Text File</a></h5>
			
		</div>
    </div>
	
	
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>
