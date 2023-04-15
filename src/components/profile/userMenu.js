import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import ProfileImg from "../../../public/assets/images/young1.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/actions/authActions";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserMenu = () => {
    const auth = useSelector(state=> state?.auth)
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        dispatch(logoutUser(auth?.token))
    }
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="w-[56px] h-[56px] xl:w-[70px] xl:h-[70px] flex rounded-full bg-gray-800 text-sm focus:outline-none ">
          <span className="sr-only">Open user menu</span>
          <Image
            src={ProfileImg}
            alt=""
            style={{ borderRadius: '100%' }}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/profile"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <p
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                )}
                onClick={logoutHandler}
              >
                Sign out
              </p>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
