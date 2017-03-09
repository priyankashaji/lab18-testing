describe("infoFactory",function(){
  beforeEach(module("lab18Module"));
  var infoFactory;
  beforeEach(inject(function(_infoFactory_){
    infoFactory=_infoFactory_;
  }));
   it("returns Fizz",function(){
     expect(infoFactory.takeNumber(3)).toBe("Fizz");
   });
   it("returns Buzz",function(){
     expect(infoFactory.takeNumber(5)).toBe("Buzz");
   });
   it("returns FizzBuzz",function(){
     expect(infoFactory.takeNumber(15)).toBe("FizzBuzz");
   });
  it("returns not FizzBuzz",function(){
    expect(infoFactory.takeNumber(11)).toBe("not fizzbuzzable");
  });
});
