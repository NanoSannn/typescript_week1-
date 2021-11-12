// let id: number = 5;
// let myName: string = "Chanvanvit T";
// let isPublished: boolean = true;
// let t: any = "Hello";
// console.log("id: "+typeof(id)+" "+id)
// console.log("myName: "+typeof(myName)+" "+myName)
// console.log("isPublished: "+typeof(isPublished)+" "+isPublished)
// console.log("t: "+typeof(t)+" "+t)
// let age : number = 25
// console.log(`My name is ${myName}. I am ${age} years old`)
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
    bonus.push();
});
console.log(bonus);
//``````
// let x: number = 5;
// console.log(x);
// let c: any = 5;
// console.log(x);
// c = "Five";
// c = true;
