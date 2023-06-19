// Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function dateObject(dateString){
 
   //date string 
   let date= new Date(dateString)
   
   //dayof the week
   let daysWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 

   let dayWeek=daysWeek[date.getDay()]
   // console.log(dayWeek);
   return dayWeek

}

const date = '2023-06-19';

const result =dateObject(date)
// console.log(result);


// Implement the function to display the day of the week for the current date.

function getCurrentDayOfWeek() {
   const currentDate = new Date();
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const dayOfWeek = currentDate.getDay();
 
   return daysOfWeek[dayOfWeek];
 }
 
 // Usage
 const currentDayOfWeek = getCurrentDayOfWeek();
//  console.log(currentDayOfWeek); // Output: e.g., "monday"


//  2.Math Object:
// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

function squareRootfunc(numbers) {
   var sum = 0;
 
   // Calculate the sum of squares
   for (var i = 0; i < numbers.length; i++) {
      sum += Math.pow(numbers[i], 2);
   }
 
   // Calculate the square root
   var squareRoot = Math.sqrt(sum);
 
   return squareRoot;
 }
 
 // Example usage
 var numbers = [6, 4, 5];
 var squareRootResult = squareRootfunc(numbers);
 console.log(squareRootResult); // Output: 8.774964387392123
 

//  3.Numbers:

// Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false


function integerNumber(number) {
   let integer=Number.isInteger(number)
   return integer
   
}
 
let number=6.4



interResult=integerNumber(number)
console.log(interResult); // Output: true

// .Window Object:


// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

function openWindow (url,width,height){
   let leftSide=(window.innerWidth -width)/2;
   let top=(window.innerWidth -width)/2;
   window.open(url, "_blank", `width=${width}, height=${height}, leftSide=${leftSide}, top=${top}`);

 
}

setInterval(()=>{
  window.close()
},6000)
 
const windowResult =openWindow("https://www.example.com", 800, 600)

console.log(windowResult);
   
 




