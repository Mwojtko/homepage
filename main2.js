console.log(`Siema!`);
console.log(`Witam Cię na mojej stronie!`)
const name=`Mikołaj Wojtkowiak`;
const age=26;
console.log(`Pozdrawiam serdecznie ${name} w wieku ${age}`);

const about = document.querySelector(`.about__paragraph--js`);
if (about) 
{ 
console.log(about.innerHTML);
about.innerHTML = ('Pozdrawia JavaScript!'); 
}


const description = document.querySelector(`.about__paragraph--js2`);
if (description) 
{ 
console.log(description.innerHTML);
description.innerHTML = (`Tutaj też pozdrawia JavaScript!`); 
}



function welcome (age, name) {
    if (age<26) {
        console.log(`${name} Jesteś młodszy ode mnie!`)
    } if (age>26) {
        console.log(`${name} Jesteś starszy ode mnie!`)
    } if (age==26) {
        console.log(` ${name} Jesteś w moim wieku!`)
    }
}










