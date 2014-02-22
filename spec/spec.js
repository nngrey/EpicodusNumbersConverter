describe ("numbers", function(){
  it('will take the number 1 and return "one"', function(){
    numbers(2).should.equal("two");
  });

  it('will take a singel digit number and return the appropriate written word', function(){
    numbers(3).should.equal("three");
  });
  it ('will take a number between 20 and 30 and return the appropriate written words', function(){
  	numbers(24).should.equal("twenty four");
  });
  it ('will take 125 and return "one-hundred twenty five"', function(){
  	numbers(125).should.equal("one-hundred twenty five");
	});
});

