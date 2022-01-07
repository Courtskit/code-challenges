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

function pyramid(height) {
  if (height === 0) {
    return 0;
  }
  return (2*height-1) + pyramid(height-1);
}

//

function reverseWord(inOrderString){
  let length = inOrderString.length;
  if (length <= 1) {
    return inOrderString;
  }
  return inOrderString.charAt(length-1) + reverseWord(inOrderString.substring(0, length-1))
}

//
// will solve again with recursion 

function FibonacciChecker(num) { 

  let num1 = 0;
  let num2 = 1;
  let fibNum = 0;

  for (let i = 0; i < num; i++) {
    num1 = num2;
    num2 = fibNum;
    fibNum = num1 + num2;
    if (num === fibNum) {
      return 'yes'
    }
  }

  return 'no';
  
}

//

const getEmployeeData = (arrOfEmployees) =>{
  
  let devTitle = '';
  let totDevEmp = 0;
  let totDevSals = 0;
  let totDevBons = 0;

  let pmTitle = '';
  let totPMEmp = 0;
  let totPMSals = 0;
  let totPMBons = 0;

  let desTitle = '';
  let totDesEmp = 0;
  let totDesSals = 0;
  let totDesBons = 0;

  arrOfEmployees.forEach(key => {
    // Developer stats
    if (key['title'] === 'developer') {
      devTitle = key['title'];
      totDevEmp++;
      totDevSals += key['salary'];
      totDevBons += key['bonus'];
    }
    // Product Manager stats
    if (key['title'] === 'product manager') {
      pmTitle = key['title'];
      totPMEmp++;
      totPMSals += key['salary'];
      totPMBons += key['bonus'];
    }
    // Designer stats
    if (key['title'] === 'designer') {
      desTitle = key['title'];
      totDesEmp++;
      totDesSals += key['salary'];
      totDesBons += key['bonus'];
    }
  });

  return [
    {
      'title': devTitle,
      'totalEmployees' : totDevEmp,
      'avgSalary' : Math.floor(totDevSals/totDevEmp),
      'avgBonus' : Math.floor(totDevBons/totDevEmp),
      'avgTotalComp' : Math.floor((totDevBons/totDevEmp) + (totDevSals/totDevEmp)),
    },
    {
      'title': pmTitle,
      'totalEmployees' : totPMEmp,
      'avgSalary' : Math.floor(totPMSals/totPMEmp),
      'avgBonus' : Math.floor(totPMBons/totPMEmp),
      'avgTotalComp' : Math.floor((totPMBons/totPMEmp) + (totPMSals/totPMEmp)),
    },
    {
      'title': desTitle,
      'totalEmployees' : totDesEmp,
      'avgSalary' : Math.floor(totDesSals/totDesEmp),
      'avgBonus' : Math.floor(totDesBons/totDesEmp),
      'avgTotalComp' : Math.floor((totDesBons/totDesEmp) + (totDesSals/totDesEmp)),
    }
    ]
}

////////////////////////////////


function StringScramble(str1,str2) { 
  let checkStr = '';
  for (let i = 0; i < str2.length; i++) {
    for(let j = 0; j < str1.length; j++) {
      if(str2[i] === str1[j]) {
        checkStr+= str1[j];
      }
    }
  }
  return checkStr === str2 ? 'true' : 'false';
}

function StringScramble(str1,str2) { 
  let checkStr = '';
  for(let i = 0; i < str1.length; i++) {
    if (str2.charAt(str1[i])){
      checkStr+= str2[i];
    }
  }
  return checkStr === str2 ? 'true' : 'false';
}

// ????????

function StringScramble(str1,str2) { 
  let checkStr = '';
  for (let i = 0; i < str2.length; i++) {
    for(let j = 0; j < str1.length; j++) {
      if(str2[i] === str1[j]) {
        checkStr+= str1[j];
        break;
      }
    }
  }
  return checkStr === str2 ? 'true' : 'false';
}
// ......

function StringScramble(str1,str2) { 
  let checkStr = '';
  for (let i = 0; i < str2.length; i++) {
    for(let j = 0; j < str1.length; j++) {
      if(str2[i] === str1[j]) {
        checkStr+= str1[j];
        str1[j] = '';
        break;
      }
      console.log(str1)
    }
  }
  return checkStr === str2 ? 'true' : 'false';
}

// ...?

function StringScramble(str1,str2) { 
  let checkStr = '';
  for (let i = 0; i < str2.length; i++) {
    for(let j = 0; j < str1.length; j++) {
      if(str2[i] === str1[j]) {
        checkStr+= str1[j];
        str1 = str1.replace(str1[j], '');
        break;
      }
    }
  }
  return checkStr === str2 ? 'true' : 'false';
}

//////////////////////////////

//

function isPrime(num){
  if (num%2 === 0 && num !== 2) {
      return false
    }
    for (let i = 2; i < num; i++) {
      if (num%i === 0) {
        return false
      }
    }
    return true
  }

  //

