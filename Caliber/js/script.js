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
        if (i == 4) continue;
            team1Selector[1].children[i].innerText = assault1[i];
            team1Selector[2].children[i].innerText = gunner1[i];
            team1Selector[3].children[i].innerText = medic1[i];
            team1Selector[4].children[i].innerText = sniper1[i];

            team1Selector[5].children[i].innerText = assault2[i];
            team1Selector[6].children[i].innerText = gunner2[i];
            team1Selector[7].children[i].innerText = medic2[i];
            team1Selector[8].children[i].innerText = sniper2[i];
    }

     console.log(game.team1.gunner.perks.split(",")[0]);
     console.log(game.team1.gunner.perks.split(",")[1]);
     console.log(game.team1.gunner.perks.split(",")[2]);
     console.log(game.team1.gunner.perks.split(",")[3]);
     
    let assPerks1 = game.team1.assault.perks.split(",");
    let gunPerks1 = game.team1.gunner.perks.split(",");
    let medPerks1 = game.team1.medic.perks.split(",");
    let sniPerks1 = game.team1.sniper.perks.split(",");

    let assPerks2 = game.team2.assault.perks.split(",");
    let gunPerks2 = game.team2.gunner.perks.split(",");
    let medPerks2 = game.team2.medic.perks.split(",");
    let sniPerks2 = game.team2.sniper.perks.split(",");

    for (let i = 0; i < 4; i++) {
        console.log(assPerks1[i]);
        team1Selector[1].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${assPerks1[i]}</title><use xlink:href="#${assPerks1[i]}"></use></svg>`);
        team1Selector[2].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${gunPerks1[i]}</title><use xlink:href="#${gunPerks1[i]}"></use></svg>`);
        team1Selector[3].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${medPerks1[i]}</title><use xlink:href="#${medPerks1[i]}"></use></svg>`);
        team1Selector[4].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${sniPerks1[i]}</title><use xlink:href="#${sniPerks1[i]}"></use></svg>`);
        
        team1Selector[5].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${assPerks2[i]}</title><use xlink:href="#${assPerks2[i]}"></use></svg>`);
        team1Selector[6].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${gunPerks2[i]}</title><use xlink:href="#${gunPerks2[i]}"></use></svg>`);
        team1Selector[7].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${medPerks2[i]}</title><use xlink:href="#${medPerks2[i]}"></use></svg>`);
        team1Selector[8].children[4].insertAdjacentHTML('afterbegin',`<svg class="skill-ico"><title>${sniPerks2[i]}</title><use xlink:href="#${sniPerks2[i]}"></use></svg>`);
    }
    



});
