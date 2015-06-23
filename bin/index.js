"use strict";

var SdkResolver = require("omniscience-sdk-resolver");
var Utilities = require("./Exports");

var sdkResolver = new SdkResolver();
var utilities = new Utilities(sdkResolver.resolve());

module.exports = utilities;