let myString: string = "Riead";
let myNumber: number = 2588;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 100n;

const addTwoNumber = (a: number, b: number): number => {
  return a + b;
};

// console.log(addTwoNumber(500, 30));

const rollNumber: number[] = [1, 2, 3];
const subjectName: string[] = ["Bangla", "Physics", "Chemistry", "Biology"];

const dhakaLocation: readonly [number, number] = [1225478, 5899921];

const studentName: Array<string> = ["Riead", "Rony", "Rabbi"];

// console.log(rollNumber, subjectName, dhakaLocation, studentName);

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

console.log(concatName("Riead"));
console.log(concatName("Riead", "Mia"));
