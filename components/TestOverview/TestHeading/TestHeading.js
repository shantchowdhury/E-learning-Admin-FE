import React from 'react';
import TestSearch from './TestSearch/TestSearch';

const TestHeading = () => {
    return (
        <div>
            <div className=' w-full flex text-left font-inter '>
                <h1 className=' text-[30px] font-inter font-semibold text-3xl text-dark'>All Tests</h1>
                <button className=' py-2 px-4 rounded-md bg-blue text-base font-poppins font-medium ml-10 text-white'>New Test</button>
            </div>
            <TestSearch />
        </div>
    );
};

export default TestHeading;