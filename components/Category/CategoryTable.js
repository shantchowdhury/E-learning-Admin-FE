import { useEffect, useState } from 'react';
import {RiPencilFill} from 'react-icons/ri';
import {FaRegTrashAlt} from 'react-icons/fa';
import {FiPlusCircle} from 'react-icons/fi';
import AddCategoryPopup from './Popup/AddCategoryPopup';
import DeletePopup from './Popup/DeletePopup';
import axios from 'axios';



const CategoryTable = ({categories}) => {
  const [openPopup, setPopup] = useState(false);
  const [openDeletePopup, setDeletePopup] = useState(false);
  const [selected, setSelected] = useState(null)
  return (
    <div className="overflow-x-auto bg-white py-6" style={{"width":"72vw"}}>
      <div className='flex items-center justify-between px-7 mb-10'>
        <h2 className='font-poppins font-semibold text-lg text-dark_gray'>Categories</h2>
        <button onClick={() => {
          setSelected(null)
          setPopup(prev => !prev)
        }} className='flex gap-2 items-center bg-dark_green text-white py-2 px-4 font-poppins rounded-md cursor-pointer'>
          <FiPlusCircle />
          Add New
        </button>
      </div>

      <table className="w-full text-sm table-auto">
        <thead className="bg-blue text-left font-poppins text-white">
          <tr >
            <th className={styles.th}>Category Name</th>
            <th className={styles.th}>Slug</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {
        categories.map(function(value, index) {
                return <tr key={index} className='border-b border-[#e7e7e7] hover:bg-background'>
                        <td className={styles.td}>{value.Name}</td>
                        <td className={styles.td}>{value.Slug}</td>
                        <td className="flex items-center gap-2 p-3">
                          <div onClick={() => {
                            setSelected(value)
                            setPopup(prev => !prev)
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
            
        <AddCategoryPopup openPopup={openPopup} setPopup={setPopup} setSelected={setSelected}  selected={selected}/>
        <DeletePopup  openDeletePopup={openDeletePopup} setDeletePopup={setDeletePopup} setSelected={setSelected}  selected={selected}/>
    </div>
  );
};

const styles = {
    th: "p-4 first:pl-10 uppercase",
    td: "p-3 first:pl-10 first:flex first:items-center first:gap-3 text-[#777C81] font-inter",
    icon: "cursor-pointer w-7 h-7 flex items-center justify-center rounded-md",
}

export default CategoryTable;