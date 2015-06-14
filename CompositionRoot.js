const UrlProvider = require('./lib/UrlProvider');

class CompositionRoot {
	constructor(sdk) {
		this._sdk = sdk;
	}
	createUrlProvider(){
		return new UrlProvider(this._sdk.url);
	}
}

module.exports = CompositionRoot;