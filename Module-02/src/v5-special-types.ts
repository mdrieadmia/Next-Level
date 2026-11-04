// Top types

let x : any = "Hello Bangladesh";
x = 123;

const something : unknown = "Hello Banlgadesh";

// something.length;

// Core Types
let myName : unknown;
const num : number = 123;

myName = num; 

//Nullish type

interface User {
    name: string;
}

type LoggedUser = User | null;

const loggedUser:LoggedUser = null;


// Unit Type

const greet = () =>{
    console.log("Hello")
}


//Bottom Type

const getError = (msg: string) : never =>{
    throw new Error(msg);
}