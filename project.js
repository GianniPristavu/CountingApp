//console.log(`Hello`);
//console.log(`I like pizza`);

//window.alert(`This is an alert!`);
//window.alert(`I like pizza!`);

//This is a comment
//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza!`;

//let x;
//x = 100;
//let firstName = "Bro";
//let age = 25;
//let price = 10.99;
//let gpa = 2.1;
//console.log(typeof gpa);
//console.log(`You are ${age} years old`);
//console.log(`The price is $${price}`);
//console.log(`Your gpa is: ${gpa}`);

//let online = true;

//console.log(`Bro is online: ${online}`);

//let fullName = "pristavu gianni";
//let age = 23;
//let inSchool = true;

//document.getElementById("p1").textContent = `Your name is ${fullName}`;
//document.getElementById("p2").textContent = `You are ${age} years old`;
//document.getElementById("p3").textContent = `Enrolled: ${inSchool}`;


//let students = 30;

//students = students - 1;
//students = students + 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;


//let result = 12 % 6 + 3 + 4 ** 2;

//console.log(result);


//easy way
//let username;

//username = window.prompt("What's your username?");

//console.log(username);
//let username;
//document.getElementById("mySubmit").onclick = function(){
    //username = document.getElementById("myText").value;
    //document.getElementById("MyH1").textContent = `Hello ${username}`
//}


//let age = window.prompt("How old are you?");
//age = Number(age);
//age+=1;
//console.log(age, typeof age);

//let x = "0";
//let y = "0";
//let z = "0";

///x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

//const PI = 3.14159;
//let radius;
//let circumference;


//radius = Number(radius);

//circumference = 2 * PI * radius;

//document.getElementById("mySubmit").onclick = function(){
   //radius = document.getElementById("myText").value;
    //radius = Number(radius);
    //circumference = 2 * PI * radius;
    //document.getElementById("myH3").textContent = circumference + "cm";
//}

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}