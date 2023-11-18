import React from 'react';

const TestButton = () => {

    const btnMaker = [
        {
            id: 1,
            text: "Published"
        },
        {
            id: 2,
            text: "Draft"
        }
    ]

    return (
        <div className=' flex items-center gap-5 '>
            {
                btnMaker.map(btn => <button key={btn.id} className=' rounded py-1 px-4 text-[#777C81] font-medium bg-white border border-[#E2E2E2]'>{btn.text}</button>)
            }
        </div>
    );
};

export default TestButton;