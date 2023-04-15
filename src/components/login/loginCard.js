import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import ReactSelectField from "../common/reactSelectField";
import InfoCircle from "../../../public/assets/icons/info-circle.svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/actions/authActions";
import InputField from "../common/inputField";
import { useRouter } from "next/router";
import Eye from "../../../public/assets/icons/eye.svg";
import EyeSlash from "../../../public/assets/icons/eye-slash.png";


const LoginCard = () => {
  const { control, formState: { errors }, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const showHidePassword = () =>{
    if(showPassword != 'password'){
      setShowPassword('password')
    }else{
      setShowPassword('text')
    }
  }
  
  const onSubmit = async (data) => {
    dispatch(loginUser(router, data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-6 bg-footer-bar rounded-2xl px-10 py-10 text-[18px] xl:text-[20px]">
        <p className="text-hero font-semibold text-[26px] xl:text-[30px] tracking-[-0.9px] pb-6">
          Log in your reserved area
        </p>
        <div className="flex flex-col gap-y-1 w-full ">
          <label className="text-black">Email address</label>
          <div className="bg-white w-[466px]">
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
                  message: "Please enter valid email"
                }
              }}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <label className="text-black">Password</label>
          <div className="relative bg-white w-[466px]">
            <InputField
              name="password"
              placeholder="Enter your password ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password required!",
                }
              }}
              errors={errors}
              type={showPassword}
            />
            {showPassword == 'password' ? 
            <Image style={{position: 'absolute', top: 10, right: 10, height: '24px', width: '24px'}} src={Eye} alt="" onClick={showHidePassword}/>
            :
            <Image style={{position: 'absolute', top: 10, right: 10, height: '24px', width: '24px'}} src={EyeSlash} alt="" onClick={showHidePassword}/>
          }
          </div>
        </div>

        <div className="flex gap-x-4 pb-4">
          <p className="text-hero tracking-[-0.6px]">Forgot your password?</p>
          <Image
            src={InfoCircle}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
        </div>
        <div className="w-full">
          <Button
            title="Login"
            ring={true}
            style={"w-full py-4 bg-[#B433F8] text-white"}
          />
        </div>
        <div className="flex justify-center gap-x-2">
          <p className="text-black tracking-[-0.6px]">
            Don’t have an account yet?
          </p>
          <Link href={"/register"}>
            <p className="text-hero tracking-[-0.6px]">Register here!</p>
          </Link>
        </div>
      </div>
     </form>
  );
};

export default LoginCard;
