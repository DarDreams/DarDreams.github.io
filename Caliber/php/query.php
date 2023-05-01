<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true); // получаем данные в виде массива

  $caliberData = $data['caliber']['data'][0];
  $metadataCreatedAt = strtotime($data['metadata']['createdAt']);

  $folderPath = $data['folderPath'];
  $filename = $_SERVER['DOCUMENT_ROOT'] . $folderPath . $caliberData . ".json";

  // Проверяем существование директории, и создаем ее, если она не существует
  $folders = explode('/', $folderPath);
  $currentPath = $_SERVER['DOCUMENT_ROOT'];

  foreach ($folders as $folder) {
    if (!empty($folder)) {
      $currentPath .= '/' . $folder;
      if (!file_exists($currentPath)) {
        mkdir($currentPath, 0755);
      }
    }
  }

  file_put_contents($filename, json_encode($data)); // сохраняем данные в файл

  if (filesize($filename) > 0) {
    echo 'Файл' . $filename .'был добавлен в базу данных';
  } else {
    echo 'Ошибка при сохранении данных';
  }
}
?>
