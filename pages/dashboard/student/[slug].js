import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-hot-toast'
axios.defaults.withCredentials = true

const index = () => {
    const router = useRouter()
    const { slug } = router.query
    const [student, setStudent] = useState(null)
    const [courses, setCourses] = useState(null)
    const [courseId, setCourseId] = useState(null)
    useEffect(() => {
        if (slug) {
            loadStudentEnrolled()
        }
    }, [slug])

    const loadStudentEnrolled = async () => {
        // /student/enroll-data/:id
        const res = await axios.get(`${process.env.API}/api/user/student/enroll-data/${slug}`,
            {
                headers: {
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            })
        setStudent(res.data)

    }
    const loadCourses = async () => {
        const res = await axios.get(`${process.env.API}/api/course`,
            {
                headers: {
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            }
        )
        setCourses(res.data)
    }

    useEffect(() => {
        loadCourses()
    }, [])

    const makeStudentEnroll = async () => {
        if(!courseId){
            return toast.error('Please select a course')
        }
        const res = await axios.post(`${process.env.API}/api/user/student/course-enroll/${slug}`, {
            courseId: courseId
        },
            {
                headers: {
                    "Authorization": `Bearer ${Cookies.get('token')}`
                },
            }
        )
        if (res.status === 200 || res.status === 201) {
            toast.success('Student enrolled successfully')
            loadStudentEnrolled()
        }
        else if(res.status==400){
            toast.error(res.data)
        }
        
    }

    const removeStudentEnroll = async (courseId) => {
        if(!courseId){
            return toast.error('Please select a course')
        }
        const res = await axios.post(`${process.env.API}/api/user/student/course-enroll-remove/${slug}`, {
            courseId: courseId
        },
            {
                headers: {
                    "Authorization": `Bearer ${Cookies.get('token')}`
                },
            }
        )
        if (res.status === 200 || res.status === 201) {
            toast.success('Student unenrolled successfully')
            loadStudentEnrolled()
        }
        else if(res.status==400){
            toast.error(res.data)
        }
        
    }

    return (
        <>
            <div class="flex items-center justify-center">
                <div class="max-w-md w-full space-y-8">
                    <div>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {student?.Name}
                        </h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            {student?.Email}
                        </p>
                    </div>
                    <br />
                    <div>
                        <select
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
                         onChange={(e)=>{
                            setCourseId(e.target.value)
                        }} >
                            <option value=''>Select Course</option>
                            {
                                courses?.map((item, index) => (
                                    <option key={index} value={item._id}>{item.name}</option>
                                ))
                            }
                        </select>

                    </div>
                    <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={makeStudentEnroll}
                    >Add Student To The Course</button>
                    <br />
                    <div class="">
                        <h1 class="text-xl font-bold">Enrolled Courses( {student?.courses?.length} )</h1>
                        <table className="w-full text-sm table-auto">
                            <thead className="bg-blue text-left font-poppins text-white">
                                <tr >
                                    <th className={styles.th}>Course Name</th>
                                    <th className={styles.th}>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    student?.courses?.map((course, index) => {
                                        return (
                                            <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                                                <td className={styles.td}>
                                                    <p className='text-2xl font-bold'>{course?.name}</p>
                                                </td>
                                                <td className="">
 
                                                    <div
                                                    onClick={()=>{
                                                        removeStudentEnroll(course._id)
                                                    }}
                                                     className='cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
    active: 'bg-light_green/20 py-[2px] px-3 font-medium text-dark_green rounded-md w-max',
    pending: 'bg-light_yellow/20 py-[2px] px-3 font-medium text-dark_yellow rounded-md w-max',
    closed: 'bg-youtube/10 py-[2px] px-3 font-medium text-youtube rounded-md w-max'
}

export default index