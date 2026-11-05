//* Typeof
let x = 123;
// console.log(typeof x);
//* Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toString();
    }
};
const LoggedInUser = {
    name: "Riead",
    address: {
        street: "02"
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error('User Not Found');
};
//* Equality
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === 'object') {
            for (let str of x) {
                console.log(str);
                return;
            }
        }
        console.log(x);
        return;
    }
    console.log('');
};
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
//* "instanceof". check
const date = new Date();
const err = new Error("Something went wrong");
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
        return;
    }
    console.log(shape.length);
};
export {};
