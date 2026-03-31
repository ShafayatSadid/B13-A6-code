import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PlanCard = ({ plan, selectedCarts, setSelectedCarts }) => {


    const { name, description, price, period, tag, icon, features, tagType } = plan;

    // handle buy now btn text
    const [isSelected, setIsSelected] = useState(false);

    const handleCartItems = () => {

        setIsSelected(true)
        // the cart is already selected that's not be selected
        const exist = selectedCarts.find(item => item.name === name);
        if (!exist) {

            setSelectedCarts([...selectedCarts, plan])
            toast.success(`You added ${name} plan to your cart.`)
        }
        else {
            toast.warn(`You have already selected the ${name} plan.`)
        }


        // console.log(selectedCarts)
    }

    return (

        <div className="card max-w-96 w-full bg-base-100 shadow-sm mx-auto border border-[#F2F2F2] transform transition duration-300 hover:scale-102">

            <div className="card-body">

                {/* Product tag */}
                <div className='text-right'>
                    <div className={`text-[0.875rem] font-medium badge badge-soft ${tagType}`}>{tag} </div>
                </div>

                {/* product logo */}
                <div className='mb-6.5'>
                    <img className='w-10 h-10' src={icon} alt="" />
                </div>

                {/* product title */}
                <div className="">
                    <h2 className="text-[1.5rem] font-bold">{name} </h2>
                    <p className='text-[1rem] text-[#627382] my-4 '>{description} </p>

                    <div className='flex items-end'>
                        <h2 className="text-[1.5rem] font-bold">${price}</h2>
                        <div className='text-[1rem] text-[#627382]'>/{period}</div>
                    </div>
                </div>

                {/* Features */}
                <ul className="mt-6 flex flex-col gap-2 text-xs h-full">

                    {
                        features.map((feature, ind) => <li key={ind} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[1rem] text-[#627382]'>{feature}</span>
                        </li>)
                    }


                </ul>

                {/* product btn */}
                <div className="mt-6">
                    <button onClick={handleCartItems} className="text-[1rem] font-bold text-[#FFFFFF] btn btn-primary py-3.5 rounded-4xl btn-block bg-linear-to-tr from-[#4F39F6] to-[#9514FA]">{isSelected ? 'Selected' : 'Buy Now'} </button>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;