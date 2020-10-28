var countries =["india","usa","japan","russia"];
var states = new Array("tripura","delhi","mumbai","assam");

console.log(states[1]);
console.log(states.length);
states[0]="punjab";
console.log(states);
states.unshift("new state");
console.log(states);
states.shift();
states.pop();
console.log(states);
console.log(Array.from("subham"));
console.log(states.indexOf("hek"));