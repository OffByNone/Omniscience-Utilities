'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var UrlProvider = require('./UrlProvider');
var Eventable = require('./Eventable');

var Utilities = (function () {
	function Utilities(sdk) {
		_classCallCheck(this, Utilities);

		this._sdk = sdk;
	}

	_createClass(Utilities, [{
		key: 'createUrlProvider',
		value: function createUrlProvider() {
			return new UrlProvider(this._sdk.url);
		}
	}]);

	return Utilities;
})();

module.exports.Utilities = Utilities;
module.exports.Eventable = Eventable;