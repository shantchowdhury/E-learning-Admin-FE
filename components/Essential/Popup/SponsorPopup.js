import {useState} from 'react';
import { RiUpload2Line } from "react-icons/ri";

const SponsorPopup = ({ openSponsorPopup, setSponsorPopup }) => {

    const [file, setFile] = useState();
    const handleChangeImg = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openSponsorPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
            <div className={`bg-white mx-auto rounded-lg w-[500px] transition-all duration-500 relative ${openSponsorPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
                <div className='space-y-5 py-10'>
                    {
                        file ? 
                        <img src={file} className="w-36 mx-auto h-[70px] object-contain" />
                        :
                        <RiUpload2Line size={50} className='mx-auto text-light_gray' />
                    }
                    <input onChange={handleChangeImg} type="file" accept='image/*' id='sposoreImage' className='hidden' />
                    <label htmlFor='sposoreImage' className='rounded-full text-sm text-white py-2 px-4 bg-blue mx-auto w-max block font-inter cursor-pointer'>
                        Upload Photo
                    </label>
                    <p className='text-sm font-inter text-center text-light_gray'>
                        Image Dimension: 140x70 px
                    </p>
                </div>
                <hr className="border-gray" />
                <div className="text-center py-4 flex justify-center items-center gap-10">
                    <button onClick={() => setSponsorPopup(prev => !prev)} className={`${style.button} bg-light_gray`}> NOPE, CLOSE </button>
                    <button className={`${style.button} bg-dark_green`}> SAVE </button>
                </div>
            </div>
        </div>
    );
};

const style = {
    button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg",
}

export default SponsorPopup;