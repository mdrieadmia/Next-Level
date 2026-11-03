// Literal type

type Status = "pending";

const status: Status = "pending";

//  Basic Union type

type Identity = string | number;
const id: Identity = 112;
// console.log(id);

// Literal Union

type Role = "admin" | "member";
const user: Role = "admin";
// console.log(user);

// Object Union

type Member = { id: number; name: string; role: "member"; plan: string[] };
type Admin = { id: number; name: string; role: "admin"; power: string[] };
type User = Member | Admin;

const newUser: User = {
  id: 20,
  name: "Riead",
  role: "admin",
  power: ["dashboard", "activity"],
};

// console.log(newUser);
