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
        return `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }
  





//  UPLOAD ALL DATAS

function upload(data1, data2) {
    document.querySelector(`.team1Table`).innerHTML = '';
    document.querySelector(`.team2Table`).innerHTML = '';
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
            let operLoop;
            if (k == 2) { operLoop = ['assault','gunner','medic','sniper'];}
            if (k == 3) { operLoop = ['assaultR','gunnerR','medicR','sniperR'];}

//  OPER
    let roleName;
    function oper(collection) {
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
            if (role == 'A' && division == 'CST') {
                roleName = 'СЛАЙ';
         
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
            const operator = {
                role    : operLoop[i],
                emblem  : data1[k+5][i][5],
                avatar  : oper(data1[k+5][i][8][1]),
                lvlText : data1[k+5][i][3],
                nameOp  : roleName,
                lvlOp   : data1[k+5][i][8][18],
                rank    : data1[k+5][i][4],
                name    : data1[k+5][i][2],
                group   : String(data1[k+5][i][1]).slice(0,4),
                perks   : [data1[k+5][i+0][8][15][0],data1[k+5][i+0][8][15][1],data1[k+5][i+0][8][15][2],data1[k+5][i+0][8][15][3]],
                kills   : data2.Log.Users[k-2][i].PlayerKills,
                deaths  : data2.Log.Users[k-2][i].Deaths,
                assists : data2.Log.Users[k-2][i].Assists,
                damage  : Math.floor(data2.Log.Users[k-2][i].DamageDealt),
                recive  : Math.floor(data2.Log.Users[k-2][i].DamageReceived)
            };    

            

            let img = new Image();
            
            img.src = "https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + operator.emblem + "_large.png";
            
            img.onload = function() {
                document.querySelector(`.team${k-1}Table > tbody > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `<img class = "baner" src="${this.src}">`);
            };
        
            img.onerror = function() {
       
                document.querySelector(`.team${k-1}Table > * > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `
                
            <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_default_large.png" alt="${operator.emblem}">

            `);

            };
        
            //debugger;
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

    // CHANGE CST OPERS
    document.querySelectorAll('.nameOp').forEach(element => {
        if (element.innerText == 'СЛАЙ') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/sly.png";
            //operator.avatar = 'img/sly.png';
        }
        if (element.innerText == 'ФОРТРЕСС') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/fortress.png";
            //operator.avatar = 'img/fortress.png';
        }
        if (element.innerText == 'БОУНС') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/bounce.png";
        }
        if (element.innerText == 'АВАЛАНШ') {
            element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/avalansh.png";
        }
    });

    
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
            const mapName = data2.Log.Data[1].split("_").slice(0, -1).join("_");
            if (maps.originalMap.some((value) => value === mapName)) {
                const i = maps.originalMap.indexOf(mapName);
                const rusMapName = maps.rusMap[i];
                divMap.textContent = `\u00A0${rusMapName}`;
            }

            if (caliber[4] == 'pvp') {
                mode.innerText = `Столкновение:`;
        
            time.innerText = convertSecondsToTime(data2.Log.MatchTimeSeconds);
    };

    })();

    //  WIN / LOSE
    (function () {
        function color(color, text) {
            document.querySelector("div.winLose > div").innerText = text;
            document.querySelector("div.winLose > svg > path").style.fill = color;
            document.querySelector("div.winLoseText").style.color = color;
        }
        if (data1[7].some(player => player[2] == 'MASTER')) {
            if (score(0) == 3) {   
            color('#6aa5ee', 'ПОБЕДА!');
            } else {
            color('#6aa5ee', 'ПОРАЖЕНИЕ!');
            }
        } else if (data1[8].some(player => player[2] === 'MASTER')) {
            if (score(1) == 3) {
            color('#ff323b', 'ПОБЕДА!');
            } else {
            color('#ff323b', 'ПОРАЖЕНИЕ!');
            }
        }
    })()

    //  SCORE
    function score(teamNumber) {
        let data = data2.Log.Rounds;
        const teamKey = `winner_team_${teamNumber}`;
        const counts = data.reduce((acc, cur) => {
            if (cur.winner_team === teamNumber) {
            acc[teamKey] += 1;
            }
            return acc;
        }, { [teamKey]: 0 });
        return counts[teamKey];
    }
    //  COLOR POINTS
    (function () {
        let color = ["blue","red"]
        color.forEach((color,i) => {
            document.querySelector(`.${color}Point1>path`).style.fillOpacity = '0';
            document.querySelector(`.${color}Point2>path`).style.fillOpacity = '0';
            document.querySelector(`.${color}Point3>path`).style.fillOpacity = '0';
            function setColor(n) {
                
                document.querySelector(`.${color}Point${n}>path`).style.fillOpacity = '1';
            }
            
            if (score(i) == 1) {setColor(1)}
            if (score(i) == 2) {setColor(1);setColor(2)}
            if (score(i) == 3) {setColor(1);setColor(2);setColor(3);}
        });
    })();


    function setZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

const day   = setZero(new Date().getDate());
const month = setZero(new Date().getMonth()+1);
const year  = new Date().getFullYear();
const map   = document.querySelector('.map').textContent.trim();
const id    = data1[0];
const win   = document.querySelector("div.winLoseText").textContent.slice(0,document.querySelector("div.winLoseText").textContent.length-1);
const time  = 'time';

function save() {
    if (localStorage.getItem('rec') == 'true') {
        localStorage.setItem(`${day}:${month}:${year} ${id} ${win} ${map}`,JSON.stringify([data1,data2]));
    }
}
save();

} ////// END ALL DATAS

upload(caliber, caliber2);

    
//  CALENDAR 
    
    document.querySelector('.redPoints').insertAdjacentHTML("afterend",`
    <button id="show-panel">></button>
    <div class="slide-out-panel">
        <div class="calendar">
        <img class = 'rec' src='img/REC.png'>    
        <div class="custom-file-input">
            <input type="file" id="file-input" accept=".bytes">
                <label for="file-input">
                <img class ='folder' src='img/FOLDER.png'>
                </label>
	        </div>
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
    </div>
    `);

    document.querySelector('.slide-out-panel').insertAdjacentHTML("afterbegin",`<div id="list-container"></div>`);
    const button = document.getElementById('show-panel');
    const panel = document.querySelector('.slide-out-panel');
    const tables = document.querySelector('.container_tables');
    const recElem = document.querySelector('.rec');

    button.addEventListener('click', () => {
        panel.classList.toggle('show');
        tables.classList.toggle('show');
    if (localStorage.getItem("rec") === "true") {recElem.style.filter = "grayscale(0%)";    
    } else {
        recElem.style.filter = "grayscale(100%)";
    }
      if (button.innerText == '>') {button.innerText = '<'} else {button.innerText = ">"}
      //document.querySelector('.team1Table, .team2Table').left = 500;
    });
    //function rec() {
        //const rec = document.querySelector('.rec');
       // function record(clickable) {
            
            
            recElem.addEventListener('click', function() {
                
                if (localStorage.getItem("rec") === "false" || !localStorage.getItem("rec")) {
                  localStorage.setItem("rec", true);
                  recElem.style.filter = "grayscale(0%)";
                } else {
                  localStorage.setItem("rec", false);
                  recElem.style.filter = "grayscale(100%)";
                }
                save();
            });
          
   

    

    const calendarBody = document.getElementById("calendar-body");
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
    }

    function generateCalendar(month, year) {
        calendarBody.innerHTML = "";
        const daysInMonth = getDaysInMonth(month, year);
        const firstDayOfMonth = new Date(year, month, 0).getDay();
        let date = 1;
        for (let i = 0; i < 5; i++) {
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
                //const eventText = prompt("Введите описание события для " + year + "-" + (month+1) + "-" + this.textContent + ":");
                    
                    const listContainer = document.getElementById('list-container');
                    const keys = Object.keys(localStorage);

                    listContainer.innerHTML = '';
                    keys.forEach(key => {
                        console.log(key);
                        if (key == 'rec') {return};
                        if (this.textContent == key.match(/\d+/g)[0]) {
                            const listItem = document.createElement('li');
                            listItem.textContent = key;
                            listItem.addEventListener('click', () => {
                                myFunction(key);
                            });
                            const date  = listItem.textContent.split(' ')[0];
                            const id    = listItem.textContent.split(' ')[1];
                            const win   = listItem.textContent.split(' ')[2];
                            const map   = listItem.textContent.split(' ')[3];
                            const time  = `${new Date().getHours()}:${new Date().getMinutes()}`;
                            listItem.innerHTML  = `${id} ${map} Столкновение ${win} ${date}`;
                            listContainer.appendChild(listItem);
                            const words = listItem.textContent.split(' ');
                            listItem.textContent = ''; 

                            for (let i = 0; i < words.length; i++) {
                              const span = document.createElement('span');
                              span.textContent = words[i];
                              listItem.appendChild(span);
                            }
                            //listContainer.appendChild(item);
                        }
                    });
                    const listItems = document.querySelectorAll('#list-container > li');
                    listItems.forEach(item => {
                    const lastSpan  = item.querySelector('span:last-child');
                    const firstSpan = item.querySelector('span:first-child');
                    firstSpan.insertAdjacentHTML('afterbegin',`
                        <svg class='star' viewBox="281.634 158.464 106.675 70" width="106.675" height="70">
                        <defs>
                            <mask id="mask" x="0" y="0" width="69" height="69">
                            <rect x="278.691" y="158.464" width="69" height="69" fill="white"></rect>
                            <path d="M 294.111 189.782 L 302.188 189.782 L 304.683 182.109 L 307.179 189.782 L 315.256 189.782 L 308.722 194.524 L 311.218 202.197 L 304.683 197.455 L 298.149 202.197 L 300.645 194.524 L 294.111 189.782 Z" fill="black"></path>
                            </mask>
                        </defs>
                        <g class="layer" transform="matrix(1, 0, 0, 1, 319.590825, 158.343768)" height="70&quot; class=&quot;layer">
                            <title>Layer 1</title>
                            <path d="m-0.20636,0.12021l68.92459,0l-0.12566,34.50001l0.12566,34.50016l-68.92459,0l15.4421,-34.50016l-15.4421,-34.50001z" fill="#9f9f9f" id="svg_1" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="null" transform="rotate(-180 34.2559 34.6203)"></path>
                        </g>
                        <rect width="70" height="70" fill="#9f9f9f" mask="url(#mask)" x="281.634" y="158.464"></rect>
                        </svg>
                    `)
                    lastSpan.insertAdjacentHTML('beforeend', '<img class="basket" src="img/basket.png"></img>');
                    
                    
                    const imgBasket = document.querySelectorAll('.basket')
                    imgBasket.forEach(function (item){
                        item.addEventListener('click',(e) => {
                            e.path[2].remove();
                            localStorage.removeItem(keys.filter(key => key.includes(e.path[2].children[0].textContent)))
                        });
                    });

                    });
                    function myFunction(key) {
                        let data = JSON.parse(localStorage.getItem(key));
                        console.log(data[0]);
                        upload(data[0],data[1]);
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

//  BUTTON OPEN DIFFERENT DATA BASE

const label = document.querySelector('.custom-file-input');

label.addEventListener('click', () => {
  const path = '%USERPROFILE%\\AppData\\LocalLow\\1CGS\\Caliber\\Replays';
  const textarea = document.createElement('textarea');
  textarea.textContent = path;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  //console.log('Путь скопирован в буфер обмена');
});



const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
        let caliber_b = [];
        let caliber_b2 = [];
        let data = event.target.result.match(/^(.*\n){0,2}.*/g);
        data = data[0].replaceAll(/[^\x20-\x7E]+/g);
        data = data.replaceAll(/[^ -~]+/g);
        data = data.replace(/.*?({.*)/, "$1");
        caliber_b = data.match(/^(.*14":\[\]\})\w/s)[1];
        caliber_b2 = data.match(/({"Log":.*:true})/s)[1];

        function fix(obj) {
            let brokenObject = obj;
            let fixedObject = brokenObject.replace(/'/g, '"').replace(/([a-zA-Z]+):/g, '"$1":');
            fixedObject = JSON.parse(fixedObject);
            return fixedObject;
        }
        
        caliber_b  = fix(caliber_b);
        caliber_b2 = fix(caliber_b2);

        caliber_b[8] = caliber_b[7].splice(4);
        caliber_b2.Log.Users[0] = [caliber_b2.Log.Users[0],caliber_b2.Log.Users[1],caliber_b2.Log.Users[2],caliber_b2.Log.Users[3]]
        caliber_b2.Log.Users[1] = [caliber_b2.Log.Users[4],caliber_b2.Log.Users[5],caliber_b2.Log.Users[6],caliber_b2.Log.Users[7]]
        caliber_b2.Log.Users.splice(2);
        upload(caliber_b, caliber_b2);
    }
});

////////////////////////LOAD FUNCKINC
// function updateFileContent(filePath, localFilePath) {
//     const githubUsername = 'DarDreams';
//     const repoName = 'DarDreams.github.io';
//     const accessToken = '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';
//     const apiUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}?ref=main`;
//     const headers = {
//       Authorization: `token ${accessToken}`,
//       'Content-Type': 'application/json',
//     };
  
//     fetch(localFilePath)
//       .then(response => response.text())
//       .then(fileContents => {
//         const encoder = new TextEncoder();
//         const content = encoder.encode(fileContents);
//         return fetch(apiUrl, {
//           method: 'PUT',
//           headers: headers,
//           body: JSON.stringify({
//             message: 'Update file contents',
//             content: window.btoa(String.fromCharCode.apply(null, content)),
//           })
//         });
//       })
//       .then(response => console.log(response))
//       .catch(error => console.error(error));
//   }
    //updateFileContent('Caliber/index.html', 'index.html');
    // updateFileContent('Caliber/js/script.js','js/script.js');
    // updateFileContent('Caliber/js/game.js','js/game.js');
    // updateFileContent('Caliber/css/style.min.css','css/style.min.css');
    
});
