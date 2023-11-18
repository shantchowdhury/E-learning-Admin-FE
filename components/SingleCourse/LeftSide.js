
import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import AddCourseSectionPopup from './Popup/AddSectionPopup';
import axios from 'axios';
import AddSubSectionPopup from './Popup/AddSubSectionPopup';
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router';
import CourseDetails from './Popup/CourseDetails';
import CourseFaq from './Popup/CourseFaq';
import DeleteCoursePopup from './Popup/DeleteCoursePopup';

// import ReactQuill from 'react-quill';

const LeftSide = ({ course }) => {
    const router=useRouter()
    const [courseDetails, setCourseDetails] = useState(course)
    const [openPopup, setPopup] = useState(false);
    const [openSubSectionPopup, setSubSectionPopup] = useState(false);
    const [section, setSection] = useState(course)
    const [openDeletePopup, setDeletePopup] = useState(false);
    const [selected, setSelected] = useState(course)
    const [courseSections, setCourseSections] = useState([])
    
    const handleCourseDelete = async () => {
        try {
            const res = await axios.delete(`${process.env.API}/api/course/delete/${course.courseId}`)
            if (res.status === 200) {
                console.log(res.data)
                router.push('/dashboard/courses')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const loadCourseSections = async () => {
        try {
            const res = await axios.get(`${process.env.API}/api/course-section/get-course/${course._id}`)
            if (res.status === 200 || res.status === 201) {
                setCourseSections(res.data)
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSectionDelete = async (id) => {
        try {
            const res = await axios.delete(`${process.env.API}/api/course-section/delete/${id}`)
            if (res.status === 200) {
                console.log(res.data)
                loadCourseSections()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubSectionDelete = async (id) => {
        try {
            const res = await axios.delete(`${process.env.API}/api/sub-section/delete/${id}`)
            if (res.status === 200) {
                console.log(res.data)
                loadCourseSections()
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const loadCourseDetails = async () => {
        
        try {
            const res = await axios.get(`${process.env.API}/api/course/data/${courseDetails?.courseId}`)
            if (res.status === 200) {
                setCourseDetails(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div style={{ width: "70vw" }} className='bg-[#FFFFFF] w-[160%] h-max border border-gray rounded-3xl pt-10 px-6 pb-10'>
            <div className='flex items-center justify-between px-7 mb-10'>
                <h2 className='font-poppins font-semibold text-lg text-dark_gray'>Course</h2>
                <button onClick={() => {
                    setSelected(courseDetails)
                    setPopup(prev => !prev)
                }} className='flex gap-2 items-center bg-dark_green text-white py-2 px-4 font-poppins rounded-md cursor-pointer'>
                    <FiPlusCircle />
                    Add Module
                </button>
            </div>
            
            <div>
                <div className="flex justify-between">
                <h1 className='text-2xl font-bold mb-5'>{courseDetails?.courseName}</h1>
                <button 
                onClick={()=>{
                    setSelected(courseDetails)
                    setDeletePopup(prev=>!prev)
                }}
                type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete Course
                </button>
                </div>
                <br />
                <p>{courseDetails?.description}</p>
                <br />
                <h2 className='text-xl font-bold mb-5'>Course Modules:</h2>
                <div className="w-[60%] space-y-3">
          {
            courseDetails?.sections.map((section, index) => {
                return ( <CourseFaq sectionId={section.sectionId} loadCourseDetails={loadCourseDetails} key={index} title={section.sectionName} subsections={section.subsections}/>
                )
            })
          }
        </div>
                

            </div>
            <div>

            </div>
            <AddCourseSectionPopup loadCourseDetails={loadCourseDetails} openPopup={openPopup} setPopup={setPopup} setSelected={setSelected} selected={selected} />
            <AddSubSectionPopup courseId={courseDetails?.courseId} openPopup={openSubSectionPopup} setPopup={setSubSectionPopup} selected={section} setSelected={setSection} />
            <DeleteCoursePopup openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} selected={courseDetails} setSelected={setCourseDetails} />
        </div>
    );
};


const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
}


export default LeftSide;