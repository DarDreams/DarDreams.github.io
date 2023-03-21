<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $to = $_POST['to'];
  $subject = $_POST['subject'];
  $body = $_POST['body'];
  $mail = $_POST['mail'];
  $headers = 'From: ' . $mail . "\r\n" .
             'Reply-To: webmaster@example.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo 'Email sent!';
  } else {
    http_response_code(500);
    echo 'Email failed to send.';
  }
}
?>
