window.addEventListener('load',setup);

function setup(){
	tip('setup here','green', 2500);
	addEvents();
	//setupKB();
	tosetup();
}

var msq = 'on'


function addEvents(){
	let fontFamily = did('ffam');
	fontFamily.onchange = function(){
		tip(fontFamily[fontFamily.selectedIndex].value,'blue');
		}
	let fontStyle = did('fft');
		fontStyle.onchange = function(){
		tip(fontStyle[fontStyle.selectedIndex].value,'blue');
		}
	let fontSize = did('fontSize');
		fontSize.onchange = function(){
		tip('font size: ' +fontSize.value,'blue');
		}	
	let xsize = did('xsize');
		xsize.onchange = function(){
		tip('Xsize: ' + xsize.value,'blue')
		}
	let ysize = did('ysize');
		ysize.onchange = function(){
		tip('Ysize: ' + ysize.value,'blue')
		}
		ek = new keyBoard();
		ek.init();

}
var ek = new keyBoard();


function did(ww){
let qq = document.getElementById(ww);
if (qq !== null)
return qq
}

function qs(ww){
	let qq = document.querySelector(ww);
	if (qq !== null)
		return qq;
}

function qsa(ww){
	let qq = document.querySelectorAll(ww);
	if( qq!== null)
		return qq;
}

function tip(text, color, timeOut){
	if (timeOut===undefined)
	timeOut = 3200;
	
	let mf = document.getElementById('msgFrame');
	if	(color != undefined){
	mf.style.backgroundColor = color;
	setTimeout(function(){mf.style.backgroundColor = "#AAA"},timeOut);
	}
	mf.className = "show";
	mf.innerHTML  = " " + text;
	setTimeout(function(){mf.className = mf.className.replace("show","");},timeOut);
}






















function tMenu(){
	let eMenu = did('menu')
eMenu.style.display === 'block'?eMenu.style.display = 'none':eMenu.style.display = 'block';
}


function keyBoard(){
this.at=0;
this.ct=0;
this.key=0;

this.action = function(){
    this.at =0; this.ct=0;
}

this.eventDown = function(){
document.querySelector('body').onkeydown = function(event){
    console.log(event.which)
switch(event.which){
    case 17:
								//17 is 'ctrl'
    //console.log('isCtrlDown'); 
    ek.ct = 1;
    break;
    case 18:
								//18 is 'alt'
    ek.at = 1;
    //console.log('isAltDown');
    break;
    case 83:
								// 83 is 'S'
    if(ek.at == 1 && ek.ct==1)
    console.log('is S down with Alt & Ctrl');
    tup();
    ek.at = 0; ek.ct = 0;
    break;
    case 82:
								// 82 is 'R'
    if(ek.at == 1 && ek.ct==1)
    tp.clear();
    ek.at = 0; ek.ct = 0;
    break;
    case 88:					// 88 is 'X'
    if(ek.at == 1 && ek.ct==1)
    tMenu();
ek.at = 0; ek.ct = 0;
}


}    
}
this.eventUp = function(){
    document.querySelector('body').onkeyup = function(e){
        //tip(e.which);
        //console.log('keyUP:: ',e.key);
        switch(e.which){
            case 17:
// console.log('ctrl is UP =0;')
ek.ct = 0;
break;
case 18:
// console.log('alt is UP =0;');
ek.at = 0;
break;
        }
    }
}
this.init = function(){
    this.eventDown();
    this.eventUp();
}
}



var tqq = JSON.parse(localStorage.teamOptions);
function rt(){
tqq = JSON.parse(localStorage.teamOptions);
}
function re(){
document.getElementById('lt').innerHTML = tqq.tName1;
document.getElementById('rt').innerHTML = tqq.tName2;
document.getElementById('lf').innerHTML = tqq.s41;
document.getElementById('rf').innerHTML = tqq.s42;
}
function ntime(){
    this.time = new Date();
    this.MS = 0;
    this.SEK = 0;
    this.MIN = 0;
    this.HR = 0;

    this.started = 0;

    this.wTime = function(){
        this.time = new Date();
//             this.MS = Math.trunc(this.time.getMilliseconds()/10);
            this.MS = this.time.getMilliseconds();
            this.SEK = this.time.getSeconds();
            this.MIN = this.time.getMinutes();
            this.HR = this.time.getHours();
    }
    this.wTimeW = function(es,pausedTime){
	if(pausedTime === undefined) pausedTime = 0;
        this.time = new Date() - es + pausedTime;
//             this.MS = Math.trunc(this.time.getMilliseconds()/10);
            this.MS = Math.abs(Math.floor(this.time%100));
            this.SEK = Math.abs(Math.floor(this.time/1000)%60);
            this.MIN = Math.abs(Math.floor(this.time/1000/60)%110);
            //this.HR = Math.abs(Math.floor(this.time/1000/60/60)%24);
			if (this.MS.toString().length ==1) this.MS = '0' + this.MS;
			if (this.SEK.toString().length ==1) this.SEK = '0' + this.SEK;
			if (this.MIN.toString().length ==1) this.MIN = '0' + this.MIN;
			if (this.HR.toString().length ==1) this.HR = '0' + this.HR;
    return this.time;
	}
        this.show = function(){
            this.wTime();
        console.log(this.HR,':',this.MIN,':',this.SEK,':',this.MS);
        document.getElementById('timer2').innerHTML =  this.HR + ':' + this.MIN + ':' + this.SEK + ':' + this.MS;
    };
};



                                var tp = new timR()







