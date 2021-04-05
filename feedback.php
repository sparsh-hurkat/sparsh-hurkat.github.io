<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$msg="Name: $name\nemail: $email\nmessage: $message";
header("Cache-Control: no cache");
session_cache_limiter("private_no_expire");
if($_POST["message"]) {
    mail("hurkatsparsh@gmail.com", "sparshhurkat.com Feedback", $msg, "From: $email");
}
?>

<!DOCTYPE html>
<form>
	<input type="button" value="Return to previous page" onClick="javascript:history.go(-1)" />
</form>
</html>
