

//github.com/Tem4ik/Tem4ik.github.io/blob/master/fxFeCanvasMathGraph/mathCSS.css


// function makeSizeE(cId){ 	// ДОПИЛИТЬ
// var cd = ge('#'+cId);

// cd = cd.parentElement;
 // cd.addEventListener('transitionend',function(){if(cd.clientWidth>window.innerWidth-100){return cd.style.width=window.innerWidth-70+'px';}else{cId.width = cd.offsetWidth-150; cId.height = cd.offsetHeight-50;}});
// }


 document.onreadystatechange = function() {
if (document.readyState === "complete"){
	console.log("documentReadyStateChange from my JS");
	readyStateComplete();
}
else console.log("doc.readyState is ",document.readyState);
}

function readyStateComplete(){
			/*event's init	*/
		chunk('.mArea');
		console.log('readyStateChange call F initJ');
		cc = new graph();
		// setTimeout(()=>{cc.setaC(ge("canvas"),1,1);},1500);
		cc.setaC(ge("canvas"),1,1);
		controlBar();
}
var cc = "";

function controlBar(){
let ne = document.createElement('div');
ne.className = "area";
let btn = document.createElement('div');
btn.className = "btn";
btn.innerHTML = "btn";
btn.onclick = function(){tip("tip btn clicked")};
ne.appendChild(btn);
ge('.sampleChunk').appendChild(ne);
let cfx = document.createElement('div');
cfx.className="clearfix";
ge('.sampleChunk').appendChild(cfx);
}


function chunk(appendTo){
	let ne = document.createElement('div');
	ne.className = "sampleChunk";
	let nee = document.createElement('div');
	nee.className = "resizebleArea";
	nee.addEventListener('transitionend', function(){cc.resizeParentWithChild();cc.init();});
	let neee = document.createElement('canvas');
	
	// neee.id = 'cvs';
	// neee.className = "canvas"
	nee.appendChild(neee);
	ne.appendChild(nee);
	ge(appendTo).appendChild(ne);	
	
	// nee.addEventListener('transitionend', function(){cc.resizeParentWithChild()});
	
	
	// ge('style').innerHTML += " .ccv{padding:3px;border:2pxsolidblack;margin:auto;resize:both;overflow:hidden;transition-property:width,height;transition-duration:10ms;transition-timing-function:linear;} ";
	
	// nee.addEventListener('transitionend', function(){if(nee.clientWidth>window.innerWidth-100){return nee.style.width=window.innerWidth-70+'px';}else{neee.width = nee.offsetWidth-50; neee.height = nee.offsetHeight-20;}});
}

// ge('canvas').style.backgroundColor="red"
// gea('canvas').forEach(console.log(this))


