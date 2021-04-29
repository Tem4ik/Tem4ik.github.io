#include <pgmspace.h>
char mj_js[] PROGMEM = R"=====(
window.addEventListener('load', setup);
window.addEventListener('resize', drawColorbar);

function handle_M_B_S(e) {
  e.preventDefault();
  var name = e.target.className;
  var val = e.target.id;
  if(e.target.className.indexOf('m') > -1) {
    elems = document.querySelectorAll('#mode li a');
    [].forEach.call(elems, function(el) {
      el.classList.remove('active');
      name = e.target.className;
    });
    e.target.classList.add('active');
  }
  submitVal(name, val);
}

function submitVal(name, val) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'set?' + name + '=' + val, true);
  xhttp.send();
}

function compToHex(c) {
  hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function getMousePos(can, evt) {
  r = can.getBoundingClientRect();
  return {
    x: evt.clientX - r.left,
    y: evt.clientY - r.top
  };
}

function Touch(e) {
  e.preventDefault();
  pos = {
    x: Math.round(e.targetTouches[0].pageX),
    y: Math.round(e.targetTouches[0].pageY)
  };
  rgb = ctx.getImageData(pos.x, pos.y, 1, 1).data;
  drawColorbar(rgb);
  submitVal('c', compToHex(rgb[0]) + compToHex(rgb[1]) + compToHex(rgb[2]));
}

function Click(e) {
  pos = getMousePos(can, e);
  rgb = ctx.getImageData(pos.x, pos.y, 1, 1).data;
  drawColorbar(rgb);
  submitVal('c', compToHex(rgb[0]) + compToHex(rgb[1]) + compToHex(rgb[2]));
}

// Thanks to the backup at http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
function rgbToHsl(r, g, b){
  r = r / 255;
  g = g / 255;
  b = b / 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if(max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h = h / 6;
  }
  return [h, s, l];
}

function drawColorbar(rgb = [0, 0, 0]) {
  can = document.getElementById('colorbar');
  ctx = can.getContext('2d');
  can.width = document.body.clientWidth * 0.25;
  var h = can.height / 360;
  
  var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
  
  for(var i=0; i<=360; i++) {
    ctx.fillStyle = 'hsl('+i+', 100%, 50%)';
    ctx.fillRect(0, i * h, can.width/2, h);
    ctx.fillStyle = 'hsl(' + hsl[0] * 360 + ', 100%, ' + i * (100/360) + '%)';
    ctx.fillRect(can.width/2, i * h, can.width/2, h);
  }
}


//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//        document.getElementById("myBtn").style.display = "block";
//        
//    } else {
//        document.getElementById("myBtn").style.display = "none";
//    }
//}

function btnoW(we){
  submitVal('wO',we);
  setupoW();
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function bottomFunction(){
  window.scrollTo(0,document.querySelector("#controls2").scrollHeight);
}

function setupSliders(){
  setupVale();
  setupVal();
  setupBrt();
  setupSpeed();
}

function setupSD(){
  setupSpeed();
  setupReverse();
}

function setupoW(){
//  var xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function (){
//    if( xhttp.readyState == 4 && xhttp.status == 200){
//var wOValue = xhttp.responseText;
//      document.getElementById("wORange").value = wOValue;
//      document.getElementById("wOSpan").innerHTML = wOValue;
      setupbyJSON();
//      setupSliders();
//      setupMode();
//}
//  }
//  xhttp.open('GET','getwO',true);
//  xhttp.send();
}

function setupMode(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if (xhttp.readyState == 4 && xhttp.status == 200){
  xmlResponse = xhttp.responseXML;
  modeNo = xmlResponse.getElementsByTagName('mode');
  atm = modeNo[0].childNodes[0].nodeValue;
   
   elems = document.querySelectorAll('#mode li a');
    [].forEach.call(elems, function(el) {
      el.classList.remove('active');
        });
      elems[atm].classList.add('active');
}
}
xhttp.open('PUT','getModeNo',true);
xhttp.send(null);
}
  
function setupStst(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if( xhttp.readyState == 4 && xhttp.status == 200){
      var ststVal= xhttp.responseText;
      if (ststVal == '1') {
        document.getElementById("abr").innerHTML="Stop()";
        }
      else {
        document.getElementById("abr").innerHTML="Start()";
        }
}
  }
  xhttp.open('GET','getStst',true);
  xhttp.send();
  }
