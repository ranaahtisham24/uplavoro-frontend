import Button from '../../common/button'
import React from 'react'

const BrowseJobs = () => {
  return (
    <div className='bg-hero px-40 py-20'>
      <div className='flex flex-col items-center gap-y-1'>
        <p className='text-white text-[32px] xl:text-[50px] font-extrabold'>What are you waiting for?</p>
        <p className='text-white text-[32px] xl:text-[50px] font-extrabold'>Find the job that’s right for you!</p>
        <div className='pt-6'>
          <Button title='Browse all offers' style='bg-white text-hero xl:text-[20px]' ring={true} />
        </div>
      </div>
    </div>
  )
}

export default BrowseJobs