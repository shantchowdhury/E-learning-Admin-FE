import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
// import ReactQuill from 'react-quill';

const LeftSide = () => {
    const router = useRouter()
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [file, setFile] = useState(null)


    useEffect(() => {
        loadCategories()
    }, [])
    const loadCategories = async () => {
        try {
            const token = Cookies.get('token')
            const res = await axios.get(`${process.env.API}/api/category`,
                {
                    withCredentials: true,
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            setCategories(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('image', file)
        const token = Cookies.get('token')
        try {
            const res = await axios.post(`${process.env.API}/api/course/create`, formData, {
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (res.status === 200 || res.status === 201) {
                toast.success('Course created successfully')
                router.push('/dashboard/courses')

            }
            else{
                toast.error('Something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className='bg-[#FFFFFF] w-[100%] h-max border border-gray rounded-3xl pt-10 px-6 pb-10'>
                <div>
                    <input onChange={(e) => setName(e.target.value)} className={style.input} placeholder='Course Title' />
                </div>
                <div>
                    <select onChange={(e) => {
                        setCategory(e.target.value)
                    }} className={style.input}>
                        <option value=''>Select Category</option>
                        {
                            categories.map((item, index) => (
                                <option key={index} value={item._id}>{item.Name}</option>
                            ))
                        }
                    </select>

                </div>
                <div className='w-[50%]'>
                    <input onChange={(e) => setPrice(e.target.value)} className={style.input} placeholder='Course Price' type='number' />
                </div>
                <div className='w-[50%]'>
                    <input onChange={handleFileChange} className={style.input} type='file' />
                </div>
                <div>

                </div>
                <div>
                    <Editor
                        onChange={(e) => setDescription(e.target.getContent())}
                    />
                </div>
                <br />
                <div className="">
                    <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Course</button>
                </div>
            </div>

        </>
    );
};


const style = {
    input: 'py-[14px] px-5 mb-6 font-inter text-sm outline-none bg-gray/20 border border-gray/20 rounded-xl font-normal text-dark w-full'
}

export default LeftSide;