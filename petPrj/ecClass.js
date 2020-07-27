// strict mode;

class ec{
    
    constructor(elName, pNode){
        this.newElement=elName;
		// if (pNode !== "undefined")
		this.pe = ge(pNode);
    }
	
	
	set parentElem(pNode){
		this.pe = ge(pNode);
	}
	
	set cls(cName){
		//if(elemReady())
		this.cls=cName;
	}
	
	set htm(inHTML){
		this.iHTML=inHTML;
	}
	
	static info(){
		console.log('let ce=new ec(crElem, parentNode) - constructor\n ce.cls=class Name :set\n ce.htm(innerHTML) :set\n ce.make() :f()')
	}
	
	make(){
		// let te = this.elem;
		this.elem = document.createElement(this.newElement);
		this.elem === undefined? tip('className fail','red'):this.elem.className=this.cls;
		this.iHTML === undefined? tip('innerHTML fail','red'):this.elem.innerHTML=this.iHTML;
		// let xa =ge(this.parentElem);
		this.pe === null? tip('append fail','red'): this.pe.append(this.elem);
		//event's make here;
		tip('ec make done','orange');
	}	
	
	elemReady(){
		if(this.elem!=='undefined')
			return true;
		else 
			return false;
		// return (this.elem!==='undefined')?true:false;
	}
	
	get name(){
		return this.newElement;
	}
	
	
}

function inEc(){
	console.log('inEc done');
	tip('ecClass ready!','rgba(0,200,0,.5)');
}

function ecc(){
	
}