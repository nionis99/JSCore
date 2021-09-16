"use strict";
exports.__esModule = true;
var Shipment_1 = require("./Shipment");
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
        this.events[eventType].forEach(function (callback) { return callback(state.ship()); }); // Calling instant ship
    };
    return Gui;
}());
// Don't know how these two would relate.
var Client = /** @class */ (function () {
    function Client(gui) {
    }
    Client.prototype.onShip = function (shipment) {
    };
    return Client;
}());
var state = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "92021",
    weight: 24
};
// But this looks like something now.
var GuiMock = new Gui();
GuiMock.on('onShip', function (ship) { return console.log(ship); }); // using callback
var shipment1 = new Shipment_1["default"](state);
var shipment2 = new Shipment_1["default"](state);
GuiMock.trigger('onShip', shipment1); // Shipment with the ID 0 will be picked up from  addressFrom and shipped to  addressTo Cost = 9.36
GuiMock.trigger('onShip', shipment2);
GuiMock.trigger('onShip', shipment2);
