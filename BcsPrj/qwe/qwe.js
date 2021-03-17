document.onreadystatechange = function() {
if (document.readyState === "complete"){
console.log("documentReadyStateChange from my JS");
	initJ();
}
else console.log("doc.readyState is ",document.readyState);
}

function initJ(){
	// document.addEventListener('clicked',function(){});
	add_tbl_btn_reactions();
	addStyle(); addMsgFrame();
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


var sws = {
	currentNum:0,
	valid:false,
	inited:false,
	init(){if (this.inited==false){this.currentNum = parseInt(ge('.slick-current')["dataset"]["slickIndex"]);this.inited=true;}},
	show(){var tmp = this.currentNum; return tmp},
	btn_prev(){console.log('here1'); this.currentNum-- ; this.proceed()},
	btn_next(){this.currentNum++; this.proceed()},
	btn_v(inI){console.log('here1');
		this.currentNum+=inI; this.proceed();},
	proceed(){console.log('here2'); this.dataValidata(); if(this.valid==true){this.doIt();}else{console.log('tValid false');};},
	dataValidata(){if(this.inited==false){this.init(); return;};(this.currentNum<4 && this.currentNum>0)?this.valid = true:this.valid = false},
	doIt(){console.log('doIt' + this.currentNum); },
}

function pr(){
	sws.btn_prev();
};

function nt(){
	sws.btn_next();
};

var sww = function(){
	this.currentN=0;
	
}
var w = new sww();


// qq SIA			SERVICES LIST



function add_tbl_btn_reactions(){
	ge('.Burger').onclick = function(){brgBtn();};
	ge('.Banner-Desc-Buttons__Rates').onclick = function(){tip('Select rates Button',"Green",2500);};
	ge('.Banner-Desc-Buttons__About').onclick = function(){tip('about company Btn',"Blue", 3000);};
	ge('header .Logo').onclick = function(){tip('BB logo', '#15d948b0',4000);};
	ge('footer .Logo').onclick = function(){tip('BB logo', '#15d948b0',4000);};
	ge('.Services__Link').onclick = function(){tip("All services",'orange',5000);};
	ge('.Form__Submit').onclick = function(){tip("NOT WORKING in moment","red",7777);};
	ge('.CallOrder').onclick = function(){tip("NOT WORKING in moment","red",7777);};
	
	
	
	// tip(sws.show() +'>>>', '#15d948b0',700);
	ge('.Cases-Arrows__Btn_prev').onclick = function(){sws.btn_prev(); var tmp = tip('<<<<\t'+sws.show()+'\tBB', '#15d948b0',700); };
	// ge('.Cases-Arrows__Btn_next').onclick = function(){nt(); tip('>>>', '#18ff15',800);};
	
	ge('.Cases-Arrows__Btn_next').onclick = function(){sws.btn_next();tip('BB\t'+sws.currentNum+'\t>>>', '#15d948b0',700); };
	
	sia.length===0?sia = gea('.ServicesItem'):0;
	sia.forEach(swa);
}

var sia = gea('.ServicesItem');

function si(){
sia.forEach(siRe);
  function siRe(e){
    e["children"][1]["style"]["display"]="none";
	}
}

function swa(e){
e.onclick = function() {
	ge(".ServicesItem_active").classList.remove('ServicesItem_active');
	si();
	e.classList.add ('ServicesItem_active');
	e.lastElementChild.style.display="block";
	}
}



// END qq SIA

function brgBtn(){
	// style="padding-right: 5px;" class="	"
	// ge('.mobileMenu').classList.add("		");
	// ge(".Burger").classList.add("		");
	// var obj = ["brgBtn","mobileMenu","body"];
	// obj.forEach(classTrig);
	classTrig(ge('body'),'BodyOverflow');
	classTrig(ge('.mobileMenu'),'mobileMenu_active');
	classTrig(ge('.Burger'),'Burger_active');
}


function classTrig(elem, trigClassName){
	let StrigClassName = '.' + trigClassName;
	ge(StrigClassName)==null?elem.classList.add(trigClassName): elem.classList.remove(trigClassName);
	// replace(trigClassName,"");
}
























































			/* TIP JS*/

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