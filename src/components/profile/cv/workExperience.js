import DatePickerFeild from "@/components/common/datePicker";
import InputField from "@/components/common/inputField";
import ReactSelectField from "@/components/common/reactSelectField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import Image from "next/image";

const WorkExperience = () => {
  const { control } = useForm({});
  const [multipleItems, setMultipleItems] = useState([{key: 1}])
  const addObjectHandler = () =>{
    let length = multipleItems?.length
    multipleItems.push({key: length + 1})
    setMultipleItems([...multipleItems])
  } 

  const delObjectHandler = (item) => {
    let tempArr = multipleItems?.filter(obj=> obj?.key != item?.key)
    setMultipleItems([...tempArr])
  }
  return (
    <div className="flex flex-col gap-y-4">
      {multipleItems?.length > 0 && multipleItems?.map((item, ind)=>{
        return (
          <div key={ind} className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px]">
        <div className="flex flex-col">
          <label className="text-[#111111] tracking-[-0.6px]">
            Company Name
          </label>
          <InputField
            name="name"
            placeholder="Philip Morris s.p.a."
            control={control}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#111111] tracking-[-0.6px]">Job</label>
          <InputField name="name" placeholder="Employee" control={control} />
        </div>
        <div className="flex gap-x-4">
          <div className="flex-col w-[30%]">
            <label className="text-[#111111] tracking-[-0.6px]">
              From date
            </label>
            <DatePickerFeild
              name="onset_date"
              title="08-05-1997"
              control={control}
              dateTime={false}
              minDate={new Date()}
            />
          </div>
          <div className="flex-col w-[30%]">
            <label className="text-[#111111] tracking-[-0.6px]">To date</label>
            <DatePickerFeild
              name="onset_date"
              title="08-05-1997"
              control={control}
              dateTime={false}
              minDate={new Date()}
            />
          </div>
        </div>
        <div className="flex-col w-[62%]">
          <label className="text-[#111111] tracking-[-0.6px]">
            Contract type
          </label>
          <ReactSelectField
            name="surname"
            placeholder="Permanent contractM"
            control={control}
          />
        </div>
        <div className="flex gap-x-3 items-center py-4 cursor-pointer" onClick={()=> delObjectHandler(item)}>
          <Image
            src={DeleteIcon}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
          <p className="tracking-[-0.6px] text-delete">
            Delete this work experience
          </p>
        </div>
      </div>
        )
      })}
      
      <div className="flex items-center gap-x-3 py-6 px-8 border border-paragraph rounded-[16px] cursor-pointer" onClick={addObjectHandler}>
        <Image
          src={AddIcon}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
        <p className="tracking-[-0.6px] text-black">
        Add work experience
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
