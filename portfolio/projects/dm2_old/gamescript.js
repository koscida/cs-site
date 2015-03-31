/*============================
	Notes:
		0 - empty
		
		// for computer display only
		// ships are set with codes below, but are shown as these
		2 - ship hit
		3 - ship sunk
		4 - miss
		
		// for player
		10 - ship down
		11 - ship left
		12 - ship up
		13 - ship right
		15 - horizontal
		16 - vertical
		
		99 - start
==============================*/
	
	
/*=========================================
			Global Variables
===========================================*/
var selectedShip = 'no ship';
var _playerShipCount = 0;
var _computerShipCount = 0;
var _computerBoardClickable = false;
var _playerBoardClickable = false;
function empty(){}
	
	
/*===================================
			Init Stuff
=====================================*/
var _playerBoard = new Array(6); //array[6][6]
_playerBoard[0] = new Array(6);
_playerBoard[1] = new Array(6);
_playerBoard[2] = new Array(6);
_playerBoard[3] = new Array(6);
_playerBoard[4] = new Array(6);
_playerBoard[5] = new Array(6);

var _computerBoard = new Array(6); //array[6][6]
_computerBoard[0] = new Array(6);
_computerBoard[1] = new Array(6);
_computerBoard[2] = new Array(6);
_computerBoard[3] = new Array(6);
_computerBoard[4] = new Array(6);
_computerBoard[5] = new Array(6);

function initBoards()
{
	for(var i=0; i<6; i++)
	{
		for(var j=0; j<6; j++)
		{
			_computerBoard[i][j] = 0;
			_playerBoard[i][j] = 99;
		}
	}
}
function displayUnsetShips()
{
	var rot = document.createElement('div');
	rot.id = 'rotation';
	rot.innerHTML = '<a href="#" onClick="rotateSelectedShip();">Rotate Ship</a>';
	document.getElementById('gameDialogue').appendChild(rot);
	
	var div = document.createElement('div');
	div.id = 'gameUnsetShips';
	
	div.appendChild(drawShip('ship1h', false));
	
	div.appendChild(drawShip('ship2h', false));
	
	div.appendChild(drawShip('ship3h', false));
	
	document.getElementById('gameDialogue').appendChild(div);
}
function setComputerShips()
{
	for(var i=0; i<3; i++)
	{
		var ss = Math.floor(Math.random()*6);
		selectedShip = ss;
		var ranI = Math.floor(Math.random()*6);
		var ranJ = Math.floor(Math.random()*6);
		addShip(ranI, ranJ, _computerBoard);
	}
	selectedShip = 'no ship';
}



