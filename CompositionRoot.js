const UrlProvider = require('./lib/UrlProvider');
const FileInformationService = require('./lib/FileInformationService');

class CompositionRoot {
	constructor(api) {
		this._api = api;
	}
	createUrlProvider(){
		return new UrlProvider(this._api);
	}
	createFileInformationService(){
		return new FileInformationService(this._api);
	}
}

module.exports = CompositionRoot;