import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Logo from '../../../public/assets/images/Logo.svg'
import ArrowWhite from '../../../public/assets/icons/arrow-white.svg'
import Note2 from '../../../public/assets/icons/note-2.svg'
import Briefcase from '../../../public/assets/icons/briefcase.svg'
import Star from '../../../public/assets/icons/star.svg'
import Send2 from '../../../public/assets/icons/send-2.svg'


const LeftSection = () => {
    
    return (
        <div className={`flex flex-col md:pl-16 xl:pl-44 gap-y-8 bg-hero py-6 h-[100%]`}>
            <Link href={'/'}>
                <Image src={Logo} alt='' style={{ width: '102.73px', height: '59.99px' }} />
            </Link>
            <div className='flex flex-col pt-6 font-extrabold text-white md:text-[32px] lg:text-[36px] xl:text-[45px]'>
                <p className='flex items-end'>The first step
                    <br />towards a new
                </p>
                <div className='flex gap-x-4 items-center'>
                    <p className='flex items-end '>
                        future
                    </p>
                    <Image src={ArrowWhite} alt='' style={{ width: '24px', height: '24px' }} />
                </div>

            </div>

            <div className='flex flex-col gap-y-2 text-white text-[18px] font-light tracking-[-0.6px]'>
                <div className='flex gap-x-2'>
                    <Image src={Note2} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=''>Create and share your CV</p>
                </div>
                <div className='flex gap-x-2 '>
                    <Image src={Briefcase} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=' '>Find the job that’s right for you</p>
                </div>
                <div className='flex gap-x-2'>
                    <Image src={Star} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=''>Save jobs to your favorites</p>
                </div>
                <div className='flex gap-x-2'>
                    <Image src={Send2} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=''>Apply and send your CV</p>
                </div>
            </div>
        </div>
    )
}

export default LeftSection