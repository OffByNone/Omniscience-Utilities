const SdkResolver = require("omniscience-sdk-resolver");
const Utilities = require("./Exports");

module.exports = new Utilities(new SdkResolver().resolve());