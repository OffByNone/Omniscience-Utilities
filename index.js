const ApiResolver = require("./lib/ApiResolver");
const CompositionRoot = require("./CompositionRoot");


var apiResolver = new ApiResolver();
var compositionRoot = new CompositionRoot(apiResolver.resolve());

module.exports = compositionRoot;