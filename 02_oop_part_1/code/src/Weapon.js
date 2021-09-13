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
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, value, weight, baseDamage, baseDurability) {
        var _this = _super.call(this, name, value, weight) || this;
        _this.baseDamage = baseDamage;
        _this.damageModifier = Weapon.MODIFIER_CHANGE_RATE;
        _this.baseDurability = baseDurability;
        _this.durabilityModifier = Weapon.MODIFIER_CHANGE_RATE;
        return _this;
    }
    Weapon.prototype.getBaseDamage = function () {
        return this.baseDamage;
    };
    Weapon.prototype.setBaseDamage = function (baseDamage) {
        this.baseDamage = baseDamage;
    };
    Weapon.prototype.getDamageModifier = function () {
        return this.damageModifier;
    };
    Weapon.prototype.setDamageModifier = function (damageModifier) {
        this.damageModifier = damageModifier;
    };
    Weapon.prototype.getBaseDurability = function () {
        return this.baseDurability;
    };
    Weapon.prototype.setBaseDurability = function (baseDurability) {
        this.baseDurability = baseDurability;
    };
    Weapon.prototype.getDurabilityModifier = function () {
        return this.durabilityModifier;
    };
    Weapon.prototype.setDurabilityModifier = function (durabilityModifier) {
        this.durabilityModifier = durabilityModifier;
    };
    Weapon.prototype.getDamage = function () {
        return parseFloat((this.baseDamage + this.damageModifier).toFixed(2));
    };
    Weapon.prototype.getDurability = function () {
        return parseFloat(((this.baseDurability + this.durabilityModifier) * 100).toFixed(2));
    };
    Weapon.prototype.use = function () {
        var message;
        if (this.getDurability() <= 0) {
            message = "You can't use the " + this.getName() + ", it is broken.";
        }
        else {
            message = "You use the " + this.getName() + ", dealing " + this.getDamage() + " points of damage.";
            this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;
            if (this.getDurability() <= 0)
                message += " The " + this.getName() + " breaks";
        }
        return message;
    };
    ;
    Weapon.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ", Damage : " + this.getDamage() + ", Durability : " + this.getDurability() + "%";
    };
    Weapon.MODIFIER_CHANGE_RATE = 0.05;
    Weapon.MAXIMUM_DAMAGE_MODIFIER = 0.25;
    Weapon.MAXIMUM_DURABILITY_MODIFIER = 1;
    return Weapon;
}(Item_1.Item));
exports["default"] = Weapon;