function timR(){
this.st = new ntime();
this.ct = new ntime();
this.pat = 0;
this.tick = function(){
}

this.sw = function(){
}



			this.setStart = function(){
				this.st = new ntime();
				this.st.wTime();
			//	this.SH();
				};


			this.clear = function(){
				this.setStart();
				this.pat = 0;
				document.getElementById('timer2').innerHTML =  '00:00';
				};

			this.show = function(){
				this.getTime();
				 //this.ct.HR + ':' + 
				 //document.getElementById('timer2').innerHTML = this.ct.MIN + ':' + this.ct.SEK + ':' + this.ct.MS;
			document.getElementById('timer2').innerHTML = this.ct.MIN + ':' + this.ct.SEK;
				 document.getElementById('timer2').innerHTML
				 
				//this.SH();
				//document.getElementById('lt').innerHTML = 				localStorage.getItem('qwe');
				rt();
				re();
				
			}

			this.pause = function(){
			this.ct.wTimeW(this.st.time);
			this.pat = this.ct.wTimeW(this.st.time,this.pat);
			this.ptext();
			}
			
			this.ptext = function(){
			let res = '';
			let ms = Math.abs(Math.floor(this.pat%100));
			let sek =  Math.abs(Math.floor(this.pat/1000)%60);
			let min = Math.abs(Math.floor(this.pat/1000/60)%110);
			let hr = 0;
			
			res += ' ' + hr;
            res += ' ' + min;
            res += ' ' + sek;
			res += ' ' + ms;
			//document.getElementById('msin').value = ms;
			document.getElementById('tsek').value = sek;
			document.getElementById('tmin').value = min;
			//document.getElementById('mshr').value = hr;
			//document.getElementById('ptext').innerHTML = '' + this.pat + ' ' + res;
			}
			
			
			this.continue = function(){
			this.setStart();
			}
			
			this.SH = function(){
			document.getElementById('tst').innerHTML = this.st.time.toString();
			document.getElementById('tct').innerHTML = this.ct.time.toString();
			}
			
			this.getTime = function(){
				this.ct.wTimeW(this.st.time,this.pat);
			}
}



    toggleUptime = function(){
let itr=0;
let interval=0;


return function(){itr=!itr;
  
  if(itr){
  tp.continue();
  interval = setInterval(function(){tp.show();},1000)
  }
  else{clearInterval(interval);
  tp.pause();}
    };
};
/*
return function(){itr=!itr;
  itr?interval = setInterval(function(){tp.show();},10):clearInterval(interval);
    };
};*/
var tup = toggleUptime();

//document.getElementById('timer2').onclick = function(){tup();};



// Team Option's setup

function tosetup(){
setupVar();
toSetup();
timerSetup();
}

function toSetup(){
let cn = did('aName');
let bn = did('bName');
let ccn = did('ac4');
let bbn = did('bc4');

cn.onchange = function(){
//localStorage.qwe = cn.value
tqq.tName1 = cn.value;
eTeam();
did('lt').innerHTML = this.value;
}

bn.onchange = function(){
tqq.tName2=bn.value;
eTeam();
did('rt').innerHTML = this.value;
}
ccn.onchange = function(){
    tqq.s41 = ccn.value;
    eTeam();
}

bbn.onchange = function(){
    tqq.s42 = bbn.value;
    eTeam();
}
	
}
function timerSetup(){
	let tmin = did('tmin');
	let tsek = did('tsek');
	
	tmin.onchange = function(){
		tiq.min = tmin.value;
		tTiq();
	}
	tsek.onchange = function(){
		tiq.sek = tsek.value;
		tTiq();
	}
	
}
var tqq;
function setupVar(){
if (localStorage.teamOptions === undefined)
    {
        console.log('qq')
        tqq = {
        tName1:'noname1',
        tName2:'noname2',
        s41:0,
        s42:0
        }
    }
    else 
    {
		tqq = JSON.parse(localStorage.teamOptions)
		rTeams();
	}
}




var tiq = {
	min:0,
	sek:0
}


function eTeam(){     
localStorage.setItem('teamOptions',JSON.stringify(tqq))
}
function tTiq(){
	localStorage.setItem('timerOptions',JSON.stringify(tiq))
}

function rTeams(){
let aa = JSON.parse(localStorage.teamOptions)
did('aName').value = aa.tName1;
did('bName').value = aa.tName2;
did('ac4').value = aa.s41;
did('bc4').value = aa.s42;
return aa;
}


