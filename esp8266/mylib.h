#pragma once	
#ifndef MYLIB_H
#define MYLIB_H
#include "Arduino.h"


#ifdef  SQL



#include <sql.h>
#include <sqlext.h>
#include <sqltypes.h>
#endif //  SQL



//#include <odbcinst.h>
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>

#define BMP_SCK 13
#define BMP_MISO 12
#define BMP_MOSI 11 
#define BMP_CS 10

#define POST Serial.println("postMsg")
// VCC[0] ---> 3v
// GND[1] ---> gnd
// SCL[2] ---> D1
// SDA[3] ---> D2

#define myl 2
#define myp 3
#define defaultVal 512
#define mPin A0


class mylib
{
public:
	SQLRETURN 
	mylib();
	~mylib();
	Adafruit_BMP280 bme;
	void dummy();
/*	const void(osc::*pt)(int);
	//String getStr();
	int getCount() { return oscy.oscCount; };
	void setCount(int sP);
	unsigned long getDelay() { return oscy.delay; };
	void setDelay(int i);
	void setFrequency(uint w) { oscy.frequency = w; };
	uint16_t ampMeasure() { return analogRead(mPin)*amply.mpower; };
	uint16_t ampMeasure(uint8_t in) { amply.mpower = in; return ampMeasure(); };
	uint16_t sMeasure() { return analogRead(mPin);};*/

	String someData();
	String readBMP();
	String readBMPJSON();
	typedef unsigned long int uli;
	typedef struct sensor {
		uint8_t pin;
		bool input;
		uint16_t value;
		void config() {
			//pinMode(pin, input ? INPUT : OUTPUT);
			pinMode(pin, input ? INPUT_PULLUP : OUTPUT);
			digitalWrite(pin, LOW);
		}
		void read() {
			if (input)
				//value = digitalRead(pin);
			value = analogRead(pin);
		//	validate();
		}

		/*
		void validate() {
			if (value > 1023 | value > 0) //if(val ==0)?
				proceed.activated = true;

		}
		

		struct {
			bool enabled;
			bool activated;
			uli activeTime;
		}proceed;
		*/

	} sensor;
	

	


	uint16_t readSensor(sensor in);
	bool begin(),
		addMem(),
		freeMem();

	sensor soundSens = {
		soundSens.pin = D5,
		soundSens.input = true,
		/*
		soundSens.proceed.enabled = true,
		soundSens.proceed.activated = false,
		soundSens.proceed.activeTime = 0
		*/
	};
	void motion();

	

private:
	
	char *records;

	
	sensor * ptr;

	
	
	void qq();
	

	struct {
		unsigned long int delay=0;
		uint16_t hh;
		uint16_t m;
		uint16_t ss;
		
		void reset() {
			hh = 0;
			m = 0;
			ss = 0;
		}

		void passed() {
			delay = millis();
		}

		void format() {
				ss = delay / 1000;
				m = ss / 60;
				hh = m / 60;
				ss = ss % 60;
				m = m % 60;
		}

		String timestr(){
				String res="";
				res += hh;
				res += ':';
				res += m;
				res +=':';
				res +=ss;
				return res;
			}
	} time;
	
	struct {
		uint16_t date;
		uint16_t mounth;
		uint16_t year;
		
		String datestr(){
			String res ="";
			res += date;
			res += '.';
			res += mounth;
			res += '.';
			res += year;
			return res;
		}
	} calendar;
	
	

};



#endif


