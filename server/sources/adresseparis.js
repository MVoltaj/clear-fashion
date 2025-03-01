const fetch = require('node-fetch');
const cheerio = require('cheerio');

/**
 * Parse webpage e-shop
 * @param  {String} data - html response
 * @return {Array} products
 */
const parse = data => {
  const $ = cheerio.load(data);

  return $('.product-container')
    .map((i, element) => {
      const name = $(element)
        .find('.product-reference')
        .text()
        .trim();

      const price = parseInt(
        $(element)
          .find('.price.product-price')
          .text()
          .replace(' €','')
      );

      const link = $(element)
        .find('.product_img_link')
        .attr('href');

      const link_image = $(element)
        .find('.product_img_link img')
        .attr('src');

      return {name, price, link, link_image};
    })
    .get();
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const body = await response.text();

      return parse(body);
    }

    console.error(response);

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
