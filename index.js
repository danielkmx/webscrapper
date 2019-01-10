const {getproduct} = require('./webScrapper/getproduct');
let main = async () => {
    let product = await getproduct('https://www.americanas.com.br/produto/134118928');
    console.log('product:', product);
  }
  main();