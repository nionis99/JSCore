"use strict";
exports.__esModule = true;
exports.PacificParcelShipper = exports.ChicagoSprintShipper = exports.AirEastShipper = void 0;
var Shipment_1 = require("./Shipment");
var AirEastShipper = /** @class */ (function () {
    function AirEastShipper() {
    }
    AirEastShipper.prototype.getCost = function (weight) {
        var cost = weight * AirEastShipper.PACKAGE_CHARGE;
        if (weight <= Shipment_1["default"].LETTER_SIZE)
            return weight * AirEastShipper.LETTER_CHARGE;
        if (weight > Shipment_1["default"].OVERSIZE)
            cost += 10;
        return cost;
    };
    AirEastShipper.LETTER_CHARGE = .39;
    AirEastShipper.PACKAGE_CHARGE = .25;
    return AirEastShipper;
}());
exports.AirEastShipper = AirEastShipper;
var ChicagoSprintShipper = /** @class */ (function () {
    function ChicagoSprintShipper() {
    }
    ChicagoSprintShipper.prototype.getCost = function (weight) {
        return weight <= 15
            ? weight * ChicagoSprintShipper.LETTER_CHARGE
            : weight * ChicagoSprintShipper.PACKAGE_CHARGE;
    };
    ChicagoSprintShipper.LETTER_CHARGE = .42;
    ChicagoSprintShipper.PACKAGE_CHARGE = .20;
    return ChicagoSprintShipper;
}());
exports.ChicagoSprintShipper = ChicagoSprintShipper;
var PacificParcelShipper = /** @class */ (function () {
    function PacificParcelShipper() {
    }
    PacificParcelShipper.prototype.getCost = function (weight) {
        var cost = weight * PacificParcelShipper.PACKAGE_CHARGE;
        if (weight <= Shipment_1["default"].LETTER_SIZE)
            return weight * PacificParcelShipper.LETTER_CHARGE;
        if (weight > Shipment_1["default"].OVERSIZE)
            cost += (weight - Shipment_1["default"].OVERSIZE) * PacificParcelShipper.OVERSIZE_CHARGE;
        return cost;
    };
    PacificParcelShipper.LETTER_CHARGE = .51;
    PacificParcelShipper.PACKAGE_CHARGE = .19;
    PacificParcelShipper.OVERSIZE_CHARGE = .02;
    return PacificParcelShipper;
}());
exports.PacificParcelShipper = PacificParcelShipper;
