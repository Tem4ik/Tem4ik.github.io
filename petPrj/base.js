document.onreadystatechange = function() {
if (document.readyState === "complete"){
console.log("documentReadyStateChange from my JS");
	initJ();
}
else console.log("doc.readyState is ",document.readyState);
}

function ge(inp){		/*getElement(selector)*/
	return document.querySelector(inp);
}

function gem(inp){		//*getManyElement's(selector)*/
	return document.querySelectorAll(inp);
}

function initJ(){
	/*event's init	*/
	tip('initJ() occur')
}

