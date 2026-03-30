import React from 'react';

const Premium = () => {
    return (
        <div className='mt-20 md:30'>
            <h2 className='text-[2rem] lg:text-[3rem] font-extrabold text-center'>Premium Digital Tools</h2>
            <p className='text-[1rem] my-4 text[#627382] max-w-140 text-center mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

            <div className='text-center'>
                <button className='btn text-[0.875rem] md:text-[1rem] font-semibold py-2 md:py-3 px-4  text-white rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA]'>Products</button>

                <button className='btn text-[0.875rem] md:text-[1rem] font-medium py-2 md:py-3 px-4  text-black rounded-full bg-white'>Cart (2)</button>
            </div>
        </div>
    );
};

export default Premium;