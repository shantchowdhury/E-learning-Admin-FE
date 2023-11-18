import React, { useState } from 'react';
import Reply from './Reply';
import {FaUserCircle} from 'react-icons/fa';

const MessageBody = () => {

    const [open, setOpen] = useState(false);

    return (
         <div className='w-[60%] mx-auto px-12 py-6 bg-white border border-gray/40 rounded-xl'>
            <div className='flex content-center items-center justify-between mb-10'>
                <div className='flex items-center gap-4'>
                    <FaUserCircle size={45} className="text-gray" />
                    <div>
                        <p className='font-poppins text-lg font-medium text-dark'>Shahnewaz Rakib</p>
                        <p className='font-inter text-sm text-light_gray'>example@gmail.com</p>
                    </div>
                </div>
                <div className='font-inter text-sm space-y-2'>
                    <div className={styles.new}>Today - New Entry</div>
                    <p className='font-normal text-light_gray'>20 Dec, 2020, 10:39 AM</p>
                </div>
            </div>

            <div className='space-y-4'>
                <h3 className='font-inter font-semibold text-xl text-dark'>I can't login to my account. It showing me that internal server error</h3>
                <p className='font-inter text-justify text-sm leading-relaxed text-dark_gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis expedita, doloremque fugit recusandae ullam nulla accusantium ipsa veritatis, ut soluta at non porro voluptate fugiat voluptas debitis. Minima sit aut nam vel ducimus facere cum possimus, ullam, placeat, sequi libero deserunt nostrum quod! Atque laudantium soluta ipsa recusandae, saepe earum tenetur sit eveniet ratione iste velit laborum quas accusantium rem quis a. Eum rerum dolore quidem possimus vero voluptatum! Sint molestiae provident exercitationem, excepturi harum magni omnis autem facere illum nemo odit nulla asperiores repellendus voluptatum eligendi voluptatem corporis deleniti distinctio adipisci iste minus doloribus tempore libero! Ipsam saepe adipisci exercitationem iure ducimus temporibus odio sunt ipsum delectus modi repellendus necessitatibus at laborum quo molestias deserunt quia ipsa, eaque minus dicta magnam! Incidunt dolore tempora reiciendis culpa, aliquid, quia perferendis ullam cupiditate obcaecati, itaque iure delectus vero expedita similique explicabo doloribus repellat. Officia provident rem quae rerum aliquid unde?</p>
                
                {
                    open ?
                    <button className='py-2 w-24 text-white bg-light_yellow rounded-md font-poppins text-sm' onClick={() => setOpen(prev => !prev)}>Close</button>
                    :
                    <button className='py-2 w-24 text-white bg-blue rounded-md font-poppins text-sm' onClick={() => setOpen(prev => !prev)}>Reply</button>
                }

                {open && <Reply />}
            </div>
        </div>
    );
};

const styles = {
    new: 'bg-youtube/10 py-1 px-3 font-medium text-youtube rounded-md w-full text-center',
    solve: 'bg-light_green/20 py-1 px-3 font-medium text-dark_green rounded-md w-full text-center',
    pending: 'bg-light_yellow/20 py-1 px-3 font-medium text-dark_yellow rounded-md w-full text-center',
}

export default MessageBody; 