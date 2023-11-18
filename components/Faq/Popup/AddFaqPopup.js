import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
// import ReactQuill from 'react-quill';
const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'link'],
    [{ 'color': [] }],
    [{ 'align': [] }]
  ];

const AddFaqPopup = ({ openFaqPopup, setFaqPopup,loadFaqs, selected, setSelected }) => {
  const [faq, setFaq] = useState({
    Title: "",
    Description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq(prev => ({ ...prev, [name]: value }))
  }
  useEffect(() => {
    setFaq({
      Title: selected?.Title,
      Description: selected?.Description,
    })
  }, [selected])
  

  const handleSaveFaq=async()=>{
    const token = Cookies.get('token')
    const res = await axios.post(`${process.env.API}/api/faq/createFAQ`, faq, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    })
    if(res.status === 200 || res.status === 201){
      toast.success('FAQ added successfully')
      loadFaqs()
      setFaq({
        Title: "",
        Description: "",
      })
      setSelected(null)
      setFaqPopup(prev => !prev)
    }
    else{
      toast.error('Something went wrong')
    }
  }

  const handleUpdateFaq=async()=>{
    const token = Cookies.get('token')
    const res = await axios.put(`${process.env.API}/api/faq/updateFAQ/${selected?._id}`, faq, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    })
    if(res.status === 200 || res.status === 201){
      toast.success('FAQ updated successfully')
      loadFaqs()
      setFaq({
        Title: "",
        Description: "",
      })
      setSelected(null)
      setFaqPopup(prev => !prev)
    }
    else{
      toast.error('Something went wrong')
    }
  }



  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openFaqPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white mx-auto rounded-lg w-[500px] transition-all duration-500 relative ${openFaqPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
          <div className="pt-5">
              <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Add FAQ</h1>
              <div className="px-10 py-6 space-y-4">
                <input value={faq.Title} name="Title" onChange={handleChange} className={styles.input} placeholder="FAQ Title"/>
                <textarea value={faq.Description} name="Description" onChange={handleChange} className={styles.input} placeholder="FAQ Description" rows="5"/>
                {/* <ReactQuill className='notificationQuill' modules={{toolbar: toolbarOptions}} />   */}
              </div>

              <hr className="border-gray" />
              <div className="text-center py-4 flex justify-center items-center gap-10">
                <button onClick={() => setFaqPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
                  NOPE, CLOSE
                </button>

                {
                  selected?._id ?
                  <button onClick={handleUpdateFaq} className={`${styles.button} bg-youtube`}>
                    UPDATE
                  </button>
                  :
                  <button onClick={handleSaveFaq} className={`${styles.button} bg-dark_green`}>
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

export default AddFaqPopup;
