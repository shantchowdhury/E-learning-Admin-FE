import React from 'react';

const TestModal = ({ testModal, setTestModal }) => {
    return (
        <>
            <div
                className={`  outline-none focus:outline-none z-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${testModal ? "block duration-1000" : " translate-y-[-80rem] duration-500 "
                    }  `}
            >
                <div className=" bg-white relative w-[550px] rounded-lg z-50">
                    <div className="pt-5">
                        <form className="px-14 text-left pb-[69px]">
                            <label htmlFor="category" className='
                                text-[#171717] font-poppins font-medium text-2xl px-0 text-left'>Category name</label>
                            <div className=" w-full flex items-center justify-between mb-7 mt-5">
                                <input
                                    className=" w-full p-2 rounded-lg focus:outline-none font-poppins bg-body-color border border-[#C1C1C1]"
                                    type="text"
                                    id="category"
                                    name="category"
                                />
                            </div>
                        </form>
                        <hr className=" border-light-gray" />
                        <div className=' pt-8'>
                            <div className=' text-center py-5 pb-9 flex justify-center items-center gap-10 px-14'>
                                <button className=' py-[13px] px-[30px] bg-[#848484] text-white text-[18px] font-inter font-medium rounded-[9px]'>Cancel</button>
                                <button className=' py-[13px] px-10 text-[18px] bg-[#6371E0] text-white font-inter font-medium rounded-[9px]'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setTestModal(!testModal)} className={` fixed h-screen w-screen top-0 left-0  inset-0  bg-deep-gray transition-all  ease-in-out  ${testModal ? ' duration-500 opacity-70 z-10 ' : ' duration-500 opacity-0 z-[-1] '}`}></div>
        </>
    );
};

export default TestModal;