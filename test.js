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
var y = ['car', 'basecikl'];
console.log(typeof(y));
console.log(y[0]);
var check = true;
var result = (check == true) ? (result = "Good") : (result = "Bad");
var arr = [3.14, 5.28, 9.76, 2,64];

window.onload = function () {
	


	

var  user_input = document.querySelectorAll("input.hidden");
var top_bottom = document.querySelector("input[type='submit']");  
top_bottom.addEventListener('click', hide);

  console.log(user_input[0].className) ;
	
function hide () {
    for (var i=0; i<user_input.length; i++) 
    {
      if (user_input[i].className == "hidden") {


		 user_input[i].classList.remove("hidden");

    };
     

};
};

	  
      
      };


	
     
	



  