/*===================================
			Case Functions
=====================================*/
function start()
{
	initBoards();
	document.getElementById('gameDisplay').innerHTML = "<p> >> Welcome to the game</p>"
				+ "<p> >> Ownership and creative copywright belongs to Milton Bradley."
				+ "<p> >> All code developed to recreate the game is original and property of Brittany Kos</p>"
				+ "<p> >> The game is played like the board game, but it simpler for demo and scaling purposes.</p>"
				+ "<p> >> To start, click one of the 'ships' below and select the space in the bottom board you would like to place the ship</p>";
	displayUnsetShips();
	//vertical
	/*
	_playerBoard[0][0] = 20; //hit
	_playerBoard[1][0] = 16; //no
	_playerBoard[2][0] = 12; //no
	*/
	/*
	_playerBoard[0][1] = 10; //not
	_playerBoard[1][1] = 26; //hit
	_playerBoard[2][1] = 12; //no
	
	_playerBoard[0][2] = 10; //no
	_playerBoard[1][2] = 16; //no
	_playerBoard[2][2] = 22; //hit
	
	_playerBoard[0][3] = 20; //hit
	_playerBoard[1][3] = 26; //hit 
	_playerBoard[2][3] = 12; //no
	
	_playerBoard[0][4] = 20; //hit
	_playerBoard[1][4] = 16; //no
	_playerBoard[2][4] = 22; //hit
	
	_playerBoard[0][5] = 10; //no
	_playerBoard[1][5] = 26; //hit
	_playerBoard[2][5] = 22; //hit
	
	_playerBoard[0][0] = 20; //hit
	_playerBoard[1][0] = 26; //hit
	_playerBoard[2][0] = 22; //hit
	*/
	//horzontal
	/*
	_playerBoard[3][0] = 23; //hit
	_playerBoard[3][1] = 15; //no
	_playerBoard[3][2] = 11; //no
	
	_playerBoard[4][0] = 13; //not
	_playerBoard[4][1] = 25; //hit
	_playerBoard[4][2] = 11; //no
	
	_playerBoard[5][0] = 13; //no
	_playerBoard[5][1] = 15; //no
	_playerBoard[5][2] = 21; //hit
	
	_playerBoard[3][3] = 23; //hit
	_playerBoard[3][4] = 25; //hit 
	_playerBoard[3][5] = 11; //no
	
	_playerBoard[4][3] = 23; //hit
	_playerBoard[4][4] = 15; //no
	_playerBoard[4][5] = 21; //hit
	
	_playerBoard[5][3] = 13; //no
	_playerBoard[5][4] = 25; //hit
	_playerBoard[5][5] = 21; //hit
	
	_playerBoard[3][0] = 23; //hit
	_playerBoard[3][1] = 25; //hit
	_playerBoard[3][2] = 21; //hit
	*/
	displayComputerBoard();
	displayPlayerBoard();
}
function startPlayerTurn()
{
	document.getElementById('gameDisplay').innerHTML = '<p> >> start playing the game</p>'
														+'<p> >> click on the top board to guess where the computer\'s ships are</p>';
	document.getElementById('gameDialogue').removeChild(document.getElementById('gameUnsetShips'));
	document.getElementById('gameDialogue').removeChild(document.getElementById('rotation'));
	for(var i=0; i<6; i++)
	{
		for(var j=0; j<6; j++)
		{
			//if(_computerBoard[i][j] == 0){_computerBoard[i][j] = 0;}
			if(_playerBoard[i][j] == 99){_playerBoard[i][j] = 0;}
		}
	}
	setComputerShips();
	//displayComputerBoard();
	playerTurn();
}
function playerTurn()
{
	//alert('in player turn ()');
	_computerBoardClickable = true; //if player can click on computer board
	_playerBoardClickable = false; //if computer can click on player board
	
	displayComputerBoard();
	displayPlayerBoard();
	
	//computerTurn();
}
function computerTurnjs()
{
	//alert('in computer turn()');
	document.getElementById('computerTurnBox').style.display = "none";
	
	computerPickSquare();
	
	_computerBoardClickable = true; //if player can click on computer board
	_playerBoardClickable = false; //if computer can click on player board
	
	displayComputerBoard();
	displayPlayerBoard();
	
}



