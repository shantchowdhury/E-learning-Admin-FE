import React from 'react';
import CertificateSearch from './CertificateSearch/CertificateSearch';

const CertificateHeader = ({ openAdd, setOpenAdd }) => {
    return (
        <div >
            <div className=' w-full flex text-left font-inter '>
                <h1 className=' text-[30px] font-semibold text-dark'>Certificate</h1>
                <button onClick={() => setOpenAdd(true)} className=' py-2 px-4 rounded-md bg-blue font-poppins font-medium ml-10 text-white'>Add New</button>
            </div>
            <CertificateSearch />
        </div>
    );
};

export default CertificateHeader;