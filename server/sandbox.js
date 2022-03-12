/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const montlimart = require('./sources/montlimart');
const adresseparis = require('./sources/adresseparis');
const hologram = require('./sources/hologram');




async function sandbox (eshop = "https://www.dedicatedbrand.com/en/men/t-shirts") {

  const {MongoClient} = require('mongodb');
  const MONGODB_URI =  process.env.MONGODB_URI;
  const MONGODB_DB_NAME = 'clearfashion';
  const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
  const db =  client.db(MONGODB_DB_NAME);
  console.log("successfully initiliazed")
  /*
  try {
    

    //Dedicated Brand

    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    let products = await dedicatedbrand.scrape(eshop);
    let collection = db.collection('products');
    let result = await collection.insertMany(products);
    console.log(result)
    console.log('Dedicated Brand updated to database');

    // Montlimart
    console.log(`🕵️‍♀️  browsing montlimart source`);
    products = await montlimart.scrape("https://www.montlimart.com/toute-la-collection.html");
    console.log(products)
    collection = db.collection('products');
    result = await collection.insertMany(products);
    console.log(result)
    console.log('Montlimart updated to database');

    // Adresse Paris

    console.log(`🕵️‍♀️  browsing montlimart source`);

    products = await montlimart.scrape("https://www.montlimart.com/toute-la-collection.html");
    collection = db.collection('products');
    result = await collection.insertMany(products);
    console.log(result)
    console.log('Montlimart updated to database');



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
  

  try {
  console.log(`🕵️‍♀️  browsing hologram source`);

  const products = await hologram.scrape("https://www.hologram-clothing.com/fr/39-t-shirts-chemises");

  console.log(products);
  console.log('done');
  } catch (e) {
  console.error(e);
  process.exit(1);
  }






*/






}

const [,, eshop] = process.argv;

sandbox(eshop);
