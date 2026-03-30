import React from 'react';

const CounterCards = () => {
    return (
        <div className='bg-linear-to-tr from-[#4F39F6] to-[#9514FA] lg:flex justify-center py-15'>

            <div className='text-white max-w-99.5 w-full flex flex-col justify-center items-center'>
                <h2 className='text-[2.5rem] font-bold lg:font-extrabold md:text-[3rem] lg:text-[3rem]'>50k+</h2>
                <p className='text-[1.25rem] md:text-[1.5rem] font-medium '>Active Users</p>
            </div>

            <div className='text-white max-w-99.5 w-full flex flex-col justify-center items-center my-10 lg:my-0'>
                <h2 className='text-[2.5rem] font-bold lg:font-extrabold md:text-[3rem] lg:text-[3rem] '>200+</h2>
                <p className='text-[1.25rem] md:text-[1.5rem] font-medium '>Premium Tools</p>
            </div>

            <div className='text-white max-w-99.5 w-full flex flex-col justify-center items-center'>
                <h2 className='text-[2.5rem] font-bold lg:font-extrabold md:text-[3rem] lg:text-[3rem] '>4.9</h2>
                <p className='text-[1.25rem] md:text-[1.5rem] font-medium '>Rating</p>
            </div>


        </div>
    );
};

export default CounterCards;