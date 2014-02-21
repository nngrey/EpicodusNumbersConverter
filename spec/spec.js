// describe("factorial", function() {
//   it('will multiple a number by all the positive integers less than the inputed number', function() {
//     factorial(5).should.equal(120);
//   });

//   it('will return 1 when input 1', function() {
//     factorial(1).should.equal(1);
//   });

//   it('will return 1 when input 0', function() {
//     factorial(0).should.equal(1);
//   });

//   it('will return "NaN" when input is negative', function () {
//     factorial(-3).should.equal("try a positive number!!");
//   });

//   it('will return "NaN" when input is not a whole number', function () {
//     factorial(3.4).should.equal("put a whole number!!");
//   });
// });

describe("factorialRecursive", function() {
  it('will multiple a number by all the positive integers less than the inputed number', function() {
    factorialRecursive(5).should.equal(120);
  });
  
  it('will return 1 when input 1', function() {
    factorialRecursive(1).should.equal(1);
  });
  
  it('will return 1 when input 0', function() {
    factorialRecursive(0).should.equal(1);
  });
 
  it('will return "NaN" when input is negative', function () {
    factorialRecursive(-3).should.equal("try a positive number!!");
  });
  it('will return "NaN" when input is not a whole number', function () {
    factorialRecursive(.4).should.equal("put a whole number!!");
  });
});