/*======================================
			Common Functions
========================================*/
// pauseComp function from http://www.sean.co.uk/a/webdesign/javascriptdelay.shtm
function pauseComp(millis) 
{
	var date = new Date();
	var curDate = null;

	do { curDate = new Date(); } 
	while(curDate-date < millis);
} 
function playerTurnSelectjs(i, j)
{
	//alert('in playerTurnSelect()');
	document.getElementById('gameDisplay').innerHTML = '<p> >> Player goes [' + i + ', ' + j + ']</p>';
	
	switch(_computerBoard[i][j])
	{
		case 2:
		case 3:
		case 10:
		case 11:
		case 12:
		case 13:
		case 15:
		case 16:
			_computerBoard[i][j] = 2;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Hit! </p>';
			break;
		default:
			_computerBoard[i][j] = 4;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Miss </p>';
			break;
	}
	
	_computerBoardClickable = false;
	displayComputerBoard();
	
	document.getElementById('computerTurnBox').style.display = "block";
	//print();
	if(gameOver()){return null;}
}
function computerTurnSelectjs(i, j)
{
	//alert('in computerTurnSelectjs()');
	//pauseComp(1000);
	document.getElementById('gameDisplay').innerHTML = '<p> >> Computer goes [' + j + ', ' + i + ']</p>';
	//pauseComp(1000);
	switch(_playerBoard[i][j])
	{
		case 10:	// up
		case 20:
			_playerBoard[i][j] = 20;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Hit! </p>';
			break;
		case 11:	// right
		case 21:
			_playerBoard[i][j] = 21;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Hit! </p>';
			break;
		case 12:	// down
		case 22:
			_playerBoard[i][j] = 22;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Hit! </p>';
			break;
		case 13:	// left
		case 23:
			_playerBoard[i][j] = 23;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Hit! </p>';
			break;
		case 15: 	// horzontial
		case 25:
			_playerBoard[i][j] = 25;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Hit! </p>';
			break;
		case 16:	// vertical
		case 26:
			_playerBoard[i][j] = 26;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Hit! </p>';
			break;
		default:
			_playerBoard[i][j] = 4;
			document.getElementById('gameDisplay').innerHTML += '<p> >> Miss </p>';
			break;
	}
	//pauseComp(1000);
	document.getElementById('gameDisplay').innerHTML += '<p> > Player Turn </p>';
	if(gameOver()){return;}
}
function displayComputerBoard()
{
	//alert('in dispalaycompboard()');
	var compDiv = document.getElementById('computerBoard');
	while(compDiv.hasChildNodes()){ compDiv.removeChild(compDiv.firstChild); }
	
	for(var i=0; i<6; i++)
	{
		for(var j=0; j<6; j++)
		{
	/***** Computer Board *****/
			var div = document.createElement('div');
			
			// add squares class
			div.className = 'square';
			
			
			
			// add hit/miss class
			switch(_computerBoard[i][j])
			{ 
				case 4: //miss
					var d = document.createElement('div');
					d.className = 'miss';
					div.appendChild(d);
					break;
				case 2: //hit
					var d = document.createElement('div');
					d.className = 'hit';
					div.appendChild(d);
					break;		
				default:
					// add clickable
					if(_computerBoardClickable){div.innerHTML = '<a onClick="playerTurnSelect(' + i + ', ' + j + ');if(gameOver()){return null;}"></a>';}
					break;
			}
			
			// display squares
			document.getElementById('computerBoard').appendChild(div);
		}
	}
}
function displayPlayerBoard()
{
	var playDiv = document.getElementById('playerBoard');
	while(playDiv.hasChildNodes()){ playDiv.removeChild(playDiv.firstChild); }
	
	for(var i=0; i<6; i++)
	{
		for(var j=0; j<6; j++)
		{
	/***** Player Board *****/
			var divp = document.createElement('div');
			// add square class
			divp.className = 'square';
			
			//add boards
			switch(_playerBoard[i][j])
			{ 
				case 10: // up
					var d = document.createElement('div');
					d.className = 'up';
					divp.appendChild(d);
					break;
				case 16: // vertical
					var d = document.createElement('div');
					d.className = 'down';
					divp.appendChild(d);
					if(_playerBoard[i+1][j] == 22){var hit = document.createElement('div'); hit.className = 'downhit'; divp.appendChild(hit);}
					break;
				case 12: // down
					/*var d = document.createElement('div');
					d.className = 'down';
					if(_playerBoard[i-1][j] == 26){var hit = document.createElement('div'); hit.className = 'verhit3'; divp.appendChild(hit);}
					divp.appendChild(d);*/
					break;
					
					
				case 13: // left
					var d = document.createElement('div');
					d.className = 'left';
					divp.appendChild(d);
					break;
				case 15: // horizontal
					var d = document.createElement('div');
					d.className = 'left';
					divp.appendChild(d);
					if(_playerBoard[i][j+1] == 21){var hit = document.createElement('div'); hit.className = 'righthit'; divp.appendChild(hit);}
					break;
				case 11: // right
					/*var d = document.createElement('div');
					d.className = 'right';
					if(_playerBoard[i][j-1] == 25){var hit = document.createElement('div'); hit.className='horhit3'; divp.appendChild(hit);}
					divp.appendChild(d);*/
					break;
			}			
			
			// add hit/miss class
			switch(_playerBoard[i][j])
			{ 
				case 20: // up hit
					var upDiv = document.createElement('div');
					upDiv.className = 'up';
					divp.appendChild(upDiv);
					var hit = document.createElement('div');
					hit.className = 'uphit';
					divp.appendChild(hit);
					break;
				case 26: // vertical hit
					var verDiv = document.createElement('div');
					verDiv.className = 'down';
					divp.appendChild(verDiv);
					var hit = document.createElement('div');
					hit.className = 'verhit';
					divp.appendChild(hit);
					if(_playerBoard[i+1][j] == 22){var hit = document.createElement('div'); hit.className = 'downhit2'; divp.appendChild(hit);}
					break;
				case 22: // down hit
					/*var downDiv = document.createElement('div');
					downDiv.className = 'down';
					divp.appendChild(downDiv);
					var hit = document.createElement('div');
					hit.className = 'downhit';
					divp.appendChild(hit);
					if(_playerBoard[i-1][j] == 26){var hit = document.createElement('div'); hit.className = 'verhit2'; divp.appendChild(hit);}*/
					break;
					
					
				case 23: // left hit
					var leftDiv = document.createElement('div');
					leftDiv.className = 'left';
					divp.appendChild(leftDiv);
					var hit = document.createElement('div');
					hit.className = 'lefthit';
					divp.appendChild(hit);
					break;
				case 25: // horizontal hit
					var horDiv = document.createElement('div');
					horDiv.className = 'right';
					divp.appendChild(horDiv);
					var hit = document.createElement('div');
					hit.className = 'horhit';
					divp.appendChild(hit);
					if(_playerBoard[i][j+1] == 21){var hit = document.createElement('div'); hit.className = 'righthit2'; divp.appendChild(hit);}
					break;
				case 21: // right hit
					/*var rightDiv = document.createElement('div');
					rightDiv.className = 'right';
					divp.appendChild(rightDiv);
					var hit = document.createElement('div');
					hit.className = 'righthit';
					divp.appendChild(hit);
					if(_playerBoard[i][j-1] == 25){var hit = document.createElement('div'); hit.className='horhit2'; divp.appendChild(hit);}*/
					break;
				
					
				case 4: //miss
					var d = document.createElement('div');
					d.className = 'miss';
					divp.appendChild(d);
					break;
				case 99: //init
					divp.innerHTML = '<a onClick="addShip(' + i + ', ' + j + ', _playerBoard);"></a>';
					break;
			}
			
			// add clickable
			//if(_playerBoardClickable){divp.innerHTML = '<a onClick="computerTurnSelect(' + i + ', ' + j + ');"></a>';}
			
			// display squares
			document.getElementById('playerBoard').appendChild(divp);
		}
	}
}
 function computerPickSquare()
 {
	//alert('in computerpicksquare()');
	var randI = Math.floor(Math.random()*6);
	var randJ = Math.floor(Math.random()*6);
	computerTurnSelectjs(randI, randJ);
 }
 
