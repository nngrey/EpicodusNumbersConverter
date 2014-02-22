describe ("numbers", function(){
  it('will take the number 1 and return "one"', function(){
    numbers(1).should.equal("one");
  });

  it('will take two digit numbers and return the appropriate written words', function(){
    numbers(21).should.equal("twenty one");
  });
});

