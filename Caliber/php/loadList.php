<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Получаем дату из параметра запроса
  $date = $_GET['date'];

  // Сканируем папку и получаем список файлов
  $files = scandir('data');

  // Массив для хранения имен файлов с нужной датой
  $result = [];

  // Проходим по всем файлам в папке
  foreach ($files as $file) {
    // Игнорируем файлы, которые не являются JSON-файлами
    if (pathinfo($file, PATHINFO_EXTENSION) !== 'json') {
      continue;
    }

    // Получаем дату из имени файла
    $filename = pathinfo($file, PATHINFO_FILENAME);
    $filedate = DateTime::createFromFormat('d-m-Y', substr($filename, -10));

    // Проверяем, соответствует ли дата в имени переданной дате
    if ($filedate->format('d-m-Y') === $date) {
      // Добавляем имя файла в результат
      $result[] = $file;
    }
  }

  // Выводим список файлов на клиент
  echo json_encode($result);
}
?>
