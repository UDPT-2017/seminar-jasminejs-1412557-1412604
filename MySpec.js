
function Calculator(){
	this.add=function(a,b){return a+b;};
	this.minus = function(a,b) {return a-b;};
	this.multiply = function(a,b) {return a*b;};
	this.divide = function(a,b) {return a/b;};
}
function gimmeANumber() {
    var x = 4;
    return x;
}
//Suites: describe, specs and expectations, matcher
describe("kiểm tra hàm tính toán", function(){
	var cal = new Calculator();

	it("1 + 1 = 2", function(){
		expect(2).toBe(cal.add(1,1));
	});
	it("2 + 2 <> 5", function() {
   		expect(5).not.toBe(cal.add(2,2));
 	});
 	it("5 x 2 < 11", function() {
 	  expect(11).toBeGreaterThan(cal.multiply(5,2));
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
	it("toBeUndefined", function() {
    	var a = {
      		foo: "foo"
    	};
 
   		expect(a.foo).not.toBeUndefined();
   		expect(a.bar).toBeUndefined();
	});
	it("toMatch", function() {
    	var message = 'foo bar baz';

    	expect(message).toMatch(/bar/);
    	expect(message).toMatch('bar');
    	expect(message).not.toMatch(/quux/);
  	});
});

describe("A spec (with setup and tear-down)", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});

describe('Hello world', function () {

    beforeEach(function () {
        jasmine.addMatchers({
            toBeDivisibleByTwo: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: (actual % 2) === 0
                        };
                    }
                };
            }
        });
    });

    it('is divisible by 2', function () {
        expect(gimmeANumber()).toBeDivisibleByTwo();
        expect(5).not.toBeDivisibleByTwo();
    });

});