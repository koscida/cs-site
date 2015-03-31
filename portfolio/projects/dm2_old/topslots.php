<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Brittany Kos ~ DM 2</title>
	
	<link href="dm2style.css" rel="stylesheet" type="text/css">
	<link href="databasestyle.css" rel="stylesheet" type="text/css">
	<style type="text/css"> 
		table{
			color:#97f;
			border-collapse:collapse;
			width:600px;
			margin:0px auto;
		}
		table th{
			color:#ddd;
		}
		table td{
			width:auto;
			padding:3px;
			border: 1px solid black;
		}
	</style> 
	
	<script src="dm2script.js" type="text/javascript"></script>
	<script src="databasescript.js" type="text/javascript"></script>
	<script type="text/javascript">
		
	</script>
	<?php
		function _router($a = null)
		{
			if(empty($a))
				$action = ( empty($_POST['action'])?'':$_POST['action'] );
			else $action = $a;
			switch($action)
			{
			}
			index();
		}
		function getUsername($sessionID)
		{
			$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
			
			$sql = "select NAME from casino_session where ID = $sessionID";
			$result = mysqli_query($DB, $sql);
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				$name = $row['NAME'];
			mysqli_free_result($result);
			mysqli_close($DB);
			
			return $name;
		}
		function getTopBets()
		{
			$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
			
			$sql = "SELECT sess.NAME AS name, slots.BET AS bet, slots.MULTIPLIER AS mult, slots.BET * slots.MULTIPLIER AS total
				FROM casino_slots AS slots
				LEFT JOIN casino_session AS sess ON slots.SESSION_ID = sess.ID
				ORDER BY total DESC 
				LIMIT 5";
			$result = mysqli_query($DB, $sql);
			
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				$topBets[] = array('name' => $row['name'], 'bet' => $row['bet'], 'mult' => $row['mult'], 'total' => $row['total']);
			mysqli_free_result($result);
			
			mysqli_close($DB);
			
			return $topBets;
		}
		function getTopPlayers()
		{
			$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
			
			$sql = "SELECT sess.NAME AS name, SUM( slots.BET * slots.MULTIPLIER ) AS total
				FROM casino_slots AS slots
				LEFT JOIN casino_session AS sess ON slots.SESSION_ID = sess.ID
				GROUP BY name
				ORDER BY total DESC 
				LIMIT 5";
			$result = mysqli_query($DB, $sql);
			
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				$topPlayers[] = array('name' => $row['name'], 'total' => $row['total']);
			mysqli_free_result($result);
			
			mysqli_close($DB);
			
			return $topPlayers;
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
		//echo $_POST['sessionID'];
		?>
		
		
		<?php
		function index()
		{
			$sessionID = $_POST['sessionID'];
			$username = getUsername($sessionID);
			$topBets = getTopBets();
			$topPlayers = getTopPlayers();
		?>
			<h2>Casino Game:&nbsp;</h2><h1>Top Slots</h1><br/>
			
			<div class="contentElementDiv">
				<h1> Top Bets </h1>
				<table>
					<thead>
					<tr>
						<th> Name </th>
						<th> Bet </th>
						<th> Multiplier </th>
						<th> Total Made </th>
					</tr>
					</thead>
					</tbody>
					<?php
						foreach($topBets as $person => $info)
						{
							echo '<tr>';
							echo '<td>'.$info['name'].'</td>';
							echo '<td>'.$info['bet'].'</td>';
							echo '<td>'.$info['mult'].'</td>';
							echo '<td>'.$info['total'].'</td>';
							echo '</tr>';
						}
					?>
					<tbody>
				</table>
			</div>
			
			<br/>
			
			<div class="contentElementDiv">
				<h1> Top Players </h1>
				<table>
					<thead>
					<tr>
						<th> Name </th>
						<th> Total Made </th>
					</tr>
					</thead>
					<tbody>
					<?php
						foreach($topPlayers as $person => $info)
						{
							echo '<tr>';
							echo '<td>'.$info['name'].'</td>';
							echo '<td>'.$info['total'].'</td>';
							echo '</tr>';
						}
					?>
					</tbody>
				</table>
			</div>
			
			<br/>
			
			<span class="username"><?php echo $username; ?></span>
			
			<form  name="changeusername" action="changeUsername.php" method="post" style="display:inline-block;">
				<input type="hidden" name="action" value="" />
				<input type="hidden" name="sessionID" value="<?php echo $sessionID; ?>" />
				<label for="changeusername" ><span class="userNav" id="c" onMouseOver="changeClass('c', 'userNavHover')" onMouseOut="changeClass('c', 'userNav')"> Change Username </span></label>
				<input type="submit" id="changeusername" style="display:none;" />
			</form>
			
			<form name="topslot" action="slots.php" method="post" style="display:inline-block;">
				<input type="hidden" name="action" value="" />
				<input type="hidden" name="sessionID" value="<?php echo $sessionID; ?>" />
				<label for="slots"><span class="userNav" id="s" onmouseover="changeClass('s', 'userNavHover')" onmouseout="changeClass('s', 'userNav')">  Slots </span></label>
				<input type="submit" id="slots" style="display:none;" />
			</form>
		<?php
		}
		?>
		
		</div>
	</div>
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	

</body>
</html>