import PhoneInput from 'react-phone-number-input'
// import CoverImg from "../../../images/profile.jpg";
import {AiOutlineFileText} from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

const EditPopup = ({ openEditPopup, setEditPopup,selected,loadStudents }) => {
  const [obj, setObj] = useState({
    Email: "",
    is_active:false,
  })
  useEffect(() => {
    if(selected){
      console.log('working')
      setObj({
        Email: selected.Email,
        is_active:selected.is_active,
      })
    }
  }, [selected])
  
  const handleEditStudent = async () => {
    try {
      const res = await axios.put(`${process.env.API}/api/student/updateStudent/${selected?._id}`, {
        ...obj,
      }, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
      if (res.status === 200 || res.status === 201) {
        toast.success('Student updated successfully')
        setEditPopup(prev => !prev)
        loadStudents()
        setObj({
          Email: "",
          is_active:false,
        })
        // setObj({
        //   name: "",
        //   email: "",
        //   phone: "",
        //   password: "",
        //   image: "",
        //   loginType: "",
        //   status: "",
        //   createdAt: "",
        //   updatedAt: "",
        // })
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const handleChange=(e)=>{
    console.log(e.target.value)
    setObj({
      ...obj,
      [e.target.name]: e.target.value,
    })
  }
  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openEditPopup? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
          
          <div className={`bg-white mx-auto rounded-lg w-[500px] transition-all duration-500 relative ${openEditPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
            <div className="absolute w-24 rounded-full border-8 border-white h-24 top-[-12%] left-[50%] translate-x-[-50%]">
              {/* <img className="w-full h-full rounded-full object-cover" src="/assets/images/profile.jpg" alt="CoverImg" /> */}
            </div>

            <div className="pt-12">
              <h1 className="text-center font-inter text-[18px] font-semibold text-dark">{selected?.Name}</h1>
              <p className="text-center font-inter text-sm text-light_gray">Login type: Norma
              {obj.Email}
              l</p>
              
              <div className="px-10 py-6 space-y-4">
                <div className={styles.inputContainer}>
                  <span className={styles.label}> Email  </span>
                  <input value={obj?.Email} name='Email' onChange={handleChange} className={styles.input}/>
                </div>
{/* 
                <div className={styles.inputContainer}>
                  <span className={styles.label}> Phone </span>
                  <PhoneInput onChange={() => {}} countries={['BD']} addInternationalOption={false} className={styles.input}/>
                </div> */}

                <div className={styles.inputContainer}>
                  <span  className={styles.label}> Status </span>
                  <select name='is_active' onChange={handleChange}  className={styles.input}>
                    <option value={true}>Active</option>
                    <option value={false}>Closed</option>
                  </select>
                </div>
              
                <a href='#' className='flex items-center gap-1 justify-end font-poppins text-sm text-indigo'>
                  <AiOutlineFileText size={17} />
                  <p>View Resume</p>
                </a>
              </div>

              <hr className="border-gray" />
              <div className="text-center py-4 flex justify-center items-center gap-10">
                <button onClick={() => setEditPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
                  CLOSE POPUP
                </button>

                <button onClick={handleEditStudent} className={`${styles.button} bg-dark_green`}>
                  SAVE CHANGES
                </button>
              </div>
            </div>

          </div>

        </div>
  );
};

const styles = {
  inputContainer: "w-full flex items-center justify-between",
  label: "text-dark w-[25%] text-sm uppercase font-poppins font-semibold",
  input: "w-full text-sm p-3 rounded-md border border-gray outline-none font-poppins bg-background",
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg"
}

export default EditPopup;
