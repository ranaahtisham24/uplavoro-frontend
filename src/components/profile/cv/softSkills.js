import React from "react";
import { useForm } from "react-hook-form";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import ReactSelectField from "@/components/common/reactSelectField";
import InputField from "@/components/common/inputField";
import Image from "next/image";

const SoftSkills = () => {
  const { control } = useForm({});

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px]">
        <div className="flex flex-col">
          <label className="text-[#111111] tracking-[-0.6px]">Knowledge</label>
          <InputField name="name" placeholder="Public speaking" control={control} />
        </div>

        <div className="flex gap-x-4">
          <div className="flex-col w-[49%]">
            <label className="text-[#111111] tracking-[-0.6px]">
            Level
            </label>
            <ReactSelectField
              name="surname"
              placeholder="Good"
              control={control}
            />
          </div>
          <div className="flex-col w-[49%]">
            <label className="text-[#111111] tracking-[-0.6px]">
            Type
            </label>
            <ReactSelectField
              name="surname"
              placeholder="Comunicazione e marketing"
              control={control}
            />
          </div>
        </div>

        <div className="flex gap-x-3 items-center py-4">
          <Image
            src={DeleteIcon}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
          <p className="tracking-[-0.6px] text-delete">Delete soft skill</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 py-6 px-8 border border-paragraph rounded-[16px]">
        <Image src={AddIcon} alt="" style={{ width: "24px", height: "24px" }} />
        <p className="tracking-[-0.6px] text-black">Add soft skill</p>
      </div>
    </div>
  );
};

export default SoftSkills;
