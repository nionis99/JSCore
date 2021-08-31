const STATUS = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}

class MyPromise {
    constructor(callback) {
        this.status = STATUS.PENDING;
        this.value = undefined;
        this.handlers = [];

        try {
            callback(this._resolve, this._reject);
        } catch (err) {
            this._reject(err)
        }
    }

    _resolve = (value) => this.updatePromise(value, STATUS.FULFILLED);
    _reject = (error) => this.updatePromise(error, STATUS.REJECTED);

    updatePromise(value, status) {
        setTimeout(() => {
            if (this.status !== STATUS.PENDING) return;

            if (value instanceof MyPromise) return value.then(this._resolve, this._reject);

            this.value = value;
            this.status = status;
            this.executeHandlers();
        });
    }

    addHandlers(handlers) {
        this.handlers.push(handlers);
        this.executeHandlers();
    }

    tryHandle(res, rej, callback, value) {
        try {
            return res(callback(value))
        } catch (err) {
            return rej(err);
        }
    }

    executeHandlers() {
        if (this.status === STATUS.PENDING) return null;

        this.handlers.forEach((handler) => {
            if (this.status === STATUS.FULFILLED) return handler.onSuccess(this.value);
            return handler.onFail(this.value);
        });

        this.handlers = [];
    }

    then(onSuccess, onFail) {
        return new MyPromise((res, rej) =>
            this.addHandlers({
                onSuccess: (value) => {
                    if (!onSuccess) return res(value);
                    this.tryHandle(res, rej, onSuccess, value)
                },
                onFail: (value) => {
                    if (!onFail) return rej(value);
                    this.tryHandle(res, rej, onFail, value);
                }
            })
        );
    }

    synchThen(callback) {
        return new MyPromise((res) => res(callback()));
    }

    catch(onFail) {
        return this.then(null, onFail);
    }
}

const myPromise = new MyPromise((resolve) => {
    console.log(1);
    resolve();
}).synchThen(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).catch(() => console.log("Error"));
console.log(4);

class ReversePromise extends MyPromise {
    constructor(fn) {
        super(_ => _());
        this.fn = fn;
        this.stack = [];

        setTimeout(() => this.execute.apply(this));
    }
    then(fn) {
        this.stack.push(fn);
        return this;
    }

    execute() {
        let currentPromise = new MyPromise(this.fn);

        while (this.stack.length) currentPromise = currentPromise.then(this.stack.pop());

        return currentPromise;
    }
}

const reversePromise = new ReversePromise((resolve) => {
    console.log(1);
    resolve();
})
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4));
