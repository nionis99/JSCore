interface ItemBoxInterface {
    resetValueParameters: () => void;
}

abstract class Box {
    protected name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    abstract printBoxValues(): void;
}

class ItemBox<T> extends Box implements ItemBoxInterface {
    private readonly value: T;
    private color: string;

    constructor(name: string, value: T, color: string) {
        super(name);
        this.value = value;
        this.color = color;
    }

    printBoxValues(): void {
        return console.log(`The box ${this.name} is ${this.color} and has value ${this.value} type of ${typeof this.value}.`);
    }

    resetValueParameters(): void {
        this.name = "";
        this.color = "";
    }

}

const itemBoxA = new ItemBox<number>('A', 1, "yellow");
const itemBoxB = new ItemBox<string>('B', "2", "green");
const itemBoxC = new ItemBox<boolean>('C', true, "red");

itemBoxA.printBoxValues();
itemBoxB.printBoxValues();
itemBoxC.printBoxValues();
itemBoxC.resetValueParameters();
