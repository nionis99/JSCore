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
var letterShipment = new Shipment_1.Letter(state1);
var packageShipment = new Shipment_1.Package(state2);
var oversizeShipment = new Shipment_1.Oversize(state3);
// @ts-ignore
packageShipment = new Shipment_1.FragileShipmentDecorator(packageShipment);
// @ts-ignore
packageShipment = new Shipment_1.DoNotLeaveShipmentDecorator(packageShipment);
// @ts-ignore
packageShipment = new Shipment_1.ReturnReceiptShipmentDecorator(packageShipment);
var client = new Client_1.Client(GuiMock);
client.gui.on('onShipment', function (shipment) { return console.log("Client uses gui: " + shipment); });
client.gui.trigger('onShipment', letterShipment);
client.gui.trigger('onShipment', packageShipment);
client.gui.trigger('onShipment', oversizeShipment);
