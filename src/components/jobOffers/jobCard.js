import Image from 'next/image'
import React from 'react'
import StarSlash from '../../../public/assets/icons/star-slash.svg'
import Location from '../../../public/assets/icons/location.svg'
import Award from '../../../public/assets/icons/award.svg'
import Timer from '../../../public/assets/icons/timer.svg'
import CalendarRemove from '../../../public/assets/icons/calendar-remove.svg'

const JobCard = (props) => {
    return (
        <div className={` ${props?.callFrom === 'profile' ? 'md:w-[50%] lg:w-[48%] xl:w-[32%]' : 'md:w-[32%] xl:w-[32%]'}  h-[304px] flex flex-col gap-y-2 bg-white border border-gray-100 rounded-[12px] p-6`}>
            <div className='flex justify-between items-end'>
                <p className='text-[13px] tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                <Image src={StarSlash} alt='' style={{ width: '24px', height: '24px' }} />
            </div>
            <div className='flex flex-wrap'>
                <p className='text-[18px] tracking-[-0.69px] text-black font-semibold break-words'>
                    Archive clerk part time
                    warehouse employee
                </p>
            </div>

            <div className='flex flex-col gap-y-4 pt-4'>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Location} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className='text-[13px] tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Award} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className='text-[13px] tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Timer} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className='text-[13px] tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={CalendarRemove} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className='text-[13px] tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard