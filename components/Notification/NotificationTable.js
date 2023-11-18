import { useState } from 'react';
import {RiPencilFill} from 'react-icons/ri';
import {FaRegTrashAlt} from 'react-icons/fa';
import AddNotificationPopup from './Popup/AddNotificationPopup';
import DeletePopup from './Popup/DeletePopup';


const NotificationTable = () => {
  const [openPopup, setPopup] = useState(false);
  const [openDeletePopup, setDeletePopup] = useState(false);

  return (
    <div className="overflow-x-auto bg-white py-6">
      <div className='flex items-center justify-between px-7 mb-10'>
        <h2 className='font-poppins font-semibold text-lg text-dark_gray'>Notifications</h2>
        <button onClick={() => setPopup(prev => !prev)} className='flex gap-2 items-center bg-dark_green text-white py-2 px-4 font-poppins rounded-md cursor-pointer'>
          Create New
        </button>
      </div>

      <table className="w-full text-sm table-auto">
        <thead className="bg-blue text-left font-poppins text-white">
          <tr >
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Created</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            [...Array(10).keys()].map(function(value, index) {
                return <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                        <td className={styles.td}>Do I need to pay any fees to register for the Relevel Test...</td>
                        <td className={styles.td}>Anyone above the age of 18 with access to a webcam...</td>
                        <td className={styles.td}>20 Dec, 2022</td>
                        <td className="flex items-center gap-2 p-3">
                          <div onClick={() => setPopup(prev => !prev)} className={`${styles.icon} bg-light_green/20`}>
                            <RiPencilFill className='text-dark_green' />
                          </div>
                          <div onClick={() => setDeletePopup(prev => !prev)} className={`${styles.icon} bg-youtube/10`}>
                            <FaRegTrashAlt className='text-youtube' />
                          </div>
                        </td>
                      </tr>
            })
          }
        </tbody>
      </table>
            
        <AddNotificationPopup openPopup={openPopup} setPopup={setPopup} />
        <DeletePopup  openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} />
    </div>
  );
};

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
}

export default NotificationTable;