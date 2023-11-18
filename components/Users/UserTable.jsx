import { useEffect, useState } from 'react';
// import Man from '../../images/man.png';
import {RiPencilFill} from 'react-icons/ri';
import {FaRegTrashAlt} from 'react-icons/fa';
import {FiPlusCircle} from 'react-icons/fi';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AddUserPopup from './Popup/AddUserPopup';
import EditPopup from './Popup/EditPopup';
import DeletePopup from './Popup/DeletePopup';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';


const UserTable = () => {
  const [openUserPopup, setUserPopup] = useState(false);
  const [openEditPopup, setEditPopup] = useState(false);
  const [openDeletePopup, setDeletePopup] = useState(false);
  const [users, setUsers] = useState([])
  // /api/user
  useEffect(() => {
    loadUsers();
  }, [])
  
  const loadUsers=async()=>{
    const token = Cookies.get('token');
    const res=await axios.get(`${process.env.API}/api/user`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    });
    setUsers(res.data);
  }



  return (
    <div className="overflow-x-auto bg-white py-6">
      <div className='flex items-center justify-between px-7 mb-10'>
        <h2 className='font-poppins font-semibold text-lg text-dark_gray'>Admin Users</h2>
        <button onClick={() => setUserPopup(prev => !prev)} className='flex gap-2 items-center bg-dark_green text-white py-2 px-4 font-poppins rounded-md cursor-pointer'>
          <FiPlusCircle />
          Add New
        </button>
      </div>

      <table className="w-full text-sm table-auto">
        <thead className="bg-blue text-left font-poppins text-white">
          <tr >
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Role</th>
            <th className={styles.th}>Created</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            users?.map(function(value, index) {
                return <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                        <td className={styles.td}>
                          <img src={value.image} className="w-7 h-7 border border-gray rounded-full object-cover" alt="Img" />
                          <p>{value?.Name}</p>
                        </td>
                        <td className={styles.td}>{value.Email}</td>
                        <td className={styles.td}>{value.Phone}</td>
                        <td className="p-3 font-inter">
                          {
                            value % 2 == 0 ? 
                            <p className={styles.superadmin}>Super Admin 👑</p>
                            : 
                            <p className={styles.admin}>Partial Admin</p>
                          }
                        </td>
                        <td className={styles.td}>20 Dec, 2022</td>
                        <td className="flex items-center gap-2 p-3">
                          <div onClick={() => setEditPopup(prev => !prev)} className={`${styles.icon} bg-light_green/20`}>
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

        <div className='flex items-center justify-between px-7 mt-7'>
          <p className='font-poppins text-sm text-light_gray'>Showing <span className='text-dark_green font-semibold'>15</span> out of <span className='text-dark_green font-semibold'>2000</span> Results</p>
          <Stack spacing={2}>
            <Pagination count={10} color="primary" />
          </Stack>
        </div>
            
        <AddUserPopup openUserPopup={openUserPopup} setUserPopup={setUserPopup} />
        <EditPopup openEditPopup={openEditPopup} setEditPopup={setEditPopup} />
        <DeletePopup  openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} />
    </div>
  );
};

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
    superadmin: 'bg-indigo/10 py-[5px] px-3 font-medium text-indigo rounded-md w-max',
    pending: 'bg-light_yellow/20 py-[5px] px-3 font-medium text-dark_yellow rounded-md w-max',
    admin: 'bg-light_green/10 py-[5px] px-3 font-medium text-dark_green rounded-md w-max' 
}

export default UserTable;