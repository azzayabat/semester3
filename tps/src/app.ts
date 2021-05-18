let a: number = 1;
console.log(a);

let b: string = "hello world";
console.log(b.toLocaleLowerCase());

type UserStatus = "new" | "loggedIn" | "logOut";
type User = {
  name: string;
  id: number;
  isLogged: boolean;
  email: string;
  status: UserStatus;
};

let hot: string[] = ["ub", "korea"];
let aimag: Array<string> = ["arkhangai", "hovsgol"];

let user1: User = {
  name: "azzaya",
  id: 2423,
  isLogged: false,
  email: "@gmail.com",
  status: "new",
};
let user2: User = {
  name: "azzaya",
  id: 2423,
  isLogged: false,
  email: "@gmail.com",
  status: "new",
};
console.log(user1.name);

let users: Array<User> = [
  user1,
  user2,
  {
    name: "azzaya",
    id: 2423,
    isLogged: false,
    email: "@gmail.com",
    status: "new",
  },
];

function upper1(value: string): string {
  return value.toUpperCase();
}

function sum(a: number, b: number): any {
  return a + b;
}
let d = sum(4, 5);

function isActive(user: User): boolean {
  return user.status == "logOut";
}
function isNewUser(user: User): boolean {
  return user.status == "new";
}
