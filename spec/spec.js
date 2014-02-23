describe ("numbers", function(){

  it('will take the number 1 and return "one"', function(){
    numbers(2).should.equal("two");
  });

  it('will take a single digit number and return the corresponding word', function(){
    numbers(3).should.equal("three");
  });

  it ('will take 20 and return "twenty"', function(){
  	numbers(20).should.equal("twenty");
  });

  it ('will take a two-digit number and return the corresponding words', function(){
  	numbers(24).should.equal("twenty-four");
  });

  it ('will take 100 and return "one hundred"', function(){
  	numbers(100).should.equal("one hundred");
	});

	it ('will take 118 and return "one hundred eighteen"', function(){
		numbers(118).should.equal("one hundred eighteen");
	});

	it ('will take a three-digit number and return the corresponding words', function(){
		numbers(125).should.equal("one hundred twenty-five");
	});

	it ('will take 1000 and return "one thousand"', function(){
		numbers(1000).should.equal("one thousand");
	});

	it ('will take a four-digit number and return the corresponding words', function(){
		numbers(2345).should.equal("two thousand three hundred forty-five");
	});

	it ('will take 10000 and return ten thousand', function (){
		numbers(10000).should.equal("ten thousand");
	});

	it('will take a five-digit number and return the corresponding words', function(){
		numbers(23567).should.equal("twenty-three thousand five hundred sixty-seven");
	});

	it ('will take 100000 and return "one hundred thousand', function(){
		numbers(100000).should.equal("one hundred thousand");
	});

	it ('will take a six-digit number and return the corresponding words', function(){
		numbers(123217).should.equal("one hundred twenty-three thousand two hundred seventeen");
	});

});

