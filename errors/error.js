try {
    console.show("This won't work");
} catch ({message}) {
    throw new Error(message);
}