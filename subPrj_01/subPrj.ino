
// #include <ESP8266mDNS.h>
#include <MyFIFO.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>


#ifndef STASSID
#define STASSID "Lesder"
#define STAPSK  "11bhuijn111"
const char *ssid = STASSID;
const char *password = STAPSK;
#endif

// extern const char *main_html, *main_js, *main_css;
// const char main_html[], main_js[], main_css[];
extern const char main_html[], main_js[], main_css[];

#define LED_PIN 13

ESP8266WebServer server(80);


MyFIFO queue;


void handleRoot() {
	digitalWrite(LED_PIN, 1);
	char temp[400];
	int sec = millis() / 1000;
	int min = sec / 60;
	int hr = min / 60;
	
	snprintf(temp, 400,

           "<html>\
  <head>\
    <meta http-equiv='refresh' content='5'/>\
    <title>ESP8266 Demo</title>\
    <style>\
      body { background-color: #cccccc; font-family: Arial, Helvetica, Sans-Serif; Color: #000088; }\
    </style>\
  </head>\
  <body>\
    <h1>Hello from ESP8266!</h1>\
    <p>Uptime: %02d:%02d:%02d</p>\
    <img src=\"/test.svg\" />\
	<div><a href='/main'>goto M</a></div>\
  </body>\
</html>",
	hr, min % 60, sec % 60);
	server.send(200, "text/html", temp);
	digitalWrite(LED_PIN, 0);
}


void handleNotFound() {
	digitalWrite(LED_PIN, 1);
	String message = "File Not Found\n\n";
	message += "URI: ";
	message += server.uri();
	message += "\nMethod: ";
	message += (server.method() == HTTP_GET) ? "GET" : "POST";
	message += "\nArguments: ";
	message += server.args();
	message += "\n";
	
	for (uint8_t i = 0; i < server.args(); i++) {
		message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
	}
	
	server.send(404, "text/plain", message);
	digitalWrite(LED_PIN, 0);
}


void drawGraph() {
	String out;
	out.reserve(2600);
	char temp[70];
	out += "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"400\" height=\"150\">\n";
	out += "<rect width=\"400\" height=\"150\" fill=\"rgb(250, 230, 210)\" stroke-width=\"1\" stroke=\"rgb(0, 0, 0)\" />\n";
	out += "<g stroke=\"black\">\n";
	int y = rand() % 130;
	for (int x = 10; x < 390; x += 10) {
		int y2 = rand() % 130;
		sprintf(temp, "<line x1=\"%d\" y1=\"%d\" x2=\"%d\" y2=\"%d\" stroke-width=\"1\" />\n", x, 140 - y, x + 10, 140 - y2);
		out += temp;
		y = y2;
	}
	out += "</g>\n</svg>\n";
	
	server.send(200, "image/svg+xml", out);
}

void mainHTML(){
	server.send(200, "text/html", main_html);
}

void mainJS(){
	server.send_P(200, "application/javascript", main_js);
}

void mainCSS(){
	server.send_P(200, "text/css", main_css);
}



void one(){
	Serial.println("one per 1k ms");
}

void two(){
	Serial.println("two per 2k ms");
}

void three(){
	Serial.println("three per 3k ms");
}



void wifiSetup(){
	Serial.println();
	Serial.println();
	Serial.print("Connecting to ");
	Serial.println(ssid);

		/* Explicitly set the ESP8266 to be a WiFi-client, otherwise, it by default,
			would try to act as both a client and an access-point and could cause
			network-issues with your other WiFi-devices on your WiFi-network. */
	WiFi.mode(WIFI_STA);
	WiFi.begin(ssid, password);

	while (WiFi.status() != WL_CONNECTED) {
		delay(500);
		Serial.print(".");
	}
	
	Serial.println("");
	Serial.println("WiFi connected");
	Serial.println("IP address: ");
	Serial.println(WiFi.localIP());
}



void serverSetup(){
	server.on("/", handleRoot);
	server.on("/test.svg", drawGraph);
	server.on("/main",mainHTML);
	server.on("/main.js",mainJS);
	server.on("/main.css",mainCSS);
	// server.on("/inline", []() {server.send(200, "text/plain", "this works as well");});
	server.onNotFound(handleNotFound);
	
	server.begin();
	Serial.println("HTTP server started");
}


void pinSetup(){
	pinMode(LED_PIN, OUTPUT);
	digitalWrite(LED_PIN, 0);
}


void setup(void) {
	Serial.begin(115200);	
	wifiSetup();
	serverSetup();
	pinSetup();
	
	
	queue.add(0,one,1000);
	queue.add(1,two,2000);
	queue.add(2,three,3000);
	


}
	// unsigned long lTime = 0, pTime = 100;


void loop(void) {
	queue.proceed();
	server.handleClient();
}



	// int32_t now = millis();
	// if (now > lTime + pTime){
	// queue.proceed();
	// lTime = now;
	// }






























/*
   Copyright (c) 2015, Majenko Technologies
   All rights reserved.

   Redistribution and use in source and binary forms, with or without modification,
   are permitted provided that the following conditions are met:

 * * Redistributions of source code must retain the above copyright notice, this
     list of conditions and the following disclaimer.

 * * Redistributions in binary form must reproduce the above copyright notice, this
     list of conditions and the following disclaimer in the documentation and/or
     other materials provided with the distribution.

 * * Neither the name of Majenko Technologies nor the names of its
     contributors may be used to endorse or promote products derived from
     this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
   ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
   ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
