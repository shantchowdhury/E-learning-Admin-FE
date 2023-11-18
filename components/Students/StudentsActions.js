import React from 'react';
import { FaSearch } from "react-icons/fa";

const StudentsActions = () => {
    return (
        <div className='flex items-center justify-between px-7 mb-10'>
            <h2 className='font-poppins font-semibold text-lg text-dark_gray'>Registered Students</h2>

            <div className='flex items-stretch p-1'>
                <div className='flex justify-center bg-[#ECECEC] px-2 py-[10px] rounded-l-3xl'>
                    <select className='mx-auto bg-transparent font-inter text-sm outline-0 text-[#6D6D6D]'>
                        <option> Email </option>
                        <option> Phone </option>
                        <option> Status</option>
                    </select>
                </div>
                <input className='w-[250px] font-inter text-sm text-dark p-2 outline-none border border-l-0 border-r-0 border-gray'/>
                <button className='bg-[#2775AE] cursor-pointer flex items-center px-6 rounded-r-3xl'>
                    <FaSearch className='w-full mx-auto text-white' />
                </button>
            </div>
        </div>
    );
};

export default StudentsActions;