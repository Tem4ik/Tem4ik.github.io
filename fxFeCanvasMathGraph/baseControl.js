

// function getE(selector){
	// if(selector !== undefined){
	// let res = document.querySelector(selector);
	// return res;};
	// console.log("getE cant pick element");
	// return "nothingToReturn";
// }
getE=(selector)=>{
	if(selector !== undefined){
	let res = document.querySelector(selector);
	return res;};
	console.log("getE cant pick element");
	return "nothingToReturn";
}

getEs=(selector)=>{
	if(selector !== undefined){
	let res = document.querySelectorAll(selector);
	return res;};
	console.log("getE cant pick element");
	return "nothingToReturn";
}




// function makeSizeE(cId){ 	// ДОПИЛИТЬ
// let cd = getE('#'+cId);
// let cd = ge('#'+cId);

// cd = cd.parentElement;
 // cd.addEventListener('transitionend',function(){if(cd.clientWidth>window.innerWidth-100){return cd.style.width=window.innerWidth-70+'px';}else{cId.width = cd.offsetWidth-150; cId.height = cd.offsetHeight-50;}});
// }


function makeSizeE(cId){ 	// ДОПИЛИТЬ
// let cd = getE('#'+cId);

let cd = ge('#'+cId);
let cs = cd.parentElement;

let ccW = cd.clientWidth;
let wiW = window.innerWidth-100;
let coW = cd.offsetWidth;
let coH = cd.offsetHeight;
let aa = cd.style.width;
let cW = cs.width;
let cH = cs.height;
cd = cd.parentElement;
 cd.addEventListener('transitionend',function(){if(ccW > wiW-100){return aa=wiW-70+'px';}else{cW = coW-150; cH = coH-50;}});
}


