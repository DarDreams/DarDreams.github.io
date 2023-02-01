
let global;
let firstBorder;
let listSeconds;
let inText;
let currentTime;
let pause;
let divPause;
let divVolume;
let divComments;
let divOverlay;
let divButtonNext;
let divButtonPrev;
let divTimer;
let total;
let iElement;


function changeDarDreamsButton(bool) {
	if (bool) {
		document.querySelector('.dardreamsButton').style.opacity='1';
		//checkStateMyButton = true;
		global();
		
	} else {
		document.querySelector('.dardreamsButton').style.opacity='0.5';
		//checkStateMyButton = false;
		document.body.firstChild.style.display='none';
		document.querySelectorAll('#comment-content')[0].style = '';
		document.body.style.overflow ='';
		
		
	}
}


////////////////////////////////


global = function () {
document.documentElement.scrollTop = 300;
let timer = setInterval(overlay, 1000);
let timerPlay = setInterval(currentTime, 1000);
let video = document.getElementsByTagName("video")[0];



//////////////////////////////////////////////////////



firstBorder = function () {
	for (iElement = 0; iElement < createList().length; iElement++) {
        if (video.currentTime < listSeconds[iElement]) {
            border(iElement);
            return;
        }
    }   
}

inText = function (stringTime) {
    let date = new Date();
    let res = "";
    res = date.setTime(stringTime*1000-3600*1000);
    res = `${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())}`;
    return res;
}

currentTime = function () {
   document.querySelector("#myTimer").innerText = inText(video.currentTime);
}


function hide(string){
	document.querySelector(string).style.display = 'none';
}

  function overlay() {
    divOverlay    = document.createElement('div');
    divButtonNext = document.createElement('div');
    divButtonPrev = document.createElement('div');
    divTimer      = document.createElement('div');
    divVolume     = document.createElement('div');
    divPause      = document.createElement('div');
    divComments   = document.querySelectorAll('#comment-content')[0];
          
    
    if (divComments) {
        clearTimeout(timer);
        divOverlay.innerHTML = "<div class='overlayBlack' style='position: fixed; height: 100vh;width: 100vw;background: black;pointer-events: none; z-index: 999;opacity: 0.8;'></div>";
        document.body.prepend(divOverlay);
        divButtonNext.innerHTML = `<div class = "myButtons" style="position:absolute;width: 126px;height: 55px;color: red;z-index: 99999;font-size: 50px;cursor: pointer;left: 1086px;top: 302px;border: 4px solid red;">NEXT</div>`;
        divButtonPrev.innerHTML = `<div class = "myButtons" style="position:absolute;width: 126px;height: 55px;color: red;z-index: 99999;font-size: 50px;cursor: pointer;left: 813px;top: 302px;border: 4px solid red;">PREV</div>`;
        divTimer.innerHTML = `<div id = "myTimer" style="position:absolute;width: 196px;height: 55px;color: red;z-index: 99999;font-size: 50px;left: 849px;top: 198px;font-family: Consolas;font-size: 76px;">01:35:17</div>`;
        divVolume.innerHTML = `<input id = "myVolume" type="range" id="volume" name="volume" min="0" max="100" style="position: absolute;top: 431px;z-index: 99999; left: 987px;">`;
        divOverlay.prepend(divButtonNext);
        divOverlay.prepend(divButtonPrev);
        divOverlay.prepend(divTimer);
        
        divOverlay.prepend(divVolume);
        divComments.style.zIndex = 9999;
        divComments.style.marginTop = `-155vh`;
        divComments.style.width = '1000px';
        document.documentElement.scrollTop = 0;
        divVolume.value = video.volume*100;
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
        video.volume = document.querySelector('#myVolume').value / 100;
    });

    createList();
    document.querySelector("#more > span").click();
    firstBorder();
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
    hide('#detach-button-host');
    hide('#masthead-container');
    hide('#toolbar');
    console.clear();
}





function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


function createList() {
    total = divComments.querySelectorAll('a').length;
    let divLink = document.querySelectorAll('#comment-content a');
    let mlines = [];
    for (var i = 1; i < total; i++) {
    	
    	divLink.onclick = function (event){
  	    firstBorder();
    	}
    mlines.push(`${divLink[i].innerHTML}`);
    }
    listSeconds = mlines.map(item => inSeconds(item.replaceAll("'","")));
    return mlines;
}


function inSeconds(time) {
    let hms = time;   
    let a = hms.split(':'); 
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
    return seconds;
}


function click(time) {
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes(time)) {
          a.click();
          document.body.style.overflow = "hidden";
        }
      }
}


function border(arg) {

	let time = divComments.querySelectorAll('a');
	time[arg].nextElementSibling.style.border = "4px solid red";
    time[arg].nextElementSibling.style.borderLeft = "transparent";
    time[arg].nextElementSibling.style.borderRight = "transparent";
    time[arg].nextElementSibling.style.paddingTop = "1px";
    time[arg].nextElementSibling.style.paddingBottom = "2px";
    
    time[arg].style.border = "4px solid red";
    time[arg].style.borderRight = "transparent";
    time[arg].style.borderLeft = "transparent";
    time[arg-1].nextElementSibling.style.border = "none";
    time[arg-1].style.border = "none";
    time[arg+1].nextElementSibling.style.border = "none";
    time[arg+1].style.border = "none";
    
}

function next() {
    for (let i = 0; i < createList().length; i++) {
        if (video.currentTime < listSeconds[i]) {
            click(createList()[i]);
            border(i+1);
            //time[iElement].nextElementSibling.style.border = "none";
            //time[iElement].style.border = "none";
            return;
        }
    }   
}

function prev() {
    for (let i = 0; i < createList().length; i++) {
        if (video.currentTime < listSeconds[i]) {
            click(createList()[i-2]);
            border(i-1);
            time[iElement].nextElementSibling.style.border = "none";
            time[iElement].style.border = "none";
            return;
        }
    }   
}

}

// let key = hotkeys('num_add', function() {
// event.preventDefault();
// next(next());
// });