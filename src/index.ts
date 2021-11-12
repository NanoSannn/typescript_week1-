let id: number = 5;
let myName: string = "Chanvanvit T";
let isPublished: boolean = true;
let t: any = "Hello";
console.log("id: "+typeof(id)+" "+id)
console.log("myName: "+typeof(myName)+" "+myName)
console.log("isPublished: "+typeof(isPublished)+" "+isPublished)
console.log("t: "+typeof(t)+" "+t)

let age : number = 25
console.log(`My name is ${myName}. I am ${age} years old`)
//``````
// let x: number = 5;
// console.log(x);

// let c: any = 5;
// console.log(x);
// c = "Five";
// c = true;
//collection types
let ids: Number[]
ids = [1,2,3,4,5]
let arr: any[]
arr = [1, "2", true, 3.5]
console.log(ids)
console.log(arr)
// สร้าง array 
let names : string[]
names = ["chanvanvit", "แทน", "วศก", "ทอย", "น้ำ"]
console.log(names)
// ตัวแปร แบบ  array สามารถใช้ TS/JS จะมีเมธอดสำหรับวนลูป
// ids.forEach(i =>{

//     console.log(`ID: ${i}`)

// }) 
console.log(`ฉันชื่อ chanvanvit นี่คือเพื่อนฉัน`)
names.forEach(i => {
    console.log(`- : ${i} `)

}) 

let salary : number[] = [1000,2000,5000,10000] // 10%
let commission: Number[]=[]
salary.forEach((s)=>{
    commission.push(s*0.1)
})
console.log(commission)

let bonus: number[]=[]
salary.forEach((s)=>{
    
})
console.log(bonus)

//tuple
let prod1: [number,string,string,Number]
prod1 = [1,"nau","nau",10]
console.log(prod1[0])
prod1.forEach(p=>{
    console.log(p)
})
let products : [Number,String,String,Number][]
products = [
    [1,"fsdfs","dcvsdvs",10],
    [2,"dsf","dcvsddfgdvs",110],
    [3,"fsdfsdfs","dcvfdsssdvs",1210],
    [4,"sssssfsdfs","dcvssssssdvs",210],
    [5,"fssssssdfs","dcsssssssvsdvs",140],
]
// products.forEach(p=>{
//     p[3] += 5;
//     console.log(`${p[0]}.${p[1]}.(${p[2]}).${p[3]}`)
// })

let students : [String,String,Number,Number,Number][]
students = [
    ["1001","chanvanvit",20,50,0],
    ["1002","nau",18,42,0],
    ["1003","vam",21,49,0],
    ["1004","pire",15,35,0],
    ["1005","pp",17,31,0],
]
students.forEach(p=>{
    p[4] = p[2]+p[3];
    console.log(`ID : ${p[0]} ${p[1]}, Total : ${p[4]}`)
})

enum Direction1{
    Up=1,
    Down=3,
    Left=5,
    Right=7,
}

enum Direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right",
}
console.clear()
console.log(Direction1.Left)
console.log(Direction2.Right)

enum PaperSize{
    A3=1,
    A4=2,
    A5=3,
    A6=4,
}
enum Orientation{
    Portrait=1,
    Landscape=2,
}
console.log(PaperSize)

// Defined type
type Student = {
    id : Number,
    name : String,
    tel : String,
    Line_id? : String
}
let chanvanvit: Student={
    id : 101,
    name : "chanvanvit",
    tel : "0987256736",
}
let chanvanvit_T: Student={
    id : 101,
    name : "chanvanvit",
    tel : "0987256736",
    Line_id : "kenta170345",
}
console.log(chanvanvit.id)
console.log(chanvanvit.name)
console.log(chanvanvit.tel)
console.log(chanvanvit_T.Line_id)
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
let sid : Number | String
sid = 101
console.clear()
console.log(typeof(sid))
sid="555"
console.log(typeof(sid))

function addNumber(x: Number,y: Number): Number{
    return x + y
}
console.log(addNumber(3,5))
// console.log(addNumber(3,"5"))
// console.log(addNumber("3","5"))

function showlog(m: Number | String): void{
    console.log(m)
}
showlog(123)
showlog("dfgj")

