import React from 'react';

const CardsForCarts = ({ selectedCart, deleteItems}) => {

    const { name, icon, price } = selectedCart;
    return (
        <div className='bg-[#F9FAFC] rounded-4xl p-5 flex justify-between items-center'>

            <div className='flex gap-4 items-center '>

                {/* product logo */}
                <div className=''>
                    <img className='w-10 h-10' src={icon} alt="" />
                </div>

                <div>
                    <h2 className="text-[1.5rem] font-bold">{name} </h2>
                    <p className='text-[1rem] text-[#627382] mt-3 '>${price}</p>
                </div>
            </div>

            <div>
                <button onClick={()=> deleteItems(selectedCart)} className='text-red-500'>Remove</button>
            </div>
        </div>
    );
};

export default CardsForCarts;