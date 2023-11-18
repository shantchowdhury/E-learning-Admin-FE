import React, { useEffect } from 'react';
import { useState } from 'react';
import TestiHeadding from '../../components/Testimonial/TestiHeadding';
import TestimonialBox from '../../components/Testimonial/TestimonialBox';
import AddTestimonialPopup from '../../components/Testimonial/Popup/AddTestimonialPopup';
import axios from 'axios';
import Cookies from 'js-cookie';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    const [openAddPopup, setAddPopup] = useState(false);

    useEffect(() => {
      loadTestimonials()
    }, [])
    

    const loadTestimonials = async () => {
        const res = await axios.get(`${process.env.API}/api/testimonial`,{
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }

        })
        if (res.status === 200 || res.status === 201) {
            setTestimonials(res.data)
        }
    }


    return (
        <div>
            <TestiHeadding setAddPopup={setAddPopup} />
            
            <div className='flex gap-5 flex-wrap'>
                {
                    testimonials.map((value, index) => {
                        return <TestimonialBox loadTestimonials={loadTestimonials} value={value} key={index} />
                    })
                }
            </div>
            <AddTestimonialPopup loadTestimonials={loadTestimonials} setAddPopup={setAddPopup} openAddPopup={openAddPopup}/>
        </div>
    );
};

export default Testimonial;