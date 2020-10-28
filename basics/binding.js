const hitesh ={
    firstName : "subham",
    lastName :"Chakraborty",
    role: "Admin",
    courseCount : 3,
    getInfo: function(){
        console.log(
            `
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and e is enrolled in ${this.courseCount} no. of courses
            `);
    },
};

const dj ={
    firstName :"rock",
    lastName:"DJ",
    role:"sub-admin",
    courseCount:4,
};
hitesh.getInfo();

hitesh.getInfo.bind(dj)();//prototype binding
hitesh.getInfo.call(dj);//directly callsthe object

