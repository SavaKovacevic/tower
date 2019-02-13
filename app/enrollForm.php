<?php
// Multiple recipients
$to = 's86.kovacevic@gmail.com';

// Subject
$subject='Upisi kurs';
if(isset($_POST['name'])){$name=$_POST['name'];}
if(isset($_POST['email'])){$email=$_POST['email'];}
if(isset($_POST['phone'])){$phone=$_POST['phone'];}
if(isset($_POST['course'])){$course=$_POST['course'];}
if(isset($_POST['message'])){$message=$_POST['message'];}

// Message
$message = '
<html>
<head>
  <title>'. $subject .'</title>
</head>
<body>
  <p>Od: '. $email .'</p>
  <p>Telefon: '. $phone .'</p>
  <p>Kurs: '. $course .'</p>
  <p>Poruka: '. $message .'</p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: Sava <s86.kovacevic@gmail.com>';
$headers[] = 'From: ' . $email . '';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
?>