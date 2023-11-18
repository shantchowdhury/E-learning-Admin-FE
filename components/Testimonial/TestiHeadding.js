import React from 'react';

const TestiHeadding = ({ setAddPopup }) => {
    return (
        <div className='flex items-center gap-4 mb-10'>
            <h1 className='font-poppins font-semibold text-lg text-dark_gray'>All Testimonial</h1>
            <button onClick={() => setAddPopup(prev => !prev)} className='py-[10px] px-4 rounded-md bg-indigo font-poppins text-sm text-white'>Add New</button>
        </div>
    );

};

export default TestiHeadding;