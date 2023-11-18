import {IoAlertCircleSharp} from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
const DeleteSectionPopup = ({ openDeletePopup, setDeletePopup,sectionId,loadCourseDetails }) => {
  const router=useRouter()
  const handleDelete = async () => {
    try {
      const token = Cookies.get('token')
      const res = await axios.delete(`${process.env.API}/api/course-section/delete/${sectionId}`,{
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${token}`
            }
      }
      )
      if(res.status === 200){
        setDeletePopup(prev => !prev)
        
        loadCourseDetails()
        toast.success('Module deleted successfully')
        
        
      }
    }
    catch (error) {
      toast.error('Something went wrong')
    }
  }
  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openDeletePopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white mx-auto rounded-lg w-[450px] transition-all duration-500 relative ${openDeletePopup ? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
           
            <div className="absolute flex items-center justify-center bg-white w-20 rounded-full h-20 top-[-15%] left-[50%] translate-x-[-50%]">
              <IoAlertCircleSharp size={50} className="text-youtube" />
            </div>

          <div className="pt-16">
            <h1 className="text-center font-inter text-xl font-bold text-dark">ARE YOU SURE!</h1>
            <p className="text-center font-inter text-light_gray">You want to delete this Module?</p>
          </div>

          <div className="text-center py-8 flex justify-center items-center gap-10">
            <button  onClick={() => setDeletePopup(prev => !prev)} className={`${style.button} bg-light_gray`}>
              NOPE, CLOSE
            </button>

            <button onClick={handleDelete} className={`${style.button} bg-youtube`}>
              YES, DELETE
            </button>
          </div>

        </div>
      </div> 
  );
};

const style ={
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg"
}

export default DeleteSectionPopup;
