#include <pgmspace.h>
char root_html[] PROGMEM = R"=====(
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
  <meta name='viewport' content='width=device-width' />

  <title>neoPixels Ctrl</title>

  <script type='text/javascript' src='js.js'></script>

  <style>
  * {
    font-family:sans-serif;
    margin:0;
    padding:0;
  }

  body {
  }
  
.heap{
overflow: hidden;

background-color: #000;
}

.heap2{
position: sticky;
top: 0px;
padding: 3px 0px;
text-align:center;
overflow:hidden;
}

.heap a {
float: left;
padding: 10px;
border: 1px solid white;
margin: 5px;
color: #ffffff;
text-align: center;
text-decoration: none;
background-color: #333;
}

.heap a:hover {
background-color: green;
}
  
  body {
    width:100%;
    background-color:#202020;
  text-align: center;
  }
  
  h1 {
    width:65%;
    margin:25px 0 25px 25%;
    color:#454545;
    text-align:center;
  }
  
  #colorbar {
    float:left;
  }
  
  #controls {
    overflow:hidden;
  width:50%;
    position: relative;
    max-width: 700px;
    display:inline-block;
    
//    padding-left:5px;
    margin: auto;
  }

  
  #controls2, #controls1 {
    position: relative;
    margin: auto;
    align: center;
  }

  ul {
    text-align:center;
  }

  ul#mode li {
    display:block;
  }

  ul#brightness li, ul#speedy li, ul#val li, ul#inf li, ul#vale li, ul#inz li, ul#sl li, ul#sz li,ul#sq li {
    display:inline-block;
    width:30%;
  }

  ul li a {
    display:block;
    margin:3px;
    padding:10px 5px;
    border:2px solid #454545;
    border-radius:5px;
    color:#454545;     
    font-weight:bold;
    text-decoration:none;
  }

  ul li a.active {
    border:5px solid #909090;
    color:#909090;
  }

  #slidecontainer {
   display:block;
    margin:3px;
    padding:10px 5px;
    border:2px solid #454545;
}
  #slidecontainer p {
   color:#454545; 
   font-weight:bold;
   text-decoration:none;
   font-size: x-large;
}
.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #4CAF50;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #4CAF50;
    cursor: pointer;
}
.addBtnM {
  display: block;
  bottom: 5%;
  left: 5%;
  outline: none;
  text-align:center; 
}

.rightBottom {
  float: right;
  width: 7%;
  text-align:right;
  margin-top: 0px;
}

.addBtnM button {
  overflow: hidden;
  float:left;
  padding: 10px 15px;
  margin: 3px 7px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: red;
  color: white;
  cursor: pointer;
}

.myBtn:hover {
  background-color: #555;
}
.container, container1 {
    display: inline-block;
    cursor: pointer;
}

.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
    transform: rotate(-45deg) translate(-9px, 6px) ;
}

/* Fade out the second bar */
.change .bar2 {
    opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
    transform: rotate(45deg) translate(-8px, -8px) ;
}  
.navbar {
  display: none;
  background-color: #333;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 70px;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background: #f1f1f1;
  color: black;
}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}

/* The switch - the box around the slider */
.switchsL {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slidersW {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slidersW:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slidersW {
  background-color: #2196F3;
}

input:focus + .slidersW {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slidersW:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.footerN{
  position:sticky;
  bottom: 0px;
  width: 100%;
  overflow:hidden;
  padding: 3px 0px;
  margin: 3px 0px;
}
.footerN p{
  color: #ffffff;
}

#footPad {
  padding:5px 0px;
  margin: 3px 0px;
  color:white;
  width:100%;
  overflow: hidden;
  background-color: #3323;
  text-align:center;
}

#footPad p{
  float:right;
  padding:3px;
  border:1px solid red;
  margin: 0 10px;
}
#footPad p:hover{
background-color: #ffffff;

}
  </style>
</head>



 

