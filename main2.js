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



const paragraphs = document.querySelectorAll(`p`);
console.log(paragraphs);

console.log(paragraphs[3]);


