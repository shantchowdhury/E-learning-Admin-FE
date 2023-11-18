// import CoverImg from "../../../images/profile.jpg";

const EditPopup = ({ openEditPopup, setEditPopup }) => {
  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openEditPopup? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
          
          <div className={`bg-white mx-auto rounded-lg w-[500px] transition-all duration-500 relative ${openEditPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
            <div className="absolute w-24 rounded-full border-8 border-white h-24 top-[-12%] left-[50%] translate-x-[-50%]">
              <img className="w-full h-full rounded-full object-cover" src="/assets/images/profile.jpg" alt="CoverImg" />
            </div>

            <div className="pt-12">
              <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Shahnewaz Rakib</h1>
              
              <div className="px-10 py-6 space-y-4">
                <div className={styles.inputContainer}>
                  <span className={styles.label}> Email </span>
                  <input className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                  <span className={styles.label}> Role </span>
                  <select className={styles.input}>
                    <option>Super Admin 👑</option>
                    <option>Partial Admin</option>
                    <option>Editor</option>
                  </select>
                </div>

                <div className={styles.inputContainer}>
                  <span className={styles.label}> Pass </span>
                  <div className="w-full">
                    <input className={styles.input}/>
                  </div>
                </div>
                <p className="w-[80%] text-light_gray ml-auto text-[13px] font-inter">Leave it blank if you don't want to change the password</p>
                  

              </div>

              <hr className="border-gray" />
              <div className="text-center py-4 flex justify-center items-center gap-10">
                <button onClick={() => setEditPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
                  CLOSE POPUP
                </button>

                <button className={`${styles.button} bg-dark_green`}>
                  SAVE CHANGES
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
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg"
}

export default EditPopup;
