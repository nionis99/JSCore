"use strict";
exports.__esModule = true;
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = [];
    }
    Inventory.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Inventory.prototype.sort = function (comparator) {
        this.items.sort(comparator ? comparator.compare : undefined);
    };
    Inventory.prototype.toString = function () {
        return this.items.join(', ').toString();
    };
    return Inventory;
}());
exports["default"] = Inventory;
