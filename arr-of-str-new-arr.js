// takes in an arr of strings 
// returns arr of strings with less than 5 characters

const LessThanFiveChar = (arr) => {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 5) {
      output.push(arr[i])
    }
  }

  return output;
}

console.log(LessThanFiveChar(['hi','hello','hey','howdy']))