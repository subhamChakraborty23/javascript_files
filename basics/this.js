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
user.getCourseCount()