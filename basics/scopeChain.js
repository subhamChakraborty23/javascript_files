var name="subham"
console.log("n 2", name);

function sayName(){
    var name ="my s";
    console.log("n 5",name);
    sayName2();

    function sayName2(){
        var name ="Mr.S";
        console.log("n 10",name);
    }
}

sayName();
