import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
// import Man from '../../images/man.png'
const TestimonialBox = ({value,loadTestimonials}) => {
    // router.delete('/deleteTestimonial/:testimonialId', deleteTestimonial);
    const handleDeleteTestimonial = async () => {
        const res = await axios.delete(`${process.env.API}/api/testimonial/deleteTestimonial/${value._id}`, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        if (res.status === 200 || res.status === 201) {
            loadTestimonials()
        }
    }

    return (
        <div className=' w-[335px] bg-white p-5 rounded-lg border border-gray/50 relative'>
            {value.Title}
            <p className='text-dark_gray font-inter text-sm mb-4 leading-relaxed'>
                {value?.Review}</p>
            <div className='flex items-center gap-5'>
                <img src={value?.image} alt="Image" className='w-12 h-12 rounded-full object-cover' />
                <div>
                    <h1 className=' text-dark_green font-poppins font-medium'>{value?.Name}</h1>
                    <h3 className=' text-sm font-inter text-dark_gray'>Student</h3>
                </div>
            </div>
            <button onClick={handleDeleteTestimonial} type="button" class="absolute top-0 right-0 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">X</button>
        </div>
    );
};

export default TestimonialBox;