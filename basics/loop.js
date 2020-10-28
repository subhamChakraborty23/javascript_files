
const states=[
    "rajasthan",
    "delhi",
    "assam",
    "tripura",
    234,
    "kerela"
];


for (let i = 0; i<states.length ; i++) {
    if(typeof states[i]!=="string")break;
    console.log(states[i]);
    
}

states.forEach(s=>console.log(s));

const names=[
    "Youtube",
    "faacebook",
    "Instagram",
    "netflix"
];
for(const n of names){
    console.log(n);
}
const symbols={

    yt:"Youtube",
    fb:"faacebook",
    ig:"Instagram",
    N:"netflix"
};

for(const n in symbols){
    console.log(`key is ${n} and value is ${symbols[n]}`);

}