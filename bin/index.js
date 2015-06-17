"use strict";

var SdkResolver = require("omniscience-sdk-resolver");
var Utilities = require("./Exports");
require("babel/register");

var sdkResolver = new SdkResolver();
var utilities = new Utilities(sdkResolver.resolve());

module.exports = utilities;