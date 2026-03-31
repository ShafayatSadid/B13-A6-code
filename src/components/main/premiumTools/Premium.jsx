import React, { use} from 'react';
import Products from './products/Products';
import Carts from './carts/Carts';

const Premium = ({ plansPromise, selectedCarts, setSelectedCarts, btnTheme, setBtnTheme }) => {

    const plans = use(plansPromise);

    

    return (
        <div className='mb-30 mx-1.5'>

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
                    
                    btn text-[0.875rem] md:text-[1rem] font-medium py-2 md:py-3 px-4 rounded-full`}>Cart ({selectedCarts.length}) </button>
                </div>
            </div>

            {
                btnTheme === "products" ? <Products plans={plans} btnTheme={btnTheme} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} />

                    :
                    <Carts selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} />
            }
        </div>
    );
};

export default Premium;