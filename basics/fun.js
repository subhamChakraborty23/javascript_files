var getUserRole =function(name,role){
    switch (role) {
        case "admin":
            return `${name} is the admin with all access`;
            break;
        case "Subadmin":
            return `${name} is the Sub-admin with all access`;
            break;

        case "testprep":
            return `${name} is a test prep with all access`;
            break;
        case "user":
            return `${name} is the user with all access`;
            break;
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("subham","testprep"));
var get = getUserRole("subh","user");
console.log(get);