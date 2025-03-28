import ProductItems from './ProductItems';
import products from '../json/books.json'
import React from 'react'
function Productlist() {
   return (
       <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {products.map((product) => (
               <ProductItems key={product.ID} book={product} />
           ))}
       </div>
   );
}
export default Productlist;