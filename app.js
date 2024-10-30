//////////////////////Assignment # 21-25 ////////////////////////

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your irst name")
// var lastName = prompt ("Enter your last name")
// var fullName = firstName + lastName
// document.write("Welcome!" + " "+ fullName)

////////////////////////////////////////////////////////////////////////

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser.

// var favMobile = prompt("What is your favourate mobile model?" )
// var length = favMobile.length;
// document.write("My favourate phone is :" + " " + favMobile + "</br>" + "Length of string" +" " + length);

/////////////////////////////////////////////////////////////////////////

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var country = "Pakistani"
// document.write("String :" + " " + country + " " + "</br>"+ " " +"Index of 'n' is :" +  country.indexOf("n"));

///////////////////////////////////////////////////////////////////////

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var str = "Hello World";
// document.write("String :" + " " + str + "</br>" + "Last indexof l is :" + " " + str.lastIndexOf("l")) 

// /////////////////////////////////////////////////////////////

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var country = "Pakistani";
// document.write("String :" + country + "</br>" + "Character at 3rd index is :" + " "+ country.charAt(3))

///////////////////////////////////////////////////////////////

// 6. Repeat Q1 using string concat() method.

// var fName = "KIRAN";
// var lName = "AHMED";
// document.write(fName+ " " + lName)

/////////////////////////////////////////////////////////////////

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city = " Hyderabad";
// var newCity = city.replace("Hyder" , "Islam")
// document.write(newCity);

//////////////////////////////////////////////////////////////////////

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and  football together.";

// for(var i = 0 ; i <= message.length-1 ; i++){
//     if(message.slice(i , i + 3) === "and"){
//         message = message.slice(0 ,i ) + "&" + message.slice(i+3)
//     }
// }
// document.write(message)

////////////////////////////////////////////////////////////////

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var string = "472"
// document.write("value :" + string + "</br>" +"typeof :"+  typeof string + "</br>")
// string = parseInt(string);
// document.write("value :" + string + "</br>" +"typeof :"+  typeof string)

///////////////////////////////////////////////////////////////////////////

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// var userInput = prompt("Enter any thing")
// document.write("userinput :" + userInput + "</br>" + "Input : "+ userInput.toUpperCase())

////////////////////////////////////////////////////////////////

// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// var userInput = prompt("Enter anything ;")
// var words = userInput.toLowerCase().split(" ");

// for(var i=0; i<=words.length-1 ; i++){
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1) ;
// }
// var title = words.join( " ")
// document.write( "Userinput : " + userInput + "</br>" + "Titlecase : " + title)

/////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var string = num.toString().replace("." , "")
// document.write(string)

//////////////////////////////////////////////////////

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// var username = prompt("Enter your username:");
//   var isValid = true;
//   for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//       isValid = false;
//       break;
//     }
//   }
//   if (!isValid) {
//     alert("Username contains invalid characters. Please enter a valid username without @, ., , or !");
//   } else {
//     alert("Username is valid: " + username);
//   }

//////////////////////////////////////////////////////////////////

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. 

// var items = ["cake", "apple pie”", "cookie", "chips", "patties"];
//   var userItem = prompt("Welcome to ABC bakery. What do you want to order sir/ ma'am ");
//    var flag = "No"
//   for( var i =0 ; i<=userItem.length-1 ; i++){
       
//        if( userItem === items[i]){
//         flag = "Yes";
//         alert(userItem +" " + "is available in index" +" " + [i]+ " " +"in our bakery")
//        break;
// }
//   }
//   if(flag === "No"){
//   alert("Sorry "+" " + userItem +" " +" is not available")}

////////////////////////////////////////////////////////////////////////////////

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter your password")
// var charLength =password.length >=6
// var alpha = "a-zA-Z";
// var num = 0-9;
// var start = "a-zA-Z"

// for (var  i = 0; i = password.length; i++){
// if(charLength && alpha && num && start){
//     alert("You enter correct password")
//     break;
// }
//  if(password !== start){
// alert(" Password can not bigin with a number")
//  break;  
//  }
//  else{
//     alert("Please enter a valid password")} 
// }

//////////////////////////////////////////////////////////////////////

// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";

//    var universityArray = university.split("");
//    for( var i = 0 ; i < universityArray.length ; i++){
//     document.write( universityArray[i] + "</br>")
// }

 /////////////////////////////////////////////////////////////////////////////////

//  17. Write a program to display the last character of a user 
// input.

