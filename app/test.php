<?php
$to = 's86.kovacevic@gmail.com';

// Subject
$subject='Upisi kurs';
if(isset($_POST['name'])){$name=$_POST['name'];}
if(isset($_POST['email'])){$email=$_POST['email'];}
if(isset($_POST['level'])){$level=$_POST['level'];}
if(isset($_POST['score'])){$score=$_POST['score'];}

// Message
$message = '
<html>
<head>
  <title>'. $name .'</title>
</head>
<body>
  <p>Email: '. $email .'</p>
  <p>Nivo: '. $level .'</p>
  <p>Rezultat: '. $score .'</p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: Sava <s86.kovacevic@gmail.com>';
$headers[] = 'From: ' . $email . '';

echo($message);

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
?>