import React from 'react';
import bannerImg from '../../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import CounterCards from './CounterCards';


const Banner = () => {
    return (
        <div>

            <div className='lg:flex items-center lg:w-10/12 mx-auto justify-between gap-16.5 mt-12 md:mt-16 lg:mt-21 space-y-3'>

                <div className='px-4'>
                    {/*  */}
                    <div className=' bg-[#E1E7FF] rounded-4xl w-65 md:w-73.5 h-9.5 flex items-center justify-center gap-1.5'>

                        <span class="-translate-y-1/2 flex mt-3">


                            <span class="w-3 h-3 bg-purple-400 rounded-full animate-[ping_1.5s_infinite] absolute"></span>


                            <span class="w-3 h-3 bg-purple-600 rounded-full"></span>

                        </span>

                        <p className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-[0.785rem] md:text-[1rem] font-semibold'>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className='text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold max-w-171'>Supercharge Your Digital Workflow</h1>

                    <p className='text-[1rem] text-[#627382] lg:text-[1.125rem] max-w-160 mt-4 mb-5 lg:mb-8'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    <div className='flex items-center gap-2 md:gap-4'>
                        <button className='btn text-[0.675rem] md:text-[1rem] font-semibold py-2 md:py-3 px-3 md:px-4  text-white rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA]'>Explore Products</button>

                        <button
                            className='btn flex items-center gap-1.5 md:gap-2.5 text-[0.675rem] md:text-[1rem] font-semibold py-2 md:py-3 px-3 md:px-4 rounded-full bg-linear-to-bl from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-[#4f39f6]'>

                            <CiPlay1 className='text-[#9514FA]'></CiPlay1>

                            Watch Demo
                        </button>
                    </div>
                </div>

                <img className='h-125 max-w-full' src={bannerImg} alt="It is a digital Image" />


            </div>

            <CounterCards/>

        </div>


    );
};

export default Banner;