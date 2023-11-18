import {useState} from "react";

const AddTeamPopup = ({ openTeamPopup, setTeamPopup }) => {
  const [file, setFile] = useState();
  const handleChangeImg = (e) => {
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openTeamPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white mx-auto rounded-lg w-[500px] transition-all duration-500 relative ${openTeamPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
          
          <div className="pt-5">
              <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Add New Member</h1>
              <div className="px-10 py-6 space-y-4">
                <div className={styles.inputContainer}>
                  <span className={styles.label}> Name </span>
                  <input className={styles.input} placeholder="John Doe" />
                </div>

                <div className={styles.inputContainer}>
                  <span className={styles.label}> Position </span>
                  <input className={styles.input} placeholder="Co-founder" />
                </div>
                
                <div className={styles.inputContainer}>
                  <span className={styles.label}> LinkedIn </span>
                  <input className={styles.input} placeholder="Profile Link" />
                </div>
                

                <div className="flex items-center">
                  <span className={styles.label}>Photo</span>
                  <div className="w-full flex items-center gap-3">
                    <input onChange={handleChangeImg} type="file" id="teamphoto" accept="image/*" className="hidden" />
                    <label htmlFor="teamphoto" className={styles.uploadButton}>Upload</label>
                    {
                      file && <img src={file} className='w-10 h-10 rounded-md' />
                    }
                  </div>
                </div>
                  
              </div>

              <hr className="border-gray" />
              <div className="text-center py-4 flex justify-center items-center gap-10">
                <button onClick={() => setTeamPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
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
export default AddTeamPopup;
