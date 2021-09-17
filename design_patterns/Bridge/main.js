"use strict";
exports.__esModule = true;
var Client_1 = require("./Client");
var Shipments_1 = require("./Shipments");
var state1 = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "92021",
    weight: 14
};
var state2 = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "12021",
    weight: 150
};
var state3 = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "52021",
    weight: 240
};
var GuiMock = new Client_1.Gui();
var shipment1 = new Shipments_1.Letter(state1);
var shipment2 = new Shipments_1.Package(state2);
var shipment3 = new Shipments_1.Oversize(state3);
var client = new Client_1.Client(GuiMock);
client.gui.on('onShipment', function (shipment) { return console.log("Client uses gui: " + shipment); });
client.gui.trigger('onShipment', shipment1);
client.gui.trigger('onShipment', shipment2);
client.gui.trigger('onShipment', shipment3);
