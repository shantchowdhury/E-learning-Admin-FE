import ReactQuill from 'react-quill';
const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'link'],
    [{ 'color': [] }],
    [{ 'align': [] }] 
  ];

const AddNotificationPopup = ({ openPopup, setPopup }) => {

    return (
        <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openPopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
          <div className={`bg-white mx-auto rounded-lg w-[500px] transition-all duration-500 relative ${openPopup? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
            <div className="pt-5">
                <h1 className="text-center font-inter text-[18px] font-semibold text-dark">Create New Notification</h1>
                <div className="px-10 py-6 space-y-4">
                  <input className={styles.input} placeholder="Title"/>
                  <ReactQuill className='notificationQuill' modules={{toolbar: toolbarOptions}} />
                </div>
  
                <hr className="border-gray" />
                <div className="text-center py-4 flex justify-center items-center gap-10">
                  <button onClick={() => setPopup(prev => !prev)} className={`${styles.button} bg-light_gray`}>
                    NOPE, CLOSE
                  </button>
  
                  <button className={`${styles.button} bg-dark_green`}>
                    SEND
                  </button>
                </div>
            </div>
          </div>
        </div>
    );
  };
  
  const styles = {
    input: "w-full text-sm p-3 rounded-md border border-gray outline-none font-poppins bg-background",
    textarea: 'p-3 font-inter text-sm outline-none bg-background border border-gray rounded-xl resize-none text-dark w-full',
    label: "text-dark w-[25%] text-sm uppercase font-poppins font-semibold",
    button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg",
    uploadButton: 'bg-light_green text-white font-poppins py-2 px-4 cursor-pointer rounded-full text-sm'
  }
  
  export default AddNotificationPopup;
  