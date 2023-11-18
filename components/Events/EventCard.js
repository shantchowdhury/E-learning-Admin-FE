// import EventImg from '../../images/course.png'
import { FaUserAlt } from "react-icons/fa";
import { TbCalendar, TbCurrencyTaka } from "react-icons/tb";

const EventCard = () => {
    return (
        <div className='bg-white rounded-xl border border-gray'>
            <img className='w-full rounded-t-xl' src="/assets/images/course.png" alt="CourseImg" />
            <div className='p-4'>
                <h1 className='mb-5 text-black font-inter cursor-pointer'>Blockchain development ultimate course</h1>
                <div className='flex items-center justify-between mb-4'>
                    <div className='py-1 px-2 flex bg-light_green/20 items-center rounded-md text-sm font-poppins text-dark_green '>
                        Upcoming
                    </div>
                    <div className={style.info}>
                        <FaUserAlt/>
                        <p>2,302</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className={style.info}>
                        <TbCalendar size={18}/>
                        <p>22 Nov, 2022</p>
                    </div>
                    <div className={style.info}>
                        <TbCurrencyTaka size={20}/>
                        <p>230.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const style = {
    info: 'flex text-sm gap-2 items-center  font-poppins text-dark_gray'
}

export default EventCard;