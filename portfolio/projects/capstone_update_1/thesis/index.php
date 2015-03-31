<!DOCTYPE HTML>
<html>
<head>
	<title>Thesis</title>
	
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<link rel="stylesheet" type="text/css" href="style/page_general_style.css"/>
	<style type="text/css" media="screen">
		html, body, iframe, #options{ margin:0px; padding:0px; font-family:helvetica; height:100%; }
		#options{ 
			width:15%;
			background:black;
			display:inline-block;
			float:left;
			color:white;
		}
		#options .here{ color:#a4f; /*border-left:3px solid blue;*/ }
		#options a{
			display:block;
			padding:10px;
			color:white;
			text-decoration:none;
		}
		#options a label{ display:block; }
		#options a:hover{ background:#333; }
		
		
		iframe { display:block; width:100%; border:none; }
		#page{
			width:85%;
			min-width:1000px;
			border:0px solid black;
			margin:0px;
			padding:0px;
			display:inline-block;
			float:right;
		}
	</style>
	
	<script src="script.js"></script>
	<script src="script/ajax.js"></script>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="slides.min.jquery.js"></script>
</head>
<body>

	<div id="options">
		<a href="#" id="home" class="here">Project Description</a>
		
		<a href="#" id="wholePagesHeader">Whole Pages &nbsp;&nbsp;&nbsp;<span id="wpp" style="display:none;">+</span><span id="wpm" style="display:inline;">-</span></a>
		<div id="wholePagesDiv" style="display:block; margin-left:20px;">
			
			<?php 
			$sites = array(
				'General' => 'general', 
				'Amazon' => 'amazon',
				'Facebook' => 'facebook',
				'Google' => 'google', 
				'Twitter' => 'twitter', 
				'Wikipedia' => 'wikipedia',
				'Yahoo' => 'yahoo', 
				'YouTube' => 'youtube', 
				
				
			);
			?>
			
			<?php
			foreach($sites as $siteName => $site){
				echo '<a href="#" id="'.$site.'_whole"><label for="'.$site.'_whole_Radio">'.$siteName.'</label></a>'.
					'<input id="'.$site.'_whole_Radio" type="radio" name="wholeRadioGroup" value="'.$site.'" style="display:none;" />';
				?>
			<?php } ?>
		</div>
			
		
		<style>
			#partsDiv{ margin-left:20px; }
			#partsDiv div a{ display:inline-block; }
			#partsDiv div{ margin-left:20px; }
		</style>
		<a href="#" id="partsHeader">Parts&nbsp;&nbsp;&nbsp;<span id="partsp" style="display:inline;">+</span><span id="partsm" style="display:none;">-</span></a>
		<div id="partsDiv" style="display:none;"><form name="parts">
		
			<?php 
			$parts = array(
				'Body' => 'body', 
				'Logo' => 'logo', 
				'Search' => 'search', 
				'Navigation' => 'nav', 
				'Side Bar' => 'side', 
				'Text' => 'text', 
				'Pictures' => 'pics', 
				'Advertisement' => 'ad', 
				'Footer Navigation' => 'footNav', 
				'Copyright' => 'copy'
			);
			
			foreach($parts as $partName => $part)
			{ ?>
				<a href="#" id="<?php echo $part; ?>Header" name="<?php echo $part;?>"><?php echo $partName; ?>&nbsp;&nbsp;&nbsp;<span id="<?php echo $part; ?>p" style="display:inline;">+</span><span id="<?php echo $part; ?>m" style="display:none;">-</span></a>
				<div id="<?php echo $part; ?>Div" style="display:none;">
					<?php
					foreach($sites as $siteName => $site){
						echo '<a href="#" id="'.$site.'_'.$part.'" name="'.$part.'"><label for="'.$site.'_'.$part.'_Radio">'.$siteName.'</label></a>'.
							'<input id="'.$site.'_'.$part.'_Radio" type="radio" name="'.$part.'RadioGroup" value="'.$site.'_'.$part.'" style="display:none;" />';
						?>
					<?php } ?>
				</div>
			<?php } ?>
		</form></div>
		
	</div>
	
	
	<iframe id="page" src="project.html">
	</iframe>
	
	<script>
		function borderHome()
		{
			$('#wholePagesDiv > a').removeClass('here');
			$('#partsDiv > form > div > a').removeClass('here');
			document.getElementById('home').setAttribute('class', 'here');
		}
		$('#home').click(function(){ borderHome(); document.getElementById('page').src = "project.html"; });


		
		function borderSingle(divID)
		{
			$('#home').removeClass('here');
			$('#wholePagesDiv > a').removeClass('here');
			$('#partsDiv > form > div > a').removeClass('here');
			document.getElementById(divID).setAttribute('class', 'here');
		}
		$('#wholePagesHeader').click(function(){ $('#wholePagesDiv').toggle('fast'); $('#wpp').toggle(); $('#wpm').toggle(); });
		$('#wholePagesDiv > a').click(function(){ borderSingle(this.id); document.getElementById('page').src = "buildpage.php?loadSingle="+this.id; });
		

		
		function borderParts(divID, part)
		{
			//alert(part);
			$('#home').removeClass('here');
			$('#wholePagesDiv > a').removeClass('here');
			$('#'+divID).parent().children().removeClass('here');
			$('#'+divID).addClass('here');

			var el = false;
			$('#partsDiv > form').children().not('a').not('#'+part+'Div').each(function(index, element){
			    //alert('here1: '+element);
			    $(element).children().not('input').each(function(indexChild, elementChild){
			    	//alert('here2: '+elementChild);
				    if($(elementChild).hasClass('here'))
				    {
					    el = true;
					    //alert(el);
					    return false;
				    }
				});
				
				if(el == false)
				{
					//alert("false");
					var c = 0;
					$(element).children().each(function(indexChild, elementChild){
				    	//alert('here3: '+elementChild);
				    	if(c == 0)
				    	{
							$(elementChild).addClass('here');
				    		c++;
				    	}
				    	else
				    	{
					    	$(elementChild).attr('checked', true);
				    		return false;
				    	}
					});
				}
				else{ //alert("true");
					 }
					
				//alert('end part div');
			});
		}
		function loadPartsPage(divID, part)
		{
			var partsNames = new Array();
			partsNames[0] = 'body'; partsNames[1] = 'logo'; partsNames[2] = 'search'; partsNames[3] = 'nav'; partsNames[4] = 'side'; partsNames[5] = 'text'; partsNames[6] = 'pics'; partsNames[7] = 'ad'; partsNames[8] = 'footNav'; partsNames[9] = 'copy';

			var partsVars = new Array();
			for (var i = 0; i < partsNames.length; i++)
				partsVars[i] = 'general_'+partsNames[i];

			var p;
			for (var i = 0; i < partsNames.length; i++)
			{
			    p = partsNames[i];
			    if(part != p) //was not clicked, take part from form
				{
					var pBtns = document.forms['parts'].elements[p+'RadioGroup']; 
					for(var j = 0; j < pBtns.length; j++)
						if(pBtns[j].checked)
							partsVars[i] = pBtns[j].value;
				}
				else //just clicked, take part from passed parameters
					partsVars[i] = divID;
			}
			
			
			var url = 'loadMultiple=true';
			//alert('to here');
			for (var i = 0; i < partsNames.length; i++)
				url += '&'+partsNames[i]+'='+partsVars[i];

			//alert(url);
			document.getElementById('page').src = "buildpage.php?"+url;
		}
		$('#partsHeader').click(function(){ $('#partsDiv').toggle('fast'); $('#partsp').toggle(); $('#partsm').toggle(); });

		var partsNames = new Array(); var p = '';
		partsNames[0] = 'body'; partsNames[1] = 'logo'; partsNames[2] = 'search'; partsNames[3] = 'nav'; partsNames[4] = 'side'; partsNames[5] = 'text'; partsNames[6] = 'pics'; partsNames[7] = 'ad'; partsNames[8] = 'footNav'; partsNames[9] = 'copy';
		for (var i = 0; i < partsNames.length; i++)
		{
		    p = partsNames[i];
		    $('#'+p+'Header').click(function(){ $('#'+this.name+'Div').toggle('fast'); $('#'+this.name+'p').toggle(); $('#'+this.name+'m').toggle(); });
			$('#'+p+'Div > a').click(function(){ borderParts(this.id, this.name); loadPartsPage(this.id, this.name); });
		}
	
	
	</script>
	
	
	
</body>
</html>