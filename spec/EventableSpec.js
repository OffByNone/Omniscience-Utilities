///<reference path="./support/jasmine.d.ts" />
/*eslint prefer-const:0*/
"use strict";

require("babel/register");
const Constants = require("../lib/Constants");
const Eventable = require("../lib/Eventable");

describe("Eventable", function () {
	describe("on/emit", function () {
		it("should call all callbacks bound using on and pass in each parameter separately, when calling emit using same eventType", function () {
			//arrange
			let sut = new Eventable();
			let eventType = "testEvent";

			let callback1 = jasmine.createSpy("firstcallback");
			let callback2 = jasmine.createSpy("secondcallback");
			let callback3 = jasmine.createSpy("thirdcallback");

			let arg1 = "arg1";
			let arg2 = "arg2";
			let arg3 = "arg3";

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
	describe("on", function () {
		it("should throw error when eventType is null", function () {
			//arrange
			let sut = new Eventable();

			try {
				sut.on(null, null);
				fail("expected error was not thrown");
			}
			catch (e) {
				expect(e.message).toBe(Constants.argumentNullError + "eventType");
			}
		});
		it("should throw error when callback is not a function", function () {
			//arrange
			let sut = new Eventable();

			try {
				sut.on("someevent", null);
				fail("expected error was not thrown");
			}
			catch (e) {
				expect(e.message).toBe(Constants.argumentTypeError + "callback must be a function.");
			}
		});
	});
	describe("emit", function () {
		it("should throw error when eventType is null", function () {
			//arrange
			let sut = new Eventable();

			try {
				sut.on(null, null);
				fail("expected error was not thrown");
			}
			catch (e) {
				expect(e.message).toBe(Constants.argumentNullError + "eventType");
			}
		});
	});
});