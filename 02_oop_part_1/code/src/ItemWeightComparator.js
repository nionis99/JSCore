"use strict";
exports.__esModule = true;
exports.ItemWeightComparator = void 0;
var ItemWeightComparator = /** @class */ (function () {
    function ItemWeightComparator() {
    }
    ItemWeightComparator.prototype.compare = function (first, second) {
        if (first.getWeight() > second.getWeight())
            return 1;
        if (first.getWeight() < second.getWeight())
            return -1;
        if (first.getWeight() === second.getWeight())
            return first.compareTo(second);
    };
    return ItemWeightComparator;
}());
exports.ItemWeightComparator = ItemWeightComparator;
