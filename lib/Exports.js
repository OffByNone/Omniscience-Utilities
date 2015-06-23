const UrlProvider = require('./UrlProvider');
const Fetch = require('./fetch');
const MD5 = require('./MD5');

class Utilities {
	constructor(sdk) {
		this._sdk = sdk;
	}
	createUrlProvider(){
		return new UrlProvider(this._sdk.url());
	}
	fetch() { 
		return Fetch(this._sdk.XMLHttpRequest());
	}
	MD5() { 
		return MD5;
	}
}

module.exports = Utilities;