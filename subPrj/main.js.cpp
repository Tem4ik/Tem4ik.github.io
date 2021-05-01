#include <pgmspace.h>
char main_js[] PROGMEM = R"=====(	


 window.addEventListener('load', setup);
 // window.addEventListener('resize', drawColorbar);
 
 
 
 function setup(){
	 console.log('F setup occur');
 }
 
 function ge(input){
	let result;
	document.getElementById(input)?result=document.getElementById(input): result=document.querySelector(input);
	return result;
}

 function gea(input){
	let result;
	//document.getElementById(input)?result=document.getElementById(input): result=document.querySelector(input);
	document.querySelectorAll(input);
	if(result===undefined)
		console.error("F gea return undefined");
	return result;
}

)=====";