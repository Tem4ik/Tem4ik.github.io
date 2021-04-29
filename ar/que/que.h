#include "Arduino.h"
#ifndef que_h
#define que_h

// #define DEFAULT_BRIGHTNESS 50
// #define DEFAULT_MODE 0
// #define DEFAULT_SPEED 150
// #define DEFAULT_COLOR 0xFF0000

// #define SPEED_MIN 10
// #define SPEED_MAX 1000

// #define BRIGHTNESS_MIN 0
// #define BRIGHTNESS_MAX 255

// #define VAL_MIN 0
// #define VAL_MAX 255
// #define DEFAULT_VAL 1

// #define VAL1_MIN 0
// #define VAL1_MAX 255
// #define DEFAULT1_VAL 1

// #define VE_MIN 1
// #define VE_MAX 128
// #define DEFAULT_VE 1

// #define mPin A0
#define MAX_DELAY 10000
#define DEFAULT_TURNS_NUM 1
#define MAX_NUM_TURNS 10
// #define NUM_COLORS 3     /* number of colors per segment */
#define toTick
#define TURN _turns[_turn_index]
//indexLimit 
#define TURN_RUNTIME  _turn_runtimes[_turn_index]
#define TURN_LENGTH   (TURN.stop - TURN.start + 1)
// #define RESET_RUNTIME    memset(_segment_runtimes, 0, sizeof(_segment_runtimes))
		
class que{

	// typedef uint16_t(WS2812FX::*mode_ptr)(void);
public:
	// queue::queue(){this->init();};
	que(){
		_turns[_turn_index].pTime = 1500;
		_turns[_turn_index].nTime = 0;
		
		
		
	};
	~que();
	

	// turn parameters
public:

	typedef struct turn {
		uint32_t pTime;//delay; pauseTimer; 
		// uint32_t lTime;
		uint32_t nTime;//nextTime, следующий, next time proceed;
		// uint16_t start;
		// uint16_t stop;
		void (*act)();
		//uint8_t num_actions;
	} turn;

	// turn runtime parameters
	typedef struct turn_runtime {
		unsigned long next_time;
		void (*a)();
	} turn_runtime;
	
	
// turn 
	
void init_t();
void getT(),
	getT(uint8_t turn_i),
	setT(uint8_t newNum_turns),
	setT(turn sTurn),
	setTnums(uint8_t ni),
	setTurn(uint8_t i, unsigned long nPtime, void (*ac)()),
	setTurnPtime(uint32_t npTime),
	setAct(void (*na)());
void 
	proceed(),
	pr();
void addTurn();
// void
	// init(),
	// service(),
	// toggleSt(void),
	// settStart(uint16_t s),
	// start(),
	// stop(),
	// trigger(),
	// setNumSegments(uint8_t n);
	
// uint32_t
	// getColor(void);

	// const __FlashStringHelper*
		// getModeName(uint8_t m);

	// WS2812FX::segment*
		// getSegments(void);


uint32_t now;
void tick(){que::now = millis();};



unsigned long int nnow=0;
void tt();
void
	toe(),
	iCicle();
	
boolean
	tack();
	
private:

	
boolean	_running;
	unsigned long int lTim = 0;
	
		// _triggered;



	// const __FlashStringHelper*
		// _name[MODE_COUNT];

	// mode_ptr
		// _mode[MODE_COUNT];

	uint8_t _turn_index = 0;
	uint8_t _num_turns = DEFAULT_TURNS_NUM;
	turn _turns[MAX_NUM_TURNS];
	// = { // must explicitly set array size
											// mode, color[], speed, start, stop, reverse
		// {0,{ DEFAULT_COLOR }, DEFAULT_SPEED, 0, 9, false }
	// };
	turn_runtime _turn_runtimes[MAX_NUM_TURNS];
};


#endif
