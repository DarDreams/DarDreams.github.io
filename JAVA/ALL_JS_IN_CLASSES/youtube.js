let timerId;
function start (){
 timerId = setInterval (global, 1000);
}

function currentTime() {
    const pastTimeVideo = document.getElementsByTagName("video")[0].currentTime;
    return pastTimeVideo;
}

setInterval(checkTime, 1000);

	
function click(time) {
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes(time)) {
          a.click();
        }
      }
}

function aspecto() {
    if (document.querySelectorAll('#comment-content')[0]) {
        clearTimeout(timerId);
        const divOverlay = document.createElement('div'),
              divButtonNext = document.createElement('div'),
              divComments = document.querySelectorAll('#comment-content')[0];
              
        divOverlay.innerHTML = "<div class='overlayBlack' style='position: fixed; height: 100vh;width: 100vw;background: black;pointer-events: none; z-index: 999;opacity: 0.8;'></div>";
        document.body.append(divOverlay);
        divButtonNext.innerHTML = "<a href='#'>Next Song</a>";
        document.querySelector('#more').append(divButtonNext);

        divComments.style.zIndex = 9999;
        divComments.style.marginTop = `-${divComments.getBoundingClientRect().top+300}px`;
        divComments.style.width = '1000px';
        document.documentElement.scrollTop = 0;
    }
}


function global () {
	console.log('Found div');
	if (document.querySelectorAll('#comment-content')[0]) {
		const divComment = document.querySelectorAll('#comment-content')[0];
		console.log("FOUNDED");
		clearTimeout(timerId);
        aspecto();
		//$('#comment-content a')[0].click();
	}	
}	

//	let x = parseInt(localStorage.getItem("myNumber"));


	// function next(countNumber) {

	// 	//var mDivContent = document.querySelectorAll('#comment-content a');
	// 	var mlines = [];
	// 	for (var x = 1; i < mDivContent.length; x++) {
	// 		mlines[x] = `${mDivContent[i].href}`;
	// 		//console.log(mlines);
	// 		//window.location.href = mDivContent[countNumber];
    //         // click()
		
	// 		localStorage.setItem("myNumber", x);
	// }
    // }
		
    function inSeconds(time) {

        var hms = time;   // your input string
        var a = hms.split(':'); // split it at the colons
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
        //window.location.href = `https://www.youtube.com/watch?v=gJm4W-aP0iU&t=${seconds}s`;
        return seconds;
    }

    function inText(time) {

    }

    function createList() {
        let total = document.querySelectorAll('#comment-content')[0].querySelectorAll('a').length;
        var divLink = document.querySelectorAll('#comment-content a');
        var mlines = [];
        for (var i = 1; i < total; i++) {
            mlines.push(`${divLink[i].innerHTML}`);
        }
        return mlines;
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

    function listSeconds() {
        let list = []
        for (let i = 0; i < createList().length;i++) {
         list.push(inSeconds(createList()[i].replaceAll("'","")));
        }
        return list;
    }





function checkTime() {
    for (let i = 0; i < createList().length; i++) {
        if (listSeconds()[i] > currentTime()) {
            click(createList()[i]);
        }
    }   
}


    





// hotkeys('num_add', function() {

//   event.preventDefault();
//     console.log();
//   next(x++);
// });