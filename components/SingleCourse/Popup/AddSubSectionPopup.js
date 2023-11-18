import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast'
import { useRouter } from "next/router";
const AddSubSectionPopup = ({ openPopup, setPopup, selected, setSelected,courseId }) => {
  const router = useRouter()
  const [file, setFile] = useState(null)
  const [video, setVideo] = useState(null)
  const [videoUploadStatus, setVideoUploadStatus] = useState(0)
  const [obj, setObj] = useState({
    name: "",
    sectionId: "",
    description: "",
    image: "",
  })
  useEffect(() => {
    setObj({
        name: "",
        sectionId: selected?.sectionId,
        description: "",
        image: "",
        })
        setFile(null)
        setVideo(null)
        setVideoUploadStatus(0)
  }, [])
  
  const [update, setUpdate] = useState(selected?.sectionId ? false : false)
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }
//   /api/aws-video-upload
const handleVideoUpload = async (video) => {
    
    setVideoUploadStatus(1)
    const formData = new FormData()
    formData.append('video', video)
    try {
        const res = await axios.post(`${process.env.API}/api/aws-video-upload`, formData, {
            withCredentials: true,
        })
        if (res.status === 200) {
            toast.success('Video uploaded successfully')
            setVideo(res.data.location)
            setVideoUploadStatus(2)
            setObj({
                ...obj,
                video: res.data.location
            })
        }
        else{
            setVideoUploadStatus(0)
        }
    } catch (error) {
        setVideoUploadStatus(0)
        console.log(error)
    }
}

const handleFileUpload = async (file) => {
        
        const formData = new FormData()
        formData.append('file', file)
        try {
            const res = await axios.post(`${process.env.API}/api/aws-file-upload`, formData, {
                withCredentials: true,
            })
            if (res.status === 200) {
                toast.success('Image uploaded successfully')
                setFile(res.data.location)
                setObj({
                    ...obj,
                    image: res.data.location
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

  const handleChange = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,

    })
  }

  const handleCreateSubSection = async () => {
    try {
      if (obj?.name === "") {
        toast.error('Please fill the name field')
        return
      }
      
      const res = await axios.post(`${process.env.API}/api/course-section-subsection/create`,{
        name: obj.name,
        description: obj.description,
        courseSectionId: selected.sectionId,
        video: video
      }, {
        withCredentials: true,
      })
      if (res.status === 200) {
        toast.success('Sub Section created successfully')
        setPopup(prev => !prev)
        setObj({
          name: "",
          sectionId: "",
          description: "",
          image: "",
        })
        // setSelected(null)
        router.push(`/dashboard/course/${courseId}`)
      }
    } catch (error) {
      toast.error(error.message) 
    }
  }


  return (
    <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
      <div className={`bg-white mx-auto rounded-lg w-[400px] transition-all duration-500 relative ${openPopup ? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
        <div className="pt-5">
          <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Create New Sub Section</h1>
            <hr className="border-gray" />
            <div className="flex justify-center items-center">
                <h1 className="text-xl">{selected.name}</h1>
            </div>
          <div className="px-10 py-6 space-y-4">
            <input value={obj?.name} name="name" onChange={handleChange} className={styles.input} placeholder="Section Name" />
            <input onChange={handleChange} name="description" value={obj?.description} className={styles.input} placeholder="Description(Optional)" />
            {/* <input onChange={handleFileChange} name="image" className={styles.input} placeholder="image" type="file" /> */}
            {/* label Image */}
            <br />
            
            <input onChange={(e) => handleVideoUpload(e.target.files[0])} name="video" className={styles.input} placeholder="video" type="file" />
            <label className={styles.label} >
              Upload Video
            </label>
            {
                videoUploadStatus===1 ? <p>Uploading...</p> :
                videoUploadStatus===2 ? <p>Uploaded</p> : null
            }
            
            {/* label video */} 
            

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
                <button onClick={handleCreateSubSection} className={`${styles.button} bg-dark_green`}>
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

export default AddSubSectionPopup;
