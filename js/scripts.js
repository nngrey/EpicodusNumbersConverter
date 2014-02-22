var numbers = function(input) {
  var objectOnes = {};
  objectOnes[1] = "one";
  var objectTens = {};
  objectTens[20] = "twenty";
  if (input === 1) {
    return objectOnes[1];
  } else if (input > 20) {
    var ones = input % 10;
    var tens = input - ones;
    return objectTens[tens] + " " + objectOnes[ones];
  }
};
