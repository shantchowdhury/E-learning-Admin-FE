import React, { useState } from 'react';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {AiFillYoutube,AiFillDelete} from 'react-icons/ai';
import DeleteSubSectionPopup from './SubsectionPopup/DeleteSubsection';
import AddVideoPopup from './SubsectionPopup/AddVideoPopup';
import { FaRegEdit } from 'react-icons/fa';
import { RiChatDeleteLine } from 'react-icons/ri';
import DeleteSectionPopup from './SectionPopup/DeleteSectionPopup';
// import { useDispatch, useSelector } from 'react-redux';
// import { setVideoUrl } from '@/redux/fetchService/fetchSlice';

const CourseFaq = ({ title, subsections,loadCourseDetails,sectionId}) => {
    // const dispatch=useDispatch()
    // const {course}=useSelector(state=>state.app)
    const [selected, setSelected] = useState(null)
    const [openDeletePopup, setDeletePopup] = useState(false);
    const [openSectionDeletePopup, setOpenSectionDeletePopup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [openSubSectionPopup, setSubSectionPopup] = useState(false);
  const videos = [
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
  ]

  return (
    <div>
      <div className={`border-gray text-black flex cursor-pointer text-lg justify-between items-center py-3 px-4 border ${isActive ? 'border-b-0 rounded-t-lg' : 'rounded-lg'}`} onClick={() => setIsActive(!isActive)}>
        <p className={` ${isActive ? 'text-green' : 'text-black/80'} font-Poppins text-base`}>{title}</p>
        <div >{isActive ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
      </div>
      {isActive && 
        <div className='border-gray text-black/70 px-4 pt-2 pb-5 text-[15px] font-light border-t-0 border rounded-b-lg'>
            <div className="flex justify-between">
            <div className='flex'>
            <button 
            onClick={()=>{
                // setSelected(sectionId7)
                setSubSectionPopup(prev => !prev)
            }}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>+Add Video</button>
            <FaRegEdit size={20} className='text-blue-500 cursor-pointer ml-2 my-2'/>
            
            </div>
            <div>
            <RiChatDeleteLine
            onClick={()=>{
                setOpenSectionDeletePopup(prev => !prev)
            }
            }
             size={20} className='text-red-500 cursor-pointer ml-2'/>
            </div>
            </div>
            
            {
                subsections.map((value, index) => {
                    return (
                        <div key={index} className='hover:bg-slate-300 flex items-center justify-between py-3 px-4 rounded-lg'>
                            <div className='flex items-center gap-2'>
                             {videos[0].icon}
                             <p className='text-[16px]'>{value.subSectionName} 
                             {/* ({videos[0].length}) */}
                             </p>
                            </div>
                            <div className='flex'>
                            <button
                            onClick={()=>{
                                alert(value.subSectionVideo)
                                // dispatch(setVideoUrl(value.subSectionVideo))
                            }}
                             className='bg-blue px-4 text-sm font-Poppins text-white py-[5px] rounded-lg'>Show URL</button>
                             <AiFillDelete
                             onClick={()=>{
                                console.log(value.subSectionId)
                                console.log(openDeletePopup.toString())
                                    setSelected(value.subSectionId)
                                    setDeletePopup(prev => !prev)
                             }}
                              size={20} className='text-red-500 cursor-pointer my-2 mx-2'/>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
      }

      <DeleteSubSectionPopup openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup}  selected={selected} setSelected={setSelected} loadCourseDetails={loadCourseDetails}/>
      <AddVideoPopup sectionId={sectionId} openPopup={openSubSectionPopup} setPopup={setSubSectionPopup}  selected={selected} setSelected={setSelected} loadCourseDetails={loadCourseDetails}/>
      <DeleteSectionPopup openDeletePopup={openSectionDeletePopup} setDeletePopup={setOpenSectionDeletePopup} sectionId={sectionId}   loadCourseDetails={loadCourseDetails}/>
    </div>
  );
};

export default CourseFaq;