import React from 'react'
import JobCard from '../jobOffers/jobCard'

const FavouriteOffers = () => {
  return (
    <div className='px-6 py-6 flex flex-col gap-y-4'>
      <p className='text-hero text-[22px] 2xl:text-[30px] tracking-[-0.9px] font-extrabold'>Favorites offers</p>
      <div className='flex flex-wrap gap-3'>
        <JobCard callFrom='profile'/>
        <JobCard callFrom='profile'/>
        <JobCard callFrom='profile'/>
        <JobCard callFrom='profile'/>
        <JobCard callFrom='profile'/>
        <JobCard callFrom='profile'/>
      </div>
    </div>
  )
}

export default FavouriteOffers