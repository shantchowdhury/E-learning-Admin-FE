import React from 'react';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { FaTrashAlt, FaUser } from "react-icons/fa";

const CertificateTableRow = ({ setOpen, setDeleteOpen }) => {
    return (
        <tr className='border-b border-[#E6E6E6] border-[0.5px]'>
            <td className="whitespace-nowrap px-4 py-4  text-[#777C81] font-inter text-[15px]">Lorem ipsum dolor sit amet elit....
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-[#777C81] font-inter text-[15px]">
                Shahnewaz Rakib
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-[#777C81] font-inter text-[15px]">Blockchain</td>
            <td className="whitespace-nowrap px-4 py-4 text-[#777C81] font-inter text-[15px]">12 Oct, 2022</td>
            <td className="whitespace-nowrap  rounded-md py-4">
                <button className='w-[106px] h-[30px] bg-[#E4F8EE] relative rounded-lg'><p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#4ED28B] font-inter font-semibold'>Published</p></button>
            </td>
            <td className="whitespace-nowrap px-4 py-4 flex items-center gap-2">

                <button className=' h-7 w-7 rounded-full  bg-[#F9B654]  flex items-center justify-center'><FaUser className='text-[18px] text-white' /></button>

                <button className=' h-7 w-7 rounded-full  bg-[#2E9987]  flex items-center justify-center'><BsEyeFill className='text-[18px] text-white' /></button>


                <button className=' h-7 w-7 rounded-full  bg-twitter  flex items-center justify-center'><MdOutlineModeEditOutline className='text-[18px] text-white' /></button>

                <button onClick={() => setDeleteOpen(true)} className=' h-7 w-7 rounded-full  cursor-pointer bg-youtube  flex items-center justify-center'><FaTrashAlt className='text-[18px] text-white' /></button>
            </td>
        </tr>
    );
};

export default CertificateTableRow;