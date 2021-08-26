function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return 'My name is ' + this.name + ' and I am ' + this.age;
};

function myNew(constructor, ...theArgs) {
    return new constructor(...theArgs);
}

function myNew2(constructor, ...theArgs) {
    const object = Object.assign(constructor.prototype); 
    // Usually for this puprose it's used ```Object.create()```.
    // const object = Object.create(constructor.prototype);
    constructor.call(object, ...theArgs);
    return object;
}

const john = myNew(Person, 'John', 30);
const john2 = myNew2(Person, 'John', 30);
const john3 = new Person('John', 30);
const jack = new Person('Jack', 40);

console.log("isEqual: ", john2.name === john.name && john.name === john3.name);
console.log(john.introduce());	//	My	name	is	John	and	I	am	30
console.log(john2.introduce());	//	My	name	is	John	and	I	am	30
console.log(john3.introduce());	//	My	name	is	John	and	I	am	30
console.log(jack.introduce());	//	My	name	is	Jack	and	I	am	40
