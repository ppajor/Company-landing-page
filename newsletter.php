<?php
define("DB_HOST", "127.0.0.1");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "newsletter");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//
if(isset($_POST['submit'])){
$mail = $_POST['newsletter'];
if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) echo "Email address '$mail' is not considered valid.\n";
else{
$sql = "INSERT INTO mails  VALUES ('$mail');";
if ($conn->query($sql) === TRUE) header('Location: newsadd.html');
else  header('Location: newserror.html');
}
}
?>