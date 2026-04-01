import React from 'react';
import user from '../../../assets/user.png'
import pro from '../../../assets/pro.png'
import packages from '../../../assets/package.png'

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] py-15 lg:py-30 px-2'>

            <div className='text-center'>
                <h2 className='text-[2rem] md:text-[3rem] font-extrabold text-black'>Get Started in 3 Steps</h2>
                <p className='text-[1rem] text-[#627382] mt-3 md:mt-4 mb-5 md:mb-10 '>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-7.5'>

                {/* card-1 */}

                <div className='bg-[#ffffff] max-w-95 w-full p-5 rounded-2xl border border-[#F1F1F1] '>

                    <div className='flex justify-end mb-7'>
                        <div className='w-10 h-10 rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white flex flex-col justify-center items-center'>
                            <span>01</span>
                        </div>
                    </div>

                    <div className='text-center'>
                        <div className='mx-auto w-25 h-25 rounded-full bg-[#9514FA]/10 flex flex-col justify-center items-center'>
                            <img className='w-15 h-15 mx-auto' src={user} alt="" />
                        </div>

                        <h3 className='text-[1.5rem] text-[#101727] font-bold my-4'>Create Account</h3>
                        <p className='text-[1rem] text-[#627382] pb-15'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </div>

                {/* card-2 */}

                <div className='bg-[#ffffff] max-w-95 w-full p-5 rounded-2xl border border-[#F1F1F1] '>

                    <div className='flex justify-end mb-7'>
                        <div className='w-10 h-10 rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white flex flex-col justify-center items-center'>
                            <span>02</span>
                        </div>
                    </div>

                    <div className='text-center'>
                        <div className='mx-auto w-25 h-25 rounded-full bg-[#9514FA]/10 flex flex-col justify-center items-center'>
                            <img className='w-15 h-15 mx-auto' src={packages} alt="" />
                        </div>

                        <h3 className='text-[1.5rem] text-[#101727] font-bold my-4'>Choose Products</h3>
                        <p className='text-[1rem] text-[#627382] pb-15'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                </div>

                {/* card - 3 */}

                <div className='bg-[#ffffff] max-w-95 w-full p-5 rounded-2xl border border-[#F1F1F1] '>

                    <div className='flex justify-end mb-7'>
                        <div className='w-10 h-10 rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white flex flex-col justify-center items-center'>
                            <span>03</span>
                        </div>
                    </div>

                    <div className='text-center'>
                        <div className='mx-auto w-25 h-25 rounded-full bg-[#9514FA]/10 flex flex-col justify-center items-center'>
                            <img className='w-15 h-15 mx-auto' src={pro} alt="" />
                        </div>

                        <h3 className='text-[1.5rem] text-[#101727] font-bold my-4'>Start Creating</h3>
                        <p className='text-[1rem] text-[#627382] pb-15'>Download and start using your premium tools immediately.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetStarted;