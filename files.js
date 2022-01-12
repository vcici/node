console.clear();

const fs = require('fs/promises');


(async () => {
    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    const drinksList = drinksContent.split('\r\n');
    console.log(drinksContent);
    console.log(drinksList);
    


    let i = 0;
    for(const drink of drinksList){
        // const drinkDetails = drink.split(' ');
        // const drinkName = drinkDetails[0];
        // const drinkPrice = drinkDetails[1];

        const drinkDetails = drink.split(' ');      
        const [drinkName, drinkPrice, count] = drinkDetails;
        const apyvarta = parseInt(count) * parseFloat(drinkPrice);
        // const apyvarta = +count * +drinkPrice; pliusai pavers i skaicius
        console.log(`Pasirinkimas ${++i}: ${drinkName} kurio kaina yra ${drinkPrice} euru. Buvo parduota ${count} kiekis ir bendra apyvarta yra ${apyvarta.toFixed(2)} EUR`);
    }
    console.log('Viso gerimu:', i);

    //Pasirinkimas1: [gerimo-pavadinimas] kurio kaina yra [kaina] euru.
    //Pasirinkimas2: [gerimo-pavadinimas] kurio kaina yra [kaina] euru.
    //Pasirinkimas3: [gerimo-pavadinimas] kurio kaina yra [kaina] euru.

})();
