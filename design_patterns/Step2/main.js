"use strict";
exports.__esModule = true;
var Shipment_1 = require("./Shipment");
var Client_1 = require("./Client");
var state1 = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "92021",
    weight: 24
};
var state2 = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "12021",
    weight: 24
};
var state3 = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "52021",
    weight: 24
};
// But this looks like something now.
var GuiMock = new Client_1.Gui();
var shipment1 = new Shipment_1["default"](state1);
var shipment2 = new Shipment_1["default"](state2);
var shipment3 = new Shipment_1["default"](state3);
var client = new Client_1.Client(GuiMock);
client.gui.on('onShipment', function (shipment) { return console.log("Client uses gui: " + shipment); });
client.gui.trigger('onShipment', shipment3);
GuiMock.on('onShip', function (ship) { return console.log(ship); }); // using callback
//Shipment with the ID 0 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment1);
//Shipment with the ID 1 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment2);
// Throw
// GuiMock.trigger('onShip2', shipment2);
