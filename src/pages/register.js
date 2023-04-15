import LeftSection from '../components/register/leftSection';
import React, { useState } from 'react'
import RightSection from '../components/register/rightSection';

const Register = () => {
  return (
    <div className='flex w-full'>
      <div className={`w-[35%]`}>
        <LeftSection />
      </div>
      <div className='w-[65%]'>
        <RightSection />
      </div>
    </div>
  )
}

Register.getInitialProps = async () => {
  const notShowHeader = true;
  return { notShowHeader }
}

export default Register