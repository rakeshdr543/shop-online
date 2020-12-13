import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };

      const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
    
      const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
      };

      useEffect(() => {
        fetchProducts();
        fetchCart();

      }, []);

    return (
        <>
            <Navbar totalItems={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart} />
        </>
    )
}

export default App
