"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Shipper_1 = require("./Shipper");
var ID = 0;
var Shipment = /** @class */ (function () {
    function Shipment(state) {
        var shipperSource = parseInt(state.fromZipCode[0]);
        this.state = __assign(__assign({}, state), { shipmentId: this.getShipmentId() });
        if (shipperSource > 4 && shipperSource < 7) {
            this.setShipper(new Shipper_1.ChicagoSprintShipper());
        }
        else if (shipperSource > 7) {
            this.setShipper(new Shipper_1.PacificParcelShipper());
        }
        else {
            this.setShipper(new Shipper_1.AirEastShipper());
        }
    }
    Shipment.prototype.setShipper = function (shipper) {
        this.shipper = shipper;
    };
    Shipment.prototype.getCost = function (weight) {
        return this.shipper.getCost(weight);
    };
    Shipment.prototype.getShipmentId = function () {
        return ID++;
    };
    Shipment.prototype.ship = function () {
        var _a = this.state, shipmentId = _a.shipmentId, fromZipCode = _a.fromZipCode, fromAddress = _a.fromAddress, toZipCode = _a.toZipCode, toAddress = _a.toAddress, weight = _a.weight;
        var pickedFrom = fromAddress + ' ' + fromZipCode;
        var shippedTo = toAddress + ' ' + toZipCode;
        return "Shipment with the ID " + shipmentId + " will be picked up from " + pickedFrom +
            (" and shipped to " + shippedTo + " \nCost = " + this.getCost(weight));
    };
    Shipment.LETTER_SIZE = 15;
    Shipment.OVERSIZE = 160;
    return Shipment;
}());
exports["default"] = Shipment;
