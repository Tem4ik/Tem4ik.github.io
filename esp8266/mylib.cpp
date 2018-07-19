#include "mylib.h"
/*#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>*/



 // I2C
//Adafruit_BMP280 bme(BMP_CS); // hardware SPI
//Adafruit_BMP280 bme(BMP_CS, BMP_MOSI, BMP_MISO,  BMP_SCK);
  

mylib::mylib ()
{
}


mylib::~mylib()
{
}

void mylib::dummy(){

}

void mylib::qq() {
	
}

String mylib::someData() {
	String res = "";
	time.passed();
	time.format();
	res = time.timestr();
	return res;
}


/*
String osc::getStr() {	

	String res = "{\"Measures\":[";
	delayMicroseconds(oscy.delay);
	int w = oscy.oscCount;
	for (int i = 0; i < w; i++) {
		res += analogRead(mPin);
		res += ",";
	}
	res[res.length() - 1] = ']';
	res += "} ";
	return res;
}
*/
void mylib::motion() {
	/*
	for ptr.count && ptr.proceeed.enabled
		read();
		validate proceed struct
		}

		memoryManager(); => counts of record
							free Heap;
							reserve memory()
							free memory()

							transact {deploy data to DB then free/relocate memory}
	*/
}

uint16_t mylib::readSensor(sensor in) {
	in.read();
	return in.value;
}

bool mylib::begin() {
	soundSens.config();
	return true;
}

bool mylib::addMem() {
	char *records = new char[15];
	if (records == 0 | records == NULL)
		return false;
	return true;
}

bool mylib::freeMem() {
	delete[]records;
	return true;
}

String mylib::readBMP() {
	if (!bme.begin())
		return "Can't read BMP sendor";
	String res = "";
	res += "Temperature = ";
    res += bme.readTemperature();
    res += "*C";
    
    res += "  Pressure = ";
    res += bme.readPressure();
    res += " Pa";

    res += "Approx altitude = ";
    res += bme.readAltitude(1013.25); // this should be adjusted to your local forcase
    res += " m";
    
    return res;
}

String mylib::readBMPJSON() {
#ifdef REPORT
	POST;
#endif // REPORT

	//{"BMP":{"Temperature":2, "Pressure" : 12, "altitude" : 33}}
	if (!bme.begin())
		return "Can't read BMP sendor";

	String res = "";
		res += "{\"BMP\":{\"Temperature *C\":";
		res += bme.readTemperature();

		res += "  ,\"Pressure Pa\": ";
		res += bme.readPressure();

		res += ", \"Approx altitude m\": ";
		res += bme.readAltitude(1013.25);

		res += "}}";
	return res;
}