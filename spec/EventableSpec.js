require("babel/register");

const Constants = require("../lib/Constants");
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
	describe("on", function () {
		it("should throw error when eventType is null", function () {
			//arrange
			var sut = new Eventable();

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
			var sut = new Eventable();

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
			var sut = new Eventable();

			try {
				sut.on(null, null);
				fail("expected error was not thrown");
			}
			catch (e) {
				expect(e.message).toBe(Constants.argumentNullError + "eventType");
			}
		});
	});
	describe("off", function () {
		it("should throw error when eventType is null", function () {
			//arrange
			var sut = new Eventable();

			try {
				sut.off(null);
				fail("expected error was not thrown");
			}
			catch (e) {
				expect(e.message).toBe(Constants.argumentNullError + "eventType");
			}
		});
	});
	describe("off", function () {
		it("should throw error when eventType is null", function () {
			//arrange
			var sut = new Eventable();

			try {
				sut.off(null);
				fail("expected error was not thrown");
			}
			catch (e) {
				expect(e.message).toBe(Constants.argumentNullError + "eventType");
			}
		});
		it("should remove any subscriptions for the given event type", function () {
			//arrange
			var sut = new Eventable();
			var eventType = "test event";
			sut._subscriptions[eventType] = ["this shouldn't exist at the end"];

			//act
			sut.off(eventType);

			//assert
			expect(typeof sut._subscriptions[eventType]).toBe("undefined");
		});
	});
});