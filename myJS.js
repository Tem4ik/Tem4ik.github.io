

function placebo(){
	
//	parentSize();
//	typeText("asdqwezxcvfrtygbnhyu");
makeEvents();
}

function getElem(selector){
	if(selector === undefined){
		console.log("getElem get undefined in 1st arg");
	}
	let elem = document.querySelector(selector);
	if (elem != null) return elem;
}

function getElems(selector){
	if(selector === undefined){
		console.log("getElem get undefined in 1st arg");
	}
	let elem = document.querySelectorAll(selector);
	if (elem != null) return elem;
}


function parentSize(){
	
	/* let pt = getElem('.info').parentElement;
	let res ="width = ";
	res += pt.width;
	res += "  length = ";
	res += pt.length; */
	
	let pt = document.body;
	let res ="offSetWidth = ";
	res += pt.offsetWidth;
	res += "  offSetHeight = ";
	res += pt.offsetHeight;
	
	let res2 = "clientWidth = ";;
	res2 += pt.clientWidth;
	res2 += "  clientHeight = ";
	res2 += pt.clientHeight;
	getElem('#iq').innerHTML = res2;
	getElem('#ir').innerHTML = res;
	
}

function typeText(text){
	
	let ct = getElem('#qq');
	ct.innerHTML = "";
	var i=0;
	var it = setInterval(function(){ct.innerHTML += text[i];i++;},77);
	
	setTimeout(function(){clearInterval(it);},1000);
	
}



function toggletextClip(){
	let e = getElem('#textClip');
	if (e.style.display == "none")
		e.style.display = "block";
	else if(e.style.display == "block")
		e.style.display = "none";
}


function makeEvents(){
	var detBtns  = document.querySelectorAll('.detail');
	let txtC = getElem('#textClip');
	let prt = getElem('.portrait');
	prt.addEventListener('click',function(){textWriter("Срочная служба в рядах вооружённых сил РФ")});
	eventer(txtC);
	detBtns.forEach(eventer);
}

function eventer(t){
	return t.addEventListener('click',function(){toggletextClip()});
}


function ct(t){
	console.log(t);
}



function textWriter(text){
	let hq= document.querySelectorAll('h2');
	if (text === undefined)text = hq[hq.length -1].innerHTML;
	hq[hq.length -1].innerHTML = "";
	let i =0;
	it = setInterval(function(){	hq[hq.length -1].innerHTML +=text[i];if (i<text.length -1)i++},33);
	setTimeout(function(){clearInterval(it)},1500);
	
}