<?php

function homeScreen($sessionID = null)
{
	if($sessionID == null)
		$sessionID = isset($_POST['sessionID'])?$_POST['sessionID']:'';
	if(empty($sessionID))
	{
		//$sessionID = '100099';
		_router('start');
	}
?>
	<h2>Casino Game:&nbsp;</h2><h1>Home</h1>
	
	<div class="spacer"></div>
	
	<div style="width:600px;display:inline;">
		<!-- play blackjack -->
		<!--
		<form action="blackjack.php" method="post" >
			<input type="hidden" name="action" value="startPlay" />
			<input type="hidden" name="sessionID" value="<?php //echo $sessionID; ?>" />
			<label for="blackjack" ><span class="chooseGame" id="b" onMouseOver="changeClass('b', 'chooseGameHover')" onMouseOut="changeClass('b', 'chooseGame')"> Blackjack </span></label>
			<input type="submit" id="blackjack" style="display:none;" />
		</form>
		-->
		<!-- play slots -->
		<form action="slots.php" method="post" >
			<input type="hidden" name="action" value="startPlay" />
			<input type="hidden" name="sessionID" value="<?php echo $sessionID; ?>" />
			<label for="slots"><span class="chooseGame" id="s" onmouseover="changeClass('s', 'chooseGameHover')" onmouseout="changeClass('s', 'chooseGame')"> Slots </span></label>
			<input type="submit" id="slots" style="display:none;" />
		</form>
	</div>
	
	<div style="width:250px;display:inline;">
		<!-- change username -->
		<form  name="changeusername" action="changeUsername.php" method="post" style="display:inline-block;">
			<input type="hidden" name="action" value="changeUsername" />
			<input type="hidden" name="sessionID" value="<?php echo $sessionID; ?>" />
			<label for="changeusername" ><span class="userNav" id="c" onMouseOver="changeClass('c', 'userNavHover')" onMouseOut="changeClass('c', 'userNav')"> Change Username </span></label>
			<input type="submit" id="changeusername" style="display:none;" />
		</form>
		
		<!-- top blackjack scores -->
		<!--
		<form name="topblack" action="" method="post" style="display:inline-block;">
			<input type="hidden" name="action" value="topBlackjack" />
			<input type="hidden" name="sessionID" value="<?php //echo $sessionID; ?>" />
			<label for="tb"><span class="userNav" id="tb" onmouseover="changeClass('tb', 'userNavHover')" onmouseout="changeClass('tb', 'userNav')"> Top Blackjack </span></label>
			<input type="submit" id="slots" style="display:none;" />
		</form>
		-->
		<!-- top slots scores -->
		<form name="topslot" action="topslots.php" method="post" style="display:inline-block;">
			<input type="hidden" name="action" value="topSlots" />
			<input type="hidden" name="sessionID" value="<?php echo $sessionID; ?>" />
			<label for="topslot"><span class="userNav" id="ts" onmouseover="changeClass('ts', 'userNavHover')" onmouseout="changeClass('ts', 'userNav')"> Top Slots </span></label>
			<input type="submit" id="topslot" style="display:none;" />
		</form>
	</div>
	
<?php
}
	
	
	
?>