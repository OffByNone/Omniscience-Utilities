/*eslint new-cap:0*/
"use strict";

const SdkResolver = require("omniscience-sdk-resolver");
const Eventable = require("./Eventable");
const UrlProvider = require("./UrlProvider");
const fetch = require("./fetch");
const MD5 = require("./MD5");

class Utilities {
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

module.exports.Utilities = Utilities;
module.exports.Eventable = Eventable;