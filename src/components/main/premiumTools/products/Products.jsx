import React from 'react';
import PlanCard from './PlanCard';

const Products = ({plans, selectedCarts, setSelectedCarts}) => {
    
    // console.log(carts)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-300 mx-auto gap-7.5 p-1.5'>
            {
                plans.map(plan => <PlanCard plan={plan} key={plan.id} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}></PlanCard> )
            }
            
        </div>
    );
};

export default Products;