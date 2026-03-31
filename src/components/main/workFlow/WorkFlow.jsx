import React from 'react';

const WorkFlow = () => {
    return (
        <div className='py-15 md:py-30 bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-[#ffffff] text-center '>
            <h2 className='text-[1.8rem] lg:text-[2.5rem] font-extrabold'>Ready to Transform Your Workflow?</h2>

            <p className='text-[1rem] mt-4 mb-7 md:mb-10'>Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>

            <div className='flex flex-wrap gap-4 items-center justify-center mb-4'>
                <button className='btn py-3.75 px-4 rounded-4xl text-[1rem] font-normal bg-[#ffffff] text-[#9514FA] '>Explore Products</button>

                <button className='btn py-3.75 px-4 rounded-4xl text-[1rem] font-normal bg-transparent text-[#ffffff] '>Explore Products</button>
            </div>

            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkFlow;