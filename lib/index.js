const SdkResolver = require("omniscience-sdk-resolver");
const Utilities = require("./Exports");


var sdkResolver = new SdkResolver();
var utilities = new Utilities(sdkResolver.resolve());

module.exports = utilities;