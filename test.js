"use strict";


// let apples = 10;

// if (true) {

// let apples = 5;
// console.log(apples);

// }

// console.log(apples);

// var a = 'test';
// var b = 10.57;
// console.log(a.length);
// console.log(b.toFixed(1));
// var n = new String('test');
// console.log(n.length);
class Car {

constructor (lenght = 3, speed = 300, speedTo, distans) {

	this.lenght = lenght;
	this.speed = speed;
	this.speedTo = speedTo;
	this.distans = distans;
}

 hors_1 (speedTo, distans) {


var time = this.distans / this.speedTo;
// if (time != undefined) {
// console.log(this.time);  
// }
// else {
// 	time = "Не визначено!!!";
// }
 
return time;
}



}


var BMW = new Car(4, 270, 600, 300);


console.log(BMW.hors_1(500, 300)); 