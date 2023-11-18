import React from 'react';
import shape from "../../../../images/Vectorshape.png";

const TestSideCard = ({ setTestModal }) => {

    const allData = [
        {
            id: 1,
            isSelect: false,
            number: "$20,322",
            text: "Revenue this month",
            background: "bg-gradient-to-bl from-[#4ED28B] to-[#2E9987]"
        },
        {
            id: 2,
            isSelect: false,
            number: "4500",
            text: "Tests given this month",
            background: "bg-gradient-to-l from-[#6371E0] to-[#9F57FF]"
        },
        {
            id: 3,
            isSelect: false,
            number: "102",
            text: "Today’s tests booked",
            background: "bg-gradient-to-r from-[#9F57FF] to-[#FF4493]"
        },
    ];

    return (
        <div className="px-[33px] mt-[-85px]">
            <div className="flex flex-col gap-10 mt-10">
                <button className='bg-[#777C81] rounded-[9px] text-[#FFFFFF] font-poppins font-medium text-base py-4' onClick={() => setTestModal(true)}>Add Category</button>
                {allData.map((data) => (
                    <div
                        key={data.id}
                        className={`p-[20px] ${data.background} rounded-[7px] `}
                    >
                        <div className=' pl-3'>
                            <h2 className="text-[28px]  pb-[5px] text-white font-semibold font-inter">
                                {data?.number}
                            </h2>
                            <p className="text-[18px] font-poppins pb-[5px] text-white">
                                {data?.text}
                            </p>
                        </div>
                        <div className="mt-[14px] pb-2">
                            <img className="w-full" src={shape} alt="shape" />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TestSideCard;