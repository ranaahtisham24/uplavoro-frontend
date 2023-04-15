import TitleCard from "@/components/common/titleCard";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BrowseJobs from "@/components/landing/components/browseJobs";
import Clipboard from "@/components/svgs/clipboard";
import Payroll from "@/components/svgs/payroll";
import Star from "@/components/svgs/star";
import Briefcase from "@/components/svgs/briefcase";
import Note from "@/components/svgs/note";
import Notification from "@/components/svgs/notification";
import ProfileCircle from "@/components/svgs/profileCircle";
import Contracts from "@/components/profile/contracts";
import Payrolls from "@/components/profile/payrolls";
import FavouriteOffers from "@/components/profile/favouriteOffers";
import MyApplications from "@/components/profile/myApplications";
import CreateEditCV from "@/components/profile/createEditCV";
import NotificationsEmailSMS from "@/components/profile/notificationsEmailSMS";
import PersonalData from "@/components/profile/personalData";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "@/components/privateRoute";
import { axiosBaseQuery } from "@/redux/axiosBaseQuery";
import { getUser } from "@/redux/actions/authActions";

const profileTabs = [
  {
    slug: "contracts",
    title: "My contracts",
    link: "/profile/personal-information",
    icon: Clipboard,
  },
  {
    slug: "payrolls",
    title: "My payrolls",
    link: "/profile/personal-information",
    icon: Payroll,
  },
  {
    slug: "offers",
    title: "Favourite offers",
    link: "/profile/personal-information",
    icon: Star,
  },
  {
    slug: "applications",
    title: "My applications",
    link: "/profile/personal-information",
    icon: Briefcase,
  },
  {
    slug: "create_edit_cv",
    title: "Create/edit my CV",
    link: "/profile/personal-information",
    icon: Note,
  },
  {
    slug: "notifications",
    title: "Notifiations, emails, SMS",
    link: "/profile/personal-information",
    icon: Notification,
  },
  {
    slug: "personal_data",
    title: "My personal data",
    link: "/profile/personal-information",
    icon: ProfileCircle,
  },
];

const Profile = () => {
  const auth = useSelector((state) => state?.auth);
  const { user } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplayedTab(profileTabs[0]);
    setSelectedTabIndex(0);
  }, []);

  useEffect(() => {
    if (auth?.token) {
        dispatch(getUser(auth?.token))
    }
  }, [auth?.token]);

  const [seletedTabIndex, setSelectedTabIndex] = useState("");
  const [displayedTab, setDisplayedTab] = useState("");
  const tabHandler = (tab, index) => {
    setDisplayedTab(tab);
    setSelectedTabIndex(index);
  };

  return (
    <div>
      <TitleCard
        heading={`Hello, ${user?.name}`}
        paragraphWithBr={true}
        beforeBr={
          "From your personal area you can manage all your personal information,"
        }
        afterBr={" create your CV and share it."}
      />
      <div className="flex w-full gap-y-4">
        <div className="w-[35%] flex justify-end bg-footer-bar px-6 py-16">
          <div className="flex flex-col">
            <p className="text-hero text-[32px] font-extrabold">Profile</p>
            <div className="flex flex-col py-2">
              {profileTabs?.map((tab, index) => {
                return (
                  <div
                    key={index}
                    className={`flex lg:w-[300px] xl:w-[354px] my-2 px-4 border ${
                      seletedTabIndex === index
                        ? "border-[#500e9e]"
                        : "border-paragraph"
                    } rounded-md items-center justify-between gap-x-4 py-4 cursor-pointer`}
                    onClick={() => tabHandler(tab, index)}
                  >
                    <p
                      className={`${
                        seletedTabIndex == index
                          ? "text-[#500e9e]"
                          : "text-paragraph"
                      }  tracking-[-0.6px]`}
                    >
                      {tab?.title}
                    </p>
                    <div className="w-[24px] h-[24px]">
                      {tab?.icon !== "" && (
                        <tab.icon
                          color={
                            seletedTabIndex == index ? "#500e9e" : "#696969"
                          }
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={`w-[65%] bg-white ${
            displayedTab?.slug === "create_edit_cv" ? "pl-12" : "px-12"
          }  py-12`}
        >
          <div
            className={`${
              displayedTab?.slug === "create_edit_cv" ? "w-full" : "w-[90%]"
            }`}
          >
            {displayedTab?.slug === "contracts" && <Contracts />}
            {displayedTab?.slug === "payrolls" && <Payrolls />}
            {displayedTab?.slug === "offers" && <FavouriteOffers />}
            {displayedTab?.slug === "applications" && <MyApplications />}
            {displayedTab?.slug === "create_edit_cv" && <CreateEditCV />}
            {displayedTab?.slug === "notifications" && (
              <NotificationsEmailSMS />
            )}
            {displayedTab?.slug === "personal_data" && <PersonalData user={user}/>}
          </div>
        </div>
      </div>
      <BrowseJobs />
    </div>
  );
};



export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  
  return {
    props: {
      
    },
  };
}

export default withAuth(Profile);
