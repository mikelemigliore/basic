
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 1;

updateDisplay(count);

counterPlusElem.addEventListener("click",()=>{
    count = count * 2;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count = count / 2;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count + " holy moly";
};
