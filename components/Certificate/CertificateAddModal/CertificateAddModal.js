import React from 'react';

const CertificateAddModal = ({ openAdd, setOpenAdd }) => {
    console.log(openAdd)
    return (
        <>
            <div
                className={`  outline-none focus:outline-none z-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${openAdd ? "block duration-1000" : " translate-y-[-80rem] duration-500 "
                    }  `}
            >
                <div className=" bg-white relative w-[956px] rounded-lg z-50 pb-5 ">
                    <h1 className='text-center text-2xl font-semibold font-poppins text-[#1B2E35] py-8 '>New Testimonial</h1>
                    <div className=" ">
                        <form className=" px-10">
                            <input
                                className=" w-full p-4  rounded-[6px] border border-[#E2E2E2] focus:outline-none font-poppins bg-[#F2F2F2] text-[#777C81] mb-12"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Search with email"
                            />
                            <div className=" w-full flex items-center justify-between mb-9 gap-9 ">
                                <input
                                    className=" w-full p-4  rounded-[6px] border border-[#E2E2E2] focus:outline-none font-poppins bg-[#F2F2F2] text-[#777C81]"
                                    type="number"
                                    id="number"
                                    name="number"
                                    placeholder="Certificate Id"
                                />

                                <input
                                    className="w-full p-4  rounded-[6px] border border-[#E2E2E2]  focus:outline-none font-poppins bg-[#F2F2F2] text-[#777C81]"
                                    type="text"
                                    id="topic"
                                    name="topic"
                                    placeholder="Exam Topic"
                                />
                            </div>
                            <div className=" w-full flex items-center justify-between mb-9 gap-9 ">
                                <input
                                    className=" w-full p-4  rounded-[6px] border border-[#E2E2E2] focus:outline-none font-poppins bg-[#F2F2F2] text-[#777C81]"
                                    type="number"
                                    id="date"
                                    name="date"
                                    placeholder="Exam Date"
                                />

                                <input
                                    className="w-full p-4  rounded-[6px] border border-[#E2E2E2]  focus:outline-none font-poppins bg-[#F2F2F2] text-[#777C81]"
                                    type="number"
                                    id="mark"
                                    name="mark"
                                    placeholder="Mark"
                                />
                            </div>

                            <div className=' flex items-center gap-10  mb-12 '>
                                <label className=' p-0 m-0 text-[18px] font-medium font-poppins text-[#1E1E1E]' htmlFor="upload">Photo</label>
                                <div class=" w-[102px]  rounded-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center bg-light-green cursor-pointer rounded-full pb-1.5  ">
                                        <p class=" text-white font-poppins font-medium">Upload</p>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                            </div>

                            <div className=' h-[0.5px] w-full bg-[#CCCCCC]'></div>
                        </form>
                        <div className=' w-full flex items-center justify-end gap-12 pb-6 mt-10 pr-10'>

                            <button onClick={() => setOpenAdd(false)} className=' py-[13px] px-[30px] bg-[#71767B] text-white text-[18px] font-poppins font-medium rounded'>Nope, Close</button>
                            <button type='submit' className=' py-[13px] px-[48px] text-[18px] bg-[#6371E0] text-white font-poppins font-medium rounded'>Save</button>
                        </div>

                    </div>
                </div>
            </div>

            <div onClick={() => setOpenAdd(!openAdd)} className={` fixed h-screen w-screen top-0 left-0  inset-0  bg-deep-gray transition-all  ease-in-out  ${openAdd ? ' duration-500 opacity-70 z-10 ' : ' duration-500 opacity-0 z-[-1]'}`}></div>
        </>
    );
};

export default CertificateAddModal;