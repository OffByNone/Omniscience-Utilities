'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var UrlProvider = require('./UrlProvider');
var Fetch = require('./fetch');
var _MD5 = require('./MD5');

var Utilities = (function () {
	function Utilities(sdk) {
		_classCallCheck(this, Utilities);

		this._sdk = sdk;
	}

	_createClass(Utilities, [{
		key: 'createUrlProvider',
		value: function createUrlProvider() {
			return new UrlProvider(this._sdk.url());
		}
	}, {
		key: 'fetch',
		value: function fetch() {
			return Fetch(this._sdk.XMLHttpRequest());
		}
	}, {
		key: 'MD5',
		value: function MD5() {
			return _MD5;
		}
	}]);

	return Utilities;
})();

module.exports = Utilities;