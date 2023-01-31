const dardreamsButton = document.createElement('div');
let checkStateMyButton = false;
let firstBorder;
dardreamsButton.innerHTML = '<img class = "dardreamsButton" style = "height: 25px; width: 25px; position: fixed; z-index: 999999;cursor:pointer;border-radius: 20%" src="https://sun6-20.userapi.com/s/v1/if2/mSxSLzTakqUQvgIVOS2BZFXUmIgmz63Plwrlz4f70Qjr0fr_EZhrlPSEdomh-JdSv-ZK2c5PreRmr6JBYV2C8BJf.jpg?size=50x50&amp;quality=96&amp;crop=60,155,385,385&amp;ava=1" class="AvatarRich__img">';

document.body.prepend(dardreamsButton);
document.querySelector('.dardreamsButton').style.opacity='0.5';
	
//	document.querySelector('.dardreamsButton:hover').style.setProperty('--dardreamsButton-opacity', '1');

dardreamsButton.addEventListener('click', () => {
	if (checkStateMyButton == false) {
	    change(true);
	} else {
	change(false);	
	    checkStateMyButton = false;
	}
});

function change(bool) {
	if (bool) {
		document.querySelector('.dardreamsButton').style.opacity='1';
		checkStateMyButton = true;
		global();
		
	} else {
		document.querySelector('.dardreamsButton').style.opacity='0.5';
		checkStateMyButton = false;
		document.body.firstChild.style.display='none';
		document.querySelectorAll('#comment-content')[0].style = '';
		document.body.style.overflow ='';
		
		
	}
}