document.onreadystatechange = function() {
if (document.readyState === "complete"){
console.log("documentReadyStateChange from my JS");
	initJ();
}
else console.log("doc.readyState is ",document.readyState);
}

function initJ(){
	// document.addEventListener('clicked',function(){});
	
}


function ge(inp){
	return document.querySelector(inp);
}

function gea(inp){
	return document.querySelectorAll(inp);
}


function tgle(tle_obj,inb){
	// ge(tle_obj).classList.contains('qqq')?ge(tle_obj).classList.remove('qqq'):ge(tle_obj).classList.add('qqq');
	ge(tle_obj).classList.contains('qqq')?function(){ge(tle_obj).classList.remove('qqq');
	inb.classList.add('active');}():function(){ge(tle_obj).classList.add('qqq');inb.classList.remove('active');}();
	// this.classList.add('active')
	// this.classList.remove('active')
}

