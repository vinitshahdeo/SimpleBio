<!DOCTYPE html>
<html>
<head>
	<title>SIGN UP PAGE</title>
</head>
<body>
<form method="post">
	NAME:<input type="text" name="name"><br>
	USERNAME:<input type="text" name="uname"><br>
	PASSWORD:<input type="password" name="pass"><br>
	CONTACT NUMBER:<input type="text" name="contact"><br>
	<input type="submit" name="signup" value="Sign Up">
</form>
<?php
if(isset($_POST['signup'])){
	$con=mysql_connect('localhost','root','root') or die('error');
	mysql_select_db("ojas") or die('db error');
	$name=$_POST['name'];
	$uname=$_POST['uname'];
	$pass=$_POST['pass'];
	$contact=$_POST['contact'];
	$qry="insert into details (name,username,password,contact) values ('$name','$uname','$pass','$contact')";
	$run=mysql_query($qry);
	if(mysql_affected_rows()>0){
		echo "<script>alert('SUCCESSFUL!!')</script>";
		
	}
}
?>
</body>
</html>
