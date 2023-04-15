import Image from 'next/image'
import React from 'react'
import Download from '../../../public/assets/icons/download.svg'

const Contracts = () => {
  return (
    <div className='px-6 py-6 flex flex-col gap-y-4'>
      <p className='text-hero text-[22px] 2xl:text-[30px] tracking-[-0.9px] font-extrabold'>My work contract</p>
      <div className='flex gap-x-4'>
        <p className='text-hero tracking-[-0.6px]'>Download contract in PDF</p>
        <Image src={Download} alt='' style={{width: '24px', height: '24px'}}/>
      </div> 
    </div>
  )
}

export default Contracts