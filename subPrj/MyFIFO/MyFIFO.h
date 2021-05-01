#include "Arduino.h"
#ifndef MyFIFO_h
#define MyFIFO_h




class MyFIFO{
public:

	MyFIFO():Head(nullptr), Tail(nullptr), Next(nullptr){};
	int value, size;
	void (*a)();
	unsigned long pTime,nTime = 0;
	MyFIFO *Head, *Tail, *Next;
	// int count = 0;
	// MyFIFO::count = 0;
void 
	add(int _val),
	add(int _val, void (*_a)(), unsigned long _pTime),
	proceed(const int qq),
	proceed(),
	show(const int ww),
	show(),
	del();
};

#endif
