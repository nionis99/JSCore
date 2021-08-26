function NamedOne(firstName, lastName) {
    let _firstName = firstName;
    let _lastName = lastName;

    return {
        get firstName() {
            return _firstName;
        },

        set firstName(name) {
            return _firstName = name;
        },

        get lastName() {
            return _lastName;
        },

        set lastName(lastName) {
            return _lastName = lastName;
        },

        get fullName() {
            return `${_firstName} ${_lastName}`;
        },

        set fullName(fullName) {
            const names = fullName.split(' ');
            if (names.length >= 2) {
                _firstName = names[0];
                _lastName = names[names.length - 1];
            }
        }
    }
}


const namedOne = new NamedOne("Naomi", "Wang");
console.log("After initialize: ", {...namedOne});

namedOne.firstName = "John";
namedOne.lastName = "Doe";
console.log("After John and Doe first and last names: ", namedOne.fullName);

namedOne.fullName = "Bill Smith";
console.log("After Bill Smith fullname: ", {firstName: namedOne.firstName, lastName: namedOne.lastName});

namedOne.fullName = "Tom";
console.log("After Tom fullName: ", namedOne.fullName);
namedOne.fullName = "TomDonnovan";
console.log("After TomDonnovan fullName: ", namedOne.fullName);





