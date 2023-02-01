//const dardreamsButton = document.createElement('div');
let checkStateDarDreamsButton = false;
//dardreamsButton.innerHTML = ;

document.body.insertAdjacentHTML('afterbegin','<img class = "dardreamsButton" style = "height: 25px; width: 25px;opacity:0.5 ;position: fixed;z-index: 999999;cursor:pointer;border-radius: 20%" src="https://sun6-20.userapi.com/s/v1/if2/mSxSLzTakqUQvgIVOS2BZFXUmIgmz63Plwrlz4f70Qjr0fr_EZhrlPSEdomh-JdSv-ZK2c5PreRmr6JBYV2C8BJf.jpg?size=50x50&amp;quality=96&amp;crop=60,155,385,385&amp;ava=1" class="AvatarRich__img">');

//document.body.prepend(dardreamsButton);
	
dardreamsButton.onclick = function () {
	if (checkStateDarDreamsButton == false) {
		document.querySelector('.dardreamsButton').style.opacity='1';
		changeDarDreamsButton(true);
		checkStateDarDreamsButton = true;
	} else {
		document.querySelector('.dardreamsButton').style.opacity='0.5';
	changeDarDreamsButton(false);	
	checkStateDarDreamsButton = false;
	}
};