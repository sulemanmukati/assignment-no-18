// chapter 9-10
// Q1

var cityName = prompt("Please enter your city name:");
if(cityName === "karachi") {
    alert("Welcome to city of lights");
}
else {
    alert("Welcome to " + cityName);
}

// Q2

var gender = prompt("Please enter your gender");
if (gender === "male") {
 alert ( "Good Morning Sir.");
}
 else if (gender === "female") {
  alert ( "Good Morning Maam.");
}
 else {


  alert ( "Good Morning.");
}

// Q3

var color = prompt("Please enter color of road traffic signal");
if (color === "red") {
 alert ( "Must stop");
}
 else if (color  === "yellow") {
  alert ( "Ready to move");
}
 else if (color  === "green") {
    alert ( "Move now");
}
else {
  alert ( "not found");
}

// Q4

var remaningFuel = prompt("Please enter the remaing fuel in your car (in litters)..");

if (remaningFuel < 0.25) {
 alert ("Please refill the fuel in your car");
}
 else {
  alert ( "your fuel level is sufficiant");
}

// Q5
// a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is false");
}
// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e
if  (true){
alert("True");
}
if(false){
alert("False");
}

// Q6
var subject1 = 76
var subject2 = 73
var subject3 = 70
var totalMarks = 300
var marksObtained = subject1 + subject2 + subject3;
var percentage = (marksObtained / totalMarks) * 100;
var grade, remarks;
if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} 
else {
    grade = "Fail";
    remarks = "sorry";
}
document.write("<h1>Mark sheet</h1>"+"Total Marks: " + totalMarks + "<br>" + "Marks obtained : " + marksObtained + "<br>" +"Percentage: " + percentage + "%<br>" +"Grade: " + grade + "<br>" +"Remarks: " + remarks);


// Q7
var secretNumber = 5; 
var userGuess = +prompt("You guess one number in (1 to 10)");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer");
} else {
    alert("sorry! worng anwser.Try again .");
}

// Q8
var number = +prompt("enter a number:");
    
if (number % 3 === 0) {
    alert(number + " if the number is divisible by 3.");
} else {
    alert(number + " if the number is not divisible by 3.");
}


// Q9
var number = +prompt("enter a number:");
if (number % 2 === 0) {
alert(number + " is a even number.");
} 
else {
alert(number + "is a odd number.");
}


// Q10
var temperature = +prompt("Today's temperature in (Celsius):");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("Extremely Cold weather.");
}

// Q11

var num1 = +prompt("enter a first number:");
var num2 = +prompt("enter a second number:");
var operation = prompt("enter a Operation  (+, -, *, /, %):");
var result;

if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
}
else if (operation === '/') {
        result = num1 / num2;
} 
else if (operation === '%') {
    result = num1 % num2;
}
 else {
     alert("Invalid operation.");
     
}

alert("Result: " + result);


// Chapter no 12 - 13

// Q1
var input = prompt("enter a (character or number ):");
var charCode = input.charCodeAt(0);

if (input >= 0 ) {
    alert("it's a number.");
} else if (charCode >= 65 && charCode <= 90) {
    alert("it's uppercase letter .");
} else if (charCode >= 97 && charCode <= 122) {
    alert("it'S lowercase letter .");
} else {
    alert("This is not a number and not an English letter");
}


// Q2
var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

if (num1 > num2) {
    alert("The larger integer is: " + num1);
} else if (num2 > num1) {
    alert("The larger integer is: " + num2);
} else {
    alert("Both integers are equal.");
}


// Q3
var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// Q4













// Q5


var userPassword = prompt("Enter your pasword: ");
var correctPassword = prompt("correctPassword");

if (userPassword === "") {
    alert("Please enter your pasword.");
} else if (userPassword === correctPassword) {
    
    alert("Correct! The password you entered matches the original password.");
} else {
    
    alert("Incorrect password.");
}

// Q6
var greeting ;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
 else {
    greeting = "Good evening";
}



// Q7
var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");
time = parseInt(time);
if (time >= 0 && time <= 2400) {
    if (time >= 500 && time <= 1199) {
        alert("Good morning!");
    }
    else if (time >= 1200 && time <= 1699) {
        alert("Good afternoon!");
    }

    else if (time >= 1700 && time <= 2099) {
        alert("Good evening!");
    }
    else {
        alert("Good night!");
    }
 } else {
     alert("Please enter a valid time in 24-hour format (0000 to 2400).");
 }




// Chapter no 10 (if statements)
// Q1
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City Of Lights");
}

// Q2

    var userValue = prompt("What is the value of z?");
    var z = userValue
    console.log(z);


// Q3
var ZipCode = +prompt("enter a zip code" + "10010" );
if (ZipCode === 10010) {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// Q4
var x = 1;
if (x === 1) {
    x = 1;
}
console.log(x);



// Chapter 11 (Comparison Operators)
// Q1
var variable1,variable2
if (variable1 != variable2){}

//Q2
if (variable1 >= variable2) {}

// Q3
let myVariable = 5; 

if (myVariable != 10) {
    myVariable = 10; 
}
// Q4
var number1 = 5;
var number2 = 10;

if (number1 != number2) {
    alert("Congratulations!");
}


// Chapter 13 (Testing sets of conditions)

// Q1
// if (a === b && c === d) {}
// else{}


// // Q2
// if (a === b || c != d) {}
// else{}

// // Q3
// if ((name1 === "Hamza" || name2 === "Arsalan") && age < 60) {}
// else{}

// // Q4
// var firstNumber = 5;
// var secondNumber = 10;
// if (firstNumber < secondNumber || firstNumber > secondNumber) {
//     alert("The first variable is either less than or greater than the second variable.");
// }


// Q5
var firstName = "suleman"; 
var lastName = "mukati";
var enteredFirstName = prompt("Enter your first name:");
var enteredLastName = prompt("Enter your last name:");


if (enteredFirstName === firstName && enteredLastName === lastName) {
    alert("Your answers match the variables!");
} else {
    alert("Your answers do not match the variables.");
}



// Chapter 14 (If statements nested)
// Q1
let password = +prompt("Enter your password:");

if (password !== "") {
   if (password.length <= 5) {
        alert("Password must be greater than 5 characters.");
    } else {
        alert("OK");
    }
} else {

    alert("Password cannot be empty.");
}

// Q2
var a = 1;
var c = "Max";

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
else{
    
}

// Q3
// if (a === 1 && c === "Max") {
//     alert("OK");
// }



// Q4
let firstNumber = 10;
let secondNumber = 10;

if (firstNumber === secondNumber) {
        if (firstNumber <= secondNumber) {
        // Display an alert message if both conditions are true
        alert("The test passes.");
    }
}
else{}





