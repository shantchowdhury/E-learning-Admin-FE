import React, { useState } from 'react';

const RightSide = ({file,setFile,handleSubmit,event,setEvent}) => {


    const handleChangeImg = (e) => {
        // setFile(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }
    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value

        })
        console.log(event)
    }


    return (
        <div className='pl-14 w-[30%]'>
            <div className='border border-gray/80 rounded-xl'>
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
                        <div className='flex items-center justify-center w-full h-44 bg-white rounded-b-xl text-4xl '>
                            <p className='text-center font-poppins text-gray pointer-events-none'>Preview</p>
                        </div>
                }
            </div>

            <div className='mt-9'>
                <div className='flex justify-between gap-5'>
                    <input name='date' onChange={handleChange} className={styles.input} type="date"  />
                    <input name='time' onChange={handleChange} className={styles.input} type="time" />
                </div>
                <input name='host' onChange={handleChange} className={styles.input} placeholder='Event host' />
                <input name='price' onChange={handleChange} className={styles.input} placeholder='Price' />
            </div>

            <div>
                <textarea name='policy' onChange={handleChange} rows="8" className={styles.input} placeholder="Policy"></textarea>
            </div>

            <div className='flex justify-end mt-5 gap-4'>
                <div>
                    <button className={`${styles.button} bg-light_yellow`}> Save </button>
                </div>
                <div>
                    <button onClick={handleSubmit} className={`${styles.button} bg-indigo`}> Publish </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    input: 'py-[14px] px-5 mb-6 font-inter text-sm outline-none border border-gray/80 rounded-xl font-normal text-dark w-full',
    button: "py-2 px-[30px] text-white font-inter rounded-md font-medium"
}

export default RightSide;