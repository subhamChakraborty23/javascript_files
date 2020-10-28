var user ={
    firstName :"subham",
    lastName :"Chakraborty",
    role:"Admin",
    loginCount:23,
    fbSignedIn:true,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};
var courseList=true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("javascript course");
user.buyCourse("C++ course");
console.log(user.getCourseCount());
console.table(user);


