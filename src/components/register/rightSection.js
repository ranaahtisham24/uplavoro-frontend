import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import LinkedIn from "../../../public/assets/icons/linkedin.svg";
import Google from "../../../public/assets/icons/google.svg";
import ReactSelectField from "../common/reactSelectField";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import CheckBox from "../common/checkBox";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/actions/authActions";
import InputField from "../common/inputField";
import { signIn, useSession } from "next-auth/react";

const checkboxArray = [
  {
    id: 1,
    name: "I want to be updated on opportunities, news, promotional offers and other initiatives designed for you as indicated in the privacy policy in point X",
  },
  {
    id: 2,
    name: "I agree to the promotion of your application with the UP Jobs and potential group customers, through the use of your images, audio and video, as indicated in the privacy policy in point X",
  },
  {
    id: 3,
    name: "I consent to the use of my personal data for online marketing purposes as indicated in the privacy policy at point X",
  },
  {
    id: 4,
    name: "I agree to the promotion of your application with the UP Jobs and potential group customers, through the use of your images, audio and video, as indicated in the information privacy at point X",
  },
  { id: 5, name: "I have read and understood the UP privacy policy" },
];

const RightSection = () => {
  const { data } = useSession();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const router = useRouter();
  const dispatch = useDispatch();
  const registerHandler = () => {
    dispatch(registerUser());
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setFile(file);
  };

  return (
    <div className="bg-footer-bar py-10 px-16 pb-20">
      <div className="md:w-[95%] xl:w-[80%] flex flex-col gap-y-6">
        <div className="flex gap-x-2 justify-end md:text-[18px] xl:text-[20px]">
          <p className="text-gray-300">Already have an account?</p>
          <Link href={"/login"}>
            <p className="text-hero">Login</p>
          </Link>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-hero text-[30px] font-semibold tracking-[-0.9px]">
            Subscribe with one click!
          </p>
          <div className="flex gap-x-4">
            <div
              onClick={() => signIn("linkedin")}
              className="bg-white flex gap-x-4 w-[437px] h-[74px] p-2 items-center border border-gray-100 rounded-md"
            >
              <Image src={LinkedIn} alt="" style={{ width: "", height: "" }} />
              <p className="text-black text-[18px] tracking-[-0.54px]">Register with LinkedIn</p>
            </div>
            <div
              onClick={() => signIn("google")}
              className="bg-white flex gap-x-4 w-[437px] h-[74px] p-2 items-center border border-gray-100 rounded-md"
            >
              <Image src={Google} alt="" style={{ width: "", height: "" }} />
              <p className="text-black text-[18px] tracking-[-0.54px]">Register with Google</p>
            </div>
          </div>

          <hr class="h-px my-2 text-black bg-black border-0 dark:bg-gray-700" />
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-hero text-[30px] font-semibold tracking-[-0.9px]">
            Subscribe with your email
          </p>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1 w-full">
              <label className="text-black text-[20px] tracking-[-0.6px]">Email address</label>
              <div className="bg-white">
                <InputField
                  name="email"
                  placeholder="Enter your email ..."
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Email required!",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter valid email",
                    },
                  }}
                  errors={errors}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1 w-full">
              <label className="text-black text-[20px] tracking-[-0.6px]">Tax ID code</label>
              <div className="bg-white">
                <InputField
                  name="taxIdCode"
                  placeholder="Enter your Tax Id ..."
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Tax Id required!",
                    },
                  }}
                  errors={errors}
                />
              </div>
            </div>

            <CheckBox
              title={"I don’t have a tax code"}
              control={control}
              name={"taxCode"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-hero text-[30px] font-semibold tracking-[-0.9px]">
            Attach your curriculum
          </p>
          <form onSubmit={handleSubmit}>
            {/* <input className="flex flex-col w-full items-center border-2 py-10 px-2 border-dashed border-gray-300 rounded-md gap-y-4" type="file" onChange={handleFileChange} > */}
            <div className="flex flex-col items-center border-2 py-10 px-2 border-dashed border-gray-300 rounded-md gap-y-4" type="file" onClick={()=> document.getElementById('fileInput').click()} onChange={handleFileChange}>
              <p className="text-hero">Choose a file from your device</p>
              <input type="file" id="fileInput" className="sr-only"/>
            </div>
            {/* </input> */}
          </form>
            <p className="text-black">Formats: DOC, DOCX, PDF | Maximum 5Mb</p>
        </div>

        <div className="flex flex-col gap-y-4 w-full">
          {checkboxArray?.map((item, ind) => {
            return (
              <CheckBox
                key={ind}
                title={item.name}
                control={control}
                name={item.name}
              />
            );
          })}
        </div>

        <div className="w-full" onClick={() => router.push("/settings")}>
          <Button
            title={"Join the family"}
            style={"w-full bg-button-full text-white py-4"}
            onClick={registerHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
