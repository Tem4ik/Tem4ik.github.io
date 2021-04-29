#include <que.h>

#define LED_PIN D4
#define IN_PIN D2


#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>



#define STASSID "XeroxPrinter"
#define STAPSK  "adminkopasswordmiwifi"
// void ICACHE_RAM_ATTR dintHandle();
uint8_t intI = 0, lstateI = 0;
que q;
void trySetPin(int val);
int RPM;


const char *ssid = STASSID;
const char *password = STAPSK;

extern const char root_html[];
extern const char js_js[];

extern const char main_html[];
extern const char mj_js[];

ESP8266WebServer server(80), *srv = &server;


void drawRoot() {
  server.send(200, "text/html", root_html);
}

void addJS() {
  server.send_P(200, "application/javascript", js_js);
}

void drawMain() {
  server.send(200, "text/html", main_html);
}

void addMJ() {
  server.send_P(200, "application/javascript", mj_js);
}

void sendInfo() {
  String msg = "Server info:\n";
  msg += lstateI;
  //uint32_t tmp = (uint32_t)strtol(&ser->arg(i)[0], NULL, 16);
  Serial.println(msg);
  server.send(200, "text/html", msg);
}

void sendRPM() {
  String msg = "";
  msg += RPM;
  server.send(200, "text/plain", msg);
}

void handleRoot() {
  // if (isWork)
    // isWork = 0;
  // else
    // isWork = 1;
  // digitalWrite(ledPin, isWork);
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
  </body>\
</html>",

           hr, min % 60, sec % 60
          );
  server.send(200, "text/html", temp);
  //digitalWrite(ledPin, isWork);
}

void handleNotFound() {
  //digitalWrite(ledPin, 1);
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
  //digitalWrite(ledPin, 0);
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
void srv_handle_set() {
  for (uint8_t i = 0; i < server.args(); i++) {

    if (server.argName(i) == "param") {
      String msg = "set param ==";
      msg += server.arg(i);
      Serial.println(msg);
      server.send(200, "text/html", "ok");
      //if (server.arg)
      //*pt=server.arg(i)[0];
      String neww = server.arg(i);

      int ttt = strtol(neww.c_str(), NULL, 16);
      Serial.print("\nstrtol arg ==");
      Serial.println(ttt);
    }

    if (server.argName(i) == "slider") {
      String tmp = server.arg(i);
      int pwr = tmp.toInt();
      analogWrite(LED_PIN, pwr);
      Serial.print("analogWrite ");
      Serial.println(pwr);
    }

	if (server.argName(i) == "sliderF") {
      String tmp = server.arg(i);
      int frequency = tmp.toInt();
      analogWriteFreq(frequency);
	  
// analogWriteFreq(30000);
    }
	if (server.argName(i) == "sliderR") {
      String tmp = server.arg(i);
      int resolution = tmp.toInt();
	  analogWriteRange(resolution);
      // analogWriteResolution(resolution);
    }	
	if (server.argName(i) == "rr") {
      // String tmp = server.arg(i);
      // int temp = tmp.toInt();
	  // analogWriteRange(resolution);
      // analogWriteResolution(resolution);
		// q.setTurn(0,5000,rrStr);
		Serial.println("argName==rr");
    }
	
    server.send(200, "text/plain", "ok");
  }
}





struct serialReader {
	String inputStr = "";
	bool completeString = false;

void serialEvent(){
	while (Serial.available()) {
		char inChar = (char)Serial.read();
		inputStr += inChar;
		if (inChar == '\n'){
			completeString = true;
		}
	}	
}

void seHandle(){
	if (completeString) {
		Serial.println(inputStr);
		int tInt = inputStr.toInt();
		if (1024 >=  tInt || 0 <= tInt) {
			trySetPin(tInt);
		}
		inputStr = "";
		completeString = false;
	}
}
	
};

serialReader sq;

void trySetPin(int val){
	// digitalWrite(pin,val);
	Serial.print("\ntrySetPin = ");
	Serial.println(val);
	analogWrite(LED_PIN, val);
}

void oneF(){
  Serial.println("one F");
  }
void twoF(){
  Serial.println("two F");
  }
void threeF(){
  Serial.println("three F");
  }
void fF(){
  Serial.println("four F");
  }
  
uint32_t ltime=0, ptime = 1200;



void dintHandle(){
	intI++;
}

void wdintI(){
	intI = 0;
}

void showintI(){
	if(lstateI != intI){
		Serial.print("intI = ");
		Serial.println(intI);
		lstateI = intI;
	}
}

void sqse(){
	sq.serialEvent();
	sq.seHandle();
	
}


void wifiSetup(){
	  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
   Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}


void serverSetup(){

  server.on("/qq", handleRoot);
  server.on("/root", drawRoot);
  server.on("/mj.js", addMJ);
  server.on("/", drawMain);
  server.on("/js.js", addJS);
  server.on("/info", sendInfo);
  server.on("/set", srv_handle_set);
  server.on("/test.svg", drawGraph);
  server.on("/getRPM", sendRPM);
  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });
  server.onNotFound(handleNotFound);
  server.begin();
  Serial.println("HTTP server started");	
}

void prStr(){
	Serial.println("PRSTR in 1sec\n");
}
void trStr(){
	Serial.println("trSTR in 3sec\n");
}
void rrStr(){
	Serial.println("rrSTR in 5sec\n");
}

void setup() {
  Serial.begin(115200);
  Serial.println("helloWorld");
	wifiSetup();
	serverSetup();

  // put your setup code here, to run once:
// q.setTnums(4);
// q.setTurn(0,5000,oneF);
// q.setTurn(1,10000,twoF);
// q.setTurn(2,20000,threeF);
// q.setTurn(3,30000,fF);
q.setTnums(2);


// q.setTurn(0,20000, wdintI);
// q.setTurn(1,1000, showintI);
// q.setTurn(2,500, sqse);

q.setTurn(0,1000, prStr);
q.setTurn(1,3000, trStr);
// q.setTurn(1,1000, showintI);
// q.setTurn(2,500, sqse);




//analogWriteResolution(8);
// analogWriteRange(32255);
// analogWriteFreq(30000);

// pinMode(LED_PIN, OUTPUT);
// digitalWrite(LED_PIN, HIGH);	
pinMode(IN_PIN, INPUT_PULLUP);
attachInterrupt(digitalPinToInterrupt(IN_PIN), dintHandle, FALLING);
Serial.print("\n digitalPinToInterrupt = ");
Serial.println(digitalPinToInterrupt(IN_PIN));
}

void loop() {
	server.handleClient();
 // uint32_t _now = millis();
  //if (_now > ltime + ptime)
  q.proceed();
  // delay(1500);
  // put your main code here, to run repeatedly:
}
