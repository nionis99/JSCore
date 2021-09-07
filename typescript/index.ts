interface BoxUseCase {
    printBoxValues: () => void;
}

abstract class Box implements BoxUseCase {
    protected name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    abstract printBoxValues(): void;
}

class ItemBox<T> extends Box {
    private readonly value: T;
    private readonly color: string;

    constructor(name: string, value: T, color: string) {
        super(name);
        this.value = value;
        this.color = color;
    }

    public printBoxValues() {
        return console.log(`The box ${this.name} is ${this.color} and has value ${this.value} type of ${typeof this.value}.`);
    }
}

const itemBoxA = new ItemBox('A', 1, "yellow");
const itemBoxB = new ItemBox('B', "2", "green");
const itemBoxC = new ItemBox('C', true, "red");

itemBoxA.printBoxValues();
itemBoxB.printBoxValues();
itemBoxC.printBoxValues();
