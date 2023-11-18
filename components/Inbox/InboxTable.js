import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {FaRegTrashAlt} from 'react-icons/fa';
import {BsEyeFill} from 'react-icons/bs';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DeletePopup from './Popup/DeletePopup';

const InboxTable = () => {

    const navigate = useNavigate();
    const [openDeletePopup, setDeletePopup] = useState(false);

    return (
        <div className="overflow-x-auto bg-white pb-5">
          <table className="w-full text-sm table-auto">
            <thead className="bg-blue text-left font-poppins text-white">
                <tr >
                  <th className={styles.th}>Name</th>
                  <th className={styles.th}>Email</th>
                  <th className={styles.th}>Contact Issue</th>
                  <th className={styles.th}>Date and Time</th>
                  <th className={styles.th}>Status</th>
                  <th className={styles.th}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                      [...Array(15).keys()].map(function(value, index) {
                          return <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                                  <td className={styles.td}>Shahnewaz Rakib</td>
                                  <td className={styles.td}>example@gmail.com</td>
                                  <td className={styles.td}>I can't login to my account. It showing me that internal server error</td>
                                  <td className={styles.td}>20 Dec, 2022, 10:29 AM</td>
                                  <td className="p-3 font-inter">
                                    {
                                        value % 2 == 0 ? 
                                        <p className={styles.new}>Today</p>
                                        : 
                                        <p className={styles.solve}>Solved</p>
                                    }
                                  </td>
                                  <td className="flex items-center gap-2 p-3">
                                     <div onClick={() => navigate('/dashboard/message-details')} className={`${styles.icon} bg-indigo/10`}><BsEyeFill className='text-indigo' /></div>
                                     <div onClick={() => setDeletePopup(prev => !prev)} className={`${styles.icon} bg-youtube/10`}><FaRegTrashAlt className='text-youtube' /></div>
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
          <DeletePopup openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} />
      </div>
    );
};

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
    new: 'bg-youtube/10 py-[2px] px-3 font-medium text-youtube rounded-md w-max',
    solve: 'bg-light_green/20 py-[2px] px-3 font-medium text-dark_green rounded-md w-max',
    pending: 'bg-light_yellow/20 py-[2px] px-3 font-medium text-dark_yellow rounded-md w-max',
}

export default InboxTable;