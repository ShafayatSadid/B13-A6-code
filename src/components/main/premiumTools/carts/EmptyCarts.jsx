import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const EmptyCarts = () => {
    return (
        <div className='text-center text-[#627382]'>
            <div className='flex justify-center'>
                <IoCartOutline className='text-8xl lg:text-9xl'/>
            </div>
            <p>Your cart is empty</p>
        </div>
    );
};

export default EmptyCarts;