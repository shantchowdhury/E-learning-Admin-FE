import React from 'react';

const Reply = () => {
    return (
        <div className='font-poppins pt-5 space-y-4'>
            <input rows="8" className="px-2 py-3 w-full outline-none text-sm text-dark_gray border border-gray/50 rounded-md" placeholder="Subject" />
            <textarea rows="8" className="p-2 w-full outline-none text-sm text-dark_gray border border-gray/50 rounded-md" placeholder="Reply message"></textarea>
            <button className='py-2 w-24 text-white bg-blue rounded-md font-poppins text-sm'>Send</button>
        </div>
    );
};

export default Reply;