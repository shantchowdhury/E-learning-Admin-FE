import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import img from "../../images/commucation.png";
import CreateTestModal from "./CreateTestModal";
import FaqModal from "./FaqModal";
const CreateTestLeft = () => {
  const [skillOpen, setSkillOpen] = useState(false);
  const [faq, setFaq] = useState(false);
  const [skill, setSkill] = useState([
    {
      id: 0,
      title: "Skills Required",
      description: "Test your verbal and written communication skills",
    },
  ]);
  const [allFaq, SetAllFaq] = useState([]);

  console.log(faq);

  const handelSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    const id = Math.floor(Math.random() * 100) + 1;

    const newData = { id, title, description };

    newData.title && newData.description
      ? setSkill([...skill, newData])
      : alert("Please enter a data");

    title = "";
    description = "";
    setSkillOpen(false);
  };

  const faqHandelSubmit = (e) => {
    e.preventDefault();
    let question = e.target.question.value;
    let answer = e.target.answer.value;
    const id = Math.floor(Math.random() * 1000) + 1;

    const data = { id, question, answer };
    question && answer
      ? SetAllFaq([...allFaq, data])
      : alert("Please enter a data");
    setFaq(false);
    question = "";
    answer = "";
  };

  return (
    <div className="w-[831px] ">
      <div className="border-[1px] rounded-[25px] border-[#CACACA] py-[42px] px-[30px] w-full bg-white">
        {/* top from  */}
        <form>
          <div>
            <input
              type="text"
              className="w-full py-[16px] px-[21px] bg-[#efefef] text-[#9EA4AA] text-base rounded-[11px] mb-[21px] border-[1px] border-[#D0D0D0] "
              placeholder="Exam Title"
            />
          </div>
          <div className="flex gap-[38px]">
            <input
              type="text"
              className="w-2/4 py-[16px] px-[21px] bg-[#efefef] text-[#9EA4AA] text-base mb-[21px] border-[1px] border-[#D0D0D0] rounded-[11px]"
              placeholder="How many jobs available?"
            />
            <input
              type="text"
              className="w-2/4 py-[16px] px-[21px] bg-[#efefef] text-[#9EA4AA] text-base mb-[21px] border-[1px] border-[#D0D0D0] rounded-[11px]"
              placeholder="How many partner companies?"
            />
          </div>
        </form>
        {/* skills title  */}
        <div className="pt-[44px] pb-[29px]">
          <h2 className="font-poppins font-medium text-[20px] leading-[30px] text-dark">
            Skills Required
          </h2>
        </div>
        {/* All Skill  tag  */}
        <div className="flex items-center gap-x-[48px] flex-wrap">
          <div>
            <div className="flex flex-wrap">
              {skill &&
                skill?.map(({ title, description, id }) => (
                  <div
                    key={id}
                    className="my-[15px] mr-[15px] w-[226px] border-[1px] rounded-[9px] border-[#D7D7D7] px-[21px] py-[14px]"
                  >
                    <div className="mb-[4px]">
                      <img className="w-[27px] h-[33px]" src={img} alt="" />
                    </div>
                    <h2 className="mb-[8px] font-poppins font-medium text-base leading-[24px] text-dark">
                      {title}
                    </h2>
                    <p className="text-[14px] leading-[18px] text-light-gray">
                      {description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <button
              onClick={() => setSkillOpen(true)}
              className="bg-dark-green  py-[18px] px-[28px] rounded-[5px]"
            >
              <ImPlus className="text-white text-2xl font-semibold" />
            </button>
          </div>
        </div>
        {/* Exam FAQ */}
        <div className="mt-[65px]">
          <div className="pb-[29px]">
            <h2 className="font-poppins font-medium text-[20px] leading-[30px] text-dark">
              Exam FAQ
            </h2>
          </div>
          {allFaq &&
            allFaq.map(({ id, question }) => (
              <div key={id} className="mb-[19px]">
                <h2 className="bg-[#F0F0F0] rounded-[6px] px-[17px] py-[13px] text-light-gray text-[16px] leading-[24px]">
                  {question}
                </h2>
              </div>
            ))}
          <button
            onClick={() => setFaq(true)}
            className="font-poppins font-semibold text-[18px] leading-[27px] bg-dark-green w-full py-[11px] rounded-[6px] text-white"
          >
            ADD FAQ
          </button>
        </div>
        {/* downloads */}
        <div className="pt-[49px] pb-[27px]">
          <h2 className="font-poppins font-medium text-[20px] leading-[30px] text-dark">
            Downloads
          </h2>
        </div>
        {/* download btn  */}
        <div>
          <button className="text-white px-[38px] py-[11px] mr-[21px] bg-blue rounded-[58px] font-medium text-[16px] leading-[24px]">
            Upload
          </button>
          <span className="text-light-gray font-medium text-[16px] leading-[24px]">
            Upload exam syllabus (.pdf)
          </span>
          <input type="file" className="hidden"></input>
        </div>

        <div className="my-[28px]">
          <button className="text-white px-[38px] py-[11px] mr-[21px] bg-blue rounded-[58px] font-medium text-[16px] leading-[24px]">
            Upload
          </button>
          <span className="text-light-gray font-medium text-[16px] leading-[24px]">
            Upload exam syllabus (.pdf)
          </span>
          <input type="file" className="hidden"></input>
        </div>

        <div>
          <button className="text-white px-[38px] py-[11px] mr-[21px] bg-blue rounded-[58px] font-medium text-[16px] leading-[24px]">
            Upload
          </button>
          <span className="text-light-gray font-medium text-[16px] leading-[24px]">
            Upload exam syllabus (.pdf)
          </span>
          <input type="file" className="hidden"></input>
        </div>
      </div>
      {/* modal */}
      <div>
        {/* create modal */}
        {
          <CreateTestModal
            skillOpen={skillOpen}
            setSkillOpen={setSkillOpen}
            handelSubmit={handelSubmit}
          />
        }
        {/* faq modal */}
        {/* <FaqModal faq={faq} setFaq={setFaq} faqHandelSubmit={faqHandelSubmit} /> */}
        <FaqModal faq={faq} setFaq={setFaq} faqHandelSubmit={faqHandelSubmit} />
      </div>
    </div>
  );
};

export default CreateTestLeft;
