import React, { useState } from 'react'
// import logimg from '../../images/logimg.png'
import LoginForm from '../components/Login/LoginForm';
import VerifyForm from '../components/Login/VerifyForm';
import Cookies from 'js-cookie'

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token
  console.log(token)
  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }
  return {
    props: {}, // will be passed to the page component as props
  }
}

function Login() {

  const [open, setOpen] = useState(false)


  return (
    <div className='bg-blue flex h-screen w-screen items-center justify-center'>
      <div className='bg-white py-11 px-8 w-[650px] h-[400px] rounded-3xl flex items-center gap-8'>
        <div className='w-[40%]'>
          <img src="/assets/images/logimg.png" alt="Image" />
        </div>
        {/* <h1 class="text-3xl font-bold underline">
      Hello world!
</h1> */}
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