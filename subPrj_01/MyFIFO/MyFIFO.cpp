// #include "Arduino.h"
#include "MyFIFO.h"




void MyFIFO::add(int _val){
	static int count = 0;
	/////////////////////////
	MyFIFO *temp = new MyFIFO;
	Next = nullptr;
	temp->value = _val;
	if (Head != nullptr){
		Tail->Next = temp;
		Tail = temp;
	}
	else Head = Tail = temp;
	/////////////////////////
	if (size == 0) count = 0;
	count++;
	size = count;
	Tail->Next = Head;
}


void MyFIFO::add(int _val, void (*_a)(), unsigned long _pTime){
	static int count = 0;
	/////////////////////////
	MyFIFO *temp = new MyFIFO;
	Next = nullptr;
	
	
	temp->value = _val;
	temp->a= _a;
	temp->pTime = _pTime;
	if (Head != nullptr){
		Tail->Next = temp;
		Tail = temp;
	}
	else Head = Tail = temp;
	/////////////////////////
	if (size == 0) count = 0;
	count++;
	size = count;
	Tail->Next = Head;
}


void MyFIFO::proceed(){
	this->proceed(size);
}


void MyFIFO::proceed(const int qq){
	if(!Head) return;
	static unsigned long now = 0;
	now = millis();
	
	MyFIFO *temp = Head;
	
	
	//while(temp!=Tail->Next){
		 for(int i = 0; i < qq; i++){
		if (now > temp->nTime){
			Serial.print(now);
			Serial.print(" ");
			Serial.print(temp->value);
			Serial.print(" ");
			Serial.print(size);
			Serial.print(" "); 
			temp->a();
			temp->nTime = now + temp->pTime;
			
		}
		temp = temp->Next;
	}
}


	// void MyFIFO::show(){
	// MyFIFO *temp = Head;
	// while (temp != Tail->Next) {
	// Serial.println(temp->value);
	// temp = temp->Next;
	// }
	// }


void MyFIFO::show(const int ww){
	if(!Head){
	  Serial.println("Empty list");
	  return;
	}

	MyFIFO *temp = Head;
	for(int i = 0; i < ww; i++){
		Serial.println(temp->value);
		temp = temp->Next;	
	}
}


void MyFIFO::show(){
	if(!Head){
		Serial.println("Empty list");
		return;
	}	
	
	MyFIFO *temp = Head;

	while (temp != Tail->Next){
    Serial.println(temp->value);
    temp = temp->Next;
  }
	
}


void MyFIFO::del(){
	if(!Head)return;
	  MyFIFO *temp = Head;
  while (temp != Tail) {
    temp = Head;
    Head = Head->Next;
    Serial.print("Delete part with val ="); Serial.println(temp->value);
    delete temp;
  }
  size = 0;
  
}


//////////////////////////////////////////////////////////////////////////////////////
// #include "Arduino.h"
// #ifndef MyFIFO_h
// #define MyFIFO_h




// class MyFIFO{
// public:

	// MyFIFO():Head(nullptr), Tail(nullptr), Next(nullptr){};
	// int value;
	// int size;
	
	// MyFIFO *Head, *Tail, *Next;
// void 
	// add(int _val),
	// show(const int ww),
	// show(),
	// del();
// };

// #endif



//////////////////////////////////////////////////////////////////////////////////////
// #include "MyFIFO.h"
// void MyFIFO::add(int _val){
	// static int count = 0;
	///////////////////////
	// MyFIFO *temp = new MyFIFO;
	// Next = nullptr;
	// temp->value = _val;
	// if (Head != nullptr){
		// Tail->Next = temp;
		// Tail = temp;
	// }
	// else Head = Tail = temp;
	///////////////////////
	// if (size == 0) count = 0;
	// count++;
	// size = count;
	// Tail->Next = Head;
// }



// void MyFIFO::show(){
	  // MyFIFO *temp = Head;
  // while (temp != Tail->Next) {
    // Serial.println(temp->value);
    // temp = temp->Next;
  // }
// }

// void MyFIFO::show(const int ww){
	  // if(!Head){
		  // Serial.println("Empty list");
		  // return;
	  // }
	  
	  // MyFIFO *temp = Head;
 // for(int i = 0; i < ww; i++){
    // Serial.println(temp->value);
    // temp = temp->Next;
  // }
// }

// void MyFIFO::show(){
	  // MyFIFO *temp = Head;

  // while (temp != Tail->Next) {
    // Serial.println(temp->value);
    // temp = temp->Next;
  // }
	
// }
// void MyFIFO::del(){
	// if(!Head)return;
	  // MyFIFO *temp = Head;
  // while (temp != Tail) {
    // temp = Head;
    // Head = Head->Next;
    // Serial.print("Delete part with val ="); Serial.println(temp->value);
    // delete temp;
  // }
  // size = 0;
  
// }
