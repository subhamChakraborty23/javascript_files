var User = function(firstName,courseCount){
    this.firstName =firstName;
    this.courseCount =courseCount;
    this.getCourseCount =()=>{
        console.log(`Course count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstName =function(){
    console.log(`Your Firstname is : ${this.firstName}`);
};


var subham = new User("subham",6);
subham.getCourseCount();


if(subham.hasOwnProperty("firstName")){
    subham.getFirstName();
}