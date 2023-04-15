import React from 'react'
import Location from '../../../public/assets/icons/location.svg'
import Award from '../../../public/assets/icons/award.svg'
import Timer from '../../../public/assets/icons/timer.svg'
import CalendarRemove from '../../../public/assets/icons/calendar-remove.svg'
import ArrowWhite from '../../../public/assets/icons/arrow-white.svg'
import Image from 'next/image'
import Star from '../svgs/star'

const PostDetail = (props) => {
    return (
        <div className='flex flex-col w-[90%] gap-y-4'>
        <div className={`flex flex-col gap-y-2 bg-gray-200 rounded-[12px] p-8`}>
                <p className='text-[30px] tracking-[-0.69px] text-black font-extrabold break-words'>
                   Details
                </p>

            <div className='flex flex-col gap-y-4 py-4'>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Location} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Award} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Timer} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={CalendarRemove} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>Published 4 days ago</p>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-between rounded-md bg-[#B433F8] px-8 py-4'>
            <p className='text-white font-semibold'>Apply</p>
            <Image src={ArrowWhite} alt='' style={{ width: '24px', height: '24px' }} />
        </div>

        <div className='w-full flex justify-between rounded-md border border-[#B433F8] px-8 py-4'>
            <p className='font-semibold text-[#B433F8]'>Add to favorites</p>
            <Star color='#B433F8'/>
        </div>
        </div>
    )
}

export default PostDetail