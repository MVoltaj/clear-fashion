/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const montlimart = require('./sources/montlimart');
const adresseparis = require('./sources/adresseparis');




async function sandbox (eshop = "https://www.dedicatedbrand.com/en/men/t-shirts") {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await dedicatedbrand.scrape(eshop);

    console.log(products);
    console.log('done');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  try {
    console.log(`🕵️‍♀️  browsing montlimart source`);

    const products = await montlimart.scrape("https://www.montlimart.com/toute-la-collection.html");

    console.log(products);
    console.log('done');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  try {
  console.log(`🕵️‍♀️  browsing Adresse paris source`);

  const products = await adresseparis.scrape("https://adresse.paris/659-t-shirts-et-polos");

  console.log(products);
  console.log('done');
  } catch (e) {
  console.error(e);
  process.exit(1);
  }









}

const [,, eshop] = process.argv;

sandbox(eshop);
