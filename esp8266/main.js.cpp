#include <pgmspace.h>
char main_js[] PROGMEM = R"=====(


document.addEventListener("DOMContentLoaded", ready);

function ready(){	
    console.clear();
        console.log("                                 DOM ready");
        d();
}

window.onload = function(){
	console.log("                               window.onload occured");
	
};

function dataAdapter (){
	
    this.request = '';
    this.data = '';
    this.o = "o this is ok";
    this.ob = '';
    this.proc = 0;
	
	    this.submit = function(name, val) {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'set?' + name + '=' + val, true);
        xhttp.send();
    }
	
	    this.ans = function(req, action) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                try{this.data = JSON.parse(xhttp.responseText);}
                catch(e){this.data = xhttp.responseText;};
                if(action !== undefined)action();
            }
        };
        xhttp.open('GET', req, true);
        xhttp.send();
    }
	
	    this.getBri = function() {
        this.ans('brt', ()=>{
            this.br()
        }
        );
    }
	
	    this.br = function() {
        let wp = g('brightRange');
        wp.value = this.data;
        let wp1 = g('brightSpan');
        wp1.innerHTML = ' ' + this.data;
    }
}


function builder(elem,targetNode){
	let nElem = document.createElement(elem);
	nElem.className = 'darea';
	nElem.classList.add('offline');
	nElem.innerText = 'innerText';
//	nElem.onmouseover = function(){ a.ans('getSomeData',()=>{document.querySelector('.darea').innerText = a.data})};
	

nElem.onclick= function(){qwe();}
var qwe = (function(){
var e=0;
var ee=0;
var r=false;
return function(){r=!r;e++;console.log('p.click occured ',r,e);
if(r){ee=setInterval(function(){a.ans("getSomeData",()=>{document.querySelector('.darea').innerHTML=a.data});},250);nElem.classList.replace('offline','online');}
else {clearInterval(ee);nElem.classList.replace('online','offline');};}
})();

document.body.append(nElem);

let nnElem = document.createElement('div');
nnElem.className = 'btn';
nnElem.innerText = 'led ';


let aaElem = document.createElement('a');
aaElem.innerText = 'ON';
nnElem.append(aaElem);
nnElem.onclick = function(){	
let res = document.querySelector('.btn a');
res.innerText=='ON'? res.innerText='OFF':res.innerText='ON';
a.submit('led',res.innerText=='ON'?'1':'0');};
document.body.append(nnElem);

let wElem = document.createElement('input');
wElem.type = 'text';
wElem.onkeypress = function(e){
	if (e.code == 'Enter' | e.code == 'NumpadEnter'){
		if (wElem.value.length >0) {a.submit('txt',wElem.value);wElem.value="";};
	}
}
document.body.append(wElem);

let txElem = document.createElement('div');
txElem.className = 'txt';
txElem.classList.add('offline');
txElem.innerText = 'innerText';
txElem.onclick= function(){add();}
var add = (function(){
var e=0;
var ee=0;
var r=false;
return function(){r=!r;e++;console.log('p.click occured ',r,e);
if(r){ee=setInterval(function(){a.ans("readBMP",()=>{document.querySelector('.txt').innerHTML=a.data});},2000);txElem.classList.replace('offline','online');}
else {clearInterval(ee);txElem.classList.replace('online','offline');};}
})();
document.body.append(txElem);
}




function w(){
	console.log(arguments);
}

function q(){
	location.reload();
	setTimeout(function(){d();},500);
	document.querySelector('.btn').innerHTML = "thisNodeSelected"

}

var a=1;

	function d(){
	a = new dataAdapter();
	console.log('test #D()');
	builder('div');
	//a.ans('getSomeData',()=>{document.querySelector('.btn').innerText = a.data})
}

)=====";

