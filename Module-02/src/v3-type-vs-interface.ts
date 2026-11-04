// Type Alias vs Interface

type ID = number;
//!interface ID = number

type Role = "Admin" | "Manager"
// !interface Role = "Admin" | "Manager"

interface User {
    name: string;
    age: number;
    role: Role;
}


// Extend Example

interface Animal {
    species: string;
}

interface Cat extends Animal{
    name: string;
    brid: string;
}

const newCat : Cat = {
    name: "Rio",
    brid: "Parsian",
    species: "Brown"
}