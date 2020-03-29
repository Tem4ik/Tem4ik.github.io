








class eC(){
	constructor(elementName) {
		this.newElement = elementName;
	}
	
	make(eName) {
		this.element = document.createElement(eName);
	}
	
	params() {
		
	}
	
	addTo(aTo){
		aTo.appendChild(this.element);
	}
	
	
}