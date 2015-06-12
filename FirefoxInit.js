

module.exports = function createCompositionRoot() {
	var CompositionRoot = require('./CompositionRoot');
	var AddonSdk = require('./api/AddonSdk');
	return new CompositionRoot(AddonSdk);
};
