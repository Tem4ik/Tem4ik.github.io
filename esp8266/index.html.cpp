#include <pgmspace.h>
char index_html[] PROGMEM = R"=====(
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
  <meta name='viewport' content='width=device-width' />
  <title>page Title</title>
  <script type='text/javascript' src='main.js'></script>
  <style>
	* {
		box-sizing: border-box;
	}
  
	body {
		margin:0;
		font-family: Arial, Helvetica, sans-serif;
	}
	.darea {
		display: -webkit-inline-box;
		padding:5px;
		border: 3px blue dashed;
		margin: 5px;
		background-color: light-blue;
	}
	.btn {
		display: -webkit-inline-box;
		padding:7px;
		border: 2px red double;
		margin: 7px;
		background-color: #3299ff;
	}
	
	.btn:hover {
		border: 5px dashed groove;
		background-color: #ffcc42;
	}
	
	.txt {
	padding: 5px;
	border: 3px orange ridge;
	margin: 10px;
	}

	.online{
	border-color:green;
	}

	.offline{
	border-color:red;
	}
  </style>
</head>
<body>
<div>TODO write content</div>
</body>
</html>

)=====";

