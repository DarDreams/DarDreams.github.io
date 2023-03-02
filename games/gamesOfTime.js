const games = {
    game1: ['1d 11h 45m 4s', '23:45:01'],
    game2: ['02:34:56', '12:34:56', '01:23:45'],
    game3: ['00:59:59', '01:00:01'],
    game4: ['04:12:34', '02:34:56'],
    game5: ['04:12:34', '02:34:56']
  };
  
  // Функция для вычисления общего времени игры
  function calculateTotalTime(timeArray) {
    let totalTime = 0;
    for (let i = 0; i < timeArray.length; i++) {
      const time = timeArray[i].split(':');
      totalTime += (+time[0]) * 3600 + (+time[1]) * 60 + (+time[2]);
    }
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  
  // Добавляем общее время для каждой игры
  for (const game in games) {
    if (games.hasOwnProperty(game)) {
      const timeArray = games[game].slice(1);
      const totalTime = calculateTotalTime(timeArray);
      games[game].unshift(totalTime);
    }
  }
  
  console.log(games);
  