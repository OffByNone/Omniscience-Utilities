const FirefoxInit = require("./FirefoxInit");

var compositionRoot = FirefoxInit.createCompositionRoot();

module.exports = {
	UrlProvider: compositionRoot.UrlProvider(),
	FileInformationService: compositionRoot.FileInformationService()
};

//todo: compile with babel