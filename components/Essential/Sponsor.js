import { useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaRegTrashAlt} from 'react-icons/fa';
import Zoomcar from '../../images/zoomcar.png';
import SponsorPopup from './Popup/SponsorPopup';
import DeletePopup from './Popup/DeletePopup';

function Sponsor() {
  const [openSponsorPopup, setSponsorPopup] = useState(false);
  const [openDeletePopup, setDeletePopup] = useState(false);

  return (
    <div>
        <div className='flex items-center gap-4'>
            <h1 className='font-poppins font-semibold text-lg text-dark_gray'>Our Partners</h1>
            <button onClick={() => setSponsorPopup(prev => !prev)} className='py-[10px] px-4 rounded-md bg-indigo font-poppins text-sm text-white'>Add New</button>
        </div>

        <div className='mt-10'>
            <Swiper 
                breakpoints={{
                    1000: {
                        width: 1400,
                        slidesPerView: 6
                    },
                    0: {
                        width: 0,
                        slidesPerView: 5
                    }
                }}
                modules={[Pagination]} 
                pagination={{ clickable: true }}
            >
                {
                    [...Array(10).keys()].map((value, index) => {
                        return <SwiperSlide key={index}>
                                    <div className='bg-white group relative border border-gray/50 rounded-md w-48 h-28 flex justify-center items-center'>
                                        <img src={Zoomcar} />
                                        <div onClick={() => setDeletePopup(prev => !prev)} className={style.icon}>
                                            <FaRegTrashAlt size={14} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                    })
                }
            </Swiper>
        </div>

        <SponsorPopup openSponsorPopup={openSponsorPopup} setSponsorPopup={setSponsorPopup} />
        <DeletePopup openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} />
    </div>
  )
}

const style = {
    icon: "cursor-pointer duration-300 group-hover:opacity-100 opacity-0 absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-youtube/10 text-youtube",
}

export default Sponsor