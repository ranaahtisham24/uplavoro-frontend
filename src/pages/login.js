import React from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/images/Logo.svg'
import ArrowWhite from '../../public/assets/icons/arrow-white.svg'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import LoginCard from '../components/login/loginCard'

const Login = ({ loginProp }) => {

  const dispatch = useDispatch();
  
  return (
    <div className='w-full min-h-screen py-6 flex flex-col items-center gap-y-10 bg-hero'>
      <Link href={'/'}>
        <Image src={Logo} alt='' style={{ width: '102.73px', height: '59.99px' }} />
      </Link>
        <LoginCard />
      <div className='flex gap-x-10 pb-4'>
        <p className='text-white font-light text-[18px] xl:text-[20px] tracking-[-0.6px]'>Are you a company? Access the company portal from here</p>
        <Image src={ArrowWhite} alt='' style={{ width: '24px', height: '24px' }} />
      </div>
    </div>
  )
}

Login.getInitialProps = async () => {
  const notShowHeader = true;
  return { notShowHeader }
}


export default Login