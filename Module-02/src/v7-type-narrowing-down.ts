//* Typeof
let x = 123;

// console.log(typeof x);

//* Type Guard

const print = (value: string | number) =>{
    if (typeof value === "string"){
        return value.toString()
    }
}

//* Truthiness

type User = {
    name: string;
    address?: {
        street: string;
    }
} | null;


const LoggedInUser : User = {
    name : "Riead",
    address: {
        street: "02"
    }
}


const showAddress = (user: User) =>{
    if (user && user.address){
        console.log(user.address.street)
        return;
    }

    throw new Error('User Not Found');
}


//* Equality
const printAll = (x: string | string[] | null)=>{
    if(x !== null){
        if (typeof x === 'object'){
            for(let str of x){
                console.log(str);
                return;
            }
        }
        console.log(x);
        return;
    }
    console.log('');
}

// printAll('Bangladesh');


//* "in" Operator

type Bird = { fly : ()=> void}
type Fish = { swim : ()=> void}

const move = (animal: Bird | Fish)=>{
    if ("fly" in animal){
        animal.fly();
        return;
    }
    
    animal.swim(); 
}


//* "instanceof". check

const date = new Date();
const err = new Error("Something went wrong");

// console.log(date instanceof Date);
// console.log(err instanceof Error);


//* Discriminated union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    length: number;
}

const getArea = (shape: Circle | Square) =>{
    if (shape.kind === "circle"){
        console.log(shape.radius);
        return;
    }
    console.log(shape.length)
}

