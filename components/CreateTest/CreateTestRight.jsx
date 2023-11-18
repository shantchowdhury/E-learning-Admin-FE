import React, { useState } from "react";
import StructureModal from "./StructureModal";

const CreateTestRight = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      title: "Basic To Advanced",
      time: "10 marks . 20 minutes",
      tag: "Programming",
      totalMarks:
        "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetuer adipiscing ...",
    },
  ]);

  const handelSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let tag = e.target.tag.value;
    let time = e.target.time.value;
    let totalMarks = e.target.totalMarks.value;
    const id = Math.floor(Math.random() * 100) + 1;

    const newData = { title, tag, time, totalMarks, id };

    newData.title && newData.tag && newData.time && newData.totalMarks
      ? setData([...data, newData])
      : alert("Please enter a data");

    title = "";
    tag = "";
    time = "";
    totalMarks = "";
    setOpen(false);
  };

  console.log(data);
  return (
    <div className="max-w-[454px] relative h-[93vh]">
      <div className="">
        {/* show all stackers */}
        {data &&
          data.map(({ id, title, time, tag, totalMarks }) => (
            <div
              key={id}
              className="bg-[#efefef] p-[22px] rounded-[8px] mb-[35px]"
            >
              <h2 className="font-semibold text-[18px] leading-[22px] text-deep-gray">
                {title}
              </h2>
              <span className="mt-[9px] mb-[16px] text-[14px] leading-[17px] font-semibold text-[#6A6A6A]">
                {time}
              </span>
              <p className="mb-[16px] text-[15px] leading-[22px] text-[#6A6A6A]">
                {totalMarks}
              </p>
              <button className="rounded-[5px] px-[26px] py-[4px] text-[15px] leading-[22px] bg-light-gray text-white">
                {tag}
              </button>
            </div>
          ))}

        {/* Structure */}
        <div className="mt-[35px] mb-[45px]">
          <button
            onClick={() => setOpen(true)}
            className="w-full font-poppins font-semibold text-[18px] leading-[27px] bg-dark-green  py-[11px] rounded-[6px] text-white"
          >
            Structure
          </button>
        </div>
        {/* Select category */}
        <div>
          <select className="w-full px-[22px] py-[14px] outline-0 border-[1px] border-[#DCDCDC] rounded-[9px] text-[#808080]">
            <option value="option-1">Select category</option>
            <option value="option-2">option 2</option>
            <option value="option-3">option 3</option>
            <option value="option-4">option 4</option>
          </select>
        </div>
        {/* save && public button */}
        <div className="absolute right-0 bottom-0">
          <p className="text-[17px] font-medium leading-[19px] text-black mb-[22px]">
            Total 220 Student’s gave this test
          </p>
          <button className="text-white leading-[19px] font-medium bg-[#D7AB56] rounded-[5px] px-[35px] py-[13px] mr-[33px]">
            Save
          </button>
          <button className="text-white leading-[19px] font-medium bg-dark-green rounded-[5px] px-[35px] py-[13px]">
            Publish
          </button>
        </div>
      </div>
      <div>
        <StructureModal
          open={open}
          setOpen={setOpen}
          handelSubmit={handelSubmit}
        />
      </div>
    </div>
  );
};

export default CreateTestRight;
