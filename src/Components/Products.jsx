import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [search , setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const handleMinPriceChange = (e) => {
        setMinPrice(parseFloat(e.target.value));
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(parseFloat(e.target.value));
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='popular flex flex-col items-center gap-[10px] h-[90vh] mt-20'>
            <h1 className='text-[30px] font-semibold'>PRODUCTS</h1>
            <input 
                type="email" name="email" id="email" 
                className="bg-slate-400 mt-4 mb-4 block w-[600px] rounded-full border-0 py-1.5 pl-10 text-white placeholder:text-white placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600  " 
                placeholder="Search"
                onChange={(e)=>{
                    setSearch(e.target.value)}}/>

            <div>
                {/* <h3 className='mt-4 pb-4'>Filter By Price:</h3> */}
                <label htmlFor="minPrice">Min Price:</label>
                <input 
                className="peer mt-4 h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    type="number" 
                    id="minPrice" 
                    value={minPrice} 
                    onChange={handleMinPriceChange} 
                />
                <label htmlFor="maxPrice">Max Price:</label>
                <input 
                className="peer mt-4 h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    type="number" 
                    id="maxPrice" 
                    value={maxPrice} 
                    onChange={handleMaxPriceChange} 
                />
            </div>
            <div className='mt-[50px] grid lg:grid-cols-4 gap-[70px] md:grid-cols-2 sm:grid-cols-1'>
                {products.filter((item)=>{
                    const price = parseFloat(item.price)
                    return (
                        (search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search))
                        &&
                        (!minPrice || price >= minPrice) 
                        &&
                        (!maxPrice || price <= maxPrice) 

                        )
                }).map((item, i) => (
                    <ItemCard key={i} title={item.title} price={item.price} images={item.thumbnail} rating={item.rating} desc={item.description}/>
                ))}
            </div>
        </div>
    );
};

export default Products;
