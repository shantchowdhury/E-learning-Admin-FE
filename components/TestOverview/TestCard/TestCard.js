import React from 'react';
import TestCardItem from './TestCardItem/TestCardItem';
import TestSideCard from './TestSideCard/TestSideCard';

const TestCard = ({ testModal, setTestModal }) => {
    return (
        <div>
            <div className='  lg:flex items-start justify-between'>
                <div className='mt-12 w-full lg:w-[71%]  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6  mb-10'>
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                    <TestCardItem />
                </div>
                <div className=' w-full lg:w-[27%] h-full sticky top-20 '>
                    <TestSideCard setTestModal={setTestModal} />
                </div>
            </div>

        </div>
    );
};

export default TestCard;