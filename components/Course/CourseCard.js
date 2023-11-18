import React, { useEffect, useState } from 'react';
// import CourseImg from '../../images/course.png'
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import axios from 'axios';
import Link from 'next/link';
const CourseCard = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        getCourses()
    }, [])
    const getCourses = async () => {
        try {
            const res = await axios.get(`${process.env.API}/api/course`)

            setCourses(res.data)
        } catch (error) {

        }
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="w-70%">
                    <div className="grid grid-cols-3 gap-8">
                        {
                            courses.map((course, index) => {
                                return (
                                    <Link href={`/dashboard/course/${course._id}`} className='bg-white rounded-xl border border-gray'>
                                        <img class="w-full rounded-t-xl" src={course.image} alt="CourseImg" />
                                        <div className="p-4">
                                            <h1 class="mb-5 text-black font-inter cursor-pointer">{course.name}</h1>
                                            <div className='flex items-center justify-between'>
                                                <div className='py-1 px-2 text-sm flex bg-light_green/20 items-center rounded-md font-medium font-poppins text-dark_green'>{course.price}৳</div>
                                                <div className='px-2 flex text-sm gap-2 items-center  font-poppins text-dark_gray'>2,302</div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </>

    );
};

export default CourseCard;