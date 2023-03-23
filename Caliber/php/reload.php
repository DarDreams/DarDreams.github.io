<?php
$file = 'file.txt';
$last_modified_time = filemtime($file);
$current_time = time();
if (($current_time - $last_modified_time) > 60) {
  echo '<script>var reload = true;</script>';
}
?>