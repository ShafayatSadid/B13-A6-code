import React, { use, useState } from 'react';
import Products from './products/Products';

const Premium = ({ plansPromise }) => {

    const plans = use(plansPromise);
    

    const [btnTheme, setBtnTheme] = useState("products")

    const [cartItems, setCartItems] = useState([]);



    return (
        <div className='mb-30'>
            <div className='mt-20 md:mt-30 mb-10'>
                <h2 className='text-[2rem] lg:text-[3rem] font-extrabold text-center'>Premium Digital Tools</h2>
                <p className='text-[1rem] my-4 text[#627382] max-w-140 text-center mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                <div className='text-center'>
                    <button onClick={() => setBtnTheme("products")} className={`
                    ${btnTheme === "products" ? 'text-white bg-linear-to-tr from-[#4F39F6] to-[#9514FA]' : 'text-black bg-white'} 

                    btn text-[0.875rem] md:text-[1rem] font-semibold py-2 md:py-3 px-4 rounded-full`}>Products
                    </button>

                    <button onClick={() => setBtnTheme("cart")} className={`
                    ${btnTheme === "cart" ? 'text-white bg-linear-to-tr from-[#4F39F6] to-[#9514FA]' : 'text-black bg-white'} 
                    
                    btn text-[0.875rem] md:text-[1rem] font-medium py-2 md:py-3 px-4 rounded-full`}>Cart (2)
                    </button>
                </div>
            </div>

            <Products plans={plans} btnTheme={btnTheme} cartItems={cartItems} setCartItems={setCartItems}></Products>
        </div>
    );
};

export default Premium;