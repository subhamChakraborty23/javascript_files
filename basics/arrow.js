var isEven = (element)=>{
    return element %2==0;
}
console.log(isEven(4));

// var res=[2,6,66].every(isEven);
// console.log(res);

var res=[2,6,3,4].every((e)=> (e%2===0));//callback function
console.log(res);
//(e)=>{ return something }
var testArray =[2,3,4,5,67,8,9];
console.log(testArray.fill("h",2,5));
console.log(testArray.fill("empty"));

const myNo=[23,44,55,66,76,45];
const result =myNo.filter((num)=>num>50);
console.log(result);

var users =["ted","bed","tim","tom","sam","sor"];
console.log(users.slice(1,3));//(inclusive,exclusive)
users.splice(1,3,"hi","bye");

console.log(users);