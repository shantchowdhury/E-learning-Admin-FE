import React, { useEffect } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdNotifications} from 'react-icons/io';
import Cookies from 'js-cookie';
// import {useRouter} from 'next/router';
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Header({setSidebar,handleLogout}) {
  // const router = useRouter();
  // const logout = () => {
  //   Cookies.remove('token');
  //   router.push('/login');
  // }
  const isAuthenticated=async()=>{
    try {
      console.log("trying")
      const res=await axios.get(`${process.env.API}/is_authenticated`,{
        headers:{
          'Authorization':`Bearer `+Cookies.get('token')
        },
        withCredentials:true
      })
      if(res.status==200){
        
      }
      else{
        toast.error('Session Expired. Please Login Again')
        handleLogout()
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    isAuthenticated()
  }, [])
  
  return ( 
    <div style={{zIndex:"100"}} className='bg-white sticky top-0 z-50 border-b border-gray px-10 py-4 flex items-center justify-between'>

      <GiHamburgerMenu onClick={() => setSidebar(prev => !prev)} size={25} className='text-dark_gray cursor-pointer' />
      <div className='flex items-center gap-x-14'>
        <div className='w-10 h-10 cursor-pointer flex items-center justify-center  rounded-full relative bg-blue/10'>
          {/* <IoMdNotifications size={18} className='text-blue' />
          <div className='absolute right-[-30%] top-[-10%] bg-youtube px-1 py-[2px] font-inter text-white rounded-full text-[10px]'>
            20+
          </div> */}
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div className='flex items-center gap-5'>
          {/* <img src="/assets/images/profile.jpg" alt="Profile" className='w-10 h-10 rounded-full object-cover' /> */}
          <div>
            <p className='text-black font-inter font-semibold '>Logged in</p>
            <p className='text-light_gray font-inter text-[12px]'>Super admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header