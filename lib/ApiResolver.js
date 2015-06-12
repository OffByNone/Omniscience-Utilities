const FirefoxApi = require('./lib/AddonSdk');

class ApiResolver {
	constructor() {

	}
	resolve() {
		return new FirefoxApi();
	}
}

module.exports = ApiResolver;