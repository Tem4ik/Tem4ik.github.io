#include <pgmspace.h>
char js_js[] PROGMEM = R"=====(

/*
 window.addEventListener('load', setup);
 window.addEventListener('resize', drawColorbar);
*/

//window.addEventListener('onchange',OutputSliderValue);

function ge(input){
	let result;
	document.getElementById(input)?result=document.getElementById(input): result=document.querySelector(input);
	return result;
}

// function OutputSliderValue(){
// document.getElementById("sliderCapture").innerHTML = ge('.slider').value;
// }


function sliderChanged(key, e){
  // ge('sliderCapture').innerHTML = e.value;
  sendVal(key ,e.value);
  
  let fstr = "#a" + key;
  let qa = document.querySelector(fstr);
  qa.innerHTML = e.value;
  }

function setup(){
	//alert("qq,setup occure");
	tip('body loaded');
	// OutputSliderValue();
}


function tip(text, color){
	let mf = ge('msgBox');
	if	(color != undefined){
	mf.style.backgroundColor = color;
	setTimeout(function(){mf.style.backgroundColor = "#AAA"},3200);
	}
	mf.className = "show";
	mf.innerHTML  = " " + text;
	setTimeout(function(){mf.className = mf.className.replace("show","");},3200);
}



/*AJAX area*/

function srvRequest(msg){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			var result = this.responseText;
		};
		xhttp.open('GET',msg,'true')
		xhttp.send();
	}
}

function sendVal(name,value){
	let request = new XMLHttpRequest();
	request.open("GET","set?"+name+"="+value,true);
	request.send();
}



)=====";
