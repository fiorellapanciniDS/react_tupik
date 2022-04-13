let is_ok = true;

const {products} = require('./products.js');

const customFetch = () => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            resolve(products);
        } else {
            reject('KO');
        }
    })
}

export default customFetch;