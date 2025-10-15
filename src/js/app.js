import { products }  from './api.js';
const getProducts = () => {
    products()
    .then((data) => {
        console.log(data)
        console.log(data.products)
        console.log(data.products[10])
        console.log(data.products[10].description)
    })
    .catch(err => console.log(err));
}
getProducts();