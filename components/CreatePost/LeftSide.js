import { useState } from 'react';
import ReactQuill from 'react-quill';

const LeftSide = () => {
    const [value, setValue] = useState('');

    return (
        <div className='w-[60%] bg-white border border-gray rounded-3xl pt-10 px-6'>
            <input className={style.input} type="text" name="" id="postTitle" placeholder='Post Title' />
            <ReactQuill theme="snow" value={value} onChange={value => console.log(value)} />
        </div>
    );
};


const style = {
    input: 'py-[14px] px-5 mb-6 font-inter text-sm outline-none bg-gray/20 border border-gray/20 rounded-xl font-normal text-dark w-full'
}

export default LeftSide;