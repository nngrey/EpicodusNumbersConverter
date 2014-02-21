var scrabble = function(input) {
  var letters = input.toLowerCase().split("");
  var result = 0;
  var value1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  var value2 = ["d", "g"];
  var value3 = ["b", "c", "m", "p"];
  var value4 = ["f", "h", "v", "w", "y"];
  var value5 = ["k"];
  var value8 = ["j", "x"];
  var value10 = ["q", "z"];


  letters.forEach(function(letter){
    if (value1.indexOf(letter) > -1){
      result += 1;
    } else if (value2.indexOf(letter) > -1) {
      result += 2;
    } else if (value3.indexOf(letter) > -1) {
      result += 3;
    } else if (value4.indexOf(letter) > -1) {
      result += 4;
    } else if (value5.indexOf(letter) > -1) {
      result += 5;
    } else if (value8.indexOf(letter) > -1) {
      result += 8;
    } else if (value10) {
      result += 10;
    }
  });
  return result;
};
