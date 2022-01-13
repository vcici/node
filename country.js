//[Parent-name] [Parent-surname] has [count] children and they names are: [Child-name], [Child-name], [Child-name].

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
        let i = 0;
        const vaikuVardai = [];
        for(child in children){
            vaikuVardai.push(children[i].name);
            i++;
        }
        
        return vaikuVardai.join(', ');
    }
    const fullPath = path.join(__dirname, './data/country.json');
    const countryContent = await fs.readFile(fullPath, 'utf-8');
    console.log(countryContent);

    const [personError, personObj] = parseJSONtoObject(countryContent);
    
    if(personError){
        console.log('Parsinant faila ivyko klaida.');
    }
    else{
        console.log(personObj);
        console.log(`${personObj.name} ${personObj.lastname} has ${personObj.children.length} children and they names are: ${namesOfChildren(personObj.children)}.`)
    }
    
    
})();

