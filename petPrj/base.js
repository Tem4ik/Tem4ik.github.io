document.onreadystatechange = function() {
if (document.readyState === "complete"){
console.log("documentReadyStateChange from my JS");
	initJ();
}
else console.log("doc.readyState is ",document.readyState);
}

function ge(inp){
	return document.querySelector(inp);
}

function gem(inp){
	return document.querySelectorAll(inp);
}

function initJ(){
	/*event's init	*/
	tip('initJ() occur')
}

