// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
console.log("hi");
console.log('\nQuestion 1');

var minimum = function(num1, num2){
	
	console.log(Math.min(num1,num2));
	return(Math.min(num1,num2));

	
};

minimum(5,-6);

// 2. Create a new function called minimum3() to find the smallest of three numbers

console.log('\nQuestion 2');

var minimum3 = function(arry1){
	
	var mini = arry1[0];
	
	for (i=1; i< arry1.length; i++){
		if (arry1[i]<= mini){
			mini = arry1[i];
		}
	}
	
	console.log(mini);
	
};

var array1 = [-3, -90000, 81];

minimum3(array1);

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.

console.log('\nQuestion 3');

var sum = function(arry1){
	
	var sum = 0;
	
	for (i=0; i< arry1.length; i++){
			sum += arry1[i];
	}
	
	console.log(sum);
	
};

var array1 = [1, 2, 3, 4];

sum(array1);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

console.log('\nQuestion 4');

var mult = function(arry1){
	
	var sum = 1;
	
	for (i=0; i< arry1.length; i++){
			sum = arry1[i]*sum;
	}
	
	console.log(sum);
	
};

var array1 = [1, 2, 3, 4];

mult(array1);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.

console.log('\nQuestion 5');

var filterSixPlus = function (wordz, maxLength){
	
	for (i=0; i < wordz.length; i++){
		if (wordz[i].length < maxLength){
			wordz.splice(i,1);
			i--; //next items moves into this spot after wordz[i] is deleted so need to reset i++
			console.log(wordz);
		}
	}
	
};

var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
filterSixPlus (words, 6);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

console.log('\nQuestion 6');

var celTemp = prompt ("What's the temp in Celcius?");
celTemp = parseFloat(celTemp);

var convertToFar = function (celTemp1){
	
	var farTemp = (9/5)*celTemp1 + 32;
	console.log("That is " + farTemp + " degrees Farenheit!");
};

convertToFar(celTemp);

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.

// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
