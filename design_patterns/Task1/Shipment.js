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
var ID = 0;
var Shipment = /** @class */ (function () {
    function Shipment(state) {
        var uuid = this.getShipmentId();
        this.state = __assign(__assign({}, state), { shipmentId: uuid });
    }
    Shipment.prototype.getShipmentId = function () {
        return ID++;
    };
    Shipment.prototype.ship = function () {
        var _a = this.state, shipmentId = _a.shipmentId, fromZipCode = _a.fromZipCode, fromAddress = _a.fromAddress, toZipCode = _a.toZipCode, toAddress = _a.toAddress, weight = _a.weight;
        var pickedFrom = fromZipCode + ' ' + fromAddress;
        var shippedTo = toZipCode + ' ' + toAddress;
        return "Shipment with the ID " + shipmentId + " will be picked up from " + pickedFrom +
            ("and shipped to " + shippedTo + " \nCost = " + weight * Shipment.WEIGHT_PRICE_RATE);
    };
    Shipment.WEIGHT_PRICE_RATE = 0.39;
    return Shipment;
}());
exports["default"] = Shipment;
