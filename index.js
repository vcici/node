console.clear();

console.log('Labas');
console.log('Labas');

const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];




function vidurkis(masyvas){
    let suma = 0;
    masyvas.forEach(element => {
        suma += element;
    });
    let vidurkis = suma / masyvas.length;
    console.log(`Skaiciu masyvas, kuri sudaro ${a1.length} skaiciai, vidurkis yra ${vidurkis}.`);
}


//Skaiciu masyvas, kuri sudaro [kiekis] skaiciai, vidurkis yra [vidurkis].
vidurkis(a1);
vidurkis(a2);
vidurkis(a3);

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';

// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

function vardai(stringai){
    let words = stringai.split(' ');
    let raides = words[0][0].toUpperCase() + '. ' + words[1][0].toUpperCase() + '.';
    let vardas = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    let pavarde = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
    
    console.log(`Legendines asmenybes ${vardas} ${pavarde} trumpinys yra ${raides}`);
}


vardai(s1);
vardai(s2);
vardai(s3);
vardai(s4);

const people = [
    {name: 'Jonas', surname: 'Jonaitis', age: 99}, 
    {name: 'Maryte', surname: 'Marytaite', age: 87}
];



// [Vardas] [Pavarde] yra [amzius] metu amziaus.

function introduce(objektas){
    console.log(`${objektas.name} ${objektas.surname} yra ${objektas.age} metu amziaus.`);
}

for (const person of people){
    introduce(person);
}
