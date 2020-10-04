class keyReader {

	constructor(oneParam,twoParam){
		this.oneParam = oneParam;
		this.twoParam = twoParam;
	}
	
	static init(){
		document.querySelector('body').onkeydown = function(event){
			console.log(event.which);
			switch(event.which){
				case 16:
				tip('16 shift occur');
				break;
				
				case 17:
				tip('17 ctrl occur');
				
				break;
				
				case 18:
				tip('18 alt occur');
				
				break;
				
				case 192:
				tip('192 ~ occur');
				ge('#console').classList.item(0)==="hide"?ge('#console').classList.replace('hide','show'):ge('#console').classList.replace('show','hide');
				break;
				
			}
		}
		document.querySelector('#console input').onkeydown = function(event){
			console.log(event.which);
			
			switch(event.which){
				
				
			case 13: 
			tip('enter occur in input');
			break;
			}
	}
			
		}
	}


var wr = new keyReader();
keyReader.init()