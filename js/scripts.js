var numbers = function(input) {
  var objectOnes = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };
  var objectTens = {
    20: "twenty" 
  };
  var objectHundreds = {
    100: "one-hundred"
  }
//  return objectOnes[input];
  if (input < 20) {
    return objectOnes[input];
  } else if (input > 20) {
    var ones = input % 10;
    var tens = input -100 - ones;
    var hundreds = input - tens - ones;
    return  objectHundreds[hundreds] + " " + objectTens[tens] + " " + objectOnes[ones];
  }

};
