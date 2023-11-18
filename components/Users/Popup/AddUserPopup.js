import {useState} from "react";
import PhoneInput from "react-phone-number-input";

const AddUserPopup = ({ openUserPopup, setUserPopup }) => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Role: "",
    Password: "",
    Photo: "",

  })

  const [file, setFile] = useState();

  const handleChangeImg = (e) => {
      setFile(e.target.files[0]);
  }
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}))
  }
  

  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openUserPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white mx-auto rounded-lg w-[520px] transition-all duration-500 relative ${openUserPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
          
          <div className="pt-5">
              <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Add new user</h1>
              <div className="px-10 py-6 space-y-4">
                <div className={styles.inputContainer}>
                  <span className={styles.label}> Name </span>
                  <input className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                  <span className={styles.label}> Email </span>
                  <input className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                  <span className={styles.label}> Phone </span>
                  <PhoneInput onChange={() => {}} countries={['BD']} addInternationalOption={false} className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                  <span className={styles.label}> Role </span>
                  <select className={`${styles.input} w-full`}>
                    <option value="superadmin">Super Admin 👑</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                  </select>
                </div>

                <div className={styles.inputContainer}>
                  <span className={styles.label}> Pass </span>
                  <input type='password' className={styles.input}/>
                </div>
                

                <div className="flex items-center">
                  <span className={styles.label}>Photo</span>
                  <div className="w-full flex items-center gap-3">
                    <input onChange={handleChangeImg} type="file" id="photo" accept="image/*" className="hidden" />
                    <label htmlFor="photo" className={styles.uploadButton}>Upload</label>
                    {
                      file && <img src={file} className='w-10 h-10 object-contain rounded-md' />
                    }
                  </div>
                </div>
                  
              </div>

              <hr className="border-gray" />
              <div className="text-center py-4 flex justify-center items-center gap-10">
                <button onClick={() => setUserPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
                  NOPE, CLOSE
                </button>

                <button className={`${styles.button} bg-dark_green`}>
                  ADD USER
                </button>
              </div>
          </div>

        </div>
      </div>
  );
};

const styles = {
  inputContainer: "w-full flex items-center justify-between",
  label: "text-dark w-[25%] text-sm uppercase font-poppins font-semibold",
  input: "w-full text-sm p-3 rounded-md border border-gray outline-none font-poppins bg-background",
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg",
  uploadButton: 'bg-light_green text-white font-poppins py-2 px-4 cursor-pointer rounded-full text-sm'
}
export default AddUserPopup;
