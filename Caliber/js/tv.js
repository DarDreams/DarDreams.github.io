export function tv (){
    const itemFront = document.querySelector('.item_front');
    const itemBack = document.querySelector('.item_back');
    //const tables = document.querySelector('.container_tables');

    //document.querySelector(".item_front").insertAdjacentHTML('beforebegin',`<div class="card"`)
    //document.querySelector(".item_back").insertAdjacentHTML('afterend',`</div>`)

    document.querySelector('.item_back').innerHTML = `
    <div class="tv">
        <div class="container youtube small_frame">
           <iframe width="${itemFront.clientWidth}" height="${itemFront.clientHeight}" src="https://www.youtube.com/embed/e0EYihAsd4s?list=PLSoC_5pVk7XusI0cYiFIFP90cKEueXP0X" title="ACE OF ARCHER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        </div>
    </div>
    `;



//     if (itemFront.style.transform == "rotateX(0deg)") {
//         itemFront.style.transform = "rotateX(180deg)";
//         itemBack.style.transform = "rotateX(0deg)";

//     } else {
//         itemFront.style.transform = "rotateX(0deg)";
//         itemBack.style.transform = "rotateX(180deg)";
//     }

const card = document.querySelector('.card');
card.classList.toggle('flipped');

}