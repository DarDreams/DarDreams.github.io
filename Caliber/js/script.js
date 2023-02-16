import game from "./game.js";
import {caliber, caliber2} from "./game2.js";
console.clear();
window.addEventListener('DOMContentLoaded', () => {

        function objectToArray(obj) {
            return Object.values(obj).map((value) => {
              if (typeof value === 'object' && value !== null) {
                return objectToArray(value);
              } else {
                return value;
              }
            });
          }
            
        let games = objectToArray(game);


         caliber[8] = [caliber[7][4],caliber[7][5],caliber[7][6],caliber[7][7]];
         caliber[7].splice(-4);


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
  

    (function (){
        const mode = document.querySelector('.mode');
        const time = document.querySelector('.time');
        const map = document.querySelector('.map');
        if (caliber[4] == 'pvp') {
            mode.innerText = `Столкновение`;
        };
        time.innerText = convertSecondsToTime(caliber2.Log.MatchTimeSeconds);
        //console.log(caliber2.Log.Data[1].match(/^(.*?)\s[^\s]+$/g));
        if (caliber2.Log.Data[1].match(/^(.*?)\s[^\s]+$/g) == 'lv_zalessye_radarbase_overcast') {
            map.innerText = 'Залесье';
        }
        if (caliber2.Log.Data[1] == 'lv_karhad_emirresidence_evening') {
            map.innerText = 'Резиденция Эмира';
        }
    })();
        
        //console.log(caliber[7][0][2]);

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




(function () {

    function color(color, text) {
        document.querySelector("div.winLose > div").innerText = text;
        document.querySelector("div.winLose > svg > path").style.fill = color;
        document.querySelector("div.winLoseText").style.color = color;
        
    }
    
    if (caliber[7].some(player => player[2] == 'MASTER')) {
        //console.log('НАШЕЛ!');
        
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
        
    }

    class newOper {
        constructor(role, avatar, lvl, nameOp, lvlOp, baner, rank, name, group, perks, kills, deaths, assists, damage, recive) {
            this.role = role;
            this.avatar = avatar;
            this.lvl = lvl;
            this.nameOp = nameOp;
            this.lvlOp = lvlOp;
            this.baner = baner;
            this.rank = rank;
            this.name = name;
            this.group = group;
            this.perks = perks;
            this.kills = kills;
            this.deaths = deaths;
            this.assists = assists;
            this.damage = damage;
            this.recive = recive;

        }
    }
        // render() {
            // for (let i = 0; i <= 3; i++) {

            //     function error(string) {
            //         if (games[k][i+2][12] == string) { 
            //             games[k][i+2][12] = 'default'
            //         }
            //     }

            //     let operLoop = ['assault','gunner','medic','sniper'];

            //     let img = new Image();
            //     img.src = "https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + games[k][i+2][12] + "_large.png";
            //     img.onload = function() {
            //         document.querySelector(`.team${k-1}Table > tbody > tr.${operLoop[i]} >.imgBaner`).insertAdjacentHTML('afterbegin', `<img class = "baner" src="${this.src}">`);
            //     };
            //     img.onerror = function() {
            //     document.querySelector(`.team${k-1}Table > * > tr.${operLoop[i]} >.imgBaner`).insertAdjacentHTML('afterbegin', `
                    
            //     <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_default_large.png" alt="${games[k][i+2][12]}">

            //     `);
            //     };


    //             const operator = new newOper(
    //                 'assault', 
    //                 `https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${oper(games[k][i+2][3],k)}_Small.png`, 
    //                 games[k][i+2][0], 
    //                 roleName, 
    //                 games[k][i+2][1], 
    //                 'https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_default_large.png', 
    //                 games[k][i+2][2], 
    //                 games[k][i+2][6], 
    //                 games[k][i+2][4],
    //                 [caliber[k+5][i+0][8][15][0], caliber[k+5][i+0][8][15][1], caliber[k+5][i+0][8][15][2], caliber[k+5][i+0][8][15][3]], 
    //                 games[k][i+2][8],
    //                 games[k][i+2][9],
    //                 games[k][i+2][10],
    //                 games[k][i+2][7],
    //                 games[k][i+2][11]
    //               ).render();


    //             document.querySelector(`.team${k-1}Table`).insertAdjacentHTML('beforeend',`
                
    //             <tr class = "line ${this.role}">
    //                 <td>
    //                     <svg class = "${this.role}Logo"><title>${this.role}</title><use xlink:href="#${this.role}"></use></svg>
    //                 </td>
    //                 <td>
    //                 <img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${this.avatar}_Small.png" alt="">
    //                 </td>
    //                 <td>
    //                     <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
    //                         <span class="lvlText">${this.lvl}</span>    
    //                         <div class="bevel">
    //                             <span class = "nameOp">${this.role}</span>
    //                             <span class = "lvlOp">${this.lvlOp}</span>
    //                         </div>
    //                     </div>
    //                 </td>
    //                 <td class = "imgBaner">
                    
    //                     <span class = "rank">${this.rank}</span>
    //                     <span class = "name" style = "position: absolute">${this.name}</span>
    //                 </td>
    //                 <td>
    //                 ${this.group}
    //                     <div class = "perks">
    //                         <svg class="perk _1"><title>${this.perk[0]}</title><use xlink:href="#${this.perk[0]}"></use></svg>
    //                         <svg class="perk _2"><title>${this.perk[1]}</title><use xlink:href="#${this.perk[1]}"></use></svg>
    //                         <svg class="perk _3"><title>${this.perk[2]}</title><use xlink:href="#${this.perk[2]}"></use></svg>
    //                         <svg class="perk _4"><title>${this.perk[3]}</title><use xlink:href="#${this.perk[3]}"></use></svg>
    //                     </div>
    //                 </td>
    //                 <td class = "kills" >${this.kills}</td>
    //                 <td class = "deaths">${this.deaths}</td>
    //                 <td class = "assists">${this.assists}</td>
    //                 <td class = "damages">${this.damage}</td>
    //                 <td class = "recive">${this.recive}</td>
    //                 <tr><th></th></tr>
    //                 <tr><th></th></tr>
    //                 <tr><th></th></tr>
    //                 <tr><th></th></tr>
    //                 <tr><th></th></tr>
    //                 <tr><th></th></tr>
    //             </tr>
    //         `)};
    //     }
    // }




      
      
      
      
      
      


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
            let img = new Image();
            
            img.src = "https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + caliber[k+5][i][5] + "_large.png";
            
            img.onload = function() {
                document.querySelector(`.team${k-1}Table > tbody > tr.${operLoop[i]} >.imgBaner`).insertAdjacentHTML('afterbegin', `<img class = "baner" src="${this.src}">`);
            };
            img.onerror = function() {
       
                document.querySelector(`.team${k-1}Table > * > tr.${operLoop[i]} >.imgBaner`).insertAdjacentHTML('afterbegin', `
                
            <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_default_large.png" alt="${caliber[k+5][i][5]}">

            `);

            };

        

            document.querySelector(`.team${k-1}Table`).insertAdjacentHTML('beforeend',`
            
            <tr class = 'line ${operLoop[i]}'>
                <td>
                    <svg class = "${operLoop[i]}Logo"><title>${operLoop[i]}</title><use xlink:href="#${operLoop[i]}"></use></svg>
                </td>
                <td>
                <img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${oper(caliber[k+5][i][8][1],k)}_Small.png" alt="">
                </td>
                <td>
                    <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                        <span class="lvlText">${caliber[k+5][i][3]}</span>    
                        <div class="bevel">
                            <span class = "nameOp">${roleName}</span>
                            <span class = "lvlOp">${caliber[k+5][i][8][18]}</span>
                        </div>
                    </div>
                </td>
                <td class = "imgBaner">
                
                    <span class = "rank">${caliber[k+5][i][4]}</span>
                    <span class = "name" style = "position: absolute">${caliber[k+5][i][2]}</span>
                </td>
                <td data-gr = "${String(caliber[k+5][i][1]).slice(0,5)}" class = "groups group-${i}">
                ${String(caliber[k+5][i][1]).slice(0,5)}
                    <div class = "perks">
                        <svg class="perk _1"><title>${caliber[k+5][i+0][8][15][0]}</title><use xlink:href="#${caliber[k+5][i+0][8][15][0]}"></use></svg>
                        <svg class="perk _2"><title>${caliber[k+5][i+0][8][15][1]}</title><use xlink:href="#${caliber[k+5][i+0][8][15][1]}"></use></svg>
                        <svg class="perk _3"><title>${caliber[k+5][i+0][8][15][2]}</title><use xlink:href="#${caliber[k+5][i+0][8][15][2]}"></use></svg>
                        <svg class="perk _4"><title>${caliber[k+5][i+0][8][15][3]}</title><use xlink:href="#${caliber[k+5][i+0][8][15][3]}"></use></svg>
                    </div>
                </td>
                <td class = "kills" >${games[k][i+2][8]}</td>
                <td class = "deaths">${games[k][i+2][9]}</td>
                <td class = "assists">${games[k][i+2][10]}</td>
                <td class = "damages">${games[k][i+2][7]}</td>
                <td class = "recive">${games[k][i+2][11]}</td>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
            </tr>
        `)};
    }
    

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
          let currentValue = parseInt(
            Object.values(document.querySelectorAll(selector)[i].innerText)
          );
          if (currentValue > max) {
            max = currentValue;
            maxIndex = [i];
          } else if (currentValue === max) {
            maxIndex.push(i);
          }
          if (currentValue < min) {
            min = currentValue;
            minIndex = [i];
          } else if (currentValue === min) {
            minIndex.push(i);
          }
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

 
        if (document.querySelectorAll('[data-gr="43575"]').length > 1) {
            document.querySelectorAll('[data-gr="43575"]').forEach(element => {
                element.style.borderLeft = "4px solid lime"; 
             });
         }

       // console.log(`User ${maxIndex} has the highest player kills with ${max}`);
        
// Находим все элементы use в SVG
// Get all <use> elements that refer to the SVG sprite
// const useElements = document.querySelectorAll('.team2Table > tbody > tr > td > svg use');

// // Loop over each <use> element
// useElements.forEach(useElement => {
//   // Get the ID of the SVG sprite being referenced
//   const spriteId = useElement.getAttribute('xlink:href').substring(1);

//   // Get the SVG sprite element
//   const spriteElement = document.getElementById(spriteId);

//   // Clone the SVG sprite element
//   const clonedSpriteElement = spriteElement.cloneNode(true);

//   // Create a new <use> element and copy over its attributes
//   const newUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
//   const attributes = useElement.getAttributeNames();
//   attributes.forEach(attributeName => {
//     newUseElement.setAttribute(attributeName, useElement.getAttribute(attributeName));
//   });

//   // Replace the original <use> element with the cloned SVG sprite
//   useElement.parentNode.replaceChild(newUseElement, useElement);
//   newUseElement.appendChild(clonedSpriteElement);
// });


  

   

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
    

});
