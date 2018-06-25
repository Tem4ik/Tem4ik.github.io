

function initPoint(){
	
//	parentSize();
//	typeText("asdqwezxcvfrtygbnhyu");
addEvents();
}

function addEvents(){
	let sidea = getElems('.sidenav a');
	let content = getElem('.content');
	//content = content.innerHTML;
	sidea[0].addEventListener('click',function(){typeNums();});
	sidea[1].addEventListener('click',function(){content.innerHTML= "";});
	sidea[2].addEventListener('click',function(){textWriter(str);});
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


function toggletextClip(){
	let e = getElem('#textClip');
	if (e.style.display == "none")
		e.style.display = "block";
	else if(e.style.display == "block")
		e.style.display = "none";
}


function ct(t){
	console.log(t);
}

var str = 'Сегодня в Самаре 30 градусов жары и солнышко наконец-то печёт  по-летнему. У отца на работе один товарищ оставил в машине баллон с пеной. Нагревшись, пена захотела выйти наружу не только из баллона, но и из самой машины, для чего мягко открыла дверь.Будь пена красной, выглядело бы как салон автомобиля из Криминального Чтива конец' +" <h2>qwe</h2>";

function textWriter(text){
	
	let content = getElem('.content');
	let i=0;
	if (text === undefined) return;
	
	var it = setInterval(function(){if (i>=text.length)clearInterval(it); else {content.innerHTML+=text[i]; i++;}},25);

}

function addTag(tagscript){
	textField = getElem('.content');
	textField.innerHTML += tagscript;
}
function typeNums(){
	let textField = getElem('.content');
	let i = 0;
	let it = setInterval(function(){textField.innerHTML += i.toString();i++;},25);
	setTimeout(function(){clearInterval(it);textField.innerHTML += '<br>'},1500);
}


function eventer(t){
	return t.addEventListener('click',function(){toggletextClip()});
}
