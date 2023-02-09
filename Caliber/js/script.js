import game from "./game.js";

window.addEventListener('DOMContentLoaded', () => {

    const team1Selector = document.querySelectorAll('.line');
    const rank = document.querySelectorAll('.team_rank');
    const difRank = document.querySelector('.team_rank_dif');


    
    let assault1 = Object.values(game.team1.assault);
    let gunner1  = Object.values(game.team1.gunner);
    let medic1   = Object.values(game.team1.medic);
    let sniper1  = Object.values(game.team1.sniper);
    
    let assault2 = Object.values(game.team2.assault);
    let gunner2  = Object.values(game.team2.gunner);
    let medic2   = Object.values(game.team2.medic);
    let sniper2  = Object.values(game.team2.sniper);
 
    team1Selector[0].children[1].innerText = `[${game.team1.rank}]`;
    team1Selector[0].children[4].innerText = `[${game.id}]`;

    rank[1].innerText = `[${game.team2.rank}]`;
    difRank.innerText = `[${game.difference}]`;

    for (let i = 0; i < assault1.length; i++){

        team1Selector[1].children[i].innerText = assault1[i];
        team1Selector[2].children[i].innerText = gunner1[i];
        team1Selector[3].children[i].innerText = medic1[i];
        team1Selector[4].children[i].innerText = sniper1[i];

        team1Selector[5].children[i].innerText = assault2[i];
        team1Selector[6].children[i].innerText = gunner2[i];
        team1Selector[7].children[i].innerText = medic2[i];
        team1Selector[8].children[i].innerText = sniper2[i];
    }
    
    
    



});