function PalindromeTwo(str) { 
  let backwardsStr = '';
  let inOrderStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    if (str[i].toUpperCase() != str[i].toLowerCase()) {
      backwardsStr+= str[i];
    }
  }
  for (let j = 0; j < str.length; j++) {
    if (str[j].toUpperCase() != str[j].toLowerCase()) {
      inOrderStr+= str[j];
    }
  }
  if (inOrderStr.toLowerCase() === backwardsStr.toLowerCase()) {
    return 'true';
  } else {
    return 'false'
  }
}

//

function CountingMinutes(str) { 
  let times = str.split('-');
  let startTime = times[0]; // hour:minute
  let start = startTime.split(':')
  let startHour = start[0]; // hour
  let startMin = start[1][0] + start[1][1];  // minute
  let startAMorPM = start[1][2] + start[1][3]; // am or pm
  let startHourAMorPM = startHour + startAMorPM;
  let endTime = times[1]; // hour:minute
  let end = endTime.split(':');
  let endHour = end[0]; // hour
  let endMin = end[1][0] + end[1][1];  // minute
  let endAMorPM = end[1][2] + end[1][3]; // am or pm
  let endHourAMorPM = endHour + endAMorPM;

  let hours = 
  ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am',
    '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am',
    '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']

  if (startHour === endHour && startMin < endMin && startAMorPM === endAMorPM) {
    return endMin - startMin;
  }

  let startInd = 0;
  let endInd = 0;

  for(let i = 0; i < hours.length; i++) {
    if (hours[i] === startHourAMorPM) {
      startInd = i;
      break;
    }
  }
  for(let i = startInd+1; i < hours.length; i++) {
    if (hours[i] === endHourAMorPM) {
      endInd = i;
      break;
    }/
  }
  let answer = ((endInd-startInd) * 60) - (startMin - endMin);
  return answer;
}

//

function ThirdGreatest(strArr) { 

  let greatest = '';
  let secGreatest = '';
  let thirdGreatest = '';

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > greatest.length) {
      greatest = strArr[i];
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > secGreatest.length && strArr[i] !== greatest) {
      secGreatest = strArr[i];
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > thirdGreatest.length && strArr[i] !== greatest && strArr[i] !== secGreatest) {
      thirdGreatest = strArr[i];
    }
  }

  return thirdGreatest;

}

//

function ThirdGreatest(strArr) { 

  let greatest = '';
  let greatestInd = 0;
  let secGreatest = '';
  let secGreatestInd = 0;
  let thirdGreatest = '';

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > greatest.length) {
      greatest = strArr[i];
      greatestInd = i;
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > secGreatest.length && i !== greatestInd) {
      secGreatest = strArr[i];
      secGreatestInd = i;
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > thirdGreatest.length && i !== greatestInd && i !== secGreatestInd) {
      thirdGreatest = strArr[i];
    }
  }

  return thirdGreatest;

}

//

function CaesarCipher(str,num) { 

  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  let output = '';
  
  let temp = 0;
  
  for (let i = 0; i < str.length; i++) {
  
    if (str[i].toUpperCase() === str[i].toLowerCase() ) {
      output += str[i];
    } else if (str[i] === str[i].toUpperCase()) {
      temp = alphabet.indexOf(str[i].toLowerCase()) + parseInt(num);
      output += alphabet[temp].toUpperCase();  
    } else {
      temp = alphabet.indexOf(str[i].toLowerCase()) + parseInt(num);
      output += alphabet[temp];
    }
    
  }
  return output;
  }

    // if the array position goes past z .. reloop through the array..
// subtracting the shifts that were already accounted for

function CaesarCipher(str,num) { 

  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  let output = '';
  
  let temp = 0;
  
  for (let i = 0; i < str.length; i++) {
  
    if (str[i].toUpperCase() === str[i].toLowerCase() ) { // if not a letter 
      output += str[i];
    } else if (str[i] === str[i].toUpperCase()) { // if uppercase
      temp = alphabet.indexOf(str[i].toLowerCase()) + parseInt(num);
      if (alphabet[temp] === undefined) {
        output += alphabet[temp - 26].toUpperCase();
      }else{
      output += alphabet[temp].toUpperCase();
      }
    } else {
      temp = alphabet.indexOf(str[i].toLowerCase()) + parseInt(num);
      if (alphabet[temp] === undefined) {
        output += alphabet[temp - 26]
      }else{
      output += alphabet[temp];
      }
    }
    
  }
  return output;
  }

//

function LongestWord(sen) { 
  let words = sen.split(' ');
  let longestW = '';
  for (let i = 0; i < words.length; i++) {
    let w = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if (w > longestW) {
      longestW = w
    }
  }
  return longestW;
}


function LongestWord(sen) { 
  let words = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
  let longestW = '';
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > longestW.length) {
      longestW = w
    }
  }
  return longestW;
}
//

