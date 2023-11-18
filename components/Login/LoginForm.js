import {MdLock, MdPhoneAndroid } from "react-icons/md";
import axios from 'axios'
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

function LoginForm({setOpen}) {
    const router=useRouter()
    const [obj, setObj] = useState({
        Phone: '',
        Password: ''
    })
    const handleLogin = async () => {
        const res = await axios.post(`${process.env.API}/api/auth/login`,obj)
        console.log(res.data)
        if(res.status === 200 || res.status==201){
            Cookies.set('token', res.data.token) 
            toast.success('Otp sent to your email')     
            setOpen(prev => !prev)
            // router.push('/dashboard')
        }
        else{
            toast.error('Invalid credentials')
        }
    }
    const handleChange = (e) => {
        setObj({
            ...obj,
            [e.target.name]: e.target.value
        })
        }
  return (
    <div>
        <div className={styles.formContainer}>
            <h1 className={styles.heading}>Login to Admin</h1>
            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    <MdPhoneAndroid className='text-light_gray' />
                    <input name="Phone" onChange={handleChange} className={styles.input} placeholder='Mobile number'  />
                </div>
                <div className={styles.inputContainer}>
                    <MdLock className='text-light_gray' />
                    <input name="Password" onChange={handleChange} className={styles.input} placeholder='Password' type='password'  />
                </div>
                {/* <button onClick={() => setOpen(prev => !prev)} className=""> Login </button> */}
                <button onClick={handleLogin} className="cursor-pointer w-full bg-light_green text-white font-poppins py-3 rounded-lg disabled:cursor-not-allowed">Login</button>
            </div>
        </div>
    </div>
  )
}

const styles = {
    formContainer: 'my-3',
    heading: 'font-poppins font-semibold text-xl text-center text-black mb-8',
    form: 'w-full space-y-4',
    inputContainer: 'flex items-center py-3 px-4 bg-[#f2f2f2] w-full rounded-lg',
    input: 'bg-transparent w-full px-4 outline-none',
    button: 'cursor-pointer w-full bg-light_green text-white font-poppins py-3 rounded-lg',
}

export default LoginForm