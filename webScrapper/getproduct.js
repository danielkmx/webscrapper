const cheerio = require('cheerio');
const fetch = require('node-fetch');

let getproduct = (url) => {
return fetch(url)
.then(response => response.text())
.then(body =>{
    const $ = cheerio.load(body);
    let breadcrumbs = [];
    $('.TextUI-iw976r-5.bXXKsz.TextUI-sc-1hrwx40-0.doPTSH').each( (i,element) => {
        const $element = $(element);
        breadcrumbs.push($element.text());
    })
 return product = {
    name: $('.product-name').text(),
    breadcrumb: breadcrumbs,
    img: $('.LazyImageWrapper-z414st-0.bgHGEK.ViewUI-oocyw8-6.kvewNe img').attr("src"),
    seller: $('.seller-00776574000660').text(),
    price: $('.sales-price').text(),
    id: Number($('.product-id').text().split(".")[1].replace(")", ""))

};
}).then( product => {
    console.log(product);
});

}

module.exports = getproduct ;
