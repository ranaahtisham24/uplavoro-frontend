import InputField from "@/components/common/inputField";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import ReactSelectField from "@/components/common/reactSelectField";
import DatePickerFeild from "@/components/common/datePicker";

const StudyAndTraining = () => {
  const { control } = useForm({});

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px]">
        <div className="flex gap-x-4">
          <div className="flex flex-col w-[69%]">
            <label className="text-[#111111] tracking-[-0.6px]">
            Institution name
            </label>
            <InputField
              name="name"
              placeholder="Nikola Tesla Scientific High School"
              control={control}
            />
          </div>
          <div className="flex-col w-[29%]">
            <label className="text-[#111111] tracking-[-0.6px]">
            State
            </label>
            <ReactSelectField
              name="surname"
              placeholder="IT"
              control={control}
            />
          </div>
        </div>

        <div className="flex gap-x-4">
          <div className="flex-col w-[69%]">
            <label className="text-[#111111] tracking-[-0.6px]">
            Level of study
            </label>
            <ReactSelectField
              name="surname"
              placeholder="High School/Professional Diploma"
              control={control}
            />
          </div>
          <div className="flex-col w-[29%]">
            <label className="text-[#111111] tracking-[-0.6px]">
            Year graduated
            </label>
            <DatePickerFeild
              name="onset_date"
              title="08-05-1997"
              control={control}
              dateTime={false}
              minDate={new Date()}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#111111] tracking-[-0.6px]">Degree</label>
          <InputField name="name" placeholder="Diploma as an interpreter / translator" control={control} />
        </div>

        <div className="flex gap-x-3 items-center py-4">
          <Image
            src={DeleteIcon}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
          <p className="tracking-[-0.6px] text-delete">Remove degree</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 py-6 px-8 border border-paragraph rounded-[16px]">
        <Image src={AddIcon} alt="" style={{ width: "24px", height: "24px" }} />
        <p className="tracking-[-0.6px] text-black">Add degree</p>
      </div>
    </div>
  );
};

export default StudyAndTraining;
