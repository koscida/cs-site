<!DOCTYPE HTML>
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
	
		include ('home.php');
		include ('topblackjack.php');
		include ('topslots.php');
		//include ('blackjack.php');
		//include ('slots.php');
	
		function _router($a = null)
		{
			if(empty($a))
				$action = ( empty($_POST['action'])?'':$_POST['action'] );
			else $action = $a;
			switch($action)
			{
				case 'createNewGame':
					//$screen = 'create';
					createScreen();
					break;
				case 'startNewGame':
					//$screen = 'new';
					newScreen();
					break;
				case 'startExistingGame':
					//$screen = 'exist';
					existScreen();
					break;
				case 'check':
					//$screen = 'check';
					checkScreen();
					break;
				
					
				case 'topBlackjack':
					topBlackjackScreen();
					break;
				case 'topSlots':
					topSlotsScreen();
					break;
					
				case '':
				case 'start':
				default:
					//$screen = 'start';
					startScreen();
					break;
			}
			//return $screen;
		}
		
		function createNewGameCode()
		{
			$end = rand(0, 99);
			//echo "end: $end <br/>";
			
			$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
			$sql = "select ID from casino_session order by ID desc limit 1";
			$result = mysqli_query($DB, $sql);
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				$last = $row['ID'];
			mysqli_free_result($result);
			mysqli_close($DB); 
			$beg = substr($last, 0, 4);
			//echo "beg: $beg <br/>";
			$beg = intval($beg) + 1;
			//echo "beg+1: $beg <br/>";
			
			$newCode = $beg.$end;
			
			return $newCode;
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
			//$screen = _router();
			_router();
		?>
				
		<!-- Start-->
		<?php 
		//if($screen == 'start')
		function startScreen()
		{ ?>
			<h2>Casino Game</h2>
			<!--<p>Welcome to my casino game.  There are two simple games that a player can chose from to play: Blackjack and Slots.  Instructions on how to play each of them are listed inside the game</p>-->
			<p>Welcome to my casino slots game.  Instructions on how to play are listed inside the game.</p>
			<p>If you have a game code, click "Start an Existing Game" to resume the game you started.  If you are new, welcome!  To start playing, click Start a New Game" to create a new game.</p>
			<form name="startNewGame" action="" method="post" style="display:inline;">
				<input type="hidden" name="action" value="createNewGame" />
				<label for="newgame" ><span class="startGame" id="n" onMouseOver="changeClass('n', 'startGameHover');" onMouseOut="changeClass('n', 'startGame')"> Start a New Game</span></label>
				<input type="submit" id="newgame" style="display:none;" />
			</form>
			
			<form name="startExistingGame" action="" method="post" style="display:inline;">
				<input type="hidden" name="action" value="startExistingGame" />
				<label for="existinggame"><span class="startGame" id="e" onmouseover="changeClass('e', 'startGameHover');" onmouseout="changeClass('e', 'startGame')"> Start an Existing Game</span></label>
				<input type="submit" id="existinggame" style="display:none;" />
			</form>
		<?php
		} 
		?>
		
		<!-- Login Existing Game -->
		<?php 
		//if ($screen == 'exist')
		function existScreen()
		{ 
		?>
			<div class="contentElementDiv">
				<h2>Casino Game:&nbsp;</h2><h1>Login to Existing Game</h1>
				<form action="" method="post">
					<p><label for="code">Code: </label><input type="text" name="sessionID" id="code" /></p>
					<input type="hidden" name="action" value="check" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		<?php
		} 
		?>
		
		<!-- Check Existing Game -->
		<?php
		//if($screen == 'check')
		function checkScreen()
		{
			$sessionID = $_POST['sessionID'];
			//echo "sesid: $sessionID <br/>";
			
			$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
			$sql = "select ID from casino_session ";
			$result = mysqli_query($DB, $sql);
			$sessionIDs = array();
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				$sessionIDs[] = $row['ID'];
			mysqli_free_result($result);
			mysqli_close($DB); 
			//echo "ids".print_r($sessionIDs, true);
			
			if(in_array($sessionID, $sessionIDs))
				homeScreen($sessionID);
			else
				_router('start');
		} ?>
			
		<!-- Create New Game -->
		<?php
		//if ($screen == 'create')
		function createScreen()
		{ 
			$newGameCode = createNewGameCode();
		
		?>
			<div class="contentElementDiv">
				<h2>Casino Game:&nbsp;</h2><h1>Start a New Game</h1>
				<p>Welcome to the Casino game!  Please keep this code if you would like to resume playing your game again.</p>
				
				<p>Game Code: <?php echo $newGameCode;  ?> </p>
				
				<p>
				<form action="" method="post">
					<p>Please enter a name for yourself:
					<input type="text" name="username" /></p>
					<p>*This will be used for high scores.</p><br/>
					<input type="hidden" name="sessionID" value="<?php echo $newGameCode; ?>" />
					<input type="hidden" name="action" value="startNewGame" />
					<input type="submit" value="Start Game!" />
				</form>
				</p>
				
				<br/>
				<p>If you did not mean to start a new game, <a href="start.php?action=">click here</a> to go back to the starting screen.</p>
			</div>
		<?php
		} ?>
		
		<!-- Start New Game -->
		<?php
		//if($screen == 'new')
		function newScreen()
		{
			$name = $_POST['username'];
			$sessionID = $_POST['sessionID'];
			
			$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
			$sql = "insert into casino_session values ('".$sessionID."', '".$name."', '1000')";
			$result = mysqli_query($DB, $sql);
			mysqli_close($DB); 
			//echo "done";
			homeScreen($sessionID);
		} ?>
		
		
		
		
		</div>
	</div>
	
<!-- footer -->
	<script type="text/javascript">
		footer();
	</script>
	
</body>
</html>