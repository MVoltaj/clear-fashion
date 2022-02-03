// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

// prices = []
//for (let i = 0; i < nbr_product; i++) {
//  prices.push(marketplace[i]["price"])
//}

//console.log(Math.min(...prices));

/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

//var nbr_product = marketplace.length
//console.log(nbr_product)


// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

//var brand_names = []
//for (let i = 0; i < nbr_product; i++) {
//  brand_names.push(marketplace[i]["brand"])
//}
//console.log(brand_names)
//function onlyUnique(value, index, self) {
 // return self.indexOf(value) === index;
//}
//var unique = brand_names.filter(onlyUnique);
//console.log(unique)


// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

//function compare( a, b ) {
 // if ( a.price < b.price ){
  //  return -1;
 // }
  //if ( a.price > b.price ){
   // return 1;
  //}
  //return 0;
//}

//marketplace.sort(compare);


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

//marketplace.sort(function(a,b){
  //return new Date(b.date) - new Date(a.date);
//});
//var marketplace_date = marketplace.sort(function(a,b){return new Date(b.date) - new Date(a.date);});
//console.log(markeplace_date)

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

//const results = marketplace.filter(element => {
//  return element.price > 50 && element.price < 100;
//});
//console.log(results)

// 🎯 TODO: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average



//function calculateAverage(array) {
//    var total = 0;
//    var count = 0;
//    array.forEach(function(item, index) {
//        total += item;
//        count++;
//    });
//    return total / count;
//}

//console.log(calculateAverage(prices));




/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands

// let brandss = {}
//for (let i = 0; i < nbr_product; i++) {
 // if (!(marketplace[i]["brand"] in brandss)){
   // brandss[marketplace[i]["brand"]] = [];
  //}
    //brandss[marketplace[i]["brand"]].push({
//"date":marketplace[i]["date"],
//"link":marketplace[i]["link"],
//"name":marketplace[i]["name"],
//"price":marketplace[i]["price"]
 // });
    
//}
//console.log(brandss)
//for (const [key, value] of Object.entries(brandss)) {
//  console.log(key, brandss[key].length);
//}


// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort
// function compare( a, b ) {
//  if ( a.price < b.price ){
//    return -1;
//  }
//  if ( a.price > b.price ){
//    return 1;
//  }
//  return 0;
//}
//brandss["aatise"].sort(compare)
//brandss["adresse"].sort(compare)
//brandss["loom"].sort(compare)
//brandss["dedicated"].sort(compare)
//brandss[1083].sort(compare)


// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

// function compare( a, b ) {
//  if ( a.date < b.date ){
//    return -1;
//  }
//  if ( a.date > b.date ){
//    return 1;
//  }
//  return 0;
//}

//brandss["aatise"].sort(compare)
//brandss["adresse"].sort(compare)
//brandss["loom"].sort(compare)
//brandss["dedicated"].sort(compare)
//brandss[1083].sort(compare)


/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

//let all_prices = []
//for (let i = 0; i < Object.keys(brandss).length; i++) {
//    let tempo = [];
//    for(let j = 0; j< brandss[Object.keys(brandss)[i]].length;j++){
//        tempo.push(brandss[Object.keys(brandss)[i]][j]["price"])
//    }
//   all_prices.push(tempo)
//};
//function tri( a, b ) {
//    if ( a < b ){
//        return -1;
//    }
//    if ( a > b ){
//        return 1;
//    }
//   return 0;
//}

//for(let i = 0; i< all_prices.length;i++){
//    all_prices[i].sort(tri)
//    console.log(all_prices[i][Math.round(all_prices[i].length* 0.9)])
//}





/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.

//var today = new Date();
//console.log(today.getTime())
//var new_product = true


//for(let i = 0; i < COTELE_PARIS.length; i++){
//    COTELE_PARIS[i]["converted"] = Date.parse(COTELE_PARIS[i]["released"])
//    if(COTELE_PARIS[i]["converted"] < today.getTime() - 3600*24*14){
//        new_product = false
//    }
//}
//console.log(new_product)


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€


// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

//for(let i = 0; i < COTELE_PARIS.length; i++){
//    if(COTELE_PARIS[i]["uuid"] === "b56c6d88-749a-5b4c-b571-e5b5c6483131"){
//    console.log(COTELE_PARIS[i])
//    }
//}


// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

//for(let i = 0; i < COTELE_PARIS.length; i++){
//    if(COTELE_PARIS[i]["uuid"] === "b56c6d88-749a-5b4c-b571-e5b5c6483131"){
//        COTELE_PARIS.splice(i, 1);
//    }
//}
//console.log(COTELE_PARIS)


// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties





/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
