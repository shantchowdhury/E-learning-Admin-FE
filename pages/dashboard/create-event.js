import React, { useState } from 'react';
import LeftSide from '../../components/CreateEvent/LeftSide';
import RightSide from '../../components/CreateEvent/RightSide';

import Cookies from 'js-cookie';
import axios from 'axios';
const CreateEvent = () => {
    
    const [event, setEvent] = useState({
        title: '',
        description: '',
        type: '',
        link: '',
        location: '',
        content: '',
        eventType: 'online',
        location: '',
        image: '',
        date: '',
        time: '',
        host: '',
        price: '',
        policy: ''
    })
    const [file, setFile] = useState()
    // /api/event/createEvent
    // create event with uploading image
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = Cookies.get('token')
        // upload all with json data
        const formData = new FormData()
        formData.append('title', event.title)
        formData.append('description', event.description)
        formData.append('type', event.type)
        formData.append('link', event.link)
        formData.append('location', event.location)
        formData.append('content', event.content)
        formData.append('eventType', event.eventType)
        formData.append('location', event.location)
        formData.append('image', file)
        formData.append('date', event.date)
        formData.append('time', event.time)
        formData.append('host', event.host)
        formData.append('price', event.price)
        formData.append('policy', event.policy)
        
        // convert to json
        const json = JSON.stringify(event)


        try {
            const res = await axios.post(`${process.env.API}/api/event/createEvent`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    

    return (
            <div className='flex mt-11 mb-5 px-10 w-full'>
            <LeftSide event={event} setEvent={setEvent}/>
            <RightSide handleSubmit={handleSubmit} file={file} setFile={setFile} event={event} setEvent={setEvent}/>
        </div>
        
    );
};

export default CreateEvent;