// var userChar = prompt("Enter any word ") 
// var lastChar = userChar.charAt(userChar.length-1)
// document.write(" User input : " + userChar + "</br> "+ "The last character of user input is : " + lastChar);

/////////////////////////////////////////////////////////////////////////////////

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// var string = "The quick brown fox jumps over the  lazy dog ."
// var convertSmall = string.toLowerCase();
// var strArray = convertSmall.split(" ")
// var count = 0 ;
// for(var i = 0 ; i < strArray.length ; i++ ){
//     if(strArray[i] === "the"){
//         count++;
//     }  
// }
// document.write("Text : " + string + "</br>" + "There are "+ count + " occurrence(s) of the world 'the'");

////////////////////////////////////////////////////////////////////////chpter 6 t0 9 /////////////////////

// 2: What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--

// var a = 2, b = 1;
// var result = --a ;
// document.write( "a is : " + result + "</br>")
// result = --a - --b;
// document.write( "ab is : " + result+"</br>");
// result = --a - --b + ++b;
// document.write( "abb is : " + result + "</br>")
// result = --a - --b + ++b + b--
// document.write( "abbb is : " + result)

/////////////////////////////////// Assignment # 26-30 /////////////////////////////////

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
 

    // var userNum = +prompt("Enter any positive integer number");
    // if (userNum > 0) {
    //     var roundoff = Math.round(userNum); 
    //     var floor = Math.floor(userNum);
    //     var ceil = Math.ceil(userNum);
    
    //     document.write(
    //         "Number: " + userNum + "<br>" + 
    //         "Roundoff Value: " + roundoff + "<br>" + 
    //         "Floor Value: " + floor + "<br>" +
    //         "Ceil Value: " + ceil );
    // } else {
    //     document.write("Please enter a correct positive integer.");
    // }
    
///////////////////////////////////////////////////////////////////////////////////////

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number.

// var userNum = +prompt("Enter any  negative floating point");
//     if (userNum !== 0) {
//         var roundoff = Math.round(userNum); 
//         var floor = Math.floor(userNum);
//         var ceil = Math.ceil(userNum);
    
//         document.write(
//             "Number: " + userNum + "<br>" + 
//             "Roundoff Value: " + roundoff + "<br>" + 
//             "Floor Value: " + floor + "<br>" +
//             "Ceil Value: " + ceil );
//     } else {
//         document.write("Please enter a correct positive integer.");
//     }
    //////////////////////////////////////////////////////////////////////////////

//     3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5.

//  var userNum = +prompt("Enter any number (nagitive or positive)")
//  var absoluteNum = Math.abs(userNum)
//  document.write("absolute value of " + userNum + " " +'is' + " " + absoluteNum);

/////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

// var dice = Math.floor(Math.random() * 6) + 1
// document.write("random dice value is : " + dice)

///////////////////////////////////////////////////////////////////////////////////

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser.

// var coin = Math.floor(Math.random() * 2) +1
// document.write("Random coin num :" + coin + "<br>")
// if(coin === 1){
//     document.write("Random coin value : Head" + "<br>")

// }else{
//     document.write("Random coin value : Tail")
// }

///////////////////////////////////////////////////////////////////////////////////////

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

// var randomNum = Math.floor(Math.random() * 100) + 1;
// document.write("Random number  between 1 to 100 : " + randomNum)

///////////////////////////////////////////////////////////////////////////////////////

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userInput = prompt("Enter your weight (eg: 50 , 50kgs , 50.2kgs ,50.2kilograms")
// var weight = parseFloat(userInput)

// if( !isNaN(weight)){
// document.write("user weight is : " + weight + "kilograms")
// }else{
//     document.write("Enter a valid weight")
// }


///////////////////////////////////////////////////////////////////////////////////////

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// var randomNum = Math.floor(Math.random() * 10) +1
// var userNum = +prompt ("Enter any number ( 1 to 10)")
// if(randomNum === userNum){
//     document.write("Congratulation! you are right")
// }else{
//     document.write("Sorry you are wrong")
// }

///////////////////////////////////// Assignment # 31-34 ////////////////////////////////////////

// 1. Write a program that displays current date and time in 
// your browser.
// var currentDate = new Date()
// document.write(currentDate)

// 2. Write a program that alerts the current month in words. 
// For example December.

// var currentDate = new Date();
// var monthIndex = currentDate.getMonth();
// var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[monthIndex]
// document.write("Current month is : " + currentMonth) ;

////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var dayNames =["Saturday","Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var currentDate = new Date();
// var dayIndex  = currentDate.getDay();
// var day = dayNames[dayIndex]
// document.write("Today is :" + day)

