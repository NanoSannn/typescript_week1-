let id = 5;
let myName = "Chanvanvit T";
let isPublished = true;
let t = "Hello";
console.log("id: " + typeof (id) + " " + id);
console.log("myName: " + typeof (myName) + " " + myName);
console.log("isPublished: " + typeof (isPublished) + " " + isPublished);
console.log("t: " + typeof (t) + " " + t);
let age = 25;
console.log(`My name is ${myName}. I am ${age} years old`);
//``````
// let x: number = 5;
// console.log(x);
// let c: any = 5;
// console.log(x);
// c = "Five";
// c = true;
//collection types
let ids;
ids = [1, 2, 3, 4, 5];
let arr;
arr = [1, "2", true, 3.5];
console.log(ids);
console.log(arr);
// สร้าง array 
let names;
names = ["chanvanvit", "แทน", "วศก", "ทอย", "น้ำ"];
console.log(names);
// ตัวแปร แบบ  array สามารถใช้ TS/JS จะมีเมธอดสำหรับวนลูป
// ids.forEach(i =>{
//     console.log(`ID: ${i}`)
// }) 
console.log(`ฉันชื่อ chanvanvit นี่คือเพื่อนฉัน`);
names.forEach(i => {
    console.log(`- : ${i} `);
});
let salary = [1000, 2000, 5000, 10000]; // 10%
let commission = [];
salary.forEach((s) => {
    commission.push(s * 0.1);
});
console.log(commission);
let bonus = [];
salary.forEach((s) => {
});
console.log(bonus);
//tuple
let prod1;
prod1 = [1, "nau", "nau", 10];
console.log(prod1[0]);
prod1.forEach(p => {
    console.log(p);
});
let products;
products = [
    [1, "fsdfs", "dcvsdvs", 10],
    [2, "dsf", "dcvsddfgdvs", 110],
    [3, "fsdfsdfs", "dcvfdsssdvs", 1210],
    [4, "sssssfsdfs", "dcvssssssdvs", 210],
    [5, "fssssssdfs", "dcsssssssvsdvs", 140],
];
// products.forEach(p=>{
//     p[3] += 5;
//     console.log(`${p[0]}.${p[1]}.(${p[2]}).${p[3]}`)
// })
let students;
students = [
    ["1001", "chanvanvit", 20, 50, 0],
    ["1002", "nau", 18, 42, 0],
    ["1003", "vam", 21, 49, 0],
    ["1004", "pire", 15, 35, 0],
    ["1005", "pp", 17, 31, 0],
];
students.forEach(p => {
    p[4] = p[2] + p[3];
    console.log(`ID : ${p[0]} ${p[1]}, Total : ${p[4]}`);
});
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 7] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.clear();
console.log(Direction1.Left);
console.log(Direction2.Right);
var PaperSize;
(function (PaperSize) {
    PaperSize[PaperSize["A3"] = 1] = "A3";
    PaperSize[PaperSize["A4"] = 2] = "A4";
    PaperSize[PaperSize["A5"] = 3] = "A5";
    PaperSize[PaperSize["A6"] = 4] = "A6";
})(PaperSize || (PaperSize = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Landscape"] = 2] = "Landscape";
})(Orientation || (Orientation = {}));
console.log(PaperSize);
let chanvanvit = {
    id: 101,
    name: "chanvanvit",
    tel: "0987256736",
};
let chanvanvit_T = {
    id: 101,
    name: "chanvanvit",
    tel: "0987256736",
    Line_id: "kenta170345",
};
console.log(chanvanvit.id);
console.log(chanvanvit.name);
console.log(chanvanvit.tel);
console.log(chanvanvit_T.Line_id);
// let chanvanvit: Student
// chanvanvit.id = 101
// chanvanvit.name = "chanvanvit"
// chanvanvit.tel = "0987256736"
//type Assertion
// let xx : any = "ddddd"
// let xid : Number
// xid = xx as Number;
// console.log(typeof(xid))
// console.log(xid)
//Union Type
let sid;
sid = 101;
console.clear();
console.log(typeof (sid));
sid = "555";
console.log(typeof (sid));
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(3, 5));
// console.log(addNumber(3,"5"))
// console.log(addNumber("3","5"))
function showlog(m) {
    console.log(m);
}
showlog(123);
showlog("dfgj");
