import InputField from "@/components/common/inputField";
import ReactSelectField from "@/components/common/reactSelectField";
import React from "react";
import { useForm } from 'react-hook-form';

const Address = () => {
  const { control } = useForm({});
  return (
    <div className="flex gap-x-2">
      <div className="flex flex-col w-[49%]">
        <label className="text-[#111111] tracking-[-0.6px]">
          Living address
        </label>
        <InputField
          name="name"
          placeholder="Mura di Porta Galliera, 3"
          control={control}
        />
      </div>
      <div className="flex gap-x-2 w-[49%]">
        <div className="flex-col w-[75%]">
          <label className="text-[#111111] tracking-[-0.6px]">
            Living city
          </label>
          <ReactSelectField
            name="surname"
            placeholder="Bologna"
            control={control}
          />
        </div>
        <div className="flex-col w-[25%]">
          <label className="text-[#111111] tracking-[-0.6px]">CAP</label>
          <InputField name="name" placeholder="40124" control={control} />
        </div>
      </div>
    </div>
  );
};

export default Address;
