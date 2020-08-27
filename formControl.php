<!-- ?php

if(!isset($_POST['submit']))
{
    echo "Cum plm ai ajuns aici?";
}

$numeForm = $_POST['inputNume'];
$emailForm=$_POST['inputEmail'];
$telefonForm=$_POST['inputTelefon'];
$mesajForm=$_POST['inputMesaj'];

$emailTo = "mircea.casapu@gmail.com";
$emailSubject = "Mesaj Formular Website - " . "$numeForm";
$emailBody = "Numele meu este: $numeForm \n"."Numarul meu de telefon este: $telefonForm\n"."Mesajul meu este: $mesajForm\n"."Raspunde-mi la adresa: $emailForm";

$to = "mircea.casapu@gmail.com";
$headers = "From: $emailForm";

mail($to, $emailSubject, $emailBody, $headers);

echo "Succes";

? -->

<!-- ?php

if($_POST["submit"]) {
    $recipient="mircea.casapu@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["inputNume"];
    $senderEmail=$_POST["inputEmail"];
    $message=$_POST["inputMesaj"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
} -->

<?php
    echo "Hello World!";
?>