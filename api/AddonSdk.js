const { Cc, Ci } = require('chrome'); // https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/tutorials/chrome.html

module.exports = {
	getMimeService: () => Cc["@mozilla.org/uriloader/external-helper-app-service;1"].getService(Ci.nsIMIMEService), //todo: the string here feels like a constants string
	url: () => require('sdk/url') // https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/url
};