import React from "react";

const StructureModal = ({ open, setOpen, handelSubmit }) => {
  return (
    <>
      <div
        //   top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        className={`  outline-none focus:outline-none z-40 absolute  top-[50%] left-[50%] translate-x-[-142%] translate-y-[-50%] ${
          open ? "block duration-1000" : " translate-y-[-80rem] duration-500 "
        }  `}
      >
        <div className=" bg-white relative w-[681px] rounded-lg z-50 ">
          <h1 className="text-center text-2xl font-semibold font-poppins text-[#1B2E35] py-9 ">
            Structure
          </h1>
          <div className=" ">
            <form onSubmit={handelSubmit}>
              <div className=" px-10">
                <div className=" w-full flex items-center justify-between mb-7 gap-5 ">
                  <input
                    className="px-[25px] py-[14px] rounded-[11px] border-[1px] border-[#D0D0D0] w-1/2 p-3  focus:outline-none font-poppins bg-[#F2F2F2] "
                    type="text"
                    id="name"
                    name="title"
                    placeholder="Title"
                  />
                  <input
                    className="px-[25px] py-[14px] rounded-[11px] border-[1px] border-[#D0D0D0] w-1/2 p-3  focus:outline-none font-poppins bg-[#F2F2F2] "
                    type="text"
                    id="name"
                    name="tag"
                    placeholder="Tag"
                  />
                </div>
                <div className=" w-full flex items-center justify-between mb-7 gap-5 ">
                  <input
                    className="px-[25px] py-[14px] rounded-[11px] border-[1px] border-[#D0D0D0] w-1/2 p-3  focus:outline-none font-poppins bg-[#F2F2F2] "
                    type="text"
                    id="name"
                    name="time"
                    placeholder="Time (30 Minutes or 1 hour)"
                  />
                  <input
                    className="px-[25px] py-[14px] rounded-[11px] border-[1px] border-[#D0D0D0] w-1/2 p-3  focus:outline-none font-poppins bg-[#F2F2F2] "
                    type="text"
                    id="name"
                    name="totalMarks"
                    placeholder="Total Marks"
                  />
                </div>

                <div className=" rounded-[11px] border-[1px] border-[#D0D0D0]  w-full bg-body-color pb-2 mb-5">
                  <textarea
                    className=" w-full px-[25px] focus:outline-none rounded-lg font-poppins h-[7.5rem] resize-none  bg-body-color text-justify p-3  overflow-hidden"
                    type="text"
                    id="review"
                    name="answer"
                    placeholder="Answer"
                  ></textarea>
                </div>
              </div>
              <div className="mt-[56px] mb-[20px] h-[1px] w-full bg-[#DDDDDD]"></div>

              <div className=" w-full flex items-center justify-center gap-12 pb-6">
                <button
                  onClick={() => setOpen(false)}
                  className=" py-[13px] px-[30px] bg-[#71767B] text-white text-[18px] font-poppins font-medium rounded-[12px]"
                >
                  Nope, Close
                </button>
                <button
                  type="submit"
                  className=" py-[13px] px-[48px] text-[18px] bg-[#6371E0] text-white font-poppins font-medium rounded-[12px]"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className={`fixed h-screen w-screen top-0 left-0  inset-0  bg-deep-gray transition-all  ease-in-out  ${
          open
            ? " duration-500 opacity-70 z-10 "
            : " duration-500 opacity-0 z-[-1]"
        }`}
      ></div>
    </>
  );
};

export default StructureModal;
