import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from 'react-hot-toast'
// import Lock from '../../images/Lock.png'

function VerifyForm() {
  const router=useRouter()
  const [otp, setOtp] = useState("")
  const handleOTPVerification=async(e)=>{
    e.preventDefault()
    const obj={
      login_code:otp
    }
    const res = await axios.post(`${process.env.API}/api/auth/verify`,obj,
    {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${Cookies.get('token')}`
      }
    })
    if(res.status === 200 || res.status==201){
      Cookies.set('token', res.data.token)      
      router.push('/dashboard')
  }
  else{
    toast.error('Invalid OTP')
  }
  }

  return (
    <div>
      <img className='mx-auto mb-2 w-[80px]' src="/assets/images/Lock.png" alt="Lock" />
      <h1 className='font-poppins font-semibold text-center text-xl text-black mb-5'>Easy Pass</h1>
      <div className='flex flex-col items-start w-full'>
        <input onChange={(e)=>{
          setOtp(e.target.value)
        }} className='w-full p-3 outline-none border border-gray mb-6 text-light-gray font-poppins rounded-lg' type="password" placeholder='Login code' />
        <button onClick={handleOTPVerification} className='cursor-pointer w-full bg-light_green text-white font-poppins py-3 rounded-lg'>
          Verify 
        </button>
      </div>
    </div>
  )
}

export default VerifyForm