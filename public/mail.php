<?php 
if (isset($_POST['submit'])) {
  $to = $_POST['to'];
  $from = $_POST['from'];
  $subject = "PHP Mail() test";
  $message = "This is a test of PHP mail()";
  $headers = 'From: '. $from . "\r\n" .
             'Reply-To: '. $from . "\r\n" .
             'X-Mailer: PHP/' . phpversion();
  if (mail($to, $subject, $message, $headers)) {
      echo '<p>Your message has been sent!</p>';
  } else {
      echo '<p>Something went wrong, go back and try again!</p>';
  }
}
?>