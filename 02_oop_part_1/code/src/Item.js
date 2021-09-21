"use strict";
exports.__esModule = true;
exports.Item = void 0;
var id = 0;
var counter = 0;
var Item = /** @class */ (function () {
    function Item(name, value, weight) {
        this.id = id === 0 ? id : id + 1;
        this.name = name;
        this.value = value;
        this.weight = weight;
        counter++;
        id += 1;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.getNumberOfItems = function () {
        return this.numberOfItems;
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.setName = function (name) {
        this.name = name;
    };
    Item.prototype.getValue = function () {
        return this.value;
    };
    Item.prototype.setValue = function (price) {
        this.value = price;
    };
    Item.prototype.getWeight = function () {
        return this.weight;
    };
    Item.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Item.prototype.compareTo = function (other) {
        if (this.value > other.value)
            return 1;
        if (this.value < other.value)
            return -1;
        if (this.value === other.value) {
            if (this.name.toLowerCase() > other.name.toLowerCase())
                return 1;
            if (this.name.toLowerCase() < other.name.toLowerCase())
                return -1;
            return 0;
        }
    };
    Item.prototype.toString = function () {
        return this.name + " - Value: " + this.value + ", Weight: " + this.weight;
    };
    Item.reset = function () {
        counter = 0;
    };
    Item.numberOfItems = counter;
    return Item;
}());
exports.Item = Item;
