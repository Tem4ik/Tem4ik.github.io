
function mgraph(){/*MGRAPH*/
    
//                                                                  VARIABLES
    this.activeCanvas = "";
    this.cC = ""; //CanvasContext
    this.cH = ""; //CsHeight
    this.cW = ""; //CsWidth
    
    this.X = undefined;
    this.Y = undefined;
    this.Z = undefined;
//                                                                  METHODS
    

    this.getcC = function(){						
        this.cC = this.activeCanvas.getContext('2d');
        this.cH = this.activeCanvas.height;
        this.cW = this.activeCanvas.width;
    }
    
    this.setAC = function(canvasID){						//setActive canvas .. and pick context from them, with height width params
        if(canvasID != undefined){
            this.activeCanvas = canvasID;
            this.getcC();
        }
    }
    this.resizeParentWithChild = function (){
        var tH = this.activeCanvas.parentElement.clientHeight;
        var tW = this.activeCanvas.parentElement.clientWidth;
        this.activeCanvas.width = -50 + tW;
        this.activeCanvas.height = -50 + tH; 
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

/*
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
// return(Math.exp(iX));
    }
        s.beginPath();
//         s.moveTo(this.Y,this.X);
        s.moveTo(this.H-this.Y%this.Z,F(-Math.trunc(this.Y/this.Z))*this.Z);
//         for(x=this.Y, wX=0; x<W; x += 1, wX++){
//         var y=F(wX/this.Z); 
//         s.lineTo(x,this.X-y*this.Z); 
//         }

//         for(x=this.Y, wX=0; x>0; x -= 1, wX--){
//         var y=F(wX/this.Z); 
//         s.lineTo(x,this.X-y*this.Z); 
//         }

        

//         for(x=this.Y%this.Z, wX=-Math.trunc(this.Y/this.Z); x<W; x += this.Z, wX++){
    for(x=0, wX=-this.Y/this.Z; x<W; x += 1, wX+=1/this.Z){
        var y=F(wX); 
        s.lineTo(x,this.X-y*this.Z);
        if(x<512)
        retRes[x]=y;
//         if(wX>=-1 && wX<=1)
        retRes.sum += y;
//         retRes[retRes.length-1].x=wX;
//         retRes[retRes.length-1].y=y;
        }

        s.stroke();
        s.beginPath();

   if(res != undefined)
   return retRes
    }

    this.drawColumn = function(ix,iy){
        var s = this.cC;
        var H = this.activeCanvas.height;
        var We = this.activeCanvas.width;
        s.beginPath();
        s.strokeStyle = 'red';
        s.moveTo(ix,H);
        s.lineTo(ix,iy);
        s.stroke();
        s.beginPath();
    }
	*/
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
        R=5;
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
    
    this.drawVect = function(inF,iVal){
        var s = this.cC;
        var H = this.activeCanvas.height;
        var W = this.activeCanvas.width;
        if (iVal == undefined)
        iVal = this.Z;
        s.beginPath();

        s.strokeStyle='green';
        s.lineWidth=3;

        s.moveTo(this.Y,this.X);
        s.lineTo(this.Y+Math.cos(inF/180*Math.PI)*iVal,this.X-Math.sin(Math.PI*inF/180)*iVal);
        s.stroke();
    }

	this.defaultInit = function(){
		this.makeAxis(this.activeCanvas.height/2,200, 75);
		this.makeCircle();		//input R,start,stop
		this.drawAxisDots();	//input size of dots default:5;
		this.drawNums();	
		this.makeWeb();		// input Step default:1;
		this.makeCos(Math.PI*this.Z)
		this.makeSin(Math.PI*this.Z)
	}
	
	this.di = function(){
		tip('di occur','green',3000);
	}
}/*MGRAPH*/






 function initT(){	
	setTimeout(function(){initM();},1000);
} 
var vs;
var qq=[];
var q;
// var q = new mgraph();
// document.addEventListener('DOMContentLoaded',function(){init();initB();});

function makeEvents(){	
var aa = getEs('.btnGr a');
aa[0].addEventListener('click',function(){initM()});
aa[1].addEventListener('click',function(){initB()});
aa[2].addEventListener('click',function(){exotic()});
}

function init() {
	// q === null ? q = new mgraph():function(){q.constructor? q.setAC(cvs): function(){tip('something goes wrong')}}
	
	 //q === null? q = new mgraph(): 0;
	 q === (null||undefined)? q = new mgraph(): 0;
	 q.constructor===mgraph? q.setAC(cvs): 0;	
	 // q === null||false  ? q = new mgraph(): tip('q core is not Null, constructor call failed');
	 // q === null ? q = new mgraph(): tip('q core is not Null, constructor call failed');
	 // q.constructor?
	 
	// q.setAC(cvs);
		cvs.parentElement.style.height='555px';
		q.resizeParentWithChild();
		// initB();
	// makeEvents();
}
function initM(){
q.defaultInit();
q.makeF(function(e){return Math.cos(e)*Math.PI},'red');
q.makeF(function(e){return Math.sin(e)*Math.PI},'blue');
q.makeF(function(e){return Math.PI*e},"green");
q.makeF(function(e){return Math.PI});
qq = q.makeF(function(e){return(Math.cos(Math.PI*e*2) + Math.sin(Math.PI*e*5))},'#FFF',qq);	
initFurier();

}

function initB(){
		q.makeAxis(cvs.height/2+250,cvs.width/5,cvs.height/15);
		q.makeCos();
		q.makeSin();
		q.makeWeb();
		q.makeCircle();
	q.makeF(function(e){return Math.sin(e/5*Math.PI)+2},"#0FF");
	q.makeF(function(e){return Math.cos(e*Math.PI)+1.5},"#F0F");
q.makeF(function(e){return e/5},"#A21")
	q.makeF(function(e){return ((Math.sin(e/5*Math.PI)+2)+(e/5)+(Math.cos(e*Math.PI)+1.5))},'FF0')
		
    }



// qq = q.makeF(function(e){return(e/18)},'green',qq);
// exotic();
function exotic(){
// q.makeF(function(e){return (((e+1)%2)?0:150)/e},'#000'); //square
q.makeF(function(e){return (Math.trunc(e)%2?0:1)/Math.trunc(e)?.01:Math.trunc(e)},'#000') //square
//q.makeF(function(e){if(!(e%2)) return 0; return ((e%4===1)?1:-1)/(e*e)},'#000');// triangle
q.makeF(function(e){if(!(Math.trunc(e)%2)) return 0; return ((Math.trunc(e)%4===1)?1:-1)/(e*e)},'yellow');// triangle
// q.makeF(function(n){return ((n%2)?-1:1)/(n+1)},'#000');//sawTooth
q.makeF(function(n){return ((Math.trunc(n)%2)?-1:1)/Math.trunc(n+1)},'#FFF');//sawTooth

// q.makeF(function(e){if(e>3 && e < 3.2){return Math.PI} else return 0});    
}

var pwr = [];


function initFurier(){
pwr = FFT(qq,512);
for(i=0;i<=64;i++){
    q.drawColumn(10*i,q.activeCanvas.height-pwr[i]*q.Z*5);
}	
}


//http://www.colby.edu/chemistry/NMR/scripts/clymerfourier.html
//https://en.wikipedia.org/wiki/Cooley–Tukey_FFT_algorithm

var FFT = (function( size ) {	
	var m = size + ( size % 2 ); //размер выходного буфера должен быть четным
	var out = new Array( m );
 
	return function( data, len ) {
		var pid = ( 2.0 * Math.PI ) / len;
 
		var r, i, w, t;
 
		//высчитываем среднее значение по всему интервалу
		//для последующей нормализации
		var mv = 0;
		for ( t = 0; t < len; t++ ) mv += data[t];
		mv = mv / len;
 
		for ( w = 0; w < m; w++ ) {
			var a = w * pid;
			r = 0;
			i = 0;
			for ( t = 0; t < len; t++ ) {
				//нормализация значения из интервала
				var v = data[t] - mv;
				var ta = a * t;
				r += v * Math.cos( ta );
				i += v * Math.sin( ta );
			}
			out[w] = Math.sqrt( r * r + i * i ) / len;
		}
 
		return out;
	};
} )(64);

