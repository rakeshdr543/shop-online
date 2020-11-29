import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };

      useEffect(() => {
        fetchProducts();

      }, []);

    return (
        <>
            <Navbar/>
            <Products products={products}/>
        </>
    )
}

export default App
