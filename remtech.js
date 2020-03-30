document.onreadystatechange = function() {
if (document.readyState === "complete"){
console.log("documentReadyStateChange from my JS");
	initJ();
}
else console.log("doc.readyState is ",document.readyState);
}

function initJ(){
	document.addEventListener('clicked',function(){});
	 // let ww =ge('video');
	// ww.loop=true;
	// ww.onmouseover=function(){ww.play();};
	
	// ww.addEventListener('clicked',function(){console.log('video clicked');});
	// ge('video').onended=function(){ge('video').play();}
	// setTimeout(function(){ge('video').loop=true;ge('video').play()},3000);
}


function ge(inp){
	return document.querySelector(inp);
}

function gem(inp){
	return document.querySelectorAll(inp);
}

// Set the date we're counting down to
var countDownDate = new Date("Feb 11, 2020 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
/*   if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  } */
}, 1000);
