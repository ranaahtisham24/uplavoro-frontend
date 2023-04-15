import Image from "next/image";
import React from "react";
import MsgQuestion from "../../../../public/assets/icons/message-question.svg";

const CoverLetter = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-black tracking-[-0.6px]">
        The cover letter could give you a big advantage: it is a perfect tool
        for enhance your candidacy and demonstrate that you are the person they
        are looking for.
      </p>
      <div className="flex items-center gap-x-4">
        <p className="text-hero tracking-[-0.6px]">Need help? Read our guide</p>
        <Image
          src={MsgQuestion}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <textarea className="w-full border border-paragraph p-6 rounded-[16px]" rows="8" placeholder="I am [your name and surname], a professional in [work sector] with over X years of experience in [your work], with strong inclination towards [professional ambitions]…"></textarea>
    </div>
  );
};

export default CoverLetter;
