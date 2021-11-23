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

