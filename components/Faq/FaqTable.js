import { useEffect, useState } from 'react';
import {RiPencilFill} from 'react-icons/ri';
import {FaRegTrashAlt} from 'react-icons/fa';
import {FiPlusCircle} from 'react-icons/fi';
import AddFaqPopup from './Popup/AddFaqPopup';
import DeletePopup from './Popup/DeletePopup';
import axios from 'axios';
import Cookies from 'js-cookie';

const FaqTable = () => {
  const [openFaqPopup, setFaqPopup] = useState(false);
  const [openDeletePopup, setDeletePopup] = useState(false);
  const [selected, setSelected] = useState(null)
  const [faqs, setFaqs] = useState([])
  useEffect(() => {
    loadFaqs()
  }, [])
  
  const loadFaqs = async () => {
    const token = Cookies.get('token')
    const res = await axios.get(`${process.env.API}/api/faq`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    })
    setFaqs(res.data)
  }

  return (
    <div className="overflow-x-auto bg-white py-6">
      <div className='flex items-center justify-between px-7 mb-10'>
        <h2 className='font-poppins font-semibold text-lg text-dark_gray'>Frequently Asked Questions</h2>
        <button onClick={() => setFaqPopup(prev => !prev)} className='flex gap-2 items-center bg-dark_green text-white py-2 px-4 font-poppins rounded-md cursor-pointer'>
          <FiPlusCircle />
          Add New
        </button>
      </div>

      <table className="w-full text-sm table-auto">
        <thead className="bg-blue text-left font-poppins text-white">
          <tr >
            <th className={styles.th}>FAQ Title</th>
            <th className={styles.th}>FAQ Desc</th>
            <th className={styles.th}>Created</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            faqs.map(function(value, index) {
                return <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                        <td className={styles.td}>{value.Title}</td>
                        <td className={styles.td}>{value.Description}</td>
                        <td className={styles.td}>{new Date(value.createdAt).toDateString()}</td>
                        <td className="flex items-center gap-2 p-3">
                          <div onClick={() => {
                            setSelected(value)
                            setFaqPopup(prev => !prev)
                          }} className={`${styles.icon} bg-light_green/20`}>
                            <RiPencilFill className='text-dark_green' />
                          </div>
                          <div onClick={() => {
                            setSelected(value)
                            setDeletePopup(prev => !prev)
                          }} className={`${styles.icon} bg-youtube/10`}>
                            <FaRegTrashAlt className='text-youtube' />
                          </div>
                        </td>
                      </tr>
            })
          }
        </tbody>
      </table>
            
        <AddFaqPopup selected={selected} setSelected={setSelected} loadFaqs={loadFaqs} openFaqPopup={openFaqPopup} setFaqPopup={setFaqPopup} />
        <DeletePopup selected={selected} setSelected={setSelected} loadFaqs={loadFaqs}  openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} />
    </div>
  );
};

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
}

export default FaqTable;