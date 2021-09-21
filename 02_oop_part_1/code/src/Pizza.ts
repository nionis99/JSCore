import Consumable from "./Consumable";

export default class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super("pizza", 13, 24, spoiled);
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }

    eat() {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return `You eat a slice of the ${this.getName()}. ${this.isSpoiled() ? '\nYou feel sick.' : ''}`;
        }
    }

}