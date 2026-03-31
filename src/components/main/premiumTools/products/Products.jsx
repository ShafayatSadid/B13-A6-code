import React from 'react';
import PlanCard from './PlanCard';

const Products = ({plans, cartItems, setCartItems}) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-300 mx-auto gap-7.5 p-1.5'>
            {
                plans.map(plan => <PlanCard plan={plan} cartItems={cartItems} setCartItems={setCartItems}/> )
            }
            
        </div>
    );
};

export default Products;