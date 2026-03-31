import React from 'react';

const Transparent = () => {
    return (
        <div className='bg-[#F9FAFC] py-15 lg:py-30 px-2'>

            <div className='text-center'>
                <h2 className='text-[2rem] md:text-[3rem] font-extrabold '>Simple, Transparent Pricing</h2>
                <p className='text-[1rem] text-[#627382] mt-3 md:mt-4 mb-5 md:mb-10 '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='flex flex-wrap justify-center items-center max-w-300 mx-auto space-y-5'>

                {/* Card - 1 */}

                <div className="card max-w-96 w-full bg-base-100 shadow-sm mx-auto border border-[#F2F2F2]">

                    <div className="card-body">

                        {/* Product tag */}
                        {/* <div className='text-right'>
                            <div className={`text-[0.875rem] font-medium badge badge-soft`}> </div>
                        </div> */}

                        {/* product logo */}
                        {/* <div className='mb-6.5'>
                            <img className='w-10 h-10' src={} alt="" />
                        </div> */}

                        {/* product title */}
                        <div className="">
                            <h2 className="text-[1.5rem] font-bold">Starter</h2>
                            <p className='text-[1rem] text-[#627382] my-4 '>Perfect for getting started</p>

                            <div className='flex items-end'>
                                <h2 className="text-[1.5rem] font-bold">$0</h2>
                                <div className='text-[1rem] text-[#627382]'>/Mo</div>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="mt-6 flex flex-col gap-2 text-xs h-full">


                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Access to 10 free tools</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Basic templates</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Community support</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>1 project per month</span>
                            </li>



                        </ul>

                        {/* product btn */}
                        <div className="mt-6">
                            <button className="text-[1rem] font-medium text-[#FFFFFF] btn btn-primary py-3.5 rounded-4xl btn-block bg-linear-to-tr from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
                        </div>
                    </div>
                </div>

                {/* card - 2 */}
                <div className="card max-w-96 w-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] shadow-sm mx-auto border border-[#F2F2F2]">

                    <div className="card-body">

                        {/* Product tag */}
                        <div className='text-center relative'>
                            <div className={`absolute -top-9 left-30 text-[0.875rem] font-medium badge text-[#BB4D00] bg-[#FEF3C6] rounded-full`}>Most Popular </div>
                        </div>

                        {/* product logo */}
                        {/* <div className='mb-6.5'>
                            <img className='w-10 h-10' src={} alt="" />
                        </div> */}

                        {/* product title */}
                        <div className="text-[#ffffff] ">
                            <h2 className="text-[1.5rem] font-bold">Pro</h2>
                            <p className='text-[1rem] my-4 '>Best for professionals</p>

                            <div className='flex items-end'>
                                <h2 className="text-[1.5rem] font-bold">$29</h2>
                                <div className='text-[1rem]'>/Mo</div>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="mt-6 flex flex-col gap-2 text-xs h-full">


                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#ffffff]'>Access to all premium tools</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#ffffff]'>Unlimited templates</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#ffffff]'>Priority support</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#ffffff]'>Unlimited projects</span>
                            </li>


                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#ffffff]'>Cloud sync</span>
                            </li>


                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#ffffff]'>Advanced analytics</span>
                            </li>



                        </ul>

                        {/* product btn */}
                        <div className="mt-6">
                            <button className="text-[1rem] font-medium bg-[#FFFFFF] btn py-3.5 rounded-4xl btn-block text-[#9514FA]">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                {/* Card - 3 */}
                <div className="card max-w-96 w-full bg-base-100 shadow-sm mx-auto border border-[#F2F2F2]">

                    <div className="card-body">

                        {/* Product tag */}
                        {/* <div className='text-right'>
                            <div className={`text-[0.875rem] font-medium badge badge-soft`}> </div>
                        </div> */}

                        {/* product logo */}
                        {/* <div className='mb-6.5'>
                            <img className='w-10 h-10' src={} alt="" />
                        </div> */}

                        {/* product title */}
                        <div className="">
                            <h2 className="text-[1.5rem] font-bold">Enterprise</h2>
                            <p className='text-[1rem] text-[#627382] my-4 '>For teams and businesses</p>

                            <div className='flex items-end'>
                                <h2 className="text-[1.5rem] font-bold">$99</h2>
                                <div className='text-[1rem] text-[#627382]'>/Month</div>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="mt-6 flex flex-col gap-2 text-xs h-full">


                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Everything in Pro</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Team collaboration</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Custom integrations</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Dedicated support</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>SLA guarantee</span>
                            </li>


                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[1rem] text-[#627382]'>Custom branding</span>
                            </li>



                        </ul>

                        {/* product btn */}
                        <div className="mt-6">
                            <button className="text-[1rem] font-medium text-[#FFFFFF] btn btn-primary py-3.5 rounded-4xl btn-block bg-linear-to-tr from-[#4F39F6] to-[#9514FA]">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transparent;