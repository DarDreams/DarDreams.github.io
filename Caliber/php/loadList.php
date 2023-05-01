<?php
$dir = 'data';
$files = scandir($dir);

foreach ($files as $file) {
    if (is_file($dir . '/' . $file)) {
        echo $file . '<br>';
    }
}
?>
