class root{
	constructor(i){
		this.i = i;
	}
	sc(){
		console.log('root method sc ',this.i);
	}
}

class dom extends root{
	constructor(i){
	this.n = i;
	super(i);

	}
}



class obj{
	constructor(em,nm,la){
		if(la == undefined)la=0;
		if(nm == undefined)la=0;
		this.oName = nm;
		for(let x in em){
		    console.log(x,' in em obj');
		}
		
		
	}
	get s(){return this.oName}


	qq(){
		console.log('this obj qq()',this.oName);
	}
}

class action extends obj{
		constructor(i){
		super(i);
		}
		
	aa(){
		console.log('aa');
	}
}





const aaaa = new obj('canvas');


qa = function(){
 console.log(aaaa.s);
}

qa();