<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true); // получаем данные в виде массива

  $caliberData = $data['caliber']['data'][0];
  $metadataCreatedAt = strtotime($data['metadata']['createdAt']);
  $filename = $_SERVER['DOCUMENT_ROOT'] . "/data/" . $caliberData . '_' . $metadataCreatedAt . ".json"; // формируем имя файла на основе данных и времени создания

  // Проверяем существование папки /data, и создаем ее, если она не существует
  $dataFolderPath = $_SERVER['DOCUMENT_ROOT'] . "/data";
  if (!file_exists($dataFolderPath)) {
    mkdir($dataFolderPath);
  }

  file_put_contents($filename, json_encode($data)); // сохраняем данные в файл

  if (filesize($filename) > 0) {
    echo 'Данные успешно обновлены';
  } else {
    echo 'Ошибка при сохранении данных';
  }
}
?>
