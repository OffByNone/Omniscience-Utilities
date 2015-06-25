///<reference path="./support/jasmine.d.ts" />
/*eslint prefer-const:0*/
"use strict";

require("babel/register");
const Constants = require("../lib/Constants");
const UrlProvider = require("../lib/UrlProvider");

describe("UrlProvider", function () {
	let _sut;
	const _mockSdk = {};
	beforeEach(function () {
		_sut = new UrlProvider(_mockSdk);
	});

	describe("toUrl", function () {
		it("should return null when path is null", function () {
			//arrange
			let path = null;

			//act
			let actual = _sut.toUrl(path, null, null);

			//assert
			expect(actual).toBeNull();
		});
		it("should return null when path is an empty string", function () {
			//arrange
			let path = "";

			//act
			let actual = _sut.toUrl(path, null, null);

			//assert
			expect(actual).toBeNull();
		});
		it("should return null when path is not found", function () {
			//arrange
			let path = Constants.notFound;

			//act
			let actual = _sut.toUrl(path, null, null);

			//assert
			expect(actual).toBeNull();
		});
		it("should return path as url object when path is a valid uri", function () {
			//arrange
			let path = "http://example.com";
			let expected = { url: "your new url" };
			_mockSdk.isValidURI = jasmine.createSpy("valid url spy").and.returnValue(true);
			_mockSdk.URL = jasmine.createSpy("new url spy").and.returnValue(expected);

			//act
			let actual = _sut.toUrl(path, null, null);

			//assert
			expect(_mockSdk.URL).toHaveBeenCalledWith(path, undefined);
			expect(actual).toBe(expected);
		});
		it("should return baseUrl + path as url object when path is not a valid uri, and baseUrl + path is.", function () {
			//arrange
			let path = "/test";
			let baseUrl = "http://example.com";
			let currentUrl = "http://example.com/testing/2";
			let expected = { url: "your new url" };
			_mockSdk.isValidURI = jasmine.createSpy("valid url spy").and.returnValue(false);
			_mockSdk.URL = jasmine.createSpy("new url spy").and.returnValue(expected);

			//act
			let actual = _sut.toUrl(path, currentUrl, baseUrl);

			//assert
			expect(_mockSdk.URL).toHaveBeenCalledWith(path, baseUrl);
			expect(actual).toBe(expected);
		});
		it("should return currentUrl.origin + path as url object when path is not valid, baseUrl + path is not valid, and currentUrl.origin + path is.", function () {
			//arrange
			let path = "/test";
			let baseUrl = "";
			let currentUrl = "http://example.com/testing/2";
			let expected = { url: "your new url" };
			_mockSdk.isValidURI = jasmine.createSpy("valid url spy").and.returnValue(false);
			_mockSdk.URL = jasmine.createSpy("new url spy").and.callFake(function (source, base) {
				if (base === baseUrl)
					throw new Error("error");
				return expected;
			});

			//act
			let actual = _sut.toUrl(path, currentUrl, baseUrl);

			//assert
			expect(_mockSdk.URL).toHaveBeenCalledWith(path, baseUrl);
			expect(_mockSdk.URL).toHaveBeenCalledWith(path, currentUrl);
			expect(actual).toBe(expected);
		});
	});
	describe("createUrl", function () {
		it("should return a new URL object", function () {
			//arrange
			let baseUrl = "http://example.com";
			let source = "http://example.com/testing/2";
			let expected = { url: "your new url" };

			_mockSdk.URL = jasmine.createSpy("new url spy").and.returnValue(expected);

			//act
			let actual = _sut.createUrl(source, baseUrl);

			//assert
			expect(_mockSdk.URL).toHaveBeenCalledWith(source, baseUrl);
			expect(actual).toBe(expected);
		});
	});
	describe("isValidUri", function () {
		it("should return true when Uri is valid", function () {
			//arrange
			_mockSdk.isValidURI = jasmine.createSpy("isValidURI").and.returnValue(true);
			let uri = "a valid url here";
			//act
			let actual = _sut.isValidUri(uri);
			//assert
			expect(_mockSdk.isValidURI).toHaveBeenCalledWith(uri);
			expect(actual).toBeTruthy();
		});
		it("should return false when Uri is not valid", function () {
			//arrange
			_mockSdk.isValidURI = jasmine.createSpy("isValidURI").and.returnValue(false);
			let uri = "a non valid url here";
			//act
			let actual = _sut.isValidUri(uri);
			//assert
			expect(_mockSdk.isValidURI).toHaveBeenCalledWith(uri);
			expect(actual).toBeFalsy();
		});
	});
});