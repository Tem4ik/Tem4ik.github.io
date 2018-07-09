

function getE(selector){
	if(selector !== undefined){
	let res = document.querySelector(selector);
	return res;};
	console.log("getE cant pick element");
	return "nothingToReturn";
}

function getEs(selector){
	if(selector !== undefined){
	let res = document.querySelectorAll(selector);
	return res;};
	console.log("getE cant pick element");
	return "nothingToReturn";
}




function makeSizeE(cId){ 	// ДОПИЛИТЬ
var cd = getE('#'+cId);
cd = cd.parentElement;
 cd.addEventListener('transitionend',function(){if(cd.clientWidth>window.innerWidth-100){return cd.style.width=window.innerWidth-70+'px';}else{cId.width = cd.offsetWidth-150; cId.height = cd.offsetHeight-50;}});
}


