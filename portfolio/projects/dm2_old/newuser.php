<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>New User Account</title>
</head>

<body>
<?php
include('generaltemplate.html');
?>

<center>
<h1>Create New Account</h1>

<?php

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$username=$_POST['username'];
$password=$_POST['password'];
$password2=$_POST['password2'];

echo "fname <br />";
echo "lname <br />";
echo "username <br />";
echo "password<br />";
echo "password2 <br />";







	$dbc = @mysqli_connect ("localhost", "stockhau", "JesJes187", "stockhaudb") OR die ('Could not connect to MYSQL: ' . mysqli_connect_error() );

$sql = "INSERT INTO NewAccountPage (fname, lname, username, password, password2) VALUES ('$fname', '$lname', '$username', '$password', '$password2')";

$result = mysqli_query($dbc, $sql);
	
	if ($result) {
			print "Thank you for creating a Hotspots account.";
	}
	else { 
			print mysqli_error($dbc);
			
	}	
mysqli_close($dbc);
?>
</center>
</body>
</html>