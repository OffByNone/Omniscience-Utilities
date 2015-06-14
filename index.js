const SdkResolver = require("omniscience-sdk-resolver");
const CompositionRoot = require("./CompositionRoot");
require("babel/register");


var sdkResolver = new SdkResolver();
var compositionRoot = new CompositionRoot(sdkResolver.resolve());

module.exports = compositionRoot;