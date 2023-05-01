<?php

// if (isset($_GET['folder'])) {
//   $folder = $_GET['folder'];
//   $files = scandir('../' . $folder);
//   $result = array();
//   foreach ($files as $file) {
//     if (in_array($file, array(".", "..")) || strpos($file, ".") === 0) continue;

//     $result[] = $file;
//   }
//   header('Content-Type: application/json');
//   echo json_encode($result);
// }
if (isset($_GET['folder'])) {
  $folder = '../' . $_GET['folder'];
  $files = scandir($folder);
  $result = array();
  foreach ($files as $file) {
    if (in_array($file, array(".", ".."))) continue;
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    if ($ext == 'json') {
      $result[] = $file;
    }
  }
  header('Content-Type: application/json');
  echo json_encode($result);
}






?>
