import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/assets/images/Logo.svg";
import Button from "../common/button";
import UserMenu from "../profile/userMenu";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Job offers", href: "joboffers" },
  { name: "Companies", href: "companies" },
  { name: "About us", href: "#" },
  { name: "Work with us", href: "#" },
  { name: "Branches", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const auth = useSelector(state => state?.auth);
  
  return (
    <header className="bg-hero">
      <nav
        className="flex items-center justify-evenly py-6 md:px-10 xl:px-20"
        aria-label="Global"
      >
        <div className="flex lg:flex w-[80px] xl:w-[120px]">
          <Link href="/">
            <Image
              style={{ width: "102.73px", height: "59.99px" }}
              src={Logo}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="hidden lg:flex md:gap-x-6 xl:gap-x-8 pl-10">
          {navigation.map((item, ind) => (
            <Link key={ind} href={item.href}>
              <p
                key={item.name}
                className="xl:text-[20px] font-thin leading-6 text-white"
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end md:gap-x-4 xl:gap-x-6">
          {auth?.token ? (
            <UserMenu />
          ) : (
            <>
              <Link href="/login">
                <Button title="Login" style={"text-white xl:text-[20px]"} />
              </Link>
              <Link href="/register">
                <Button
                  title="Register"
                  ring={true}
                  style={"text-hero bg-white xl:text-[20px]"}
                />
              </Link>
            </>
          )}
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="">Open menu</span>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
            <a
              href="#"
              className="ml-auto rounded-md py-2 px-3 text-sm font-semibold text-black shadow-sm "
            >
              Sign up
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
