/*=========================================*/
/*                 Lab 1                   */
/*=========================================*/
function lab1Function(divName)
{
	name = prompt("What's your name?");
	message = "Hello " + name + "!";
	//document.write(message);
	
	var newDiv = document.createElement('div');
	newDiv.innerHTML = "<p>" + message + "</p>";
	document.getElementById(divName).appendChild(newDiv);
}

/*=========================================*/
/*                 Lab 2                   */
/*=========================================*/
function lab2ImgClick(imgName)
{
	if(count%2 == 0)
	{
		document.getElementById(imgName).src = "image/strawberries.jpg";
		document.getElementById(imgName).alt = "strawberries";
	}
	else
	{
		document.getElementById(imgName).src = "image/blueberries.jpeg";
		document.getElementById(imgName).alt = "blueberries";
	}
	count++;
}
function lab2ImgChoose(imgName)
{
	var color = prompt('Please select a color: \n  Purple \n  Red \n  Orange \n  Blue \n  Yellow \n  Green \n  Black');
	var img_color = color.toLowerCase();
	while( (img_color != 'purple') && (img_color != 'red') && (img_color != 'orange') && (img_color != 'blue') && (img_color != 'yellow') && (img_color != 'green') && (img_color != 'black') )
	{
		var color = prompt('Please select a color: \n  Purple \n  Red \n  Orange \n  Blue \n  Yellow \n  Green \n  Black');
		var img_color = color.toLowerCase();
	}
	 document.getElementById(imgName).src = "image/flower_" + img_color + ".jpg";
	 document.getElementById(imgName).alt = img_color + " flower";
}
function lab2MoveMouse(imgName)
{
	if(count%50 == 0)
	{
		document.getElementById(imgName).src = "image/orange.jpg";
		document.getElementById(imgName).alt = "orange";
	}
	else if(count%50 == 25)
	{
		document.getElementById(imgName).src = "image/grapefruit.jpg";
		document.getElementById(imgName).alt = "grapefruit";
	}
	count++;
}

/*=========================================*/
/*                 Lab 3                   */
/*=========================================*/
function lab3ImgClick(imgName)
{
	if(count > 15)
	{
		alert("Enough already! Stop clicking the picture, you already know what's going to happen, give the browser a break!");
	}
	else if(count%2 == 0)
	{
		document.getElementById(imgName).src = "image/strawberries.jpg";
		document.getElementById(imgName).alt = "strawberries";
	}
	else
	{
		document.getElementById(imgName).src = "image/blueberries.jpeg";
		document.getElementById(imgName).alt = "blueberries";
	}
	count++;
}
function lab3ImgChoose(imgName)
{
	var selected = false;
	var color = prompt('Please select a color: \n  Purple \n  Red \n  Orange \n  Blue \n  Yellow \n  Green \n  Black');
	var img_color = color.toLowerCase();
	while(selected == false)
	{
		if(img_color == 'purple')
		{
			document.getElementById(imgName).src = "image/flower_purple.jpg";
			document.getElementById(imgName).alt = "purple flower";
			selected = true;
		}
		else if(img_color == 'red')
		{
			document.getElementById(imgName).src = "image/flower_red.jpg";
			document.getElementById(imgName).alt = "red flower";
			selected = true;
		}
		else if(img_color == 'orange')
		{
			document.getElementById(imgName).src = "image/flower_orange.jpg";
			document.getElementById(imgName).alt = "orange flower";
			selected = true;
		}
		else if(img_color == 'blue')
		{
			document.getElementById(imgName).src = "image/flower_blue.jpg";
			document.getElementById(imgName).alt = "blue flower";
			selected = true;
		}
		else if(img_color == 'yellow')
		{
			document.getElementById(imgName).src = "image/flower_yellow.jpg";
			document.getElementById(imgName).alt = "yellow flower";
			selected = true;
		}
		else if(img_color == 'green')
		{
			document.getElementById(imgName).src = "image/flower_green.jpg";
			document.getElementById(imgName).alt = "green flower";
			selected = true;
		}
		else if(img_color == 'black')
		{
			document.getElementById(imgName).src = "image/flower_black.jpg";
			document.getElementById(imgName).alt = "black flower";
			selected = true;
		}
		else
		{
			var color = prompt('Please select a color: \n  Purple \n  Red \n  Orange \n  Blue \n  Yellow \n  Green \n  Black');
			var img_color = color.toLowerCase();
			selected = false;
		}	
	}
}

