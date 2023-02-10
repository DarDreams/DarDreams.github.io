import game from "./game.js";

window.addEventListener('DOMContentLoaded', () => {

    // const team1Selector = document.querySelectorAll('.line');
    // const rank = document.querySelectorAll('.team_rank');
    // const difRank = document.querySelector('.team_rank_dif');


    //today.map(item => new Date().getFullYear() - item[0].substring(6,10));
    //let team3;
    
    // let team2    = Object.values(team1[2]);
    // team3[2] =  team1+team2;
  
    let team1    = Object.values(game.team1);
    let team2    = Object.values(game.team2);
    console.log(team1);
    console.log(team2);
    let assault1 = Object.values(game.team1.assault);
    
    let gunner1  = Object.values(game.team1.gunner);
    let medic1   = Object.values(game.team1.medic);
    let sniper1  = Object.values(game.team1.sniper);
    
    let assault2 = Object.values(game.team2.assault);
    let gunner2  = Object.values(game.team2.gunner);
    let medic2   = Object.values(game.team2.medic);
    let sniper2  = Object.values(game.team2.sniper);
 
    // team1Selector[0].children[1].innerText = `[${game.team1.rank}]`;
    // team1Selector[0].children[4].innerText = `[${game.id}]`;

    // rank[1].innerText = `[${game.team2.rank}]`;
    // difRank.innerText = `[${game.difference}]`;
    
    // const team1Table = document.createElement('table');
    // team1Table.innerHTML = `
    // <tr class = 'line'>
    //         <th></th>
    //         <th class="team_rank">[RANK_1]</th>
    //         <th></th>
    //         <th></th>
    //         <th id="id" class="id">ID</th>
    //     </tr>   
    // `
    //document.querySelector('.container').append(team1Table);

    let assPerks1 = game.team1.assault.perks.split(",");
    let gunPerks1 = game.team1.gunner.perks.split(",");
    let medPerks1 = game.team1.medic.perks.split(",");
    let sniPerks1 = game.team1.sniper.perks.split(",");

    let assPerks2 = game.team2.assault.perks.split(",");
    let gunPerks2 = game.team2.gunner.perks.split(",");
    let medPerks2 = game.team2.medic.perks.split(",");
    let sniPerks2 = game.team2.sniper.perks.split(",");
    //console.log($Object.values(team1[1])[5]);
    console.log(game.team1.assault.baner);
    document.querySelector('.team1Table').insertAdjacentHTML('afterbegin',`
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>ГРУППА</th>
        <th>ЛИКВИДИРОВАЛ</th>
        <th>ПОГИБ</th>
        <th>СОДЕЙСТВИЯ</th>
        <th>УРОН</th>
        <th>ПОЛУЧЕНИЕ</th>
        <tr class = 'line'>
            <td>
                <svg class = "assaultLogo"><title>assault</title><use xlink:href="#assault"></use></svg>
            </td>
            <td>
                <img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_RUS_SSO2013_A_ES_Small.png" alt="sso">
            </td>
            <td>
                <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                    <span class="lvlText">${Object.values(team1[2])[0]}</span>    
                    <div class="bevel">
                        <span class = "nameOp">Авангард</span>
                        <span class = "lvlOp">${Object.values(team1[2])[1]}</span>
                    </div>
                </div>
            </td>
            <td>
                <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_${game.team1.assault.baner}_large.png" alt="baner">
                <span class = "name" style = "position: absolute">${assault1[6]}</span>
            </td>
            <td>
            ${assault1[4]}
            <div class = "perks">
            <svg class="perk _1"><title>${assPerks1[0]}</title><use xlink:href="#${assPerks1[0]}"></use></svg>
            <svg class="perk _2"><title>${gunPerks1[0]}</title><use xlink:href="#${gunPerks1[0]}"></use></svg>
            <svg class="perk _3"><title>${medPerks1[0]}</title><use xlink:href="#${medPerks1[0]}"></use></svg>
            <svg class="perk _4"><title>${sniPerks1[0]}</title><use xlink:href="#${sniPerks1[0]}"></use></svg>
        </div></td>
            <td>${assault1[8]}</td>
            <td>${assault1[9]}</td>
            <td>${assault1[10]}</td>
            <td>${assault1[7]}</td>
            <td>${assault1[11]}</td>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
        </tr>   
        <tr class = 'line'>
            <td><svg class="gunnerLogo"><title>assault</title><use xlink:href="#gunner"></use></svg></td>
            <td><img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_RUS_SSO2013_A_ES_Small.png" alt="sso"></td>
            <td>
            <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                <span class="lvlText">${Object.values(team1[3])[0]}</span>    
                <div class="bevel">
                    <span class = "nameOp">Спутник</span>
                    <span class = "lvlOp">${Object.values(team1[3])[1]}</span>
                </div>
            </div>
        </td>
            <td>
            <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_${game.team1.gunner.baner}_large.png" alt="baner">
                <span class = "name" style = "position: absolute">${gunner1[6]}</span>
            </td>
            <td>
            ${gunner1[4]}
                <div class = "perks">
                    <svg class="perk _1"><title>${assPerks1[1]}</title><use xlink:href="#${assPerks1[1]}"></use></svg>
                    <svg class="perk _2"><title>${gunPerks1[1]}</title><use xlink:href="#${gunPerks1[1]}"></use></svg>
                    <svg class="perk _3"><title>${medPerks1[1]}</title><use xlink:href="#${medPerks1[1]}"></use></svg>
                    <svg class="perk _4"><title>${sniPerks1[1]}</title><use xlink:href="#${sniPerks1[1]}"></use></svg>
                </div>
            </td>
            
            <td>${gunner1[7]}</td>
            <td>${gunner1[8]}</td>
            <td>${gunner1[9]}</td>
            <td>${gunner1[10]}</td>
            <td>${gunner1[11]}</td>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
        </tr>
        <tr class = 'line'>
            <td><svg class="medicLogo"><title>assault</title><use xlink:href="#medic"></use></svg></td>
            <td><img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_RUS_SSO2013_A_ES_Small.png" alt="sso"></td>
            <td>
            <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                <span class="lvlText">${Object.values(team1[4])[0]}</span>    
                <div class="bevel">
                    <span class = "nameOp">Каравай</span>
                    <span class = "lvlOp">${Object.values(team1[4])[1]}</span>
                </div>
            </div>
        </td>
            <td>
            <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_${game.team1.medic.baner}_large.png" alt="baner">
                <span class = "name "style = "position: absolute">${medic1[6]}</span>
            </td>
            <td>${medic1[4]}</td>
            <td>
                <div class = "perks">
                    <svg class="perk _1"><title>${assPerks1[2]}</title><use xlink:href="#${assPerks1[2]}"></use></svg>
                    <svg class="perk _2"><title>${gunPerks1[2]}</title><use xlink:href="#${gunPerks1[2]}"></use></svg>
                    <svg class="perk _3"><title>${medPerks1[2]}</title><use xlink:href="#${medPerks1[2]}"></use></svg>
                    <svg class="perk _4"><title>${sniPerks1[2]}</title><use xlink:href="#${sniPerks1[2]}"></use></svg>
                </div>
            </td>
            
            <td>${medic1[7]}</td>
            <td>${medic1[8]}</td>
            <td>${medic1[9]}</td>
            <td>${medic1[10]}</td>
            <td>${medic1[11]}</td>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
        </tr>
        <tr class = 'line'>
            <td>
                <svg class="sniperLogo"><title>assault</title><use xlink:href="#sniper"></use></svg>
            </td>
            <td>
                <img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_RUS_SSO2013_A_ES_Small.png" alt="sso">
            </td>
            <td>
                <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                    <span class="lvlText">${Object.values(team1[5])[0]}</span>    
                    <div class="bevel">
                        <span class = "nameOp">Арчер</span>
                        <span class = "lvlOp">${Object.values(team1[5])[1]}</span>
                    </div>
                </div>
            </td>
            <td>
            <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_${game.team1.sniper.baner}_large.png" alt="baner">
                <span class = "name "style = "position: absolute">${sniper1[6]}</span>
            </td>
            <td>${sniper1[4]}</td>
            <td>
                <div class = "perks">
                    <svg class="perk _1"><title>${assPerks1[3]}</title><use xlink:href="#${assPerks1[3]}"></use></svg>
                    <svg class="perk _2"><title>${gunPerks1[3]}</title><use xlink:href="#${gunPerks1[3]}"></use></svg>
                    <svg class="perk _3"><title>${medPerks1[3]}</title><use xlink:href="#${medPerks1[3]}"></use></svg>
                    <svg class="perk _4"><title>${sniPerks1[3]}</title><use xlink:href="#${sniPerks1[3]}"></use></svg>
                </div>
            </td>
          
            <td>${sniper1[7]}</td>
            <td>${sniper1[8]}</td>
            <td>${sniper1[9]}</td>
            <td>${sniper1[10]}</td>
            <td>${sniper1[11]}</td>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
            <tr><th></th></tr>
        </tr>
 
 
        
    `);    
    // team1Selector[1].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>assault</title><use xlink:href="#assault"></use></svg>`);
    // team1Selector[2].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>gunner</title><use xlink:href="#gunner"></use></svg>`);
    // team1Selector[3].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>medic</title><use xlink:href="#medic"></use></svg>`);
    // team1Selector[4].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>sniper</title><use xlink:href="#sniper"></use></svg>`);

    // team1Selector[5].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><use xlink:href="#assault"></use></svg>`);    
    // team1Selector[6].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>gunner</title><use xlink:href="#gunner"></use></svg>`);
    // team1Selector[7].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>medic</title><use xlink:href="#medic"></use></svg>`);
    // team1Selector[8].children[0].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>sniper</title><use xlink:href="#sniper"></use></svg>`);



    // for (let i = 1; i < 9; i++) {
    //     team1Selector[i].children[1].insertAdjacentHTML('afterbegin',`<img src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_RUS_SSO2013_A_ES_Small.png" alt="sso">`);
    // }
    

    // for (let i = 1; i < 5; i++) {
    //     team1Selector[i].children[2].insertAdjacentHTML('afterbegin',`
    //     <span class="lvlText">${Object.values(team1[i+1])[0]}</span>
    //     <svg class="wrapper"><use xlink:href="#whiteWrapper"></use></svg>`);
    // }

    // for (let i = 1; i < 5; i++) {
    //     team1Selector[i+4].children[2].insertAdjacentHTML('afterbegin',`
    //     <span class="lvlText">${Object.values(team2[i+1])[0]}</span>
    //     <svg class="wrapper"><use xlink:href="#whiteWrapper"></use></svg>`);
    // }
    
  
    // for (let i = 1; i < 9; i++) {
    //     team1Selector[i].children[2].insertAdjacentHTML('afterbegin',`<img src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_RankedSeason_large.png" alt="baner">`);
    // }
    

    // for (let i = 1; i < 15; i++){
    //     if (i == 4) continue;
    //         team1Selector[1].children[i+2].innerText = assault1[i+1];
    //         team1Selector[2].children[i+2].innerText = gunner1[i+1];
    //         team1Selector[3].children[i+2].innerText = medic1[i+1];
    //         team1Selector[4].children[i+2].innerText = sniper1[i+1];

    //         team1Selector[5].children[i+2].innerText = assault2[i+1];
    //         team1Selector[6].children[i+2].innerText = gunner2[i+1];
    //         team1Selector[7].children[i+2].innerText = medic2[i+1];
    //         team1Selector[8].children[i+2].innerText = sniper2[i+1];
    // }

     





    // for (let i = 0; i < 4; i++) {
    //     //console.log(assPerks1[i]);
    //     team1Selector[1].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${assPerks1[i]}</title><use xlink:href="#${assPerks1[i]}"></use></svg>`);
    //     team1Selector[2].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${gunPerks1[i]}</title><use xlink:href="#${gunPerks1[i]}"></use></svg>`);
    //     team1Selector[3].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${medPerks1[i]}</title><use xlink:href="#${medPerks1[i]}"></use></svg>`);
    //     team1Selector[4].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${sniPerks1[i]}</title><use xlink:href="#${sniPerks1[i]}"></use></svg>`);
        
    //     team1Selector[5].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${assPerks2[i]}</title><use xlink:href="#${assPerks2[i]}"></use></svg>`);
    //     team1Selector[6].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${gunPerks2[i]}</title><use xlink:href="#${gunPerks2[i]}"></use></svg>`);
    //     team1Selector[7].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${medPerks2[i]}</title><use xlink:href="#${medPerks2[i]}"></use></svg>`);
    //     team1Selector[8].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${sniPerks2[i]}</title><use xlink:href="#${sniPerks2[i]}"></use></svg>`);
    // }
    



});
