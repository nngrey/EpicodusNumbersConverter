var numbers = function(input) {
  var result = "";
  var objectOnes = {
    0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
  };
  var objectTens = {
    1: "", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety" 
  };

switch (true)
{
  case (input >= 100000):
    result = objectOnes[Math.floor(input/100000)] + " hundred";
  //  console.log(result);
    if (input % 100000 > 0) {
      result = result + " ";
    } else {
      result = result + " thousand";
      break;
    }
    input = input % 100000;

  case (input >= 20000):
    result = result + objectTens[Math.floor(input / 10000)];
    console.log(result);
    if (input % 10000 >0) {
      result = result + "-";
    } else {
      break;
    }
    input = input % 10000;

  case (input >= 1000):
    result = result + objectOnes[Math.floor(input / 1000)] + " thousand";
    if (input % 1000 > 0) {
      result = result + " ";
    } else {
      break;
    }
    input = input % 1000;

  case (input >= 100):
    result = result + objectOnes[Math.floor(input / 100)] + " hundred";
    if (input % 100 > 0){
      result = result + " ";
    } else {
      break;
    }
    input = input % 100;
    if (input < 20) {
      result = result + objectOnes[input];
      break;
    }

  case (input >= 20):
    result = result + objectTens[Math.floor(input / 10)];
    if (input % 10 > 0) {
      result = result + "-";
    }
    input = input % 10;

  default:
    result = result + objectOnes[input];
    break;
}

return result;

};




  // if (input >= 100) {
  //   result = objectHundreds[Math.floor(input / 100)];
  //   input = input % 100;

  // } else if (input > 20) {
  //   result = result + objectTens[Math.floor(input / 10)];
  //   input = input % 10;

  // } else {
  //   result = result + objectOnes[input];
  // }
  // return result;