var user ={
    firstName :"subham",
    lastName :"Chakraborty",
    role:"Admin",
    loginCount:23,
    fbSignedIn:true,
};

console.log(user.firstName);
console.log(user["lastName"]);//not good for practice

user.loginCount=24;
console.log(user.loginCount);
console.table(user);