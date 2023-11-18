import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaRegTrashAlt} from 'react-icons/fa';
import student from '../../images/student.png';
import { useState } from 'react';
import AddTeamPopup from './Popup/AddTeamPopup';
import DeletePopup from './Popup/DeletePopup';


function Team() {
    const [openTeamPopup, setTeamPopup] = useState(false);
    const [openDeletePopup, setDeletePopup] = useState(false);

  return (
    <div>
        <div className='flex items-center gap-4'>
            <h1 className='font-poppins font-semibold text-lg text-dark_gray'>Our Team</h1>
            <button onClick={() => setTeamPopup(prev => !prev)} className='py-[10px] px-4 rounded-md bg-indigo font-poppins text-sm text-white'>Add New</button>
        </div>

        <div className='mt-10'>
            <Swiper 
                breakpoints={{
                    1000: {
                        width: 1400,
                        slidesPerView: 5
                    },
                    0: {
                        width: 0,
                        slidesPerView: 4
                    }
                }}
                modules={[Pagination]} 
                pagination={{ clickable: true }}
            >
                {
                    [...Array(10).keys()].map((value, index) => {
                        return <SwiperSlide key={index}>
                                    <div className='text-center group relative py-5 w-[250px] rounded-lg border border-gray/50 bg-white'>
                                        <img className=' mx-auto' src={student} alt="student" />
                                        <h1 className=' font-poppins font-medium mt-3  text-dark'>Mehedi Hasan Shanto</h1>
                                        <p className=' text-sm font-inter text-dark_gray'>CEO, Chowdury Elearning</p>

                                        <div onClick={() => setDeletePopup(prev => !prev)} className={style.icon}>
                                            <FaRegTrashAlt size={14} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                    })
                }
            </Swiper>
        </div>

        <AddTeamPopup openTeamPopup={openTeamPopup} setTeamPopup={setTeamPopup} />
        <DeletePopup openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} />
    </div>
  )
}

const style = {
    icon: "cursor-pointer duration-300 group-hover:opacity-100 opacity-0 absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-youtube/10 text-youtube",
}

export default Team;