function FirstReverse(str) { 

  let output = '';
    for (let i = 1; i < str.length; i++) {
      output += str[str.length - i]
    }
    output += str[0];
    return output;
  }

  //

  function FirstFactorial(num) {
    let sum = 1;
    for (let i = num; i > 0; i--) {
      sum *= i
    }
    return sum;
  }

  //

  function FindIntersection(strArr) { 

    let arr1 = strArr[0].split(', ');
    let arr2 = strArr[1].split(', ');
    let output = '';
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])){
        output += arr1[i] + ',';
      }
    }
  
    if (output === '') {
      return 'false'
    } else {
      return output.substr(0,output.length-1);
    }
  }


  //

  function compareTriplets(a, b) {
    let aa = 0;
    let bb = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i]>b[i]) {
            aa++
        }
        if (a[i]<b[i]) {
            bb++
        }
    }
    return aa + ' ' + bb;
}

//

function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
      sum += ar[i];
  }
  return sum
}

//

function FirstReverse(str) { 
  let splitStr = str.split("");
  let rev = splitStr.reverse();
  let joinStr = rev.join("");
  return joinStr;
}

//

let AlphaSoup = (str) => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let indexs = [];
  let output = '';
  for (let i =0; i < str.length; i++) {
    console.log(str[i])
    indexs.push(alpha.indexOf(str[i]))
  }
  indexs.sort(function(a, b){return a-b})
  for (let i = 0; i < indexs.length; i++) {
    output += alpha[indexs[i]]
  }
  return output
}

//

let FibChecker = (num) => {
  let num1 = 0;
  let num2 = 1;
  let totSum = 0;
  for (let i = 0; i < num; i++) {
    num1 = num2;
    num2 = totSum;
    totSum = num1 + num2;
    if (totSum === num) {
      return 'yes';
    }
  }
  return 'no';
}

//

let StrScramble = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
       str2 = str2.replace(str1[i], '')
    }
  }
  if (str2 === '') {
    return 'true'
  } else {
    return 'false'
  }
}


let StrScramble = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
       str2 = str2.replace(str1[i], '')
    }
  }
  return str2 === '' ? 'true' : 'false';
}

// 

let Palindrome = (str) => {
  let regex = /^[a-z]+$/i;
  let letters = '';
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      letters += str[i];
    }
  }
  let split = letters.split('');
  let reverse = split.reverse();
  let reversedStr = reverse.join('');
  if (letters.toLowerCase() === reversedStr.toLowerCase()) {
    return 'true'
  } else {
    return 'false'
  }
}


let Palindrome = (str) => {
  let regex = /^[a-z]+$/i;
  let letters = '';
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      letters += str[i];
    }
  }
  let split = letters.split('');
  let reverse = split.reverse();
  let reversedStr = reverse.join('');
  return letters.toLowerCase() === reversedStr.toLowerCase() ? 'true' : 'false';
}


//

let CountingMinutes = (str) => {
  let timesArr = str.split('-');
  let startTime = timesArr[0];
  let startHour = parseInt(startTime.split(':')[0]);
  let startMin = startTime.split(':')[1][0] + startTime.split(':')[1][1];
  let startAmPm = 'pm';
  if (startTime.includes('am')) {
    startAmPm = 'am';
  }
  let endTime = timesArr[1];
  let endHour = parseInt(endTime.split(':')[0]);
  let endMin = endTime.split(':')[1][0] + endTime.split(':')[1][1];
  let endAmPm = 'pm';
  if (endTime.includes('am')) {
    endAmPm = 'am';
  }

  // gets me total military minutes of the hour
  function militaryTime(time){
    let hour = time.split(':')[0];
    if (time.includes('pm') && hour !== '12'){
      let militaryHour = parseInt(hour) + 12;
      let totalMin = militaryHour * 60;
      return totalMin
    } else if (time.includes('am') && hour !== '12'){
      let totalMin = parseInt(hour) * 60;
      return totalMin;
    } else if (time.includes('am') && hour === '12'){
      let totalMin = 0;
      return totalMin;
    } else if (time.includes('pm') && hour === '12'){
      let totalMin = parseInt(hour) * 60;
      return totalMin;
    }
  }
  // total military minutes of start time
  let startMilitary = militaryTime(startTime) + parseInt(startMin);
  // total military minutes of end time
  let endMilitary = militaryTime(endTime) + parseInt(endMin);

  if (startMilitary > endMilitary) {
    let diff = Math.abs(startMilitary - 1439);
    let totalMin = endMilitary + diff + 1;
    return totalMin;
  }else {
    return endMilitary - startMilitary;
  }
}

// CountingMinutes('12:39pm-12:38pm');
// CountingMinutes('12:30pm-12:32am');
// CountingMinutes('11:30pm-12:32pm');
// CountingMinutes('11:59pm-12:32pm');
// CountingMinutes('2:29pm-7:29pm');
// CountingMinutes('11:59pm-12:32pm');

//

function DistinctList(arr) {
  let singles = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (singles.includes(arr[i])) {
      count++;
    } else {
      singles.push(arr[i]);
    }
  }
  return count;
}

// DistinctList([0,-2,-2,5,5,5])
DistinctList([100, 2, 101, 4])

//




// Review built in methods

// text.split(" ")
// text.split("")
// word1.join('')
// string.split('').reverse().join('');