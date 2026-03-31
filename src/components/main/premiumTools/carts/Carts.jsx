import React from 'react';
import EmptyCarts from './EmptyCarts';
import MainCarts from './cardsForCarts/MainCarts';

const Carts = ({ selectedCarts, setSelectedCarts }) => {
    return (
        <div className='max-w-300 w-full border border-[#F2F2F2] mx-auto rounded-3xl p-5 lg:p-10'>
            
            <h3 className='text-[1.2rem] md:text-2xl font-bold mb-6'>Your Cart</h3>

            {
                selectedCarts.length === 0 ? <EmptyCarts /> : <MainCarts selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} />
            }



        </div>
    );
};

export default Carts;