function print()
{
	document.getElementById('displayGameArray').innerHTML += 'Computer:<br/>';
	for(var i=0; i<6; i++)
	{
		for(var j=0; j<6; j++)
		{
			document.getElementById('displayGameArray').innerHTML += _computerBoard[i][j];
			document.getElementById('displayGameArray').innerHTML += "-";
		}
		document.getElementById('displayGameArray').innerHTML += '<br/>';
	}
	document.getElementById('displayGameArray').innerHTML += 'Player:<br/>';
	for(var i=0; i<6; i++)
	{
		for(var j=0; j<6; j++)
		{
			document.getElementById('displayGameArray').innerHTML += _playerBoard[i][j];
			document.getElementById('displayGameArray').innerHTML += "-";
		}
		document.getElementById('displayGameArray').innerHTML += '<br/>';
	}
	
}
function gameOverjs()
{
	var playerShipCount = 0;
	var computerShipCount = 0;
	for(var i=0; i<6; i++)
	{
		for(var j=0;j<6;j++)
		{
			switch(_playerBoard[i][j])
			{
				case 10:
				case 11:
				case 12:
				case 13:
				case 15:
				case 16:
					playerShipCount++;
			}
			switch(_computerBoard[i][j])
			{
				case 10:
				case 11:
				case 12:
				case 13:
				case 15:
				case 16:
					computerShipCount++;
			}
		}
	}
	if(playerShipCount == 0)
	{
		gameEnd('Computer');
		return true;
	}
	else if(computerShipCount == 0)
	{
		gameEnd('you');
		return true;
	}
	else {return false;}
}
function gameEnd(entity)
{
	var finalDiv = document.createElement('div');
	finalDiv.id = 'final';
	finalDiv.innerHTML = 'The Game is over ' + entity + ' Win!';
	
	var reload = document.createElement('div');
	reload.id = 'finalReload';
	reload.innerHTML = '<a href="#" onClick="window.location.reload()">Play Again</a>'
	finalDiv.appendChild(reload);
	
	var con = document.getElementById('game');
	con.removeChild(gameSpace);
	con.removeChild(gameDialogue);
	con.appendChild(finalDiv);
}


