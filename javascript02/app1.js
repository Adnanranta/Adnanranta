//1. Write a JavaScript program that accepts two numbers in two prompts and
//displays the larger one in the console.
// Answer
let number1 =prompt("input number");
let number2 =prompt("input number2");

if(number1 > number2)
{
    console.log(number1);
}
else if(number1 < number2)
{
    console.log(number2);
}

//--------------------------------------------------------------------------
//2. Write a JavaScript conditional statement to find the sign of a number. Display
//an alert box with the specified sign.
let number = prompt("Enter a number?");

if (number > 0) {
    alert(" The sign is +");
  } else if (number < 0) {
    alert(" The sign is -");
  } 
  //--------------------------------------------------------------------------
  // 3 : Write a JavaScript program that accepts five numbers in five prompts and
//displays the larger one in the console.
let number_1 =prompt("input number1");
let number_2 =prompt("input number2");
let number_3 =prompt("input number3");
let number_4 =prompt("input number4");
let number_5 =prompt("input number5");

let largest =number_1;
if(number_2 > largest)
{
    largest=number_2;
    
}
else if(number_3 > largest)
{
    largest=number_3;
}
if(number_4 > largest)
{
    largest=number_4;
}
else if(number_5 > largest)
{
    largest=number_5;
}
console.log("The largest number is " +largest);


if(number1 > number2)
{
    console.log(number1);
}
else if(number1 < number2)
{
    console.log(number2);
}
//-------------------------------------------------------------------------
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
//will check if the current number is odd or even, and display a message to the
//screen.

for(let i=0; i <= 15 ; i++)
{
    if (i % 2 === 0) {
        console.log(i + " is even");
      } else {
        console.log(i + " is odd");
      }
}

//-------------------------------------------------------------------------
//Write a JavaScript program which computes the average marks of the
//following students Then, this average is used to determine the corresponding
//grade
//
//The grades are computed as follows :
//Range Grade
//<60 F
//<70 D
//<80 C
//<90 B
//<100 A

let studentMarks = [60, 70, 80, 90, 100];
let totalMarks = 0;

for (let i = 0; i < studentMarks.length; i++) {
  totalMarks += studentMarks[i];
}

let averageMarks = totalMarks / studentMarks.length;

console.log("The average marks are: " + averageMarks);

 if (averageMarks >= 100) {
  console.log("Range Grade: A");
} else if (averageMarks >= 90) {
  console.log("Range Grade: B");
} else if (averageMarks >= 80) {
  console.log("Range Grade: C");
}
else if (averageMarks >= 70) {
    console.log("Range Grade: D");
  }
 else {
  console.log("Range Grade: F");
}
//------------------------------------------------------------------------------------------------
//06 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five
//print "Buzz". For numbers which are multiples of both three and five print
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
//7 Write a JavaScript program to construct the following pattern, using a nested
//for loop.
let rows1 = 5;

for (let i = 1; i <= rows1; i++) {
  let star1 = "";

  for (let j = 1; j <= i; j++) {
    star1 += "* ";
  }

  console.log(star1);