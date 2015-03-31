<?php

function topBlackjackScreen()
{
	$DB = @mysqli_connect ("localhost", "kosba", "Test123!", "kosbadb") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
	
	$sql = "select casino_session.NAME as name, SUM(casino_blackjack.BET) as total 
		from casino_blackjack 
		left join casino_session 
		on casino_session.ID = casino_blackjack.SESSION_ID
		where casino_blackjack.WIN = 1 
		GROUP BY casino_session.NAME 
		order by total desc
		limit 5 ";
	$result = mysqli_query($DB, $sql);
	$topPlayers = array();
	while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
		$topPlayers[$row['name']] = $row['total'];
	mysqli_free_result($result);
	
	$sql = "SELECT casino_session.NAME, casino_blackjack.BET AS total
		FROM casino_blackjack
		LEFT JOIN casino_session ON casino_session.ID = casino_blackjack.SESSION_ID
		WHERE casino_blackjack.WIN =1
		ORDER BY total DESC 
		LIMIT 5 ";
	$result = mysqli_query($DB, $sql);
	$topPlayers = array();
	while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
		$topPlayers[$row['name']] = $row['total'];
	mysqli_free_result($result);
	
	
	mysqli_close($DB); 
?>
	<h2>Casino Game: &nbsp;</h2><h1>Top Blackjack Stats</h1>
	<div class="contentElementSquare1">
		<h3>Top Blackjack Players</h3>
		<table>
			<tr>
				<td>Player Name</td>
				<td>Total Amount Won</td>
			</tr>
				<?php
					foreach($topPlayers as $name => $amount)
					{
						echo '<tr>';
						echo '<td>'.$name.'</td>';
						echo '<td>'.$amount.'</td>';
						echo '</tr>';
					}
				?>
		</table>
	</div>
	
	<div class="contentElementSquare1">
		<h3>Top Blackjack Bets</h3>
		<table>
			<tr>
				<td>Player Name</td>
				<td>Total Amount Won</td>
			</tr>
				<?php
					foreach($topBets as $name => $amount)
					{
						echo '<tr>';
						echo '<td>'.$name.'</td>';
						echo '<td>'.$amount.'</td>';
						echo '</tr>';
					}
				?>
		</table>
	</div>
<?php
}

?>