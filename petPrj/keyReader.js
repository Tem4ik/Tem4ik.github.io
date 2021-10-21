

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
		tip("<a href='https://drive.google.com/file/d/1lkQnuDYJwh6d_mL1u9GXn60AKvWF7O--/view?usp=sharing'>q3load</a>",'red');
		
		break;
		

		case "tbl":
			// var newTbl = new excel()
			tip('tbl called', 'orange');
		break;

		
		case "rad":
		cons.radioMaker('q');
		
		break;
		case "rd":
		cons.radioMaker();
		break;

		default:
		tip('nothing to do','blue');
		break;
	}//end Switch(input)
}


static radioMaker(whichOne){
		var ifr = document.createElement('iframe');
		
		
		if(whichOne===undefined) {
			ifr.src="//www.radiorecord.ru/player/tab10-mini/";
			ifr.frameborder="0";
			ifr.style="width: 222px; height: 59px; overflow: hidden;";			
			cons.makeRadioBtns();
			// /tab10-mini/?st=teo 
			// brks, chil, club, dc, deep, dub, gop, mdl, ps, pump, rus, sd90, teo, tm, trap, vip, yo, rock, mix, techno
		}
		else {			
			ifr.src="//www.radiorecord.ru/player/";
			ifr.frameborder="0";
			ifr.style="width: 680px; height: 464px; overflow: hidden";
		}
		
		// let radioDiv = ge('#radio');
		let radioDiv = ge('#record-mini-player');
		radioDiv.append(ifr);
		
	}
	
static makeRadioBtns(){
	var btn = document.createElement('div');
	btn.onclick = function(){ge('iframe').src = '//www.radiorecord.ru/player/tab10-mini/?st=teo' }
	btn.innerText = "teo";
	
	var btn1 = document.createElement('div');
	btn1.onclick = function(){ge('iframe').src = '//www.radiorecord.ru/player/tab10-mini/?st=ps' }
	btn1.innerText = "ps";

}

// ge('#console').innerText.concat(inText)
	// ge('#console').innerText.concat(inText.to);
}


// var cs = new console();
var wr = new keyReader();
keyReader.init()
