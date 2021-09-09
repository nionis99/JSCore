class NamedError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
    }
}

try {
    console.show("This won't work");
} catch ({message}) {
    throw new NamedError("Console error: ", message);
}