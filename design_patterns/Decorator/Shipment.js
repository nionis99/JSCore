"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.ReturnReceiptShipmentDecorator = exports.DoNotLeaveShipmentDecorator = exports.FragileShipmentDecorator = exports.ShipmentDecorator = exports.Oversize = exports.Package = exports.Letter = void 0;
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
        return "Shipment with the ID " + shipmentId + " will be picked up from " + fromAddress + " " +
            (fromZipCode + " and shipped to " + toAddress + " " + toZipCode + "\nCost = " + this.getCost(weight));
    };
    Shipment.LETTER_SIZE = 15;
    Shipment.OVERSIZE = 160;
    return Shipment;
}());
exports["default"] = Shipment;
var Letter = /** @class */ (function (_super) {
    __extends(Letter, _super);
    function Letter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Letter;
}(Shipment));
exports.Letter = Letter;
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Package;
}(Shipment));
exports.Package = Package;
var Oversize = /** @class */ (function (_super) {
    __extends(Oversize, _super);
    function Oversize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Oversize;
}(Shipment));
exports.Oversize = Oversize;
var ShipmentDecorator = /** @class */ (function () {
    function ShipmentDecorator(shipment) {
        this.shipment = shipment;
    }
    ShipmentDecorator.prototype.ship = function () {
        return this.shipment.ship();
    };
    return ShipmentDecorator;
}());
exports.ShipmentDecorator = ShipmentDecorator;
var FragileShipmentDecorator = /** @class */ (function (_super) {
    __extends(FragileShipmentDecorator, _super);
    function FragileShipmentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FragileShipmentDecorator.prototype.ship = function () {
        return this.shipment.ship() + '\n**MARK FRAGILE**';
    };
    return FragileShipmentDecorator;
}(ShipmentDecorator));
exports.FragileShipmentDecorator = FragileShipmentDecorator;
var DoNotLeaveShipmentDecorator = /** @class */ (function (_super) {
    __extends(DoNotLeaveShipmentDecorator, _super);
    function DoNotLeaveShipmentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoNotLeaveShipmentDecorator.prototype.ship = function () {
        return this.shipment.ship() + '\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**';
    };
    return DoNotLeaveShipmentDecorator;
}(ShipmentDecorator));
exports.DoNotLeaveShipmentDecorator = DoNotLeaveShipmentDecorator;
var ReturnReceiptShipmentDecorator = /** @class */ (function (_super) {
    __extends(ReturnReceiptShipmentDecorator, _super);
    function ReturnReceiptShipmentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReturnReceiptShipmentDecorator.prototype.ship = function () {
        return this.shipment.ship() + '\n**MARK RETURN RECEIPT REQUESTED**';
    };
    return ReturnReceiptShipmentDecorator;
}(ShipmentDecorator));
exports.ReturnReceiptShipmentDecorator = ReturnReceiptShipmentDecorator;