function setupReverse(){
   var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if( xhttp.readyState == 4 && xhttp.status == 200){
      var reverseVal= xhttp.responseText;
      var revButton = document.getElementById("*");
      if (reverseVal == '1') {
        revButton.innerHTML="Reverse:ON";
//        revButton.classList.add('active');
        }
      else {
        revButton.innerHTML="Reverse:OFF";
//        revButton.classList.remove('active');
        }
    }
  }
xhttp.open('GET','getReverse',true);
xhttp.send();
}

function setupBrt(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if( xhttp.readyState == 4 && xhttp.status == 200){
      var brightValue = xhttp.responseText;
      document.getElementById("bRange").value = brightValue;
      document.getElementById("bSpan").innerHTML = brightValue;
    }
  }
  xhttp.open('GET','brt',true);
  xhttp.send();
}

function setupVale(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if( xhttp.readyState == 4 && xhttp.status == 200){
      var veVal = xhttp.responseText;
      document.getElementById("valeRange").value = veVal;
      document.getElementById("valeSpan").innerHTML = veVal;
    }
  }
  xhttp.open ('GET', 've', true);
  xhttp.send();
}

function setupVal(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
  if( xhttp.readyState == 4 && xhttp.status == 200){
    var valVal = xhttp.responseText;
    document.getElementById("valSpan").innerHTML = valVal;  
    document.getElementById("valRange").value = valVal;
  }
}
  xhttp.open('GET', 'val', true);
  xhttp.send();
  }
function setupSpeed(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if( xhttp.readyState == 4 && xhttp.status == 200) {
      var slVal =  xhttp.responseText;
      document.getElementById("demo").innerHTML = slVal;
      document.getElementById("myRange").value = slVal;
    }
  }
  xhttp.open('GET','sliders',true);
  xhttp.send();
  
}

function setup(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById('mode').innerHTML = xhttp.responseText;
      elems = document.querySelectorAll('ul li a'); // adds listener also to existing s and b buttons
      [].forEach.call(elems, function(el) {
        el.addEventListener('touchstart', handle_M_B_S, false);
        el.addEventListener('click', handle_M_B_S, false);
      });
    }
  };
  xhttp.open('GET', 'modes', true);
  xhttp.send();
 
  var can = document.getElementById('colorbar');
  var ctx = can.getContext('2d');

  drawColorbar();
  
  can.addEventListener('touchstart', Touch, false);
  can.addEventListener('click', Click, false);
}

function getJSON(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState  == 4 && xhttp.status == 200) {
      var myObj = JSON.parse(this.responseText);
for (i in myObj){
                  //document.getElementById("footPad").innerHTML = myObj.name;
              document.getElementById("footPad").innerHTML += myObj[i] + "</br>";  
}
document.getElementById("footPad").innerHTML += "brSl:" + myObj.brSl + "   tailL:" + myObj.tailL + "  Shift Color:" +myObj.shiftColor + " speed:" +myObj.speed + "  modeNo:" + myObj.modeNo+"</br>"
    }
  };
xhttp.open('GET', 'giveMeJson', true); 
xhttp.send();
}


function setupbyJSON(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState  == 4 && xhttp.status == 200) {
      var myObj = JSON.parse(this.responseText);
//bright
      document.getElementById("bRange").value = myObj.brSl;
      document.getElementById("bSpan").innerHTML = myObj.brSl;
//val
      document.getElementById("valSpan").innerHTML = myObj.tailL;
      document.getElementById("valRange").value = myObj.tailL;
//vale
      document.getElementById("valeRange").value = myObj.shiftColor;
      document.getElementById("valeSpan").innerHTML = myObj.shiftColor;

//speed
      document.getElementById("demo").innerHTML = myObj.speed;
      document.getElementById("myRange").value = myObj.speed;

//wo
      document.getElementById("wORange").value = myObj.whichStrip;
      document.getElementById("wOSpan").innerHTML = myObj.whichStrip;
      
//mode
 elems = document.querySelectorAll('#mode li a');
    [].forEach.call(elems, function(el) {
      el.classList.remove('active');
        });
      elems[myObj.modeNo].classList.add('active');
            
    }
  };
xhttp.open('GET', 'giveMeJson', true);
xhttp.send();
}

)=====";
