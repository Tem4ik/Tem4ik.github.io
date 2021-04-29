#include <pgmspace.h>
char main_html[] PROGMEM = R"=====(
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
  <meta name='viewport' content='width=device-width' />

  <title>AirBender</title>

  <script type='text/javascript' src='js.js'></script>

  <style>
  .dv {
  padding: 15px;
  border: 3px solid red;
  margin: 5px;
  text-align: -webkit-center;
  }
  
  .da {
  padding: 15px;
  border: 3px solid blue;
  margin: 5px;
  text-align: -webkit-center;
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
  
  #msgBox {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
}

#msgBox.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 0; opacity: 0;}
}
  </style>
</head>

<body onload="setup()">
<div class = "dv">
<a>qq AirBender control page here</a>
</br>
<input type="range" min="0" max="65535" value="55" class="slider" onchange="sliderChanged('slider',this)"><a id="aslider">slider Value</a>
</div>
<div class = "dv">
analogWriteFrequency
</br>
<input  type="range" min="0" max="40000" value="255" class="slider" onchange="sliderChanged('sliderF',this)"><a id="asliderF">sliderF Value</a>
</br>
analogWriteResolution
</br>
<input id="iRange" type="range" min="0" max="65535" value="8" class="slider" onchange="sliderChanged('sliderR',this)"><a id="asliderR">sliderR Value</a>
</div>
<div id="msgBox">qq tip(msg) msg here as innerHTML</div>
</body>
<script>
document.querySelectorAll('.slider')[2].onchange = function(){document.querySelector('.slider').max=this.value}
</script>
</html>

	


)=====";
