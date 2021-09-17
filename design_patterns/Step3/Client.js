"use strict";
exports.__esModule = true;
exports.Client = exports.Gui = void 0;
var Gui = /** @class */ (function () {
    function Gui() {
        this.events = {};
    }
    Gui.prototype.on = function (eventType, callback) {
        if (!this.events[eventType])
            this.events[eventType] = [];
        this.events[eventType].push(callback);
    };
    Gui.prototype.trigger = function (eventType, state) {
        if (!this.events[eventType]) {
            throw new Error("Can't trriger an event. Event \"" + eventType + "\" doesn't exits.");
        }
        this.events[eventType].forEach(function (callback) { return callback(state.ship()); }); // Calling ship itself
    };
    return Gui;
}());
exports.Gui = Gui;
// Might be wrong
var Client = /** @class */ (function () {
    function Client(gui) {
        this.gui = gui;
    }
    Client.prototype.onShip = function (shipment) {
        return this.gui.trigger('onShip', shipment);
    };
    return Client;
}());
exports.Client = Client;
