import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const AddTestimonialPopup = ({ openAddPopup, setAddPopup,loadTestimonials }) => {
  const [testimonial, setTestimonial] = useState({
    Name: "",
    Title: "",
    Review: "",
    image: "",
  })
  const [file, setFile] = useState();
  const [count, setCount] = useState(160);

  const handleChangeImg = (e) => {
      setFile(e.target.files[0])
  }

  const handelCount = e => {
      const char = e.target.value;
      setCount(160 - char.length);
  }
  // /api/testimonial
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setTestimonial(prev => ({...prev, [name]: value}))
  }

  const handleSaveTestimonial=async()=>{
    // check if null and upload with image file
    if (testimonial.Name === '' || testimonial.Title === '' || testimonial.Review === '') {
      return toast.error('Please fill all the fields')
    }
    const formData = new FormData();
    formData.append('Name', testimonial.Name);
    formData.append('Title', testimonial.Title);
    formData.append('Review', testimonial.Review);
    formData.append('image', file);
    const res = await axios.post(`${process.env.API}/api/testimonial/createTestimonial`, formData, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
    if (res.status === 200 || res.status === 201) {
      toast.success('Testimonial added successfully')
      loadTestimonials()
      setTestimonial({
        Name: "",
        Title: "",
        Review: "",
        image: "",
      })
      setAddPopup(prev => !prev)
    }

  }


  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openAddPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white mx-auto rounded-lg w-[500px] transition-all duration-500 relative ${openAddPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
          <div className="pt-5">
              <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Add Testimonial</h1>
              <div className="px-10 py-6 space-y-4">


                <div className="flex gap-3">
                  <input name="Name" onChange={handleChange} className={styles.input} placeholder="Name"/>
                  <input name="Title"  onChange={handleChange} className={styles.input} placeholder="Title"/>
                </div>

                <div className='flex flex-col'>
                  <textarea name="Review"  onChange={handleChange}  rows="6"  className={styles.textara}  maxLength='180' placeholder="Review"></textarea>
                  <div className='border p-2 border-gray bg-background rounded-b-xl flex justify-end'>
                      <span className='bg-light_green/20 text-dark_green w-10 text-center py-[2px] rounded-full font-poppins text-[12px]'>{count}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className={styles.label}>Photo</span>
                  <div className="w-full flex items-center gap-3">
                    <input onChange={handleChangeImg} accept="image/*" type="file" id="photo" className="hidden" />
                    <label htmlFor="photo" className={styles.uploadButton}>Upload</label>
                    {
                     file &&  <img src={file} className='w-10 h-10 object-contain rounded-md' />
                    }
                  </div>
                </div>
                  
              </div>

              <hr className="border-gray" />
              <div className="text-center py-4 flex justify-center items-center gap-10">
                <button onClick={() => setAddPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
                  NOPE, CLOSE
                </button>

                <button onClick={handleSaveTestimonial} className={`${styles.button} bg-dark_green`}>
                  SAVE
                </button>
              </div>
          </div>
        </div>
      </div>
  );
};

const styles = {
  input: "w-full text-sm p-3 rounded-md border border-gray outline-none font-poppins bg-background",
  textara: 'p-3 font-inter text-sm outline-none bg-background border border-gray border-b-0 rounded-t-xl resize-none text-dark w-full',
  label: "text-dark w-[25%] text-sm uppercase font-poppins font-semibold",
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg",
  uploadButton: 'bg-light_green text-white font-poppins py-2 px-4 cursor-pointer rounded-full text-sm'
}

export default AddTestimonialPopup;
