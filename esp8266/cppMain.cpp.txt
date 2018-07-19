/*
 * Copyright (c) 2015, Majenko Technologies
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 *
 * * Neither the name of Majenko Technologies nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include "mylib.h"


#define REPORT

void drawGraph();
const char *ssid = "XeroxPrinter";
const char *password = "adminkopasswordmiwifi";

extern const char main_js[];
extern const char index_html[];

ESP8266WebServer server ( 80 );
mylib myObj = mylib();
//mylib myObj();	//????


#define LED_PIN D4
//const int LED_PIN = 13;
void ledOn() {
	digitalWrite(LED_PIN, 1);
}

void ledOff() {
	digitalWrite(LED_PIN, 0);
}

void ledSet(int qq) {
	analogWrite(LED_PIN, qq);
	Serial.print("ledSet(");
	Serial.print(qq);
	Serial.println(")");
	//digitalWrite(LED_PIN, qq);
}
void ledSetInfo() {
	Serial.print("\nPWMRANGE :=");
	Serial.println(PWMRANGE);
}

void handleRoot() {
	ledOn();
	char temp[400];
	int sec = millis() / 1000;
	int min = sec / 60;
	int hr = min / 60;

	snprintf ( temp, 400,

"<html>\
  <head>\
    <meta http-equiv='refresh' content='35'/>\
    <title>ESP8266 Demo</title>\
    <style>\
      body { background-color: #cccccc; font-family: Arial, Helvetica, Sans-Serif; Color: #000088; }\
    </style>\
  </head>\
  <body>\
    <h1>Hello from ESP8266!</h1>\
    <p>Uptime: %02d:%02d:%02d</p>\
    <img src=\"/test.svg\" />\
	</br><a href = '\index' style = 'text-decoration:none'>Goto index page</a>\
  </body>\
</html>",

		hr, min % 60, sec % 60
	);
	server.send ( 200, "text/html", temp );
	ledOff();
}

void handleNotFound() {
	ledOn();
	String message = "File Not Found\n\n";
	message += "URI: ";
	message += server.uri();
	message += "\nMethod: ";
	message += ( server.method() == HTTP_GET ) ? "GET" : "POST";
	message += "\nArguments: ";
	message += server.args();
	message += "\n";

	for ( uint8_t i = 0; i < server.args(); i++ ) {
		message += " " + server.argName ( i ) + ": " + server.arg ( i ) + "\n";
	}

	server.send ( 404, "text/plain", message );
	ledOff();
}

void srv_handle_index_html() {
	server.send_P(200, "text/html", index_html);
}

void srv_handle_main_js() {
	server.send_P(200, "application/javascript", main_js);
}

void handle_myObj_someData() {
	String res = myObj.someData();
	server.send(200, "text/plain", res);
}

void srv_handle_BMPsendor() {
	String res = myObj.readBMP();
	server.send(200, "text/plain", res);
}

void srv_handle_BMPsendorJSON() {
	String res = myObj.readBMPJSON();
	server.send(200, "text/plain", res);
}

void srv_handle_sensor() {
	String res = (String)myObj.readSensor(myObj.soundSens);
	server.send(200, "text/plain", res);
}

void srv_handle_memory() {
	String res = (String)ESP.getFreeHeap();
	server.send(200, "text/plain", res);
}

void drawGraph() {
	String out = "";
	char temp[100];
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

void srv_handle_set() {
	for (uint8_t i = 0; i < server.args(); i++) {
	
		if (server.argName(i) == "led")
			if (server.arg(i).toInt() == 1) ledOn();
			else if (server.arg(i).toInt() == 0) ledOff();

			if (server.argName(i) == "txt")
				Serial.println(server.arg(i));

			if (server.argName(i) == "init") {
				myObj.begin();
#ifdef REPORT
				Serial.println("myObj.begin() called");
#endif // REPORT
			}

			if (server.argName(i) == "lp")
				ledSet(server.arg(i).toInt());
			if (server.argName(i) == "li")
				ledSetInfo();

			if (server.argName(i) == "mem")
				if (server.arg(i).toInt() == 1)
					myObj.addMem();
				else if (server.arg(i).toInt() == 0)
					myObj.freeMem();

		server.send(200, "text/plain", "OK");
	}

}

void setup ( void ) {
	pinMode (LED_PIN, OUTPUT);
	ledOff();
	Serial.begin ( 115200 );
	WiFi.mode ( WIFI_STA );
	WiFi.begin ( ssid, password );
	Serial.println ( "" );

	// Wait for connection
	while ( WiFi.status() != WL_CONNECTED ) {
		delay ( 500 );
		Serial.print ( "." );
	}

	Serial.println ( "" );
	Serial.print ( "Connected to " );
	Serial.println ( ssid );
	Serial.print ( "IP address: " );
	Serial.println ( WiFi.localIP() );

	if ( MDNS.begin ( "esp8266" ) ) {
		Serial.println ( "MDNS responder started" );
	}
	server.on("/freeHeap", srv_handle_memory);
	server.on("/readSensor", srv_handle_sensor);
	server.on("/readBMPJSON", srv_handle_BMPsendorJSON);
	server.on("/readBMP", srv_handle_BMPsendor);
	server.on("/index", srv_handle_index_html);
	server.on("/main.js", srv_handle_main_js);
	server.on("/getSomeData", handle_myObj_someData);
	server.on ( "/", handleRoot );
	server.on ( "/test.svg", drawGraph );
	server.on("/set", srv_handle_set);


	server.on ( "/inline", []() {
		server.send ( 200, "text/plain", "this works as well" );
	} );
	server.onNotFound ( handleNotFound );
	server.begin();
	Serial.println ( "HTTP server started" );
}

void loop ( void ) {
	server.handleClient();
	//ESP.getFreeHeap()
}

