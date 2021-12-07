function computeAreaOfATriangle(base, height) {
  return (base * height)/2;
}

function cube(num) {
  return num**3;
}

function square(num) {
  return num**2;
}

function average(num1, num2) {
  let total = num1 + num2;
  let average = total / 2;
  return average;
}

function isEvenAndGreaterThanTen(num) {
  if (num > 10 && num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length)/2;
}

function addFullNameProperty(obj) {
  return obj["fullName"] = (`${obj.firstName} ${obj.lastName}`);
}

// Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
}


var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);

console.log(person1.manager);

//

function getNthElement(array, n) {
  return array[n];
}

//

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
}

//

function getFirstElement(array) {
  return array[0];
}

//

function getLastElement(array) {
  return array[array.length - 1]
}

//

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}

//

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

//

function computeTripledAreaOfARectangle(length, width) {
  return (length * width)*3 
}

//

function computeAreaOfACircle(radius) {
  return Math.PI*(radius**2)
}

//

function computePower(num, exponent) {
  return num**exponent
}

//

function computeSquareRoot(num) {
  return Math.sqrt(num);
}

//

function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length
}

//

function getElementsUpTo(array, n) {
  array.splice(n);
  return array;
}

//

function getElementsAfter(array, n) {
  let arr = array.splice(n+1);
  return arr;
}

//

function getAllElementsButFirst(array) {
  return array.splice(1);
}

//

function getAllElementsButLast(array) {
  array.pop();
  return array;
}

//

function removeFromFront(arr) {
  arr.shift();
  return arr;
}

//

function removeFromFrontOfNew(arr) {
  return arr.slice(1);
}

//

function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count ++;
    }
  }
  return count;
}

//

function getAllLetters(str) {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    array.push(str[i]);
  }
  return array;
}

//

function getAllWords(str) {
  return str.split(' ');
}

//

function removeFromBack(arr) {
  arr.pop();
  return arr;
}

//

function or(expression1, expression2) {
  if (expression1) {
    return true;
  } else if (expression2) {
    return true;
  } else {
    return false;
  }
}

//

function isEitherEvenAndLessThan9(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    if (num1 < 9 && num2 < 9) {
      return true;
    }
    else return false;
  }
}

//

function extend(obj1, obj2) {
  for (let key in obj2) {
    if(!obj1[key]) {
      obj1[key] = obj2[key]
    }
  }
  return obj1
}

//

function removeNumbersLargerThan(num, obj) {
  for (let key in obj) {
    if (obj[key] > num) {
      delete obj[key];
    }
  }
  return obj;
}

//

function removeNumbersLessThan(num, obj) {
  for (let key in obj) {
    if (obj[key] < num) {
      delete obj[key];
    }
  }
  return obj;
}

//

function transformFirstAndLast(array) {
  let key = array[0];
  let value = array[array.length-1];
  let obj = {}
  obj[key] = value
  return obj
}

//

function convertObjectToList(obj) {
  let array = [];
  for (let key in obj) {
    array.push([key, obj[key]]);
  }
  return array;
}

//

function fromListToObject(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

//

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

//

function totalChange(amountPaid, totalCost) {
  let change = amountPaid - totalCost;
  if (change%1 !== 0) {
    change = change.toFixed(2);
    return change;
  } else return change;
}

//

function toHours(minutes) {
  // return (minutes / 60).toFixed(3);
  return Math.abs(minutes / 60);
}

//

let countDown = (seconds) => {
  for (let i = seconds; i > -1; i--) {
    console.log(`There are ${i} seconds left until liftoff!`);
  }
  return "Lift Off!";
}

//

function removeZeros(number) {
  let newNum = '';
  let numString = number.toString();
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] != 0) {
      newNum += (numString[i]);
    }
  }
  return newNum;
}

//

function alphabetCode(letter) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i <= letters.length; i++) {
    if (letter === letters[i]) {
      return i+1;
    }
  }
}

//

function avgVel(posArray, time){
  let change = posArray[2] - posArray[0];
  return change/time;
}

//

function rectangleSize(length, width) {
  return length * width;
}

//

function illegalWord(sentence, word) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (word.toLowerCase() === words[i]) {
      return false;
    } else return true;
  }
}

//

function drinks(day){
  if (day === 'm' || day === 'f') {
    return 6;
  }
  if (day === 't') {
    return 4;
  }
  if (day === 'w' || day === 'r') {
    return 3;
  }
}

//

function enterTheBar(age) {
  if (age >= 21) {
    return true;
  } else return false;
}

//

function myGradeIs(gpa) {
  if (gpa >= 4){
    return 'A';
  }
  if (gpa >= 3) {
    return 'B';
  }
  if (gpa >= 2) {
    return 'C';
  }
  if (gpa >= 1) {
    return 'D';
  }
  if (gpa < 1) {
    return 'F';
  }
}

//

function isSchoolCancelled(temp) {
  if (temp < -4) {
    return true;
  } else return false;
}

//

const fizzBuzz = (num) => {
  let output = {};
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output[i] = 'FizzBuzz';
    }  else if (i % 3 === 0) {
      output[i] = 'Fizz';      
    } else if (i % 5 === 0) {
      output[i] = 'Buzz';
    } else {
    output[i] = i;
    }
  }
  return output;
}

