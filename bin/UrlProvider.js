"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = require("./Constants");

var UrlProvider = (function () {
	function UrlProvider(urlSdk) {
		_classCallCheck(this, UrlProvider);

		this._urlSdk = urlSdk;
	}

	_createClass(UrlProvider, [{
		key: "toUrl",
		value: function toUrl(path, currentUrl, baseUrl) {
			if (!path || path.length === 0 || path === Constants.notFound) return null;
			if (this.isValidUri(path)) return this.createUrl(path);
			try {
				return this.createUrl(path, baseUrl);
			} catch (e) {}
			try {
				return this.createUrl(path, currentUrl);
			} catch (e) {}

			return null;
		}
	}, {
		key: "createUrl",
		value: function createUrl(source, base) {
			return new this._urlSdk.URL(source, base);
		}
	}, {
		key: "isValidUri",
		value: function isValidUri(path) {
			return this._urlSdk.isValidURI(path);
		}
	}]);

	return UrlProvider;
})();

module.exports = UrlProvider;
/* */ /* */