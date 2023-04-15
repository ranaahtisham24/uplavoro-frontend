import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { cvHeadings } from "./cvData";
import ArrowDown from '../../../public/assets/icons/arrow-down.svg'
import ArrowRight from '../../../public/assets/icons/arrow-right-thin.svg'
import Image from "next/image";
import Address from "./cv/address";
import WorkExperience from "./cv/workExperience";
import CoverLetter from "./cv/coverLetter";
import StudyAndTraining from "./cv/studyAndTraining";
import KnownLanguages from "./cv/knownLanguages";
import SoftSkills from "./cv/softSkills";
import Certificates from "./cv/certificates";
import Licenses from "./cv/licenses";
import Disponibilita from "./cv/disponibilita";
import SocialProfiles from "./cv/socialProfiles";

const CreateEditCV = () => {
  const [accordionForm, setAccordionForm] = useState([])

  useEffect(()=>{
    setAccordionForm(cvHeadings)
  },[])
  const accordionHandler = (item) =>{
    let tempObj = null;
    let indexObj = accordionForm?.findIndex((obj, ind)=> item?.slug == obj?.slug)
    tempObj = accordionForm?.find((obj, ind)=> item?.slug == obj?.slug)
    if(tempObj != null){
      if(tempObj?.state == 'open'){
        tempObj.state = 'close'
      }else{
        tempObj.state = 'open'
      }
    }
    accordionForm.splice(indexObj, 1, tempObj)
    setAccordionForm([...accordionForm])
  }
  return (
    <div className="pl-6 py-6 flex flex-col gap-y-4">
      <p className="text-hero text-[22px] 2xl:text-[30px] tracking-[-0.9px] font-extrabold">
        My Curriculum
      </p>
      <div className="flex flex-col gap-y-3 divide-y divide-black">
        {accordionForm?.map((item, ind) => {
          return (
            <div key={ind}>
              <div
                className="flex items-center gap-x-4 py-4 cursor-pointer"
                onClick={() => accordionHandler(item)}
              >
                <h2 className="text-lg font-medium">{item?.heading}</h2>
                {item?.state == 'open' ?   
                <Image src={ArrowDown} alt='' style={{height: '20px', width: '20px'}}/>
                :
                <Image src={ArrowRight} alt='' style={{height: '14px', width: '14px'}}/>
                }
              </div>
              {item?.state == 'open' &&
              <Transition
                show={true}
                enter="transition duration-150 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div className="pb-4 pr-36 xl:pr-72 bg-white rounded-lg">
                  {(item?.slug == 'address' && item?.state == 'open') && <Address/>}
                  {(item?.slug == 'work_experiences' && item?.state == 'open') && <WorkExperience/>}
                  {(item?.slug == 'cover_letter' && item?.state == 'open') && <CoverLetter/>}
                  {(item?.slug == 'study_and_training' && item?.state == 'open') && <StudyAndTraining/>}
                  {(item?.slug == 'known_languages' && item?.state == 'open') && <KnownLanguages/>}
                  {(item?.slug == 'soft_skills' && item?.state == 'open') && <SoftSkills/>}
                  {(item?.slug == 'certificates' && item?.state == 'open') && <Certificates/>}
                  {(item?.slug == 'licenses' && item?.state == 'open') && <Licenses/>}
                  {(item?.slug == 'disponibilita' && item?.state == 'open') && <Disponibilita/>}
                  {(item?.slug == 'social_profiles' && item?.state == 'open') && <SocialProfiles/>}

                </div>
              </Transition>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateEditCV;
