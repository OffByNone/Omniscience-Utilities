const UrlProvider = require('./UrlProvider');
const Eventable = require('./Eventable');

class Utilities {
	constructor(sdk) {
		this._sdk = sdk;
	}
	createUrlProvider(){
		return new UrlProvider(this._sdk.url);
	}
}

module.exports.Utilities = Utilities;
module.exports.Eventable = Eventable;