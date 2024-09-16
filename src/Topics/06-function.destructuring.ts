export interface Product {
    descriptions: string;
    price: number;
}

const phone: Product = {
    descriptions: "Nokia A01",
    price: 1200.00
}

const tablet: Product = {
    descriptions: "Apple iPad Pro",
    price: 2500.00
}

interface TaxCalcularionOptions {
    tax: number;
    products: Product[];
}
//function taxCalculation(options: TaxCalcularionOptions): [number, number] {
//function taxCalculation({tax,products}: TaxCalcularionOptions): number[] {
export function taxCalculation(options: TaxCalcularionOptions): number[] {
   
    const { tax, products } = options
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });
 
    return [total, total * tax];
}
 
const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total);

console.log('Tax', totalTax);

export { };