/*=========================================*/
/*                 Lab 4                   */
/*=========================================*/
function lab4Click(place)
{
	switch(place)
	{
		case'start':
			document.getElementById('response').innerHTML = "Find a menu item or button which looks related to what you want to do.";
			
			document.getElementById('o1').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"random\")'>I can't find one</a>";
			document.getElementById('o2').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"click\")'>Ok</a>";
			break;
			
		case 'random':
			document.getElementById('response').innerHTML = "Pick one at random";
			
			document.getElementById('o1').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"click\")'>OK</a>";
			document.getElementById('o2').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"google\")'>I've tried them all</a>";
			break;
			
		case 'google':
			document.getElementById('response').style.font = "14px";
			document.getElementById('response').innerHTML = "Google the name of the program plus what you want to do.  Follow instructions.  Did it work?";
			
			document.getElementById('o1').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"done\")'>Yes</a>";
			document.getElementById('o2').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"half\")'>No</a>";
			break;
			
		case 'click':
			document.getElementById('response').innerHTML = "Click it.  Did it work?";
			
			document.getElementById('o1').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"done\")'>Yes</a>";
			document.getElementById('o2').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"half\")'>No</a>";
			break;
			
		case 'done':
			document.getElementById('response').innerHTML = "You're Done!";
			
			document.getElementById('o1').innerHTML = "";
			document.getElementById('o2').innerHTML = "";
			break;
			
		case 'half':
			document.getElementById('response').innerHTML = "Have you been trying this for over half an hour?";
			
			document.getElementById('o1').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"ask\")'>Yes</a>";
			document.getElementById('o2').innerHTML = "<a href='#' class='option' onClick='lab4Click(\"start\")'>No</a>";
			break;
			
		case 'ask':
			document.getElementById('response').innerHTML = "Ask someone for help or give up";
			
			document.getElementById('o1').innerHTML = "";
			document.getElementById('o2').innerHTML = "";
			break;		
	}

	document.getElementById(divName).style.background = "#f06";
	document.getElementById(divName).innerHTML = "You Win";
}


//=========================================
//				Lab 6
//=========================================
function lab6Checkbox()
{
	if(document.myform3.check0.checked)
	{
		document.getElementById('box0').style.background = "#c69";
	}
	if(document.myform3.check1.checked)
	{
		document.getElementById('box1').style.background = "#96c";
	}
	if(document.myform3.check2.checked)
	{
		document.getElementById('box2').style.background = "#9c6";
	}
	if(document.myform3.check3.checked)
	{
		document.getElementById('box3').style.background = "#69c";
	}
	if(document.myform3.check4.checked)
	{
		document.getElementById('box4').style.background = "#6c9";
	}
	if(document.myform3.check5.checked)
	{
		document.getElementById('box5').style.background = "#c96";
	}
	
}

function lab6Radio()
{
	if(document.myform4.radioSelect[0].checked)
	{
		document.getElementById('radioImg').src = 'image/flower_blue.jpg';
		document.getElementById('radioImg').alt = 'blue flower';
	}
	if(document.myform4.radioSelect[1].checked)
	{
		document.getElementById('radioImg').src = 'image/flower_orange.jpg';
		document.getElementById('radioImg').alt = 'orange flower';
	}
	if(document.myform4.radioSelect[2].checked)
	{
		document.getElementById('radioImg').src = 'image/flower_black.jpg';
		document.getElementById('radioImg').alt = 'black flower';
	}
}

function lab6GetListOptions()
{
	var str = '';
	for(var i=1; i<21; i++)
	{
		str += '<option value="' + i + '"> ' + i + ' </option>';
	}
	//alert(str);
	return str;
}

function lab6ListDisplay()
{
	var num = document.myform5.list.value;
	//alert(num);
	for(var i=0; i< num; i++)
	{
		var newDiv = document.createElement('div');
		newDiv.id = 'listDiv';
		document.getElementById('formListDisplay').appendChild(newDiv);
	}
}
