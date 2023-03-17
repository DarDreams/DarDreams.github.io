const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Разрешаем обращения к серверу с других доменов
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Добавляем middleware для парсинга JSON в теле запроса
app.use(bodyParser.json());

// Создаем маршрут для обработки POST-запроса на добавление данных
app.post('/products', function(req, res) {
  const product = req.body; // получаем данные из тела запроса
  // добавляем данные в вашу базу данных
  // ...
  // отправляем ответ клиенту
  res.send('Данные успешно добавлены');
});

// Запускаем сервер на порту 3000
app.listen(3000, function() {
  console.log('Сервер запущен на порту 3000');
});