//////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.


// var currentDate = new Date();
// var dayIndex  = currentDate.getDay();

// if(dayIndex ===  0 || dayIndex === 6 ){
// document.write("It's Fun day")
// }else{
//     document.write("It's a working day")
// }

///////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var currentDate = new Date();
// var monthDay = currentDate.getDay() ;
// if(monthDay === 16){
// document.write("First fifteen days of the month")
// }else{
//     document.write("Last days of the month")
// }

////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var currentDate = new Date();
// document.write("currentDate : " + currentDate +"<br>");
// var milisecondsSince_1970 = currentDate.getTime();
// document.write("The milliseconds since  midnight, Jan. 1, 1970 : " +milisecondsSince_1970 + "<br>" );
// var minutesSince_1970 = Math.floor(currentDate.getTime()/ 60000) ;
// document.write("The minutes since  midnight, Jan. 1, 1970 : " +minutesSince_1970 );

///////////////////////////////////////////////////////////////////////////////////////////////

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var currentDate = new Date();
// var time = currentDate.getHours();
// if(time < 12){
//     document.write("Its AM")
// }else{
//     document.write("Its PM")
// }

////////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var letertDate = new Date(2020 ,11 , 31);
// document.write(letertDate);

/////////////////////////////////////////////////////////////////////////////////////////////

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var firstDate = new Date(2015 , 1 ,1 );
// var thisRamadan = new Date (2015 ,6  ,18) 
// var difmilliSeconds = thisRamadan - firstDate;
// var dayPast = Math.floor(difmilliSeconds/ (1000 * 60 * 60 *24))
// document.write("The number of days past since 1st Ramadan 2015 : " + dayPast);

///////////////////////////////////////////////////////////////////////////////////////////////

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date("2015-12-05T22:50:16");
// var elapsedDate = new Date("2015-01-01T00:00:00");
// var milliseconds = Math.abs(referenceDate - elapsedDate)
// var seconds =Math.floor(milliseconds / 1000) ;
// document.write("On reference Date " + referenceDate +"<br>" + seconds + " had passed since beginning of 2015")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var currentDate = new Date()
// var currentHour = currentDate.getHours();
//  currentDate.setHours(currentHour + 1);
// document.write("Current date " + new Date() +"<br>" + "1 Hours later its " + currentDate)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date()
// document.write("Today's Date : " + currentDate +"<br>")
// var pastDate = new Date();
// pastDate.setFullYear(currentDate.getFullYear()-100);
// document.write("100 days back, it was " + pastDate);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var userAge = +prompt("What is your age?")
// var currentDate =new Date();
// var userYear = currentDate.getFullYear()- userAge;
// document.write("Your age is : " + userAge + "<br>" + "Your birth year is : " + userYear)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge;

// var CustomerName = "XYZ customer";
// var month = "October";
// var numofUnit = 410;
// var chargesPerunit = 16 ;
// var netAmountPayable = numofUnit * chargesPerunit;
// document.write("Cutomer name :" + CustomerName + "<br>" + "Month : " + month +"<br>"  + "Number of Unit : " + numofUnit + "<br>" + "Charges per Unit : " + chargesPerunit
//     + "<br>" + "Net Amount Payable (within Due Date) : " + netAmountPayable + "<br>");
// ///////late payment ///////////
// var latePaymentCharges = 350;
// document.write("Late payment Amount : " + latePaymentCharges +"<br>") 
// var grossAmountPayable = netAmountPayable + latePaymentCharges;
// document.write("Gross Amount Payable (after Due Date) : " + grossAmountPayable)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            // Assignment # 35-38
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Write a function that displays current date & time in your 
// browser.

// function displayDateandTime(){
    
//    var currentDate = new Date()
// document.write(currentDate)
// }
// displayDateandTime()

/////////////////////////////////////////////////////////////////////////

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// function fullName(firstName , lastName){
// var fullName = firstName + lastName
// var greets = " Hello! ";
// document.write(greets + fullName)
// } 
// fullName(" Kiran","Ahmed");

////////////////////////////////////////////////////////////////////////////

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// function returnNumber(){
//     var userNum1 = +prompt("Enter first number")
//     var userNum2 = +prompt("Enter second number")
//     var add = userNum1 + userNum2;
//     document.write(add);
// }
// returnNumber();

