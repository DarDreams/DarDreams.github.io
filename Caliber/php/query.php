<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true); // получаем данные в виде массива

  $filename = $_SERVER['DOCUMENT_ROOT'] . "/data/" . $data['caliber']['data'][0] . '_' . strtotime($data['metadata']['createdAt']) . ".json"; // формируем имя файла на основе данных и времени создания
  file_put_contents($filename, json_encode($data)); // сохраняем данные в файл

  if (filesize($filename) > 0) {
    echo 'Данные успешно обновлены';
  } else {
    echo 'Ошибка при сохранении данных';
  }
}
?>
