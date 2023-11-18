import React, { useState } from 'react'
import logimg from '../../images/logimg.png'
import LoginForm from '../../components/Login/LoginForm';
import VerifyForm from '../../components/Login/VerifyForm';

function Login() {

  const [open, setOpen] = useState(false)


  return (
    <div className='bg-blue flex h-screen w-screen items-center justify-center'>
      <div className='bg-white py-11 px-8 w-[650px] h-[400px] rounded-3xl flex items-center gap-8'>
        <div className='w-[40%]'>
          <img src={logimg} alt="Image" />
        </div>

        <div className='w-[60%]'>
          {
            !open ? <LoginForm setOpen={setOpen} /> : <VerifyForm />
          }
        </div>
      </div>
    </div>
  )
}

export default Login