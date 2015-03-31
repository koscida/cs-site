<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Brittany Kos ~ DM 2</title>
	
	<link href="dm2style.css" rel="stylesheet" type="text/css">
	<link href="databasestyle.css" rel="stylesheet" type="text/css">
	<style type="text/css"> 
	</style> 
	
	<script src="dm2script.js" type="text/javascript"></script>
	<script src="databasescript.js" type="text/javascript"></script>
	<script type="text/javascript">
		
	</script>
	<?php
		function _router($a)
		{
			if(empty($a))
				$action = ( empty($_POST['action'])?'':$_POST['action'] );
			else $action = $a;
			switch($action)
			{
				
			}
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
		<?php
		_router();
		?>
		
		</div>
	</div>
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>