/////////////////////////////////////////////////////////////////////////

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function calculate(num1 , num2 ,operator ){
// var result ;
// if (operator === '+') {
//     result = num1 + num2;
// } else if (operator === '-') {
//     result = num1 - num2;
// } else if (operator === '*') {
//     result = num1 * num2;
// } else if (operator === '/') {
//     result = (num2 !== 0) ? (num1 / num2) 
// } else {
//     result = 'Invalid operator';
// }
// document.write("Result of " + num1 + operator + num2 + "=" + result);
// }
// calculate(10, 3, '-');
////////////////////////////////////////////////////////////////////////////////////

// 5. Write a function that squares its argument.

// function number(number){
//     var square = number * number;
//     document.write(square) 
// }
// number(6);

///////////////////////////////////////////////////////////////////////////////////////

// 6. Write a function that computes factorial of a number.








//////////////////////////////////////////////////////////////////////////////////////

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

// function counting(){
//     var start = +prompt("Enter first Number ")
//     var end = +prompt("Enter last Number ")
//     var result = ""
// for(var i = start ; i <= end; i++ ){
//     result += i +  " ";
    
// }
// document.write(result.trim())
// }
// counting();

////////////////////////////////////////////////////////////////////////

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// function | JAVASCRIPT
// Page 2 of 4
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse() {
//     var base = +prompt("Enter the base of the triangle: ");
//     var perpendicular = +prompt("Enter the perpendicular of the triangle: ");

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     document.write("The hypotenuse of the triangle is: " + hypotenuse);
// }

// calculateHypotenuse();

///////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateArea(width, height) {
//     var area = width * height;
//     document.write("The area of the rectangle is: " + area + "<br>");
// }
// calculateArea(5, 10);  

//////////////////////////////////////////////////////////////////////////////////////////////

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam


// function isPalindrome(str) {

//  var lowerStr = str.toLowerCase();
// var reversedStr = lowerStr.split('').reverse().join('');
//  if (lowerStr === reversedStr) {
//      return true;
//  } else {
//         return false;
//  }
// }
// var inputString = prompt("Enter a string to check if it's a palindrome:");
// if (isPalindrome(inputString)) {
//     document.write(inputString + " is a palindrome.");
// } else {
//     document.write(inputString + " is not a palindrome.");
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalizeFirstLetter(str) {
//     var words = str.split(" ");
//  for (var i = 0; i < words.length; i++) {
//    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//  }
// return words.join(" ");
// }
// var inputString = "the quick brown fox";
// var result = capitalizeFirstLetter(inputString);
// document.write( "Small string : " + inputString + "<br>"+"Capitalized String: " + result);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
// if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// var inputString = "Web Development Tutorial";
// var result = findLongestWord(inputString);
// document.write( "EXAMPLE STRING : Web Development Tutorial"+"<br>"+"Longest word: " + result);

///////////////////////////////////////////////////////////////////////////////

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// function | JAVASCRIPT
// Page 3 of 4
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// var inputString = "JSResourceS.com";
// var letterToCount = "o";
// var result = countLetterOccurrences(inputString, letterToCount);
// document.write("The letter '" + letterToCount + "' occurs " + result + " times in the string.");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// -- END -

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area.toFixed(2) + "<br>");
// }
// var radius = 5;
// calcCircumference(radius);
// calcArea(radius);

///////////////////////////////////////////////////////////////////////////////////////////////////////

                                        //    Assignment # 38-44

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

// function power(a, b) {
//     var result = 1; 
//     for (var i = 0; i < b; i++) {
//         result *= a; 
//     }
//     document.write(a + " raised to the power of " + b + " is: " + result);
// }


// ///////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, 

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         document.write(year + " is a leap year.<br>"); 
//     } else {
//         document.write(year + " is not a leap year.<br>"); 
//     }
// }
// var inputYear = prompt("Enter a year:");
// inputYear = parseInt(inputYear);
// isLeapYear(inputYear);

/////////////////////////////////////////////////////////////////////////////////////////

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//     var S = calculateSemiPerimeter(a, b, c);
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    
//     return area;
// }
// var sideA = 5; 
// var sideB = 6; 
// var sideC = 7; 
// var area = calculateArea(sideA, sideB, sideC);
// document.write("The area of the triangle with sides " + sideA + ", " + sideB + ", " + sideC + " is: " + area + "<br>");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

// function calculateAverage(marks) {
    
//     var total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length; 
// }

// function calculatePercentage(marks) {

//     var total = marks.reduce((sum, mark) => sum + mark, 0);
//     return ((total / (marks.length * 100)) * 100).toFixed(2); 
// }

// function mainFunction() {
//     var marks = [85, 90, 78]; 
//     var average = calculateAverage(marks);
//     var percentage = calculatePercentage(marks);
//     document.write("Marks: " + marks.join(", ") + "<br>");
//     document.write("Average: " + average.toFixed(2) + "<br>"); 
//     document.write("Percentage: " + percentage + "%<br>");
// }

// mainFunction();

/////////////////////////////////////////////////////////////////////////////////////////////

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// var string = "Hello, world!";
// var character = 'o';
// var index = customIndexOf(string, character);
// document.write("The index of '" + character + "' in the string \"" + string + "\" is: " + index + "<br>");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// function removeVowels(sentence) {
// var vowels = "aeiouAEIOU";
//  var result = "";

//  for (var i = 0; i < sentence.length; i++) {
// if (!vowels.includes(sentence[i])) {
//  result += sentence[i];
//  }
// }
//  return result;
// }

// var sentence = "Hello, how are you?";
// var resultSentence = removeVowels(sentence);

// document.write("Original sentence: \"" + sentence + "\"<br>");
// document.write("Sentence after removing vowels: \"" + resultSentence + "\"<br>");

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countDoubleVowels(sentence) {
//  var vowels = "aeiouAEIOU";
//   var count = 0;

//     for (var i = 0; i < sentence.length - 1; i++) {
//      var currentChar = sentence[i];
//       var nextChar = sentence[i + 1];

//         switch (true) {
//             case (vowels.includes(currentChar) && vowels.includes(nextChar)):
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// var doubleVowelCount = countDoubleVowels(sentence);

// document.write("Original sentence: \"" + sentence + "\"<br>");
// document.write("Number of occurrences of two vowels in succession: " + doubleVowelCount + "<br>");

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

// function convertToMeters(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.1;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }

// function main() {
//     var km = parseFloat(prompt("Enter the distance in kilometers:")); 

//     if (isNaN(km)) {
//         document.write("Please enter a valid number for kilometers.<br>");
//         return; 
//     }

//     var meters = convertToMeters(km);
//     var feet = convertToFeet(km);
//     var inches = convertToInches(km);
//     var centimeters = convertToCentimeters(km);

//     document.write("Distance in kilometers: " + km + " km<br>");
//     document.write("Distance in meters: " + meters + " m<br>");
//     document.write("Distance in feet: " + feet + " ft<br>");
//     document.write("Distance in inches: " + inches + " in<br>");
//     document.write("Distance in centimeters: " + centimeters + " cm<br>");
// }
// main();

////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour

// function calculateOvertimePay(hoursWorked) {
// var regularHours = 40;
// var overtimeRate = 12.00; 
//   let overtimePay = 0;

//  if (hoursWorked > regularHours) {
//   var overtimeHours = hoursWorked - regularHours;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     return overtimePay;
// }

// function main() {
//     var hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));

//     if (isNaN(hoursWorked) || hoursWorked < 0) {
//         document.write("Please enter a valid number of hours worked.<br>");
//         return; 
//     }

//     var overtimePay = calculateOvertimePay(hoursWorked);
    
//     if (overtimePay > 0) {
//         document.write("Total hours worked: " + hoursWorked + " hours<br>");
//         document.write("Overtime pay: Rs. " + overtimePay.toFixed(2) + "<br>");
//     } else {
//         document.write("Total hours worked: " + hoursWorked + " hours<br>");
//         document.write("No overtime pay applicable.<br>");
//     }
// }
// main();

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

// function calculateCurrencyNotes(amount) {
// var note100 = 100;
// var note50 = 50;
// var note10 = 10;

// var num100 = Math.floor(amount / note100);
//     amount %= note100; 

// var num50 = Math.floor(amount / note50);
//     amount %= note50; 

// var num10 = Math.floor(amount / note10);

//     return {
//         hundredNotes: num100,
//         fiftyNotes: num50,
//         tenNotes: num10
//     };
// }

// function main() {
//     var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));

//     if (isNaN(amount) || amount <= 0 || amount % 100 !== 0) {
//         document.write("Please enter a valid amount in hundreds.<br>");
//         return; 
//     }

//     var currencyNotes = calculateCurrencyNotes(amount);

//     document.write("Amount to be withdrawn: Rs. " + amount + "<br>");
//     document.write("Number of 100 Rs. notes: " + currencyNotes.hundredNotes + "<br>");
//     document.write("Number of 50 Rs. notes: " + currencyNotes.fiftyNotes + "<br>");
//     document.write("Number of 10 Rs. notes: " + currencyNotes.tenNotes + "<br>");
// }
// main();
