document.onreadystatechange = function() {
if (document.readyState === "complete"){
console.log("documentReadyStateChange from my JS");
	initJ();
}
else console.log("doc.readyState is ",document.readyState);
}

function initJ(){
	/*event's init	*/
	tip('initJ() occur')	
}


function ge(inp){		/*getElement(selector)*/
	return document.querySelector(inp);
}

function gem(inp){		//*getManyElement's(selector)*/
	return document.querySelectorAll(inp);
}


function toggle(selector){ // toggle(#.CSSSelector) add/remove class hidden to element
	let domObj = ge(selector);
	domObj.classList.contains('hidden')?domObj.classList.remove('hidden'):domObj.classList.add('hidden');
}
