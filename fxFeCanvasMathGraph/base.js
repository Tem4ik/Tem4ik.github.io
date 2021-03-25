
//##########################################################################**Custom selectors, InitF;


document.onreadystatechange = function() {
if (document.readyState === "complete"){
console.log("documentReadyStateChange from my JS");
	initJ();
}
else console.log("doc.readyState is ",document.readyState);
}

function initJ(){
	// document.addEventListener('clicked',function(){});
	initTip();
	// initT();
	init();
	q.constructor===mgraph?initM():tip('q.constructor is false');
	makeSizeE('cvs');
	
}


function ge(inp){
	return document.querySelector(inp);
	}


function gea(inp){
	return document.querySelectorAll(inp);
}


function tgle(tle_obj,inb){
	ge(tle_obj).classList.contains('qqq')?function(){ge(tle_obj).classList.remove('qqq');
	inb.classList.add('active');}():function(){ge(tle_obj).classList.add('qqq');inb.classList.remove('active');}();
}

//END__###################################################################**Custom selectors, InitF;











































//########################################################################## TIP.js


function initTip(){
	ge('style')===null? ge('head').append(document.createElement('style')) : 0;
	addStyle(); addMsgFrame();
}
	
	
function tip(text, color, timer){
	let mf = ge('#msgFrame');
	timer !== undefined? timer: timer=3200;
	if	(color != undefined){
	mf.style.backgroundColor = color;
	setTimeout(function(){mf.style.backgroundColor = "#AAA"},timer);
	}
	mf.className = "show";
	mf.innerHTML  = " " + text;
	setTimeout(function(){mf.className = mf.className.replace("show","");},timer);
}


function addStyle(){
var mst = ge('HEAD style');
mst.innerHTML.length>0? 0:  mst.innerHTML="#msgFrame{visibility: hidden; text-align: center; background-color: #AAA; padding: 30px; border: 3px solid black; margin: 10px; position: fixed !important; width: 300px; height: 50px; z-index: 100; left: 40%; bottom: 5%; font-size: 21px; display: table; } #msgFrame.show{visibility: visible; animation: fadein 0.5s,fadeout 0.3s 3s;  }   @keyframesfadein{from{bottom: 0; opacity: 0; } to{bottom: 5%; opacity: 1; } } @keyframesfadeout{from{bottom: 5%; opacity: 1; } to{bottom: 0; opacity: 0; } }";

}

function addMsgFrame(){
	var tipFrame= document.createElement('div');
	tipFrame.id = "msgFrame";
	ge('body').appendChild(tipFrame);
}
			// TIP JS END
			
			
			/* msgFrame div used for tip function, ... */
			/*
			CSS
#msgFrame {
	visibility: hidden;
	text-align: center;
	background-color: #AAA;
	padding: 30px;
	border: 3px solid black;
	margin: 10px;
	position: absolute;
	width: 300px;
	height:	50px;
	z-index: 1;
	left: 40%;
	bottom: 5%;
	font-size: 21px;
	display: table;
	}
	
#msgFrame.show {
	visibility: visible;
	animation: fadein 0.5s, fadeout 0.3s 3s;
}	

@keyframes fadein	{
	from {bottom: 0; opacity: 0;}
	to {bottom: 5%; opacity: 1;}
	}
	
@keyframes fadeout	{
	from {bottom: 5%; opacity:1;}
	to {bottom: 0; opacity: 0;}
}
*/
/* msgFrame ES */

// #msgFrame{visibility: hidden; text-align: center; background-color: #AAA; padding: 30px; border: 3px solid black; margin: 10px; position: fixed !important; width: 300px; height: 50px; z-index: 100; left: 40%; bottom: 5%; font-size: 21px; display: table; } #msgFrame.show{visibility: visible; animation: fadein 0.5s,fadeout 0.3s 3s;  }   @keyframesfadein{from{bottom: 0; opacity: 0; } to{bottom: 5%; opacity: 1; } } @keyframesfadeout{from{bottom: 5%; opacity: 1; } to{bottom: 0; opacity: 0; } }


//END__########################################################################## TIP.js