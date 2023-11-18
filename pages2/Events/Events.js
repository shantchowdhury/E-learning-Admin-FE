import React, { useEffect, useState } from 'react';
import Header from '../../components/Events/Header';
import EventCard from '../../components/Events/EventCard';
import InfoCard from '../../components/InfoCard/InfoCard';
import axios from 'axios';
import Cookies from 'js-cookie';

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
      loadEvents()
    }, [])

    const loadEvents=async()=>{
        try {
            const res=await axios.get(`${process.env.API}/api/event`,{
                headers:{
                    'Authorization':`Bearer `+Cookies.get('token')
                },
                withCredentials:true
            })
            if(res.status==200){
                setEvents(res.data)
            }
        } catch (error) {
            
        }
    }
    
    return (
        <div>
            <div className='w-[70%]'>
                <Header />
            </div>
            <div className='flex justify-between'>
                <div className='w-[70%]'>
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            events.map((value, index) =>{
                                return <EventCard key={index} />
                            })
                        }
                    </div>
                </div> 
                <div className='w-[25%]'>
                    <div className='space-y-5 sticky top-28'>
                        <InfoCard number="12,000" text="Total events sold" bg="to-dark_green from-light_green" />
                        <InfoCard number="4,500" text="Total purchased" bg="to-indigo from-blue" />
                        <InfoCard number="120" text="Today Purchased" bg="to-youtube/80 from-pink" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events; 