function graph(){
	this.aC = ""; // ActiveCanvas
	this.cC = ""; // CanvasContext
	this.cW = ""; // CanvasWidth
	this.cH = ""; // CanvasHeight
	
	this.X = undefined;
    this.Y = undefined;
    this.Z = undefined;
	
	    this.setaC = function(canvasID, resizeF, initIt){						//setActive canvas .. and pick context from them, with height width params
		console.log("resizeF=",resizeF," initIt= ",initIt);
		
        if(canvasID != undefined){
            this.activeCanvas = canvasID;
            this.setcC();
			if (resizeF != undefined) {
				this.resizeParentWithChild();
			}
			if (initIt != undefined) {
				this.init();
			}
        }
    }
	    this.setcC = function(){						
        this.cC = this.activeCanvas.getContext('2d');
        
    }
    
	// this.resizeParentWithChild = function (){
		// let qq=ge('canvas').parentElement.parentElement.offsetWidth
        // let tH = this.activeCanvas.parentElement.clientHeight;
        // let tW = this.activeCanvas.parentElement.clientWidth;
        // this.activeCanvas.width = -50 + tW;
        // this.activeCanvas.height = -50 + tH; 
    // }
		
		this.resizeParentWithChild = function (){
		let tW=ge('canvas').parentElement.offsetWidth
        let tH = ge('canvas').parentElement.offsetHeight; 
		// this.activeCanvas.parentElement.style.width = tW +" px";
		// this.activeCanvas.parentElement.style.height = tH +" px";
        // let  = this.activeCanvas.parentElement.clientWidth;
        this.activeCanvas.width = tW;
        this.activeCanvas.height = tH; 
    }
	
		this.init = function(){
		
		this.cH = this.activeCanvas.height;
        this.cW = this.activeCanvas.width;
		this.cC.clearRect(0,0,this.cW,this.cH)
			// this.setScale(25,10,5);
		// this.makeAxis(this.activeCanvas.height/2,200, 75);
		// this.makeAxis();
		this.makeAxis(this.activeCanvas.height/2,150,40);
		//this.activeCanvas.parentElement.style.height = "-webkit-fill-available";
		this.drawNums();
		this.makeWeb();
		this.drawAxisDots();
		}
		
	
		this.setScale = function(xx, yy, zz){
			xx != undefined? this.X = xx: console.log("xx",xx);
			yy != undefined? this.Y = yy: console.log("yy",yy);
			zz != undefined? this.Z = zz: console.log("zz",zz);
			
		}
	
	
	    this.makeAxis = function(x,y,z){
        var H = this.activeCanvas.height;
        var W = this.activeCanvas.width;

        var s = this.cC;
        s.clearRect(0,0,W,H);

        if (x == undefined)
        x = H/2;

        if (y == undefined)
        y = W/2;

        if (z == undefined)
        z = H/4;

        s.beginPath();
        s.strokeStyle = "blue";
        s.lineWidth = 3;

        s.moveTo(0,x);
        s.lineTo(W,x);
        s.stroke();

        s.beginPath();
        s.moveTo(y,0);
        s.lineTo(y,H);
        s.stroke();

        s.strokeStyle = "green";
        s.lineWidth = 1;
        s.moveTo(0,x-z);
        s.lineTo(W,x-z);
s.stroke();

        s.moveTo(W,x+z);
        s.lineTo(0,x+z);
        s.stroke();
        s.beginPath();
 this.X = x;this.Y = y; this.Z = z;
    } // this.makeAxis(x,y,z);
	
	
	
	
    this.drawNums = function(){
        var s = this.cC;
        var H = this.activeCanvas.height;
        var We = this.activeCanvas.width;

        s.beginPath();
        s.fillStyle = 'yellow';
        s.font = "20px sans-serif";


for (x=this.Y/this.Z,iX=0; x<We; x += this.Z,iX++){
        
        s.fillText(iX,this.Y+this.Z*iX,this.X);
        s.fillText(-iX,this.Y+this.Z*-iX,this.X);


        s.fillText(iX,this.Y,this.X+this.Z*-iX);
        s.fillText(-iX,this.Y,this.X+this.Z*iX);
        }

    }

    this.drawAxisDots = function(R){
        if (R==undefined)
        R=1,5;
        for (x=0,i=0;i<this.activeCanvas.width/this.Z;i++,x+=this.Z){
        this.makeCircle(R,this.Y%this.Z+this.Z*i,this.X);
        }
    }

    this.makeWeb = function(step){
                var s = this.cC;
        var H = this.activeCanvas.height;
        var W = this.activeCanvas.width;
        if(step == undefined)
        step = 1;

        s.beginPath();
        s.lineWidth=.5;
        s.strokeStyle = "black";

        for(x=this.Y%this.Z,y=this.X%this.Z;x<W;x+=this.Z*step,y+=this.Z*step) {
            s.moveTo(x,0);
            s.lineTo(x,H);
            s.moveTo(0,y);
            s.lineTo(W,y);
        }               
        s.stroke();
        s.beginPath();
    }	
	
	
	
	
	
	
	
	
	
	
	this.makeCircle = function(R,yy,xy){
        var s = this.cC;
        
        if (R == undefined){
        R = this.Z;    
        }
        
        if (xy == undefined){
        xy = this.X;    
        }
        
        if (yy == undefined){
        yy = this.Y;    
        }
        
        s.beginPath();
        s.lineWidth=2;
        s.strokeStyle = 'red';
        s.arc(yy,xy,R,0,2*Math.PI);
        s.stroke();
        s.beginPath();
    }
    


    this.makeCos = function(ae,we){
        if (ae == undefined)
        ae = this.Z;
        if (we == undefined)
        we = this.Z;
        var a=0;
        var aw=1/20;
        var W = this.activeCanvas.width;
        var H = this.activeCanvas.height;
        var s = this.cC;
        var a=0;
        s.strokeStyle = "red";
        s.lineWidth =3;
        s.beginPath();

        s.moveTo(0,this.X-Math.sin(0)*we);
for(x=0, wX=-this.Y/ae; x<W; x += 1, wX+=1/ae){
        var y=Math.cos(wX*Math.PI)*we; 
        s.lineTo(x,this.X-y);
}
        s.stroke();
        s.beginPath();
    }
    this.makeSin = function(ae,we){
        if (ae == undefined)
        ae = this.Z;
        if (we == undefined)
        we = this.Z;
        var a=0;
        var aw=1/20;
		var W = this.activeCanvas.width;
		var H = this.activeCanvas.height;
        var s = this.cC;
        var a=0;
        s.strokeStyle = "blue";
        s.lineWidth =3;
s.moveTo(0,this.X-Math.sin(0)*we);
                for(x=0, wX=-this.Y/ae; x<W; x += 1, wX+=1/ae){
        var y=Math.sin(wX*Math.PI)*we; 
        s.lineTo(x,this.X-y);
                }
        s.stroke();
        s.beginPath();
    }
	 this.makeF = function(F,color,res){
    var s = this.cC;
    var H = this.activeCanvas.height;
    var W = this.activeCanvas.width;
// var retRes=[{x:"",y:""}];
var retRes=[];
retRes.sum = 0;
    if (color === undefined)
    color = "orange";
    s.strokeStyle = color;
    s.lineWidth=2;

    if (F == undefined)
    F = function(iX){
        return(iX);
    }
        s.beginPath();
        s.moveTo(this.H-this.Y%this.Z,F(-Math.trunc(this.Y/this.Z))*this.Z);
		for(x=0, wX=-this.Y/this.Z; x<W; x += 1, wX+=1/this.Z){
        var y=F(wX); 
        s.lineTo(x,this.X-y*this.Z);
        if(x<512)
        retRes[x]=y;
        retRes.sum += y;
        }

        s.stroke();
        s.beginPath();

   if(res !== undefined)
   return retRes
    }

    this.drawColumn = function(ix,iy){
        var s = this.cC;
        var H = this.activeCanvas.height;
        var We = this.activeCanvas.width;
        //s.beginPath();
        s.strokeStyle = 'red';
        s.moveTo(ix,H);
        s.lineTo(ix,iy);
        s.stroke();
        s.beginPath();
    }	
    

    
    // this.drawVect = function(inF,iVal){
        // var s = this.cC;
        // var H = this.activeCanvas.height;
        // var W = this.activeCanvas.width;
        // if (iVal == undefined)
        // iVal = this.Z;
        // s.beginPath();

        // s.strokeStyle='green';
        // s.lineWidth=3;

        // s.moveTo(this.Y,this.X);
        // s.lineTo(this.Y+Math.cos(inF/180*Math.PI)*iVal,this.X-Math.sin(Math.PI*inF/180)*iVal);
        // s.stroke();
    // }
	
}

function setupAny(req,tag,dw){
  var inner = 1;
  if(tag === undefined)
  {
    tag="response";
  }
    if(dw === undefined)
  {
  inner = 0;
  }
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if (xhttp.readyState == 4 && xhttp.status == 200){
  xmlResponse = xhttp.responseXML;
  xmltag = xmlResponse.getElementsByTagName(tag);
  for (i=0; i<xmltag.length; i++){
 var msg = '' +  xmltag[0].childNodes[0].nodeValue;
    if(inner == 1) dw.innerHTML = msg;
    tip(tag +' ' + msg);
  }
return msg; 
} 
  
}
xhttp.open('PUT',req,true);
xhttp.send(null);
}

function request(rStr){
	var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if (xhttp.readyState == 4 && xhttp.status == 200){
  // xmlResponse = xhttp.responseXML;
	console.log=xhttp.responseText;
  // xmltag = xmlResponse.getElementsByTagName(tag);
	}
}
 // xhttp.open('GET'
	xhttp.open('PUT' ,rStr ,true)
	xhttp.send();
}

function submitVal(name, val) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'set?' + name + '=' + val, true);
  xhttp.send();
}

