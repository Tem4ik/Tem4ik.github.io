// #include "Arduino.h"
#include "que.h"
#include <que.h>
//#define CALL_MODE(n) (this->*_mode[n])();




que::~que(){
	
// void queue::init() {
}
	// RESET_RUNTIME;
	
void que::init_t(){
	for(uint8_t i = 0; i < _num_turns; i++){
		_turn_index = i;
		TURN.pTime = 1000;
		Serial.print("index is: = ");
		Serial.println(i);
	}
}	
	
void que::getT(){
	
	
}

void que::setTnums(uint8_t ni){
	if (ni > 0 || ni < MAX_NUM_TURNS)
	this->_num_turns = ni;
}

void que::setTurnPtime(uint32_t npTime){
	_turns[_turn_index].pTime = npTime;
}

void que::setAct(void (*na)()){
	TURN.act = na;
}
void que::setT(uint8_t newNum_turns){
	if (newNum_turns > 0 || newNum_turns < MAX_NUM_TURNS)
	_num_turns = newNum_turns;
}

void que::proceed(){
	
	// que::tick();
	this->tt();
	// que::now = millis();
	if(this->tack()){
		this->toe();
		// this->_turns[_turn_index].nTime = this->nnow + this->_turns[_turn_index].pTime;
		// Serial.print(" _turns[i].pTime = ");
		// Serial.println(this->_turns[_turn_index].pTime);
	}
	// else{
	iCicle();
	// }
}

// static void que::tick(){
	// que::now = millis();
// }

void que::tt(){
	this->nnow = millis();
	// Serial.print("\nnnow is = \n");
	// Serial.println(this->nnow);
}

boolean que::tack(){
	if(this->nnow > this->TURN.nTime){
		this->TURN.nTime = this->nnow + this->TURN.pTime;
		return true;
	}
	else {
		return false;
	}
}

void que::iCicle(){
	// _turn_index++;
	// (this->_turn_index < this->_num_turns - 1)?this->_turn_index++:this->_turn_index = 0;
	if (this->_turn_index < this->_num_turns - 1){
	this->_turn_index++;}
	else {
	this->_turn_index = 0;}
	// Serial.print("\nturn index = ");
	// Serial.println(this->_turn_index);
	// if (_turn_index < _num_turns)
	// bqeak;
	// else _turn_index = 0;
	
}


void que::toe(){
	//this->TURN.act();
	this->_turns[_turn_index].act();
			
		// Serial.print("turns[i].pTime = ");
		// Serial.println(this->_turns[_turn_index].pTime);
		// Serial.print(this->_turns[_turn_index].nTime);
}

void que::setTurn(uint8_t i, unsigned long nPtime, void (*ac)()){
	// if ((0 =< i) and (i < this->_num_turns - 1))
	
	this->_turns[i].pTime = nPtime;
	this->_turns[i].act = ac;
}
// }

void que::pr(){
	
		// Serial.print("\n\n\tque::pr \t LIST of each TURN.pTime in _num_turns\n");
	for (uint8_t i = 0; i < _num_turns; i++){
		_turn_index = i;
		Serial.print("\n TURN.pTime = ");
		Serial.println(TURN.pTime);
		if(TURN.pTime == 0)
		TURN.pTime = _turn_index*1000;
	}
	
}

// void queue::service() {
	// if (_running || _triggered) {
		// unsigned long now = millis(); // Be aware, millis() rolls over every 49 days
		// bool doShow = false;
		// for (uint8_t i = 0; i < _num_segments; i++) {
			// _segment_index = i;
			// if (now > SEGMENT_RUNTIME.next_time || _triggered) {
				// doShow = true;
				// uint16_t delay = (this->*_mode[SEGMENT.mode])();
				// SEGMENT_RUNTIME.next_time = now + max(int(delay), 4);
				// SEGMENT_RUNTIME.counter_mode_call++;
			// }
		// }
		// if (doShow) {
			// turnAction();
		// }
		// _triggered = false;
	// }
// }

// void queue::toggleSt(void) {
	// if(SEGMENT.reverse) start();
	// else stop();
	// if (_running) stop();
	// else start();
// }

// void queue::settStart(uint16_t s) {
	// if (SEGMENT.reverse)
		// _segments[0].start = constrain(s, 0, _segments[0].stop);
	// else _segments[0].stop = constrain(_segments[0].stop - s, 0, _segments[0].stop); 			//OR
// }

// void queue::start() {
	// RESET_RUNTIME;
	// _running = true;
// }

// void queue::stop() {
	// _running = false;
	// strip_off();
// }

// void queue::trigger() {
	// _triggered = true;
// }

// void queue::setNumSegments(uint8_t n) {
	// _num_segments = n;
// }

// uint32_t queue::getColor(void) {
	// return _segments[0].colors[0];
// }

// queue::segment* queue::getSegments(void) {
	// return _segments;
// }

// const __FlashStringHelper* queue::getModeName(uint8_t m) {
	// if (m < MODE_COUNT) {
		// return _name[m];
	// }
	// else {
		// return F("");
	// }
// }
