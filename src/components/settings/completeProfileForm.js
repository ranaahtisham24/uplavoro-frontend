import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import ReactSelectField from "../common/reactSelectField";
import InputField from "../common/inputField";
import DatePickerFeild from "../common/datePicker";
import MessageQuestion from "../../../public/assets/icons/message-question.svg";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/actions/authActions";

const CompleteProfileForm = (props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let defaultPassword = 'Pa$$word123'
    if (data) {
      for (let key in data) {
        if(data[key] === undefined){
          data[key]  = "";
        }        
      }
      let postData = {...data, password: defaultPassword, type: 'web'}
      dispatch(registerUser(postData))
    }

  };

  useEffect(() => {
    if (props?.user) {
      setValue("name", props?.user?.name);
      setValue("surname", props?.user?.surname);
      setValue("email", props?.user?.email);
      setValue("phone", props?.user?.phone);
      setValue("gender", props?.user?.gender);
      setValue("birth_date", props?.user?.birth_date);
    }
  }, [props?.user]);
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`w-full flex justify-start text-[18px] xl:text-[20px] ${
          props?.callFrom === "from_profile"
            ? "bg-white py-2 2xl:px-0"
            : "bg-footer-bar py-12 md:px-20 lg:px-36 xl:px-40 2xl:px-72"
        }`}
      >
        <div
          className={`${
            props?.callFrom === "from_profile"
              ? "2xl:w-[100%]"
              : "md:w-[100%] lg:w-[75%] xl:w-[60%]"
          } flex flex-col gap-y-6`}
        >
          {/* <div className='desktop:pr-80'> */}
          {props?.callFrom === "from_profile" ? (
            ""
          ) : (
            <p className="text-black text-[24px] xl:text-[30px] tracking-[-0.9px]">
              Complete your profile with this information to complete register
              and enter your reserved area
            </p>
          )}
          {/* </div> */}
          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px] text-[18px] xl:text-[20px]">Name</label>
              <InputField
                name="name"
                placeholder="Mario"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Name required!",
                  },
                }}
                errors={errors}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Surname
              </label>
              <InputField
                name="surname"
                placeholder="Rossi"
                control={control}
              />
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Tax ID code
              </label>
              <InputField
                name="tax_id_code"
                placeholder="MRRSI97E08A944Y"
                control={control}
              />
            </div>
            <div className="flex gap-x-2 w-[49%]">
              <div className="flex-col w-[25%]">
                <label className="text-black tracking-[-0.6px]">
                  Gender
                </label>
                <ReactSelectField
                  name="gender"
                  control={control}
                  defaultValue={{id: 'male', label: 'M'}}
                  optionData={[{id: 'male', label: 'M'}, {id: 'female', label: 'F'}]}
                />
              </div>
              <div className="flex-col w-[75%]">
                <label className="text-black tracking-[-0.6px]">
                  Birth Date
                </label>
                <DatePickerFeild
                  name="birth_date"
                  title="08-05-1997"
                  control={control}
                  dateTime={false}
                  minDate={new Date()}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Birth nation
              </label>
              <InputField
                name="birth_nation"
                placeholder="Italia"
                control={control}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Birth City
              </label>
              <InputField
                name="birth_city"
                placeholder="Bologna"
                control={control}
              />
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Residential address
              </label>
              <InputField
                name="residence_address"
                placeholder="Mura di Porta Galliera, 3"
                control={control}
              />
            </div>
            <div className="flex gap-x-2 w-[49%]">
              <div className="flex-col w-[75%]">
                <label className="text-black tracking-[-0.6px]">
                  Residential city
                </label>
                <ReactSelectField
                  name="residence_city"
                  placeholder="Bologna"
                  control={control}
                />
              </div>
              <div className="flex-col w-[25%]">
                <label className="text-black tracking-[-0.6px]">CAP</label>
                <InputField
                  name="residence_cap"
                  placeholder="40124"
                  control={control}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Living address
              </label>
              <InputField
                name="living_address"
                placeholder="Mura di Porta Galliera, 3"
                control={control}
              />
            </div>
            <div className="flex gap-x-2 w-[49%]">
              <div className="flex-col w-[75%]">
                <label className="text-black tracking-[-0.6px]">
                  Living city
                </label>
                <ReactSelectField
                  name="living_city"
                  placeholder="Bologna"
                  control={control}
                />
              </div>
              <div className="flex-col w-[25%]">
                <label className="text-black tracking-[-0.6px]">CAP</label>
                <InputField
                  name="living_cap"
                  placeholder="40124"
                  control={control}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">Email</label>
              <InputField
                name="email"
                placeholder="orlandi.enri@gmail.com"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Email required!",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter valid email"
                  }
                }}
                errors={errors}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">Phone</label>
              <InputField
                name="phone"
                placeholder="3273498412"
                control={control}
              />
            </div>
          </div>

          {props?.callFrom === "from_profile" ? (
            ""
          ) : (
            <div className="flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                How did you find out about UP?
              </label>
              <ReactSelectField
                name="how_to_find"
                placeholder="Via Facebook"
                control={control}
              />
            </div>
          )}

          {props?.callFrom === "from_profile" ? (
            ""
          ) : (
            <p className="text-hero tracking-[-0.6px]">
              Attention, the data entered will not be modifiable (excluding
              telephone and email) verify correctness before saving!
            </p>
          )}
          {props?.callFrom === "from_profile" && (
            <div className="flex gap-x-4">
              <p className="text-hero tracking-[-0.6px]">
                Vuoi modificare i tuoi dati? Contatta il supporto
              </p>
              <Image
                src={MessageQuestion}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          )}
          {props?.callFrom === "from_profile" ? (
            ""
          ) : (
            <Button
              title="Save settings"
              ring={true}
              style={"w-full py-4 bg-[#B433F8] text-white"}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default CompleteProfileForm;
