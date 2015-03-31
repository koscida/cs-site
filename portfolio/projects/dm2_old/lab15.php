<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Brittany Kos ~ DM 2</title>
	<link href="dm2style.css" rel="stylesheet" type="text/css">
	<style type="text/css"> 
		#contentthing .block{
			margin:0px 10px;
			display:inline-block;
			float:left;
			overflow:hidden;
			border:0px solid red;
		}
		.block table{
			color:#ddd;
			border-collapse:collapse;
		}
		.block table td{
			width:auto;
			padding:3px;
			border: 1px solid black;
		}
		.block label{
			width:88px;
			display:inline-block;
			margin:4px;
		}
		.block input{
			width:140px;
			margin:4px;
		}
	</style> 
	
	<?php
		function _router()
		{
			$action = (isset($_POST['action'])?$_POST['action']:'');
			switch($action)
			{
				case 'add':
					$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
					
					$first = $_POST['first'];
					$last = $_POST['last'];
					$cell = $_POST['cell'];
					$home = $_POST['home'];
					$city = $_POST['city'];
					$sqlInsert1 = "insert into phonebook (`FIRST_NAME`, `LAST_NAME`, `CELL_PHONE`, `HOME_PHONE`, `CITY`) values ('".$first."', '".$last."', '".$cell."', '".$home."', '".$city."')";
					$result = mysqli_query($DB, $sqlInsert1);
					
					$sqlSelect = "select ID from phonebook ORDER BY ID DESC limit 1";
					$result = mysqli_query($DB, $sqlSelect);
					while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
						$phoneid = $row['ID'];
					mysqli_free_result($result);
					
					$email = $_POST['email'];
					$sqlInsert2 = "insert into emailbook (`PHONEBOOK_ID`, `EMAIL`) values ('".$phoneid."', '".$email."')";
					$result = mysqli_query($DB, $sqlInsert2);
					mysqli_close($DB);
					break;
			}
		}
		function getData()
		{
			$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
			
			$sqlSelect = "select phonebook.*, emailbook.EMAIL from phonebook left join emailbook on phonebook.ID = emailbook.PHONEBOOK_ID";
			$result = mysqli_query($DB, $sqlSelect);
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				$list[$row['ID']] = array('FIRST_NAME' => $row['FIRST_NAME'], 'LAST_NAME' => $row['LAST_NAME'], 'CELL_PHONE' => $row['CELL_PHONE'], 'HOME_PHONE' => $row['HOME_PHONE'], 'CITY' => $row['CITY'], 'EMAIL' => $row['EMAIL']);
			mysqli_free_result($result);
			//echo '<pre>'.print_r($list, true).'</pre>';		
			mysqli_close($DB);
			return $list;
		}
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
			<h1>Lab 15 - Apr 7, 2011: &nbsp;&nbsp;&nbsp;</h1>
			<h2> Database Design </h2><br/>
			
			<?php 
			_router();
			$list = getData();
			?>
			
		<!-- HTML -->
		<div class="block" style="width:250px;">
			<h3>Query</h3>
			
			<p><strong>Requirements:</strong> Create another table related to phonelist where phonelist.id is a foreign key.<br/>Write a php script to query both tables.</p>
			
			<p>
			Enter the information you want to insert into the database.
			<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" >
				<label for="first">First Name: </label><input type="text" name="first" id="first" /><br/>
				<label for="last">Last Name: </label><input type="text" name="last" id="last" /><br/>
				<label for="cell">Cell Phone Number: </label><input type="cell" name="cell" id="cell" /><br/>
				<label for="home" style="width:95px;">Home Phone Number:</label><input type="home" name="home" id="home" style="width:130px;" /><br/>
				<label for="city">City: </label><input type="text" name="city" id="city" /><br/>
				<label for="email">Email: </label><input type="text" name="email" id="email" /><br/>
				<input type="hidden" name="action" value="add" /><br/>
				<input type="submit" value="Add" />
			</form>			
			</p>
			
		</div>
		
		<!-- PHP -->
		<div class="block">
			<h3>Table</h3>
			
			<table>
				<thead>
				<tr>
					<td>ID <br/>Number</td>
					<td>First Name</td>
					<td>Last Name</td>
					<td>Cell Phone <br/>Number</td>
					<td>Home Phone <br/>Number</td>
					<td>City</td>
					<td>Email</td>
				</tr>
				</thead>
				<tbody>
				<?php 
				foreach($list as $ID => $data)
				{
					echo '<tr>';
					echo '<td>'.$ID.'</td>';
					echo '<td>'.$data['FIRST_NAME'].'</td>';
					echo '<td>'.$data['LAST_NAME'].'</td>';
					echo '<td>'.$data['CELL_PHONE'].'</td>';
					echo '<td>'.$data['HOME_PHONE'].'</td>';
					echo '<td>'.$data['CITY'].'</td>';
					echo '<td>'.$data['EMAIL'].'</td>';
					echo '</tr>';
				}
				?>
				</tbody>
			</table>
			<?php //echo '<pre>'.print_r($list, true).'</pre>'; ?>
			
			
		</div>
			
		<div class="spacer"></div>
			
		<h5><a href="lab15.txt">Lab 15</a></h5>
			
		</div>
    </div>
	
	
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>
