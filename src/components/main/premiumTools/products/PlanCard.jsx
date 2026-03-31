import React from 'react';

const PlanCard = ({ plan, cartItems, setCartItems}) => {
    console.log(plan)

    const { name, description, price, period, tag, icon, features, tagType } = plan;

    const handleCartItems = () => {
        // setCartItems([...cartItems,plan])

        console.log(cartItems);
    }

    return (

        <div className="card max-w-96 w-full bg-base-100 shadow-sm mx-auto border border-[#F2F2F2] ">

            <div className="card-body">

                <div className='text-right'>
                    <div className={`text-[0.875rem] font-medium badge badge-soft ${tagType}`}>{tag} </div>
                </div>

                <div className='w-15 h-15 rounded-4xl mb-6.5'>
                    <img className='w-10 h-10' src={icon} alt="" />
                </div>

                <div className="">
                    <h2 className="text-[1.5rem] font-bold">{name} </h2>
                    <p className='text-[1rem] text-[#627382] my-4 '>{description} </p>

                    <div className='flex items-end'>
                        <h2 className="text-[1.5rem] font-bold">${price}</h2>
                        <div className='text-[1rem] text-[#627382]'>/{period}</div>
                    </div>
                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs h-full">

                    {
                        features.map(feature => <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[1rem] text-[#627382]'>{feature}</span>
                        </li>)
                    }


                </ul>

                <div className="mt-6">
                    <button onClick={handleCartItems} className="text-[1rem] font-bold text-[#FFFFFF] btn btn-primary py-3.5 rounded-4xl btn-block bg-linear-to-tr from-[#4F39F6] to-[#9514FA]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;