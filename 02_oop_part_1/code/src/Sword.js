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
var Weapon_1 = require("./Weapon");
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword(value, weight, baseDamage, baseDurability) {
        return _super.call(this, "sword", value, weight, baseDamage, baseDurability) || this;
    }
    Sword.prototype.polish = function () {
        var polishedDamageModifier = this.getDamageModifier() + Weapon_1["default"].MODIFIER_CHANGE_RATE;
        var newDamageModifier = polishedDamageModifier >= Weapon_1["default"].MAXIMUM_DAMAGE_MODIFIER
            ? Weapon_1["default"].MAXIMUM_DAMAGE_MODIFIER
            : polishedDamageModifier;
        this.setDamageModifier(newDamageModifier);
    };
    return Sword;
}(Weapon_1["default"]));
exports["default"] = Sword;
