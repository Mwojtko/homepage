console.log(`Siema!`);
console.log(`Witam Cię na mojej stronie!`)
const name=`Mikołaj Wojtkowiak`;
const age=26;
console.log(`Pozdrawiam serdecznie ${name} w wieku ${age}`);

const about = document.querySelector(`.about__paragraph--js`);
console.log(about.innerHTML);

about.innerHTML = ('Pozdro JS');

const paragraphs = document.querySelectorAll(`p`);
console.log(paragraphs);

console.log(paragraphs[3]);


