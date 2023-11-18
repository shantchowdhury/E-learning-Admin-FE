import StudentsActions from './StudentsActions';
import Table from './Table';

const AllStudents = ({students,setStudents}) => {
    return (
        <div className='bg-white py-6 mt-10 rounded-lg'>
            <StudentsActions />
            <Table students={students} setStudents={setStudents}/>
        </div>
    )
}

export default AllStudents;
