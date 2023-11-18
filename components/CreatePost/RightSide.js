import React, { useState } from 'react';

const RightSide = () => {
    const [file, setFile] = useState();
    const [count, setCount] = useState(160);

    const handleChangeImg = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handelCount = e => {
        const char = e.target.value;
        setCount(160 - char.length);
    }

    return (
        <div className='pl-14 w-[30%]'>
            <div className='border border-gray/80 rounded-xl mb-10'>
                <div className='flex px-4 py-3 font-inter items-center text-sm justify-between rounded-t-xl'>
                    <p className='uppercase'>Featured Image</p>
                    <input onChange={handleChangeImg} accept="image/*" type="file" className='hidden' id='feature' />
                    <label htmlFor="feature" className='bg-dark_green text-white px-4 py-[6px] rounded-full cursor-pointer'>
                        Upload
                    </label>
                </div>
                <div className='w-full border-b border-b-gray/80' ></div>
                {
                    file ?
                        <img src={file} alt="" className='w-full object-cover h-44 rounded-b-xl' />
                        :
                        <div className='flex items-center justify-center w-full h-44 bg-[#FFFFFF] rounded-b-xl text-4xl '>
                            <p className='text-center font-poppins text-gray pointer-events-none'>Preview</p>
                        </div>
                }
            </div>

            <select className={styles.input}>
                <option selected disabled>Select category</option>
                <option value="web">Web Development</option>
                <option value="BlC">Block Chain</option>
            </select>
            <select className={styles.input}>
                <option selected disabled>Select Author</option>
                <option value="web">Shahnewaz (Super Admin 👑)</option>
                <option value="web">Shahnewaz (Super Admin 👑)</option>
                <option value="web">Shahnewaz (Super Admin 👑)</option>
            </select>

            <div className='flex flex-col'>
                <textarea rows="6" className={styles.textarea} onChange={handelCount} maxLength='160' placeholder="Meta description"></textarea>
                <div className='border p-2 border-gray bg-white rounded-b-xl flex justify-end'>
                    <span className='bg-light_green/20 text-dark_green w-10 text-center py-[2px] rounded-full font-poppins text-sm'>{count}</span>
                </div>
            </div>

            <div className='flex justify-end mt-10'>
                <div>
                    <button id='' className=" py-[9px] px-[30px] bg-[#D7AB56] text-white font-inter rounded-xl mr-3 font-medium text-base">
                        Save
                    </button>
                </div>
                <div>
                    <button className="py-[9px] px-[30px] bg-[#2E9987] text-white font-inter rounded-xl">
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};


const styles = {
    textarea: 'py-[14px] px-5 font-inter text-sm outline-none bg-white border border-gray/80 border-b-0 rounded-t-xl resize-none text-dark w-full',
    input: 'py-[14px] px-5 mb-6 font-inter text-sm outline-none border border-gray/80 rounded-xl font-normal text-dark w-full',
    button: "py-2 px-[30px] text-white font-inter rounded-md font-medium"
}

export default RightSide;