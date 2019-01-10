const cheerio = require("cheerio");
const fetch = require("node-fetch");

module.exports.getproduct = async (url) => {
  let response = await fetch(url);
  let body = await response.text();
  const $ = cheerio.load(body);
  let product = {
    productName: $(".product-name").text()
  };
  return product;
};
