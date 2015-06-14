///<reference path="./support/jasmine.d.ts" />
require("babel/register");
const Eventable = require("../lib/Eventable");

describe("Eventable", function () {
	describe("on/emit", function () {
		it("should call all callbacks bound using on and pass in each parameter separately, when calling emit using same eventType", function () { 
			//arrange
			var sut = new Eventable();
			var eventType = "testEvent";

			var callback1 = jasmine.createSpy("firstcallback");
			var callback2 = jasmine.createSpy("secondcallback");
			var callback3 = jasmine.createSpy("thirdcallback");

			var arg1 = "arg1";
			var arg2 = "arg2";
			var arg3 = "arg3";

			sut.on(eventType, callback1);
			sut.on(eventType, callback2);
			sut.on("some other event", callback3);
			
			//act
			sut.emit(eventType, arg1, arg2, arg3);
			
			//assert
			expect(callback1).toHaveBeenCalledWith(arg1, arg2, arg3);
			expect(callback2).toHaveBeenCalledWith(arg1, arg2, arg3);
			expect(callback3).not.toHaveBeenCalled();
		});
	});
});