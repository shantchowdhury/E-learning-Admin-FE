import React from 'react';
import LeftSide from '../../components/CreateEvent/LeftSide';
import RightSide from '../../components/CreateEvent/RightSide';

const CreateEvent = () => {
    return (
        <div className='flex mt-11 mb-5 px-10 w-full'>
            <LeftSide/>
            <RightSide/>
        </div>
    );
};

export default CreateEvent;