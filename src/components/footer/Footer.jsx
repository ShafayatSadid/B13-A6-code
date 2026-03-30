import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#101727] px-7 pt-15 pb-7.5'>

            <div className='text-[#ffffff] lg:flex justify-evenly lg:mb-20 lg:mt-20'>
                <div className='space-y-2 md:space-y-4'>
                    <h2 className='text-[1.5rem] md:text-[2rem] font-semibold '>DigiTools</h2>
                    <p className='text-[0.785rem] lg:text-[1rem] max-w-87 '>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div>
                    <h3 className='text-[1.2rem] md:text-[1.5rem] font-semibold mt-8 md:mt-0 mb-2 lg:mb-4'>Product</h3>

                    <ul className='space-y-2 lg:space-y-4'>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Integrations</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-[1.2rem] md:text-[1.5rem] font-semibold mt-8 md:mt-0 mb-2 lg:mb-4'>Company</h3>

                    <ul className='space-y-2 lg:space-y-4'>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-[1.2rem] md:text-[1.5rem] font-semibold mt-8 md:mt-0 mb-2 lg:mb-4'>Resources</h3>

                    <ul className='space-y-2 lg:space-y-4'>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-[1.2rem] md:text-[1.5rem] font-semibold mt-8 md:mt-0 mb-2 lg:mb-4'>Social Links</h3>

                    <ul className='flex gap-3'>
                        <li className='p-2.5 bg-white rounded-4xl'><a className='text-black w-5' href=""><TbBrandInstagramFilled /></a></li>
                        <li className='p-2.5 bg-white rounded-4xl'><a className='text-black w-5' href=""><FaFacebookSquare /> </a></li>
                        <li className='p-2.5 bg-white rounded-4xl'><a className='text-black w-5' href=""><FaXTwitter /> </a></li>
                    </ul>
                </div>
            </div>

            <div className="divider"></div>

            <div className='text-white text-center md:flex justify-between max-w-300 mx-auto items-center'>
                <p>© 2026 DigiTools. All rights reserved.</p>
                <ul className='flex gap-4 md:gap-10'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>


        </div>
    );
};

export default Footer;


