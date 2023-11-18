import React from "react";
import CreateTestLeft from "./CreateTestLeft";
import CreateTestRight from "./CreateTestRight";

const CreateTest = () => {
  return (
    <div className="max-w-[1336px] mx-auto">
      {/* create-test */}
      <div className="flex gap-[49px] ">
        <div>
          {/* left side  */}
          <CreateTestLeft />
        </div>
        <div>
          {/* right side  */}
          <CreateTestRight />
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
