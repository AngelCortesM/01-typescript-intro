import { Product, taxCalculation } from './06-function.destructuring';

const shoppingCart: Product[] = [{
    descriptions: 'Nokia',
    price: 1000,
   
},
{
    descriptions: 'Samsung',
    price: 1500,
}];
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);