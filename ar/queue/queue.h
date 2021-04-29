#include "Arduino.h"
#ifndef queue_h
#define queue_h


//#define currentCicleSize stopIndex-startIndex

#define CEV events[startIndex]
#define ED EsDt[startIndex]



#define DEFAUT_EVENTS_COUNT 10
#define DEFAUT_TURNS_COUNT 10

class queue{
public:
	queue(uint8_t _sT){
	this->init();
	this->stopIndex = _sT;
	};
	
	~queue(){};
	
public:
	
	
typedef struct ev{ //event Data,
		
		unsigned long nTime; // next Time event allowed;
		
		
} ev;

typedef struct EserviceData{
	bool allowProceed;
	unsigned long pTime; // pause Time;
	void (*action)();
	bool notForbitten; // true = allowed;
} EserviceData;

typedef struct turn{
// triger
void (*d)();
// void itShallBeDone(){
static bool available();	
// }
} turn;
// turn FIFO[DEFAUT_TURNS_COUNT];

turn turns[DEFAUT_TURNS_COUNT];
uint8_t tiStart = 0; //turnIndexStart
uint8_t tiStop = 0;
#define FIFO turns[tiStart]


void add();












	
	void
	init(),
	getED(),
	addED(unsigned long pT, void (*a)()),
	setED(uint8_t i,unsigned long _pT, void (*a)());
	

// protected:
	// unsigned long now();
void go();//proceed();

private:

uint8_t startIndex=0; // i.e current index / pos;
uint8_t stopIndex=0;
//uint8_t EvMemSize = DEFAUT_EVENTS_COUNT;


void memReserv(uint8_t h);
ev events[DEFAUT_EVENTS_COUNT];
EserviceData EsDt[DEFAUT_EVENTS_COUNT]; 
// ev *evt; 
// evt = new ev[DEFAUT_EVENTS_COUNT];
};

#endif
