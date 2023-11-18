import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
// import ReactQuill from 'react-quill';

const LeftSide = ({event,setEvent}) => {
    
    const [value, setValue] = useState('');
    const [eventType, setType] = useState('online');

    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value,
            content: value
        })
        console.log(event)
    }


    return (
        <div className='bg-[#FFFFFF] w-[60%] h-max border border-gray rounded-3xl pt-10 px-6 pb-10'>
            <div>
                <input name='title' onChange={handleChange} className={style.input}  placeholder='Event Title' />
                <input name='description' onChange={handleChange} className={style.input}  placeholder='One line description..' />
                <div className='flex justify-between gap-5'>
                    <select defaultValue={'online'} name='eventType' onChange={handleChange} className={style.input}>
                        <option value='online'>Online</option>
                        <option value='offline'>Offline</option>
                    </select>

                    {
                        event.eventType === 'online' ? 
                        <select className={style.input}>
                            <option value='Zoom'>Zoom</option>
                            <option value='Google Meet'>Google Meet</option>
                        </select>
                        :
                        <input name='location' onChange={handleChange} className={style.input} placeholder='Location' />
                    }
                </div>
            </div>
            <div>
                <Editor
                name='content'
                onChange={
                    (e) => {
                        setEvent({
                            ...event,
                            content: e.target.getContent()
                        })
                    }
                }
                />
            </div>
        </div>
    );
};


const style = {
    input: 'py-[14px] px-5 mb-6 font-inter text-sm outline-none bg-gray/20 border border-gray/20 rounded-xl font-normal text-dark w-full'
}

export default LeftSide;