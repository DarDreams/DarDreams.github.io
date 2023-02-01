console.clear();
// v3.1
let createList;
let global;
let listSeconds;
let inText;
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
let timerPlay;
let now;
let divLink;
let divDardreams;
let mlines = [];

function changeDarDreamsButton(bool) {
	if (bool) {
		global();
	} else {
		document.querySelectorAll('#comment-content')[0].style = '';
		document.body.style.overflow ='';
		divDardreams.remove();
		clearTimeout(timerPlay);
	}
}

////////////////////////////////
global = function () {
	document.documentElement.scrollTop = 300;
	let timer = setInterval(overlay, 1000);
	timerPlay = setInterval(currentTime, 500);
	let video = document.getElementsByTagName("video")[0];

	function border() {
		let time = document.querySelectorAll('#comment-content')[0].querySelectorAll('a');
		for (i = 1; i < createList().length; i++) {
	        if (video.currentTime < listSeconds[i] && video.currentTime >= listSeconds[i-1]) {
	        	now = i;
				//link
				time[i].nextElementSibling.style.cssText =  `
				border: 4px solid red;
				border-left: transparent;
				border-right: transparent;
				padding-top: 1px;
				padding-bottom: 2px;`;
				//text
				time[i].style.cssText = `
				border: 4px solid red;
				border-right: transparent;
				border-left: transparent;`;
	        } else {
			    	time[i].style.border = "";
			    	time[i].nextElementSibling.style.border = '';
			    
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
	
	function currentTime() {
	   document.querySelector(".myTimer").innerText = inText(video.currentTime);
	   border();
	}
	
	function hide(string){
		document.querySelector(string).style.display = 'none';
	}
	
	  function overlay() {
		divComments   = document.querySelectorAll('#comment-content')[0];
	    if (divComments) {
	        clearTimeout(timer);
	        document.body.insertAdjacentHTML('afterBegin', "<div class = 'dardreams'></div>");
	        divDardreams = document.querySelector('.dardreams');
	        divDardreams.insertAdjacentHTML('afterBegin',`<div class = "myButtons myNext" style="position:absolute;width: 126px;height: 55px;color: red;z-index: 99999;font-size: 50px;cursor: pointer;left: 1086px;top: 302px;border: 4px solid red;">NEXT</div>`);
	        divDardreams.insertAdjacentHTML('afterBegin',`<div class = "myButtons myPrev" style="position:absolute;width: 126px;height: 55px;color: red;z-index: 99999;font-size: 50px;cursor: pointer;left: 813px;top: 302px;border: 4px solid red;">PREV</div>`);
	        divDardreams.insertAdjacentHTML('afterBegin',`<div class = "myTimer" style="position:absolute;width: 196px;height: 55px;color: red;z-index: 99999;font-size: 50px;left: 849px;top: 198px;font-family: Consolas;font-size: 76px;">01:35:17</div>`);
	        divDardreams.insertAdjacentHTML('afterBegin',`<input class = "myVolume" type="range" id="volume" name="volume" min="0" max="100" style="position: absolute;top: 431px;z-index: 99999; left: 987px;">`);
	        divDardreams.insertAdjacentHTML('afterBegin', "<div class='overlayBlack' style='position: fixed; height: 100vh;width: 100vw;background: black;pointer-events: none; z-index: 999;opacity: 0.8;'></div>");
	         divOverlay    = document.querySelector('.overlayBlack');
			 divButtonNext = document.querySelector('.myNext');
			 divButtonPrev = document.querySelector('.myPrev');
			 divTimer      = document.querySelector('.myTimer');
			 divVolume     = document.querySelector('.myVolume');
		        
	        divComments.style.zIndex = 9999;
	        divComments.style.marginTop = `-155vh`;
	        divComments.style.width = '1000px';
	        document.documentElement.scrollTop = 0;
	        divVolume.value = video.volume*100;
	    };
	    /////TRIGGERS
		divButtonNext.onclick = function() {
			divComments.querySelectorAll('a')[now+1].click();
		};
	
	    divButtonPrev.onclick = function() {
	        divComments.querySelectorAll('a')[now-1].click();
	    };
	
	    divVolume.oninput = function() {
	        video.volume = document.querySelector('.myVolume').value / 100;
	    };
		/////////////
	    createList();
	    document.querySelector("#more > span").click();
	    document.documentElement.scrollTop = 0;
	    document.body.style.overflow = "hidden";
	    hide('#detach-button-host');
	    hide('#masthead-container');
	    hide('#toolbar');
	}
	
	function getZero (num) {
	    if (num >= 0 && num < 10) {
	        return `0${num}`;
	    } else {
	        return num;
	    }
	}
	
createList = function () {
		mlines = [];
	    total = divComments.querySelectorAll('a').length;
	    divLink = document.querySelectorAll('#comment-content a');
	    for (var i = 1; i < total; i++) {
	    	mlines.push(`${divLink[i].innerHTML}`);
	    }
	    listSeconds = mlines.map(item => inSeconds(item.replaceAll("'","")));
	    return mlines;
	}
	
	function inSeconds(time) {
	    let a = time.split(':'); 
	    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
	}

}

// let key = hotkeys('num_add', function() {
// event.preventDefault();
// next(next());
// });