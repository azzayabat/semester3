"use strict";
var a = 1;
console.log(a);
var b = "hello world";
console.log(b.toLocaleLowerCase());
var hot = ["ub", "korea"];
var aimag = ["arkhangai", "hovsgol"];
var user1 = {
    name: "azzaya",
    id: 2423,
    isLogged: false,
    email: "@gmail.com",
    status: "new",
};
console.log(user1.name);
var users = [
    user1,
    {
        name: "baatar",
        id: 533,
    },
];
function upper1(value) {
    return value.toUpperCase();
}
function sum(a, b) {
    return a + b;
}
var d = sum(4, 5);
function isActive(user) {
    return user.status == "logOut";
}
function isNewUser(user) {
    return user.status == "new";
}
