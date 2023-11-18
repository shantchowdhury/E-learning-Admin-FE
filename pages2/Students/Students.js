import StudentAnalytics from '../../components/Students/StudentAnalytics';
import AllStudents from '../../components/Students/AllStudents';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
const Students = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        loadStudents()
    }, [])
    const loadStudents = async () => {
        const res = await axios.get(`${process.env.API}/api/student`,
        {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
              }
        });
        console.log(res.data);
        setStudents(res.data);
    }
    
    return (
        <div>
            <StudentAnalytics />
            <AllStudents students={students} setStudents={setStudents} />
        </div>
    );
};

export default Students;