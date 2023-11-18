import React from 'react';
// import shape from "../../images/Vectorshape.png";

const InfoCard = ({number, text, bg}) => {


    return (
            <div className={`flex flex-col rounded-xl bg-gradient-to-bl ${bg} gap-8`}>
                 <div className={`p-[20px]  rounded-xl`}>
                    <div className='pl-3'>
                        <h2 className="text-2xl pb-[5px] text-white font-semibold font-inter"> {number} </h2>
                        <p className="text-[18px] font-poppins pb-[5px] text-white"> {text} </p>
                    </div>
                    <div className="mt-4 pb-2">
                        <img className="w-full" src="/assets/images/Vectorshape.png" alt="shape" />
                    </div>
                </div>
            </div>
    );
};

export default InfoCard;