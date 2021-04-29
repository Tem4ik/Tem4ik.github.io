// #include "Arduino.h"
#include "queue.h"


// queue::queue(uint _sT){
	// this->init();
	// this->stopIndex = _sT;
// }
// queue::~queue(){
	
// }

void queue::init(){
	memset(events, 0, sizeof(events));
	
}

void queue::go(){
	
	// eventsOccur?:_+)
// if(FIFO.available()){
	// FIFO.proceed();
// }
	
	
	unsigned long now = millis();

for (uint8_t i = 0; i < stopIndex; i++)
{	startIndex = i;
	//startIndex = i;
	if(now >= CEV.nTime){
	// CEV.action();
	// ED.allowProceed = true;
	ED.action();	
	CEV.nTime = now + ED.pTime;	
	}	
}


}

void queue::setED(uint8_t i, unsigned long _pT, void (*a)()){
	// if(i>=startIndex and i<stopIndex){
		// this->
		uint8_t index = i;
		EsDt[index].pTime = _pT;
		// this->
		EsDt[index].action = a;
	// } else {Serial.println("setED index out of range");};
	}
	
void queue::addED(unsigned long pT, void (*a)()){
	
	
}
void queue::getED(){
	
	
}


// unsigned long queue::now(){
	// return millis();
// }