<body onload = "setupoW()">
  <div class = "heap">  
  <a>Setup </a>
  <a>led strip interface</a>
  <a onclick = "hohy()">btns</a>
  <a href = "..\service">GOTO service</a>  
  </div>
  <div class = "heap2">
  <div class="addBtnM rightBottom" >
  <button onclick="topFunction()" id="myBtnTop" class = "myBtn" ctitle="Go to top">Top</button>
  </div>
  </div>
   <canvas id='colorbar' width='75' height='1080' display='none'></canvas>
  <div class="container1 change" onclick="hiho(this,'colorbar')" style="float:left">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
 
  <div>
  <div class="navbar">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="https://www.w3schools.com/howto">HowTo</a>
</div>
  
  <div id='controls'>
      <ul><div class="container1 change" onclick="hiho(this,'controls1')">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div></ul>

    <div id='controls1'>

      <div id="slidecontainer">
  <input type="range" min="1" max="3" value="3" class="slider" id="wORange">
  <p style="" >which strip control: <span id="wOSpan"></span></p>
  </div>
    <ul id='brightness' onclick="setupBrt()">
      <li><a href='#' class='b' id='-'>&#9788;</a></li>
      <li><a href='#' class='b' id='+'>&#9728;</a></li>
    </ul>
    <ul id='brt'>
  <div id="slidecontainer">
  <input type="range" min="1" max="255" value="1" class="slider" id="bRange">
  <p style="" >Britghtness: <span id="bSpan"></span></p>
  </div>
  </ul>
    <ul id='val' onclick="setupVal()">
      <li><a href='#' class='v' id='-'>Tail&#8722;&#8722;</a></li>
      <li><a href='#' class='v' id='r'>Reset</a></li>
      <li><a href='#' class='v' id='p'>Tail&#43;&#43;</a></li>
    </ul>
    <ul>
  <div id="slidecontainer">
  <input type="range" min="1" max="255" value="1" class="slider" id="valRange">
  <p style="" >Tail length: <span id="valSpan"></span></p>
  </div>
    </ul>
        <ul id='vale' onclick="setupVale()">
      <li><a href='#' class="e" id='1' >color shift&#8722;&#8722;</a></li>
      <li><a href='#' class="e" id='2' >Ve=1</a></li>
      <li><a href='#' class="e" id='3' >color shift&#43;&#43;</a></li>
    </ul>
    <ul>
  <div id="slidecontainer">
  <input type="range" min="1" max="128" value="1" class="slider" id="valeRange">
  <p style="" >Tail color shift: <span id="valeSpan"></span></p>
  </div>
    </ul>
    <ul id='speedy' onclick="setupSD()">
      <li><a href='#' class ='s' id='-'>&#8722;</a></li>
      <li><a href='#' class='q' id='*'>*Reverse</a></li>
      <li><a href='#' class='s' id='+'>&#43;</a></li>
    </ul>
    <ul>
  <div id="slidecontainer">
  <input type="range" min="1" max="255" value="1" class="slider" id="myRange">
  <p style="" >Animation speed: <span id="demo"></span></p>
  </div>
    </ul>
  </div>    
    <ul><div class="container1 change" onclick="hiho(this,'controls2')">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div></ul>
<div id="controls2">
    <ul id='mode'></ul>
    </div>
  </div>
  </br>
  <div class='footerN'>
  
  <div class="addBtnM rightBottom" >
  <button onclick="bottomFunction()" id="myBtnBottom" class = "myBtn" title="Go to top">Bottom</button>
  </div>
  
  <div class = "addBtnM">
  <button onclick="btnoW(1)" class = "myBtn" id = "myBtnFirst" title="1st ledStrip">1st strip control</button>
  <button onclick="btnoW(2)" class = "myBtn" id = "myBtnSecond" title="2nd led strip">2nd strip control</button>
  <button onclick="btnoW(3)"  class = "myBtn" id = "myBtnBoth" title="Both led strip">Control both</button>
  </div>
  

  
  </div>
<div id="footPad">
<button onclick = "getJSON()" style="display:none;">JSON</button>
<p> buttons </p> 
<p> some </p>
<p> may have </p>
<p> Footer </p>
</div>

 
  

</script>
</body>
</html>


)=====";
