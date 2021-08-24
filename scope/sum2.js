const sum = (...args) => Object.assign(sum.bind(null, ...args),
    {valueOf: () => args.reduce((a, c) => a + c, 0)});

console.log(+sum(2,3));		    //	Outputs	5
console.log(+sum(2)(3));	        //	Outputs	5
console.log(+sum(1)(2)(3)(4));	//	Outputs	10
console.log(+sum(1,2,3,4,5)(2)(4)(6)());