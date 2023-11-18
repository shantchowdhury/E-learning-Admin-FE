import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import Test from '../../../../images/phpstorm-logo.svg';

const TestCardItem = () => {
    return (
        <div className='bg-white w-[249px] rounded-xl border border-[#E2E2E2]'>
            <div className=' px-4 pt-5'>
                <div className='flex items-start gap-6'>
                    <img src={Test} alt="" />
                    <h1 className=' mb-5 font-poppins font-medium text-lg text-[#1B2E35]'>Front-End development</h1>
                </div>
                <div className=' flex items-center justify-between pb-5'>
                    <div className='py-1 px-2 bg-opacity-10 flex bg-light-green items-center rounded-md font-medium font-poppins text-light-green '>
                        <h1>$59.25</h1>
                    </div>
                    <div className='py-1 px-2 mr-5 pr-5 flex items-center  font-poppins text-[#1B2E35]'>
                        <FaUserAlt className=' mr-3 text-[#9D9D9D]' />
                        <h1>2,302</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCardItem;