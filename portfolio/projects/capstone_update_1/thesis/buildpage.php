<?php
	include 'page_general.html';

	if(isset($_GET['loadSingle']))
	{
		$url = substr($_GET['loadSingle'], 0, -6);
		
		//include 'style/page_'.$url.'_style.css';
		?><link rel="stylesheet" type="text/css" href="style/<?php echo $url; ?>.css"/><?php
	}
	
	if(isset($_GET['loadMultiple']))
	{
		$body = substr($_GET['body'], 0, -5);
		?><link rel="stylesheet" type="text/css" href="style/body/<?php echo $body; ?>.css"/><?php
		
		$logo = substr($_GET['logo'], 0, -5);
		?><link rel="stylesheet" type="text/css" href="style/logo/<?php echo $logo; ?>.css"/><?php
		
		$search = substr($_GET['search'], 0, -7);
		?><link rel="stylesheet" type="text/css" href="style/search/<?php echo $search; ?>.css"/><?php
		
		$nav = substr($_GET['nav'], 0, -4);
		?><link rel="stylesheet" type="text/css" href="style/nav/<?php echo $nav; ?>.css"/><?php
		
		$side = substr($_GET['side'], 0, -5);
		?><link rel="stylesheet" type="text/css" href="style/side/<?php echo $side; ?>.css"/><?php
		
		$text = substr($_GET['text'], 0, -5);
		?><link rel="stylesheet" type="text/css" href="style/text/<?php echo $text; ?>.css"/><?php
		
		$pics = substr($_GET['pics'], 0, -5);
		?><link rel="stylesheet" type="text/css" href="style/pics/<?php echo $pics; ?>.css"/><?php
		
		$ad = substr($_GET['ad'], 0, -3);
		?><link rel="stylesheet" type="text/css" href="style/ad/<?php echo $ad; ?>.css"/><?php
		
		$footNav = substr($_GET['footNav'], 0, -8);
		?><link rel="stylesheet" type="text/css" href="style/footNav/<?php echo $footNav; ?>.css"/><?php
		
		$copy = substr($_GET['copy'], 0, -5);
		?><link rel="stylesheet" type="text/css" href="style/copy/<?php echo $copy; ?>.css"/><?php
	}
	
	