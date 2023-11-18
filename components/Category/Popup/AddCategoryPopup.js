import { useEffect, useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast'
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const AddCategoryPopup = ({ openPopup, setPopup,selected,setSelected }) => {
  const router=useRouter()
  const [obj, setObj] = useState(selected?._id ? selected :{
    Name: "",
    Slug: "",
  })
  const [update, setUpdate] = useState(selected?._id ? true:false)
  useEffect(() => {
    setObj(selected)
    setUpdate(selected?._id ? true:false)
  }, [selected])
  
  
  const handleCreateCategory = async () => {
    try {
      if(obj?.Name === "" || obj?.Slug === ""){
        toast.error('Please fill all the fields')
        return
      }
      console.log(Cookies.get('token'))
      const res = await axios.post(`${process.env.API}/api/category/createCategory`, obj,{
        withCredentials: true,
        headers:{
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      })
      if(res.status === 201){
        toast.success('Category created successfully')
        setPopup(prev => !prev)
        setObj({
          Name: "",
          Slug: "",
        })
        setSelected(null)
        router.push('/dashboard/category')
      }
    } catch (error) {
      toast.error(error.message)
      
    }
  }
  const handleUpdateCategory = async () => {
    try {
      if(obj?.Name === "" || obj?.Slug === ""){
        toast.error('Please fill all the fields')
        return
      }
      // remove _id from obj
      delete obj._id
      const res = await axios.put(`${process.env.API}/api/category/updateCategory/${selected._id}`, obj,{
        withCredentials: true,
        headers:{
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      })
      if(res.status === 200){
        setSelected(null)
        toast.success('Category updated successfully')
        setPopup(prev => !prev)
        router.push('/dashboard/category')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  const handleChange = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,
      Slug: generateSlug(e)
    })
    
  }
  
  const generateSlug = (e) => {
    // Create a timestamp to add uniqueness
    const timestamp = new Date().getTime();
  
    // Pad the timestamp with leading zeros to make it 4 digits
    const paddedTimestamp = timestamp.toString().padStart(4, '0');
  
    // Generate the initial slug from the event target value
    const initialSlug = e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  
    // Combine the initial slug with the padded timestamp to create a unique slug
    const uniqueSlug = `${initialSlug}-${paddedTimestamp}`;
  
    return uniqueSlug;
  };
  
  
  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white mx-auto rounded-lg w-[400px] transition-all duration-500 relative ${openPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
          <div className="pt-5">
              <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Create New Category</h1>
              <div className="px-10 py-6 space-y-4">
                <input value={obj?.Name} name="Name" onChange={handleChange} className={styles.input} placeholder="Category Name"/> 
                <input name="Slug" value={obj?.Slug} className={styles.input} placeholder="Slug"/> 
              </div>

              <hr className="border-gray" />
              <div className="text-center py-4 flex justify-center items-center gap-10">
                <button onClick={() => setPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
                  NOPE, CLOSE
                </button>

                {
                  update ?
                  <button onClick={handleUpdateCategory} className={`${styles.button} bg-youtube`}>
                    UPDATE
                  </button>
                  :
                  <button onClick={handleCreateCategory} className={`${styles.button} bg-dark_green`}>
                  SAVE
                </button>
                }
              </div>
          </div>
        </div>
      </div>
  );
};

const styles = {
  input: "w-full text-sm p-3 rounded-md border border-gray outline-none font-poppins bg-background",
  label: "text-dark w-[25%] text-sm uppercase font-poppins font-semibold",
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg",
  uploadButton: 'bg-light_green text-white font-poppins py-2 px-4 cursor-pointer rounded-full text-sm'
}

export default AddCategoryPopup;
