describe ("scrabble", function(){
  it('will take the letter "a" and return the number 1', function(){
    scrabble("a").should.equal(1);
  });
  
  it('will take the letters "d" or "g" and return the number 2', function(){
    scrabble("d").should.equal(2);
  });
  
  it('will take the word "ad" and return the value 3', function(){
    scrabble("ad").should.equal(3);
  });
  
  it('will take the word "add" and return result 5', function(){
    scrabble("add").should.equal(5);
  });
  
  it('will take the word "bad" and return result 6', function(){
    scrabble('bad').should.equal(6);
  });
  
  it('will take the word "adbfkjq" and return result 33', function(){
    scrabble('adbfkjq').should.equal(33);
  });
  
  it('will take capital letters and return a result', function(){
    scrabble('ABDFKJQ').should.equal(33);
  });
});

