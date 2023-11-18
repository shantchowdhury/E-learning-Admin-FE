import { useRouter } from "next/router";

const Header = () => {
    const navigate = useRouter()

    return (
        <div>
            <div className='flex items-center gap-4'>
                <h1 className='font-poppins font-semibold text-lg text-dark_gray'>All Events</h1>
                <button onClick={() => navigate.push('/dashboard/create-event')} className='py-[10px] px-4 rounded-md bg-indigo font-poppins text-sm text-white'>New Event</button>
            </div>

            <div className='flex items-center justify-between py-8'>
             <div className='space-x-3'>
                <button className={style.smallBtn}>Published</button>
                <button className={style.smallBtn}>Draft</button>
             </div>
             
             <div className='flex gap-2 h-10'>
                <input className='bg-white font-inter text-sm outline-none border-gray border px-4 h-full rounded-full'/>
                <button className='bg-dark_green text-white  rounded-full font-poppins px-5 text-sm cursor-pointer'>Search</button>
             </div>
            </div>
        </div>
    );
};

const style = {
    smallBtn: 'rounded py-1 px-4 text-dark_gray font-inter text-sm bg-white border border-gray'
}

export default Header;