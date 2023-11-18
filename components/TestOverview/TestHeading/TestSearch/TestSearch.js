import React from 'react';
import TestButton from './TestButton/TestButton';

const TestSearch = () => {
    return (
        <div className=' flex items-center  justify-between max-w-[59rem] mt-10'>
            <TestButton />
            <div>
<<<<<<< HEAD:src/pages/Courses/CourseHeading/CourseSerarch/CourseSerarch.js
                <form>
                    <input type="text" className='bg-white focus:outline-none border-[#E2E2E2] border px-2  py-1.5 rounded-3xl' />
                    <input type="submit" className='bg-light-orange text-white ml-5 py-1.5 px-7 rounded-full font-medium cursor-pointer' />
=======
                <form className=' h-[42px]'>
                    <input type="text" className='bg-white focus:outline-none border-[#E2E2E2] border px-2 h-full rounded-3xl' />
                    <input type="submit" className='bg-light-orange text-white ml-5 h-full px-7 rounded-full font-medium ' />
>>>>>>> origin/development:src/components/TestOverview/TestHeading/TestSearch/TestSearch.js
                </form>
            </div>
        </div>
    );
};

export default TestSearch;