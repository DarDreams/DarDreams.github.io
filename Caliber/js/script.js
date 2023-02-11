import game from "./game.js";
console.clear();
window.addEventListener('DOMContentLoaded', () => {

    // const team1Selector = document.querySelectorAll('.line');
    // const rank = document.querySelectorAll('.team_rank');
    // const difRank = document.querySelector('.team_rank_dif');


    //today.map(item => new Date().getFullYear() - item[0].substring(6,10));
    //let team3;
    
    // let team2    = Object.values(team1[2]);
    // team3[2] =  team1+team2;
    let games          = Object.values(game);
        games[2]       = Object.values(game.team1);
        games[2][2]    = Object.values(game.team1.assault);
        games[2][2][5] = game.team1.assault.perks.split(",");
        games[2][3]    = Object.values(game.team1.gunner);
        games[2][3][5] = game.team1.gunner.perks.split(",");
        games[2][4]    = Object.values(game.team1.medic);
        games[2][4][5] = game.team1.medic.perks.split(",");
        games[2][5]    = Object.values(game.team1.sniper);
        games[2][5][5] = game.team1.sniper.perks.split(",");

        games[3]        = Object.values(game.team2);
        games[3][2]     = Object.values(game.team2.assault);
        games[3][2][5]  = game.team2.assault.perks.split(",");
        games[3][3]     = Object.values(game.team2.gunner);
        games[3][3][5]  = game.team2.gunner.perks.split(",");
        games[3][4]     = Object.values(game.team2.medic);
        games[3][4][5]  = game.team2.medic.perks.split(",");
        games[3][5]     = Object.values(game.team2.sniper);
        games[3][5][5]  = game.team2.sniper.perks.split(",");

    // console.log(games);
    
        


let roleName;
    function oper(collection) {
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

        if (year == '' && division == 'SSO') {
            res = `BLR_${division}${year}_${role}`; 
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
            res = `USA_${division}${year}_${role}`;
            if (role == 'A' && division == 'CST') {roleName = 'СЛАЙ'}; 
            if (role == 'G' && division == 'CST') {roleName = 'ФОРТРЕСС'};
            if (role == 'M' && division == 'CST') {roleName = 'БОУНС'};
            if (role == 'S' && division == 'CST') {roleName = 'АВАЛАНШ'};
        };
        
        return res
        
    }




   // console.log(oper(games[2][0+3][3]));
    for (let k = 2; k < 4; k++) {
    document.querySelector(`.team1Table`).insertAdjacentHTML('beforeend',`
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
           // if (games[k][i+2][12] == 'Birthday2022emblem4'||games[k][i+2][12] == 'PvPDestruction2022Top1000') { games[k][i+2][12] = 'default'}
              console.log(img(`https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_${games[k][i+2][12]}_large.png`));
        
        
                //console.error("test");
               // games[k][i+2][12]= "default"
                //games[k][i+2][3] = 'RECRUIT';
         
            let operLoop = ['assault','gunner','medic','sniper'];
            //let team = ['','1','2'];
            document.querySelector(`.team1Table`).insertAdjacentHTML('beforeend',`
    
            <tr class = 'line ${operLoop[i]}'>
                <td>
                    <svg class = "${operLoop[i]}Logo"><title>${operLoop[i]}</title><use xlink:href="#${operLoop[i]}"></use></svg>
                </td>
                <td>
                    <img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${oper(games[k][i+2][3])}_Small.png" alt="${oper(games[k][i+2][3])}">
                </td>
                <td>
                    <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                        <span class="lvlText">${games[k][i+2][0]}</span>    
                        <div class="bevel">
                            <span class = "nameOp">${roleName}</span>
                            <span class = "lvlOp">${games[k][i+2][1]}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_${games[k][i+2][12]}_large.png" alt="baner">
                    <span class = "name" style = "position: absolute">${games[k][i+2][6]}</span>
                </td>
                <td>
                ${games[k][i+2][4]}
                    <div class = "perks">
                        <svg class="perk _1"><title>${games[k][i+2][5][0]}</title><use xlink:href="#${games[k][i+2][5][0]}"></use></svg>
                        <svg class="perk _2"><title>${games[k][i+2][5][1]}</title><use xlink:href="#${games[k][i+2][5][1]}"></use></svg>
                        <svg class="perk _3"><title>${games[k][i+2][5][2]}</title><use xlink:href="#${games[k][i+2][5][2]}"></use></svg>
                        <svg class="perk _4"><title>${games[k][i+2][5][3]}</title><use xlink:href="#${games[k][i+2][5][3]}"></use></svg>
                    </div>
                </td>
                <td>${games[k][i+2][8]}</td>
                <td>${games[k][i+2][9]}</td>
                <td>${games[k][i+2][10]}</td>
                <td>${games[k][i+2][7]}</td>
                <td>${games[k][i+2][11]}</td>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
            </tr>
        `)};
    }

});
