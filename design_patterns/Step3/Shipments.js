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
exports.__esModule = true;
exports.Oversize = exports.Package = exports.Letter = void 0;
var Shipment_1 = require("./Shipment");
var Letter = /** @class */ (function (_super) {
    __extends(Letter, _super);
    function Letter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Letter;
}(Shipment_1["default"]));
exports.Letter = Letter;
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Package;
}(Shipment_1["default"]));
exports.Package = Package;
var Oversize = /** @class */ (function (_super) {
    __extends(Oversize, _super);
    function Oversize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Oversize;
}(Shipment_1["default"]));
exports.Oversize = Oversize;
