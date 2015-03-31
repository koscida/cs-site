<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Request Hotspot</title>
</head>

<body>
<?php
include('usertemplate.html');
?>

<center>
<h1>Request a New Hotspot to be Put Into Our Database</h1>

<?php

$hotname=$_POST['hotname'];
$location=$_POST['location'];
$description=$_POST['description'];


echo "hotname <br />";
echo "location <br />";
echo "description <br />";




	$dbc = @mysqli_connect ("localhost", "stockhau", "JesJes187", "stockhaudb") OR die ('Could not connect to MYSQL: ' . mysqli_connect_error() );

$sql = "INSERT INTO Request Hotspot (hotname, location, description) VALUES ('$hotname', '$location', '$description')";

$result = mysqli_query($dbc, $sql);
	
	if ($result) {
			print "Thank you for your input.";
	}
	else { 
			print mysqli_error($dbc);
			
	}	
mysqli_close($dbc);
?>
</center>
</body>
</html>