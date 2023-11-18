import React, { useState } from 'react';
import TestCard from '../../components/TestOverview/TestCard/TestCard';
import TestModal from '../../components/TestOverview/TestCard/TestSideCard/TestModal/TestModal';
import TestHeading from '../../components/TestOverview/TestHeading/TestHeading';

const TestOverview = () => {

    const [testModal, setTestModal] = useState(false);

    return (
        <div className='relative max-w-[90rem] w-full pt-6 mx-auto px-10 '>
            <TestHeading />
            <div className=' sticky top-[20%] left-20'>
                <TestCard setTestModal={setTestModal} testModal={testModal} />
            </div>

            <div>
                <TestModal setTestModal={setTestModal} testModal={testModal} />
            </div>
        </div>
    );
};

export default TestOverview;