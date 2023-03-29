<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $json = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents('../games.json', $json);
    echo $json;
}
?>