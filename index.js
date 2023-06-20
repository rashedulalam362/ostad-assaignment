// Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function dateObject(dateString){
 
   //date string 
   let date= new Date(dateString)
   
   //dayof the week
   let daysWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 

   let dayWeek=daysWeek[date.getDay()]
   console.log(dayWeek);
   return dayWeek

}

// const date = '2023-06-20';

const result =dateObject('2023-06-20')
console.log(result);






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
 




interResult=integerNumber(8)
console.log(interResult); // Output: true

// .Window Object:


// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

// function openWindow (url,width,height){
//    let leftSide=(window.innerWidth -width)/2;
//    let top=(window.innerWidth -width)/2;
//    window.open(url, "_blank", `width=${width}, height=${height}, leftSide=${leftSide}, top=${top}`);

 
// }

 
// const windowResult =openWindow("https://www.amybd.com/index?v=987654490", 800, 600)

// console.log(windowResult);
   
 
// 5.Navigator Object

function getBrowserInfo() {
   var browserName = navigator.appName;
   var browserVersion = navigator.appVersion;
  
}

getBrowserInfo()

// 6.Geolocation

  function userCuurentLocation() {
   var fun=navigator.geolocation.getCurrentPosition((position)=>{
    
      var longitude=position.coords.longitude;
      var latitude=position.coords.latitude;

      document.write('latitude ' + latitude)
      document.write('altitude  ' + longitude)
     
    })
   
   return fun

  }

 let  userCuurentLocationresult=userCuurentLocation()
  console.log(userCuurentLocationresult);


  //7.JS Common Events:

  function getRequest(){
   alert('Get request')
  }
 
  function keydown(){
   alert('Get keydown')
   log('Get keydown')
  }
//   8.HTML DOM Document:



function validateForm() {
   var nameField = document.getElementById("name");
   var nameValue = nameField.value.trim();
   var namePattern = /^[A-Za-z]+$/;
   var nameError = document.getElementById("nameError");

   if (nameValue === "") {
     nameError.textContent = "Please enter your name.";
     nameField.focus();
     return false;
   }

   if (!namePattern.test(nameValue)) {
     nameError.textContent = "Name should contain only letters.";
     nameField.focus();
     return false;
   }

   nameError.textContent = "";

   var emailField = document.getElementById("email");
   var emailValue = emailField.value;
   var emailError = document.getElementById("emailError");

   if (emailValue === "") {
     emailError.textContent = "Please enter your email.";
     emailField.focus();
     return false;
   }

   emailError.textContent = "";

   var passwordField = document.getElementById("password");
   var passwordValue = passwordField.value;
   var passwordError = document.getElementById("passwordError");

   if (passwordValue.length < 8) {
     passwordError.textContent = "Password should be at least 8 characters long.";
     passwordField.focus();
     return false;
   }

   var confirmPasswordField = document.getElementById("confirmPassword");
   var confirmPasswordValue = confirmPasswordField.value;
   var confirmPasswordError = document.getElementById("confirmPasswordError");

   if (passwordValue !== confirmPasswordValue) {
     confirmPasswordError.textContent = "Confirm Password does not match Password.";
     confirmPasswordField.focus();
     return false;
   }

   var hasUppercase = /[A-Z]/.test(passwordValue);
   var hasLowercase = /[a-z]/.test(passwordValue);
   var hasDigit = /\d/.test(passwordValue);
   var passwordRequirementsError = "";

   if (!hasUppercase) {
     passwordRequirementsError += "Password should contain at least one uppercase letter. ";
   }

   if (!hasLowercase) {
     passwordRequirementsError += "Password should contain at least one lowercase letter. ";
   }

   if (!hasDigit) {
     passwordRequirementsError += "Password should contain at least one digit. ";
   }

   if (passwordRequirementsError !== "") {
     passwordError.textContent = passwordRequirementsError;
     passwordField.focus()
   }



   }



   // 10.DOM Manipulate CSS Class:

function backgroungdImgaeChanged() {

   let myPara=document.getElementById('my-para')
     myPara.style.background='red'
   
}

function removeBackgroungdImgaeChanged() {
   let myPara=document.getElementById('my-para')
     myPara.style.background='none'
}


//11.Create Element & Append Element:


function adItems() {
   let inputValue=document.getElementById('input').value;
   let  listItems=document.createElement('li');
    listItems.innerHTML=inputValue;
  var  LitsItem=document.getElementById('list-items');
  LitsItem.appendChild(listItems)
 
}


// 12.DOM Change Attribute Value:

 function imageChange() {

   myImg=document.getElementById('img')
   myImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZUd44biMmyIlKY0g70iDnH3XqxtnPNROkQ&usqp=CAU"
   myImg.width="200"
   myImg.height='200'
   
 }

//13.DOM Query Selector:

function querySelectorfun() {
   document.querySelector("#my-id").style.color='red';
   document.querySelector(".my-class").style.color='red';
   document.querySelector("p[name='my-tag']").style.color='red';
      
}

// 14.AJAX Get Request:

function getApiRequest() {

   const url='https://jsonplaceholder.typicode.com/posts'
   const confiquration={method:"GET"}
   fetch(url, confiquration)
   .then(response => response.json())
   .then(data=>{
      console.log(data);
   })
   .catch(err => console.log(err));
    
   
}


function postApiRequest() {

   fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
   "name": "John Doe", "email": "johndoe@example.com"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
   
}

