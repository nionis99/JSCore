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
var Box = /** @class */ (function () {
    function Box(name) {
        this.name = name;
    }
    return Box;
}());
var ItemBox = /** @class */ (function (_super) {
    __extends(ItemBox, _super);
    function ItemBox(name, value, color) {
        var _this = _super.call(this, name) || this;
        _this.value = value;
        _this.color = color;
        return _this;
    }
    ItemBox.prototype.printBoxValues = function () {
        return console.log("The box " + this.name + " is " + this.color + " and has value " + this.value + " type of " + typeof this.value + ".");
    };
    return ItemBox;
}(Box));
var itemBoxA = new ItemBox('A', 1, "yellow");
var itemBoxB = new ItemBox('B', "2", "green");
var itemBoxC = new ItemBox('C', true, "red");
itemBoxA.printBoxValues();
itemBoxB.printBoxValues();
itemBoxC.printBoxValues();
