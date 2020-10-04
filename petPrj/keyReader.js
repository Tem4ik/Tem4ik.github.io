

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
				ge('input').value="";
				break;
				
			}
		}
		document.querySelector('#console input').onkeydown = function(event){
			console.log(event.which);
			
			switch(event.which){
				
				
			case 13: 
			tip('enter occur in input');
			//this.value==""?tip('','red'):tip('','green');
			cons.validate(this.value);
			
			break;
			}
	}
			
		}
	}


class cons{
	constructor(){}

static validate(input){
	input==""?tip('','red'):tip('','green'),cons.write(input);
}
	
static write(inText){

	ge('#logArea').innerHTML += "</br>";
	ge('#logArea').innerText += inText;
	ge('#logArea').scrollTo(0,ge('#logArea').scrollHeight);
	ge('input').value="";
	cons.commandReader(inText);
}

static commandReader(input){
	switch(input){
		case "q3dl":
//		tip('q3view','red');
		tip("<a href='https://drive.google.com/file/d/0B13Cgs91FtzOb05mNEtfRl9YbjQ/view?usp=sharing'>q3load</a>",'red');
		
		break;
		default:
		tip('nothing to do','blue');
		break;
	}
}

// ge('#console').innerText.concat(inText)
	// ge('#console').innerText.concat(inText.to);
}


// var cs = new console();
var wr = new keyReader();
keyReader.init()