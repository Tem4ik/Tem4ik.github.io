 window.addEventListener('load', setup);
 // window.addEventListener('resize', drawColorbar);
 
 

 
 function setup(){
	console.log('eventListener load call F setup');
	 iniTip();
 }
 
 
 // document.onreadystatechange = function() {
// if (document.readyState === "complete"){
// console.log("documentReadyStateChange from my JS");
	
// }
// else console.log("doc.readyState is ",document.readyState);
// }

// function initJ(){
	// /*event's init	*/
		 // console.log('readyStateChange call F initJ');
		 // chunk('body');
// }


 
 function ge(input){
	let result;
	document.getElementById(input)?result=document.getElementById(input): result=document.querySelector(input);
	return result;
}

 function gea(input){
	let result = document.querySelectorAll(input);
	//document.getElementById(input)?result=document.getElementById(input): result=document.querySelector(input);
	
	if(result===undefined)
		console.error("F gea return undefined");
	return result;
}




//tip.js
function tip(text, color, timer){
	let mf = ge('#msgFrame');
	timer !== undefined? timer: timer=3200;
	if	(color != undefined){
	mf.style.backgroundColor = color;
	setTimeout(function(){mf.style.backgroundColor = "#AAA"},timer);
	}
	mf.classList.add("show");// mf.className = "show";
	mf.innerHTML  = " " + text;
	setTimeout(function(){mf.className = mf.className.replace("show","");},timer);
}

// function tip(text, color){
	// let mf = ge('#msgFrame');
	// if	(color != undefined){
	// mf.style.backgroundColor = color;
	// setTimeout(function(){mf.style.backgroundColor = "#AAA"},3200);
	// }
	// mf.className = "show";
	// mf.innerHTML  = " " + text;
	// setTimeout(function(){mf.className = mf.className.replace("show","");},3200);
// }


function addTipToStyle(){
ge('style')===null? (function(){ge('head').append(document.createElement('style')); addTipToStyle()})(): ge('style').innerHTML = "#msgFrame{visibility:hidden;text-align:center;background-color:#ABCDF1;padding:30px;border:3px solid black;margin:10px;position:absolute;width:300px;height:50px;z-index:1;left:40%;bottom:5%;font-size:21px;}#msgFrame.show{visibility:visible;animation: fadein 0.5s,fadeout 0.3s 3s;}@keyframes fadein{from{bottom:0;opacity:0;}to{bottom:5%;opacity:1;}}@keyframes fadeout{from{bottom:5%;opacity:1;} to {bottom:0;opacity:0;}}";
}


function addMsgFrame(){
	let ne = document.createElement('div');
	ne.id="msgFrame";
	ge('body').append(ne);
}


function iniTip(){
	addTipToStyle();
	ge('#msgFrame')===null? addMsgFrame(): console.log('iniTip');
	tip('iniTip done','#ABCDF1');
	// ge('#msgFrame')addMsgFrame();
}

//tip.js

//webRequest's



//webRequest's










































