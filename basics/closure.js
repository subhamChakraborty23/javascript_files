// function init(){
//     var firstName = "subham";
//     console.log("I am init");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName();

// }

// var value = init();

function doAdd(x){
    return function(y){
        return x + y;
    };
}
var add5 = doAdd(5);

console.log(add5(5));

console.log(doAdd(5)(7));
//curring doAdd()()()