/*===========================================
			Place Ship Functions
=============================================*/
function addShip(i, j, board)
{
	//alert('start of addShip()');
	if(selectedShip != 'no ship')
	{
		switch(selectedShip)
		{
			case 'ship1h':
				document.getElementById('gameUnsetShips').removeChild(document.getElementById('ship1h'));
				_playerShipCount++;
			case 0:
				if(j == 5){j = 4;}
				board[i][j] = 13;
				board[i][j+1] = 11;
				break;
			case 'ship2h':
				document.getElementById('gameUnsetShips').removeChild(document.getElementById('ship2h'));
				_playerShipCount++;
			case 1:
				if(j == 5 || j == 4){j = 3}
				board[i][j] = 13;
				board[i][j+1] = 15;
				board[i][j+2] = 11;
				break;
			case 'ship3h':
				document.getElementById('gameUnsetShips').removeChild(document.getElementById('ship3h'));
				_playerShipCount++;
			case 2:
				if(j == 5 || j == 4){j = 3}
				board[i][j] = 13;
				board[i][j+1] = 15;
				board[i][j+2] = 11;
				break;
			case 'ship1v':
				document.getElementById('gameUnsetShips').removeChild(document.getElementById('ship1v'));
				_playerShipCount++;
			case 3:
				if(i == 5){i = 4;}
				board[i][j] = 10;
				board[i+1][j] = 12;
				break;
			case 'ship2v':
				document.getElementById('gameUnsetShips').removeChild(document.getElementById('ship2v'));
				_playerShipCount++;
			case 4:
				if(i == 5 || i == 4){i = 3;}
				board[i][j] = 10;
				board[i+1][j] = 16;
				board[i+2][j] = 12;
				break;
			case 'ship3v':
				document.getElementById('gameUnsetShips').removeChild(document.getElementById('ship3v'));
				_playerShipCount++;
			case 5:
				if(i == 5 || i == 4){i = 3;}
				board[i][j] = 10;
				board[i+1][j] = 16;
				board[i+2][j] = 12;
				break;		
		}
		selectedShip = 'no ship';
	}
	
	/*var compDiv = document.getElementById('computerBoard');
	while(compDiv.hasChildNodes()){ compDiv.removeChild(compDiv.firstChild); }
	var playDiv = document.getElementById('playerBoard');
	while(playDiv.hasChildNodes()){ playDiv.removeChild(playDiv.firstChild); }*/
	displayComputerBoard();
	displayPlayerBoard();
	if(_playerShipCount >= 3){_playerShipCount = 0;startPlayerTurn();}
	//alert('end of addShip()');
}
function rotateSelectedShipjs()
{
	//alert('in rotate ship');
	var shipDiv = document.getElementById('gameUnsetShips');
	switch (selectedShip)
	{
		case 'ship1h':
			selectedShip = 'ship1v';
			shipDiv.replaceChild(drawShip('ship1v', true), document.getElementById('ship1h'));
			break;
		case 'ship2h':
			selectedShip = 'ship2v';
			shipDiv.replaceChild(drawShip('ship2v', true), document.getElementById('ship2h'));
			break;
		case 'ship3h':
			selectedShip = 'ship3v';
			shipDiv.replaceChild(drawShip('ship3v', true), document.getElementById('ship3h'));
			break;
		case 'ship1v':
			selectedShip = 'ship1h';
			shipDiv.replaceChild(drawShip('ship1h', true), document.getElementById('ship1v'));
			break;
		case 'ship2v':
			selectedShip = 'ship2h';
			shipDiv.replaceChild(drawShip('ship2h', true), document.getElementById('ship2v'));
			break;
		case 'ship3v':
			selectedShip = 'ship3h';
			shipDiv.replaceChild(drawShip('ship3h', true), document.getElementById('ship3v'));
			break;
	}	
}

function drawShip(shipName, selected)
{
	var ship = document.createElement('div');
	ship.id = shipName;
	ship.innerHTML = '<a href="#" onClick="select' + shipName + '();"></a>';
	if(selected){ship.style.background = "#655bdf";}
	return ship;
}

function selectship1hjs()
{
	if(selectedShip != 'no ship'){document.getElementById(selectedShip).style.background = "#857bff";}
	selectedShip = 'ship1h';
	document.getElementById("ship1h").style.background = "#655bdf";
}
function selectship2hjs()
{
	if(selectedShip != 'no ship'){document.getElementById(selectedShip).style.background = "#857bff";}
	selectedShip = 'ship2h';
	document.getElementById("ship2h").style.background = "#655bdf";
}
function selectship3hjs()
{
	if(selectedShip != 'no ship'){document.getElementById(selectedShip).style.background = "#857bff";}
	selectedShip = 'ship3h';
	document.getElementById("ship3h").style.background = "#655bdf";
}
function selectship1vjs()
{
	if(selectedShip != 'no ship'){document.getElementById(selectedShip).style.background = "#857bff";}
	selectedShip = 'ship1v';
	document.getElementById("ship1v").style.background = "#655bdf";
}
function selectship2vjs()
{
	if(selectedShip != 'no ship'){document.getElementById(selectedShip).style.background = "#857bff";}
	selectedShip = 'ship2v';
	document.getElementById("ship2v").style.background = "#655bdf";
}
function selectship3vjs()
{
	if(selectedShip != 'no ship'){document.getElementById(selectedShip).style.background = "#857bff";}
	selectedShip = 'ship3v';
	document.getElementById("ship3v").style.background = "#655bdf";
}
