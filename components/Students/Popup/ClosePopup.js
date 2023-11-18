import {IoAlertCircleSharp} from 'react-icons/io5';

const ClosePopup = ({ openClosePopup, setClosePopup }) => {
  return (
      <div className={`top-0 left-0 bg-[#00000091] z-[100] transition-all duration-500 fixed ${openClosePopup ? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white mx-auto rounded-lg w-[450px] transition-all duration-500 relative ${openClosePopup ? 'opacity-100 top-40' : 'opacity-0 top-10'}`}>
           
            <div className="absolute flex items-center justify-center bg-white w-20 rounded-full h-20 top-[-15%] left-[50%] translate-x-[-50%]">
              <IoAlertCircleSharp size={50} className="text-youtube" />
            </div>

          <div className="pt-16">
            <h1 className="text-center font-inter text-xl font-bold text-dark">ARE YOU SURE!</h1>
            <p className="text-center font-inter text-light_gray">You want to block this user?</p>
          </div>

          <div className="text-center py-8 flex justify-center items-center gap-10">
            <button onClick={() => setClosePopup(prev => !prev)} className={`${style.button} bg-light_gray`}>
              NOPE, CLOSE
            </button>

            <button className={`${style.button} bg-youtube`}>
              YES, BLOCK
            </button>
          </div>

        </div>
      </div> 
  );
};

const style ={
  button: "h-[45px] w-32 text-white font-poppins text-sm font-medium rounded-lg"
}

export default ClosePopup;
