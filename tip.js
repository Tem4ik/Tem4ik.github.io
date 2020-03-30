



function tip(text, color){
	let mf = ge('#msgFrame');
	if	(color != undefined){
	mf.style.backgroundColor = color;
	setTimeout(function(){mf.style.backgroundColor = "#AAA"},3200);
	}
	mf.className = "show";
	mf.innerHTML  = " " + text;
	setTimeout(function(){mf.className = mf.className.replace("show","");},3200);
}

