let timer = setInterval(overlay, 1000);
let timerPlay = setInterval(currentTime, 1000);
////////////////////////////////



function currentTime() {
    let current = document.getElementsByTagName("video")[0].currentTime;
    document.querySelector("#timer").innerText = inText(current);
    return current;
}

function pause() {
    if (document.getElementsByTagName("video")[0].paused == true) {
        document.getElementsByTagName("video")[0].play();
        document.querySelector('.myPause').innerHTML = "ll";
    } else {
        document.getElementsByTagName("video")[0].pause();
        document.querySelector('.myPause').innerHTML = ">";
    }
}

function overlay() {
    const divOverlay = document.createElement('div'),
          divButtonNext = document.createElement('div'),
          divButtonPrev = document.createElement('div'),
          divVolume = document.createElement('div'),
          divPause = document.createElement('div');
          divTimer = document.createElement('div');
          divComments = document.querySelectorAll('#comment-content')[0];
          
    
    if (document.querySelectorAll('#comment-content')[0]) {
        clearTimeout(timer);
        divOverlay.innerHTML = "<div class='overlayBlack' style='position: fixed; height: 100vh;width: 100vw;background: black;pointer-events: none; z-index: 999;opacity: 0.8;'></div>";
        document.body.append(divOverlay);
        divButtonNext.innerHTML = `<div class = "myButtons" style="position:absolute;width: 126px;height: 55px;color: red;z-index: 99999;font-size: 50px;cursor: pointer;left: 1086px;top: 302px;border: 4px solid red;">NEXT</div>`;
        divButtonPrev.innerHTML = `<div class = "myButtons" style="position:absolute;width: 126px;height: 55px;color: red;z-index: 99999;font-size: 50px;cursor: pointer;left: 813px;top: 302px;border: 4px solid red;">PREV</div>`;
        divTimer.innerHTML = `<div id = "timer" style="position:absolute;width: 196px;height: 55px;color: red;z-index: 99999;font-size: 50px;left: 849px;top: 198px;font-family: Consolas;font-size: 76px;">01:35:17</div>`;
        divPause.innerHTML = `<div class="myButtons myPause" style="position:absolute;max-width: 47px;height: 55px;color: red;z-index: 99999;font-size: 50px;cursor: pointer;left: 1026px;top: 302px;border: 4px solid red;">ll</div>`;
        divVolume.innerHTML = `<input id = "myVolume" type="range" id="volume" name="volume" min="0" max="100" style="position: absolute;top: 431px;z-index: 99999; left: 987px;">`;
        divOverlay.prepend(divButtonNext);
        divOverlay.prepend(divButtonPrev);
        divOverlay.prepend(divTimer);
        divOverlay.prepend(divPause);
        divOverlay.prepend(divVolume);
        divComments.style.zIndex = 9999;
        divComments.style.marginTop = `-155vh`;
        divComments.style.width = '1000px';
        document.documentElement.scrollTop = 0;
        document.querySelector('#myVolume').value = document.getElementsByTagName("video")[0].volume*100;
    }
    divButtonNext.addEventListener('click',() => {
        next();
    });

    divButtonPrev.addEventListener('click',() => {
        prev();
    });

    divPause.addEventListener('click',() => {
        pause();
    });

    divVolume.addEventListener('input',() => {
        document.getElementsByTagName("video")[0].volume=document.querySelector('#myVolume').value / 100;
    });

    createList();
    document.querySelector("#more > span").click();
    console.clear();
}



function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function inText(stringTime) {
    let date = new Date();
    let res = "";
    res = date.setTime(stringTime*1000-3600*1000);
    res = `${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())}`;
    return res;
}

function createList() {
    let total = document.querySelectorAll('#comment-content')[0].querySelectorAll('a').length;
    let divLink = document.querySelectorAll('#comment-content a');
    let mlines = [];
    for (var i = 1; i < total; i++) {
        mlines.push(`${divLink[i].innerHTML}`);
    }
    return mlines;
}


function inSeconds(time) {
    let hms = time;   
    let a = hms.split(':'); 
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
    return seconds;
}

function listSeconds() {
    let list = []
    for (let i = 0; i < createList().length;i++) {
     list.push(inSeconds(createList()[i].replaceAll("'","")));
    }
    return list;
}

listSeconds();


function click(time) {
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes(time)) {
          a.click();
          document.body.style.overflow = "hidden";
        }
      }
}



function next() {
    for (let i = 0; i < createList().length; i++) {
        if (currentTime() < listSeconds()[i]) {
            click(createList()[i]);
            let time = document.querySelectorAll('#comment-content')[0].querySelectorAll('a');
            time[i+1].nextElementSibling.style.border = "4px solid red";
            time[i+1].nextElementSibling.style.borderLeft = "transparent";
            time[i+1].nextElementSibling.style.borderRight = "transparent";
            time[i+1].nextElementSibling.style.paddingTop = "1px";
            time[i+1].nextElementSibling.style.paddingBottom = "2px";

            time[i+1].style.border = "4px solid red";
            time[i+1].style.borderRight = "transparent";
            time[i+1].style.borderLeft = "transparent";

            time[i].nextElementSibling.style.border = "none";
            time[i].style.border = "none";
            return;
        }
    }   
}

function prev() {
    for (let i = 0; i < createList().length; i++) {
        if (currentTime() < listSeconds()[i]) {
            click(createList()[i-2]);
            let time = document.querySelectorAll('#comment-content')[0].querySelectorAll('a');
            time[i-1].nextElementSibling.style.border = "4px solid red";
            time[i-1].nextElementSibling.style.borderLeft = "transparent";
            time[i-1].nextElementSibling.style.borderRight = "transparent";
            time[i-1].nextElementSibling.style.paddingTop = "1px";
            time[i-1].nextElementSibling.style.paddingBottom = "2px";

            time[i-1].style.border = "4px solid red";
            time[i-1].style.borderRight = "transparent";
            time[i-1].style.borderLeft = "transparent";

            time[i].nextElementSibling.style.border = "none";
            time[i].style.border = "none";
            return;
        }
    }   
}



//  let key = hotkeys('num_add', function() {

//    event.preventDefault();
//      console.log();
//    next(next());
//  });