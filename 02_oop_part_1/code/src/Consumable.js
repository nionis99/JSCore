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
var Item_1 = require("./Item");
var Consumable = /** @class */ (function (_super) {
    __extends(Consumable, _super);
    function Consumable(name, value, weight, spoiled) {
        var _this = _super.call(this, name, value, weight) || this;
        _this.spoiled = spoiled;
        _this.consumed = false;
        return _this;
    }
    Consumable.prototype.use = function () {
        if (this.consumed)
            return "There is nothing left of the " + this.getName() + " to consume.";
        if (!this.spoiled && !this.consumed)
            return this.eat();
    };
    Consumable.prototype.isConsumed = function () {
        return this.consumed;
    };
    Consumable.prototype.setConsumed = function (consumed) {
        this.consumed = consumed;
    };
    Consumable.prototype.isSpoiled = function () {
        return this.spoiled;
    };
    Consumable.prototype.toString = function () {
        return _super.prototype.toString.call(this);
    };
    return Consumable;
}(Item_1.Item));
exports["default"] = Consumable;
