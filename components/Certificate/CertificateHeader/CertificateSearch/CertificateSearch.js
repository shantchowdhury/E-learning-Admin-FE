import React from 'react';
import CertificateButton from './CertificateButton/CertificateButton';

const CertificateSearch = () => {
    return (
        <div className=' flex items-center  justify-between  mt-10'>
            <CertificateButton />
            <div>
                <form className='h-[42px]'>
                    <input type="text" className='bg-white focus:outline-none border-[#E2E2E2] border px-3 h-full rounded-3xl' />
                    <input type="submit" className=' bg-dark-green text-white ml-5 h-full  px-7 rounded-full font-medium ' />
                </form>
            </div>
        </div>
    );
};

export default CertificateSearch;