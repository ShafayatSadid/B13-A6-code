import React from 'react';

const PlanCard = () => {
    return (

        <div className="card w-96 bg-base-100 shadow-sm">

            <div className="card-body">

                <div className='text-right'>
                    <div className="text-[0.875rem] font-medium badge badge-xs badge-warning">Most Popular</div>
                </div>

                <div className='w-15 h-15 rounded-4xl border border-[#627382] mb-6.5'>
                    <img src={'/src/assets/free.svg'} alt="" />
                </div>
                <div className="">
                    <h2 className="text-[1.5rem] font-bold">AI Writing Pro</h2>
                    <p className='text-[1rem] text-[#627382] mt-4 '>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>

                    <div className='flex items-end'>
                        <h2 className="text-[1.5rem] font-bold">$12</h2>
                        <div className='text-[1rem] text-[#627382]'>/Mo</div>
                    </div>
                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[1rem] text-[#627382]'>High-resolution image generation</span>
                    </li>
                    
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;