/*eslint new-cap:0*/
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SdkResolver = require("omniscience-sdk-resolver");
var EventableClass = require("./Eventable");
var UrlProvider = require("./UrlProvider");
var _fetch = require("./fetch");
var _MD5 = require("./MD5");

var UtilitiesClass = (function () {
	function UtilitiesClass() {
		_classCallCheck(this, UtilitiesClass);

		this._sdk = new SdkResolver().resolve();
	}

	_createClass(UtilitiesClass, [{
		key: "createUrlProvider",
		value: function createUrlProvider() {
			return new UrlProvider(this._sdk.url());
		}
	}, {
		key: "fetch",
		value: function fetch() {
			return _fetch(this._sdk.XMLHttpRequest());
		}
	}, {
		key: "MD5",
		value: function MD5() {
			return _MD5;
		}
	}]);

	return UtilitiesClass;
})();

module.exports.Utilities = UtilitiesClass;
module.exports.Eventable = EventableClass;