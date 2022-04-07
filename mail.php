<?php


if(isset($_POST['submit'])){
$do  = "mail@suprai.com"; //zmienic na email firmy
$od = $_POST['email']; //email wysylajacego - z formularza

$mailheaders  = "From: $od\n";
$mailheaders .= "Reply-To: $od\n";
$mailheaders .= "Return-Path: $od\n";
$mailheaders .= "X-Mailer: HandMade\n";
$mailheaders .= "MIME-Version: 1.0\n";
$mailheaders .= "Content-type: text/html; charset=iso-8859-2\n";

$first_name = $_POST['fname'];
$temat = $_POST['subject'];
$temat2 = "Copy of " . $_POST['subject'];
$tresc = $first_name . " ( ". $od . " ) wrote the following:" . "\n\n" . $_POST['message'];
$tresc2 = "SuprAI Contact Form.\n\n Here is a copy of your message, " . $first_name . ":\n\n" . $_POST['message'];

$wiadomosc = '<html><head><title>'.$temat.'</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-2">
</head><body>'.nl2br($tresc).'</body></html>';

$wiadomosc2 = '<html><head><title>'.$temat.'</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-2">
</head><body>'.nl2br($tresc2).'</body></html>';



mail($do, $temat, $wiadomosc, $mailheaders);
mail($od, $temat2, $wiadomosc2, $mailheaders);

header('Location: send.html');
}
?>