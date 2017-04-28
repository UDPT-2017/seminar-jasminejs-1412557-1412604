
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

describe("Spy", function() {
    var calc;
    var person,eaten = null;
 
    beforeEach(function() {
        calc  = new Calculator();
        spyOn(calc, 'add');
        person = {
    		eat: function(value) {
      			eaten = value;
    		}	
  		};

    	spyOn(person, 'eat').and.callThrough();
    });
    
 
    describe("thực hiện phép cộng", function(){
         
        //Test for sum operation
        it("kết quả của 3 + 5 ", function() {
            //call any method
            calc.add(3,5);
            person.eat('banana');
 
            //verify it got executed
            expect(calc.add).toHaveBeenCalled();
            expect(calc.add).toHaveBeenCalledWith(3,5);
            expect(person.eat).toHaveBeenCalled();
        });

        it("stops all execution on a function", function() {
   		//Spy sẽ chặn hàm eat, do đó giá trị eaten không được set
   		expect(eaten).toBe('banana');
 });
 
    });
});
describe("Fake module", function() {
 var person, eaten = null;
 
 //Hàm này được chạy đầu mỗi test case
 beforeEach(function() {
    person = {
      eat: function(value) {
           eaten = value;
      },
      foodEaten: function(){
           //Viết chưa xong
      }
 };
 
 //Spy sẽ làm mock
 //Giả kết quả trả về của hàm foodEaten
     spyOn(person, 'foodEaten').and.callFake(function() {
        return 'banana';
     });;
 });
 
 it("gọi kết quả hàm mock", function() {
     //Gọi kết quả lấy từ hàm mock
     expect(person.foodEaten()).toBe('banana');
 });
});