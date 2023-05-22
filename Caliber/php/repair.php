<?php

if (isset($_GET['folder'])) {
    $folder = '../' . $_GET['folder'];
    $files = scandir($folder);
    $result = array();
    foreach ($files as $file) {
        if (in_array($file, array(".", ".."))) continue;
        $ext = pathinfo($file, PATHINFO_EXTENSION);
        if ($ext == 'bytes') {
            $filePath = $folder . '/' . $file;

            $fileParts = explode('_', $file);
            $userID = $fileParts[1];
            $date = $fileParts[2];
            $time = $fileParts[3];

            $fileContent = file_get_contents($filePath);
            $fileContent = preg_replace('/^(.*\n){0,2}.*/', '$0', $fileContent);
            $fileContent = preg_replace('/[^\x20-\x7E]+/', '', $fileContent);
            $fileContent = preg_replace('/[^ -~]+/', '', $fileContent);
            $fileContent = preg_replace('/.*?({.*)/', '$1', $fileContent);

            $caliber_b = preg_match('/^(.*14":\[\]\})\w/s', $fileContent, $matches);
            $caliber_b = $matches[1];
            $caliber_b2 = preg_match('/({"Log":.*:true})/s', $fileContent, $matches);
            $caliber_b2 = $matches[1];

            $caliber_file = '{"caliber":{"data":' . stripslashes($caliber_b) . ',"log":' . stripslashes($caliber_b2) . "}}";

            $caliberImport = json_decode($caliber_file, true);
            $caliberImport2 = json_decode($caliber_file, true);

            $caliberNew = caliberFunc($caliberImport['caliber']['data'], $caliberImport2['caliber']['log'],$userID,$date,$time);

            //echo json_encode($caliberNew);
            echo json_encode(['caliber' => $caliberNew]);

            //file_put_contents($filePath, $fileContent); // Пересохранение файла с новым содержимым
            //echo $caliberNew["data"][0] . '.json';
            file_put_contents($folder . "/" . $caliberNew["data"][0] . '.json', json_encode(['caliber' => $caliberNew]));
            unlink($filePath);
            $result[] = $fileContent;
        }
    }
}
function caliberFunc($caliberImport, $caliberImport2,$userID, $date, $time) {
    $time = str_replace("-", ":", $time);
    $caliberNew = [
        'data' => [
            $caliberImport[0],
            $caliberImport[2],
            [
                $caliberImport[7][0],
                $caliberImport[7][1],
                $caliberImport[7][2],
                $caliberImport[7][3]
            ],
            [
                $caliberImport[7][4],
                $caliberImport[7][5],
                $caliberImport[7][6],
                $caliberImport[7][7]
            ]
        ],
        'log' => [
            'Users' => [
                [
                    $caliberImport2['Log']['Users'][0],
                    $caliberImport2['Log']['Users'][1],
                    $caliberImport2['Log']['Users'][2],
                    $caliberImport2['Log']['Users'][3]
                ],
                [
                    $caliberImport2['Log']['Users'][4],
                    $caliberImport2['Log']['Users'][5],
                    $caliberImport2['Log']['Users'][6],
                    $caliberImport2['Log']['Users'][7]
                ]
            ],
            'MatchTimeSeconds' => $caliberImport2['Log']['MatchTimeSeconds'],
            'MaxRoundsWon' => $caliberImport2['Log']['MaxRoundsWon'],
            'PlayerReport' => $caliberImport2['Log']['PlayerReports'],
            'Rounds' => $caliberImport2['Log']['Rounds'],
            'userID' => $userID,
            'date' => $date,
            'time' => $time

            // Дополнительные поля, если необходимо
        ]
    ];
    
    for ($i = 2; $i <= 3; $i++) {
        for ($j = 0; $j <= 3; $j++) {
            if (is_array($caliberNew['data'][$i][$j][11])) {
                array_splice($caliberNew['data'][$i][$j][11], 0);
            }
            if (is_array($caliberNew['data'][$i][$j][9])) {
                array_splice($caliberNew['data'][$i][$j][9], 0);
            }
        }
    }
    
    foreach ($caliberNew['log']['Users'] as &$element) {
        unset($element['QuestCounters']);
    }
    
    return $caliberNew;
}
// Продолжение кода из части 2

$caliber_file = '{"caliber":{"data":'. stripslashes($caliber_b) . ',"log":' . stripslashes($caliber_b) . "}}";

$caliberImport = $caliber_file["caliber"]["data"];
$caliberImport2 = $caliber_file["caliber"]["log"];

try {
$caliberNew = caliberFunc($caliberImport, $caliberImport2);
} catch (Exception $e) {
    echo $e
}

// Вывод результатов
echo json_encode($caliberNew);
exit;
