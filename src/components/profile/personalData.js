import React from 'react'
import CompleteProfileForm from '../settings/completeProfileForm'

const PersonalData = ({user}) => {
  return (
    <div className='px-6 py-6 flex flex-col gap-y-4'>
      <p className='text-hero text-[22px] 2xl:text-[30px] tracking-[-0.9px] font-extrabold'>My personal data</p>
      <div className='w-full'>
        <CompleteProfileForm callFrom='from_profile' user={user}/>
      </div>
    </div>
  )
}

export default PersonalData