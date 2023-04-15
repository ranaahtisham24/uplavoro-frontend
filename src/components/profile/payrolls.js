import Image from 'next/image'
import React from 'react'
import Download from '../../../public/assets/icons/download.svg'

const payrollsList = [
  { id: 1, name: 'Paycheck January 2022' },
  { id: 2, name: 'Paycheck February 2022' },
  { id: 3, name: 'Paycheck March 2022' },
  { id: 4, name: 'Paycheck April 2022' },
  { id: 5, name: 'Paycheck May 2022' },
]

const Payrolls = () => {
  return (
    <div className='px-6 py-6 flex flex-col gap-y-4'>
      <p className='text-hero text-[22px] 2xl:text-[30px] tracking-[-0.9px] font-extrabold'>My payrolls</p>
      <div className='flex flex-col gap-y-3'>
        {payrollsList?.map((item, ind) => {
          return (
            <div key={ind} className='flex gap-x-4'>
              <Image src={Download} alt='' style={{ width: '24px', height: '24px' }} />
              <p className='text-hero tracking-[-0.6px]'>{item?.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Payrolls