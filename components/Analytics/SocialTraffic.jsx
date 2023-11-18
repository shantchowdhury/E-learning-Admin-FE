import React from "react";
import {
  RiFacebookBoxFill, 
  RiYoutubeFill,
  RiLinkedinBoxFill
} from 'react-icons/ri';

const SocialTraffic = () => {
  return (
    <div className="w-[40%] bg-background border font-poppins border-gray rounded-xl">
      <div className="px-[34px] py-[27px]">
        <h4 className="text-[#1E1E1E] font-medium">Social Traffic</h4>
        <div className="flex items-center gap-1 ">
          <h2 className="text-[36px] leading-[54px] font-medium text-[#1E1E1E]"> 8,290 </h2>
          <p className="text-[#6D6D6D]">Total traffic</p>
        </div>
      </div>

      <div>
        <div className={styles.infoContainer}>
          <div className={styles.source}>
            <RiFacebookBoxFill size={22} className="text-facebook"/>
            <h2 className={styles.platform}> Facebook </h2>
          </div>
          <p>300 Visit</p>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.source}>
            <RiYoutubeFill size={22} className="text-youtube" />
            <h2 className={styles.platform}> YouTube </h2>
          </div>
          <p>300 Visit</p>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.source}>
            <RiLinkedinBoxFill size={22} className="text-linkedin" />
            <h2 className={styles.platform}> LinkedIn </h2>
          </div>
          <p>300 Visit</p>
        </div>

      </div>
    </div>
  );
};

const styles = {
  infoContainer: "px-[34px] py-3 border-b-[1px] border-[#E7E7E7] flex justify-between",
  source: "flex items-center gap-[27px]",
  platform: "text-[14px] leading-[24px] text-[#1E1E1E]"
}

export default SocialTraffic;
