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
    let word = stringai.split(' ');
    let raides = word[0][0].toUpperCase() + '. ' + word[1][0].toUpperCase() + '.';
    let vardas = word[0].charAt(0).toUpperCase() + word[0].slice(1).toLowerCase();
    let pavarde = word[1].charAt(0).toUpperCase() + word[1].slice(1).toLowerCase();
    
    console.log(`Legendines asmenybes ${vardas} ${pavarde} trumpinys yra ${raides}`);
}


vardai(s1);
vardai(s2);
vardai(s3);
vardai(s4);

const jonas = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 99
}

const maryte = {
    name: 'Maryte',
    surname: 'Marytaite',
    age: 87
}

// [Vardas] [Pavarde] yra [amzius] metu.

function zmoniuSablonas(objektas){
    console.log(`${objektas.name} ${objektas.surname} yra ${objektas.age} metu amziaus.`);
}

zmoniuSablonas(jonas);
zmoniuSablonas(maryte);
