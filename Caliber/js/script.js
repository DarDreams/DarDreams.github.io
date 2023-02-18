// import game from "./game.js";
import {caliber, caliber2} from "./game.js";
console.clear();
window.addEventListener('DOMContentLoaded', () => {

        // function objectToArray(obj) {
        //     return Object.values(obj).map((value) => {
        //       if (typeof value === 'object' && value !== null) {
        //         return objectToArray(value);
        //       } else {
        //         return value;
        //       }
        //     });
        //   }
            
        //let games = objectToArray(game);


         caliber[8] = caliber[7].splice(4);
         caliber2.Log.Users[0] = [caliber2.Log.Users[0],caliber2.Log.Users[1],caliber2.Log.Users[2],caliber2.Log.Users[3]]
         caliber2.Log.Users[1] = [caliber2.Log.Users[4],caliber2.Log.Users[5],caliber2.Log.Users[6],caliber2.Log.Users[7]]
         caliber2.Log.Users.splice(2);


        



         console.log(caliber);
         console.log(caliber2);
        // console.log(games);
        // console.log(games[2][0+2][5][0]);
        // console.log(caliber[2+5][0+0][8][15][0]);


        


    function convertSecondsToTime(seconds) {
        //const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const sec = Math.floor(seconds % 60);
        return `${minutes
        .toString()
        .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }
  
//   MAPS
    (function (){
        const mode    = document.querySelector('.mode');
        const time    = document.querySelector('.time');
        const divMap  = document.querySelector('.map');
        const maps = {
            originalMap: [
              'lv_zalessye_radarbase_overcast',
              'lv_karhad_emirresidence_evening',
              'lv_karhad_caravanserai_night',
              'lv_zalessye_dam_default',
              'lv_zalessye_passage_overcast',
              'lv_karhad_hospital_default',
              'lv_zalessye_oilrig_sunrise',
              'lv_karhad_village_default',
              'lv_karhad_hangar_storm',
              'lv_karhad_hotel_default',
              'lv_zalessye_forest_default',
              'lv_zalessye_depot_twilight',
              'lv_karhad_palmroad_default',
              'lv_karhad_mall_storm',
              'lv_zalessye_submarine_default'
            ].map(str => str.split("_").slice(0, -1).join("_")),
            rusMap: [
              'Радар',
              'Резиденция Эмира',
              'Караван-Сарай',
              'Дамба',
              'Переправа',
              'Больница',
              'Переправа',
              'Деревня',
              'Гавань Амаль',
              'Отель',
              'Лес',
              'Депо',
              'Пальмовая дорога',
              'Торговый центр',
              'Объект 903'
            ]
        };
            const mapName = caliber2.Log.Data[1].split("_").slice(0, -1).join("_");
            if (maps.originalMap.some((value) => value === mapName)) {
                const i = maps.originalMap.indexOf(mapName);
                const rusMapName = maps.rusMap[i];
                divMap.textContent = ` ${rusMapName}`;
            }

            if (caliber[4] == 'pvp') {
                mode.innerText = `Столкновение:`;
        
            time.innerText = convertSecondsToTime(caliber2.Log.MatchTimeSeconds);
    };

    })();

//  SCORE
    function score(teamNumber) {
        let data = caliber2.Log.Rounds;
        const teamKey = `winner_team_${teamNumber}`;
        const counts = data.reduce((acc, cur) => {
            if (cur.winner_team === teamNumber) {
            acc[teamKey] += 1;
            }
            return acc;
        }, { [teamKey]: 0 });
        return counts[teamKey];
    }

    (function () {
        let color = ["blue","red"]
        color.forEach((color,i) => {
            function setColor(n) {
                document.querySelector(`.${color}Point${n}>path`).style.fillOpacity = '1';
            }
            if (score(i) == 1) {setColor(1)}
            if (score(i) == 2) {setColor(1);setColor(2)}
            if (score(i) == 3) {setColor(1);setColor(2);setColor(3);}
        });
    })();



//  WIN / LOSE
    (function () {
        function color(color, text) {
            document.querySelector("div.winLose > div").innerText = text;
            document.querySelector("div.winLose > svg > path").style.fill = color;
            document.querySelector("div.winLoseText").style.color = color;
        }
        if (caliber[7].some(player => player[2] == 'MASTER')) {
            if (score(0) == 3) {   
            color('#6aa5ee', 'ПОБЕДА!');
            } else {
            color('#6aa5ee', 'ПОРАЖЕНИЕ!');
            }
        } else if (caliber[8].some(player => player[2] === 'MASTER')) {
            if (score(1) == 3) {
            color('#ff323b', 'ПОБЕДА!');
            } else {
            color('#ff323b', 'ПОРАЖЕНИЕ!');
            }
        }
    })()

//  OPER
    let roleName;
    function oper(collection, k) {
        collection = collection.toUpperCase();
        let res;
        let division = collection.replace(/(\d+)?.$/g,''); 
        let year = collection.match(/\d\d\d\d/g); if (year === null) {year = ''}
        let role = collection.slice(-1);
        if (division == 'SSO' || division == 'FSB' || division == '22SPN' || division == 'RECRUIT')  { 
            res = `RUS_${division}${year}_${role}`; 
            if (role == 'A' && division == 'SSO') {roleName = 'ВОРОН'}; 
            if (role == 'G' && division == 'SSO') {roleName = 'СПУТНИК'};
            if (role == 'M' && division == 'SSO') {roleName = 'БАРД'};
            if (role == 'S' && division == 'SSO') {roleName = 'КОМАР'};

            if (role == 'A' && division == 'FSB') {roleName = 'ПЕРУН'}; 
            if (role == 'G' && division == 'FSB') {roleName = 'СВАРОГ'};
            if (role == 'M' && division == 'FSB') {roleName = 'ТРАВНИК'};
            if (role == 'S' && division == 'FSB') {roleName = 'СОКОЛ'};

            if (role == 'A' && division == 'FSB' && year == 2004) {roleName = 'ВОЛК'}; 
            if (role == 'G' && division == 'FSB' && year == 2004) {roleName = 'АЛМАЗ'};
            if (role == 'M' && division == 'FSB' && year == 2004) {roleName = 'ДЕД'};
            if (role == 'S' && division == 'FSB' && year == 2004) {roleName = 'СТРЕЛОК'};

            if (role == 'A' && division == '22SPN') {roleName = 'ПЛУТ'}; 
            if (role == 'G' && division == '22SPN') {roleName = 'КИТ'};
            if (role == 'M' && division == '22SPN') {roleName = 'КАРАВАЙ'};
            if (role == 'S' && division == '22SPN') {roleName = 'ТЕНЬ'};
        }; 

        //console.log(`yearo=${year}, div=${division}`)
        if (year == '' && division == 'BELSSO') {
            res = `BLR_${division.slice(3,6)}${year}_${role}`;
            if (role == 'A') {roleName = 'ЛАЗУТЧИК'};
            if (role == 'G') {roleName = 'ЗУБР'};
            if (role == 'M') {roleName = 'КАВАЛЬ'};
            if (role == 'S') {roleName = 'БУСЕЛ'};
        };

        if (division == 'GROM')     { 
            res = `POL_${division}${year}_${role}`;
            if (role == 'A' && division == 'GROM') {roleName = 'КОШМАР'}; 
            if (role == 'G' && division == 'GROM') {roleName = 'ПРОРОК'};
            if (role == 'M' && division == 'GROM') {roleName = 'МИКОЛА'};
            if (role == 'S' && division == 'GROM') {roleName = 'СТИЛЕТ'}; 
        };
        if (division == 'KSK')      { 
            res = `DEU_${division}${year}_${role}`;
            if (role == 'A' && division == 'KSK') {roleName = 'РЕЙ'}; 
            if (role == 'G' && division == 'KSK') {roleName = 'ШТЕРН'};
            if (role == 'M' && division == 'KSK') {roleName = 'ШАТЦ'};
            if (role == 'S' && division == 'KSK') {roleName = 'КУРТ'};
        };
        if (division == 'SEAL')     {
             res = `USA_${division}${year}_${role}`;
             if (role == 'A' && division == 'SEAL') {roleName = 'КОРСАР'}; 
             if (role == 'G' && division == 'SEAL') {roleName = 'БУРБОН'};
             if (role == 'M' && division == 'SEAL') {roleName = 'МОНК'};
             if (role == 'S' && division == 'SEAL') {roleName = 'СКАУТ'};

        };
        if (division == 'TFB')      {
            res = `GBR_${division}${year}_${role}`;
            if (role == 'A' && division == 'TFB') {roleName = 'СТЕРЛИНГ'}; 
            if (role == 'G' && division == 'TFB') {roleName = 'БИШОП'};
            if (role == 'M' && division == 'TFB') {roleName = 'ВАТСОН'};
            if (role == 'S' && division == 'TFB') {roleName = 'АРЧЕР'};
        };
        if (division == 'RAID')     { 
            res = `FRA_${division}${year}_${role}`;
            if (role == 'A' && division == 'RAID') {roleName = 'АВАНГАРД'}; 
            if (role == 'G' && division == 'RAID') {roleName = 'БАСТИОН'};
            if (role == 'M' && division == 'RAID') {roleName = 'ВЕЛЮР'};
            if (role == 'S' && division == 'RAID') {roleName = 'ВАГАБОНД'};
        };
        if (division == 'NESHER')   {
            res = `ISR_${division}${year}_${role}`;
            if (role == 'A' && division == 'NESHER') {roleName = 'АФЕЛА'}; 
            if (role == 'G' && division == 'NESHER') {roleName = 'ХАГАНА'};
            if (role == 'M' && division == 'NESHER') {roleName = 'ШАРШЕРЕТ'};
            if (role == 'S' && division == 'NESHER') {roleName = 'ЭЙМА'};

        };
        if (division == 'EZAPAC')   {
            res = `ESP_${division}${year}_${role}`;
            if (role == 'A' && division == 'EZAPAC') {roleName = 'ФАРО'}; 
            if (role == 'G' && division == 'EZAPAC') {roleName = 'МАТАДОР'};
            if (role == 'M' && division == 'EZAPAC') {roleName = 'МИГЕЛЬ'};
            if (role == 'S' && division == 'EZAPAC') {roleName = 'ДИАБЛО'};
        };
        if (division == 'ARYSTAN')  {
            res = `KAZ_${division}${year}_${role}`;
            if (role == 'A' && division == 'ARYSTAN') {roleName = 'МУСТАНГ'}; 
            if (role == 'G' && division == 'ARYSTAN') {roleName = 'ТИБЕТ'};
            if (role == 'M' && division == 'ARYSTAN') {roleName = 'БАГГИ'};
            if (role == 'S' && division == 'ARYSTAN') {roleName = 'СУЛТАН'};
        };
        if (division == 'AMF')      {
            res = `SWE_${division}${year}_${role}`
            if (role == 'A' && division == 'AMF') {roleName = 'СТАРКАД'}; 
            if (role == 'G' && division == 'AMF') {roleName = 'ОДИН'};
            if (role == 'M' && division == 'AMF') {roleName = 'ФРЕЙР'};
            if (role == 'S' && division == 'AMF') {roleName = 'ВИДАР'};
        };
        if (division == 'JIAOLONG') {
            res = `CHN_${division}${year}_${role}`;
            if (role == 'A' && division == 'JIAOLONG') {roleName = 'ШАОВЭЙ'}; 
            if (role == 'G' && division == 'JIAOLONG') {roleName = 'ИНЧЖОУ'};
            if (role == 'M' && division == 'JIAOLONG') {roleName = 'ЯОВАН'};
            if (role == 'S' && division == 'JIAOLONG') {roleName = 'ЦАНЛУН'};
        };
        if (division == 'CST')      {
          //  res = `USA_${division}${year}_${role}`;
            if (role == 'A' && division == 'CST') {
                roleName = 'СЛАЙ';
                //document.querySelector('img.oper').src = 'img/sly.png';
            }; 
            if (role == 'G' && division == 'CST') {
                roleName = 'ФОРТРЕСС';

            };
            if (role == 'M' && division == 'CST') {
                roleName = 'БОУНС';
            };
            if (role == 'S' && division == 'CST') {roleName = 'АВАЛАНШ'};
            
        };
        //console.log(res);
        return res
        
    };



    for (let k = 2; k < 4; k++) {
    document.querySelector(`.team${k-1}Table`).insertAdjacentHTML('afterbegin',`
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th>ГРУППА</th>
    <th>ЛИКВИДИРОВАЛ</th>
    <th>ПОГИБ</th>
    <th>СОДЕЙСТВИЯ</th>
    <th>УРОН</th>
    <th>ПОЛУЧЕНИЕ</th>`);
        for (let i = 0; i <= 3; i++) {
            // function error(string) {
            //     if (games[k][i+2][12] == string) { 
            //         games[k][i+2][12] = 'default'
            //     }
            // }
            let operLoop;
            if (k == 2) { operLoop = ['assault','gunner','medic','sniper'];}
            if (k == 3) { operLoop = ['assaultR','gunnerR','medicR','sniperR'];}

            const operator = {
                role: operLoop[i],
                emblem: caliber[k+5][i][5],
                avatar: oper(caliber[k+5][i][8][1],k),
                lvlText:caliber[k+5][i][3],
                nameOp:roleName,
                lvlOp:caliber[k+5][i][8][18],
                rank:caliber[k+5][i][4],
                name:caliber[k+5][i][2],
                group:String(caliber[k+5][i][1]).slice(0,4),
                perks:[caliber[k+5][i+0][8][15][0],caliber[k+5][i+0][8][15][1],caliber[k+5][i+0][8][15][2],caliber[k+5][i+0][8][15][3]],
                kills:caliber2.Log.Users[k-2][i].PlayerKills,
                deaths:caliber2.Log.Users[k-2][i].Deaths,
                assists:caliber2.Log.Users[k-2][i].Assists,
                damage:Math.floor(caliber2.Log.Users[k-2][i].DamageDealt),
                recive:Math.floor(caliber2.Log.Users[k-2][i].DamageReceived)
            };    

            let img = new Image();
            
            img.src = "https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + caliber[k+5][i][5] + "_large.png";
            
            img.onload = function() {
                document.querySelector(`.team${k-1}Table > tbody > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `<img class = "baner" src="${this.src}">`);
            };
        
            img.onerror = function() {
       
                document.querySelector(`.team${k-1}Table > * > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `
                
            <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_default_large.png" alt="${operator.emblem}">

            `);

            };
        

            document.querySelector(`.team${k-1}Table`).insertAdjacentHTML('beforeend',`
            
            <tr class = 'line ${operator.role}'>
                <td>
                    <svg class = "${operator.role}Logo"><title>${operator.role}</title><use xlink:href="#${operator.role}"></use></svg>
                </td>
                <td>
                <img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${operator.avatar}_Small.png" alt="">
                </td>
                <td>
                    <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                        <span class="lvlText">${operator.lvlText}</span>    
                        <div class="bevel">
                            <span class = "nameOp">${operator.nameOp}</span>
                            <span class = "lvlOp">${operator.lvlOp}</span>
                        </div>
                    </div>
                </td>
                <td class = "imgBaner">
                
                    <span class = "rank">${operator.rank}</span>
                    <span class = "name" style = "position: absolute">${operator.name}</span>
                </td>
                <td data-gr = "${operator.group}" class = "groups">
                ${operator.group}
                    <div class = "perks">
                        <svg class="perk _1"><title>${operator.perks[0]}</title><use xlink:href="#${operator.perks[0]}"></use></svg>
                        <svg class="perk _2"><title>${operator.perks[1]}</title><use xlink:href="#${operator.perks[1]}"></use></svg>
                        <svg class="perk _3"><title>${operator.perks[2]}</title><use xlink:href="#${operator.perks[2]}"></use></svg>
                        <svg class="perk _4"><title>${operator.perks[3]}</title><use xlink:href="#${operator.perks[3]}"></use></svg>
                    </div>
                </td>
                <td class = "kills"  >${operator.kills}</td>
                <td class = "deaths" >${operator.deaths}</td>
                <td class = "assists">${operator.assists}</td>
                <td class = "damages">${operator.damage}</td>
                <td class = "recive" >${operator.recive}</td>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
            </tr>
        `)};
    }
    
//  TOP-STATS
    function topStat(selector, type) {
        if (!selector || typeof selector !== "string") {
          console.error("Invalid selector argument, expected a string but got " + selector);
          return;
        }
        if (!type || (type !== "max" && type !== "min")) {
          console.error("Invalid type argument, expected 'max' or 'min' but got " + type);
          return;
        }
        let max = Number.MIN_SAFE_INTEGER;
        let min = Number.MAX_SAFE_INTEGER;
        let maxIndex = [];
        let minIndex = [];
      
        for (let i = 0; i < 8; i++) {
            let currentValue = parseInt(document.querySelectorAll(selector)[i].innerText);
          if (Number(currentValue) > max) {
            max = Number(currentValue);
            maxIndex = [i];
          } else if (Number(currentValue) === max) {
            maxIndex.push(i);
          }
          if (Number(currentValue) < min) {
            min = Number(currentValue);
            minIndex = [i];
          } else if (Number(currentValue) === min) {
            minIndex.push(i);
          }
          //console.log(selector,typeof(maxIndex[0]),typeof(minIndex[0]),maxIndex[0],minIndex[0]);
        }
        if (type === "max") {
          for (let i = 0; i < maxIndex.length; i++) {
            document.querySelectorAll(selector)[maxIndex[i]].style.cssText = `
                      color: #C49A30;
                      font-weight: 800;
                      `;
          }
        } else if (type === "min") {
          for (let i = 0; i < minIndex.length; i++) {
            document.querySelectorAll(selector)[minIndex[i]].style.cssText = `
                      color: #C49A30;
                      font-weight: 800;
                      `;
          }
        }
      }
    
        topStat('.damages','max');
        topStat('.kills','max');
        topStat('.assists','max');
        topStat('.recive','min');
        topStat('.deaths','min');

//  GROUPS COLORS
        (function () {                             
            let color;
            let k = 0;
            let group = document.querySelectorAll('.groups');
            group.forEach((element,i) => {
                if (i == 4) {k = 0};
                let grValue = element.innerText.trim();
                let groupElements = document.querySelectorAll(`[data-gr="${grValue}"]`);
                if (groupElements.length > 1) {
                     (k > 2) ? color = '#ff323b': color = 'lime';
                    k++;
                    groupElements.forEach((groupElement) => {
                    groupElement.style.borderLeft = `4px solid ${color}`;
                });
                }
            });
        })();


    document.querySelectorAll('.nameOp').forEach(element => {
        if (element.innerText == 'СЛАЙ') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/sly.png";
        }
        if (element.innerText == 'ФОРТРЕСС') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/fortress.png";
        }
        if (element.innerText == 'БОУНС') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/bounce.png";
        }
        if (element.innerText == 'АВАЛАНШ') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/avalansh.png";
        }
    });
    
//  CALENDAR 
    document.querySelector('.redPoints').insertAdjacentHTML("afterend",`
        <div class="calendar">
            <div class="container">
                <h1></h1>
                <table>
                    <thead>
                        <tr>
                        <th>Пн</th>
                        <th>Вт</th>
                        <th>Ср</th>
                        <th>Чт</th>
                        <th>Пт</th>
                        <th>Сб</th>
                        <th>Вс</th>
                        </tr>
                    </thead>
                <tbody id="calendar-body">
                </tbody>
                </table>
            </div>
        </div>
    `);
    const calendarBody = document.getElementById("calendar-body");
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
    }

    function generateCalendar(month, year) {
    // Очищаем календарь перед созданием нового
    calendarBody.innerHTML = "";
    
    // Получаем количество дней в месяце
    const daysInMonth = getDaysInMonth(month, year);
    // Получаем первый день месяца
    const firstDayOfMonth = new Date(year, month, 0).getDay();
    
    let date = 1;
    // Создаем ячейки для каждого дня месяца
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        if (i === 0 && j < firstDayOfMonth) {
            // Пустые ячейки до первого дня месяца
            cell.textContent = "";
        } else if (date > daysInMonth) {
            // Пустые ячейки после последнего дня месяца
            cell.textContent = "";
        } else {
            // Добавляем дату
            cell.textContent = date;
            date++;

            // Назначаем обработчик клика на ячейку
            cell.addEventListener("click", function() {
            const eventText = prompt("Введите описание события для " + year + "-" + (month+1) + "-" + this.textContent + ":");
            if (eventText) {
                const event = document.createElement("div");
                event.textContent = eventText;
                event.classList.add("event");
                this.appendChild(event);
            }
            });
        }
        row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
    }

    // Создаем календарь на текущий месяц и год
    generateCalendar(currentMonth, currentYear);


////////////////////////LOAD FUNCKINC
function updateFileContent(filePath, localFilePath) {
    const githubUsername = 'DarDreams';
    const repoName = 'DarDreams.github.io';
    const accessToken = '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';
    const apiUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}?ref=main`;
    const headers = {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    };
  
    fetch(localFilePath)
      .then(response => response.text())
      .then(fileContents => {
        const encoder = new TextEncoder();
        const content = encoder.encode(fileContents);
        return fetch(apiUrl, {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify({
            message: 'Update file contents',
            content: window.btoa(String.fromCharCode.apply(null, content)),
          })
        });
      })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }
    //updateFileContent('Caliber/index.html', 'index.html');
    // updateFileContent('Caliber/js/script.js','js/script.js');
    // updateFileContent('Caliber/js/game.js','js/game.js');
    // updateFileContent('Caliber/css/style.min.css','css/style.min.css');
});
