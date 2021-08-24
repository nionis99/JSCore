const sum = (...values) => moreValues => {
    const sumValues = values.reduce((sum, value) => sum + value, 0);

    return moreValues
        ? sum(sumValues + moreValues)
        : sumValues;
}

console.log(sum(2, 3)());            		     //	Outputs	5
console.log(sum(2)(3)());              //	Outputs	5
console.log(sum(1)(2)(3)(4)());        //	Outputs	10
console.log(sum(1,2,3,4,5)(2)(4)(6)());