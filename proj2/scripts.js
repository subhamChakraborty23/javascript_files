const red =document.querySelector(".red");
const cyan =document.querySelector(".cyan");
const violet =document.querySelector(".violet");
const orange =document.querySelector(".orange");
const pink =document.querySelector(".pink");

const center =document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) =>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var Color = getBGColor(pink);


const magicColorChanger =(element ,color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background = color;
    });
};

magicColorChanger(red,getBGColor(red)); 