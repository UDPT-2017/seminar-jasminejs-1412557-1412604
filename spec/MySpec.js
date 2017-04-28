
function Calculator(){
	this.add=function(a,b){return a+b;};
	this.minus = function(a,b) {return a-b;};
	this.multiply = function(a,b) {return a*b;};
	this.divide = function(a,b) {return a/b;};
}
//Suites: describe, specs and expectations, matcher
describe("Cộng trừ", function(){
	var cal = new Calculator();

	it("Một + một là hai(matcher tobe)", function(){
		expect(2).toBe(cal.add(1,1));
	});
	it("Hai với hai không bằng năm(matcher not to be)", function() {
   		expect(5).not.toBe(cal.add(2,2));
 	});
 
 	it("Năm trừ hai bằng ba", function() {
   		expect(3).toBe(cal.minus(5,2));
 	});
 
});
 
describe("Nhân chia", function() {
 	var cal = new Calculator();
 
 	it("Năm nhân hai bằng mười", function() {
 	  expect(10).toBe(cal.multiply(5,2));
 	});
 
 	it("Sáu chia hai bằng ba", function() {
   		expect(3).toBe(cal.divide(6,2));
 	});
});

describe("so sánh sử dụng matcher", function(){
	it("toEqual", function(){
	var foo={
		a:12,
		b:34
	};
	var bar={
		a:12,
		b:34,
	};
	expect(foo).toEqual(bar);
	});
	it("Sử dụng toBeUndefined", function() {
    var a = {
      foo: "foo"
    };
 
   	expect(a.foo).not.toBeUndefined();
   	expect(a.bar).toBeUndefined();
	});
	it("The 'toMatch' matcher is for regular expressions", function() {
    var message = 'foo bar baz';

    expect(message).toMatch(/bar/);
    expect(message).toMatch('bar');
    expect(message).not.toMatch(/quux/);
  });
});