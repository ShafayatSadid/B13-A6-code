import React from 'react';
import CardsForCarts from './CardsForCarts';
import { toast } from 'react-toastify';

const MainCarts = ({ selectedCarts, setSelectedCarts }) => {

    // some of total
    let total = 0;
    selectedCarts.forEach(element => total += element.price)

    // handle deleteItems
    const deleteItems = (selectedCart) => {

        total - selectedCart.price;
        const filteredCarts = selectedCarts.filter(item => selectedCart.name !== item.name);

        setSelectedCarts(filteredCarts);
    }

    // handle proceed btn
    const handleProceed = () => {
        setSelectedCarts([])
        toast.success('You Successfully proceed all order.')
    }

    const finalTotal = Math.ceil(total);

    console.log(total, 'total')
    return (
        <div>

            <div className='space-y-4 mb-5'>
                {
                    selectedCarts.map(selectedCart => <CardsForCarts key={selectedCart.id} selectedCart={selectedCart} deleteItems={deleteItems} />)
                }
            </div>

            <div className='flex justify-between items-center'>
                <div className='text-[#627382] text-[1rem] font-medium'>Total:</div>
                <h3 className='text-[1.2rem] md:text-2xl font-bold'>${finalTotal}</h3>
            </div>

            <button onClick={handleProceed} className='text-[1rem] font-bold text-[#FFFFFF] btn btn-primary py-3.5 rounded-4xl btn-block bg-linear-to-tr from-[#4F39F6] to-[#9514FA] mt-4 md:mt-6'>Proceed to Checkout</button>
        </div>
    );
};

export default MainCarts;