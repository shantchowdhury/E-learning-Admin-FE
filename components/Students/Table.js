// import Man from '../../images/man.png';
import { useState } from 'react';
import {BsEyeFill} from 'react-icons/bs';
import {RiPencilFill} from 'react-icons/ri';
import {MdBlock} from 'react-icons/md';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EditPopup from './Popup/EditPopup';
import axios from 'axios';
import ClosePopup from './Popup/ClosePopup';
import Cookies from 'js-cookie';
import Link from 'next/link';

const Table = ({students,setStudents}) => {
    const [openEditPopup, setEditPopup] = useState(false);
    const [openClosePopup, setClosePopup] = useState(false);
    const [selected, setSelected] = useState(null)
    const loadStudents = async () => {
        const res = await axios.get(`${process.env.API}/api/student`,
        {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
              }
        });
        console.log(res.data);
        setStudents(res.data);
    }
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm table-auto">
                <thead className="bg-blue text-left font-poppins text-white">
                    <tr >
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Phone</th>
                        <th className={styles.th}>Address</th>
                        <th className={styles.th}>Status</th>
                        <th className={styles.th}>Joined On</th>
                        <th className={styles.th}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        students.map(function(value, index) {
                           return <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                            <Link href={`/dashboard/student/${value?._id}`}>
                                    <td className={styles.td}>
                                      {/* <img src="/assets/images/man.png" className="w-7 h-7 border border-gray rounded-full object-cover" alt="Img" /> */}
                                      <p>{value?.Name}</p>
                                    </td>
                                </Link>
                                <td className={styles.td}>
                                <Link href={`/dashboard/student/${value?._id}`}>
                                    {value?.Email}
                                    </Link>
                                    </td>
                                    <td className={styles.td}>{value?.Phone}</td>
                                    <td className={styles.td}>{value?.Address}</td>
                                    <td className="p-3 font-inter">
                                        {
                                            value?.is_active ? 
                                            <p className={styles.active}>Active</p>
                                            : 
                                            <p className={styles.closed}>Closed</p>
                                        }
                                    </td>
                                    <td className={styles.td}>20 Dec, 2022</td>
                                    <td className="flex items-center gap-2 p-3">
                                        <div className={`${styles.icon} bg-indigo/10`}><BsEyeFill className='text-indigo' /></div>
                                        <div onClick={() => {
                                            setSelected(value)
                                            setEditPopup(prev => !prev)
                                        }} className={`${styles.icon} bg-light_green/20`}><RiPencilFill className='text-dark_green' /></div>
                                        <div onClick={() => setClosePopup(prev => !prev)} className={`${styles.icon} bg-youtube/10`}><MdBlock className='text-youtube' /></div>
                                    </td>
                                 </tr>
                        })
                    }
                </tbody>
            </table>

            <div className='flex items-center justify-between px-7 mt-7'>
                <p className='font-poppins text-sm text-light_gray'>Showing <span className='text-dark_green font-semibold'>15</span> out of <span className='text-dark_green font-semibold'>2000</span> Results</p>
                <Stack spacing={2}>
                    <Pagination count={10} color="primary" />
                </Stack>
            </div>
            
            <EditPopup openEditPopup={openEditPopup} setEditPopup={setEditPopup} selected={selected} loadStudents={loadStudents} />
            <ClosePopup  openClosePopup={openClosePopup} setClosePopup={setClosePopup} />
        </div>
    );
};

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
    active: 'bg-light_green/20 py-[2px] px-3 font-medium text-dark_green rounded-md w-max',
    pending: 'bg-light_yellow/20 py-[2px] px-3 font-medium text-dark_yellow rounded-md w-max',
    closed: 'bg-youtube/10 py-[2px] px-3 font-medium text-youtube rounded-md w-max' 
}

export default Table;