"use strict";
exports.__esModule = true;
// Create the inventory
var Inventory_1 = require("./code/src/Inventory");
var ItemWeightComparator_1 = require("./code/src/ItemWeightComparator");
var Sword_1 = require("./code/src/Sword");
var Pizza_1 = require("./code/src/Pizza");
var inventory = new Inventory_1["default"]();
// Create a set of items
var a = new Sword_1["default"](30.4219, 0.7893, 300, 0.125);
var b = new Sword_1["default"](40, 0.7893, 200, 0.325);
var c = new Sword_1["default"](40, 1, 100, 0.475);
var pizza = new Pizza_1["default"](12, false);
// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);
// Display the inventory
console.log(inventory.toString());
// Sort by natural order
inventory.sort();
// Display the new inventory
console.log(inventory.toString());
// Sort by weight
inventory.sort(new ItemWeightComparator_1.ItemWeightComparator());
// Display the inventory again
console.log(inventory.toString());
// Use the sword
console.log(a.use());
console.log(a.use());
console.log(a.use());
console.log(a.use());
console.log(a.use());
console.log(a.use());
console.log(a.use());
console.log(a.use());
console.log(a.use());
console.log(a.use());
