import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast'
import { useRouter } from "next/router";
const EditSectionPopup = ({ openPopup, setPopup, selected, loadCourseDetails }) => {
  const router = useRouter()
  const [file, setFile] = useState(null)
  const [obj, setObj] = useState({
    name: "",
    courseId: "",
    description: "",
    image: "",
  })
  const [update, setUpdate] = useState(selected?.courseId ? false : false)
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleChange = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,

    })
  }

  const handleCreateSection = async () => {
    try {
      if (obj?.name === "" || obj?.description === "") {
        toast.error('Please fill all the fields')
        return
      }
      console.log(selected)
      const formData = new FormData()
      formData.append('name', obj.name)
      formData.append('description', obj.description)
      formData.append('image', file)
      formData.append('courseId', selected.courseId)
      const res = await axios.post(`${process.env.API}/api/course-section/create`, formData, {
        withCredentials: true,
      })
      if (res.status === 200) {
        toast.success('Module created successfully')
        loadCourseDetails()
        setPopup(prev => !prev)
        setObj({
          name: "",
          courseId: "",
          description: "",
          image: "",
        })
        // setSelected(null)
        router.push(`/dashboard/course/${selected.courseId}`)
      }
    } catch (error) {
      toast.error(error.message) 
    }
  }


  return (
    <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
      <div className={`bg-white mx-auto rounded-lg w-[400px] transition-all duration-500 relative ${openPopup ? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
        <div className="pt-5">
          <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Create New Module</h1>
          <div className="px-10 py-6 space-y-4">
            <input value={obj?.name} name="name" onChange={handleChange} className={styles.input} placeholder="Module Name" />
            <input onChange={handleChange} name="description" value={obj?.description} className={styles.input} placeholder="Description" />
            <input onChange={handleFileChange} name="image" className={styles.input} placeholder="image" type="file" />
          </div>

          <hr className="border-gray" />
          <div className="text-center py-4 flex justify-center items-center gap-10">
            <button onClick={() => setPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
              NOPE, CLOSE
            </button>

            {
              update ?
                <button className={`${styles.button} bg-youtube`}>
                  UPDATE
                </button>
                :
                <button onClick={handleCreateSection} className={`${styles.button} bg-dark_green`}>
                  SAVE
                </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: "w-full text-sm p-3 rounded-md border border-gray outline-none font-poppins bg-background",
  label: "text-dark w-[25%] text-sm uppercase font-poppins font-semibold",
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg",
  uploadButton: 'bg-light_green text-white font-poppins py-2 px-4 cursor-pointer rounded-full text-sm'
}

export default EditSectionPopup;
