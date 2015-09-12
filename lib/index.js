/*eslint new-cap:0*/
"use strict";

const SdkResolver = require("omniscience-sdk-resolver");
const EventableClass = require("./Eventable");
const UrlProvider = require("./UrlProvider");
const fetch = require("whatwg-fetch");
const MD5 = require("./MD5");

class UtilitiesClass {
	constructor() {
		this._sdk = new SdkResolver().resolve();
	}
	createUrlProvider(){
		return new UrlProvider(this._sdk.url());
	}
	fetch() {
		return fetch(this._sdk.XMLHttpRequest());
	}
	MD5() {
		return MD5;
	}
}

module.exports.Utilities = UtilitiesClass;
module.exports.Eventable = EventableClass;