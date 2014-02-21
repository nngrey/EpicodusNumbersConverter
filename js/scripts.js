var scrabble = function(input) {
  var wordObject = {"letters": input.toLowerCase().split("")};
  console.log(wordObject);
  var result = 0;
  var value = {};
  value[2] = ["d", "g"];
  value[3] = ["b", "c", "m", "p"];
  value[4] = ["f", "h", "v", "w", "y"];
  value[5] = ["k"];
  value[8] = ["j", "x"];
  value[10] = ["q", "z"];
   
  wordObject.letters.forEach(function(letter){
    if (value[2].indexOf(letter) > -1) {
      result += 2;
    } else if (value[3].indexOf(letter) > -1) {
      result += 3;
    } else if (value[4].indexOf(letter) > -1) {
      result += 4;
    } else if (value[5].indexOf(letter) > -1) {
      result += 5;
    } else if (value[8].indexOf(letter) > -1) {
      result += 8;
    } else if (value[10].indexOf(letter) > -1) {
      result += 10;
    } else {
      result += 1;
    }
  });
  return result;
};



// var scrabble = function(input) {
//   var letters = input.toLowerCase().split("");
//   var result = 0;
//   var value2 = ["d", "g"];
//   var value3 = ["b", "c", "m", "p"];
//   var value4 = ["f", "h", "v", "w", "y"];
//   var value5 = ["k"];
//   var value8 = ["j", "x"];
//   var value10 = ["q", "z"];


//   letters.forEach(function(letter){
//     if (value2.indexOf(letter) > -1) {
//       result += 2;
//     } else if (value3.indexOf(letter) > -1) {
//       result += 3;
//     } else if (value4.indexOf(letter) > -1) {
//       result += 4;
//     } else if (value5.indexOf(letter) > -1) {
//       result += 5;
//     } else if (value8.indexOf(letter) > -1) {
//       result += 8;
//     } else if (value10.indexOf(letter) > -1) {
//       result += 10;
//     } else {
//       result += 1;
//     }
//   });
//   return result;
// };
