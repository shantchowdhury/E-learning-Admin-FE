import React from 'react';
import { RiSettings5Fill } from "react-icons/ri";

const CertificateDeletModal = ({ deleteopen, setDeleteOpen }) => {
    return (
        <>
            <div
                className={`  outline-none focus:outline-none z-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${deleteopen ? 'block duration-1000' : ' translate-y-[-80rem] duration-500 '}  `}
            >
                <div className=' bg-white border border-light-gray  relative w-[550px] rounded-lg z-50'>
                    <div className=' absolute top-[-18%] right-[39%]'>
                        <div className=' w-28 h-28 bg-white rounded-full flex items-center justify-center'>
                            <RiSettings5Fill className='text-7xl text-youtube' />
                        </div>


                    </div>
                    <div className=' pt-24'>
                        <h1 className=' text-center font-poppins text-2xl font-bold text-youtube '>ARE YOU SURE!</h1>
                        <h4 className=' text-center font-poppins text-[18px] font-medium text-light-gray mb-8'>You want to delete this post?</h4>
                        <div className=' text-center py-5 pb-9 flex justify-center items-center gap-10 px-14'>
                            <button onClick={() => setDeleteOpen(false)} className=' py-[13px] px-[30px] bg-[#71767B] text-white text-[18px] font-poppins font-medium rounded'>Nope, Close</button>
                            <button className=' py-[13px] px-[30px] text-[18px] bg-youtube text-white font-poppins font-medium rounded'>Yeah, Delete</button>
                        </div>
                    </div>
                </div>

            </div>

            <div onClick={() => setDeleteOpen(!deleteopen)} className={` fixed h-screen w-screen top-0 left-0  inset-0  bg-deep-gray transition-all ease-in-out ${deleteopen ? ' duration-500 opacity-70 z-10' : 'duration-500 opacity-0 z-[-1]'}`}></div>

        </>
    );
};

export default CertificateDeletModal;