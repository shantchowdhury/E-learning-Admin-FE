import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const RightSide = () => {
    const [value, setValue] = useState('');
    const [file, setFile] = useState();

    const handleChangeImg = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className='bg-[#FFFFFF] w-[50%] h-max border border-gray rounded-3xl pt-10 px-6 pb-10'>
            {/* Create a form  which will take Section Name, description and image*/}
            <div className=''>
                {/* create input fields with labels Course Section name, Description */}
                {/* course section, Section name */}
                <div className='w-[100%]'>
                    <input className={styles.input} placeholder='Course Section' />
                </div>
                <br />
                {/* course section, Description */}
                <div className='w-[100%]'>
                <Editor
                onChange={(e) => setValue(e.target.getContent())}
                />
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