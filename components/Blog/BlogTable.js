import { useState } from 'react';
import {FaTelegramPlane, FaRegTrashAlt} from 'react-icons/fa';
import {RiPencilFill} from 'react-icons/ri';
import {IoMdAlert} from 'react-icons/io';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PublishPopup from './Popup/PublishPopup';
import DeletePopup from './Popup/DeletePopup';
import DraftPopup from './Popup/DraftPopup';


const BlogTable = () => {
    const [openPublishPopup, setPublishPopup] = useState(false);
    const [openDraftPopup, setDraftPopup] = useState(false);
    const [openDeletePopup, setDeletePopup] = useState(false);

    return (
        <div className="overflow-x-auto bg-white pb-5">
          <table className="w-full text-sm table-auto">
            <thead className="bg-blue text-left font-poppins text-white">
                <tr >
                  <th className={styles.th}>Title</th>
                  <th className={styles.th}>Author</th>
                  <th className={styles.th}>Category</th>
                  <th className={styles.th}>Last Updated</th>
                  <th className={styles.th}>Status</th>
                  <th className={styles.th}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                      [...Array(15).keys()].map(function(value, index) {
                          return <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                                  <td className={styles.td}>Lorem ipsum dolor sit amet.</td>
                                  <td className={styles.td}>Shahnewaz Rakib</td>
                                  <td className={styles.td}>Blockchain Development</td>
                                  <td className={styles.td}>20 Dec, 2022</td>
                                  <td className="p-3 font-inter">
                                      {
                                          value % 2 == 0 ? 
                                          <p className={styles.published}>Published</p>
                                          : 
                                          <p className={styles.draft}>Save on Draft</p>
                                      }
                                  </td>
                                  <td className="flex items-center gap-2 p-3">
                                     <div className={`${styles.icon} bg-blue/20`}><RiPencilFill className='text-blue' /></div>
                                     {
                                          value % 2 == 0 ? 
                                          <div onClick={() => setDraftPopup(prev => !prev)}  className={`${styles.icon} bg-light_yellow/20`}><IoMdAlert size={17} className='text-light_yellow' /></div>
                                          : 
                                          <div onClick={() => setPublishPopup(prev => !prev)} className={`${styles.icon} bg-light_green/20`}><FaTelegramPlane className='text-dark_green' /></div>
                                      }
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

          <PublishPopup openPublishPopup={openPublishPopup} setPublishPopup={setPublishPopup} />
          <DraftPopup  openDraftPopup={openDraftPopup} setDraftPopup={setDraftPopup} />
          <DeletePopup  openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} />
      </div>
    );
};

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
    published: 'bg-light_green/20 py-[2px] px-3 font-medium text-dark_green rounded-md w-max',
    draft: 'bg-light_yellow/20 py-[2px] px-3 font-medium text-dark_yellow rounded-md w-max',
}

export default BlogTable;