import React from 'react';
import Header from '../../components/Course/Header';
import CourseCard from '../../components/Course/CourseCard';
import InfoCard from '@/components/InfoCard/InfoCard';
// import CourseHeading from '../../components/Course/CourseHeading';
const Courses = () => {
    return (
        <div className='relative max-w-[90rem] w-full pt-6 mx-auto px-10 '>
            {/* <CourseHeading /> */}
            <div className=' sticky top-[20%] left-20'>
                <CourseCard />
            </div>
        </div>
    );
};

export default Courses; 