//

function blackjack(sum) {
  if (sum < 15) {
    return "hit";
  }
  if (sum >= 15 && sum <= 21) {
    return "stand";
  }
  if (sum > 21) {
    return "bust";
  }
}

//

function haveDetention(id) {
  for (let i = 0; i < id.length; i++) {
    if (id[i] > 6) {
      return false
    }
  }
  return true;
}

//

function canNav(velocity, boatType){
  let boatTypeL = boatType.toLowerCase();
  if (boatTypeL === "rowboat" && velocity < 3) {
    return true;
  }
  if (boatTypeL === "sailboat" && velocity < 7) {
    return true;
  }
  if (boatTypeL === "ship" && velocity < 15) {
    return true;
  }
  else return false;
}

//

let makeCamelCase = (input) => {
  let out = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "_") {
      i++;
      out += input[i].toString().toUpperCase();
    } else {
    out += input[i];
    }
  }
  return out;
}

//

function highScore(studentScores) {
  let out = 0;
  for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > out) {
    out = studentScores[i];
    }
  }
  return out;
}

//

let lastFour = (socSec) => {
  let string = socSec.toString();
  let answer = string.slice(5, 9);
  return answer;
}

//

function twoStrikes(plates) {
  let empty = [];
  for (let i = 0; i < plates.length; i++) {
    count = 0;
    for (let j=0; j < plates.length; j++) {
      if (plates[i] === plates[j]) {
        count++;
        if( count === 2) {
          return plates[i];
        }
      }
  }
    } return empty;
}

//

function sumOfNegatives(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < 0) {
      // let negArr = [];
      // negArr = negArr.push(numArray[i]);
      sum += numArray[i];
    }
  }
  return sum;
  return 0;
}

//

function nameInitials(fullName) {
  let fullNameArr = fullName.split(' ');
  let initials = '';
  for (let i = 0; i < fullNameArr.length; i++) {
      initials += fullNameArr[i][0];
  }
  return initials.toUpperCase();
}

//

function rangeGen(min, max){
  let outArr = [];
  for (let i = min+1; i < max; i++) {
    outArr.push(i)
  }  
  return outArr;
}

//

let backOfTheLine = (arrOfNames, numOfPositions) => {
  if (numOfPositions > 0) {
    for (let i = 0; i < numOfPositions; i++) {
      let last = arrOfNames[arrOfNames.length-1];
      arrOfNames.pop();
      arrOfNames.unshift(last);
      }
      return arrOfNames
  }
  if (numOfPositions < 0) {
    let abs = Math.abs(numOfPositions);
    for (let i = 0; i < abs; i++) {
      let first = arrOfNames[0];
      arrOfNames.shift();
      arrOfNames.push(first);
      }
      return arrOfNames
  }
}

//

function maxError(wrongNums, correctNum){
  let far = 0;
  let arr = [];
  for (let i = 0; i< wrongNums.length; i++) {
    let value = correctNum - wrongNums[i];
    let abs = Math.abs(value);
    if (abs > far) {
      far = abs
      arr.push(wrongNums[i]);
    }
  }
  return arr[arr.length-1];
}

//

let myColleagues = (colleagues) => {
  for (let i = 0; i < colleagues.length; i++) {
    console.log(`${colleagues[i][0]} is the ${colleagues[i][1][0]} and is ${colleagues[i][1][1]}.`)
  }
  return true;
}

//

function repeatedChars(charArray, numArray) {
  let output = '';
  for (let i = 0; i < charArray.length; i++) {
    let letter = charArray[i];
    let number = numArray[i];
    for (let i = 0; i < number; i++) {
      output += letter
    }
  }
  return output;
}

//

// Reverse Word with Recursion

function reverseWord(inOrderString){

  let wordLength = inOrderString.length

  if (wordLength <=1) {
    return inOrderString
  }
  // console.log(inOrderString.charAt(wordLength-1))

  // console.log(reverseWord(inOrderString.substring(0, wordLength-1)))

  return inOrderString.charAt(wordLength-1) + reverseWord(inOrderString.substring(0, wordLength-1))
}

//

// Ternary

// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

const myGPA = (arrOfGrades) => {
  let cumulative = 0;
  let convert = {
    'A+':4.33, 'A':4.00, 'A-': 3.67, 'B+':3.33, 'B':3.00, 'B-':2.67, 'C+':2.33, 'C': 2.00, 'C-':1.67, 'D+':1.33, 'D':1.00, 'D-':0.67, 'F':0}

  for (let i = 0; i < arrOfGrades.length; i++) {
    cumulative += (convert[arrOfGrades[i]]);
  }
  return cumulative / arrOfGrades.length; 
}

myGPA(['B-','C+','B+','C-','A+'])

//

function carTrip(car, miles) {
  car['miles'] += miles;
  car['spareTiresUsed'] += (Math.floor(miles/ 1000))
  return car;
  }

//

function currentGrade(student, improvement) {
  student['grade']+= 1;
  student['GPA']+= improvement;
  return student;
}

//

let countCharacters = (str) => {
  let output = {};
  for (let i = 0; i < str.length; i++) {
    if (output[str[i]]) {
      output[str[i]]++
    } else {
      output[str[i]] = 1 
    }
  }
  return output;
}

//

