//[Parent-name] [Parent-surname] has [count] children and their names are: [Child-name], [Child-name], [Child-name].

const fs = require('fs/promises');
const path = require('path');

console.log(__dirname);
console.log(__filename);

(async () => {

    function parseJSONtoObject(text){
        try {
            const obj = JSON.parse(text)
            return [false, obj];
        } catch (error) {
            return [true, {}];
            
        } finally{
            console.log('Baigiau bandyti parsinti faila.');
        }
    }
    function namesOfChildren(children){
        const vaikuVardai = [];
        for(const child of children){
            vaikuVardai.push(child.name);
        }
        
        return vaikuVardai.join(', ');
    }
    const fullPath = path.join(__dirname, './data/country.json');
    const countryContent = await fs.readFile(fullPath, 'utf-8');
    

    const [personError, personObj] = parseJSONtoObject(countryContent);
    
    if(personError){
        console.log('Parsinant faila ivyko klaida.');
    }
    else{
        const {name, lastname, children} = personObj;
        console.log(`${name} ${lastname} has ${children.length} children and their names are: ${namesOfChildren(children)}.`)
    }
    
    
})();

const skaiciai = [1, 2, 3, 8];
const dvygubiSkaiciai = [];

for (const skaicius of skaiciai) {
    dvygubiSkaiciai.push(skaicius * 2);
}

console.log(skaiciai);
console.log(dvygubiSkaiciai);

const vardai = ['Jonas', 'Ona', 'Ciubaka'];
const pirmosRaides = [];

for (const vardas of vardai) {
    pirmosRaides.push(vardas[0]);
}

const pirmosRaidesMap = vardai.map(v => v[0]);

console.log(vardai);
console.log(pirmosRaides);
console.log(pirmosRaidesMap);