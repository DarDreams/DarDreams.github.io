<?php
// путь к директории с файлами
$dir = "./data";

// массив с информацией о файлах
$fileList = array();

// открываем директорию
if ($handle = opendir($dir)) {

    // перебираем файлы
    while (false !== ($entry = readdir($handle))) {

        // пропускаем текущую и родительскую директории
        if ($entry == "." || $entry == "..") {
            continue;
        }

        // получаем полный путь к файлу
        $path = $dir . '/' . $entry;

        // получаем информацию о файле
        $fileInfo = pathinfo($path);

        // получаем время создания файла в UNIX-формате
        $created = filemtime($path);

        // добавляем информацию о файле в массив
        $fileList[] = array(
            "name" => $fileInfo['filename'],
            "result" => "",
            "map" => "",
            "created" => date("d.m.Y H:i:s", $created)
        );
    }

    // закрываем директорию
    closedir($handle);
}

// Получаем выбранную дату из запроса
$date = $_POST['date'];

// Создаем новый объект с id, соответствующим выбранной дате
$newFile = array(
    "name" => "file_" . $date, // имя файла может быть произвольным, здесь примерное значение
    "result" => "",
    "map" => "",
    "created" => date("d.m.Y H:i:s", time()) // текущая дата и время
);

// Добавляем новый объект в массив $fileList
$fileList[] = $newFile;

// выводим список файлов в формате JSON
echo json_encode($fileList);
?>
