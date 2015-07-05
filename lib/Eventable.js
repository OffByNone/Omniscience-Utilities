"use strict";
const Constants = require("./Constants");

class Eventable {
    constructor() {
        this._subscriptions = {};
    }
    on(eventType, callback) {
        if (!eventType) throw new Error(Constants.argumentNullError + "eventType");
        if (typeof callback !== "function") throw new Error(Constants.argumentTypeError + "callback must be a function.");

        this._subscriptions[eventType] = this._subscriptions[eventType] || [];
        this._subscriptions[eventType].push(callback);
    }
    emit(eventType, ...data) {
		if (!eventType) throw new Error(Constants.argumentNullError + "eventType");
        if (!Array.isArray(this._subscriptions[eventType])) return; //nobody has subscribed yet, just return
        this._subscriptions[eventType].forEach(subscriptionCallback => subscriptionCallback(...data));
    }
}


module.exports = Eventable;